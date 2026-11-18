import { waLink } from '../lib/site';

// Floating WhatsApp button. Sits below the mobile menu and photo viewer (z-40),
// and the footer has extra bottom padding on phones so it never covers content.
export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi! I'd like to book a nail appointment at The Nail Lobby.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Nail Lobby on WhatsApp"
      className="fixed z-40 right-4 bottom-4 sm:right-6 sm:bottom-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
    >
      <i className="ri-whatsapp-line text-[28px] leading-none" aria-hidden="true"></i>
    </a>
  );
}
