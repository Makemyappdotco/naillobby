'use client';

import { useEffect, useRef, useState } from 'react';

const COLORS = ['#F1C40F', '#D4AC0D', '#B7950B', '#C8A2C8', '#FFFFFF', '#FFE9B3', '#EFB64C'];
const BANNER_IMG =
  'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/3d06456b-e196-4a6e-b96a-d2e2569e55eb_compressed_ChatGPT-Image-Sep-3-2026-05_06_16-PM.webp';

interface Piece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rot: number;
  vrot: number;
  shape: 'rect' | 'circle' | 'line';
}

export default function AnniversaryConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    let animationId = 0;
    let pieces: Piece[] = [];

    const spawn = (count: number, fromCenter: boolean) => {
      const shapes: Piece['shape'][] = ['rect', 'circle', 'line'];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const speed = 5 + Math.random() * 8;
        pieces.push({
          x: fromCenter ? width / 2 : width * (0.1 + Math.random() * 0.8),
          y: fromCenter ? height / 2 : height * 0.4,
          vx: Math.cos(angle) * speed * (0.6 + Math.random() * 0.7),
          vy: Math.sin(angle) * speed * (0.6 + Math.random() * 0.7) - 5,
          size: 7 + Math.random() * 9,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.4,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pieces.forEach((p) => {
        p.vy += 0.22;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'line') {
          ctx.fillRect(-p.size / 2, -1.5, p.size, 3);
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        }
        ctx.restore();
      });

      pieces = pieces.filter((p) => p.y < height + 60);

      if (pieces.length > 0) {
        animationId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    const timer = setTimeout(() => {
      setShowBanner(true);
      spawn(150, true);
      animationId = requestAnimationFrame(render);

      setTimeout(() => {
        if (pieces.length === 0) {
          spawn(80, false);
          animationId = requestAnimationFrame(render);
        }
      }, 1400);

      setTimeout(() => {
        spawn(70, false);
        animationId = requestAnimationFrame(render);
      }, 2600);

      setTimeout(() => setShowBanner(false), 4200);
    }, 3000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
        aria-hidden="true"
      />

      {showBanner && (
        <div className="pointer-events-none fixed inset-0 z-[9998] flex items-center justify-center px-5 sm:px-8">
          <div className="banner-pop relative w-full max-w-[15rem] sm:max-w-sm md:max-w-md">
            <div className="anniversary-card relative overflow-hidden rounded-[1.15rem] sm:rounded-[1.5rem]">
              <img
                src={BANNER_IMG}
                alt="The Nail Lobby celebrating 1 year of beautiful nails"
                className="block h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.15rem] sm:rounded-[1.5rem] ring-1 ring-inset ring-[#B7950B]/40"></div>
            </div>
            <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[1.35rem] sm:rounded-[1.7rem] blur-xl"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bannerPop {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          55% { opacity: 1; transform: translateY(-5px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .banner-pop {
          animation: bannerPop 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anniversary-card {
          box-shadow:
            0 20px 60px -18px rgba(43, 21, 51, 0.55),
            0 0 0 1px rgba(212, 172, 13, 0.25),
            0 0 34px -6px rgba(241, 196, 15, 0.45);
        }
        .anniversary-card > div {
          box-shadow: inset 0 0 0 1px rgba(255, 233, 179, 0.18);
        }
      `}</style>
    </>
  );
}