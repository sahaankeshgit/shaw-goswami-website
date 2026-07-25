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
  Map, 
  Compass, 
  Code, 
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users
} from "lucide-react";
import { industries } from "../../data/industries";

export default function IndustriesPage() {
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
    <div className="industries-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="industries-hero">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="hero-text-block">
              <span className="section-tag">INDUSTRIES</span>
              <h1 className="hero-heading">
                Sector Agnostic.<br />
                Outcomes Focused.
              </h1>
              <p className="hero-subtext">
                We bring deep AI and business expertise to every industry, helping organizations solve their most complex challenges and create lasting value.
              </p>

              {/* 3 Badges */}
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

            {/* Grid Visual Mock */}
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
      </section>

      {/* 2. INDUSTRIES WE SERVE */}
      <section className="industries-serve-section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title-serif">Industries We Serve</h2>
            <div className="title-underline-center" />
          </div>

          <div className="industries-9-grid">
            {industries.map((ind) => (
              <div id={ind.slug} key={ind.slug} className="ind-big-card">
                <div className="ind-card-top">
                  <div className="ind-icon-circle">
                    {iconMap[ind.iconName] || <Building2 size={24} />}
                  </div>
                  <h3 className="ind-title-heading">{ind.title}</h3>
                </div>
                <p className="ind-summary-text">{ind.summary}</p>
                
                <Link href={`/industries/${ind.slug}`} className="ind-explore-link">
                  Explore Solutions <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH WORKS ACROSS EVERY INDUSTRY */}
      <section className="cross-approach-section">
        <div className="container-custom">
          <div className="text-left-block" style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title-serif">Our Approach Works Across Every Industry</h2>
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
      </section>

      {/* 4. WHY ORGANIZATIONS CHOOSE S&G */}
      <section className="why-choose-section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h2 className="section-title-serif">Why Organizations Choose S&G</h2>
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
      </section>

      {/* 5. CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container-custom">
          <div className="cta-inner-card">
            <div className="cta-left-text">
              <h2>Your industry may be unique. Your challenges aren’t.</h2>
              <p>Let’s solve them together with AI.</p>
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
        .industries-hero {
          background-color: var(--color-coral-hero);
          padding: 5.5rem 0 4.5rem 0;
        }

        .container-custom {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
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
          background: rgba(255, 255, 255, 0.35);
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
        .img-2 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80") center/cover; }
        .img-3 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=80") center/cover; }
        .img-4 { background: linear-gradient(180deg, transparent 40%, rgba(11, 19, 43, 0.9) 100%), url("https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80") center/cover; }

        .img-label {
          font-family: var(--font-primary);
          font-size: 0.875rem;
          font-weight: 700;
        }

        /* SERVE SECTION */
        .industries-serve-section {
          padding: var(--spacing-section) 0;
          background-color: var(--color-cream-bg);
        }

        .section-title-serif {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .title-underline-center {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-hero);
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
          border-left: 3px solid var(--color-coral-hero);
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

        /* CROSS APPROACH */
        .cross-approach-section {
          padding: var(--spacing-section) 0;
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
          background-color: var(--color-coral-hero);
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

        /* WHY CHOOSE */
        .why-choose-section {
          padding: var(--spacing-section) 0;
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

        /* CTA BANNER */
        .cta-banner-section {
          padding: 3rem 0;
          background-color: var(--color-white);
        }

        .cta-inner-card {
          background-color: var(--color-navy-dark);
          border-radius: var(--border-radius-lg);
          padding: 4rem 3.5rem;
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
          .cta-inner-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
