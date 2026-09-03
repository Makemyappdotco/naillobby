
'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Absolutely love the service at The Nail Lobby! The attention to detail is incredible and my nails have never looked better. The staff is so professional and the atmosphere is so relaxing.',
      service: 'Gel Extensions'
    },
    {
      name: 'Anita Patel',
      rating: 5,
      text: 'Best nail salon in Rajnagar! I got my bridal nails done here and they were absolutely perfect. The artist understood exactly what I wanted and exceeded my expectations.',
      service: 'Bridal Package'
    },
    {
      name: 'Meera Singh',
      rating: 5,
      text: 'The quality of service here is unmatched. Clean, hygienic, and the nail art is simply stunning. I\'ve been coming here for months and it\'s always consistent excellence.',
      service: 'Nail Art Design'
    },
    {
      name: 'Kavya Gupta',
      rating: 5,
      text: 'Such a luxurious experience! From the moment I walked in, I felt pampered. The pedicure was heavenly and my nails look amazing. Highly recommend to everyone!',
      service: 'Luxury Pedicure'
    },
    {
      name: 'Riya Jain',
      rating: 5,
      text: 'Professional, clean, and creative! The nail artists here are true artists. They always suggest the perfect design and the results are always flawless. Love this place!',
      service: 'French Manicure'
    },
    {
      name: 'Sneha Verma',
      rating: 5,
      text: 'The Nail Lobby has become my go-to place for all nail services. The quality is consistently excellent and the staff makes you feel so comfortable. Worth every penny!',
      service: 'Classic Manicure'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`ri-star-${index < rating ? 'fill' : 'line'} ${
          index < rating ? 'text-yellow-500' : 'text-gray-300'
        }`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="section-consistent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            What Our <span className="section-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg card-hover fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-black mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.service}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center">
                    <i className="ri-user-3-line text-white text-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-up">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the luxury yourself?
          </p>
          <a
            href="https://wa.me/919999345615"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-primary cta px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-line text-lg"></i>
            </div>
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
