
'use client';

import { useState } from 'react';

export default function ServicesPreview() {
  const [activeTab, setActiveTab] = useState('Core');

  const services = {
    Core: [
      {
        name: 'Acrylic Nail Extension',
        benefit: 'Long-lasting strength and durability',
        duration: '75 min',
        price: 'From ₹999',
        icon: 'ri-scissors-line',
        whatsappMessage: 'Hi! I\'d love to get acrylic extensions. Can we discuss length and design options? 💅✨'
      },
      {
        name: 'Gel Extension',
        benefit: 'Natural look with flexible finish',
        duration: '90 min',
        price: 'From ₹999',
        icon: 'ri-drop-line',
        whatsappMessage: 'Hey! I\'m interested in gel extensions for a natural look. What dates do you have available? 🌸'
      },
      {
        name: 'Polygel',
        benefit: 'Perfect hybrid of acrylic and gel',
        duration: '100 min',
        price: 'From ₹1,299',
        icon: 'ri-magic-line',
        whatsappMessage: 'Hi! I want to try polygel - heard it\'s the best of both worlds! When can I book? ✨'
      },
      {
        name: 'Overlay',
        benefit: 'Gel/Acrylic over natural nails for strength & growth',
        duration: '90 min',
        price: 'From ₹799',
        icon: 'ri-shield-line',
        whatsappMessage: 'Hey! I want to strengthen my natural nails with overlays. When are you free? 💪'
      },
      {
        name: 'Refill',
        benefit: 'Maintenance for existing extensions',
        duration: '60 min',
        price: 'From ₹799',
        icon: 'ri-refresh-line',
        whatsappMessage: 'Hi! I need a refill for my existing nails. Do you have any slots this week? 🔄'
      },
      {
        name: 'Gellicure',
        benefit: 'Long-lasting gel polish over natural nails',
        duration: '30 min',
        price: 'From ₹599',
        icon: 'ri-brush-line',
        whatsappMessage: 'Hi! I need a gellicure that lasts weeks. Do you have slots today or tomorrow? 💅'
      },
      {
        name: 'Russian Manicure',
        benefit: 'Precise cuticle work with e-file',
        duration: '45 min',
        price: 'From ₹599',
        icon: 'ri-star-line',
        whatsappMessage: 'Hi! I\'ve heard amazing things about Russian manicures. Can I book this treatment? ⭐'
      },
      {
        name: 'No Tip Extension',
        benefit: 'Natural nail bed extension technique',
        duration: '100 min',
        price: 'From ₹1,299',
        icon: 'ri-leaf-line',
        whatsappMessage: 'Hey! I prefer the no-tip method for extensions. What\'s your availability this week? 🌿'
      },
      {
        name: 'No Glue Extension',
        benefit: 'Gentle application without harsh adhesives',
        duration: '75 min',
        price: 'From ₹1,299',
        icon: 'ri-heart-line',
        whatsappMessage: 'Hi! My nails are sensitive - I\'d love the no-glue extension option. Can we book? 💗'
      },
      {
        name: 'Soft Gel Extension',
        benefit: 'Flexible and comfortable wear',
        duration: '75 min',
        price: 'From ₹1,499',
        icon: 'ri-bubble-chart-line',
        whatsappMessage: 'Hello! I want soft gel extensions for comfort. What colors do you recommend? 💫'
      },
      {
        name: 'Temporary Nail Extension',
        benefit: 'Quick application for special events',
        duration: '90 min',
        price: 'From ₹599',
        icon: 'ri-time-line',
        whatsappMessage: 'Hello! I need temporary extensions for an event this week. Do you have quick slots? 🎉'
      },
      {
        name: 'Custom Press On Nails',
        benefit: 'Personalized designs made to fit',
        duration: 'Custom',
        price: 'From ₹499',
        icon: 'ri-palette-line',
        whatsappMessage: 'Hi! I want custom press-ons with my own design ideas. Can we chat about possibilities? 🎨'
      }
    ],
    Special: [
      {
        name: 'Bridal Nails',
        benefit: 'Complete wedding nail transformation',
        duration: '100 min',
        price: 'From ₹999',
        icon: 'ri-heart-3-line',
        whatsappMessage: 'Hello! I\'m getting married and want gorgeous bridal nails. Can we discuss my wedding theme? 👰💕'
      },
      {
        name: 'Toe Nail Extension',
        benefit: 'Length and strength for toe nails',
        duration: '60 min',
        price: 'From ₹799',
        icon: 'ri-add-line',
        whatsappMessage: 'Hey! I need toe extensions for a perfect pedicure look. When can we schedule? 🦶💅'
      },
      {
        name: 'Toe Overlay',
        benefit: 'Beautiful toe nail enhancement',
        duration: '45 min',
        price: 'From ₹599',
        icon: 'ri-footprint-line',
        whatsappMessage: 'Hi! I want beautiful toe overlays for sandal season. What designs do you suggest? 👡✨'
      },
      {
        name: 'Toe Gel Nail Paint',
        benefit: 'Long-lasting gel polish for toes',
        duration: '30 min',
        price: 'From ₹599',
        icon: 'ri-drop-line',
        whatsappMessage: 'Hi! I want gel polish on my toes for long-lasting color. Available this week? 🌈'
      },
      {
        name: 'Removal - Hands',
        benefit: 'Safe removal of existing extensions',
        duration: '30 min',
        price: '₹499',
        icon: 'ri-eraser-line',
        whatsappMessage: 'Hi! I need to remove my current extensions safely. When can I come in? 🤲'
      },
      {
        name: 'Removal - Foot',
        benefit: 'Safe toe extension removal',
        duration: '20 min',
        price: '₹299 (₹100 with new set)',
        icon: 'ri-eraser-line',
        whatsappMessage: 'Hi! I need toe extension removal. Planning to get a new set too! 🦶'
      }
    ],
    'Add-ons': [
      {
        name: 'Nail Repair',
        benefit: 'Fix chips, cracks, and breaks',
        duration: '10 min',
        price: '₹100 per finger',
        icon: 'ri-tools-line',
        whatsappMessage: 'Hey! I have a broken nail that needs quick repair. Do you have time today? 🔧'
      },
      {
        name: 'Extra Length',
        benefit: 'Add dramatic length to any service',
        duration: '15 min',
        price: '₹100 per finger',
        icon: 'ri-ruler-line',
        whatsappMessage: 'Hi! I want to add extra length to my current nails for a dramatic look. Possible? 📏✨'
      },
      {
        name: 'Cuticle Care',
        benefit: 'Professional cuticle treatment',
        duration: '10 min',
        price: '₹199',
        icon: 'ri-hand-sanitizer-line',
        whatsappMessage: 'Hello! My cuticles need professional care. Can I add this to my appointment? 🤲'
      }
    ]
  };

  const tabs = ['Core', 'Special', 'Add-ons'];

  return (
    <section id="services" className="section-consistent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Our <span className="section-gold">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From classic treatments to cutting-edge designs, discover our full range of luxury nail care services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 fade-up">
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'btn-gold btn-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services[activeTab as keyof typeof services].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-100 to-yellow-50 rounded-xl">
                  <i className={`${service.icon} text-xl text-amber-600`}></i>
                </div>
                <span className="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full">
                  {service.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-2">
                {service.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.benefit}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold gold-text">
                  {service.price}
                </span>
                <a
                  href={`https://wa.me/919999345615?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold btn-primary px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-sm"></i>
                  </div>
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nail Art Note */}
        <div className="text-center mb-8 fade-up">
          <p className="text-sm text-gray-500 italic">
            ✨ Nail art is not included in the above prices. Charges are extra based on design.
          </p>
        </div>

        <div className="text-center fade-up">
          <a
            href="https://wa.me/919999345615?text=Hi%20The%20Nail%20Lobby!%20I%27d%20love%20to%20book%20an%20appointment.%20What%20services%20do%20you%20recommend%20for%20me%3F%20%F0%9F%92%85%E2%9C%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-line text-lg"></i>
            </div>
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
