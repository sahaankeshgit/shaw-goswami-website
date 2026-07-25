"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronDown, 
  Users, 
  Cpu, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  Lightbulb
} from "lucide-react";
import { faqData, quickAnswerHighlights } from "../../data/faqs";

export default function FAQsPage() {
  // Active open state per category (only 1 item expanded per category)
  const [openItems, setOpenItems] = useState<{ [categorySlug: string]: string }>({
    "working-with-us": "working-with-us-0",
    "ai-and-technology": "ai-and-technology-0"
  });

  const toggleItem = (categorySlug: string, itemKey: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [categorySlug]: prev[categorySlug] === itemKey ? "" : itemKey
    }));
  };

  const categoryIcons: { [key: string]: React.ReactNode } = {
    Users: <Users size={24} />,
    Cpu: <Cpu size={24} />,
    Calendar: <Calendar size={24} />,
    Shield: <ShieldCheck size={24} />
  };

  return (
    <div className="faqs-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="faqs-hero">
        <div className="container-custom">
          <div className="faqs-hero-grid">
            <div className="hero-text-block">
              <span className="section-tag">FAQS</span>
              <h1 className="hero-heading">
                Answers to the<br />
                Questions That Matter
              </h1>
              <p className="hero-subtext">
                Clear answers to common questions about our approach, capabilities, and how we help organizations create lasting business impact.
              </p>

              {/* 4 Trust Badges */}
              <div className="hero-badges-grid">
                <div className="trust-badge-card">
                  <div className="badge-icon-box"><Users size={18} /></div>
                  <div>
                    <strong>Expert Guidance</strong>
                    <span>Clear answers from industry experts</span>
                  </div>
                </div>

                <div className="trust-badge-card">
                  <div className="badge-icon-box"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong>Transparent Approach</strong>
                    <span>We believe in clarity & openness</span>
                  </div>
                </div>

                <div className="trust-badge-card">
                  <div className="badge-icon-box"><HelpCircle size={18} /></div>
                  <div>
                    <strong>Outcome Focused</strong>
                    <span>Everything aligned to your goals</span>
                  </div>
                </div>

                <div className="trust-badge-card">
                  <div className="badge-icon-box"><ShieldCheck size={18} /></div>
                  <div>
                    <strong>Your Information is Safe</strong>
                    <span>Confidentiality & trust are top priorities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Q&A Visual Illustration */}
            <div className="hero-qa-graphic">
              <div className="bubble-dark">
                <span className="q-mark">?</span>
              </div>
              <div className="bubble-coral">
                <span className="dot-dots">• • •</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIZED ACCORDION SECTIONS */}
      <section className="faqs-main-section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title-serif">FAQs</h2>
          </div>

          <div className="faqs-categories-grid">
            {faqData.map((category) => (
              <div key={category.id} className="category-block">
                <div className="category-header-bar">
                  <div className="cat-icon-circle">
                    {categoryIcons[category.iconName] || <Users size={22} />}
                  </div>
                  <div>
                    <h3 className="cat-title">{category.categoryNumber}. {category.categoryTitle}</h3>
                    <p className="cat-desc">{category.description}</p>
                  </div>
                </div>

                {/* Accordion Questions */}
                <div className="accordion-list">
                  {category.questions.map((q, idx) => {
                    const itemKey = `${category.id}-${idx}`;
                    const isOpen = openItems[category.id] === itemKey;

                    return (
                      <div key={idx} className={`accordion-item ${isOpen ? "open" : ""}`}>
                        <button 
                          className="accordion-trigger"
                          onClick={() => toggleItem(category.id, itemKey)}
                          aria-expanded={isOpen}
                        >
                          <span className="q-text">{q.question}</span>
                          <ChevronDown size={18} className={`chevron-icon ${isOpen ? "rotate" : ""}`} />
                        </button>
                        
                        {isOpen && (
                          <div className="accordion-content">
                            <p>{q.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEED A QUICK ANSWER? */}
      <section className="quick-answers-section">
        <div className="container-custom">
          <div className="quick-header">
            <div className="quick-icon-box">
              <Lightbulb size={24} />
            </div>
            <div>
              <h2 className="section-title-serif">Need a quick answer?</h2>
              <p className="section-subtitle-text">Here are some highlights from our most asked questions.</p>
            </div>
          </div>

          <div className="quick-grid">
            {quickAnswerHighlights.map((qa, idx) => (
              <div key={idx} className="quick-card">
                <h4 className="qa-title">{qa.question}</h4>
                <p className="qa-text">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <div className="cta-inner-card">
            <div className="cta-left-text">
              <h2>Still have questions?</h2>
              <p>Let’s discuss your unique challenges.</p>

              <div className="cta-bullets-row" style={{ marginTop: "1rem" }}>
                <span>• Executive Strategy Session</span>
                <span>• Opportunity Assessment</span>
                <span>• No-obligation Discussion</span>
              </div>
            </div>

            <div className="cta-right-btn">
              <Link href="/contact" className="btn-cta-coral">
                BOOK A STRATEGY CALL <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* HERO */
        .faqs-hero {
          background-color: var(--color-coral-hero);
          padding: 5.5rem 0 4.5rem 0;
        }

        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .faqs-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .section-tag {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-navy-dark);
          opacity: 0.8;
          display: block;
          margin-bottom: 0.75rem;
        }

        .hero-heading {
          font-family: var(--font-primary);
          font-size: clamp(3rem, 2.5rem + 2.5vw, 4.25rem);
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .hero-subtext {
          font-size: 1.125rem;
          color: var(--color-navy-dark);
          opacity: 0.9;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 2.5rem;
        }

        .hero-badges-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .trust-badge-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(8px);
          padding: 0.85rem 1rem;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(11, 19, 43, 0.1);
        }

        .badge-icon-box {
          color: var(--color-navy-dark);
          margin-top: 2px;
        }

        .trust-badge-card strong {
          display: block;
          font-size: 0.875rem;
          color: var(--color-navy-dark);
        }

        .trust-badge-card span {
          font-size: 0.75rem;
          color: var(--color-navy-dark);
          opacity: 0.85;
        }

        /* Q&A GRAPHIC */
        .hero-qa-graphic {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bubble-dark {
          width: 160px;
          height: 160px;
          border-radius: 50% 50% 10% 50%;
          background-color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(11, 19, 43, 0.25);
          position: absolute;
          top: 20px;
          left: 15%;
        }

        .q-mark {
          font-family: var(--font-primary);
          font-size: 4.5rem;
          color: var(--color-white);
          font-weight: 700;
        }

        .bubble-coral {
          width: 130px;
          height: 130px;
          border-radius: 50% 50% 50% 10%;
          background-color: #F78C79;
          border: 3px solid var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 20px;
          right: 20%;
          box-shadow: 0 8px 24px rgba(11, 19, 43, 0.15);
        }

        .dot-dots {
          font-size: 1.75rem;
          color: var(--color-navy-dark);
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        /* MAIN FAQS ACCORDION */
        .faqs-main-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .section-title-serif {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .section-subtitle-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
        }

        .faqs-categories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .category-block {
          background-color: var(--color-white);
          padding: 2.25rem;
          border-radius: var(--border-radius-md);
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 4px 18px rgba(11, 19, 43, 0.04);
        }

        .category-header-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-light);
        }

        .cat-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-title {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          color: var(--color-navy-dark);
        }

        .cat-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }

        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .accordion-item {
          border: 1px solid var(--color-border-subtle);
          border-radius: 8px;
          overflow: hidden;
          background-color: var(--color-white);
          transition: all 0.2s ease;
        }

        .accordion-item.open {
          border-color: #F5DCDC;
          box-shadow: 0 4px 14px rgba(11, 19, 43, 0.06);
        }

        .accordion-trigger {
          width: 100%;
          padding: 1.1rem 1.25rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-secondary);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          gap: 1rem;
        }

        .chevron-icon {
          color: var(--color-coral-hero);
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .chevron-icon.rotate {
          transform: rotate(180deg);
        }

        .accordion-content {
          padding: 0 1.25rem 1.25rem 1.25rem;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          border-top: 1px dashed var(--color-border-subtle);
          padding-top: 1rem;
        }

        /* QUICK ANSWERS */
        .quick-answers-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-white);
        }

        .quick-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .quick-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--border-radius-sm);
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .quick-card {
          background-color: var(--color-cream-bg);
          padding: 1.75rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
        }

        .qa-title {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .qa-text {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* CTA BANNER */
        .cta-banner-section {
          padding: 3rem 0;
          background-color: var(--color-white);
        }

        .cta-inner-card {
          background-color: var(--color-navy-dark);
          border-radius: var(--border-radius-lg);
          padding: 2.25rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          color: var(--color-white);
        }

        .cta-left-text h2 {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-white);
          margin-bottom: 0.75rem;
        }

        .cta-left-text p {
          color: #A0AEC0;
          font-size: 1.1rem;
        }

        .cta-bullets-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.875rem;
          color: #E2E8F0;
        }

        .btn-cta-coral {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--color-coral-hero);
          color: var(--color-navy-dark);
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 1rem 1.85rem;
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
          .faqs-hero-grid,
          .faqs-categories-grid,
          .quick-grid {
            grid-template-columns: 1fr;
          }
          .hero-qa-graphic {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
