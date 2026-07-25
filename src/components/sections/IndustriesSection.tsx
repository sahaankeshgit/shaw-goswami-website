"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Cpu,
  BarChart3,
  HeartPulse,
  Flame,
  ShoppingCart,
  Activity,
  Building2,
  BedDouble,
  Rocket,
  Plane,
  Search,
  Compass,
  Code,
  TrendingUp
} from "lucide-react";
import { industries } from "../../data/industries";

export default function IndustriesSection() {
  const iconMap: { [key: string]: React.ReactNode } = {
    HeartPulse: <HeartPulse size={28} />,
    Flame: <Flame size={28} />,
    ShoppingCart: <ShoppingCart size={28} />,
    Activity: <Activity size={28} />,
    Building2: <Building2 size={28} />,
    BedDouble: <BedDouble size={28} />,
    Rocket: <Rocket size={28} />,
    Plane: <Plane size={28} />,
    Cpu: <Cpu size={28} />
  };

  const approachSteps = [
    { num: 1, title: "Understand", desc: "We immerse ourselves in your business, industry, and challenges.", icon: <Search size={20} /> },
    { num: 2, title: "Diagnose", desc: "We uncover root causes, opportunities, and hidden value.", icon: <Target size={20} /> },
    { num: 3, title: "Strategize", desc: "We define the right AI and business strategy for impact.", icon: <Compass size={20} /> },
    { num: 4, title: "Implement", desc: "We build and integrate custom solutions that deliver results.", icon: <Code size={20} /> },
    { num: 5, title: "Optimize", desc: "We measure outcomes, refine continuously, and drive long-term value.", icon: <TrendingUp size={20} /> }
  ];

  const whyChoosePillars = [
    { title: "Cross-Industry Expertise", desc: "Experience across diverse industries and complex business environments." },
    { title: "Business-First Mindset", desc: "We start with your business goals and build AI solutions that create real impact." },
    { title: "AI-First Approach", desc: "Deep AI, data, and engineering capabilities to solve today's and tomorrow's challenges." },
    { title: "Proven Track Record", desc: "Successful engagements delivering measurable results across industries." },
    { title: "Long-Term Partnership", desc: "We don't just deliver projects; we build partnerships for sustainable growth." }
  ];

  return (
    <section id="industries" className="industries-section snap-section">
      {/* 1. HERO SUB-HEADER */}
      <div className="container-custom">
        <div className="hero-grid">
          <div className="hero-text-block">
            <span className="section-tag">INDUSTRIES</span>
            <h2 className="section-title-serif">Sector Agnostic. Outcomes Focused.</h2>
            <p className="hero-subtext">
              We bring deep AI and business expertise to every industry, helping organizations solve their most complex challenges and create lasting value.
            </p>

            <div className="hero-badges-row">
              <div className="badge-pill">
                <Target size={18} />
                <div>
                  <strong>Industry Agnostic</strong>
                  <span>Strategy-led solutions</span>
                </div>
              </div>
              <div className="badge-pill">
                <Cpu size={18} />
                <div>
                  <strong>AI Powered</strong>
                  <span>Deep technical expertise</span>
                </div>
              </div>
              <div className="badge-pill">
                <BarChart3 size={18} />
                <div>
                  <strong>Measurable Impact</strong>
                  <span>Real outcomes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image-grid-visual">
            <div className="img-card img-1">
              <span className="img-label">Healthcare & Life Sciences</span>
            </div>
            <div className="img-card img-2">
              <span className="img-label">Energy & Oil & Gas</span>
            </div>
            <div className="img-card img-3">
              <span className="img-label">FMCG & Retail</span>
            </div>
            <div className="img-card img-4">
              <span className="img-label">Equine & High Value Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INDUSTRIES WE SERVE */}
      <div className="industries-serve-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Industries We Serve</h3>
            <div className="title-underline-center" />
          </div>

          <div className="industries-9-grid">
            {industries.map((ind) => (
              <div id={`industry-${ind.slug}`} key={ind.slug} className="ind-big-card">
                <div className="ind-card-top">
                  <div className="ind-icon-circle">
                    {iconMap[ind.iconName] || <Building2 size={24} />}
                  </div>
                  <h4 className="ind-title-heading">{ind.title}</h4>
                </div>
                <p className="ind-summary-text">{ind.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. APPROACH */}
      <div className="cross-approach-inner">
        <div className="container-custom">
          <div className="text-left-block" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Our Approach Works Across Every Industry</h3>
            <p className="section-subtitle-text">While every industry is unique, the challenges are universal. Our proven approach helps organizations across sectors achieve measurable business outcomes.</p>
          </div>

          <div className="approach-flow-row">
            {approachSteps.map((step) => (
              <div key={step.num} className="approach-step-card">
                <div className="approach-icon-circle">
                  {step.icon}
                </div>
                <h4 className="approach-step-name">{step.title}</h4>
                <p className="approach-step-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE */}
      <div className="why-choose-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Why Organizations Choose S&G</h3>
            <div className="title-underline-center" />
          </div>

          <div className="why-choose-grid-5">
            {whyChoosePillars.map((p, idx) => (
              <div key={idx} className="why-pillar-card">
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .industries-section {
          background-color: var(--color-white);
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
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(245, 220, 220, 0.4);
          backdrop-filter: blur(8px);
          padding: 0.75rem 1.2rem;
          border-radius: 12px;
          color: var(--color-navy-dark);
          border: 1px solid rgba(11, 19, 43, 0.1);
        }

        .badge-pill strong {
          display: block;
          font-size: 0.875rem;
        }

        .badge-pill span {
          font-size: 0.75rem;
          color: var(--color-navy-dark);
          opacity: 0.8;
        }

        /* Hero Image Grid */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-image-grid-visual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          height: 340px;
        }

        .img-card {
          border-radius: var(--border-radius-md);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(11, 19, 43, 0.15);
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          color: var(--color-white);
        }

        .img-1 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80") center/cover; }
        .img-2 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover; }
        .img-3 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=80") center/cover; }
        .img-4 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1507514604110-ba3347c457f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover; }

        .img-label {
          font-family: var(--font-primary);
          font-size: 0.875rem;
          font-weight: 700;
        }

        /* Serve */
        .industries-serve-inner {
          padding: 6rem 0;
          background-color: var(--color-cream-bg);
          margin-top: 5rem;
        }

        .title-underline-center {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-border);
          margin: 0 auto;
        }

        .industries-9-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .ind-big-card {
          background-color: var(--color-white);
          padding: 2.25rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          flex-direction: column;
          box-shadow: var(--color-card-shadow);
          transition: all 0.25s ease;
        }

        .ind-big-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--color-card-shadow-hover);
        }

        .ind-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .ind-icon-circle {
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

        .ind-title-heading {
          font-family: var(--font-primary);
          font-size: 1.35rem;
          color: var(--color-navy-dark);
        }

        .ind-summary-text {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .ind-case-mini {
          background-color: var(--color-cream-bg);
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-size: 0.8125rem;
          color: var(--color-navy-dark);
          margin-bottom: 1.25rem;
          border-left: 3px solid var(--color-coral-border);
        }

        .ind-explore-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          text-decoration: none;
        }

        .ind-explore-link:hover {
          color: var(--color-coral-border);
        }

        /* Approach */
        .cross-approach-inner {
          padding: 6rem 0;
          background-color: var(--color-white);
        }

        .text-left-block {
          text-align: left;
        }

        .section-subtitle-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 700px;
          margin: 0.5rem 0 0 0;
        }

        .approach-flow-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .approach-step-card {
          background-color: var(--color-cream-bg);
          padding: 1.75rem 1.25rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          text-align: center;
        }

        .approach-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--color-coral-border);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }

        .approach-step-name {
          font-family: var(--font-primary);
          font-size: 1.1rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .approach-step-text {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Why choose */
        .why-choose-inner {
          padding: 6rem 0 0 0;
          background-color: var(--color-cream-bg);
        }

        .why-choose-grid-5 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }

        .why-pillar-card {
          background-color: var(--color-white);
          padding: 1.75rem 1.25rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
        }

        .pillar-title {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .pillar-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .hero-grid,
          .industries-9-grid {
            grid-template-columns: 1fr;
          }
          .approach-flow-row,
          .why-choose-grid-5 {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .approach-flow-row,
          .why-choose-grid-5 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
