'use client';

export default function GoldStyles() {
  return (
    <style jsx global>{`
      /* Background Animation Keyframes */
      @keyframes float-slow {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(10px, -15px) rotate(90deg); }
        50% { transform: translate(-5px, -10px) rotate(180deg); }
        75% { transform: translate(-15px, 5px) rotate(270deg); }
      }

      @keyframes float-medium {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(-12px, -8px) scale(1.1); }
        66% { transform: translate(8px, -12px) scale(0.9); }
      }

      @keyframes float-fast {
        0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
        20% { transform: translate(8px, -10px) rotate(72deg) scale(1.05); }
        40% { transform: translate(-6px, -15px) rotate(144deg) scale(0.95); }
        60% { transform: translate(-10px, 5px) rotate(216deg) scale(1.1); }
        80% { transform: translate(5px, 8px) rotate(288deg) scale(0.9); }
      }

      @keyframes pulse-slow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 0.9; transform: scale(1.05); }
      }

      @keyframes bob {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes float-gentle {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-5px, -8px); }
      }

      @keyframes float-gentle-delayed {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(8px, -5px); }
      }

      /* Animation Classes */
      .animate-float-slow {
        animation: float-slow 20s ease-in-out infinite;
      }

      .animate-float-medium {
        animation: float-medium 15s ease-in-out infinite;
      }

      .animate-float-fast {
        animation: float-fast 12s ease-in-out infinite;
      }

      .animate-pulse-slow {
        animation: pulse-slow 8s ease-in-out infinite;
      }

      .animate-bob {
        animation: bob 10s ease-in-out infinite;
      }

      .animate-gradient-shift {
        animation: gradient-shift 25s ease infinite;
        background-size: 400% 400%;
      }

      .animate-float-gentle {
        animation: float-gentle 8s ease-in-out infinite;
      }

      .animate-float-gentle-delayed {
        animation: float-gentle-delayed 8s ease-in-out infinite 2s;
      }

      /* Section titles gold highlight - restored to original size */
      .section-gold {
        background: linear-gradient(90deg, #FFE9B3 0%, #FFD76A 18%, #EFB64C 36%, #CFA240 54%, #EFB64C 72%, #FFD76A 86%, #FFE9B3 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        background-size: 200% 100%;
        background-position: 0% 0%;
        animation: goldShimmer 5s linear infinite;
        display: inline-block;
        text-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);
      }

      /* NEW: Hero-specific gold styling - DESKTOP ALIGNMENT FIX + PREMIUM ANIMATION */
      .hero-gold {
        background: linear-gradient(135deg, #F1C40F 0%, #D4AC0D 25%, #B7950B 50%, #D4AC0D 75%, #F1C40F 100%) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        color: #D4AC0D !important;
        animation: premiumGlow 3s ease-in-out infinite alternate;
        display: inline-block;
        /* REMOVED: All blur/shadow effects for crystal clear text */
        text-shadow: none !important;
        filter: none !important;
        /* DESKTOP: Perfect alignment with other lines */
        font-size: inherit !important;
        font-weight: inherit !important;
        letter-spacing: inherit !important;
        transform: none !important;
        margin-left: 0 !important;
        text-align: left !important;
        line-height: inherit !important;
        position: relative;
        /* Enhanced contrast and sharpness */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        /* FIXED: Ensure text is visible on unsupported browsers */
        background-color: transparent !important;
      }

      /* Fallback for browsers that don't support background-clip: text */
      @supports not (-webkit-background-clip: text) {
        .hero-gold {
          background: none !important;
          color: #D4AC0D !important;
          -webkit-text-fill-color: #D4AC0D !important;
        }
      }

      /* Premium moving animation for hero gold text - SIMPLIFIED */
      @keyframes premiumGlow {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-2px);
        }
        100% {
          transform: translateY(-3px);
        }
      }

      @keyframes goldShimmer {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
      }

      /* Hard reset for section-gold to prevent glitches */
      .section-gold::after,
      .section-gold::before {
        content: none !important;
      }

      .section-gold {
        background-color: transparent !important;
      }

      /* MOBILE-ONLY HERO FIXES (max-width: 640px) */
      @media (max-width: 640px) {
        /* Hero background - subtle clean backdrop */
        .hero {
          background: linear-gradient(180deg, #F8F3FA 0%, #FFFFFF 100%) !important;
          padding: 72px 16px 28px !important;
        }

        /* Safe area for notches */
        @supports (padding: max(0px)) {
          .hero {
            padding-top: max(64px, env(safe-area-inset-top)) !important;
          }
        }

        /* Structure - text first, image second */
        .hero .grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 0 !important;
        }

        .hero-left {
          order: 1 !important;
          text-align: center !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }

        .hero-media {
          order: 2 !important;
          margin-top: 18px !important;
        }

        /* MOBILE: Title styling - SAME AS DESKTOP but center aligned - REDUCED SPACING */
        .hero-title {
          text-align: center !important;
          margin: 0 auto 8px !important;
          max-width: 92vw !important;
          font-family: "Playfair Display", serif !important;
          font-weight: 800 !important;
          font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
          line-height: 1.1 !important;
          letter-spacing: -0.01em !important;
          color: #000 !important;
          text-shadow: none !important;
          filter: none !important;
          opacity: 1 !important;
        }

        /* MOBILE: All title spans IDENTICAL to desktop styling - REDUCED SPACING */
        .hero-title span {
          display: block !important;
          text-align: center !important;
          font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
          font-weight: 800 !important;
          line-height: 1.1 !important;
          margin-bottom: 0.5rem !important;
          letter-spacing: -0.01em !important;
        }

        .hero-title span:last-child {
          margin-bottom: 0 !important;
        }

        /* MOBILE: Gold text - SAME ANIMATION as desktop, center aligned + PREMIUM ANIMATION */
        .hero-title .hero-gold {
          background: linear-gradient(135deg, #F1C40F 0%, #D4AC0D 25%, #B7950B 50%, #D4AC0D 75%, #F1C40F 100%) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: #D4AC0D !important;
          animation: premiumGlow 3s ease-in-out infinite alternate !important;
          display: block !important;
          text-align: center !important;
          /* REMOVED: All blur/shadow effects for mobile clarity */
          text-shadow: none !important;
          filter: none !important;
          /* MOBILE: Exact same sizing as other lines - REDUCED SPACING */
          font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
          font-weight: 800 !important;
          line-height: 1.1 !important;
          letter-spacing: -0.01em !important;
          margin-bottom: 0.5rem !important;
          position: relative !important;
          /* Enhanced mobile clarity */
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          text-rendering: optimizeLegibility !important;
          /* FIXED: Ensure fallback color */
          background-color: transparent !important;
        }

        /* Remove blur/glow effects */
        .hero [class*="blob"],
        .hero [class*="glow"] {
          display: none !important;
        }

        /* MOBILE: Subtitle styling - REDUCED GAP */
        .hero-sub {
          text-align: center !important;
          margin: 1rem auto 24px !important;
          max-width: 92vw !important;
          color: #2a2a2a !important;
          font-size: clamp(1.125rem, 4vw, 1.25rem) !important;
          line-height: 1.4 !important;
          padding: 0.5rem 0 !important;
        }

        /* MOBILE: CTA buttons - STRONGER STYLING */
        .hero-ctas {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          align-items: center !important;
        }

        .btn-primary,
        .btn-outline {
          width: 100% !important;
          max-width: 520px !important;
          font-weight: 700 !important;
        }

        /* MOBILE: Enhanced primary button - STRONGER GOLD */
        .btn-primary {
          background: linear-gradient(135deg, #F1C40F 0%, #D4AC0D 25%, #B7950B 50%, #D4AC0D 75%, #F1C40F 100%) !important;
          color: #fff !important;
          border: 2px solid #D4AC0D !important;
          border-radius: 999px !important;
          box-shadow: 
            0 4px 15px rgba(212, 172, 13, 0.5),
            inset 0 1px 0 rgba(255,255,255,0.3) !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
        }

        .btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 
            0 6px 20px rgba(212, 172, 13, 0.6),
            inset 0 1px 0 rgba(255,255,255,0.4) !important;
        }

        /* MOBILE: Enhanced outline button */
        .btn-outline {
          background: #fff !important;
          color: #4A2C7A !important;
          border: 2px solid #9F7AEA !important;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.3),
            0 2px 8px rgba(159,122,234,0.3) !important;
        }

        .btn-outline:hover {
          transform: translateY(-2px) !important;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.4),
            0 4px 16px rgba(159,122,234,0.4) !important;
        }

        /* MOBILE: Image styling */
        .hero-media img {
          border-radius: 22px !important;
          width: 100% !important;
          height: auto !important;
          display: block !important;
        }
      }

      /* Floating WhatsApp button - FIXED positioning with GOLD styling */
      .wa-float {
        position: fixed !important;
        right: 20px !important;
        bottom: 20px !important;
        z-index: 9999 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 14px 20px;
        border-radius: 999px;
        font-weight: 700;
        font-size: 14px;
        text-decoration: none;
        transition: all 0.3s ease;
        white-space: nowrap;
        cursor: pointer;
        min-width: auto;
        width: auto;
        height: auto;
        /* Gold gradient styling to match other CTAs */
        background: linear-gradient(135deg, #F4D03F 0%, #F7DC6F 15%, #F1C40F 30%, #D4AC0D 50%, #B7950B 70%, #D4AC0D 85%, #F1C40F 100%);
        color: #fff !important;
        border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 0 4px 15px rgba(212, 172, 13, 0.4), inset 0 1px 0 rgba(255,255,255,0.3);
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        position: relative;
        overflow: hidden;
      }

      .wa-float::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 30%, rgba(255,255,255,0.6) 60%, transparent 100%);
        mix-blend-mode: overlay;
        pointer-events: none;
        opacity: 0.9;
        border-radius: inherit;
      }

      .wa-float:hover {
        transform: translateY(-3px) scale(1.05);
        color: #fff !important;
        filter: brightness(1.1) saturate(1.1);
        box-shadow: 0 6px 20px rgba(212, 172, 13, 0.5), inset 0 1px 0 rgba(255,255,255,0.4);
      }

      /* Only show on mobile screens */
      @media (min-width: 769px) {
        .wa-float {
          display: none !important;
        }
      }

      /* Ensure it shows properly on mobile */
      @media (max-width: 768px) {
        .wa-float {
          display: flex !important;
          position: fixed !important;
          right: 20px !important;
          bottom: 20px !important;
        }
      }

      /* UNIFIED GOLD BUTTON STYLING - ENHANCED */
      .btn-gold, .btn-primary, .cta, .wa-btn {
        background: linear-gradient(135deg, #F1C40F 0%, #D4AC0D 25%, #B7950B 50%, #D4AC0D 75%, #F1C40F 100%) !important;
        color: #fff !important;
        border: 2px solid #D4AC0D !important;
        box-shadow: 
          0 4px 15px rgba(212, 172, 13, 0.5),
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
        transition: all 0.3s ease !important;
        position: relative !important;
        overflow: hidden !important;
        filter: none !important;
        font-weight: 700 !important;
      }

      .btn-gold::after, .btn-primary::after, .cta::after, .wa-btn::after {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.2) 100%) !important;
        mix-blend-mode: overlay !important;
        pointer-events: none !important;
        opacity: 1 !important;
        border-radius: inherit !important;
      }

      .btn-gold:hover, .btn-primary:hover, .cta:hover, .wa-btn:hover {
        transform: translateY(-2px) !important;
        filter: brightness(1.1) saturate(1.1) !important;
        box-shadow: 
          0 6px 20px rgba(212, 172, 13, 0.6),
          inset 0 1px 0 rgba(255,255,255,0.4) !important;
        color: #fff !important;
      }

      /* Lavender button */
      .btn-lavender, .btn-outline {
        background: #ffffff !important;
        color: #B7950B !important;
        border: 2px solid #D4AC0D !important;
        box-shadow: 
          inset 0 2px 4px rgba(255,255,255,0.3),
          0 2px 8px rgba(212, 172, 13, 0.3) !important;
        text-shadow: none !important;
        transition: all 0.3s ease !important;
        font-weight: 600 !important;
      }

      .btn-lavender:hover, .btn-outline:hover {
        background: linear-gradient(135deg, #F1C40F 0%, #D4AC0D 25%, #B7950B 50%, #D4AC0D 75%, #F1C40F 100%) !important;
        color: #ffffff !important;
        transform: translateY(-2px) !important;
        box-shadow: 
          0 4px 15px rgba(212, 172, 13, 0.5),
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.4) !important;
        filter: brightness(1.1) !important;
        border: 2px solid #D4AC0D !important;
      }

      /* Desktop hero title styling - PERFECT ALIGNMENT - REDUCED SPACING */
      @media (min-width: 641px) {
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #000;
          margin-bottom: 1rem;
          text-shadow: none;
          text-align: left;
        }

        .hero-title span {
          display: block;
          margin-bottom: 0.5rem;
          text-align: left;
          line-height: 1.1;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
        }

        .hero-title span:last-child {
          margin-bottom: 0;
        }

        /* DESKTOP: Gold text perfectly aligned with other lines + PREMIUM ANIMATION - FIXED */
        .hero-title .hero-gold {
          font-size: inherit !important;
          font-weight: inherit !important;
          letter-spacing: inherit !important;
          line-height: inherit !important;
          transform: none !important;
          margin-left: 0 !important;
          text-align: left !important;
          display: inline-block !important;
          position: relative !important;
          /* DESKTOP: Remove all blur effects */
          text-shadow: none !important;
          filter: none !important;
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          text-rendering: optimizeLegibility !important;
          /* DESKTOP: Ensure proper block display for perfect alignment */
          width: auto !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          vertical-align: baseline !important;
          /* FIXED: Add fallback color for better browser support */
          color: #D4AC0D !important;
          background-color: transparent !important;
        }

        .hero-sub {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          line-height: 1.4;
          margin: 1rem 0 2rem 0;
          padding: 0.5rem 0;
        }
      }

      /* Consistent section spacing */
      .section-consistent {
        padding: 5rem 0;
        background: #FEFEFE;
      }

      /* Animation classes */
      .fade-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeUp 0.8s ease-out forwards;
      }

      .card-hover {
        transition: all 0.3s ease;
      }

      .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      }

      @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Section headings typography */
      h1, h2, h3, h4, h5, h6 {
        color: #000;
        text-shadow: none;
        filter: none;
      }

      /* Fallback for desktop browsers that don't support background-clip: text */
      @supports not (-webkit-background-clip: text) {
        .hero-title .hero-gold {
          background: none !important;
          color: #D4AC0D !important;
          -webkit-text-fill-color: #D4AC0D !important;
        }
      }

      /* Disable animations for users who prefer reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .animate-float-slow,
        .animate-float-medium,
        .animate-float-fast,
        .animate-pulse-slow,
        .animate-bob,
        .animate-gradient-shift,
        .animate-float-gentle,
        .animate-float-gentle-delayed {
          animation: none !important;
        }
      }
    `}</style>
  );
}