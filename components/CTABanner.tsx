import { waLink, PHONE_DISPLAY, PHONE_TEL } from '../lib/site';

export default function CTABanner() {
  return (
    <section className="section bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,#fbf3df_0%,transparent_70%)] bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Ready for <span className="text-gold">gorgeous nails</span>?
        </h2>
        <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
          Book your appointment today. Message us on WhatsApp or give us a call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a href={waLink("Hi The Nail Lobby! I'd like to book an appointment.")} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 text-lg w-full sm:w-auto">
            <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
            Book on WhatsApp
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
