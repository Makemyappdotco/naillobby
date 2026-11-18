import { allServices } from '../lib/site';

export default function ServicesMarquee({ items }: { items?: string[] }) {
  const list = items ?? allServices.map((s) => s.name);
  const doubled = [...list, ...list];

  return (
    <div className="w-full overflow-hidden border-y border-[var(--border)] bg-white py-4" aria-label="What we offer">
      <div className="marquee-track">
        {doubled.map((label, i) => (
          <div key={i} className="flex items-center" aria-hidden={i >= list.length ? 'true' : undefined}>
            <span className="text-sm sm:text-base font-medium uppercase tracking-[0.08em] text-[#3b1d4f] whitespace-nowrap">
              {label}
            </span>
            <span className="mx-6 sm:mx-9 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
