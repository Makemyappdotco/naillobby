'use client';

import { useCallback, useEffect, useState } from 'react';
import { INSTAGRAM_URL } from '../lib/site';

// Real work from the studio only. Add more photos here as they come in.
const galleryImages = [
  { src: '/media/gallery-1.webp', w: 900, h: 1044, alt: 'Nude almond nails with gold leaf nail art' },
  { src: '/media/gallery-2.webp', w: 726, h: 899, alt: 'Clear French tip extensions with glitter and crystals' },
  { src: '/media/gallery-3.webp', w: 900, h: 1350, alt: 'Deep red cat eye almond nails' },
  { src: '/media/gallery-4.webp', w: 900, h: 1157, alt: 'Silver chrome nails with gold edges' },
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const total = galleryImages.length;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + total) % total)), [total]);

  useEffect(() => {
    if (index === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [index, close, step]);

  // Swipe on phones
  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <section id="gallery" className="section section-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            Our <span className="text-gold">Work</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <p className="section-sub">Real sets done at The Nail Lobby. Tap a photo to see it bigger.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 stagger">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[var(--border)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#e6cf98] hover:shadow-[0_18px_36px_-14px_rgba(181,131,42,0.45)]"
              aria-label={`Open photo: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline px-7 py-3.5">
            <i className="ri-instagram-line text-lg" aria-hidden="true"></i>
            See more on Instagram
          </a>
        </div>
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <img
            src={galleryImages[index].src}
            alt={galleryImages[index].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button type="button" onClick={close} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Close">
            <i className="ri-close-line text-2xl" aria-hidden="true"></i>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Previous photo">
            <i className="ri-arrow-left-s-line text-3xl" aria-hidden="true"></i>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Next photo">
            <i className="ri-arrow-right-s-line text-3xl" aria-hidden="true"></i>
          </button>
          <p className="absolute bottom-5 left-0 right-0 text-center text-white/80 text-sm">{index + 1} / {total}</p>
        </div>
      )}
    </section>
  );
}
