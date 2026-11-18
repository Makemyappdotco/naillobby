import { waLink, MAP_DIRECTIONS, PHONE_DISPLAY } from '../lib/site';

// Moving announcement strip at the very top of every page.
// Edit the messages here.
const items = [
  { icon: 'ri-time-line', text: 'Open every day, 11 AM to 8:30 PM', href: '/#contact' },
  { icon: 'ri-whatsapp-line', text: `Book on WhatsApp: ${PHONE_DISPLAY}`, href: waLink("Hi The Nail Lobby! I'd like to book an appointment."), external: true },
  { icon: 'ri-star-fill', text: 'Rated 5.0 on Google', href: MAP_DIRECTIONS, external: true },
  { icon: 'ri-graduation-cap-line', text: 'Nail Academy: one-on-one courses, now enrolling', href: '/academy' },
  { icon: 'ri-walk-line', text: 'Walk-ins welcome', href: '/#contact' },
  { icon: 'ri-map-pin-line', text: 'UST-44, Aura Plaza Market, Raj Nagar Extension', href: MAP_DIRECTIONS, external: true },
];

export default function AnnouncementBar() {
  const doubled = [...items, ...items];
  return (
    <div className="h-[34px] overflow-hidden bg-[#2b1533] text-[#f3d58a] text-[13px] font-medium flex items-center" aria-label="Announcements">
      <div className="marquee-track announce-track">
        {doubled.map((it, i) => (
          <a
            key={i}
            href={it.href}
            {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            aria-hidden={i >= items.length ? 'true' : undefined}
            tabIndex={i >= items.length ? -1 : undefined}
            className="flex items-center gap-2 whitespace-nowrap px-6 hover:text-white transition-colors"
          >
            <i className={`${it.icon} text-[15px]`} aria-hidden="true"></i>
            {it.text}
            <span className="ml-6 text-[#c89028]" aria-hidden="true">✦</span>
          </a>
        ))}
      </div>
    </div>
  );
}
