'use client';

const skills = [
  'Acrylic Extensions',
  'Gel Extensions',
  'Polygel',
  'Cat Eye Nails',
  'Russian Manicure',
  'Bridal Nails',
  'Chrome Finish',
  'No Tip Extensions',
  'Nail Art',
  'One-on-One Training',
  'Hands-On Practice',
  'Certificate Course'
];

export default function AcademyMarquee() {
  const items = [...skills, ...skills];

  return (
    <div
      className="w-full overflow-hidden border-y border-purple-100 bg-white py-4"
      style={{ background: '#FFFFFF' }}
    >
      <style jsx>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: marqueeScroll 36s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .marquee-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #3b1d4f;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .marquee-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, #F1C40F, #D4AC0D);
          flex-shrink: 0;
        }

        .marquee-sep {
          display: flex;
          align-items: center;
          gap: 36px;
          margin: 0 36px;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: marqueeScroll 36s linear infinite !important;
          }
        }
      `}</style>

      <div className="marquee-track">
        {items.map((skill, index) => (
          <div className="marquee-item" key={index} aria-hidden={index >= skills.length}>
            <span className="marquee-text">{skill}</span>
            <div className="marquee-sep">
              <span className="marquee-dot"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}