const features = [
  { icon: 'ri-vip-crown-line', title: 'Luxury Treatments', description: 'Careful, detailed work on every set, from a quick gellicure to full extensions.' },
  { icon: 'ri-shopping-bag-line', title: 'Premium Products', description: 'Professional-grade gels, acrylics and polishes that last and are safe for your nails.' },
  { icon: 'ri-award-line', title: 'Certified Artists', description: 'Professionally certified nail technicians with specialised experience.' },
  { icon: 'ri-shield-check-line', title: 'Hygiene First', description: 'Tools sterilised in an autoclave between clients. Files and buffers are single-use.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <h2 className="section-title">
            Why choose <span className="text-gold">The Nail Lobby</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 fade-up">
          {features.map((f) => (
            <div key={f.title} className="card p-4 sm:p-7 text-center">
              <span className="icon-tile w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-5">
                <i className={`${f.icon} text-xl sm:text-2xl`} aria-hidden="true"></i>
              </span>
              <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-3">{f.title}</h3>
              <p className="text-xs sm:text-[15px] text-[var(--text-muted)] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
