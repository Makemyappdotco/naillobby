
'use client';

export default function Process() {
  const steps = [
    {
      icon: 'ri-palette-line',
      title: 'Pick Your Style',
      description: 'Browse our gallery or share your inspiration. Our artists will help you choose the perfect design for your personality and occasion.'
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'Book on WhatsApp',
      description: 'Send us a message on WhatsApp to schedule your appointment. We\'ll confirm your time slot and answer any questions you have.'
    },
    {
      icon: 'ri-star-line',
      title: 'Arrive & Shine',
      description: 'Relax in our luxurious salon while our certified artists create your perfect nails. Leave feeling confident and beautiful!'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Our Process for <span className="section-gold">Perfect Nails</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a meticulous 4-step process to ensure every client gets flawless, long-lasting results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-purple-400 transform translate-x-10"></div>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-up">
          <a
            href="https://wa.me/919999345615"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 whitespace-nowrap gold-shimmer"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-line text-lg"></i>
            </div>
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
