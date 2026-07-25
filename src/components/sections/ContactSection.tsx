"use client";

import React, { startTransition, useActionState } from "react";
import { Loader2, Calendar } from "lucide-react";
import { submitContactForm, ContactState } from "../../app/actions/contact";

const HELP_OPTIONS = [
  { value: "AI Strategy", label: "AI Strategy & Roadmap" },
  { value: "Business Transformation", label: "Business Transformation" },
  { value: "Data & Analytics", label: "Data & Analytics" },
  { value: "Digital Product Engineering", label: "Digital Product Engineering" },
  { value: "Other", label: "Other / General Inquiry" }
];

const initialState: ContactState = {
  success: false,
  message: "",
};

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <section id="contact" className="contact-section snap-section">
      <div className="container-custom">
        <div className="text-left-block" style={{ marginBottom: "3.5rem" }}>
          <span className="section-tag">CONSULTATION</span>
          <h2 className="section-title-serif">Let's Start a Conversation</h2>
          <p className="section-subtitle-text">
            Schedule a strategy call or submit a consultation request directly below.
          </p>
          <div className="title-underline-left" />
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Calendly */}
          <div className="contact-info-col">
            <h3 className="contact-col-title-homepage">Get in Touch</h3>
            <p className="contact-info-intro">
              Schedule a call directly or submit your details to have an industry consulting partner contact you.
            </p>

            {/* Calendly Integration Block */}
            <div className="calendly-mock-card" style={{ marginTop: "1rem" }}>
              <Calendar size={24} style={{ color: "#053a6e", marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#053a6e", marginBottom: "0.5rem" }}>
                Schedule Direct Call
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-light)", marginBottom: "1.5rem" }}>
                Skip the form and select a time directly on our consulting partner calendar.
              </p>
              <a 
                href="https://calendly.com/ankesh-shawandgoswami/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-calendly-scheduler"
              >
                Open Calendar Scheduler
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="contact-col-title-homepage" style={{ marginBottom: "1.5rem" }}>Request a Strategy Audit</h3>

              {state.success ? (
                <div className="form-success-alert" role="alert">
                  <div className="success-icon">&checkmark;</div>
                  <div className="success-text">
                    <h3 style={{ color: "#065F46", fontSize: "1.125rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                      Submission Successful
                    </h3>
                    <p style={{ color: "#047857", fontSize: "0.9375rem", marginBottom: "0", lineHeight: "1.5" }}>
                      {state.message}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-lead-form">
                  {state.message && (
                    <div className="form-error-alert" role="alert">
                      {state.message}
                    </div>
                  )}

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-control-homepage"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-control-homepage"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company / Organization *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="form-control-homepage"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="role" className="form-label">Your Title / Role *</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        className="form-control-homepage"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control-homepage"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="helpType" className="form-label">How can we help? *</label>
                      <select
                        id="helpType"
                        name="helpType"
                        required
                        className="form-control-homepage"
                      >
                        <option value="">Select an option...</option>
                        {HELP_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Project Scope Details / Inquiry</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control-homepage"
                      placeholder="Briefly describe your business goals or technological bottlenecks..."
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-submit-consultation"
                  >
                    {isPending ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                        <Loader2 size={16} className="animate-spin" /> Submitting Request...
                      </span>
                    ) : (
                      "Submit Consultation Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 2.5rem 0 3.5rem 0;
          background-color: var(--color-white);
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
          text-transform: uppercase;
        }

        .section-title-serif {
          font-family: var(--font-cinzel), 'Cinzel', Georgia, serif;
          font-size: clamp(2rem, 1.75rem + 1.5vw, 3.25rem);
          color: #053a6e;
          margin-bottom: 1.25rem;
        }

        .text-left-block {
          text-align: left;
        }

        .section-subtitle-text {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 0 1.5rem 0;
        }

        .title-underline-left {
          width: 50px;
          height: 3px;
          background-color: var(--color-coral-border);
          margin: 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }

        .contact-col-title-homepage {
          font-family: var(--font-cinzel), 'Cinzel', Georgia, serif;
          font-size: 1.5rem !important;
          font-weight: 500 !important;
          color: #053a6e;
          margin-bottom: 1.25rem;
        }

        .contact-info-intro {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .calendly-mock-card {
          background-color: var(--color-cream-bg);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--border-radius-md);
          padding: 2rem;
        }

        .btn-calendly-scheduler {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: #0B1B3D;
          color: var(--color-white);
          font-family: var(--font-secondary);
          font-size: 0.875rem;
          font-weight: 700;
          padding: 0.85rem 1.5rem;
          border-radius: var(--border-radius-sm);
          text-decoration: none;
          transition: all 0.25s ease;
          border: none;
        }

        .btn-calendly-scheduler:hover {
          background-color: #060B18;
          transform: translateY(-1px);
        }

        .form-card {
          background-color: var(--color-cream-bg);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--border-radius-md);
          padding: 2.5rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.785rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-text-light);
          letter-spacing: 0.05em;
        }

        .form-control-homepage {
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius-sm);
          border: 1px solid #CBD5E1;
          background-color: var(--color-white);
          font-size: 0.9rem;
          color: var(--color-text-dark);
          transition: border-color 0.2s ease;
          width: 100%;
        }

        .form-control-homepage:focus {
          outline: none;
          border-color: #053a6e;
        }

        .btn-submit-consultation {
          width: 100%;
          background-color: #0B1B3D;
          color: var(--color-white);
          font-family: var(--font-secondary);
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.85rem 1.5rem;
          border-radius: var(--border-radius-sm);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 1rem;
        }

        .btn-submit-consultation:hover {
          background-color: #060B18;
          transform: translateY(-1px);
        }

        .form-success-alert {
          background-color: #ECFDF5;
          border: 1px solid #A7F3D0;
          border-radius: var(--border-radius-sm);
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
        }

        .success-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #10B981;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .form-grid-2 {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
