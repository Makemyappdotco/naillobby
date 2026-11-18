import { waLink } from '../lib/site';

const steps = [
  { icon: 'ri-palette-line', title: 'Pick your style', description: 'Browse our work or bring your own inspiration. We help you choose a design and shape that suits you.' },
  { icon: 'ri-whatsapp-line', title: 'Book on WhatsApp', description: "Send us the service and a time that works for you. We'll confirm your slot and answer any questions." },
  { icon: 'ri-sparkling-line', title: 'Relax and shine', description: 'Sit back while our artists do your nails. We share aftercare tips so they last longer.' },
];

export default function Process() {
  return (
    <section className="section section-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            How it <span className="text-gold">works</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <p className="section-sub">Three simple steps from idea to finished nails.</p>
        </div>

        <ol className="grid md:grid-cols-3 gap-7 lg:gap-12 stagger">
          {steps.map((step, i) => (
            <li key={step.title} className="relative grid grid-cols-[56px_1fr] gap-x-4 text-left md:block md:text-center">
              {i < steps.length - 1 && (
                <span
                  className="hidden md:block absolute top-9 left-[calc(50%+48px)] right-[calc(-50%+48px)] h-px bg-gradient-to-r from-[var(--accent)] to-[#cdb4dc] draw-line"
                  aria-hidden="true"
                />
              )}
              <span className="relative row-span-3 md:mx-auto md:mb-5 w-14 h-14 md:w-[72px] md:h-[72px] rounded-full btn-gold hover:transform-none text-xl md:text-2xl">
                <i className={step.icon} aria-hidden="true"></i>
              </span>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--accent-strong)] mb-1 md:mb-2">Step {i + 1}</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed md:max-w-sm md:mx-auto">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-8 md:mt-10">
          <a href={waLink("Hi The Nail Lobby! I'd like to book an appointment.")} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 text-lg">
            <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
            Book your appointment
          </a>
        </div>
      </div>
    </section>
  );
}
