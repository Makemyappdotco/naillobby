
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md  border-yellow-400/20 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl text-black`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Optimized */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 ">
            <div className="min-h-full flex flex-col bg-white border-b border-black">
              {/* Header with Logo - Reduced padding */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-center">
                  <img 
                    src="https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/15fc10fb8ab5e40af1f8296f96cfb897.png" 
                    alt="The Nail Lobby"
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-center text-gray-600 text-sm mt-2">
                  Rajnagar's Premier Nail Studio
                </p>
              </div>

              {/* Navigation Links - Reduced spacing */}
              <div className="flex-1 px-4 py-4">
                <nav className="space-y-2">
                  <Link 
                    href="#services" 
                    className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-scissors-line text-lg text-yellow-600"></i>
                      </div>
                      Services
                    </div>
                  </Link>

                  <Link 
                    href="#gallery" 
                    className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
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
                    className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors border-b border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-star-line text-lg text-yellow-600"></i>
                      </div>
                      Reviews
                    </div>
                  </Link>

                  <Link 
                    href="#contact" 
                    className="block text-center py-3 text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
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

              {/* CTA Section - Reduced padding */}
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
                    onClick={() => setIsMobileMenuOpen(false)}
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
      </div>
    </nav>
  );
}
