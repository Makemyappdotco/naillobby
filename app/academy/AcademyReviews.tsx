'use client';

import { useEffect, useState } from 'react';

const videoReviews = [
  { video: '/media/review1.mp4', poster: '/media/review1-poster.jpg', name: 'Nail Lobby Student', location: 'Ghaziabad' },
  { video: '/media/review2.mp4', poster: '/media/review2-poster.jpg', name: 'Nail Lobby Student', location: 'Ghaziabad' },
  { video: '/media/review3.mp4', poster: '/media/review3-poster.jpg', name: 'Nail Lobby Student', location: 'Ghaziabad' },
];

// TODO (client): confirm these written reviews are from real students.
const writtenReviews = [
  {
    name: 'Aarti Mishra',
    location: 'Vasundhara, Ghaziabad',
    course: 'Advanced Nail Mastery',
    rating: 5,
    text: 'I had zero experience before joining and now I run my own small nail setup from home. Ma\'am taught everything from extensions to nail art one-on-one. Worth every rupee, honestly!'
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
    course: 'Advanced Nail Mastery',
    rating: 5,
    text: 'From a complete novice to doing cat eye and chrome nails confidently in 20 days. The individual attention is real, no rushing, no batch crowd. Best decision I made for my career.'
  },
  {
    name: 'Tanvi Rana',
    location: 'Raj Nagar, Ghaziabad',
    course: 'Basic Nail Mastery',
    rating: 5,
    text: 'Clean, professional and so supportive. I loved practicing on real hands. The lifetime WhatsApp support helped me even after finishing. Amazing academy in Ghaziabad!'
  },
  {
    name: 'Ishita Agarwal',
    location: 'Noida Extension',
    course: 'Advanced Nail Mastery',
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


export default function AcademyReviews() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="reviews" className="section section-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            Student <span className="text-gold">reviews</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <p className="section-sub">Hear from students who trained with us.</p>
        </div>

        <h3 className="font-sans text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
          <i className="ri-video-line text-[var(--accent-strong)]" aria-hidden="true"></i>
          Video reviews
        </h3>
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 mb-8">
          {videoReviews.map((r) => (
            <button
              key={r.video}
              type="button"
              onClick={() => setActive(r.video)}
              className="group relative snap-center shrink-0 w-[62%] sm:w-auto aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-lg text-left"
              aria-label={`Play video review from ${r.name}`}
            >
              <img src={r.poster} alt="" width={720} height={1280} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" aria-hidden="true" />
              <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                  <i className="ri-play-fill text-3xl text-[var(--accent-strong)] ml-1"></i>
                </span>
              </span>
              <span className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="block font-semibold">{r.name}</span>
                <span className="block text-xs text-white/80">{r.location}</span>
              </span>
            </button>
          ))}
        </div>

        <h3 className="font-sans text-lg md:text-xl font-semibold mb-4 flex items-center gap-2">
          <i className="ri-chat-quote-line text-[var(--accent-strong)]" aria-hidden="true"></i>
          Written reviews
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger">
          {writtenReviews.map((r) => (
            <figure key={r.name} className="card card-hover p-6 flex flex-col">
              <div className="flex gap-0.5 mb-3 text-[var(--accent)]" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className={i < r.rating ? 'ri-star-fill' : 'ri-star-line'} aria-hidden="true"></i>
                ))}
              </div>
              <blockquote className="leading-relaxed mb-5 text-[15px]">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-auto pt-4 border-t border-[var(--border)]">
                <span className="block font-semibold">{r.name}</span>
                <span className="block text-xs text-[var(--text-muted)] mb-2.5">{r.location}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-strong)] bg-[var(--accent-soft)] px-3 py-1.5 rounded-full whitespace-nowrap">
                  <i className="ri-graduation-cap-line" aria-hidden="true"></i>
                  {r.course}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true" aria-label="Video review" onClick={() => setActive(null)}>
          <video src={active} controls autoPlay playsInline className="max-h-[85vh] max-w-full rounded-xl bg-black" onClick={(e) => e.stopPropagation()} />
          <button type="button" onClick={() => setActive(null)} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center" aria-label="Close video">
            <i className="ri-close-line text-2xl" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </section>
  );
}
