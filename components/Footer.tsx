import Link from 'next/link';
import {
  ADDRESS,
  HOURS_SHORT,
  PHONE_DISPLAY,
  PHONE_TEL,
  INSTAGRAM_URL,
  MAP_DIRECTIONS,
  waLink,
} from '../lib/site';

const quickLinks = [
  { href: '/#services', label: 'Services & Prices' },
  { href: '/#gallery', label: 'Our Work' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/academy', label: 'Academy' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0b10] text-white pt-14 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="The Nail Lobby home">
              <img src="/media/logo.webp" alt="The Nail Lobby" width={480} height={126} loading="lazy" className="h-16 w-auto" />
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Nail studio and academy in Raj Nagar Extension, Ghaziabad. Extensions, gellicure, nail art and bridal nails.
            </p>
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="The Nail Lobby on Instagram" className="w-11 h-11 rounded-full bg-[var(--accent)] text-[#1f1404] flex items-center justify-center hover:brightness-110 transition">
                <i className="ri-instagram-line text-lg" aria-hidden="true"></i>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with The Nail Lobby on WhatsApp" className="w-11 h-11 rounded-full bg-[var(--accent)] text-[#1f1404] flex items-center justify-center hover:brightness-110 transition">
                <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-base font-semibold text-white mb-4">Quick links</h2>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-2.5 text-white/70 hover:text-[#e4b84a] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-base font-semibold text-white mb-4">Visit us</h2>
            <ul className="space-y-3 text-white/70 text-[15px]">
              <li>
                <a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white">
                  <i className="ri-map-pin-line text-[#e4b84a] mt-0.5" aria-hidden="true"></i>
                  <span>{ADDRESS.line1}<br />{ADDRESS.line2}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 py-1 hover:text-white">
                  <i className="ri-phone-line text-[#e4b84a]" aria-hidden="true"></i>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-time-line text-[#e4b84a]" aria-hidden="true"></i>
                {HOURS_SHORT}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} The Nail Lobby. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <i className="ri-shield-check-line text-[#e4b84a]" aria-hidden="true"></i>
            Hygienic, sterilised tools for every client
          </p>
        </div>
      </div>
    </footer>
  );
}
