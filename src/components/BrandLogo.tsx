"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  layout?: "horizontal" | "stacked";
  variant?: "dark" | "light";
  className?: string;
}

export default function BrandLogo({ 
  layout = "horizontal",
  variant = "dark",
  className = "" 
}: BrandLogoProps) {
  const isLight = variant === "light";
  const logoSrc = isLight 
    ? "/images/logo_master_horizontal_white.png" 
    : "/images/logo_master_horizontal.png";

  return (
    <Link 
      href="/" 
      onClick={(e) => {
        if (typeof window !== "undefined" && window.location.pathname === "/") {
          e.preventDefault();
          
          // Clear URL hash without reload
          window.history.pushState(null, "", window.location.pathname + window.location.search);
          
          const hero = document.getElementById("hero");
          if (hero) {
            hero.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
      }}
      className={`brand-logo-container layout-${layout} ${className}`} 
      aria-label="Shaw & Goswami AI Home"
    >
      {layout === "horizontal" ? (
        <span className="logo-horizontal-group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={logoSrc} 
            alt="Shaw & Goswami" 
            className="logo-img-master-horizontal"
          />
          <span className={`logo-ai-suffix ${isLight ? "is-light" : ""}`}>AI</span>
        </span>
      ) : (
        <div className="stacked-logo-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/logo_clean_sg.png" 
            alt="SG" 
            className="logo-img-sg-stacked"
            style={isLight ? { filter: "brightness(0) invert(1)" } : undefined}
          />
          <div className="stacked-text-group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/logo_clean_shaw.png" 
              alt="SHAW &" 
              className="logo-img-shaw"
              style={isLight ? { filter: "brightness(0) invert(1)" } : undefined}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/logo_clean_goswami.png" 
              alt="GOSWAMI" 
              className="logo-img-goswami"
              style={isLight ? { filter: "brightness(0) invert(1)" } : undefined}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .brand-logo-container {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          user-select: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }

        .brand-logo-container:hover {
          opacity: 0.85;
        }

        .logo-horizontal-group {
          display: inline-flex;
          align-items: center;
        }

        .logo-ai-suffix {
          font-family: var(--font-cinzel), "Cinzel", "Trajan Pro", Georgia, serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.02em;
          color: #00254A;
          margin-left: 0.4em;
          padding-top: 1px;
        }

        .logo-ai-suffix.is-light {
          color: #FFFFFF;
        }

        .logo-img-master-horizontal {
          height: 34px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .stacked-logo-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-img-sg-stacked {
          height: 34px;
          width: auto;
          object-fit: contain;
        }

        .stacked-text-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .logo-img-shaw,
        .logo-img-goswami {
          height: 11px;
          width: auto;
          object-fit: contain;
        }
      `}</style>
    </Link>
  );
}
