import { waLink, PHONE_DISPLAY, PHONE_TEL } from '../../lib/site';

export default function AcademyCTA() {
  return (
    <section className="section bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,#fbf3df_0%,transparent_70%)] bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Ready to start your <span className="text-gold">nail career</span>?
        </h2>
        <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
          Seats are limited to keep every class one-on-one. Message us today to book your spot.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a href={waLink("Hi! I'd like to book a seat at The Nail Lobby Academy.")} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 text-lg w-full sm:w-auto">
            <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
            Book my seat
          </a>
          <a href={`tel:${PHONE_TEL}`} className="btn-outline px-8 py-4 text-lg w-full sm:w-auto">
            <i className="ri-phone-line text-lg" aria-hidden="true"></i>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
