'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open - improved implementation
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;
    const originalTouchAction = body.style.touchAction;
    
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      body.dataset.scrollY = String(scrollY);
      
      // Lock scroll
      body.style.overflow = 'hidden';
      body.style.touchAction = 'none';
      
      // Prevent content shift from scrollbar disappearance
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      // Restore scroll
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
      body.style.touchAction = originalTouchAction;
      delete body.dataset.scrollY;
    }
    
    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
      body.style.touchAction = originalTouchAction;
      delete body.dataset.scrollY;
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-yellow-400/20 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <img 
                src="https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/15fc10fb8ab5e40af1f8296f96cfb897.png" 
                alt="The Nail Lobby"
                className="h-14 md:h-18 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/academy" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Academy
              </Link>
              <Link href="#gallery" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Gallery
              </Link>
              <Link href="#testimonials" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Reviews
              </Link>
              <Link href="#contact" className="text-black hover:text-yellow-600 transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/919999345615"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-primary px-6 py-3 rounded-full font-semibold whitespace-nowrap"
              >
                Book on WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button - Spacer for layout */}
            <div className="md:hidden w-10"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Outside nav to sit above everything */}
      <button
        className="md:hidden fixed top-4 right-4 p-2 z-[70] cursor-pointer bg-white/90 backdrop-blur-sm rounded-full shadow-md"
        onClick={toggleMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
      >
        <div className="w-6 h-6 flex items-center justify-center pointer-events-none">
          {isMobileMenuOpen ? (
            <i className="ri-close-line text-2xl text-black"></i>
          ) : (
            <i className="ri-menu-line text-2xl text-black"></i>
          )}
        </div>
      </button>

      {/* Mobile Menu - Separate from nav to avoid z-index issues */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-0 bg-white z-[65] overflow-y-auto"
          style={{ touchAction: 'pan-y' }}
        >
          <div className="min-h-full flex flex-col pt-16">
            {/* Header with Logo */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex justify-center">
                <img 
                  src="https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/15fc10fb8ab5e40af1f8296f96cfb897.png" 
                  alt="The Nail Lobby"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-2">
                Rajnagar's Premium Nail Studio
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-4 py-4">
              <nav className="space-y-2">
                <Link 
                  href="#services" 
                  className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-scissors-line text-lg text-yellow-600"></i>
                    </div>
                    Services
                  </div>
                </Link>

                <Link 
                  href="/academy"
                  className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-lg text-yellow-600"></i>
                    </div>
                    Academy
                  </div>
                </Link>

                <Link 
                  href="#gallery" 
                  className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-image-line text-lg text-yellow-600"></i>
                    </div>
                    Gallery
                  </div>
                </Link>

                <Link 
                  href="#testimonials" 
                  className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-line text-lg text-yellow-600"></i>
                    </div>
                    Reviews
                  </div>
                </Link>

                <Link 
                  href="#faq" 
                  className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-100"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-question-line text-lg text-yellow-600"></i>
                    </div>
                    FAQ
                  </div>
                </Link>

                <Link 
                  href="#contact" 
                  className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-phone-line text-lg text-yellow-600"></i>
                    </div>
                    Contact
                  </div>
                </Link>
              </nav>
            </div>

            {/* CTA Section */}
            <div className="px-4 py-4 border-t border-gray-100 bg-gray-50">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Ready for Beautiful Nails?
                </h3>
                <a
                  href="https://wa.me/919999345615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold btn-primary w-full px-6 py-3 rounded-full font-semibold text-base inline-flex items-center justify-center gap-3 whitespace-nowrap"
                  onClick={closeMenu}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-lg"></i>
                  </div>
                  Book on WhatsApp
                </a>
                <p className="text-sm text-gray-500">
                  Quick booking • Instant confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
