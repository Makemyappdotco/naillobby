'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades in every `.fade-up` element as it scrolls into view.
// Also picks up elements added later (tab switches, route changes).
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const scan = () =>
      document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => io.observe(el));
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
