export interface SolutionCaseStudy {
  challenge: string;
  solution: string;
  outcome: string;
}

export interface Solution {
  slug: string;
  title: string;
  iconName: string;
  summary: string;
  challenges: string[];
  approach: string;
  services: string[];
  deliverables: string[];
  outcomes: string[];
  caseStudy: SolutionCaseStudy;
}

export const solutions: Solution[] = [
  {
    slug: "demand-forecasting",
    title: "Enterprise Demand Forecasting",
    iconName: "TrendingUp",
    summary: "Leverage advanced machine learning algorithms and real-time market signals to predict consumer demand with unprecedented precision.",
    challenges: ["High inventory carrying costs", "Stockouts of critical items"],
    approach: "We design and deploy custom predictive pipelines.",
    services: ["Data Audit", "Custom Forecasting Engine", "S&OP Process Integration"],
    deliverables: ["SKU-level Predictive Forecasting Engine", "Executive Dashboard"],
    outcomes: ["22-30% Reduction in Excess Inventory", "15% Improvement in Availability"],
    caseStudy: {
      challenge: "A leading regional FMCG distributor struggled with forecast error rates.",
      solution: "Implemented a multi-variable forecasting engine.",
      outcome: "Reduced forecast error to 12%, saving $4.2M annually."
    }
  },
  {
    slug: "supply-chain-tower",
    title: "Supply Chain Control Tower",
    iconName: "Compass",
    summary: "Establish complete end-to-end visibility across global logistics, warehousing, and procurement operations.",
    challenges: ["Fragmented visibility across 3PL providers", "Delayed reaction to disruptions"],
    approach: "We map the physical supply network into a digital orchestration layer.",
    services: ["Multi-system Integration", "Automated Alerting Architecture"],
    deliverables: ["Real-time Monitoring Dashboard", "Prescriptive Action Advisory Portal"],
    outcomes: ["Real-time visibility over 95% of transit legs", "40% faster response time"],
    caseStudy: {
      challenge: "Unpredicted supply shipment delays.",
      solution: "Deployed a centralized Supply Chain Control Tower.",
      outcome: "Eliminated production delays entirely over 12 months."
    }
  }
];

export interface ConsultingService {
  number: number;
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilitiesLeft: string[];
  capabilitiesRight: string[];
}

export interface EngagementStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductAccelerator {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const consultingServices: ConsultingService[] = [
  {
    number: 1,
    id: "ai-strategy-transformation",
    title: "AI Strategy & Transformation",
    description: "Identify where AI creates measurable business value.",
    iconName: "Lightbulb",
    capabilitiesLeft: ["AI Opportunity Assessment", "Enterprise AI Strategy", "AI Transformation Roadmap"],
    capabilitiesRight: ["AI Business Case", "ROI Assessment", "AI Adoption Strategy"]
  },
  {
    number: 2,
    id: "data-digital-engineering",
    title: "Data & Digital Engineering",
    description: "Build the technology foundation for intelligent enterprises.",
    iconName: "Database",
    capabilitiesLeft: ["Enterprise Data Strategy", "Data Engineering", "Lakehouse Architecture"],
    capabilitiesRight: ["Digital Platforms", "Cloud Modernization", "Enterprise Integration"]
  },
  {
    number: 3,
    id: "ai-implementation",
    title: "AI Implementation",
    description: "Turn strategy into production-ready solutions.",
    iconName: "Code",
    capabilitiesLeft: ["AI Product Development", "Enterprise AI Integration", "AI Agents"],
    capabilitiesRight: ["Intelligent Automation", "Decision Intelligence", "GenAI Solutions"]
  },
  {
    number: 4,
    id: "strategy-management-consulting",
    title: "Strategy & Management Consulting",
    description: "Helping leadership teams make better strategic decisions.",
    iconName: "Compass",
    capabilitiesLeft: ["Business Strategy", "Growth Strategy", "Corporate Strategy", "Market Entry Strategy", "Business Model Innovation"],
    capabilitiesRight: ["Digital Strategy", "Organizational Transformation", "Operating Model Design", "Performance Improvement", "Executive Advisory"]
  },
  {
    number: 5,
    id: "business-transformation",
    title: "Business Transformation",
    description: "Redesign operations for efficiency, scalability and growth.",
    iconName: "Settings",
    capabilitiesLeft: ["Process Re-engineering", "Operational Excellence", "Cost Optimization"],
    capabilitiesRight: ["Supply Chain Optimization", "Customer Experience Transformation", "Change Management"]
  },
  {
    number: 6,
    id: "governance-risk-compliance",
    title: "Governance, Risk & Compliance",
    description: "Build trusted and responsible AI.",
    iconName: "ShieldCheck",
    capabilitiesLeft: ["AI Governance", "Responsible AI", "AI Risk Management"],
    capabilitiesRight: ["Data Governance", "AI Security", "Regulatory Readiness"]
  }
];

export const engagementSteps: EngagementStep[] = [
  {
    stepNumber: 1,
    title: "Discover",
    description: "Understand your business, strategy, operations, customers, and challenges.",
    iconName: "Search"
  },
  {
    stepNumber: 2,
    title: "Diagnose",
    description: "Identify root causes, bottlenecks, hidden risks, and growth opportunities.",
    iconName: "Target"
  },
  {
    stepNumber: 3,
    title: "Strategize",
    description: "Develop a practical roadmap with clear priorities, investment plans, and measurable outcomes.",
    iconName: "Map"
  },
  {
    stepNumber: 4,
    title: "Transform",
    description: "Implement business, digital, and AI solutions that drive change.",
    iconName: "Rocket"
  },
  {
    stepNumber: 5,
    title: "Scale",
    description: "Measure impact, optimize execution, and continuously improve.",
    iconName: "TrendingUp"
  }
];

export const productsList: ProductAccelerator[] = [
  {
    id: "executive-strategy-assessment",
    title: "Executive Strategy Assessment",
    description: "Assess business performance, strategic priorities, and AI readiness.",
    iconName: "ClipboardCheck"
  },
  {
    id: "ai-opportunity-discovery",
    title: "AI Opportunity Discovery",
    description: "Identify and prioritize AI use cases for maximum business value.",
    iconName: "Target"
  },
  {
    id: "enterprise-ai-roadmap",
    title: "Enterprise AI Roadmap",
    description: "A practical roadmap aligning AI investments with business goals.",
    iconName: "Map"
  },
  {
    id: "ai-governance-framework",
    title: "AI Governance Framework",
    description: "Enterprise-ready policies and operating models for responsible AI.",
    iconName: "ShieldCheck"
  },
  {
    id: "industry-accelerators",
    title: "Industry Accelerators",
    description: "Pre-built frameworks and AI solutions for common industry challenges.",
    iconName: "Rocket"
  }
];

export const industryAcceleratorsExamples = [
  "Demand Forecasting",
  "Supply Chain Intelligence",
  "Customer Support AI",
  "Document Intelligence",
  "Enterprise Knowledge Assistant",
  "Healthcare AI Assistant"
];
