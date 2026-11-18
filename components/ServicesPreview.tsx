'use client';

import { useState } from 'react';
import { services, formatPrice, waLink, type Service } from '../lib/site';

const tabs = Object.keys(services) as (keyof typeof services)[];

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="card card-hover p-4 sm:p-6 flex flex-col">
      <div className="hidden sm:flex items-start justify-between gap-3 mb-3">
        <span className="icon-tile w-11 h-11">
          <i className={`${s.icon} text-xl`} aria-hidden="true"></i>
        </span>
        <span className="text-xs font-medium text-[#5b3f6e] bg-[var(--surface-2)] px-3 py-1 rounded-full">
          {s.duration}
        </span>
      </div>
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="text-lg sm:text-xl font-bold">{s.name}</h3>
        <span className="sm:hidden mt-0.5 text-xs font-medium text-[#5b3f6e] bg-[var(--surface-2)] px-2.5 py-1 rounded-full whitespace-nowrap">
          {s.duration}
        </span>
      </div>
      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 sm:mb-4">{s.benefit}</p>
      <div className="mt-auto flex items-center justify-between gap-3">
        <p className="leading-tight">
          {s.from && <span className="block text-xs text-[var(--text-muted)]">From</span>}
          <span className="text-xl font-semibold text-[var(--accent-strong)]">{formatPrice(s.price)}</span>
          {s.priceNote && <span className="text-xs text-[var(--text-muted)]"> {s.priceNote}</span>}
        </p>
        <a
          href={waLink(s.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-5 py-2.5 text-sm"
          aria-label={`Book ${s.name} on WhatsApp`}
        >
          <i className="ri-whatsapp-line" aria-hidden="true"></i>
          Book
        </a>
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  const [active, setActive] = useState<keyof typeof services>('Core');

  return (
    <section id="services" className="section section-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <h2 className="section-title">
            Services &amp; <span className="text-gold">Prices</span>
          </h2>
          <p className="section-sub">
            Every service with its time and starting price. Tap Book to message us on WhatsApp.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div role="tablist" aria-label="Service categories" className="flex bg-white rounded-full p-1 shadow-sm border border-[var(--border)]">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                id={`tab-${tab}`}
                aria-selected={active === tab}
                aria-controls="services-panel"
                onClick={() => setActive(tab)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors min-h-[44px] ${
                  active === tab ? 'btn-gold shadow-none hover:transform-none' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          id="services-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-8 animate-fade-in"
        >
          {services[active].map((s) => (
            <ServiceCard key={s.name} s={s} />
          ))}
        </div>

        <p className="text-center text-sm text-[var(--text-muted)] mb-8">
          Nail art is not included in these prices. It starts from ₹50 per nail, depending on the design.
        </p>

        <div className="text-center">
          <a
            href={waLink("Hi The Nail Lobby! I'd love to book an appointment. Which service would you recommend for me?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-7 py-4 text-base sm:text-lg"
          >
            <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
            Not sure? Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
