
'use client';

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'ri-vip-crown-line',
      title: 'Luxury Treatments',
      description: 'Premium nail care experiences using the finest products and techniques for ultimate luxury.'
    },
    {
      icon: 'ri-shopping-bag-line',
      title: 'Premium Products',
      description: 'Only the highest quality nail products from renowned brands for lasting beauty and health.'
    },
    {
      icon: 'ri-award-line',
      title: 'Certified Artists',
      description: 'Expert nail technicians with professional certifications and years of specialized experience.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Relaxing Atmosphere',
      description: 'Serene, spa-like environment designed to provide the ultimate relaxation and pampering experience.'
    }
  ];

  return (
    <section className="section-consistent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Why Choose <span className="section-gold">The Nail Lobby</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our commitment to excellence, luxury, and personalized care that sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 card-hover text-center fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>

              <h3 className="text-xl font-bold mb-4 text-black">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
