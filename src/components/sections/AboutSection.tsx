"use client";

import React from "react";
import { Brain, Signpost, HelpCircle, Users, Layers, Target, TrendingUp, Search, Compass, Code, BarChart3 } from "lucide-react";

export default function AboutSection() {
  const steps = [
    { num: "01", icon: <Search size={24} />, title: "UNDERSTAND", desc: "We go deep into your business to identify operational friction and growth opportunities." },
    { num: "02", icon: <Compass size={24} />, title: "DESIGN", desc: "We define the right AI strategy and roadmap aligned to your business goals." },
    { num: "03", icon: <Code size={24} />, title: "BUILD", desc: "We develop and integrate AI solutions that are secure, scalable, and practical." },
    { num: "04", icon: <BarChart3 size={24} />, title: "DELIVER", desc: "We drive adoption, measure impact, and ensure continuous value realization." }
  ];

  return (
    <section id="about" className="about-section snap-section">
      {/* 1. Header & Intro */}
      <div className="container-custom">
        <div className="about-header-grid">
          <div className="hero-text-block">
            <span className="section-tag">ABOUT US</span>
            <h2 className="section-title-serif">About Shaw & Goswami</h2>
            <div className="title-divider" />
            <p className="hero-lead">
              We bridge the gap between AI potential and business performance.
            </p>
            <p className="hero-sub">
              Our mission is simple: help leadership teams identify where AI creates real value and execute roadmaps that deliver measurable growth.
            </p>
          </div>

          <div className="hero-image-block">
            <div className="stadium-frame">
              <div className="skyline-mock-bg" />
            </div>
            <div className="dotted-bg-pattern" />
          </div>
        </div>
      </div>

      {/* 2. Gap We See */}
      <div className="gap-inner-section">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <h3 className="section-sub-title">The Gap We See</h3>
            <div className="title-underline-center" />
          </div>

          <div className="gap-grid">
            <div className="gap-card">
              <div className="gap-icon-circle">
                <Brain size={28} />
              </div>
              <h4>AI IS ADVANCING</h4>
              <p>Technology is evolving at unprecedented speed.</p>
            </div>

            <div className="gap-card border-x">
              <div className="gap-icon-circle">
                <Signpost size={28} />
              </div>
              <h4>BUT CLARITY IS MISSING</h4>
              <p>Business leaders struggle to know where AI fits and what will drive real impact.</p>
            </div>

            <div className="gap-card">
              <div className="gap-icon-circle">
                <HelpCircle size={28} />
              </div>
              <h4>THE RESULT</h4>
              <p>Confusion, scattered pilots, and missed opportunities for growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Our Story & Metrics */}
      <div className="story-metrics-inner">
        <div className="container-custom">
          <div className="story-metrics-grid">
            <div className="story-text-col">
              <h3 className="section-sub-title">Our Story</h3>
              <div className="title-underline-left" />
              <p className="story-paragraph">
                Shaw & Goswami was built to bridge this gap.
              </p>
              <p className="story-paragraph">
                With 40+ years of combined experience across AI, data engineering, product development, and business consulting, we combine deep technical expertise with business acumen to turn AI potential into measurable outcomes.
              </p>
            </div>

            <div className="metrics-cards-grid">
              <div className="metric-box">
                <Users size={32} className="metric-icon" />
                <div className="metric-num">40+</div>
                <div className="metric-lbl">YEARS</div>
                <p className="metric-desc">Combined experience across technology and business</p>
              </div>

              <div className="metric-box">
                <Layers size={32} className="metric-icon" />
                <div className="metric-num">4</div>
                <div className="metric-lbl">CORE EXPERTISE</div>
                <p className="metric-desc">AI Strategy, Data Engineering, Product Development, Business Consulting</p>
              </div>

              <div className="metric-box">
                <Target size={32} className="metric-icon" />
                <div className="metric-num">100%</div>
                <div className="metric-lbl">FOCUS</div>
                <p className="metric-desc">On solving real business problems with AI</p>
              </div>

              <div className="metric-box">
                <TrendingUp size={32} className="metric-icon" />
                <div className="metric-num">RESULTS</div>
                <div className="metric-lbl">THAT MATTER</div>
                <p className="metric-desc">Strategies that drive measurable growth and efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. How We Work */}
      <div className="how-we-work-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-title">How We Work</h3>
            <div className="title-underline-center" />
          </div>

          <div className="work-steps-flow">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <div className="step-num">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
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
          color: var(--color-coral-hero);
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-title-serif {
          font-family: var(--font-primary);
          font-size: clamp(2rem, 1.75rem + 1.5vw, 3.25rem);
          color: var(--color-navy-dark);
          margin-bottom: 1rem;
        }

        .section-sub-title {
          font-family: var(--font-primary);
          font-size: 2.25rem;
          color: var(--color-navy-dark);
          letter-spacing: 0.05em;
        }

        .title-divider {
          width: 60px;
          height: 3px;
          background-color: var(--color-navy-dark);
          margin-bottom: 1.75rem;
        }

        .hero-lead {
          font-family: var(--font-secondary);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-navy-dark);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .hero-sub {
          font-family: var(--font-secondary);
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          opacity: 0.9;
          line-height: 1.6;
        }

        .about-header-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .stadium-frame {
          width: 380px;
          height: 380px;
          border-radius: 190px 190px 20px 20px;
          overflow: hidden;
          background-color: #1E293B;
          box-shadow: 0 16px 40px rgba(11, 19, 43, 0.25);
          position: relative;
          z-index: 2;
        }

        .skyline-mock-bg {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%),
                      url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80") center/cover no-repeat;
        }

        .dotted-bg-pattern {
          position: absolute;
          top: -20px;
          right: 20px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 2px dashed rgba(11, 19, 43, 0.2);
          z-index: 1;
        }

        .hero-image-block {
          position: relative;
          display: flex;
          justify-content: center;
        }

        /* Gap Section */
        .gap-inner-section {
          padding: 5rem 0;
          background-color: var(--color-cream-bg);
          margin-top: 5rem;
        }

        .title-underline-center {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-border);
          margin: 0 auto;
        }

        .gap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .gap-card {
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .border-x {
          border-left: 1px solid var(--color-border-subtle);
          border-right: 1px solid var(--color-border-subtle);
        }

        .gap-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .gap-card h4 {
          font-family: var(--font-secondary);
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .gap-card p {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Story & Metrics */
        .story-metrics-inner {
          padding: 5rem 0;
          background-color: var(--color-coral-light);
        }

        .story-metrics-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .title-underline-left {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-border);
          margin-bottom: 1.5rem;
        }

        .story-paragraph {
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .metrics-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .metric-box {
          background-color: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
        }

        .metric-icon {
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .metric-num {
          font-family: var(--font-primary);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1;
        }

        .metric-lbl {
          font-family: var(--font-secondary);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .metric-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* How We Work */
        .how-we-work-inner {
          padding: 5rem 0 0 0;
        }

        .work-steps-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .step-card {
          background-color: var(--color-cream-bg);
          padding: 2rem 1.5rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          text-align: center;
          position: relative;
        }

        .step-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--color-coral-hero);
          color: var(--color-navy-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .step-num {
          font-family: var(--font-primary);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-coral-border);
          margin-bottom: 0.25rem;
        }

        .step-title {
          font-family: var(--font-secondary);
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-navy-dark);
          margin-bottom: 0.75rem;
        }

        .step-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .about-header-grid,
          .story-metrics-grid {
            grid-template-columns: 1fr;
          }
          .gap-grid,
          .work-steps-flow {
            grid-template-columns: 1fr 1fr;
          }
          .border-x {
            border: none;
          }
        }

        @media (max-width: 600px) {
          .gap-grid,
          .metrics-cards-grid,
          .work-steps-flow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
