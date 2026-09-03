'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'I am a complete beginner. Can I join?',
    a: 'Absolutely! The Basic Nail Mastery course is designed for complete beginners. We start from nail anatomy and hygiene, and guide you step-by-step until you are confident and skilled.'
  },
  {
    q: 'How many students are in a batch?',
    a: 'We focus on one-on-one individual attention, so seats are strictly limited. You get personal guidance at every step, no crowded batches, no rushing.'
  },
  {
    q: 'How many hours per day are the classes?',
    a: 'Classes are 2 hours per day with flexible timing slots, so you can easily balance the course with college or work.'
  },
  {
    q: 'Do we get to practise on real models?',
    a: 'Yes! You practise on real hands and live models throughout the course. This builds real confidence and helps you learn how to handle actual clients.'
  },
  {
    q: 'Will I get a certificate after the course?',
    a: 'Yes, you receive a certificate on successful completion of the course, along with guidance on starting your own nail business or joining a salon.'
  },
  {
    q: 'Do you provide lifetime support after the course?',
    a: 'Of course. Even after you finish, you can reach out to us on WhatsApp anytime for doubts, advice, or support while you grow your own practice.'
  }
];

export default function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Frequently Asked <span className="section-gold">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know before joining The Nail Lobby Academy.
          </p>
        </div>

        <div className="space-y-4 fade-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-black">{faq.q}</span>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rotate-180'
                      : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  <i className="ri-arrow-down-s-line text-xl"></i>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}