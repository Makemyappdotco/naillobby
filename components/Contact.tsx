
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Booking request received! We\'ll confirm your appointment within 2 hours via WhatsApp.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Generate available time slots
  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Book Your <span className="section-gold">Appointment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to get gorgeous nails? Schedule your appointment and we'll confirm within 2 hours!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-up">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    Shop No. 15, Ground Floor<br />
                    Rajnagar Extension, Ghaziabad<br />
                    Uttar Pradesh 201017
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Contact Us</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">+91 99993 45615</p>
                    <a
                      href="https://wa.me/919999345615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <i className="ri-whatsapp-line"></i>
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2399044140134!2d77.43154631455065!3d28.625293982442777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b8f2e8b2cd%3A0x1a9e3a7e9c0a8b2d!2sRajnagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Booking Form */}
          <div className="fade-up">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-black">Book Your Appointment</h3>

              <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your WhatsApp number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm bg-white pr-8"
                  >
                    <option value="">Choose your service</option>
                    <option value="Classic Manicure - ₹899 (45 min)">Classic Manicure - ₹899 (45 min)</option>
                    <option value="Gel Extensions - ₹1,599 (90 min)">Gel Extensions - ₹1,599 (90 min)</option>
                    <option value="Nail Art Design - ₹1,299 (60 min)">Nail Art Design - ₹1,299 (60 min)</option>
                    <option value="French Manicure - ₹1,099 (50 min)">French Manicure - ₹1,099 (50 min)</option>
                    <option value="Pedicure Luxury - ₹1,399 (75 min)">Pedicure Luxury - ₹1,399 (75 min)</option>
                    <option value="Bridal Package - ₹2,999 (3 hours)">Bridal Package - ₹2,999 (3 hours)</option>
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm bg-white pr-8"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Design Ideas</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about any specific designs, colors, or special requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-colors text-sm resize-vertical"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* First Time Client Offer */}
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-gift-line text-purple-600"></i>
                    </div>
                    <span className="font-semibold text-purple-700">First-Time Client?</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Enjoy <span className="section-gold font-semibold">20% OFF</span> on your first appointment! Discount will be applied automatically.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full btn-gold py-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap gold-shimmer"
                >
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </button>

                {submitStatus && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-checkbox-circle-line text-green-600"></i>
                      </div>
                      <p className="text-green-700 text-sm">{submitStatus}</p>
                    </div>
                  </div>
                )}

                <div className="text-center text-sm text-gray-500">
                  <p>By booking, you agree to our cancellation policy: 24 hours notice required</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
