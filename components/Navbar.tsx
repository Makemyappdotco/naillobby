'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { waLink } from '../lib/site';
import AnnouncementBar from './AnnouncementBar';

// Hash links start with "/" so they also work from the Academy page.
const links = [
  { href: '/#services', label: 'Services', icon: 'ri-scissors-line' },
  { href: '/#gallery', label: 'Gallery', icon: 'ri-image-line' },
  { href: '/#testimonials', label: 'Reviews', icon: 'ri-star-line' },
  { href: '/academy', label: 'Academy', icon: 'ri-graduation-cap-line' },
  { href: '/#faq', label: 'FAQ', icon: 'ri-question-line' },
  { href: '/#contact', label: 'Contact', icon: 'ri-map-pin-line' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Lock page scroll and allow Escape to close while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${
          isScrolled || open ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'bg-transparent'
        }`}
      >
        <AnnouncementBar />
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6" aria-label="Main">
          <Link href="/" className="flex items-center flex-shrink-0" onClick={close} aria-label="The Nail Lobby home">
            <img src="/media/logo.webp" alt="The Nail Lobby" width={480} height={126} className="h-11 md:h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] font-medium text-[var(--text)] hover:text-[var(--accent-strong)] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden lg:inline-flex px-6 py-3 text-[15px]"
          >
            <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
            Book on WhatsApp
          </a>

          <button
            type="button"
            className="lg:hidden w-11 h-11 -mr-1 flex items-center justify-center rounded-full bg-white/90 shadow-sm border border-[var(--border)]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} aria-hidden="true"></i>
          </button>
        </nav>
      </header>

      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-0 z-[45] bg-white overflow-y-auto animate-fade-in" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="min-h-full flex flex-col pt-[122px] pb-8 px-6 animate-slide-down">
            <ul className="flex-1">
              {links.map((l) => (
                <li key={l.href} className="border-b border-[var(--border)]">
                  <Link href={l.href} onClick={close} className="flex items-center gap-4 py-4 text-lg font-medium">
                    <span className="icon-tile w-10 h-10">
                      <i className={`${l.icon} text-lg`} aria-hidden="true"></i>
                    </span>
                    {l.label}
                    <i className="ri-arrow-right-s-line ml-auto text-xl text-[var(--text-muted)]" aria-hidden="true"></i>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-gold w-full px-6 py-4 text-base mt-8"
            >
              <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
