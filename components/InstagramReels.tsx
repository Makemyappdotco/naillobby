
// Original code:
'use client';

import { useState, useRef, useEffect } from 'react';

export default function InstagramReels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const reels = [
    {
      id: 1,
      thumbnail: 'https://readdy.ai/api/search-image?query=Instagram%20reel%20style%20nail%20art%20time-lapse%20video%20thumbnail%2C%20professional%20nail%20artist%20creating%20intricate%20design%2C%20vertical%20video%20format%2C%20social%20media%20aesthetic%2C%20modern%20nail%20salon&width=300&height=533&seq=reel-1&orientation=portrait',
      title: 'Nail Art Tutorial'
    },
    {
      id: 2,
      thumbnail: 'https://readdy.ai/api/search-image?query=Instagram%20reel%20showing%20gel%20extension%20process%2C%20professional%20nail%20technique%20demonstration%2C%20vertical%20video%20format%2C%20luxury%20nail%20salon%20background%2C%20step%20by%20step%20nail%20tutorial&width=300&height=533&seq=reel-2&orientation=portrait',
      title: 'Gel Extensions Process'
    },
    {
      id: 3,
      thumbnail: 'https://readdy.ai/api/search-image?query=Instagram%20reel%20featuring%20French%20manicure%20transformation%2C%20before%20and%20after%20nail%20makeover%2C%20vertical%20social%20media%20format%2C%20elegant%20nail%20design%20showcase%2C%20professional%20nail%20service&width=300&height=533&seq=reel-3&orientation=portrait',
      title: 'French Manicure Transformation'
    },
    {
      id: 4,
      thumbnail: 'https://readdy.ai/api/search-image?query=Instagram%20reel%20showing%20luxury%20pedicure%20spa%20treatment%2C%20relaxing%20foot%20care%20process%2C%20vertical%20video%20format%2C%20premium%20spa%20atmosphere%2C%20self-care%20beauty%20content&width=300&height=533&seq=reel-4&orientation=portrait',
      title: 'Luxury Pedicure Experience'
    },
    {
      id: 5,
      thumbnail: 'https://readdy.ai/api/search-image?query=Instagram%20reel%20featuring%20bridal%20nail%20design%20creation%2C%20wedding%20nail%20art%20tutorial%2C%20vertical%20video%20format%2C%20elegant%20bridal%20beauty%20content%2C%20sophisticated%20nail%20styling&width=300&height=533&seq=reel-5&orientation=portrait',
      title: 'Bridal Nail Design'
    },
    {
      id: 6,
      thumbnail: 'https://readdy.ai/api/search-image?query=Instagram%20reel%20showing%20nail%20care%20routine%20and%20tips%2C%20professional%20nail%20maintenance%20advice%2C%20vertical%20social%20media%20format%2C%20educational%20beauty%20content%2C%20healthy%20nail%20care&width=300&height=533&seq=reel-6&orientation=portrait',
      title: 'Nail Care Tips'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = 320;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Follow Our <span className="section-gold">Instagram</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Get inspired by our latest nail art creations and behind-the-scenes content.
          </p>
          <a
            href="https://instagram.com/thenaillobbyofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-600 font-semibold transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-instagram-line text-xl"></i>
            </div>
            @thenaillobbyofficial
          </a>
        </div>

        <div className="relative fade-up">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Reels Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[300px] group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-[9/16]">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-2xl text-black ml-1"></i>
                    </div>
                  </div>
                  
                  {/* Instagram Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <i className="ri-instagram-line text-purple-500"></i>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      {reel.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(reels.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: index * 320,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

