'use client';

export default function AcademyHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20nail%20art%20studio%20with%20a%20single%20closeup%20of%20glossy%20french%20manicure%20nails%20being%20perfected%20by%20a%20professional%20nail%20artist%20using%20gold%20tools%2C%20dreamy%20lavender%20and%20soft%20cream%20tones%2C%20refined%20marble%20counter%20with%20delicate%20flowers%2C%20bright%20airy%20high%20end%20beauty%20salon%2C%20generous%20empty%20calm%20space%20on%20the%20left%20side%20for%20text%20overlay%2C%20soft%20golden%20studio%20lighting%2C%20modern%20premium%20aesthetic%2C%20photorealistic&width=1600&height=900&seq=academy-hero-2&orientation=landscape"
          alt="The Nail Lobby Academy training studio"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F3FA] via-transparent to-white/40"></div>
      </div>

      <div className="absolute inset-0 sm:hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20vertical%20luxury%20nail%20art%20scene%20showing%20a%20graceful%20hand%20with%20glossy%20nude%20french%20manicure%20resting%20near%20a%20gold%20and%20cream%20manicure%20station%2C%20soft%20lavender%20pastel%20tones%2C%20delicate%20flower%20details%20on%20white%20marble%2C%20warm%20luxurious%20beauty%20studio%20ambiance%2C%20subtle%20refined%20background%20with%20calm%20lower%20area%20for%20text%2C%20premium%20nail%20academy%20mood%2C%20photorealistic&width=800&height=1200&seq=academy-hero-mobile-2&orientation=portrait"
          alt="The Nail Lobby Academy training studio"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F3FA] via-[#F8F3FA]/80 to-white/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-20 sm:pb-28 lg:min-h-[88vh] lg:flex lg:items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-white/85 backdrop-blur border border-yellow-300/60 rounded-full px-4 py-2 text-sm font-semibold text-[#B7950B] mb-6 shadow-sm">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-graduation-cap-line text-base"></i>
            </div>
            The Nail Lobby Academy
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
            Learn the Art of <span className="section-gold">Nail Mastery</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            Turn your passion into a profession with our expert-led, one-on-one nail
            courses in Ghaziabad. Practical training, premium products, and the skills
            to launch your own nail career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919999345615"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap gold-shimmer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-whatsapp-line text-lg"></i>
              </div>
              Enroll Now on WhatsApp
            </a>
            <a
              href="#courses"
              className="btn-lavender btn-outline px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-price-tag-3-line text-lg"></i>
              </div>
              View Courses
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <i className="ri-user-heart-line text-white text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-black text-lg">1-on-1</p>
                <p className="text-sm text-gray-600">Individual attention</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-black text-lg">2 hrs/day</p>
                <p className="text-sm text-gray-600">Flexible timing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <i className="ri-award-line text-white text-xl"></i>
              </div>
              <div>
                <p className="font-bold text-black text-lg">Certificate</p>
                <p className="text-sm text-gray-600">On completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}