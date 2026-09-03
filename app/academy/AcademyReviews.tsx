'use client';

import { useState } from 'react';

const videoReviews = [
  {
    src: '',
    name: 'Nail Lobby Student',
    location: 'Ghaziabad',
    course: 'Nail Academy',
    play: 'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/0767a93f-b8e5-4382-bd8b-a1afcb6aa5a9_IMG_7889.mp4'
  },
  {
    src: '',
    name: 'Nail Lobby Student',
    location: 'Ghaziabad',
    course: 'Nail Academy',
    play: 'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/58ec6e9e-bc7b-4441-b4b9-2abd03aa6ecd_IMG_3130.mp4'
  },
  {
    src: '',
    name: 'Nail Lobby Student',
    location: 'Ghaziabad',
    course: 'Nail Academy',
    play: 'https://storage.helloreaddy.io/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/91d0c4b2-bc9f-4bf7-8129-72ad85ab84e8_IMG_3206.mp4'
  }
];

const writtenReviews = [
  {
    name: 'Aarti Mishra',
    location: 'Vasundhara, Ghaziabad',
    course: 'Advance Nail Mastery',
    rating: 5,
    text: 'I had zero experience before joining and now I run my own small nail setup from home. Ma\'am taught everything from extensions to bridal nails one-on-one. Worth every rupee, honestly!'
  },
  {
    name: 'Neha Yadav',
    location: 'Kaushambi, Ghaziabad',
    course: 'Basic Nail Mastery',
    rating: 5,
    text: 'The 2-hour daily classes were so convenient around my college. Very patient teaching, tons of practice on live models, and I got my certificate on time. Highly recommend to every beginner.'
  },
  {
    name: 'Sakshi Chauhan',
    location: 'Sahibabad, Ghaziabad',
    course: 'Advance Nail Mastery',
    rating: 5,
    text: 'From a complete novice to doing cat eye and chrome nails confidently in 20 days. The individual attention is real, no rushing, no batch crowd. Best decision I made for my career.'
  },
  {
    name: 'Tanvi Rana',
    location: 'Raj Nagar, Ghaziabad',
    course: 'Basic Nail Mastery',
    rating: 5,
    text: 'Clean, professional and so supportive. I loved practising on real hands. The lifetime WhatsApp support helped me even after finishing. Amazing academy in Ghaziabad!'
  },
  {
    name: 'Ishita Agarwal',
    location: 'Noida Extension',
    course: 'Advance Nail Mastery',
    rating: 5,
    text: 'Travelled all the way from Noida and it was worth it. Learned extensions, Russian manicure and advanced nail art. Ma\'am also shared tips on pricing and getting my first clients.'
  },
  {
    name: 'Ritu Bansal',
    location: 'Ghaziabad, Uttar Pradesh',
    course: 'Basic Nail Mastery',
    rating: 5,
    text: 'I was nervous about starting something new, but the friendly teaching style made it easy. Gel polish and French nails are now my favourites. Thank you The Nail Lobby Academy!'
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={index < rating ? 'ri-star-fill text-yellow-500' : 'ri-star-line text-gray-300'}
    ></i>
  ));
};

export default function AcademyReviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const slides = [...videoReviews, ...videoReviews];

  return (
    <section id="reviews" className="section-consistent">
      <style jsx>{`
        @keyframes slideReviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .reviews-track {
          display: flex;
          width: max-content;
          animation: slideReviews 26s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Student <span className="section-gold">Reviews</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch and read genuine stories from our students across Ghaziabad and beyond.
            Real people, real results.
          </p>
        </div>

        {/* Video reviews slider */}
        <div className="mb-16 fade-up overflow-hidden">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <i className="ri-video-line text-white"></i>
            </div>
            Video Reviews
          </h3>

          <div className="relative reviews-track gap-5 py-2">
            {slides.map((review, index) => (
              <div
                key={index}
                className="group relative shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-black"
                style={{ width: 'min(240px, 34vw)', aspectRatio: '9/16' }}
                onClick={() => setActiveVideo(review.play)}
              >
                <video
                  src={review.play}
                  poster={review.src || undefined}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <i className="ri-map-pin-line"></i>
                    {review.location}
                  </p>
                  <p className="text-[11px] text-yellow-300 mt-1">{review.course}</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                    <i className="ri-fullscreen-fill text-[#D4AC0D]"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written reviews */}
        <div className="fade-up">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-black flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center">
              <i className="ri-chat-quote-line text-white"></i>
            </div>
            Written Reviews
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md card-hover"
              >
                <div className="flex gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-black">{review.name}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <i className="ri-map-pin-line"></i>
                        {review.location}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#B7950B] bg-yellow-50 px-3 py-1.5 rounded-full">
                      {review.course}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
              aria-label="Close video"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-close-line text-2xl"></i>
              </div>
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}