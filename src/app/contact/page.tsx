"use client";

import React, { startTransition, useActionState } from "react";
import { Mail, Phone, MapPin, Loader2, Calendar } from "lucide-react";
import { submitContactForm, ContactState } from "../actions/contact";

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

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="contact-header-section" aria-labelledby="page-title">
        <div className="container">
          <div className="subpage-header-content">
            <span className="section-tagline">Consultation</span>
            <h1 id="page-title" className="subpage-title">Let's Start a Conversation</h1>
            <p className="subpage-lead">
              Our partners are available to evaluate your organization's AI readiness and design a high-value roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Contact information and form">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info & Calendly */}
            <div className="contact-info-col">
              <h2 className="contact-col-title">Get in Touch</h2>
              <p className="contact-info-intro">
                Schedule a call directly or submit your details to have an industry consulting partner contact you.
              </p>



              {/* Calendly Integration Block */}
              <div className="calendly-mock-card">
                <Calendar size={24} style={{ color: "var(--color-blue)", marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "var(--color-navy)", marginBottom: "0.5rem" }}>
                  Schedule Direct Call
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-gray)", marginBottom: "1.5rem" }}>
                  Skip the form and select a time directly on our consulting partner calendar.
                </p>
                <a 
                  href="https://calendly.com/ankesh-shawandgoswami/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary-dark" 
                  style={{ width: "100%", display: "inline-flex", textDecoration: "none" }}
                >
                  Open Calendar Scheduler
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-col">
              <div className="form-card">
                <h2 className="contact-col-title" style={{ marginBottom: "1.5rem" }}>Request a Strategy Audit</h2>

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

                    <div className="grid-2" style={{ gap: "1rem" }}>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className={`form-control ${state.errors?.name ? "input-error" : ""}`}
                          aria-invalid={!!state.errors?.name}
                          aria-describedby={state.errors?.name ? "name-error" : undefined}
                        />
                        {state.errors?.name && (
                          <span id="name-error" className="error-hint">{state.errors.name}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Work Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={`form-control ${state.errors?.email ? "input-error" : ""}`}
                          aria-invalid={!!state.errors?.email}
                          aria-describedby={state.errors?.email ? "email-error" : undefined}
                        />
                        {state.errors?.email && (
                          <span id="email-error" className="error-hint">{state.errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: "1rem" }}>
                      <div className="form-group">
                        <label htmlFor="company" className="form-label">Company Name *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className={`form-control ${state.errors?.company ? "input-error" : ""}`}
                          aria-invalid={!!state.errors?.company}
                          aria-describedby={state.errors?.company ? "company-error" : undefined}
                        />
                        {state.errors?.company && (
                          <span id="company-error" className="error-hint">{state.errors.company}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="role" className="form-label">Job Title / Role *</label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          required
                          className={`form-control ${state.errors?.role ? "input-error" : ""}`}
                          aria-invalid={!!state.errors?.role}
                          aria-describedby={state.errors?.role ? "role-error" : undefined}
                        />
                        {state.errors?.role && (
                          <span id="role-error" className="error-hint">{state.errors.role}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: "1rem" }}>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="helpType" className="form-label">How can we help? *</label>
                        <select
                          id="helpType"
                          name="helpType"
                          required
                          className={`form-control ${state.errors?.helpType ? "input-error" : ""}`}
                          aria-invalid={!!state.errors?.helpType}
                          aria-describedby={state.errors?.helpType ? "help-error" : undefined}
                        >
                          <option value="">Select an option...</option>
                          {HELP_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {state.errors?.helpType && (
                          <span id="help-error" className="error-hint">{state.errors.helpType}</span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Project Scope Details / Inquiry</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Briefly describe your business goals or technological bottlenecks..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn btn-primary"
                      style={{ width: "100%", height: "48px", marginTop: "1rem" }}
                    >
                      {isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Submitting Request...
                        </>
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
      </section>

      <style jsx>{`
        .contact-header-section {
          background-color: var(--color-coral-hero);
          padding: 5.5rem 0 3.5rem 0;
        }

        .section-tagline {
          font-family: var(--font-secondary);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-navy-dark);
          opacity: 0.8;
          display: block;
          margin-bottom: 0.5rem;
        }

        .subpage-title {
          font-family: var(--font-primary);
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-navy-dark);
          margin-bottom: 1rem;
        }

        .subpage-lead {
          font-size: 1.125rem;
          color: var(--color-navy-dark);
          opacity: 0.9;
          max-width: 650px;
        }
      `}</style>
    </>
  );
}
