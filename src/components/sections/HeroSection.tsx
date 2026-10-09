"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Compass, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section snap-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">SHAW &amp; GOSWAMI AI</span>
          <h1 className="hero-title">
            S&amp;G AI: The AI<br />
            Transformation Engine.
          </h1>
          <p className="hero-tagline">
            Prepare your organisation for a world reshaped by AI.
          </p>
          <p className="hero-subtitle">
            We bring together business strategy, data, AI engineering and organisational change to transform how your business operates, makes decisions and grows—from readiness and roadmap to implementation, adoption and continuous improvement.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-solid-navy">
              START YOUR AI TRANSFORMATION <ArrowRight size={16} />
            </Link>
            <a href="#solutions" className="btn-outline-navy">
              EXPLORE OUR SOLUTIONS <ArrowRight size={16} />
            </a>
          </div>

          {/* Bottom Feature Strip */}
          <div className="hero-pills-bar">
            <div className="pill-item">
              <Target size={18} />
              <span>Business-led</span>
            </div>
            <div className="pill-divider" />
            <div className="pill-item">
              <Compass size={18} />
              <span>Built for deployment</span>
            </div>
            <div className="pill-divider" />
            <div className="pill-item">
              <TrendingUp size={18} />
              <span>Designed for adoption</span>
            </div>
          </div>
        </div>

        {/* Hero Graphic Column */}
        <div className="hero-graphic-col">
          <div className="graphic-canvas">
            <svg className="hero-trend-graphic-svg" viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotGrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.4" fill="#0B132B" opacity="0.38" />
                </pattern>
                <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B132B" floodOpacity="0.3" />
                </filter>
              </defs>

              <mask id="circleMask">
                <circle cx="220" cy="200" r="160" fill="#FFFFFF" />
              </mask>
              <circle cx="220" cy="200" r="160" fill="url(#dotGrid)" mask="url(#circleMask)" />

              <circle cx="50" cy="305" r="5.5" fill="#0B132B" />
              <path d="M 50 305 Q 190 230 375 45" stroke="#0B132B" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 345 45 L 375 45 L 375 75" stroke="#0B132B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              <g filter="url(#nodeShadow)">
                <circle cx="114" cy="267" r="26" fill="#0B132B" />
                <circle cx="110" cy="263" r="7.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                <line x1="115.5" y1="268.5" x2="123" y2="276" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              <g filter="url(#nodeShadow)">
                <circle cx="208" cy="197" r="26" fill="#0B132B" />
                <circle cx="208" cy="197" r="9.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                <circle cx="208" cy="197" r="4.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                <line x1="208" y1="183" x2="208" y2="211" stroke="#FFFFFF" strokeWidth="2" />
                <line x1="194" y1="197" x2="222" y2="197" stroke="#FFFFFF" strokeWidth="2" />
              </g>

              <g filter="url(#nodeShadow)">
                <circle cx="303" cy="116" r="26" fill="#0B132B" />
                <rect x="292" y="118" width="4.5" height="9" rx="1" fill="#FFFFFF" />
                <rect x="300.5" y="112" width="4.5" height="15" rx="1" fill="#FFFFFF" />
                <rect x="309" y="105" width="4.5" height="22" rx="1" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background-color: var(--color-coral-hero);
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-eyebrow {
          display: block;
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-navy-dark);
          margin-bottom: 1rem;
        }

        .hero-title {
          font-family: var(--font-primary);
          font-size: clamp(2.25rem, 1.6rem + 3vw, 4.25rem);
          line-height: 1.1;
          margin-bottom: 1.25rem;
          overflow-wrap: break-word;
        }

        .hero-tagline {
          font-family: var(--font-secondary);
          font-size: clamp(1.15rem, 1.05rem + 0.5vw, 1.45rem);
          font-weight: 600;
          color: var(--color-navy-dark);
          line-height: 1.4;
          max-width: 580px;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-family: var(--font-secondary);
          font-size: clamp(1.05rem, 1rem + 0.4vw, 1.25rem);
          color: var(--color-navy-dark);
          opacity: 0.9;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 2.25rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .hero-pills-bar {
          display: inline-flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          padding: 0.75rem 1.25rem;
          border-radius: 40px;
          border: 1px solid rgba(11, 19, 43, 0.12);
        }

        .pill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy-dark);
        }

        .pill-divider {
          width: 1px;
          height: 18px;
          background-color: rgba(11, 19, 43, 0.2);
        }

        .graphic-canvas {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-trend-graphic-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-subtitle,
          .hero-tagline {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-pills-bar {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions :global(a) {
            width: 100%;
            justify-content: center;
          }
          .hero-pills-bar {
            flex-direction: column;
            align-items: flex-start;
            border-radius: 12px;
            width: 100%;
          }
          .pill-divider {
            display: none;
          }
        }

        .hero-container > * {
          min-width: 0;
        }

        @media (max-width: 360px) {
          .hero-container {
            padding: 0 1rem;
          }
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
