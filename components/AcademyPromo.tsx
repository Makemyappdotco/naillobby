import Link from 'next/link';
import { waLink } from '../lib/site';

export default function AcademyPromo() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-[0_24px_60px_-30px_rgba(60,30,70,0.35)] grid lg:grid-cols-2 fade-up">
          <div className="relative aspect-square lg:aspect-auto">
            <img
              src="/media/academy-promo.webp"
              alt="Nail art training at The Nail Lobby Academy"
              width={1000}
              height={981}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="bg-[var(--surface)] p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] mb-3">
              <i className="ri-graduation-cap-line" aria-hidden="true"></i>
              The Nail Lobby Academy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Turn your passion into a <span className="text-gold">profession</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg mb-6 leading-relaxed">
              One-on-one nail courses in Ghaziabad with hands-on practice, premium products and the skills to start your
              own nail career. 2 hours a day, flexible timing.
            </p>
            <ul className="space-y-3 mb-8">
              {['Basic and Advanced Nail Mastery courses', '1-on-1 individual attention', 'Certificate and career guidance'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <i className="ri-checkbox-circle-fill text-[var(--accent)] text-lg" aria-hidden="true"></i>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/academy" className="btn-gold px-7 py-3.5">
                Explore the Academy
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </Link>
              <a
                href={waLink("Hi! I'd like to know more about The Nail Lobby Academy courses.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-7 py-3.5"
              >
                <i className="ri-whatsapp-line" aria-hidden="true"></i>
                Ask about courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
