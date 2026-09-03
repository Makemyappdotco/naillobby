'use client';

import { useEffect } from 'react';

export default function InstagramReels() {
  const reels = [
    'https://www.instagram.com/reel/DVl0n2qkpdS/?igsh=MWt0ODR0NmpnbnAzZg==',
    'https://www.instagram.com/reel/DQPNqzckiL9/?igsh=OTNtd241ZzU4cXk0',
    'https://www.instagram.com/reel/DTz-viCgjx8/?igsh=MzB3dTZxM255bHAx',
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Follow Our <span className="section-gold">Instagram</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Get inspired by our latest nail art creations and behind-the-scenes content.
          </p>
          <a
            href="https://instagram.com/thenaillobbyofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-600 font-semibold transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-instagram-line text-xl"></i>
            </div>
            @thenaillobbyofficial
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-start fade-up">
          {reels.map((url, index) => (
            <div key={index} className="flex-1 min-w-0 max-w-[340px] mx-auto">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                  margin: '0',
                  maxWidth: '340px',
                  minWidth: '260px',
                  padding: '0',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
