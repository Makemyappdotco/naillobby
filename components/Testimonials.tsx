import { MAP_DIRECTIONS } from '../lib/site';

// TODO (client): replace these with real Google reviews and add the Google review link.
const testimonials = [
  { name: 'Priya Sharma', text: 'Absolutely love the service at The Nail Lobby! The attention to detail is incredible and my nails have never looked better. The staff is so professional and the atmosphere is so relaxing.', service: 'Gel Extensions' },
  { name: 'Anita Patel', text: 'Best nail salon in Rajnagar! I got my bridal nails done here and they were absolutely perfect. The artist understood exactly what I wanted and exceeded my expectations.', service: 'Bridal Nails' },
  { name: 'Meera Singh', text: "The quality of service here is unmatched. Clean, hygienic, and the nail art is simply stunning. I've been coming here for months and it's always consistent.", service: 'Nail Art' },
  { name: 'Kavya Gupta', text: 'Such a luxurious experience! From the moment I walked in, I felt pampered. My nails look amazing. Highly recommend to everyone!', service: 'Gellicure' },
  { name: 'Riya Jain', text: 'Professional, clean, and creative! The nail artists here are true artists. They always suggest the right design and the results are always flawless.', service: 'Acrylic Extensions' },
  { name: 'Sneha Verma', text: 'The Nail Lobby has become my go-to place for all nail services. The quality is consistently excellent and the staff makes you feel so comfortable.', service: 'Russian Manicure' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            What our <span className="text-gold">clients say</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 mt-1 px-4 py-2 rounded-full whitespace-nowrap text-xs sm:text-sm bg-white border border-[var(--border)] shadow-sm hover:border-[#e6cf98] transition-colors"
          >
            <span className="font-semibold">5.0</span>
            <span className="text-[var(--accent)]" aria-hidden="true">★★★★★</span>
            <span className="text-[var(--text-muted)]">150+ <span className="hidden min-[360px]:inline">Google </span>reviews</span>
            <i className="ri-arrow-right-up-line text-[var(--accent-strong)]" aria-hidden="true"></i>
          </a>
        </div>

        {/* Swipe row on phones, grid on larger screens */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 stagger">
          {testimonials.map((t) => (
            <figure key={t.name} className="card card-hover p-6 sm:p-7 flex flex-col snap-center shrink-0 w-[85%] sm:w-auto">
              <div className="flex gap-0.5 mb-3 text-[var(--accent)]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="ri-star-fill" aria-hidden="true"></i>
                ))}
              </div>
              <blockquote className="text-[var(--text)] leading-relaxed mb-5 text-[15px]">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-auto pt-4 border-t border-[var(--border)] flex items-center gap-3">
                <span className="icon-tile w-10 h-10 font-semibold text-sm" aria-hidden="true">
                  {t.name.split(' ').map((p) => p[0]).join('')}
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-[var(--text-muted)]">{t.service}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="sm:hidden text-center text-xs text-[var(--text-muted)] mt-3">Swipe to read more</p>
      </div>
    </section>
  );
}
