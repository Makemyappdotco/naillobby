
'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesPreview from '../components/ServicesPreview';
import InstagramReels from '../components/InstagramReels';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

        :root {
          --gold-stops: #F4D03F 0%, #F7DC6F 15%, #F1C40F 30%, #D4AC0D 50%, #B7950B 70%, #D4AC0D 85%, #F1C40F 100%;
          --gold: #F1C40F;
          --gold-medium: #D4AC0D;
          --gold-dark: #B7950B;
          --lavender: #C8A2C8;
          --black: #000000;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: var(--black);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
          color: #000000;
          text-shadow: none;
          filter: none;
        }

        /* Removed all old gold-span, gold-text implementations */

        .btn-gold,
        .btn-primary,
        .cta,
        .wa-btn {
          background: linear-gradient(135deg, var(--gold-stops));
          position: relative;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 172, 13, 0.4), inset 0 1px 0 rgba(255,255,255,0.3);
          overflow: hidden;
          filter: none;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .btn-gold::after,
        .btn-primary::after,
        .cta::after,
        .wa-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 30%, rgba(255,255,255,0.6) 60%, transparent 100%);
          mix-blend-mode: overlay;
          pointer-events: none;
          opacity: 0.9;
          border-radius: inherit;
        }

        .btn-gold:hover,
        .btn-primary:hover,
        .cta:hover,
        .wa-btn:hover {
          filter: brightness(1.1) saturate(1.1);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 172, 13, 0.5), inset 0 1px 0 rgba(255,255,255,0.4);
        }

        .gold-gradient {
          background: linear-gradient(135deg, var(--gold-stops));
          position: relative;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .gold-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 30%, rgba(255,255,255,0.6) 60%, transparent 100%);
          mix-blend-mode: overlay;
          opacity: 0.9;
          border-radius: inherit;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(32px, 5.2vw, 62px);
          line-height: 1.12;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
          color: #000;
          text-wrap: balance;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          filter: none !important;
          opacity: 1 !important;
          text-shadow: none;
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: clamp(40px, 4.2vw, 68px);
          }
        }

        .btn-lavender {
          border: 2px solid var(--lavender);
          background: white;
          color: #000000;
          transition: all 0.3s ease;
        }

        .btn-lavender:hover {
          background: var(--lavender);
          color: white;
          transform: translateY(-2px);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          border-color: var(--gold);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.2);
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gold-shimmer {
          position: relative;
          overflow: hidden;
        }

        .gold-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%; 
          width: 100%;  
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          transition: left 0.6s;
        }

        .gold-shimmer:hover::before {
          left: 100%;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .parallax {
          transform: translateY(0);
          transition: transform 0.1s ease-out;
        }

        .section-consistent {
          background: linear-gradient(180deg, #F8F3FA 0%, #FFFFFF 100%);
          padding: 72px 0;
        }

        @media (max-width: 1024px) {
          .section-consistent {
            padding: 48px 0;
          }
        }

        @media (max-width: 768px) {
          .section-consistent {
            padding: 40px 0;
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Focus states for accessibility */
        *:focus {
          outline: 2px solid #FFD700;
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .gold-span {
            color: #B8942A !important;
            -webkit-text-fill-color: #B8942A !important;
          }

          .btn-gold {
            color: #000000 !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            opacity: 1;
            transform: none;
          }

          .parallax {
            transform: none !important;
          }

          .gold-span {
            animation: none !important;
          }

          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <InstagramReels />
      <Gallery />
      <Testimonials />
      <Process />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}