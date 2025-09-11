
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

     const phone = "919999345615";
  const message =
    "Hello The Nail Lobby ✨, I’d like to book an appointment. Please share the available slots. 💅";
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="hero relative min-h-screen overflow-hidden" style={{ background: '#F8F3FA' }}>
      {/* Hero-specific styles */}
      <style jsx>{`
        .hero-title {
          letter-spacing: -.01em;
          line-height: 1.25;
          margin: 0;
          font-size: clamp(34px, 8vw, 68px);
          text-wrap: balance;
        }

        .hero-title .gold-sweep {
          background: linear-gradient(90deg, #FFE9B3 0%, #FFD76A 18%, #EFB64C 36%, #CFA240 54%, #EFB64C 72%, #FFD76A 86%, #FFE9B3 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 220% 100%;
          animation: goldSweep 4.5s linear infinite;
          text-shadow: none;
          filter: none;
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(30px, 9vw, 42px);
            line-height: 1.28;
            text-align: center;
            max-width: 20ch;
            margin-inline: auto;
            padding-inline: 12px;
            hyphens: none;
            word-break: keep-all;
          }

          .hero-title .gold-sweep {
            white-space: nowrap;
            display: inline-block;
            background-size: 220% 100%;
          }

          .hero-title .gold-sweep::after {
            content: "";
            display: block;
            height: 2px;
            margin: .15em auto 0;
            width: 70%;
            background: linear-gradient(90deg, transparent, #EFB64C, #FFE9B3, transparent);
            border-radius: 999px;
            opacity: .9;
          }
        }

        @keyframes goldSweep {
          0% { background-position: -60% 0; }
          100% { background-position: 160% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-title .gold-sweep {
            animation: none;
            background-position: 50% 0;
          }
          .hero-title .gold-sweep::after {
            animation: none;
          }
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ zIndex: -1 }}>
        {/* Floating geometric shapes with animation */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-float-slow" style={{ filter: 'blur(60px)', pointerEvents: 'none', zIndex: -1 }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-float-medium" style={{ filter: 'blur(60px)', pointerEvents: 'none', zIndex: -1 }}></div>
        <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-float-fast" style={{ filter: 'blur(60px)', pointerEvents: 'none', zIndex: -1 }}></div>

        {/* Additional animated elements */}
        <div className="absolute top-1/3 left-10 w-28 h-28 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full animate-pulse-slow" style={{ filter: 'blur(40px)', pointerEvents: 'none', zIndex: -1, opacity: 0.6 }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full animate-bob" style={{ filter: 'blur(50px)', pointerEvents: 'none', zIndex: -1, opacity: 0.4 }}></div>

        {/* Subtle gradient overlay animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-yellow-100/20 animate-gradient-shift" style={{ pointerEvents: 'none', zIndex: -2 }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left space-y-4 fade-up hero-left">
            <h1 className="hero-title leading-tight mb-6">
              Rajnagar's <span className="gold-sweep">best nail studio</span> is here
            </h1>

            <p className="hero-sub text-lg sm:text-xl text-gray-700 max-w-2xl my-8">
              Luxury care, flawless finish, designs that turn heads. Experience the ultimate in nail artistry and pampering.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4">
              <a
                 href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-lg"></i>
                </div>
                Book on WhatsApp
              </a>

              <a
                href="#services"
                className="btn-lavender btn-outline px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-eye-line text-lg"></i>
                </div>
                View Services
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-media relative fade-up">
            <div
              className="relative z-10 parallax rounded-3xl overflow-hidden shadow-2xl"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent z-10"></div>
              <img
                src="https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/a9944a172bb43d11037b1a5285677ec0.png"
                alt="Luxury nail care at The Nail Lobby"
                className="w-full h-[500px] md:h-[600px] object-cover object-top"
              />
            </div>

            {/* Floating Elements - animated */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-float-gentle" style={{ filter: 'blur(60px)', pointerEvents: 'none', zIndex: -1, opacity: 0.7 }}></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full animate-float-gentle-delayed" style={{ filter: 'blur(60px)', pointerEvents: 'none', zIndex: -1, opacity: 0.6 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
