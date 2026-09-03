'use client';

export default function AcademyCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-purple-300 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-black">
            Ready to Start Your <span className="section-gold">Nail Career</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Seats are limited for every batch to keep the one-on-one experience. Message us
            today to book your spot at The Nail Lobby Academy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919999345615"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-primary cta wa-btn px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap gold-shimmer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-lg"></i>
              </div>
              Book My Seat
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-lg"></i>
              </div>
              <span className="font-medium">Or call: +91 99993 45615</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}