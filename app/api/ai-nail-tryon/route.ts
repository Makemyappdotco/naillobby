import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent';

type TryOnPayload = {
  handImage?: string;
  referenceImage?: string | null;
  category?: string;
  prompt?: string;
};

function splitDataUrl(dataUrl: string) {
  const match = dataUrl.match(/^data:(.*?);base64,(.*)$/);
  if (!match) return null;
  return {
    mimeType: match[1],
    data: match[2],
  };
}

function imagePart(dataUrl?: string | null) {
  if (!dataUrl) return null;
  const image = splitDataUrl(dataUrl);
  if (!image) return null;
  return {
    inlineData: {
      mimeType: image.mimeType,
      data: image.data,
    },
  };
}

function buildPrompt(category: string, prompt: string, hasReference: boolean) {
  return `You are creating a premium realistic AI nail try-on preview for Nothing Before Nails, a premium nail studio in Model Town, Delhi.

Use the first uploaded image as the exact customer hand image. Preserve the same hand, skin tone, finger shape, pose, background, jewellery, mehendi if present, camera angle, shadows, lighting, and realism.

Change only the visible nail area. Do not change the hand, fingers, skin, background, jewellery or pose. Do not add extra fingers. Do not distort anatomy. Keep the result realistic, salon-ready and premium.

Selected category: ${category}
Customer desired look: ${prompt}
${hasReference ? 'A second image is provided as nail design inspiration. Apply that nail design accurately to the visible nails while keeping it realistic for the customer hand.' : 'No reference image is provided. Create the nail look based on the selected category and customer prompt.'}

Output only one final realistic image. No text, no labels, no watermark.`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as TryOnPayload;
    const hand = imagePart(body.handImage);
    const reference = imagePart(body.referenceImage || null);

    if (!hand) {
      return NextResponse.json({ error: 'Hand image is required.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        image: body.handImage,
        mode: 'mock',
        warning: 'Gemini API key is not configured. Add GEMINI_API_KEY in environment variables to enable real AI generation.',
      });
    }

    const prompt = buildPrompt(body.category || 'Custom Nails', body.prompt || 'premium realistic nail design', Boolean(reference));
    const parts = [{ text: prompt }, hand];
    if (reference) parts.push(reference);

    const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        error: data?.error?.message || 'Gemini image generation failed.',
      }, { status: response.status });
    }

    const generatedPart = data?.candidates?.[0]?.content?.parts?.find((part: any) => part?.inlineData?.data);
    const generatedData = generatedPart?.inlineData?.data;
    const mimeType = generatedPart?.inlineData?.mimeType || 'image/png';

    if (!generatedData) {
      return NextResponse.json({ error: 'Gemini did not return an image. Try another hand photo or design prompt.' }, { status: 502 });
    }

    return NextResponse.json({
      image: `data:${mimeType};base64,${generatedData}`,
      mode: 'live',
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unexpected server error.',
    }, { status: 500 });
  }
}
