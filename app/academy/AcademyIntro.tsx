'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    src: 'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/e977f32d-f365-468d-bd80-69a00e71f0d6_compressed_Copy-of-IMG_3165.webp',
    alt: 'Graduating students with certificates at The Nail Lobby Academy'
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/e3fd1d1e-f694-4d84-9ad1-65db7c136df2_compressed_Copy-of-IMG_3203-1.webp',
    alt: 'Student proudly holding her certificate at The Nail Lobby Academy'
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/c79df084-07f3-4daf-afb8-23a473734883_compressed_IMG_3199.webp',
    alt: 'Graduate with her diploma at The Nail Lobby Academy'
  }
];

const points = [
  {
    icon: 'ri-user-heart-line',
    title: 'One-on-One Training',
    description: 'Every session is fully personalised with individual attention so you learn at your own pace, guided step-by-step by an expert nail artist.'
  },
  {
    icon: 'ri-hand-heart-line',
    title: '100% Hands-On Practice',
    description: 'Forget boring theory. You practise on real hands and live models every single day, building real-world confidence and speed.'
  },
  {
    icon: 'ri-vip-diamond-line',
    title: 'Premium Brand Products',
    description: 'Train using the same premium gel, acrylic and polygel products our salon uses, so you know exactly what works on clients.'
  },
  {
    icon: 'ri-briefcase-line',
    title: 'Career Ready Skills',
    description: 'From managing clients to pricing your work, you learn everything needed to join a salon or start your own nail business.'
  }
];

export default function AcademyIntro() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="section-consistent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative fade-up">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-yellow-200/40">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="relative w-full flex-shrink-0">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-[520px] object-cover object-top"
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <i className="ri-arrow-left-s-line text-black text-2xl"></i>
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center cursor-pointer transition-colors"
              >
                <i className="ri-arrow-right-s-line text-black text-2xl"></i>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === current
                        ? 'w-7 bg-gradient-to-r from-yellow-400 to-yellow-600'
                        : 'w-2.5 bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-white/90">Students Trained</p>
            </div>
          </div>

          <div className="fade-up">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#B7950B] mb-3">
              Why Join Our Academy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Learn Nail Art the <span className="section-gold">Professional Way</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Based right here in Rajnagar Extension, Ghaziabad, The Nail Lobby Academy
              is where beginners become confident, skilled nail professionals, with real
              salon experience, not just classroom theory.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${point.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">{point.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
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