export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  categoryNumber: number;
  categoryTitle: string;
  description: string;
  iconName: string;
  questions: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    id: "working-with-us",
    categoryNumber: 1,
    categoryTitle: "Working With Us",
    description: "General questions about our services, scope, and strategic approach.",
    iconName: "Users",
    questions: [
      {
        question: "What does Shaw & Goswami AI do?",
        answer: "We help organisations prepare, implement and scale AI transformation by connecting business strategy, data engineering, AI development, governance and organisational change."
      },
      {
        question: "Which industries do you work with?",
        answer: "We are sector agnostic and tailor every engagement to the client's context. Our experience spans healthcare, oil & gas, FMCG, equine services, fintech, hospitality, spacetech, aviation, semiconductor, and more."
      },
      {
        question: "What size of organizations do you work with?",
        answer: "We partner with startups, growth-stage businesses, enterprises, and public sector organizations, adapting our approach to each organization's scale and objectives."
      },
      {
        question: "How do you decide if an engagement is the right fit?",
        answer: "We start with a discovery session to assess whether we can deliver tangible, measurable impact for your business goals. If we determine that a different approach or specialized vendor is better suited, we provide honest recommendations."
      },
      {
        question: "What makes Shaw & Goswami AI different?",
        answer: "We start with business strategy—not technology. With 40+ years of combined experience across AI, data engineering, product development, and management consulting, we bridge the gap between technical capability and P&L results."
      }
    ]
  },
  {
    id: "ai-and-technology",
    categoryNumber: 2,
    categoryTitle: "AI & Technology",
    description: "Questions about AI readiness, data architecture, and technology integration.",
    iconName: "Cpu",
    questions: [
      {
        question: "How do you determine whether AI is the right solution?",
        answer: "We begin with your business goals and operational challenges. AI is recommended only where it can create clear business value, operational efficiency, and measurable impact."
      },
      {
        question: "What types of AI solutions do you build?",
        answer: "We build tailored AI models, predictive demand forecasting engines, intelligent document processing pipelines, enterprise knowledge assistants, and automated workflow agents integrated with your core systems."
      },
      {
        question: "Will we need to replace our existing systems?",
        answer: "Not necessarily. We prioritize leveraging your existing technology investments and recommend new platforms or infrastructure only when they deliver meaningful business value and high ROI."
      },
      {
        question: "Do you work with our existing technology stack?",
        answer: "Yes. Our team is cloud and platform agnostic. We seamlessly integrate solutions with AWS, Azure, GCP, Snowflake, Databricks, and proprietary legacy enterprise architectures."
      },
      {
        question: "How do you ensure AI solutions are reliable and ethical?",
        answer: "We embed AI governance, rigorous model testing, human-in-the-loop oversight, and strict compliance controls into every project from day one."
      }
    ]
  },
  {
    id: "engagement-and-delivery",
    categoryNumber: 3,
    categoryTitle: "Engagement & Delivery",
    description: "Questions about timelines, processes, methodologies, and support.",
    iconName: "Calendar",
    questions: [
      {
        question: "Do you only advise on AI strategy, or do you also implement?",
        answer: "Our capabilities cover strategy and readiness through solution development, integration and adoption. We define the scope around your business needs and work with your teams to deliver and improve practical AI solutions."
      },
      {
        question: "How long does a typical engagement take?",
        answer: "The timeline depends on scope. Strategic assessments and diagnostic roadmaps take 2–4 weeks, while end-to-end transformation and AI implementation programs typically range from 2 to 6 months."
      },
      {
        question: "What does the engagement process look like?",
        answer: "Our transformation engine follows five connected stages: Discover (understanding and diagnosing your business), Prepare (strategy, roadmap and readiness), Build (developing and integrating AI into your workflows), Embed (adoption, process change and measuring outcomes), and Scale (expanding what works and continuously improving). The engine describes how our capabilities work together—the solutions and engagement are shaped around your organisation."
      },
      {
        question: "How do you measure success?",
        answer: "Every engagement is tied to agreed-upon business KPIs prior to execution—such as revenue growth, operational cost reduction, forecast accuracy, or customer satisfaction improvements."
      },
      {
        question: "What kind of support do you provide after implementation?",
        answer: "We offer post-deployment monitoring, team capability building, MLOps maintenance, and executive advisory to ensure long-term value realization and smooth technology adoption."
      }
    ]
  },
  {
    id: "security-and-confidentiality",
    categoryNumber: 4,
    categoryTitle: "Security & Confidentiality",
    description: "Questions regarding data privacy, security standards, and legal protections.",
    iconName: "Shield",
    questions: [
      {
        question: "Is our business data kept confidential?",
        answer: "Yes. Confidentiality is fundamental to our business model. Every engagement is strictly protected through comprehensive Non-Disclosure Agreements (NDAs) and enterprise data security protocols."
      },
      {
        question: "What security standards do you follow?",
        answer: "We adhere to industry-standard data encryption (at rest and in transit), zero-trust architecture principles, GDPR/HIPAA compliance frameworks, and strict role-based access control."
      },
      {
        question: "Do you sign NDAs before initial discussions?",
        answer: "Yes. We are happy to execute mutual NDAs prior to any detailed strategy or data discovery sessions."
      },
      {
        question: "Where is our data stored and processed?",
        answer: "Your data remains within your sovereign cloud infrastructure or dedicated private enterprise environment. We do not store or use client proprietary data for external model training."
      },
      {
        question: "Who will have access to our data during the engagement?",
        answer: "Access is strictly limited to authorized S&G team members directly assigned to your engagement, controlled via encrypted, single-sign-on enterprise accounts."
      }
    ]
  }
];

export const quickAnswerHighlights = [
  {
    question: "What does Shaw & Goswami AI do?",
    answer: "We help organisations prepare, implement and scale AI transformation by connecting business strategy, data engineering, AI development, governance and organisational change."
  },
  {
    question: "How do you decide if AI is the right solution?",
    answer: "We start by understanding your business goals, operations, and challenges. If AI can create measurable value, we'll recommend it. If not, we'll recommend a better approach."
  },
  {
    question: "How long does a typical engagement last?",
    answer: "It depends on the scope. Strategy assessments may take a few weeks, while larger transformation and AI implementation programs can span several months."
  },
  {
    question: "Is our business data kept confidential?",
    answer: "Absolutely. Client confidentiality is fundamental to how we work. We follow strict confidentiality practices, and all engagements are governed by NDAs."
  }
];
