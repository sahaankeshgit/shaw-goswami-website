import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  TrendingUp, 
  Compass, 
  PieChart, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Layers, 
  Activity, 
  Cpu, 
  Globe,
  CheckCircle,
  FileSpreadsheet,
  Settings,
  Target
} from "lucide-react";
import { getSolutionBySlug, getSolutions } from "../../../lib/cms";

// Dynamic routing static path generator for optimization
export async function generateStaticParams() {
  const allSolutions = await getSolutions();
  return allSolutions.map((sol) => ({
    slug: sol.slug,
  }));
}

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SolutionSubPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    TrendingUp,
    Compass,
    PieChart,
    BookOpen,
    FileText,
    MessageSquare,
    Layers,
    Activity,
    Cpu
  };

  const SolIcon = iconMap[solution.iconName] || Cpu;

  return (
    <>
      {/* Dynamic Header */}
      <section className="solution-detail-header" aria-labelledby="detail-title">
        <div className="container">
          <Link href="/solutions" className="back-link">
            <ArrowLeft size={16} /> Back to All Solutions
          </Link>
          <div className="detail-header-flex">
            <div className="detail-header-text">
              <div className="detail-header-icon-box">
                <SolIcon size={28} />
              </div>
              <h1 id="detail-title" className="detail-title">{solution.title}</h1>
              <p className="detail-lead">{solution.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }} aria-label="Solution details">
        <div className="container">
          <div className="detail-grid">
            {/* Left Content Column */}
            <div className="detail-main-content">
              {/* Challenges */}
              <div className="detail-block">
                <h2 className="detail-block-title">Business Challenges This Solves</h2>
                <ul className="detail-list-challenges">
                  {solution.challenges.map((challenge, idx) => (
                    <li key={idx} className="challenge-item">
                      <span className="bullet-cross">&times;</span>
                      <p>{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="detail-block">
                <h2 className="detail-block-title">Our Transformation Approach</h2>
                <p className="detail-text">{solution.approach}</p>
              </div>

              {/* Services Included */}
              <div className="detail-block">
                <h2 className="detail-block-title">Services Included</h2>
                <div className="services-grid">
                  {solution.services.map((service, idx) => (
                    <div key={idx} className="service-bullet-card">
                      <Settings size={18} className="service-bullet-icon" />
                      <h3 className="service-bullet-title">{service}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="detail-block">
                <h2 className="detail-block-title">Deliverables Received</h2>
                <ul className="detail-list-deliverables">
                  {solution.deliverables.map((del, idx) => (
                    <li key={idx} className="deliverable-item">
                      <CheckCircle size={18} className="bullet-check" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side Cards */}
            <aside className="detail-sidebar">
              {/* Expected Outcomes */}
              <div className="sidebar-card outcomes-card" aria-labelledby="outcomes-heading">
                <h2 id="outcomes-heading" className="sidebar-card-title">Expected Business Outcomes</h2>
                <ul className="outcomes-list">
                  {solution.outcomes.map((outcome, idx) => (
                    <li key={idx}>
                      <Target size={18} className="outcome-icon" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study Snippet */}
              <div className="sidebar-card case-study-card" aria-labelledby="case-heading">
                <span className="case-tag">Anonymized Case Study</span>
                <h2 id="case-heading" className="case-title">Operational Validation</h2>
                <div className="case-body">
                  <div className="case-item">
                    <span className="case-label">Challenge:</span>
                    <p className="case-text">{solution.caseStudy.challenge}</p>
                  </div>
                  <div className="case-item">
                    <span className="case-label">Solution:</span>
                    <p className="case-text">{solution.caseStudy.solution}</p>
                  </div>
                  <div className="case-item">
                    <span className="case-label">Outcome:</span>
                    <p className="case-text font-bold">{solution.caseStudy.outcome}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="detail-cta-bar" aria-labelledby="detail-cta-heading">
        <div className="container detail-cta-container">
          <h2 id="detail-cta-heading" className="detail-cta-heading">
            Deploy {solution.title} in Your Organization
          </h2>
          <p className="detail-cta-sub">
            Let our consulting partners map your existing software pipelines and design an implementation blueprint.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Strategy Consultation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
