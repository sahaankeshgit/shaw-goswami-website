"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Target, Compass, TrendingUp } from "lucide-react";
import HeroStrands from "./HeroStrands";

export default function HeroSection() {
  // Start the opening sequence only once web fonts are ready, so the headline
  // never animates in a fallback font and then jumps when Cinzel loads.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      requestAnimationFrame(() => setReady(true));
    };
    const fallback = window.setTimeout(start, 1200);
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(start).catch(start);
    } else {
      start();
    }
    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <section id="hero" className={`hero-section snap-section ${ready ? "is-ready" : ""}`}>
      {/* Decorative strategic-loom motif (desktop): strands meet, then fan out */}
      <HeroStrands ready={ready} />
      {/* Soft moving glow (tablet/mobile, where the strands are hidden) */}
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow anim-up d1">SHAW &amp; GOSWAMI AI</span>
          <h1 className="hero-title anim-up d2">
            S&amp;G AI: The AI<br />
            <span className="hero-title-accent">Transformation</span> Engine.
          </h1>
          <p className="hero-tagline anim-up d3">
            Prepare your organisation for a world reshaped by AI.
          </p>
          <p className="hero-subtitle anim-up d4">
            We bring together business strategy, data, AI engineering and organisational change to transform how your business operates, makes decisions and grows—from readiness and roadmap to implementation, adoption and continuous improvement.
          </p>
          <div className="hero-actions anim-up d5">
            <Link href="/contact" className="btn-solid-navy">
              START YOUR AI TRANSFORMATION <ArrowRight size={16} />
            </Link>
            <a href="#solutions" className="btn-outline-navy">
              EXPLORE OUR SOLUTIONS <ArrowRight size={16} />
            </a>
          </div>

          {/* Bottom Feature Strip */}
          <div className="hero-pills-bar anim-up d6">
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

      </div>

      <style jsx>{`
        .hero-section {
          background-color: var(--color-coral-hero);
          padding: 4.5rem 0;
          position: relative;
          overflow: hidden;
        }

        /* ---------- Opening sequence ----------
           Content is hidden only until fonts are ready (max 1.2s, plus a CSS
           safety net), then fades up with a short, smooth stagger. Only
           opacity/transform are animated so it stays on the compositor. */
        .anim-up {
          opacity: 0;
          transform: translate3d(0, 14px, 0);
          animation: heroSafetyReveal 0.01s linear 2.5s forwards;
        }
        .is-ready .anim-up {
          animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .is-ready .d1 { animation-delay: 0s; }
        .is-ready .d2 { animation-delay: 0.08s; }
        .is-ready .d3 { animation-delay: 0.2s; }
        .is-ready .d4 { animation-delay: 0.3s; }
        .is-ready .d5 { animation-delay: 0.42s; }
        .is-ready .d6 { animation-delay: 0.54s; }

        @keyframes heroFadeUp {
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes heroSafetyReveal {
          to { opacity: 1; transform: none; }
        }

        .hero-title .hero-title-accent {
          position: relative;
          display: inline-block;
        }
        .hero-title .hero-title-accent::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0.04em;
          height: 3px;
          border-radius: 2px;
          background: var(--color-coral-dark);
          transform: scaleX(0);
          transform-origin: left center;
        }
        .is-ready .hero-title .hero-title-accent::after {
          animation: accentSweep 1s cubic-bezier(0.65, 0, 0.35, 1) 0.9s forwards;
        }
        @keyframes accentSweep {
          to { transform: scaleX(1); }
        }

        /* Soft moving glow on tablet/mobile (strands are desktop-only) */
        .hero-glow {
          display: none;
          position: absolute;
          inset: -20%;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          background:
            radial-gradient(40% 35% at 25% 30%, rgba(252, 235, 230, 0.9), transparent 70%),
            radial-gradient(35% 30% at 80% 75%, rgba(247, 181, 168, 0.5), transparent 70%);
          will-change: transform;
          transition: opacity 1.2s ease;
        }
        .is-ready .hero-glow {
          opacity: 1;
          animation: glowFloat 14s ease-in-out infinite alternate;
        }
        @keyframes glowFloat {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(5%, -4%, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-up,
          .is-ready .anim-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero-title .hero-title-accent::after,
          .is-ready .hero-title .hero-title-accent::after {
            animation: none;
            transform: scaleX(1);
          }
          .is-ready .hero-glow {
            animation: none;
          }
        }

        .hero-container {
          position: relative;
          z-index: 1;
          pointer-events: none;
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-content {
          pointer-events: auto;
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
          background: rgba(255, 255, 255, 0.35);
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



        /* globals.css forces .hero-section span to blue with !important; this more specific rule wins */
        .hero-title .hero-title-accent {
          color: var(--color-coral-dark) !important;
        }

        @media (max-width: 992px) {
          .hero-glow {
            display: block;
          }
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
