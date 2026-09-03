'use client';

import { useEffect } from 'react';
import AcademyHero from './AcademyHero';
import AcademyMarquee from './AcademyMarquee';
import AcademyIntro from './AcademyIntro';
import AcademyCourses from './AcademyCourses';
import AcademyReviews from './AcademyReviews';
import AcademyFAQ from './AcademyFAQ';
import AcademyCTA from './AcademyCTA';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function AcademyPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
          color: #000;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
          color: #000;
          text-shadow: none;
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

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />
      <AcademyHero />
      <AcademyMarquee />
      <AcademyIntro />
      <AcademyCourses />
      <AcademyReviews />
      <AcademyFAQ />
      <AcademyCTA />
      <Footer />
    </div>
  );
}