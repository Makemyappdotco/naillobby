'use client';

import { useState, useRef, useEffect } from 'react';

export default function InstagramReels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // You'll need to get the embed codes from Instagram for each reel
  // Go to the reel on Instagram -> click the three dots -> "Embed" -> copy the code
  const reels = [
    {
      id: 1,
      embedId: 'DOQ9ZvREkzg', // Extract this from your Instagram URL
      title: 'Nail Art Tutorial'
    },
    {
      id: 2,
      embedId: 'DOTidUMknVc', // Replace with actual embed IDs
      title: 'Gel Extensions Process'
    },
    {
      id: 3,
      embedId: 'DOWKqswkmr7',
      title: 'French Manicure Transformation'
    },
    {
      id: 4,
      embedId: 'DOYzkXNkl7i',
      title: 'Luxury Pedicure Experience'
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
    // Load Instagram embed script
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            @thenaillobbyofficial
          </a>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Reels Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[300px]"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black aspect-[9/16]">
                  {/* Instagram Embed */}
                  <blockquote 
                    className="instagram-media w-full h-full" 
                    data-instgrm-permalink={`https://www.instagram.com/reel/${reel.embedId}/`}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: '0',
                      borderRadius: '16px',
                      width: '100%',
                      height: '100%',
                      minHeight: '533px'
                    }}
                  >
                    {/* Fallback loading content */}
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <div className="text-center p-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-sm">Loading Instagram Reel...</p>
                      </div>
                    </div>
                  </blockquote>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                    <h3 className="text-white font-semibold text-base leading-tight bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3">
                      {reel.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instructions for adding real reels */}
        {/* <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">How to add your real Instagram Reels:</h4>
          <ol className="list-decimal list-inside text-blue-800 space-y-1 text-sm">
            <li>Go to your Instagram reel</li>
            <li>Click the three dots (...) menu</li>
            <li>Select "Embed"</li>
            <li>Copy the embed code</li>
            <li>Extract the reel ID from the URL (the part after /reel/ and before /?)</li>
            <li>Replace the embedId in the code above</li>
          </ol>
        </div> */}
      </div>
    </section>
  );
}