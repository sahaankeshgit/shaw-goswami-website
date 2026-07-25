"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col brand-col">
            <BrandLogo layout="horizontal" variant="light" />
            <p className="footer-tagline" style={{ marginTop: "1rem" }}>
              Where AI Meets Business Goals. We help leadership teams pinpoint operational friction and execute AI roadmaps that deliver measurable P&L growth.
            </p>
          </div>

          {/* Col 2: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/#solutions">Strategy & Consulting</Link></li>
              <li><Link href="/#solutions">Business Transformation</Link></li>
              <li><Link href="/#solutions">AI Strategy & Roadmap</Link></li>
              <li><Link href="/#solutions">Data & Digital Engineering</Link></li>
              <li><Link href="/#solutions">AI Implementation</Link></li>
              <li><Link href="/#solutions">Governance & Compliance</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation & Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/#solutions">Product & Services</Link></li>
              <li><Link href="/#industries">Industries</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#clients">Clients & Impact</Link></li>
              <li><Link href="/#faqs">Smart FAQs</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Consultation */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-cta-box" style={{ marginTop: "1rem" }}>
              <Link href="/contact" className="btn-cta-coral">
                BOOK A STRATEGY CALL <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} Shaw & Goswami Consulting. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--color-navy-dark);
          color: #A0AEC0;
          font-family: var(--font-secondary);
          padding-top: 4.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-top-container {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem 4rem 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.25fr 1fr 1.5fr;
          gap: 3rem;
        }

        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1.25rem;
        }

        .logo-sg {
          font-family: var(--font-primary);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-white);
        }

        .logo-divider {
          width: 1.5px;
          height: 24px;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .brand-name {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-white);
        }

        .footer-tagline {
          color: #A0AEC0;
          font-size: 0.9375rem;
          line-height: 1.6;
          max-width: 340px;
        }

        .footer-heading {
          color: var(--color-white);
          font-family: var(--font-secondary);
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: #A0AEC0;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--color-coral-hero);
        }

        .footer-contact-info {
          list-style: none;
          margin: 0 0 1.5rem 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: 0.875rem;
        }

        .footer-contact-info li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #CBD5E0;
        }

        .footer-contact-info a {
          color: #CBD5E0;
          text-decoration: none;
        }

        .footer-contact-info a:hover {
          color: var(--color-coral-hero);
        }



        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.5rem 0;
          background-color: var(--color-navy-deep);
        }

        .footer-bottom-inner {
          max-width: var(--max-width-desktop);
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8125rem;
          color: #718096;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-bottom-links a {
          color: #718096;
          text-decoration: none;
        }

        .footer-bottom-links a:hover {
          color: var(--color-white);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
