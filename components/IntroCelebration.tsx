'use client';

import { useEffect, useRef, useState } from 'react';

// Intro: gold confetti burst + celebration banner.
// Shows once per browser session, waits for the banner image to load,
// can be closed with a tap, the X or Escape, and fades out on its own.

const COLORS = ['#F1C40F', '#D4AC0D', '#B7950B', '#C8A2C8', '#FFFFFF', '#FFE9B3', '#EFB64C'];
const BANNER = '/media/intro-banner.webp';
const SESSION_KEY = 'tnl-intro-seen';

type Piece = {
  x: number; y: number; vx: number; vy: number;
  size: number; color: string; rot: number; vrot: number;
  shape: 0 | 1 | 2;
};

export default function IntroCelebration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'hidden' | 'in' | 'out'>('hidden');

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* storage blocked: still show it */
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let pieces: Piece[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    const timers: number[] = [];

    const size = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (count: number, fromCenter: boolean) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const speed = 5 + Math.random() * 8;
        pieces.push({
          x: fromCenter ? w / 2 : w * (0.1 + Math.random() * 0.8),
          y: fromCenter ? h / 2 : h * 0.35,
          vx: Math.cos(angle) * speed * (0.6 + Math.random() * 0.7),
          vy: Math.sin(angle) * speed * (0.6 + Math.random() * 0.7) - 5,
          size: 7 + Math.random() * 9,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.4,
          shape: Math.floor(Math.random() * 3) as Piece['shape'],
        });
      }
      if (!raf) raf = requestAnimationFrame(render); // only ever one loop
    };

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pieces) {
        p.vy += 0.22;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === 0) {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 1) {
          ctx.fillRect(-p.size / 2, -1.5, p.size, 3);
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        }
        ctx.restore();
      }
      pieces = pieces.filter((p) => p.y < h + 60);
      raf = pieces.length ? requestAnimationFrame(render) : 0;
      if (!raf) ctx.clearRect(0, 0, w, h);
    };

    // Preload the banner so it never pops in half-loaded
    const img = new Image();
    img.src = BANNER;
    const start = () => {
      size();
      setPhase('in');
      if (!reduce) {
        spawn(150, true);
        timers.push(window.setTimeout(() => spawn(80, false), 1300));
        timers.push(window.setTimeout(() => spawn(70, false), 2500));
      }
      timers.push(window.setTimeout(() => setPhase('out'), 5200));
      timers.push(window.setTimeout(() => setPhase('hidden'), 5800));
    };
    const ready = () => timers.push(window.setTimeout(start, 1200));
    if (img.complete) ready();
    else img.onload = ready;

    window.addEventListener('resize', size);
    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
    };
  }, []);

  // Escape closes the banner
  useEffect(() => {
    if (phase !== 'in') return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPhase('out');
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'out') return;
    const t = window.setTimeout(() => setPhase('hidden'), 600);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[120]" aria-hidden="true" />

      {phase !== 'hidden' && (
        <div
          className={`fixed inset-0 z-[110] flex items-center justify-center px-6 bg-[#1b1020]/35 backdrop-blur-[2px] ${
            phase === 'in' ? 'intro-fade-in' : 'intro-fade-out'
          }`}
          onClick={() => setPhase('out')}
          role="dialog"
          aria-label="The Nail Lobby celebration"
        >
          <div className={`relative w-full max-w-[17rem] sm:max-w-sm md:max-w-md ${phase === 'in' ? 'intro-pop' : ''}`}>
            <img
              src={BANNER}
              alt="The Nail Lobby celebrating one year of beautiful nails"
              width={720}
              height={900}
              className="block w-full h-auto rounded-[1.25rem] sm:rounded-[1.6rem] shadow-[0_24px_70px_-18px_rgba(43,21,51,0.6),0_0_40px_-6px_rgba(241,196,15,0.5)] ring-1 ring-[#d9a43c]/50"
            />
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setPhase('out'); }}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-[#17121a] shadow-lg flex items-center justify-center"
              aria-label="Close"
            >
              <i className="ri-close-line text-xl" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
