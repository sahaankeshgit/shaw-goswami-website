"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import ClientsSection from "../components/sections/ClientsSection";
import FAQsSection from "../components/sections/FAQsSection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  useEffect(() => {
    // Enable scroll snapping on mount, clean up on unmount
    document.documentElement.classList.add("home-snap-active");
    return () => {
      document.documentElement.classList.remove("home-snap-active");
    };
  }, []);

  return (
    <div className="home-page-wrapper">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT US SECTION */}
      <AboutSection />

      {/* 3. PRODUCTS & SERVICES (SOLUTIONS) SECTION */}
      <SolutionsSection />

      {/* 4. INDUSTRIES SECTION */}
      <IndustriesSection />

      {/* 5. CLIENTS SECTION */}
      <ClientsSection />

      {/* 6. FAQS SECTION */}
      <FAQsSection />

      {/* 7. EMBEDDED CONTACT FORM & DIRECT SCHEDULER */}
      <ContactSection />

      {/* 8. BOTTOM CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <div className="cta-inner-card">
            <div className="cta-left-text">
              <h2>Ready to unlock AI’s true potential in your business?</h2>
              <p>From readiness and roadmap to implementation, adoption and continuous improvement.</p>
            </div>
            <div className="cta-right-btn">
              <Link href="/contact" className="btn-cta-coral">
                START YOUR AI TRANSFORMATION <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .cta-banner-section {
          padding: 1.5rem 0;
          background-color: var(--color-white);
        }

        .cta-inner-card {
          background-color: var(--color-navy-dark);
          border-radius: var(--border-radius-lg);
          padding: 2.5rem 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          color: var(--color-white);
        }

        .cta-left-text h2 {
          font-family: var(--font-cinzel), 'Cinzel', Georgia, serif;
          font-size: 1.75rem !important;
          font-weight: 500 !important;
          color: var(--color-white) !important;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .cta-left-text p {
          color: #A0AEC0;
          font-size: 0.95rem;
          margin: 0;
        }

        .cta-right-btn {
          flex-shrink: 0;
        }

        .btn-cta-coral {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--color-coral-hero);
          color: var(--color-navy-dark);
          font-family: var(--font-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.75rem 2.5rem;
          border-radius: var(--border-radius-sm);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .btn-cta-coral:hover {
          background-color: #f09583;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .cta-inner-card {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}
