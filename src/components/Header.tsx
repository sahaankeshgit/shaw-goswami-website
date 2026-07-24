"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState<string>("");

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // ScrollSpy to highlight active section on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["hero", "about", "solutions", "industries", "clients", "faqs", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section is in viewport focus
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);

  // Navigation Items
  const reorderedNavItems = [
    { label: "ABOUT US", href: "/#about" },
    { label: "PRODUCT AND SERVICES", href: "/#solutions" },
    { label: "INDUSTRIES", href: "/#industries" },
    { label: "CLIENTS", href: "/#clients" },
    { label: "FAQS", href: "/#faqs" }
  ];

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      const targetHash = href.replace("/#", "");
      if (pathname === "/") {
        return activeSection === targetHash;
      }
      return false;
    }
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          {/* Top-Left Modular Brand Logo */}
          <BrandLogo layout="horizontal" variant="dark" />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-items">
              {reorderedNavItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`nav-link ${isLinkActive(item.href) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Primary Visible Button CTA */}
          <div className="header-cta-block">
            <Link href="/contact" className="btn-cta-navy">
              BOOK A STRATEGY CALL <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {reorderedNavItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`mobile-nav-item ${isLinkActive(item.href) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "1.5rem" }}>
                <Link href="/contact" className="btn-cta-navy" style={{ width: "100%", justifyContent: "center" }}>
                  BOOK A STRATEGY CALL <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}


      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: var(--color-coral-hero);
          border-bottom: 1px solid rgba(11, 19, 43, 0.18);
          transition: all 0.3s ease;
          padding: 0.85rem 0;
        }

        .site-header.scrolled {
          box-shadow: 0 4px 20px rgba(11, 19, 43, 0.12);
          background-color: rgba(245, 220, 220, 0.98);
          backdrop-filter: blur(12px);
          padding: 0.65rem 0;
        }

        .header-inner {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .nav-items {
          display: flex;
          align-items: center;
          gap: 1.35rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: var(--font-secondary);
          font-size: 0.785rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--color-navy-dark);
          text-decoration: none;
          padding: 0.4rem 0;
          position: relative;
          white-space: nowrap;
          transition: opacity 0.2s ease;
        }

        .nav-link:hover {
          opacity: 0.75;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          background-color: var(--color-navy-dark);
          border-radius: 2px;
        }

        .header-cta-block {
          flex-shrink: 0;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-navy-dark);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-coral-hero);
          z-index: 999;
          padding: 2rem 1.5rem;
          overflow-y: auto;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-item {
          font-family: var(--font-secondary);
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--color-navy-dark);
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(11, 19, 43, 0.1);
        }

        @media (max-width: 1120px) {
          .desktop-nav,
          .header-cta-block {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
