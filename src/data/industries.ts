export interface IndustryRoadmapStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
}

export interface IndustryCaseStudy {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
}

export interface Industry {
  slug: string;
  title: string;
  summary: string;
  iconName: string;
  bgImage?: string;
  challenges: string[];
  opportunities: string[];
  roadmap: IndustryRoadmapStep[];
  solutions: string[];
  caseStudies: IndustryCaseStudy[];
  outcomes: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Enhancing patient outcomes, optimizing operations, and unlocking insights with AI.",
    iconName: "HeartPulse",
    challenges: [
      "Clinician burnout from excessive documentation workload.",
      "Fragmented patient data and slow clinical triage flows.",
      "Increasing costs of patient administration and claims management."
    ],
    opportunities: [
      "Clinical Charting Automation: Ambient audio-to-soap notes scribing.",
      "Intelligent Patient Triage: Predicting readmission risks and triaging queues.",
      "Medical Document Ingestion: Automating prior-authorization request audits."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Compliance & Data Setup", duration: "1 Month", description: "Establish HIPAA-compliant cloud interfaces and FHIR APIs." },
      { phase: "Phase 2", title: "Clinical Support Pilot", duration: "2-3 Months", description: "Deploy ambient scribe and triage automation to test cohorts." }
    ],
    solutions: ["healthcare-ai-assistant", "document-intelligence"],
    caseStudies: [
      {
        title: "AI-Powered Patient Support Platform",
        challenge: "Clinicians spent excessive hours on administrative paperwork rather than patient care.",
        solution: "Implemented an AI clinical assistant for patient engagement and administrative reduction.",
        outcome: "40% reduction in admin tasks and 35% improved patient satisfaction.",
        metrics: ["40% Reduction in Admin Tasks", "35% Improved Patient Satisfaction"]
      }
    ],
    outcomes: ["Reduced Administrative Burden", "Faster Patient Triage", "Higher Diagnostic Efficiency"]
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    summary: "Improving asset performance, predicting risk, and optimizing operations across the value chain.",
    iconName: "Flame",
    challenges: [
      "Unplanned equipment downtime on offshore and pipeline infrastructure.",
      "Safety risks and delayed environmental reporting.",
      "Complex supply chain and logistics across remote operational sites."
    ],
    opportunities: [
      "Predictive Maintenance: Sensor data analytics for early failure detection.",
      "Logistics Optimization: Real-time tracking of fuel and spare parts transportation.",
      "Safety Monitoring: AI computer vision for field hazard detection."
    ],
    roadmap: [
      { phase: "Phase 1", title: "IoT Sensor Integration", duration: "1-2 Months", description: "Connect telemetry streams into centralized data platform." },
      { phase: "Phase 2", title: "Predictive Models Rollout", duration: "3 Months", description: "Train and deploy failure prevention algorithms." }
    ],
    solutions: ["supply-chain-intelligence", "demand-forecasting"],
    caseStudies: [
      {
        title: "Predictive Maintenance for Operational Excellence",
        challenge: "Pipeline equipment failures caused costly downtime and emergency repair expenditures.",
        solution: "Deployed ML predictive maintenance algorithms capturing real-time vibration and temperature data.",
        outcome: "30% reduction in downtime and $2M+ in annual cost savings.",
        metrics: ["30% Reduction in Downtime", "$2M+ Annual Cost Savings"]
      }
    ],
    outcomes: ["Zero Unplanned Halts", "Lower Operational Risk", "Automated Compliance Auditing"]
  },
  {
    slug: "fmcg",
    title: "FMCG",
    summary: "Driving demand, improving supply chains, and creating data-driven customer value.",
    iconName: "ShoppingCart",
    challenges: [
      "Inaccurate demand forecasting leading to stockouts or excess holding.",
      "Fragmented retail distributor channels with poor visibility.",
      "Shifting consumer preferences and fast-moving category trends."
    ],
    opportunities: [
      "Demand & Promotion Forecasting: Machine learning for SKU level precision.",
      "Distributor Orchestration: Real-time inventory tracking across regional hubs.",
      "Trade Spend Optimization: Algorithmic analysis of promotional ROI."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Data Pipeline Aggregation", duration: "1 Month", description: "Consolidate sales, warehouse, and trade data." },
      { phase: "Phase 2", title: "Predictive Engine Rollout", duration: "2-3 Months", description: "Launch multi-variable forecasting engine." }
    ],
    solutions: ["demand-forecasting", "supply-chain-intelligence"],
    caseStudies: [
      {
        title: "Demand Forecasting & Inventory Optimization",
        challenge: "High forecast error rate caused chronic stockouts and high holding costs.",
        solution: "Built a machine learning forecasting engine integrating weather and promotional trends.",
        outcome: "25% improvement in forecast accuracy and 20% lower inventory holding costs.",
        metrics: ["25% Improvement in Forecast Accuracy", "20% Lower Inventory Holding Costs"]
      }
    ],
    outcomes: ["25% Better Forecast Precision", "20% Lower Holding Overhead", "Improved On-Shelf Availability"]
  },
  {
    slug: "equine-services",
    title: "Equine Services",
    summary: "Advancing animal health, performance analytics, and operational excellence in equine care.",
    iconName: "Activity",
    challenges: [
      "Manual tracking of equine health, training metrics, and recovery regimens.",
      "Lack of centralized data integration for veterinary and stable management.",
      "High costs associated with unpredicted injuries and athletic downtime."
    ],
    opportunities: [
      "Equine Performance Tracking: Biometric wearable data analytics.",
      "Veterinary EHR & AI Assistant: Automated medical records and care alerts.",
      "Operational Scheduling: Smart facility and breeding management."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Biometric Data Platform", duration: "1 Month", description: "Integrate sensor and health metrics into unified dashboard." }
    ],
    solutions: ["enterprise-knowledge-assistant", "document-intelligence"],
    caseStudies: [
      {
        title: "Data-Driven Performance Analytics Platform",
        challenge: "Managing health and training telemetry across high-value horses was fragmented.",
        solution: "Developed an equine performance analytics platform tracking health, training, and recovery.",
        outcome: "50% improvement in tracking accuracy and enhanced athletic outcomes.",
        metrics: ["50% Improvement in Tracking Accuracy", "Better Performance Outcomes"]
      }
    ],
    outcomes: ["Enhanced Equine Health Tracking", "Proactive Injury Prevention", "Operational Excellence"]
  },
  {
    slug: "fintech",
    title: "FinTech",
    summary: "Strengthening risk, compliance, fraud detection, and customer experience with intelligent systems.",
    iconName: "Building2",
    challenges: [
      "Rapidly changing regulatory compliance requirements and reporting.",
      "Real-time fraud detection in high-volume transaction environments.",
      "Customer churn in competitive digital banking products."
    ],
    opportunities: [
      "AI Fraud Detection: Graph analytics and anomaly detection models.",
      "Automated Regulatory Compliance: GenAI policy and audit engines.",
      "Personalized Financial Advisory: Intelligent customer engagement."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Compliance Architecture", duration: "1-2 Months", description: "Deploy automated risk scoring and monitoring." }
    ],
    solutions: ["governance-risk-compliance", "ai-implementation"],
    caseStudies: [],
    outcomes: ["Real-time Fraud Prevention", "Automated Audit Readiness", "Higher Customer Retention"]
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    summary: "Elevating guest experiences, optimizing revenue, and improving operational efficiency.",
    iconName: "BedDouble",
    challenges: [
      "Fluctuating seasonal occupancy and static pricing strategies.",
      "High staff turnover and operational inefficiency in guest management.",
      "Fragmented guest feedback across multiple booking platforms."
    ],
    opportunities: [
      "Dynamic Revenue Management: Algorithmic pricing tailored to demand.",
      "AI Concierge & Guest Services: 24/7 multilingual guest assistants.",
      "Energy & Facility Optimization: IoT smart building management."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Guest Intelligence Setup", duration: "1 Month", description: "Integrate PMS data and AI dynamic pricing." }
    ],
    solutions: ["customer-support-ai", "demand-forecasting"],
    caseStudies: [],
    outcomes: ["Increased RevPAR", "Seamless Guest Experience", "Reduced Energy Overhead"]
  },
  {
    slug: "spacetech",
    title: "SpaceTech",
    summary: "Enabling mission success through advanced analytics, simulation, and intelligent systems.",
    iconName: "Rocket",
    challenges: [
      "Complex telemetry analysis across satellite constellations.",
      "Mission-critical risk simulation with strict zero-fault tolerances.",
      "High volume Earth observation image processing requirements."
    ],
    opportunities: [
      "Orbital Telemetry Analytics: Anomaly detection in satellite telemetry.",
      "Geospatial AI Processing: Computer vision on satellite imagery.",
      "Automated Ground Station Scheduling: Algorithmic pass allocation."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Telemetry Analytics", duration: "2 Months", description: "Build real-time satellite stream anomaly detectors." }
    ],
    solutions: ["ai-implementation", "data-digital-engineering"],
    caseStudies: [],
    outcomes: ["Mission Risk Reduction", "Automated Image Analytics", "Optimized Ground Resources"]
  },
  {
    slug: "aviation",
    title: "Aviation",
    summary: "Improving safety, maintenance, operations, and decision-making across the aviation ecosystem.",
    iconName: "Plane",
    challenges: [
      "Aircraft ground turnaround delays and dispatch reliability.",
      "Predictive engine maintenance scheduling to prevent cancellations.",
      "Complex crew scheduling and flight ops optimization."
    ],
    opportunities: [
      "Predictive Fleet Maintenance: Engine sensor health monitoring.",
      "Turnaround Optimization: Computer vision for apron operations.",
      "Flight Plan & Fuel Optimization: AI route and fuel consumption tuning."
    ],
    roadmap: [
      { phase: "Phase 1", title: "Fleet Telemetry Ingestion", duration: "1-2 Months", description: "Integrate engine and flight data recorders." }
    ],
    solutions: ["supply-chain-intelligence", "ai-implementation"],
    caseStudies: [],
    outcomes: ["Higher On-Time Performance", "Lower Fuel Consumption", "Reduced Maintenance Costs"]
  },
  {
    slug: "and-many-more",
    title: "And Many More",
    summary: "",
    iconName: "Sparkles",
    challenges: [],
    opportunities: [],
    roadmap: [],
    solutions: [],
    caseStudies: [],
    outcomes: []
  }
];
