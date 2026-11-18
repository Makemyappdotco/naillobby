'use client';

import { useRef, useState } from 'react';
import { waLink, HOURS_SHORT, MAP_DIRECTIONS } from '../lib/site';

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_15%_30%,#f6eefa_0%,transparent_60%),radial-gradient(ellipse_60%_70%_at_90%_80%,#fbf3df_0%,transparent_60%)] bg-[var(--surface)]">
      {/* Floating glows and logo-style sparkles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="orb w-64 h-64 bg-[#f3d58a]/50 -top-10 -left-16" />
        <span className="orb w-72 h-72 bg-[#d9c2ea]/60 top-1/3 -right-20" style={{ animationDelay: '-5s' }} />
        <span className="orb w-56 h-56 bg-[#f7e2b0]/60 bottom-0 left-1/3" style={{ animationDelay: '-9s' }} />
        <i className="ri-sparkling-2-fill sparkle text-xl top-[16%] left-[8%] hidden sm:block" />
        <i className="ri-sparkling-2-fill sparkle text-sm top-[30%] left-[46%] hidden lg:block" style={{ animationDelay: '-1.2s' }} />
        <i className="ri-sparkling-2-fill sparkle text-base top-[12%] right-[12%]" style={{ animationDelay: '-2.1s' }} />
        <i className="ri-sparkling-2-fill sparkle text-lg bottom-[18%] left-[12%] lg:hidden" style={{ animationDelay: '-0.6s' }} />
        <i className="ri-sparkling-2-fill sparkle text-sm bottom-[30%] right-[6%]" style={{ animationDelay: '-1.8s' }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-10 lg:pt-[150px] lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 xl:gap-24 items-center">
          <div className="text-center lg:text-left hero-in">
            <p className="flex justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)] mb-5">
              <i className="ri-map-pin-2-line" aria-hidden="true"></i>
              Raj Nagar Extension, Ghaziabad
            </p>

            <h1 className="font-display font-bold text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] lg:leading-[1.02] tracking-tight">
              Rajnagar&apos;s <span className="text-gold block sm:inline lg:block">best nail studio</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl lg:text-[1.35rem] lg:leading-relaxed text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0">
              Luxury care, flawless finish, designs that turn heads. Extensions, gellicure, nail art and bridal nails.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href={waLink("Hi The Nail Lobby! I'd like to book an appointment.")} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 text-base sm:text-lg">
                <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
                Book on WhatsApp
              </a>
              <a href="#services" className="btn-outline px-8 py-4 text-base sm:text-lg">
                <i className="ri-price-tag-3-line text-lg" aria-hidden="true"></i>
                Services &amp; Prices
              </a>
            </div>

            {/* Trust row */}
            <ul className="mt-8 lg:mt-12 grid grid-cols-3 gap-2 sm:gap-6 max-w-xl mx-auto lg:mx-0 lg:pt-8 lg:border-t lg:border-[var(--border)]">
              <li>
                <a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="block group">
                  <span className="block font-display text-2xl sm:text-3xl font-bold">5.0<span className="text-[var(--accent)] text-xl sm:text-2xl ml-1">★</span></span>
                  <span className="block text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--text)]">Google rating</span>
                </a>
              </li>
              <li>
                <span className="block font-display text-2xl sm:text-3xl font-bold">150+</span>
                <span className="block text-xs sm:text-sm text-[var(--text-muted)]">Happy reviews</span>
              </li>
              <li>
                <span className="block font-display text-2xl sm:text-3xl font-bold">7 days</span>
                <span className="block text-xs sm:text-sm text-[var(--text-muted)]">{HOURS_SHORT.replace('Mon to Sun: ', '')}</span>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end media-in">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none lg:w-auto">
            <div className="relative w-full lg:w-auto lg:h-[min(660px,calc(100vh-190px))] lg:min-h-[480px] aspect-[9/16] rounded-[28px] overflow-hidden border-[3px] border-[var(--accent)] glow-frame bg-[#e9dfe9]">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/media/hero.mp4"
                poster="/media/hero-poster.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Inside The Nail Lobby studio"
              />
              <button
                type="button"
                onClick={toggleMute}
                className="absolute bottom-3 left-3 w-11 h-11 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                <i className={`${isMuted ? 'ri-volume-mute-line' : 'ri-volume-up-line'} text-xl text-[var(--text)]`} aria-hidden="true"></i>
              </button>
            </div>

            {/* Floating badge overlapping the video on larger screens */}
            <div className="hidden md:flex float-soft absolute -left-20 lg:-left-16 bottom-14 items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-[0_18px_40px_-16px_rgba(60,30,70,0.35)] border border-[var(--border)]">
              <span className="icon-tile w-10 h-10"><i className="ri-walk-line text-lg" aria-hidden="true"></i></span>
              <span className="leading-tight">
                <span className="block font-semibold text-sm">Walk-ins welcome</span>
                <span className="block text-xs text-[var(--text-muted)]">Open every day</span>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
