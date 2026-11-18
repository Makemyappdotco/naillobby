// Single source of truth for business details, services and FAQs.
// Change a price, the hours or the address here and it updates everywhere
// (service cards, marquee, booking form, FAQ, footer and Google schema).

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thenaillobby.com';

export const PHONE_DISPLAY = '+91 99993 45615';
export const PHONE_TEL = '+919999345615';
export const WA_NUMBER = '919999345615';

export const waLink = (message?: string) =>
  `https://wa.me/${WA_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const ADDRESS = {
  line1: 'UST-44, Aura Plaza Market',
  line2: 'Raj Nagar Extension, Ghaziabad',
  region: 'Uttar Pradesh',
  postalCode: '201017',
};
export const ADDRESS_ONE_LINE = `${ADDRESS.line1}, ${ADDRESS.line2}`;

const MAP_QUERY = encodeURIComponent(`The Nail Lobby, ${ADDRESS_ONE_LINE}`);
export const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const HOURS_LABEL = 'Monday to Sunday';
export const HOURS_TIME = '11:00 AM to 8:30 PM';
export const HOURS_SHORT = 'Mon to Sun: 11 AM to 8:30 PM';

export const INSTAGRAM_URL = 'https://instagram.com/thenaillobbyofficial';
export const INSTAGRAM_HANDLE = '@thenaillobbyofficial';

export type Service = {
  name: string;
  benefit: string;
  duration: string;
  price: number;
  priceNote?: string; // shown after the price, e.g. "per finger"
  from?: boolean; // "From ₹x" when the price can go up
  icon: string;
  whatsappMessage: string;
};

export const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`;

export const services: Record<'Core' | 'Special' | 'Add-ons', Service[]> = {
  Core: [
    { name: 'Acrylic Nail Extension', benefit: 'Long-lasting strength and durability', duration: '75 min', price: 999, from: true, icon: 'ri-hand-heart-line', whatsappMessage: "Hi! I'd love to get acrylic extensions. Can we discuss length and design options?" },
    { name: 'Gel Extension', benefit: 'Natural look with a flexible finish', duration: '90 min', price: 1099, from: true, icon: 'ri-drop-line', whatsappMessage: "Hi! I'm interested in gel extensions for a natural look. Which dates do you have free?" },
    { name: 'Polygel', benefit: 'The hybrid of acrylic and gel', duration: '100 min', price: 1299, from: true, icon: 'ri-contrast-drop-2-line', whatsappMessage: 'Hi! I want to try polygel. When can I book?' },
    { name: 'Overlay', benefit: 'Gel or acrylic over natural nails for strength and growth', duration: '90 min', price: 799, from: true, icon: 'ri-shield-check-line', whatsappMessage: 'Hi! I want to strengthen my natural nails with an overlay. When are you free?' },
    { name: 'Refill', benefit: 'Maintenance for existing extensions', duration: '60 min', price: 799, from: true, icon: 'ri-refresh-line', whatsappMessage: 'Hi! I need a refill for my existing nails. Do you have any slots this week?' },
    { name: 'Gellicure', benefit: 'Long-lasting gel polish over natural nails', duration: '30 min', price: 599, from: true, icon: 'ri-brush-line', whatsappMessage: 'Hi! I want a gellicure. Do you have slots today or tomorrow?' },
    { name: 'Russian Manicure', benefit: 'Precise cuticle work with an e-file', duration: '45 min', price: 599, from: true, icon: 'ri-scissors-cut-line', whatsappMessage: "Hi! I'd like to book a Russian manicure." },
    { name: 'No Tip Extension', benefit: 'Extension built on the natural nail bed', duration: '100 min', price: 1299, from: true, icon: 'ri-ruler-line', whatsappMessage: "Hi! I'd like the no-tip extension method. What's your availability this week?" },
    { name: 'No Glue Extension', benefit: 'Gentle application without harsh adhesives', duration: '75 min', price: 1299, from: true, icon: 'ri-leaf-line', whatsappMessage: "Hi! I'd like the no-glue extension option. Can we book?" },
    { name: 'Soft Gel Extension', benefit: 'Flexible and comfortable to wear', duration: '75 min', price: 1299, from: true, icon: 'ri-bubble-chart-line', whatsappMessage: 'Hi! I want soft gel extensions. Which colours do you recommend?' },
    { name: 'Temporary Nail Extension', benefit: 'Quick application for special events', duration: '90 min', price: 499, from: true, icon: 'ri-time-line', whatsappMessage: 'Hi! I need temporary extensions for an event. Do you have quick slots?' },
    { name: 'Custom Press On Nails', benefit: 'Personalised designs made to fit', duration: 'Custom', price: 499, from: true, icon: 'ri-palette-line', whatsappMessage: 'Hi! I want custom press-ons with my own design ideas. Can we chat?' },
  ],
  Special: [
    { name: 'Bridal Nails', benefit: 'Complete wedding nail look', duration: '100 min', price: 999, from: true, icon: 'ri-heart-3-line', whatsappMessage: "Hi! I'm getting married and want bridal nails. Can we discuss my wedding theme?" },
    { name: 'Toe Nail Extension', benefit: 'Length and strength for toe nails', duration: '60 min', price: 799, from: true, icon: 'ri-footprint-line', whatsappMessage: 'Hi! I need toe nail extensions. When can we schedule?' },
    { name: 'Toe Overlay', benefit: 'Strength and shine for toe nails', duration: '45 min', price: 799, from: true, icon: 'ri-footprint-line', whatsappMessage: 'Hi! I want a toe overlay. Which designs do you suggest?' },
    { name: 'Toe Gel Nail Paint', benefit: 'Long-lasting gel polish for toes', duration: '30 min', price: 599, from: true, icon: 'ri-drop-line', whatsappMessage: 'Hi! I want gel polish on my toes. Available this week?' },
    { name: 'Removal (Hands)', benefit: 'Safe removal of existing extensions', duration: '30 min', price: 499, icon: 'ri-eraser-line', whatsappMessage: 'Hi! I need to remove my current extensions safely. When can I come in?' },
    { name: 'Removal (Feet)', benefit: 'Safe toe extension removal', duration: '20 min', price: 299, priceNote: '(₹100 with a new set)', icon: 'ri-eraser-line', whatsappMessage: 'Hi! I need toe extension removal, and I may get a new set too.' },
  ],
  'Add-ons': [
    { name: 'Nail Repair', benefit: 'Fix chips, cracks and breaks', duration: '10 min', price: 100, priceNote: 'per finger', icon: 'ri-tools-line', whatsappMessage: 'Hi! I have a broken nail that needs a quick repair. Do you have time today?' },
    { name: 'Extra Length', benefit: 'Add length to any extension service', duration: '15 min', price: 100, priceNote: 'per finger', icon: 'ri-ruler-2-line', whatsappMessage: 'Hi! I want to add extra length to my nails. Is that possible?' },
    { name: 'Cuticle Care', benefit: 'Professional cuticle treatment', duration: '10 min', price: 199, icon: 'ri-hand-sanitizer-line', whatsappMessage: 'Hi! Can I add cuticle care to my appointment?' },
  ],
};

