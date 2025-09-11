"use client";

import { useState } from "react";
import img from "./assets/nail.jpg";
import img2 from "./assets/nail2.jpg";
import img3 from "./assets/nail3.jpg";
import img4 from "./assets/nail4.jpg";
import img5 from "./assets/nail5.jpg";
import img6 from "./assets/nail6.jpg";
import img7 from "./assets/nail7.jpg";
import img8 from "./assets/nail8.jpg";
import { StaticImageData } from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const galleryImages = [
    {
      src: img,
      alt: "Golden Nail Art Design",
    },
    {
      src: img2,
      alt: "French Manicure Perfection",
    },
    {
      src: img3,
      alt: "Gel Extensions Art",
    },
    {
      src: img4,
      alt: "Bridal Nail Design",
    },
    {
      src: img5,
      alt: "Rainbow Nail Art",
    },
    {
      src: img6,
      alt: "Luxury Pedicure",
    },
    {
      src: img7,
      alt: "Minimalist Design",
    },
    {
      src: img7,
      alt: "Holiday Nail Art",
    },
    {
      src: img8,
      alt: "Holiday Nail Art",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="section-gold">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning nail art creations and
            transformations.
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
                  src={
                    typeof image.src === "string" ? image.src : image.src.src
                  }
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
              src={selectedImage.src}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
