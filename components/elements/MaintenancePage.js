"use client";

export default function MaintenancePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        .mp-root {
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          background: #ffffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .mp-root * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ── Decorative background elements ── */
        .mp-deco-circle-1 {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.12);
          pointer-events: none;
          z-index: 0;
        }

        .mp-deco-circle-2 {
          position: absolute;
          bottom: -120px;
          left: -60px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.08);
          pointer-events: none;
          z-index: 0;
        }

        .mp-deco-circle-3 {
          position: absolute;
          top: 50%;
          right: 12%;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.04);
          pointer-events: none;
          z-index: 0;
        }

        .mp-deco-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.25);
          pointer-events: none;
          z-index: 0;
        }

        .mp-deco-dot-1 { top: 18%; left: 8%; }
        .mp-deco-dot-2 { top: 72%; right: 6%; }
        .mp-deco-dot-3 { bottom: 30%; left: 15%; width: 4px; height: 4px; background: rgba(15, 13, 29, 0.1); }
        .mp-deco-dot-4 { top: 35%; right: 18%; width: 5px; height: 5px; background: rgba(212, 175, 55, 0.18); }

        /* Curved dashed arc */
        .mp-deco-arc {
          position: absolute;
          top: 20%;
          right: -5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1.5px dashed rgba(212, 175, 55, 0.1);
          border-left-color: transparent;
          border-bottom-color: transparent;
          pointer-events: none;
          z-index: 0;
          transform: rotate(-15deg);
        }

        /* ── Header bar ── */
        .mp-header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 40px;
          animation: mp-fadeDown 0.5s ease both;
        }

        @keyframes mp-fadeDown {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .mp-logo-group {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .mp-logo-pill {
          background: #ffffff;
          border: 1px solid #e8e8ee;
          border-radius: 12px;
          padding: 8px 20px;
          box-shadow: 0 1px 8px rgba(0,0,0,0.04);
          display: inline-flex;
          align-items: center;
        }

        .mp-logo-pill img {
          height: 26px;
          width: auto;
          display: block;
        }

        .mp-status-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0f0d1d;
        }

        .mp-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f3ab2f;
          animation: mp-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes mp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.35); }
          50% { box-shadow: 0 0 0 5px rgba(212,175,55,0); }
        }

        /* ── Center content ── */
        .mp-center {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 24px 80px;
          text-align: center;
        }

        /* Pill tag */
        .mp-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e0ddd5;
          border-radius: 100px;
          padding: 8px 22px;
          margin-bottom: 36px;
          background: #ffffff;
          animation: mp-fadeUp 0.5s 0.15s ease both;
        }

        @keyframes mp-fadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .mp-tag-icon {
          font-size: 0.9rem;
        }

        .mp-tag-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0f0d1d;
        }

        /* Heading */
        .mp-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4rem;
          font-weight: 800;
          color: #1f1f1f;
          line-height: 1.1;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          animation: mp-fadeUp 0.6s 0.25s ease both;
        }

        .mp-heading-accent {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-weight: 700;
          color: #f3ab2f;
          font-size: 4rem;
          line-height: 1.15;
          margin-bottom: 4px;
          animation: mp-fadeUp 0.6s 0.35s ease both;
        }

        /* Description */
        .mp-description {
          font-size: 1.02rem;
          color: #7a7d85;
          line-height: 1.75;
          max-width: 520px;
          margin: 24px auto 0;
          font-weight: 400;
          animation: mp-fadeUp 0.6s 0.45s ease both;
        }

        /* ── Illustration ── */
        .mp-illustration {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 0px auto 0;
          animation: mp-fadeUp 0.7s 0.55s ease both;
        }

        .mp-illustration img {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 1;
        }

        .mp-illustration-blob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: 90%;
          background: radial-gradient(ellipse, rgba(243,171,47,0.07) 0%, rgba(243,171,47,0.02) 50%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        /* ── Decorative divider ── */
        .mp-divider-wrap {
          margin: 36px auto 0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: mp-fadeUp 0.6s 0.65s ease both;
        }

        .mp-divider-line {
          width: 32px;
          height: 1.5px;
          background: #f3ab2f;
          border-radius: 1px;
          opacity: 0.5;
        }

        .mp-divider-diamond {
          width: 8px;
          height: 8px;
          background: #f3ab2f;
          transform: rotate(45deg);
          opacity: 0.6;
        }

        /* ── Footer ── */
        .mp-footer {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px 32px;
          animation: mp-fadeUp 0.5s 0.65s ease both;
        }

        .mp-copyright {
          font-size: 0.72rem;
          color: #f3ab2f;
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .mp-header {
            padding: 20px 20px;
          }
          .mp-heading {
            font-size: 2.6rem;
          }
          .mp-heading-accent {
            font-size: 2.6rem;
          }
          .mp-description {
            font-size: 0.92rem;
          }
          .mp-status-badge {
            font-size: 0.6rem;
            letter-spacing: 0.1em;
          }
          .mp-deco-arc,
          .mp-deco-circle-3 {
            display: none;
          }
          .mp-illustration {
            max-width: 380px;
          }
        }

        @media (max-width: 480px) {
          .mp-heading {
            font-size: 2rem;
          }
          .mp-heading-accent {
            font-size: 2rem;
          }
          .mp-logo-pill {
            padding: 6px 14px;
          }
          .mp-logo-pill img {
            height: 20px;
          }
          .mp-status-badge span:not(.mp-status-dot) {
            display: none;
          }
          .mp-center {
            padding-bottom: 48px;
          }
          .mp-illustration {
            max-width: 280px;
            margin-top: 28px;
          }
        }
      `}</style>

      <main className="mp-root">
        {/* ── Decorative background ── */}
        <div className="mp-deco-circle-1" />
        <div className="mp-deco-circle-2" />
        <div className="mp-deco-circle-3" />
        <div className="mp-deco-arc" />
        <div className="mp-deco-dot mp-deco-dot-1" />
        <div className="mp-deco-dot mp-deco-dot-2" />
        <div className="mp-deco-dot mp-deco-dot-3" />
        <div className="mp-deco-dot mp-deco-dot-4" />

        {/* ── Header ── */}
        <header className="mp-header">
          <div className="mp-logo-group">
            <div className="mp-logo-pill">
              <img
                src="/assets/img/header/logo.png"
                alt="GenShifter Technologies"
                style={{ width: "250px", height: "auto" }}
                draggable={false}
              />
            </div>
          </div>
          <div className="mp-status-badge">
            <span className="mp-status-dot" />
            <span>Status &mdash; Scheduled Maintenance</span>
          </div>
        </header>

        {/* ── Center content ── */}
        <div className="mp-center">
          {/* Illustration at top */}
          <div className="mp-illustration">
            <div className="mp-illustration-blob" />
            <img
              src="/assets/img/under1.png"
              alt="Maintenance illustration"
              draggable={false}
            />
          </div>

          <h1 className="mp-heading">We&#39;re on </h1>
          <span className="mp-heading-accent">scheduled maintenance</span>

          <p className="mp-description">
            Our platform is undergoing scheduled maintenance to bring you a
            faster, more refined experience. We&#39;ll be back online shortly
            &mdash; thank you for your patience.
          </p>

          <div className="mp-divider-wrap">
            <div className="mp-divider-line" />
            <div className="mp-divider-diamond" />
            <div className="mp-divider-line" />
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="mp-footer">
          <p className="mp-copyright">
            &copy; {new Date().getFullYear()} GenShifter Technologies. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
