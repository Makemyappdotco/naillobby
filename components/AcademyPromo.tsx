'use client';

import Link from 'next/link';

export default function AcademyPromo() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-200/40">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/7ee89a14-8703-4ff4-912e-e8b1c98706c6_compressed_DE64D321-58EE-471E-A871-2E4BC148AAC2.webp"
                alt="Learn nail art at The Nail Lobby Academy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content side */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#B7950B] mb-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-graduation-cap-line"></i>
                </div>
                The Nail Lobby Academy
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Turn Your Passion Into a <span className="section-gold">Profession</span>
              </h2>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Learn professional nail art with our one-on-one courses in Ghaziabad,
                hands-on practice, premium products, and the skills to start your own nail
                career. 2 hours a day, flexible timing.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Basic & Advance Nail Mastery courses',
                  '1-on-1 individual attention',
                  'Certificate + career guidance'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-checkbox-circle-fill text-yellow-500"></i>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/academy"
                  className="btn-gold btn-primary px-7 py-3.5 rounded-full font-semibold text-center inline-flex items-center justify-center gap-2 whitespace-nowrap gold-shimmer"
                >
                  Explore Academy
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}