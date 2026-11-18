'use client';

import { useEffect, useRef, useState } from 'react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../lib/site';

const reels = [
  'https://www.instagram.com/reel/DVl0n2qkpdS/',
  'https://www.instagram.com/reel/DQPNqzckiL9/',
  'https://www.instagram.com/reel/DTz-viCgjx8/',
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramReels() {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  // Only load Instagram's script and embeds when the section is close to the screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!load) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://www.instagram.com/embed.js';
    s.async = true;
    s.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(s);
  }, [load]);

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            Follow us on <span className="text-gold">Instagram</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <p className="section-sub mb-4">Our latest sets and behind-the-scenes from the studio.</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 font-semibold text-[var(--lavender)] hover:text-[#5f3f78] transition-colors"
          >
            <i className="ri-instagram-line text-xl" aria-hidden="true"></i>
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {reels.map((url) => (
            <div key={url} className="w-full max-w-[340px] min-h-[560px] rounded-xl bg-[var(--surface)] overflow-hidden">
              {load ? (
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: 0, borderRadius: 12, margin: 0, padding: 0, width: '100%', minWidth: 0, maxWidth: 340 }}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer" className="block p-6 text-center text-sm text-[var(--text-muted)]">
                    View this reel on Instagram
                  </a>
                </blockquote>
              ) : (
                <a href={url} target="_blank" rel="noopener noreferrer" className="flex h-[560px] items-center justify-center text-sm text-[var(--text-muted)]">
                  <i className="ri-instagram-line text-2xl mr-2" aria-hidden="true"></i>
                  Loading reel
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
