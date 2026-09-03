'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://storage.readdy-site.link/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/6bc70d2c-0e65-4e33-85ee-3653496be5f6_IMG_0453.JPG.jpeg?v=d5d21eed6bdd178f81799d941df614f0',
      alt: 'Nail Art by The Nail Lobby'
    },
    {
      src: 'https://storage.readdy-site.link/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/88ed9121-30bc-479f-80fc-791540e2ef15_IMG_0452.JPG.jpeg?v=08bfb16e3fb4f7915e97c9efd4d0333b',
      alt: 'Nail Art by The Nail Lobby'
    },
    {
      src: 'https://storage.readdy-site.link/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/0bd80270-40bf-40eb-8a60-ed293ef5ca0a_IMG_0451.JPG.jpeg?v=592e4a59fdd308106ebca14c0a119074',
      alt: 'Nail Art by The Nail Lobby'
    },
    {
      src: 'https://storage.readdy-site.link/project_files/913d7134-42dc-4bbf-816f-7965010bb61a/a99acaf5-d062-4ae4-a093-197b91b49f25_IMG_0449.JPG.jpeg?v=b1cdda7c51d7f70cae18476e77a04d12',
      alt: 'Nail Art by The Nail Lobby'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Cat%20eye%20nail%20art%20with%20magnetic%20gel%20polish%20creating%20stunning%203D%20chrome%20effect%2C%20deep%20burgundy%20and%20black%20cat%20eye%20nails%2C%20professional%20nail%20salon%20work%2C%20close%20up%20hand%20photography%2C%20luxury%20nail%20studio%2C%20mesmerizing%20light%20reflection%20streak%20on%20nails%2C%20clean%20white%20background%2C%20highly%20detailed&width=400&height=500&seq=gallery-cateye-1&orientation=portrait',
      alt: 'Cat Eye Nails'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Cat%20eye%20gel%20nails%20with%20emerald%20green%20magnetic%20effect%2C%20stunning%20cat%20eye%20nail%20art%20technique%2C%20professional%20nail%20artist%20work%2C%20elegant%20hand%20pose%2C%20luxury%20nail%20salon%2C%20shimmering%20light%20streak%20across%20nails%2C%20clean%20simple%20white%20background%2C%20close%20up%20photography&width=400&height=400&seq=gallery-cateye-2&orientation=squarish',
      alt: 'Cat Eye Gel Nails'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Cat%20eye%20nail%20extensions%20with%20deep%20navy%20blue%20magnetic%20gel%20polish%2C%20dramatic%20cat%20eye%20effect%20on%20long%20almond%20shaped%20nails%2C%20professional%20nail%20photography%2C%20luxury%20nail%20studio%2C%20beautiful%20light%20reflection%20streak%2C%20elegant%20hand%20close%20up%2C%20white%20background&width=400&height=500&seq=gallery-cateye-3&orientation=portrait',
      alt: 'Cat Eye Nail Extensions'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Bridal%20nail%20design%20with%20delicate%20lace%20patterns%2C%20wedding%20nail%20art%2C%20elegant%20bridal%20manicure%2C%20sophisticated%20wedding%20nail%20styling%2C%20luxury%20bridal%20nail%20package%2C%20romantic%20nail%20decorations%2C%20clean%20white%20background&width=400&height=400&seq=gallery-bridal-1&orientation=squarish',
      alt: 'Bridal Nail Design'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Gel%20nail%20extensions%20with%20artistic%20patterns%2C%20modern%20nail%20technology%2C%20creative%20nail%20designs%2C%20professional%20nail%20extension%20work%2C%20luxury%20nail%20treatments%2C%20innovative%20nail%20styling%2C%20clean%20background&width=400&height=600&seq=gallery-gel-1&orientation=portrait',
      alt: 'Gel Extensions Art'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=Minimalist%20nude%20nail%20design%20with%20subtle%20golden%20accents%2C%20sophisticated%20simple%20nail%20art%2C%20elegant%20neutral%20nail%20colors%2C%20modern%20minimalist%20nail%20styling%2C%20professional%20subtle%20nail%20work%2C%20clean%20background&width=400&height=300&seq=gallery-nude-1&orientation=landscape',
      alt: 'Minimalist Design'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=French%20manicure%20perfection%20with%20clean%20white%20tips%2C%20classic%20elegant%20nail%20style%2C%20professional%20nail%20salon%20work%2C%20timeless%20nail%20design%2C%20sophisticated%20hand%20care%2C%20premium%20nail%20service%20results%2C%20clean%20background&width=400&height=500&seq=gallery-french-1&orientation=portrait',
      alt: 'French Manicure'
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
