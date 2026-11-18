import { waLink } from '../../lib/site';

type Course = {
  name: string;
  badge: { icon: string; label: string };
  duration: string;
  price: string;
  image: { src: string; w: number; h: number };
  intro: string;
  modules: string[];
  featured?: boolean;
  message: string;
};

const courses: Course[] = [
  {
    name: 'Basic Nail Mastery',
    badge: { icon: 'ri-user-smile-line', label: 'Beginners welcome' },
    duration: '15 to 20 days',
    price: '₹18,000',
    image: { src: '/media/course-basic.webp', w: 900, h: 468 },
    intro: 'The right start for beginners. Learn the essentials of nail care, gel polish and basic nail art with individual attention at every step.',
    modules: [
      'Nail anatomy, hygiene and salon safety',
      'Classic manicure and pedicure basics',
      'Gel polish (Gellicure) application',
      'Solid colours and French nails',
      'Basic nail art: dots, stripes, marble',
      'Gel and acrylic overlay fundamentals',
      'Clean removal and cuticle care',
      'Client handling and aftercare tips',
    ],
    message: "Hi! I'm interested in the Basic Nail Mastery course (₹18,000). Can you share the next start date?",
  },
  {
    name: 'Advanced Nail Mastery',
    badge: { icon: 'ri-fire-line', label: 'Most popular' },
    duration: '20 to 25 days',
    price: '₹21,000',
    image: { src: '/media/course-advance.webp', w: 900, h: 468 },
    intro: 'Take your skills to the next level. Master extensions, sculpting, advanced art and luxury techniques to work like a professional.',
    modules: [
      'Everything in the Basic course, plus:',
      'Acrylic, gel, soft gel and polygel extensions',
      'No-tip and no-glue extension techniques',
      'Sculpting, refills and overlays',
      'Cat eye, chrome, marbling and 3D art',
      'Russian manicure and luxury finishes',
      'Product knowledge and building your kit',
    ],
    featured: true,
    message: "Hi! I'm interested in the Advanced Nail Mastery course (₹21,000). Can you share the next start date?",
  },
];

const included = [
  { icon: 'ri-user-heart-line', text: '1-on-1 individual attention' },
  { icon: 'ri-time-line', text: '2 hours per day, flexible slots' },
  { icon: 'ri-hand-heart-line', text: 'Practice on live models' },
  { icon: 'ri-vip-diamond-line', text: 'Premium brand products' },
  { icon: 'ri-refresh-line', text: 'Free doubt-clearing sessions' },
  { icon: 'ri-award-line', text: 'Certificate on completion' },
  { icon: 'ri-briefcase-line', text: 'Guidance to start your business' },
  { icon: 'ri-message-2-line', text: 'Lifetime WhatsApp support' },
];

export default function AcademyCourses() {
  return (
    <section id="courses" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            Our <span className="text-gold">nail courses</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <p className="section-sub">
            Two focused courses, both one-on-one and hands-on. Seats are limited so every student gets personal attention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 stagger">
          {courses.map((c) => (
            <article
              key={c.name}
              className={`card card-hover overflow-hidden flex flex-col ${c.featured ? 'border-2 border-[#e2c47c]' : ''}`}
            >
              <div className="relative h-48 sm:h-52">
                <img src={c.image.src} alt="" width={c.image.w} height={c.image.h} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide text-[var(--accent-strong)] shadow">
                  <i className={c.badge.icon} aria-hidden="true"></i>
                  {c.badge.label}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold">{c.name}</h3>
                  <span className="inline-flex items-center gap-1.5 bg-[var(--surface-2)] px-3 py-1.5 rounded-lg text-sm font-semibold text-[#5b3f6e]">
                    <i className="ri-time-line" aria-hidden="true"></i>
                    {c.duration}
                  </span>
                </div>
                <p className="mb-5">
                  <span className="text-4xl font-bold text-[var(--accent-strong)]">{c.price}</span>
                  <span className="text-sm text-[var(--text-muted)]"> / full course</span>
                </p>
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{c.intro}</p>
                <ul className="space-y-2.5 mb-8">
                  {c.modules.map((m) => (
                    <li key={m} className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-[var(--accent)] text-lg leading-6" aria-hidden="true"></i>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink(c.message)} target="_blank" rel="noopener noreferrer" className="btn-gold w-full px-6 py-4 mt-auto">
                  <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
                  Enroll in {c.name.split(' ')[0]}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 card p-6 sm:p-8 fade-up">
          <h3 className="text-center text-xl md:text-2xl font-bold mb-8">Both courses include</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {included.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="icon-tile w-11 h-11"><i className={item.icon} aria-hidden="true"></i></span>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
