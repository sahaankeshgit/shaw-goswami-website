"use client";

import React, { useState } from "react";
import { 
  Users, 
  Cpu, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { faqData } from "../../data/faqs";

export default function FAQsSection() {
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
    <section id="faqs" className="faqs-section snap-section">
      {/* 1. HERO SUB-HEADER & BADGES */}
      <div className="container-custom">
        <div className="faqs-hero-grid">
          <div className="hero-text-block">
            <span className="section-tag">FAQS</span>
            <h2 className="section-title-serif">Answers to the Questions That Matter</h2>
            <p className="hero-subtext">
              Clear answers to common questions about our approach, capabilities, and how we help organizations create lasting business impact.
            </p>

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

      {/* 2. ACCORDION SECTIONS */}
      <div className="faqs-main-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">FAQs</h3>
          </div>

          <div className="faqs-categories-grid">
            {faqData.map((category) => (
              <div key={category.id} className="category-block">
                <div className="category-header-bar">
                  <div className="cat-icon-circle">
                    {categoryIcons[category.iconName] || <Users size={22} />}
                  </div>
                  <div>
                    <h4 className="cat-title">{category.categoryNumber}. {category.categoryTitle}</h4>
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
      </div>



      <style jsx>{`
        .faqs-section {
          background-color: var(--color-white);
          padding: 6rem 0 1.5rem 0;
        }

        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-tag {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-coral-dark);
          display: block;
          margin-bottom: 0.75rem;
        }

        .section-title-serif {
          font-family: var(--font-primary);
          font-size: clamp(2rem, 1.75rem + 1.5vw, 3.25rem);
          color: var(--color-navy-dark);
          margin-bottom: 1.25rem;
        }

        .section-sub-heading {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
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
          background: rgba(245, 220, 220, 0.4);
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

        /* Q&A Graphic */
        .faqs-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

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

        /* Main Accordions */
        .faqs-main-inner {
          padding: 6rem 0;
          background-color: var(--color-cream-bg);
          margin-top: 5rem;
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
          color: var(--color-coral-border);
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

        @media (max-width: 992px) {
          .faqs-hero-grid,
          .faqs-categories-grid {
            grid-template-columns: 1fr;
          }
          .hero-qa-graphic {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
