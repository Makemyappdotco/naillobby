'use client';

const basicModules = [
  'Nail anatomy, hygiene & salon safety',
  'Classic manicure & pedicure basics',
  'Gel polish (Gellicure) application',
  'Solid colours & French nails',
  'Basic nail art: dots, stripes, marble',
  'Gel & acrylic overlay fundamentals',
  'Clean removal & cuticle care',
  'Client handling & aftercare tips'
];

const advanceModules = [
  'Everything in the Basic course +',
  'Acrylic, gel, soft-gel & polygel extensions',
  'No-tip & no-glue extension techniques',
  'Sculpting, refills & overlays',
  'Cat eye, chrome, marbling & 3D art',
  'Russian manicure & luxury finishes',
  'Toe nail services & bridal packages',
  'Product knowledge & building your kit'
];

export default function AcademyCourses() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Our <span className="section-gold">Nail Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Two focused courses designed around you: one-on-one, hands-on, and career-ready.
            Every batch has limited seats for personal attention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Basic Course */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg card-hover fade-up">
            <div className="h-52 overflow-hidden relative">
              <img
                src="https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/3996f72c-d7fe-4213-a86b-c1ff91cb7341_compressed_ChatGPT-Image-Sep-2-2026-07_27_55-PM-3.webp"
                alt="Basic Nail Mastery Course"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide text-[#B7950B] shadow-lg uppercase border-l-4 border-yellow-500 flex items-center gap-2">
                <i className="ri-user-smile-line text-yellow-500 text-sm"></i>
                Beginners Welcome
              </span>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">Basic Nail Mastery</h3>
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 px-3 py-1.5 rounded-lg text-sm font-bold text-purple-700 shadow-sm">
                  <i className="ri-time-line text-purple-500"></i>
                  15–20 Days
                </span>
              </div>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold text-[#D4AC0D]">₹18,000</span>
                <span className="text-sm text-gray-500 mb-1.5">/ complete course</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                The perfect start for beginners. Master the essentials of nail care, gel
                polish and basic nail art with individual attention at every step.
              </p>

              <ul className="space-y-3 mb-8">
                {basicModules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-checkbox-circle-fill text-yellow-500"></i>
                    </div>
                    <span>{module}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919999345615"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-primary w-full px-6 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap gold-shimmer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-lg"></i>
                </div>
                Enroll in Basic Course
              </a>
            </div>
          </div>

          {/* Advance Course */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-yellow-300 shadow-2xl card-hover fade-up relative">
            <span className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide text-[#B7950B] shadow-lg uppercase border-l-4 border-yellow-500 flex items-center gap-2">
              <i className="ri-fire-line text-yellow-500 text-sm"></i>
              Most Popular
            </span>
            <div className="h-52 overflow-hidden relative">
              <img
                src="https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/cc086ada-cf72-46c0-b146-0b4a9fcd961e_compressed_ChatGPT-Image-Sep-2-2026-07_27_55-PM-4.webp"
                alt="Advance Nail Mastery Course"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">Advance Nail Mastery</h3>
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 px-3 py-1.5 rounded-lg text-sm font-bold text-[#B7950B] shadow-sm">
                  <i className="ri-time-line text-[#D4AC0D]"></i>
                  20–25 Days
                </span>
              </div>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-bold text-[#D4AC0D]">₹21,000</span>
                <span className="text-sm text-gray-500 mb-1.5">/ complete course</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Take your skills to the next level. Master extensions, sculpting, advanced
                art and luxury techniques to work like a true professional.
              </p>

              <ul className="space-y-3 mb-8">
                {advanceModules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-checkbox-circle-fill text-yellow-500"></i>
                    </div>
                    <span>{module}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919999345615"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-primary w-full px-6 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap gold-shimmer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-lg"></i>
                </div>
                Enroll in Advance Course
              </a>
            </div>
          </div>
        </div>

        {/* Shared highlights */}
        <div className="mt-10 bg-white rounded-3xl border border-yellow-200/60 shadow-lg p-8 fade-up">
          <h3 className="text-center text-xl md:text-2xl font-bold mb-8 text-black">
            Both Courses Include
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-user-heart-line', text: '1-on-1 individual attention' },
              { icon: 'ri-time-line', text: '2 hours per day, flexible slots' },
              { icon: 'ri-hand-heart-line', text: 'Practice on live models' },
              { icon: 'ri-vip-diamond-line', text: 'Premium brand products' },
              { icon: 'ri-refresh-line', text: 'Free doubt-clearing sessions' },
              { icon: 'ri-award-line', text: 'Certificate on completion' },
              { icon: 'ri-briefcase-line', text: 'Guidance to start your business' },
              { icon: 'ri-message-2-line', text: 'Lifetime WhatsApp support' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-white`}></i>
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}