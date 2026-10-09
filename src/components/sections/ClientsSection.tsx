"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { clientsData, clientStats, whyChooseUs } from "../../data/clients";

export default function ClientsSection() {
  const [activeClientId, setActiveClientId] = useState<string | null>(null);
  const activeClient = clientsData.find(c => c.id === activeClientId) || clientsData[0];

  return (
    <section id="clients" className="clients-section snap-section">
      {/* 1. HERO SUB-HEADER & STATS */}
      <div className="container-custom">
        <div className="hero-text-block">
          <span className="section-tag">OUR IMPACT</span>
          <h2 className="section-title-serif">Helping Organizations Transform Across Industries</h2>
          <p className="hero-subtext">
            From AI strategy and management consulting to enterprise transformation, we partner with organizations worldwide to solve complex challenges and deliver measurable outcomes.
          </p>

          {/* Stats Row Grid */}
          <div className="stats-row-grid">
            {clientStats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-val">{stat.value}</div>
                <div className="stat-lbl">{stat.label}</div>
                <div className="stat-sub">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. OUR GLOBAL PRESENCE MAP */}
      <div className="global-presence-inner">
        <div className="container-custom">
          <div className="text-left-block" style={{ marginBottom: "2.5rem" }}>
            <h3 className="section-sub-heading">Our Global Presence</h3>
            <p className="section-subtitle-text">We work with organizations around the world, bringing local understanding and global expertise to every engagement.</p>
          </div>

          {/* SVG World Map Container */}
          <div className="map-wrapper-card">
            <div className="map-image-container">
              <img 
                src="/images/world_map_with_points.svg" 
                alt="World Map with Points" 
                className="world-map-svg"
              />

              {/* Interactive Location Pins overlay */}
              {clientsData.map((client) => {
                const isActive = client.id === activeClientId;
                return (
                  <div 
                    key={client.id}
                    className={`map-pin-badge ${isActive ? "active" : ""}`}
                    style={{ top: `${client.mapPin.topPercent}%`, left: `${client.mapPin.leftPercent}%` }}
                    onMouseEnter={() => setActiveClientId(client.id)}
                    onMouseLeave={() => setActiveClientId(null)}
                    onClick={() => setActiveClientId(isActive ? null : client.id)}
                  >
                    <div className="pin-dot-icon">
                      <MapPin size={15} color="#FFFFFF" />
                    </div>
                    <span className="pin-country-label">{client.country}</span>

                    {/* Floating Client Card */}
                    {isActive && (
                      <div className="nearby-client-card">
                        <div className="card-header-row">
                          <div className={`client-logo-avatar ${client.logoUrl ? "has-logo" : ""}`}>
                            {client.logoUrl ? (
                              <img src={client.logoUrl} alt={client.name} className="client-logo-img" />
                            ) : (
                              <span>{client.logoText}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="card-client-title">{client.name}</h4>
                            <span className="card-client-loc">{client.location}, {client.country}</span>
                          </div>
                        </div>
                        <div className="card-pill-bar">
                          <span className="card-ind-pill">{client.industry}</span>
                        </div>
                        <p className="card-desc-text">{client.description}</p>
                        <Link href="/contact" className="card-profile-link">
                          View Profile <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. WORKED WITH ROWS */}
      <div className="worked-with-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Organizations We’ve Worked With</h3>
            <div className="title-underline-center" />
          </div>

          <div className="clients-list-rows">
            {clientsData.map((client) => (
              <div 
                key={client.id} 
                className={`client-row-item ${client.id === activeClientId ? "highlighted" : ""}`}
                onMouseEnter={() => setActiveClientId(client.id)}
              >
                <div className="client-col-brand">
                  <div className={`client-logo-box ${client.logoUrl ? "has-logo" : ""}`}>
                    {client.logoUrl ? (
                      <img src={client.logoUrl} alt={client.name} className="client-logo-img" />
                    ) : (
                      <span className="logo-abbr">{client.logoText}</span>
                    )}
                  </div>
                  <div>
                    <h5 className="client-name">{client.name}</h5>
                    {client.tagline && <span className="client-tagline">{client.tagline}</span>}
                  </div>
                </div>

                <div className="client-col-loc">
                  <MapPin size={18} className="loc-icon" />
                  <span>{client.location}, {client.country}</span>
                </div>

                <div className="client-col-ind">
                  <span className="ind-pill-badge">{client.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE */}
      <div className="why-choose-inner">
        <div className="container-custom">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <h3 className="section-sub-heading">Why Organizations Choose Shaw &amp; Goswami AI</h3>
            <div className="title-underline-center" />
          </div>

          <div className="why-choose-grid-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clients-section {
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
          max-width: 650px;
          margin-bottom: 3rem;
        }

        .stats-row-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(11, 19, 43, 0.1);
        }

        .stat-val {
          font-family: var(--font-primary);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-lbl {
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-navy-dark);
        }

        .stat-sub {
          font-size: 0.75rem;
          color: var(--color-navy-dark);
          opacity: 0.8;
        }

        /* Presence Map */
        .global-presence-inner {
          padding: 6rem 0;
          background-color: var(--color-white);
          margin-top: 5rem;
        }

        .text-left-block {
          text-align: left;
        }

        .section-subtitle-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 650px;
          margin: 0 0 1.5rem 0;
        }

        .map-wrapper-card {
          background-color: var(--color-white);
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
          padding: 1.5rem;
          position: relative;
        }

        .map-image-container {
          position: relative;
          width: 100%;
          border-radius: var(--border-radius-md);
          background-color: #FAFAFA;
        }

        .world-map-svg {
          width: 100%;
          height: auto;
          display: block;
          opacity: 0.75;
          border-radius: var(--border-radius-md);
        }

        .map-pin-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--color-white);
          padding: 0.35rem;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(11, 19, 43, 0.22);
          border: 1.5px solid var(--color-navy-dark);
          cursor: pointer;
          transform: translate(-50%, -50%);
          transition: all 0.25s ease;
          z-index: 10;
        }

        .map-pin-badge.active,
        .map-pin-badge:hover {
          background-color: var(--color-navy-dark);
          color: var(--color-white);
          border-color: var(--color-navy-dark);
          padding: 0.35rem 0.85rem;
          transform: translate(-50%, -50%) scale(1.1);
          z-index: 20;
        }

        .pin-dot-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--color-coral-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pin-country-label {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          color: inherit;
          display: none;
          white-space: nowrap;
        }

        .map-pin-badge:hover .pin-country-label,
        .map-pin-badge.active .pin-country-label {
          display: inline-block;
        }

        .nearby-client-card {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
          width: 270px;
          background-color: var(--color-white);
          padding: 1.25rem;
          border-radius: var(--border-radius-md);
          box-shadow: 0 14px 35px rgba(11, 19, 43, 0.25);
          border: 1.5px solid var(--color-navy-dark);
          z-index: 100;
          animation: popIn 0.2s ease;
          cursor: default;
          text-align: left;
        }

        .nearby-client-card::before {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 7px;
          border-style: solid;
          border-color: transparent transparent var(--color-navy-dark) transparent;
        }

        @keyframes popIn {
          from { opacity: 0; transform: translate(-50%, -6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .card-header-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.75rem;
        }

        .client-logo-avatar {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background-color: #0B1B3D;
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-primary);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .card-client-title {
          font-family: var(--font-primary);
          font-size: 1.05rem;
          color: var(--color-navy-dark);
          line-height: 1.2;
        }

        .card-client-loc {
          font-size: 0.785rem;
          color: var(--color-text-muted);
          display: block;
        }

        .card-pill-bar {
          margin-bottom: 0.75rem;
        }

        .card-ind-pill {
          display: inline-block;
          font-size: 0.725rem;
          font-weight: 700;
          background-color: var(--color-coral-light);
          color: var(--color-navy-dark);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
        }

        .card-desc-text {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .card-profile-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-coral-border);
          text-decoration: none;
        }

        .card-profile-link:hover {
          color: var(--color-navy-dark);
        }

        /* Worked With */
        .worked-with-inner {
          padding: 6rem 0;
          background-color: var(--color-cream-bg);
        }

        .title-underline-center {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-border);
          margin: 0 auto;
        }

        .clients-list-rows {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .client-row-item {
          background-color: var(--color-white);
          padding: 1.75rem 2.25rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr;
          align-items: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .client-row-item:hover,
        .client-row-item.highlighted {
          box-shadow: var(--color-card-shadow-hover);
          border-color: var(--color-coral-border);
          background-color: var(--color-white);
        }

        .client-col-brand {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .client-logo-box {
          width: 56px;
          height: 56px;
          border-radius: 8px;
          background-color: #0B1B3D;
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-primary);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .client-logo-avatar.has-logo {
          background-color: var(--color-white);
          padding: 2px;
        }

        .client-logo-box.has-logo {
          background-color: var(--color-white);
          padding: 4px;
          border: 1px solid var(--color-border-subtle);
        }

        .client-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 4px;
        }

        .client-name {
          font-family: var(--font-primary);
          font-size: 1.2rem;
          color: var(--color-navy-dark);
        }

        .client-tagline {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }

        .client-col-loc {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9375rem;
          color: var(--color-navy-dark);
        }

        .loc-icon {
          color: var(--color-coral-border);
        }

        .ind-pill-badge {
          display: inline-block;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background-color: var(--color-white);
          color: var(--color-navy-dark);
          padding: 0.4rem 0.85rem;
          border-radius: 6px;
          border: 1px solid var(--color-border-subtle);
        }

        /* Why Choose */
        .why-choose-inner {
          padding: 6rem 0 0 0;
          background-color: var(--color-white);
        }

        .why-choose-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .why-card {
          background-color: var(--color-cream-bg);
          padding: 2rem;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--color-card-shadow);
        }

        .why-icon-box {
          color: var(--color-coral-border);
          margin-bottom: 1rem;
        }

        .why-card-title {
          font-family: var(--font-primary);
          font-size: 1.15rem;
          color: var(--color-navy-dark);
          margin-bottom: 0.5rem;
        }

        .why-card-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .stats-row-grid,
          .why-choose-grid-4 {
            grid-template-columns: 1fr 1fr;
          }
          .client-row-item {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 600px) {
          .stats-row-grid,
          .why-choose-grid-4 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
