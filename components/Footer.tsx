
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/15fc10fb8ab5e40af1f8296f96cfb897.png" 
                alt="The Nail Lobby"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Rajnagar's premier nail salon offering luxury treatments, premium products, and exceptional service in a relaxing atmosphere.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/thenaillobbyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a
                href="https://wa.me/919999345615"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <i className="ri-whatsapp-line text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-yellow-400 mt-1"></i>
                <span className="text-sm">
                  UST-44, Aura Plaza Market<br />
                  Rajnagar Extension, Ghaziabad
                </span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-yellow-400"></i>
                <span className="text-sm">+91 99993 45615</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-time-line text-yellow-400"></i>
                <span className="text-sm">Mon-Sun: 11AM-8:30PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            2025 The Nail Lobby. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <i className="ri-shield-check-line text-yellow-400"></i>
            <span>100% Hygienic & Safe Treatments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
