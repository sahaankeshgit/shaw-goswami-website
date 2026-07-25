import React from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { 
  ArrowLeft, 
  Activity, 
  ShoppingBag, 
  Cpu, 
  DollarSign, 
  Truck, 
  Zap, 
  Globe, 
  Briefcase,
  CheckCircle,
  FileText,
  Target,
  ArrowRight
} from "lucide-react";
import { getIndustryBySlug, getIndustries } from "../../../lib/cms";

export async function generateStaticParams() {
  const allIndustries = await getIndustries();
  return allIndustries.map((ind) => ({
    slug: ind.slug,
  }));
}

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndustrySubPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  
  if (slug === "and-many-more") {
    redirect("/contact");
  }

  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Activity,
    ShoppingBag,
    Cpu,
    DollarSign,
    Truck,
    Zap,
    Globe,
    Briefcase
  };

  const IndIcon = iconMap[industry.iconName] || Globe;

  return (
    <>
      {/* Page Header */}
      <section className="industry-detail-header" aria-labelledby="page-title">
        <div className="container">
          <Link href="/industries" className="back-link">
            <ArrowLeft size={16} /> Back to All Industries
          </Link>
          <div className="detail-header-flex">
            <div className="detail-header-text">
              <div className="detail-header-icon-box">
                <IndIcon size={28} />
              </div>
              <h1 id="page-title" className="detail-title">{industry.title} Practice</h1>
              <p className="detail-lead">{industry.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Industry Practice Details">
        <div className="container">
          <div className="detail-grid">
            {/* Main Column */}
            <div className="detail-main-content">
              {/* Challenges */}
              <div className="detail-block">
                <h2 className="detail-block-title">Key Industry Challenges</h2>
                <ul className="detail-list-challenges">
                  {industry.challenges.map((challenge, idx) => (
                    <li key={idx} className="challenge-item">
                      <span className="bullet-cross">&times;</span>
                      <p>{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="detail-block">
                <h2 className="detail-block-title">Emerging AI & Data Opportunities</h2>
                <ul className="detail-list-deliverables">
                  {industry.opportunities.map((opp, idx) => (
                    <li key={idx} className="deliverable-item">
                      <Zap size={18} style={{ color: "var(--color-blue)", flexShrink: 0 }} />
                      <span>{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transformation Roadmap */}
              <div className="detail-block">
                <h2 className="detail-block-title">Recommended Transformation Roadmap</h2>
                <div className="roadmap-flow">
                  {industry.roadmap.map((step, idx) => (
                    <div key={idx} className="roadmap-step-card">
                      <div className="roadmap-step-header">
                        <span className="roadmap-step-phase">{step.phase}</span>
                        <span className="roadmap-step-duration">{step.duration}</span>
                      </div>
                      <h3 className="roadmap-step-title">{step.title}</h3>
                      <p className="roadmap-step-desc">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Solutions */}
              <div className="detail-block">
                <h2 className="detail-block-title">Relevant Consulting Engines</h2>
                <div className="services-grid">
                  {industry.solutions.map((solSlug, idx) => (
                    <Link href={`/solutions/${solSlug}`} key={idx} className="service-bullet-card hover-card">
                      <Cpu size={18} className="service-bullet-icon" />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className="service-bullet-title" style={{ color: "var(--color-blue)" }}>
                          {solSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "var(--color-text-gray)" }}>
                          View Solution &rarr;
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="detail-sidebar">
              {/* Outcomes */}
              <div className="sidebar-card outcomes-card" aria-labelledby="outcomes-heading">
                <h2 id="outcomes-heading" className="sidebar-card-title">Business Outcomes Achieved</h2>
                <ul className="outcomes-list">
                  {industry.outcomes.map((outcome, idx) => (
                    <li key={idx}>
                      <Target size={18} className="outcome-icon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Studies */}
              {industry.caseStudies.map((cs, idx) => (
                <div key={idx} className="sidebar-card case-study-card" aria-labelledby={`case-title-${idx}`}>
                  <span className="case-tag">Anonymized Case Study</span>
                  <h2 id={`case-title-${idx}`} className="case-title">{cs.title}</h2>
                  <div className="case-body">
                    <div className="case-item">
                      <span className="case-label">Challenge:</span>
                      <p className="case-text">{cs.challenge}</p>
                    </div>
                    <div className="case-item">
                      <span className="case-label">Solution:</span>
                      <p className="case-text">{cs.solution}</p>
                    </div>
                    <div className="case-item">
                      <span className="case-label">Outcome:</span>
                      <p className="case-text font-bold">{cs.outcome}</p>
                    </div>
                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="case-item" style={{ marginTop: "0.5rem" }}>
                        <span className="case-label">Impact Metrics:</span>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          {cs.metrics.map((m, midx) => (
                            <li key={midx} style={{ fontSize: "0.875rem", color: "var(--color-text-dark)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                              <CheckCircle size={12} style={{ color: "#10B981" }} />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="detail-cta-bar" aria-labelledby="detail-cta-heading">
        <div className="container detail-cta-container">
          <h2 id="detail-cta-heading" className="detail-cta-heading">
            Partner with Our {industry.title} Consultants
          </h2>
          <p className="detail-cta-sub">
            Let our consulting partners audit your existing operations and define a high-yield transformation roadmap.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Strategy Consultation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
