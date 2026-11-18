import { waLink } from '../../lib/site';

const stats = [
  { icon: 'ri-user-heart-line', title: '1-on-1', sub: 'Individual attention' },
  { icon: 'ri-time-line', title: '2 hrs/day', sub: 'Flexible timing' },
  { icon: 'ri-award-line', title: 'Certificate', sub: 'On completion' },
];

export default function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <img
        src="/media/academy-hero.webp"
        alt=""
        width={1600}
        height={893}
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      {/* Stronger wash on phones so the headline stays readable over the photo */}
      <div className="absolute inset-0 bg-white/85 sm:bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/90 sm:to-white/20" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 lg:min-h-[86vh] lg:flex lg:items-center">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 bg-white border border-[#ecd9a8] rounded-full px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] mb-6 shadow-sm">
            <i className="ri-graduation-cap-line" aria-hidden="true"></i>
            The Nail Lobby Academy
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
            Learn the art of <span className="text-gold">nail mastery</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#3d3640] mb-8 max-w-xl leading-relaxed">
            Turn your passion into a profession with one-on-one nail courses in Ghaziabad. Practical training, premium
            products and the skills to launch your own nail career.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={waLink("Hi! I'd like to enroll at The Nail Lobby Academy. Can you share the next available start date?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 text-lg"
            >
              <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
              Enroll on WhatsApp
            </a>
            <a href="#courses" className="btn-outline px-8 py-4 text-lg">
              <i className="ri-price-tag-3-line text-lg" aria-hidden="true"></i>
              View courses
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-8">
            {stats.map((s) => (
              <li key={s.title} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                <span className="icon-tile w-11 h-11 sm:w-12 sm:h-12 bg-white">
                  <i className={`${s.icon} text-xl`} aria-hidden="true"></i>
                </span>
                <span>
                  <span className="block font-bold text-sm sm:text-lg">{s.title}</span>
                  <span className="block text-xs sm:text-sm text-[var(--text-muted)]">{s.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
