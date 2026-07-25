"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Target, 
  Cpu, 
  BarChart3, 
  Compass, 
  Settings, 
  Lightbulb, 
  Database, 
  Code, 
  ShieldCheck, 
  Search, 
  Map, 
  Rocket, 
  TrendingUp, 
  ClipboardCheck,
  CheckCircle2
} from "lucide-react";
import { consultingServices, engagementSteps, productsList, industryAcceleratorsExamples } from "../../data/solutions";

export default function SolutionsSection() {
  const serviceIcons: { [key: string]: React.ReactNode } = {
    Compass: <Compass size={24} />,
    Settings: <Settings size={24} />,
    Lightbulb: <Lightbulb size={24} />,
    Database: <Database size={24} />,
    Code: <Code size={24} />,
    ShieldCheck: <ShieldCheck size={24} />
  };

  const stepIcons: { [key: string]: React.ReactNode } = {
    Search: <Search size={22} />,
    Target: <Target size={22} />,
    Map: <Map size={22} />,
    Rocket: <Rocket size={22} />,
    TrendingUp: <TrendingUp size={22} />
  };

  const productIcons: { [key: string]: React.ReactNode } = {
    ClipboardCheck: <ClipboardCheck size={24} />,
    Target: <Target size={24} />,
    Map: <Map size={24} />,
    ShieldCheck: <ShieldCheck size={24} />,
    Rocket: <Rocket size={24} />
  };

  return (
    <section id="solutions" className="solutions-section snap-section">
      {/* Venn Hero Sub-header */}
      <div className="solutions-header-container container-custom">
        <div className="solutions-hero-grid">
          <div className="hero-text-block">
            <span className="section-tag">PRODUCT & SERVICES</span>
            <h2 className="section-title-serif">AI Strategies That Drive Business Growth</h2>
            <p className="hero-subtext">
              We combine deep AI expertise with strategic business consulting to help organizations identify opportunities, solve complex challenges, and deliver measurable outcomes.
            </p>

            <div className="hero-badges-row">
              <div className="badge-pill">
                <Target size={18} />
                <span>Business-led approach</span>
              </div>
              <div className="badge-pill">
                <Cpu size={18} />
                <span>AI & data expertise</span>
              </div>
              <div className="badge-pill">
                <BarChart3 size={18} />
                <span>Measurable impact</span>
              </div>
            </div>
          </div>

          <div className="hero-venn-graphic">
            <div className="venn-circle circle-left">
              <span>Strategy for Growth</span>
            </div>
            <div className="venn-circle circle-right">
              <span>Technology for Impact</span>
            </div>
            <div className="venn-center-overlap">
              <div className="overlap-content">
                <span className="overlap-title">AI That Delivers Value</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OUR CONSULTING SERVICES */}
      <div className="consulting-services-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Our Consulting Services</h3>
            <p className="section-subtitle-text">From strategy to execution, we help you transform with AI and achieve lasting impact.</p>
          </div>

          <div className="services-grid-6">
            {consultingServices.map((service) => (
              <div key={service.id} className="consulting-card">
                <div className="card-top">
                  <div className="card-top-icon">
                    {serviceIcons[service.iconName] || <Compass size={24} />}
                  </div>
                  <h4 className="card-heading">{service.number}. {service.title}</h4>
                  <p className="card-desc">{service.description}</p>
                </div>
                <div className="card-divider" />
                <div className="card-bottom">
                  <div className="capabilities-list">
                    {[...service.capabilitiesLeft, ...service.capabilitiesRight].map((cap, idx) => (
                      <div key={idx} className="cap-item">• {cap}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. HOW WE ENGAGE */}
      <div className="how-we-engage-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">How We Engage</h3>
            <p className="section-subtitle-text">A proven approach from insight to impact.</p>
          </div>

          <div className="engage-flow-row">
            {engagementSteps.map((step) => (
              <div key={step.stepNumber} className="engage-step-node">
                <div className="engage-node-circle">
                  {stepIcons[step.iconName] || <Search size={22} />}
                  <span className="step-badge-num">{step.stepNumber}</span>
                </div>
                <h4 className="engage-step-title">{step.title}</h4>
                <p className="engage-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. OUR PRODUCTS & ACCELERATORS */}
      <div className="products-accelerators-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Our Products</h3>
            <p className="section-subtitle-text">Proprietary accelerators that help you move faster and achieve more.</p>
          </div>

          <div className="products-grid-5">
            {productsList.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="prod-icon-box">
                  {productIcons[prod.iconName] || <Rocket size={24} />}
                </div>
                <h4 className="prod-title">{prod.title}</h4>
                <p className="prod-desc">{prod.description}</p>
              </div>
            ))}
          </div>

          {/* Accelerators Pill Bar */}
          <div className="accelerators-bar">
            <h5 className="accel-label">Industry AI Accelerators (Examples)</h5>
            <div className="accel-pills-wrap">
              {industryAcceleratorsExamples.map((ex, idx) => (
                <span key={idx} className="accel-pill-item">
                  <CheckCircle2 size={14} color="#0B132B" />
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .solutions-section {
          background-color: var(--color-cream-bg);
          padding: 6rem 0;
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
          margin-bottom: 2.25rem;
        }

        .hero-badges-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          padding: 0.6rem 1rem;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          border: 1px solid rgba(11, 19, 43, 0.1);
        }

        /* Venn Diagram */
        .solutions-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-venn-graphic {
          position: relative;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
        }

        .venn-circle {
          position: absolute;
          width: 210px;
          height: 210px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          font-family: var(--font-primary);
          font-size: 0.925rem;
          font-weight: 700;
          line-height: 1.35;
        }

        .circle-left {
          background-color: var(--color-navy-dark);
          color: var(--color-white);
          left: 0;
          top: 15%;
          justify-content: flex-start;
          padding-left: 1.5rem;
          padding-right: 4.5rem;
          text-align: left;
        }

        .circle-right {
          background-color: #F78C79;
          color: var(--color-navy-dark);
          right: 0;
          top: 15%;
          border: 2px solid var(--color-navy-dark);
          justify-content: flex-end;
          padding-right: 1.5rem;
          padding-left: 4.5rem;
          text-align: right;
        }

        .venn-center-overlap {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          box-shadow: 0 8px 30px rgba(11, 19, 43, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          text-align: center;
          padding: 0.75rem;
          border: 1px solid rgba(11, 19, 43, 0.15);
        }

        .overlap-title {
          font-family: var(--font-primary);
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-navy-dark);
        }

        /* Consulting Services */
        .consulting-services-inner {
          padding: 6rem 0;
          background-color: var(--color-white);
          margin-top: 5rem;
        }

        .section-subtitle-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
        }

        .services-grid-6 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: stretch;
        }

        .consulting-card {
          background-color: var(--color-cream-bg);
          padding: 2.25rem;
          border-radius: var(--border-radius-md);
          border: 1.5px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          box-shadow: 0 4px 18px rgba(11, 19, 43, 0.04);
          transition: all 0.25s ease;
        }

        .consulting-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(11, 19, 43, 0.08);
          border-color: #F5DCDC;
        }

        .card-top-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }

        .card-top {
          display: flex;
          flex-direction: column;
          min-height: 160px;
        }

        .card-heading {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
          line-height: 1.3;
          min-height: 3.25rem;
        }

        .card-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0;
        }

        .card-divider {
          width: 100%;
          height: 1px;
          border-top: 1px dashed var(--color-border-light);
          margin: 1.5rem 0;
        }

        .card-bottom {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .capabilities-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .cap-item {
          font-size: 0.8125rem;
          color: var(--color-navy-dark);
          line-height: 1.45;
        }

        /* How we engage */
        .how-we-engage-inner {
          padding: 6rem 0;
          background-color: var(--color-cream-bg);
        }

        .engage-flow-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .engage-step-node {
          text-align: center;
        }

        .engage-node-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: var(--color-navy-dark);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
          position: relative;
        }

        .engage-node-circle :global(svg) {
          color: var(--color-white) !important;
        }

        .step-badge-num {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: var(--color-coral-border);
          color: var(--color-navy-dark);
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .engage-step-title {
          font-family: var(--font-primary);
          font-size: 1.1rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .engage-step-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Products & Accelerators */
        .products-accelerators-inner {
          padding: 6rem 0;
          background-color: var(--color-white);
        }

        .products-grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .product-card {
          background-color: var(--color-cream-bg);
          padding: 1.75rem 1.25rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          flex-direction: column;
        }

        .prod-icon-box {
          color: var(--color-coral-border);
          margin-bottom: 1rem;
        }

        .prod-title {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .prod-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .prod-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.785rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          text-decoration: none;
        }

        .accelerators-bar {
          background-color: var(--color-white);
          padding: 1.5rem 2rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
        }

        .accel-label {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .accel-pills-wrap {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .accel-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          background-color: var(--color-cream-bg);
          padding: 0.4rem 0.85rem;
          border-radius: 6px;
        }

        @media (max-width: 992px) {
          .solutions-hero-grid,
          .services-grid-6 {
            grid-template-columns: 1fr;
          }
          .engage-flow-row,
          .products-grid-5 {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .engage-flow-row,
          .products-grid-5 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
