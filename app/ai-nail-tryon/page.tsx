'use client';

import { ChangeEvent, useMemo, useState } from 'react';

const categories = [
  {
    name: 'Bridal Nails',
    prompt: 'premium Indian bridal nail extensions, soft nude pink base, fine gold details, pearl accents, elegant wedding finish',
    tag: 'Most booked',
  },
  {
    name: 'Chrome Nails',
    prompt: 'glazed chrome nails, clean reflective finish, soft luxury shine, salon realistic',
    tag: 'Trending',
  },
  {
    name: 'Ombre Nails',
    prompt: 'soft ombre nails, nude to milky white fade, clean premium finish',
    tag: 'Elegant',
  },
  {
    name: 'French Tips',
    prompt: 'modern french tips, slim white tip, glossy nude base, clean wearable look',
    tag: 'Classic',
  },
  {
    name: 'Minimal Nails',
    prompt: 'minimal nude nails, tiny gold line art, premium clean girl style',
    tag: 'Daily wear',
  },
  {
    name: 'Glitter Nails',
    prompt: 'soft glitter nails, champagne shimmer, party ready but classy',
    tag: 'Party',
  },
  {
    name: '3D Art Nails',
    prompt: 'premium 3D nail art, subtle floral sculpted details, editorial salon look',
    tag: 'Statement',
  },
  {
    name: 'Office-Friendly Nails',
    prompt: 'short office friendly nails, nude beige polish, clean glossy finish',
    tag: 'Subtle',
  },
];

const quickPrompts = [
  'Make it bridal but not loud',
  'Make it clean, nude and premium',
  'Make it bold for a weekend party',
  'Make it trendy but wearable',
];

