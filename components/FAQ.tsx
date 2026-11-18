'use client';

import { useState } from 'react';
import { faqs, waLink } from '../lib/site';

export type FaqItem = { q: string; a: string };

export function FAQItem({ q, a, id }: FaqItem & { id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-white">
      <h3 className="font-sans text-base">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-medium hover:bg-[var(--accent-soft)]/50 transition-colors"
        >
          <span className="text-[15px] md:text-base leading-snug">{q}</span>
          <i className={`ri-${open ? 'subtract' : 'add'}-line text-xl text-[var(--accent-strong)] flex-shrink-0`} aria-hidden="true"></i>
        </button>
      </h3>
      {open && (
        <div id={`${id}-panel`} className="px-5 pb-5 pt-1 text-[var(--text-muted)] text-[15px] leading-relaxed animate-fade-in">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [cat, setCat] = useState(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 fade-up">
          <h2 className="section-title">
            Frequently asked <span className="text-gold">questions</span>
          </h2>
          <p className="section-sub">Everything you need to know before your visit.</p>
        </div>

        <div className="-mx-4 px-4 flex sm:justify-center gap-2 mb-6 overflow-x-auto scrollbar-hide" role="tablist" aria-label="FAQ categories">
          {faqs.map((c, i) => (
            <button
              key={c.category}
              type="button"
              role="tab"
              aria-selected={cat === i}
              onClick={() => setCat(i)}
              className={`px-4 min-h-[44px] rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                cat === i ? 'btn-gold hover:transform-none shadow-none' : 'bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        <div className="space-y-3" key={cat}>
          {faqs[cat].items.map((item, i) => (
            <FAQItem key={item.q} id={`faq-${cat}-${i}`} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[var(--text-muted)] text-sm mb-4">Still have a question? We&apos;re happy to help.</p>
          <a href={waLink('Hi, I have a question about your services.')} target="_blank" rel="noopener noreferrer" className="btn-gold px-6 py-3">
            <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
