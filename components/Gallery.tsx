'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://readdy.ai/api/search-image?query=Elegant%20nail%20art%20gallery%20showcase%20with%20intricate%20golden%20designs%2C%20professional%20nail%20photography%2C%20luxury%20nail%20salon%20portfolio%2C%20artistic%20nail%20decorations%2C%20premium%20nail%20styling%2C%20sophisticated%20manicure%20work&width=400&height=500&seq=gallery-1&orientation=portrait',
      alt: 'Golden Nail Art Design'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=French%20manicure%20perfection%20with%20clean%20white%20tips%2C%20classic%20elegant%20nail%20style%2C%20professional%20nail%20salon%20work%2C%20timeless%20nail%20design%2C%20sophisticated%20hand%20care%2C%20premium%20nail%20service%20results&width=400&height=300&seq=gallery-2&orientation=landscape',
      alt: 'French Manicure Perfection'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Gel%20nail%20extensions%20with%20artistic%20patterns%2C%20modern%20nail%20technology%2C%20creative%20nail%20designs%2C%20professional%20nail%20extension%20work%2C%20luxury%20nail%20treatments%2C%20innovative%20nail%20styling&width=400&height=600&seq=gallery-3&orientation=portrait',
      alt: 'Gel Extensions Art'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Bridal%20nail%20design%20with%20delicate%20lace%20patterns%2C%20wedding%20nail%20art%2C%20elegant%20bridal%20manicure%2C%20sophisticated%20wedding%20nail%20styling%2C%20luxury%20bridal%20nail%20package%2C%20romantic%20nail%20decorations&width=400&height=400&seq=gallery-4&orientation=squarish',
      alt: 'Bridal Nail Design'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Colorful%20rainbow%20nail%20art%20with%20gradient%20effects%2C%20creative%20artistic%20nail%20designs%2C%20vibrant%20nail%20colors%2C%20professional%20nail%20artistry%2C%20modern%20nail%20fashion%2C%20expressive%20nail%20styling&width=400&height=500&seq=gallery-5&orientation=portrait',
      alt: 'Rainbow Nail Art'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Luxury%20pedicure%20treatment%20results%20with%20perfect%20nail%20polish%2C%20professional%20foot%20care%2C%20elegant%20pedicure%20styling%2C%20premium%20foot%20nail%20service%2C%20relaxing%20spa%20pedicure%2C%20beautiful%20foot%20nail%20art&width=400&height=300&seq=gallery-6&orientation=landscape',
      alt: 'Luxury Pedicure'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Minimalist%20nude%20nail%20design%20with%20subtle%20golden%20accents%2C%20sophisticated%20simple%20nail%20art%2C%20elegant%20neutral%20nail%20colors%2C%20modern%20minimalist%20nail%20styling%2C%20professional%20subtle%20nail%20work&width=400&height=500&seq=gallery-7&orientation=portrait',
      alt: 'Minimalist Design'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Seasonal%20holiday%20nail%20art%20with%20festive%20decorations%2C%20creative%20themed%20nail%20designs%2C%20artistic%20seasonal%20nail%20styling%2C%20professional%20holiday%20nail%20work%2C%20celebratory%20nail%20art%20patterns&width=400&height=400&seq=gallery-8&orientation=squarish',
      alt: 'Holiday Nail Art'
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="section-gold">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning nail art creations and transformations.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 fade-up">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-yellow-200/30 transition-all duration-300 group-hover:shadow-2xl group-hover:border-yellow-400/50">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <i className="ri-eye-line text-xl text-gray-800"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-close-line text-2xl"></i>
              </div>
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