export default function AINailTryOnPage() {
  const [handImage, setHandImage] = useState<string | null>(null);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [leadName, setLeadName] = useState('');
  const [phone, setPhone] = useState('');

  const finalPrompt = useMemo(() => {
    const userPrompt = customPrompt.trim();
    return userPrompt || selectedCategory.prompt;
  }, [customPrompt, selectedCategory]);

  function readFile(file: File, setter: (value: string) => void) {
    const reader = new FileReader();
    reader.onload = () => setter(String(reader.result));
    reader.readAsDataURL(file);
  }

  function handleUpload(event: ChangeEvent<HTMLInputElement>, setter: (value: string) => void) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setError('Image is too heavy. Please upload an image under 8MB.');
      return;
    }
    setError('');
    readFile(file, setter);
  }

  async function generatePreview() {
    if (!handImage) {
      setError('First upload a clear hand photo.');
      return;
    }

    setLoading(true);
    setError('');
    setResultImage(null);

    try {
      const response = await fetch('/api/ai-nail-tryon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          handImage,
          referenceImage,
          category: selectedCategory.name,
          prompt: finalPrompt,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Preview could not be generated.');
      setResultImage(data.image || handImage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setResultImage(handImage);
    } finally {
      setLoading(false);
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Nothing Before Nails, I tried the AI nail preview.\n\nName: ${leadName || 'Not added'}\nPhone: ${phone || 'Not added'}\nLook: ${selectedCategory.name}\nPrompt: ${finalPrompt}\n\nPlease help me book this look.`
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF7EC] text-[#0F2A44]">
      <section className="relative min-h-screen px-5 py-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#E9DCCB] blur-3xl" />
          <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[#D4A24C]/25 blur-3xl" />
          <div className="absolute bottom-[-16rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-white blur-3xl" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#D4A24C]/25 bg-white/55 px-5 py-3 shadow-[0_24px_80px_rgba(15,42,68,0.08)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img src="/nbn-logo.svg" alt="Nothing Before Nails" className="h-12 w-12 object-contain" />
            <div>
              <p className="font-serif text-lg font-semibold tracking-tight">Nothing Before Nails</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[#0F2A44]/55">AI Try-On Studio</p>
            </div>
          </div>
          <a href="https://wa.me/91" className="hidden rounded-full bg-[#0F2A44] px-5 py-3 text-sm font-semibold text-[#FFF7EC] md:block">
            Book Your Slot
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pb-16 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#D4A24C]/35 bg-white/70 px-4 py-2 text-sm font-medium text-[#0F2A44]/75 shadow-sm backdrop-blur">
              Model Town, Delhi • Preview before appointment
            </div>
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#0F2A44] md:text-7xl">
              Not sure what to get? Try it on first.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0F2A44]/72">
              Upload your real hand photo, choose a nail look, and see a realistic AI preview before booking your appointment.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Upload hand', 'Choose design', 'Book the look'].map((step, index) => (
                <div key={step} className="rounded-3xl border border-white bg-white/55 p-4 shadow-[0_18px_50px_rgba(15,42,68,0.08)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A24C]">Step {index + 1}</p>
                  <p className="mt-2 font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white bg-white/60 p-4 shadow-[0_30px_100px_rgba(15,42,68,0.14)] backdrop-blur-xl">
            <div className="grid gap-4 md:grid-cols-2">
              <UploadCard title="Your hand photo" subtitle="Clear nails, good light" image={handImage} onChange={(e) => handleUpload(e, setHandImage)} />
              <UploadCard title="Inspiration image" subtitle="Optional reference" image={referenceImage} onChange={(e) => handleUpload(e, setReferenceImage)} />
            </div>

            <div className="mt-5 rounded-[2rem] bg-[#FFF7EC]/75 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-serif text-2xl font-semibold">Choose your look</p>
                  <p className="text-sm text-[#0F2A44]/60">Pick a category or write your own prompt.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      selectedCategory.name === category.name
                        ? 'border-[#D4A24C] bg-[#0F2A44] text-[#FFF7EC] shadow-lg'
                        : 'border-[#E9DCCB] bg-white/70 text-[#0F2A44] hover:border-[#D4A24C]'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">{category.tag}</span>
                    <p className="mt-2 font-semibold">{category.name}</p>
                  </button>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button key={prompt} onClick={() => setCustomPrompt(prompt)} className="rounded-full border border-[#D4A24C]/35 bg-white px-4 py-2 text-sm text-[#0F2A44]/75">
                    {prompt}
                  </button>
                ))}
              </div>

              <textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Or write your own nail idea. Example: soft bridal nails with gold details and pearl accents."
                className="mt-4 min-h-28 w-full rounded-3xl border border-[#E9DCCB] bg-white/80 p-4 text-sm outline-none focus:border-[#D4A24C]"
              />

              {error && <p className="mt-3 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

              <button
                onClick={generatePreview}
                disabled={loading}
                className="mt-4 w-full rounded-full bg-[#0F2A44] px-6 py-4 text-base font-semibold text-[#FFF7EC] shadow-[0_20px_50px_rgba(15,42,68,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Creating your nail preview...' : 'Show This On My Hands'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div className="rounded-[2.5rem] border border-white bg-white/65 p-5 shadow-[0_30px_100px_rgba(15,42,68,0.12)] backdrop-blur-xl">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A24C]">AI Result</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight">Your preview</h2>
            </div>
            <span className="rounded-full bg-[#E9DCCB]/70 px-4 py-2 text-sm">{selectedCategory.name}</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <PreviewPanel title="Before" image={handImage} fallback="Upload your hand photo" />
            <PreviewPanel title="After" image={resultImage} fallback="AI preview will appear here" />
          </div>
          <p className="mt-4 text-sm leading-6 text-[#0F2A44]/60">
            Note: This is a preview tool. Final result depends on nail length, condition, extension type and artist recommendation at the studio.
          </p>
        </div>

        <div className="rounded-[2.5rem] bg-[#0F2A44] p-6 text-[#FFF7EC] shadow-[0_30px_100px_rgba(15,42,68,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A24C]">Book this look</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight">Want Himanshi to guide the final set?</h2>
          <p className="mt-4 leading-7 text-[#FFF7EC]/75">
            Share this preview with the studio and get the right suggestion before your appointment.
          </p>

          <div className="mt-6 space-y-3">
            <input value={leadName} onChange={(e) => setLeadName(e.target.value)} placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-[#FFF7EC] placeholder:text-[#FFF7EC]/45 outline-none focus:border-[#D4A24C]" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-[#FFF7EC] placeholder:text-[#FFF7EC]/45 outline-none focus:border-[#D4A24C]" />
          </div>

          <a href={`https://wa.me/91?text=${whatsappMessage}`} className="mt-5 block rounded-full bg-[#D4A24C] px-6 py-4 text-center font-semibold text-[#0F2A44]">
            Book This Look on WhatsApp
          </a>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-4">
            <p className="text-sm font-semibold">Privacy promise</p>
            <p className="mt-2 text-sm leading-6 text-[#FFF7EC]/65">Your hand photo is used only to generate the preview. Add a proper deletion policy before public launch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function UploadCard({ title, subtitle, image, onChange }: { title: string; subtitle: string; image: string | null; onChange: (event: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className="group relative flex min-h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-dashed border-[#D4A24C]/55 bg-[#FFF7EC]/70 p-4 text-center transition hover:border-[#0F2A44]">
      {image ? (
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#0F2A44] text-3xl text-[#FFF7EC]">+</div>
          <p className="font-serif text-2xl font-semibold">{title}</p>
          <p className="mt-2 text-sm text-[#0F2A44]/60">{subtitle}</p>
        </>
      )}
      {image && <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 px-4 py-3 text-left backdrop-blur"><p className="font-semibold">{title}</p><p className="text-xs text-[#0F2A44]/60">Tap to replace</p></div>}
      <input type="file" accept="image/*" onChange={onChange} className="hidden" />
    </label>
  );
}

function PreviewPanel({ title, image, fallback }: { title: string; image: string | null; fallback: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#FFF7EC]">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="font-semibold">{title}</p>
        <span className="text-xs text-[#0F2A44]/50">NBN Preview</span>
      </div>
      <div className="grid aspect-[4/5] place-items-center bg-[#E9DCCB]/35">
        {image ? <img src={image} alt={title} className="h-full w-full object-cover" /> : <p className="px-6 text-center text-sm text-[#0F2A44]/50">{fallback}</p>}
      </div>
    </div>
  );
}
