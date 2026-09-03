'use client';

export default function WhatsAppButton() {
  const phone = '919999345615';
  const message = encodeURIComponent("Hi! I'd like to book a nail appointment at The Nail Lobby 💅");

  return (
    <>
      <style>{`
        .wa-float-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 0px;
          background-color: #25D366;
          color: #fff;
          border-radius: 50px;
          padding: 14px;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          text-decoration: none;
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          max-width: 52px;
          cursor: pointer;
          transition: max-width 0.35s cubic-bezier(0.34,1.56,0.64,1), padding 0.35s ease, gap 0.35s ease;
        }
        .wa-float-btn:hover {
          max-width: 220px;
          padding: 14px 22px 14px 18px;
          gap: 10px;
        }
        .wa-float-btn .wa-label {
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          transition: opacity 0.2s ease 0.1s, max-width 0.3s ease;
        }
        .wa-float-btn:hover .wa-label {
          opacity: 1;
          max-width: 160px;
        }
        .wa-float-btn .wa-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
      `}</style>
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
      >
        <span className="wa-icon">
          <i className="ri-whatsapp-line" style={{ fontSize: '24px', lineHeight: 1 }}></i>
        </span>
        <span className="wa-label">Chat on WhatsApp</span>
      </a>
    </>
  );
}
