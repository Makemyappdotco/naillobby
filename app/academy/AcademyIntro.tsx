'use client';

import { useEffect, useState } from 'react';

const slides = [
  { src: '/media/academy-1.webp', alt: 'Graduating students with certificates at The Nail Lobby Academy' },
  { src: '/media/academy-2.webp', alt: 'Student holding her certificate at The Nail Lobby Academy' },
  { src: '/media/academy-3.webp', alt: 'Graduate with her diploma at The Nail Lobby Academy' },
];

const points = [
  { icon: 'ri-user-heart-line', title: 'One-on-One Training', description: 'Every session is personalised so you learn at your own pace, guided step by step by an expert nail artist.' },
  { icon: 'ri-hand-heart-line', title: '100% Hands-On Practice', description: 'Forget boring theory. You practice on real hands and live models every day, building real-world confidence and speed.' },
  { icon: 'ri-vip-diamond-line', title: 'Premium Brand Products', description: 'Train with the same gel, acrylic and polygel products our salon uses, so you know exactly what works on clients.' },
  { icon: 'ri-briefcase-line', title: 'Career Ready Skills', description: 'From managing clients to pricing your work, you learn what you need to join a salon or start your own nail business.' },
];

export default function AcademyIntro() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);
  const total = slides.length;
  const goTo = (i: number) => setCurrent((i + total) % total);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  return (
    <section className="section section-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div
            className="relative fade-up"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div
              className="relative overflow-hidden rounded-3xl shadow-xl border border-[var(--border)] aspect-[3/4] max-h-[560px] mx-auto"
              onTouchStart={(e) => { setPaused(true); setTouchX(e.touches[0].clientX); }}
              onTouchEnd={(e) => {
                if (touchX !== null) {
                  const dx = e.changedTouches[0].clientX - touchX;
                  if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
                }
                setTouchX(null);
              }}
            >
              <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((s, i) => (
                  <img
                    key={s.src}
                    src={s.src}
                    alt={s.alt}
                    width={1000}
                    height={1333}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full flex-shrink-0 object-cover object-top"
                  />
                ))}
              </div>

              <button type="button" onClick={() => goTo(current - 1)} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center">
                <i className="ri-arrow-left-s-line text-2xl" aria-hidden="true"></i>
              </button>
              <button type="button" onClick={() => goTo(current + 1)} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center">
                <i className="ri-arrow-right-s-line text-2xl" aria-hidden="true"></i>
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {slides.map((_, i) => (
                  <button key={i} type="button" onClick={() => goTo(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === current} className="p-2">
                    <span className={`block h-2.5 rounded-full transition-all ${i === current ? 'w-7 bg-[var(--accent)]' : 'w-2.5 bg-white/80'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 sm:-right-5 btn-gold hover:transform-none rounded-2xl px-5 py-4 flex-col items-start gap-0 shadow-xl">
              <span className="text-2xl sm:text-3xl font-bold leading-none">200+</span>
              <span className="text-xs sm:text-sm font-medium">Students trained</span>
            </div>
          </div>

          <div className="fade-up">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--accent-strong)] mb-3">Why join our academy</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Learn nail art the <span className="text-gold">professional way</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
              Based in Raj Nagar Extension, Ghaziabad, The Nail Lobby Academy is where beginners become confident, skilled
              nail professionals, with real salon experience, not just classroom theory.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="icon-tile w-12 h-12"><i className={`${p.icon} text-xl`} aria-hidden="true"></i></span>
                  <div>
                    <h3 className="font-sans font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
