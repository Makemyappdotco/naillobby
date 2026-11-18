'use client';

import { useState } from 'react';
import {
  allServices,
  priceLabel,
  waLink,
  ADDRESS,
  HOURS_LABEL,
  HOURS_TIME,
  PHONE_DISPLAY,
  PHONE_TEL,
  MAP_EMBED,
  MAP_DIRECTIONS,
} from '../lib/site';

// 30-minute slots inside opening hours (11:00 AM to 8:30 PM). Last start 7:30 PM.
const timeSlots = (() => {
  const out: string[] = [];
  for (let m = 11 * 60; m <= 19 * 60 + 30; m += 30) {
    const h24 = Math.floor(m / 60);
    const min = m % 60;
    const h12 = ((h24 + 11) % 12) + 1;
    out.push(`${h12}:${min.toString().padStart(2, '0')} ${h24 < 12 ? 'AM' : 'PM'}`);
  }
  return out;
})();

// Today's date in India time, so late-night visitors can't pick yesterday
const todayIST = () => new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().split('T')[0];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-base outline-none transition-shadow focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent-soft)]';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // The booking goes to the salon's WhatsApp with every detail filled in.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = form.date
      ? new Date(form.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
      : '';
    const lines = [
      'Hi The Nail Lobby! I would like to book an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Date: ${date}`,
      `Time: ${form.time}`,
    ];
    if (form.message.trim()) lines.push(`Notes: ${form.message.trim()}`);
    const url = waLink(lines.join('\n'));
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
    setSent(true);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7 md:mb-10 fade-up">
          <h2 className="section-title">
            Visit or <span className="text-gold">book</span>
            <span className="title-line" aria-hidden="true" />
          </h2>
          <p className="section-sub">Fill in the form and it opens WhatsApp with your booking ready to send.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="icon-tile w-12 h-12"><i className="ri-map-pin-line text-xl" aria-hidden="true"></i></span>
                <div>
                  <h3 className="font-sans font-semibold mb-1">Address</h3>
                  <p className="text-[var(--text-muted)]">
                    {ADDRESS.line1}
                    <br />
                    {ADDRESS.line2}
                  </p>
                  <a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 py-1 text-sm font-semibold text-[var(--accent-strong)] hover:underline">
                    Get directions <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="icon-tile w-12 h-12"><i className="ri-time-line text-xl" aria-hidden="true"></i></span>
                <div>
                  <h3 className="font-sans font-semibold mb-1">Opening hours</h3>
                  <p className="text-[var(--text-muted)]">
                    {HOURS_LABEL}
                    <br />
                    {HOURS_TIME}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="icon-tile w-12 h-12"><i className="ri-phone-line text-xl" aria-hidden="true"></i></span>
                <div>
                  <h3 className="font-sans font-semibold mb-1">Call or WhatsApp</h3>
                  <a href={`tel:${PHONE_TEL}`} className="block py-1 text-[var(--text-muted)] hover:text-[var(--text)]">{PHONE_DISPLAY}</a>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 py-1 font-semibold text-[#128c4a] hover:underline">
                    <i className="ri-whatsapp-line" aria-hidden="true"></i> WhatsApp us
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm">
              <iframe
                title="Map showing The Nail Lobby, Aura Plaza Market, Raj Nagar Extension"
                src={MAP_EMBED}
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6">Book an appointment</h3>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bf-name" className="block text-sm font-medium mb-2">Full name *</label>
                  <input id="bf-name" type="text" name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={onChange} required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="bf-phone" className="block text-sm font-medium mb-2">Phone number *</label>
                  <input id="bf-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number" placeholder="Your WhatsApp number" value={form.phone} onChange={onChange} required className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="bf-service" className="block text-sm font-medium mb-2">Service *</label>
                <select id="bf-service" name="service" value={form.service} onChange={onChange} required className={inputClass}>
                  <option value="">Choose a service</option>
                  {allServices.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} ({priceLabel(s)})
                    </option>
                  ))}
                  <option value="Not sure, need advice">Not sure, need advice</option>
                </select>
              </div>

              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bf-date" className="block text-sm font-medium mb-2">Date *</label>
                  <input id="bf-date" type="date" name="date" value={form.date} onChange={onChange} min={todayIST()} required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="bf-time" className="block text-sm font-medium mb-2">Time *</label>
                  <select id="bf-time" name="time" value={form.time} onChange={onChange} required className={inputClass}>
                    <option value="">Select</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="bf-msg" className="block text-sm font-medium mb-2">Design ideas or requests</label>
                <textarea id="bf-msg" name="message" rows={3} maxLength={500} placeholder="Colours, length, shape, any reference..." value={form.message} onChange={onChange} className={`${inputClass} resize-y`} />
              </div>

              <button type="submit" className="btn-gold w-full py-4 text-base">
                <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
                Send booking on WhatsApp
              </button>

              {sent && (
                <p role="status" className="p-4 rounded-xl bg-[#ecf8f0] border border-[#bfe5cc] text-[#17603a] text-sm">
                  WhatsApp has opened with your booking details. Press send there and we&apos;ll confirm your slot.
                  If it didn&apos;t open, <a className="underline font-semibold" href={waLink()} target="_blank" rel="noopener noreferrer">message us here</a>.
                </p>
              )}

              <p className="text-center text-xs text-[var(--text-muted)]">
                Long services near closing time may need an earlier slot. We&apos;ll confirm on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