export const allServices = [...services.Core, ...services.Special, ...services['Add-ons']];

export const priceLabel = (s: Service) =>
  `${s.from ? 'From ' : ''}${formatPrice(s.price)}${s.priceNote ? ` ${s.priceNote}` : ''}`;

export const faqs = [
  {
    category: 'Bookings & Walk-ins',
    items: [
      { q: 'Do I need to book an appointment in advance?', a: 'Walk-ins are always welcome. We still recommend booking ahead, especially on weekends and for bridal or special services, so you don\'t have to wait. You can book on WhatsApp.' },
      { q: 'How do I book an appointment?', a: `Message us on WhatsApp at ${PHONE_DISPLAY}. Tell us the service you want and your preferred date and time, and we'll confirm your slot.` },
      { q: 'What are your working hours?', a: `We're open every day, ${HOURS_LABEL}, from ${HOURS_TIME}.` },
    ],
  },
  {
    category: 'Services & Pricing',
    items: [
      { q: 'Is nail art included in the service price?', a: 'Nail art is not included in the base service prices. It costs extra depending on the design. Simple nail art starts from ₹50 per nail. Ask us for a quote.' },
      { q: 'How long do gel extensions last?', a: 'Gel extensions usually last 3 to 4 weeks with proper care. We recommend a refill every 3 weeks to keep them fresh and prevent lifting.' },
      { q: 'What is the difference between Gellicure and Gel Extension?', a: 'Gellicure is long-lasting gel polish on your natural nails, with no added length. Gel Extension uses a tip or form to add length and structure. Gellicure starts at ₹599 and takes 30 minutes. Gel Extension starts at ₹1,099 and takes 90 minutes.' },
      { q: 'Do you offer removal services?', a: 'Yes. Removal for hands is ₹499 and for feet is ₹299. If you get a new set on the same visit, removal is only ₹100.' },
      { q: 'What is a Russian Manicure?', a: 'A Russian Manicure is a dry, e-file technique that gives a very clean, precise finish around the cuticles. It lasts longer than a regular manicure and starts at ₹599 (45 minutes).' },
    ],
  },
  {
    category: 'Aftercare & Hygiene',
    items: [
      { q: 'How do I take care of my nails after the appointment?', a: 'Avoid soaking your nails in water for the first 24 hours. Use cuticle oil daily, wear gloves for dishes and cleaning, and don\'t use your nails as tools.' },
      { q: 'Are your tools sterilised between clients?', a: 'Yes. All metal tools are sterilised with a UV sterilizer and autoclave between every client. Single-use items like files and buffers are never reused.' },
      { q: 'What products do you use?', a: 'We use professional-grade products from trusted brands. Our gels, acrylics and polishes are non-toxic and safe for regular use.' },
    ],
  },
];
