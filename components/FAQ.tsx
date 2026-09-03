'use client';

import { useState } from 'react';

const faqs = [
  {
    category: 'Bookings & Walk-ins',
    items: [
      {
        q: 'Do I need to book an appointment in advance?',
        a: 'Walk-ins are always welcome! However, we recommend booking in advance, especially on weekends and for bridal or special services, to avoid waiting. You can book instantly via WhatsApp.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'The easiest way is to message us on WhatsApp at +91 99993 45615. Just tell us the service you want and your preferred date & time, and we\'ll confirm your slot.',
      },
      {
        q: 'What are your working hours?',
        a: 'We\'re open Monday to Saturday from 10 AM to 8 PM, and Sundays from 11 AM to 6 PM. We\'re here all week for you!',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    items: [
      {
        q: 'Is nail art included in the service price?',
        a: 'Nail art is not included in the base service prices. Charges are extra and depend on the complexity of the design. Simple nail art starts from ₹50 per nail. Ask us for a quote!',
      },
      {
        q: 'How long do gel extensions last?',
        a: 'Gel extensions typically last 3–4 weeks with proper care. We recommend coming in for a refill every 3 weeks to keep them looking fresh and prevent lifting.',
      },
      {
        q: 'What is the difference between Gellicure and Gel Extension?',
        a: 'Gellicure is a long-lasting gel nail polish applied over your natural nails, no added length. Gel Extension uses a tip or form to add length and structure to your nails. Gellicure starts at ₹499 and takes 30 mins; Gel Extension starts at ₹1,099 and takes 90 mins.',
      },
      {
        q: 'Do you offer removal services?',
        a: 'Yes! Removal for hands is ₹499 and for feet is ₹299. If you\'re getting a new set done on the same visit, removal is only ₹100.',
      },
      {
        q: 'What is a Russian Manicure?',
        a: 'Russian Manicure is a dry, e-file technique that gives an extremely clean, precise finish around the cuticle area. It lasts longer than a traditional manicure and starts at ₹599 (45 mins).',
      },
    ],
  },
  {
    category: 'Aftercare & Hygiene',
    items: [
      {
        q: 'How do I take care of my nails after the appointment?',
        a: 'Avoid soaking your nails in water for the first 24 hours. Use cuticle oil daily to keep nails hydrated, wear gloves while doing dishes or cleaning, and avoid using your nails as tools to prevent breakage.',
      },
      {
        q: 'Are your tools sterilized between clients?',
        a: 'Absolutely. We follow strict hygiene protocols, and all metal tools are sterilized using a UV sterilizer and autoclave between every client. Single-use items like files and buffers are never reused.',
      },
      {
        q: 'What products do you use?',
        a: 'We use only premium, professional-grade products from trusted brands. All our gels, acrylics, and polishes are non-toxic and safe for regular use.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-100 rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 bg-white hover:bg-yellow-50/40 transition-colors">
        <span className="font-medium text-gray-900 text-sm md:text-base leading-snug">{q}</span>
        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <i className={`ri-${open ? 'subtract' : 'add'}-line text-yellow-500 text-lg`}></i>
        </div>
      </div>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-yellow-50/30 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <p className="text-xs uppercase tracking-widest text-yellow-600 font-semibold mb-2">Got Questions?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Everything you need to know before your visit, from bookings to aftercare.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-up">
          {faqs.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === i
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="space-y-3 fade-up">
          {faqs[activeCategory].items.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-12 text-center fade-up">
          <p className="text-gray-500 text-sm mb-4">Still have questions? We're happy to help!</p>
          <a
            href="https://wa.me/919999345615?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gold text-white font-medium text-sm whitespace-nowrap cursor-pointer"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-line text-base"></i>
            </div>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
