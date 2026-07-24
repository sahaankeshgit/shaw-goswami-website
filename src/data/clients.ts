export interface ClientOrg {
  id: string;
  name: string;
  location: string;
  country: string;
  industry: string;
  logoText: string;
  tagline?: string;
  description: string;
  mapPin: {
    topPercent: number;  // % from top on map container
    leftPercent: number; // % from left on map container
  };
}

export const clientsData: ClientOrg[] = [
  {
    id: "nano-international",
    name: "Nano International LLC",
    location: "Ulaanbaatar",
    country: "Mongolia",
    industry: "FMCG Distribution",
    logoText: "NANO",
    tagline: "All About Quality",
    description: "Leading consumer goods and FMCG distribution enterprise across East Asia.",
    mapPin: {
      topPercent: 29,
      leftPercent: 77.5
    }
  },
  {
    id: "petronet-mhb",
    name: "Petronet MHB Limited",
    location: "Bangalore",
    country: "India",
    industry: "Oil & Gas",
    logoText: "PETRONET",
    description: "Major energy distribution pipeline & infrastructure company optimizing predictive maintenance.",
    mapPin: {
      topPercent: 44,
      leftPercent: 71.5
    }
  },
  {
    id: "ezintsha-research",
    name: "Ezintsha Research",
    location: "Cape Town",
    country: "South Africa",
    industry: "Healthcare Research",
    logoText: "EZINTSHA",
    description: "Premier academic medical research organization advancing public healthcare & trial analytics.",
    mapPin: {
      topPercent: 75,
      leftPercent: 54.5
    }
  },
  {
    id: "moriton-equine",
    name: "Moriton Equine Clinic",
    location: "Ulaanbaatar",
    country: "Mongolia",
    industry: "Equine Services",
    logoText: "MORITON",
    description: "Specialized equine health & performance facility leveraging data analytics.",
    mapPin: {
      topPercent: 31,
      leftPercent: 78.5
    }
  },
  {
    id: "zebra-international",
    name: "Zebra International",
    location: "Ulaanbaatar",
    country: "Mongolia",
    industry: "Diversified Business",
    logoText: "ZEBRA",
    description: "Multi-sector commercial enterprise modernizing operations and supply chain management.",
    mapPin: {
      topPercent: 27,
      leftPercent: 76.5
    }
  }
];

export const clientStats = [
  { value: "5+", label: "Organizations", subtext: "Enterprise clients worldwide" },
  { value: "4", label: "Countries", subtext: "Global reach & local execution" },
  { value: "8+", label: "Industries", subtext: "Cross-sector expertise" },
  { value: "20+", label: "Strategic Engagements", subtext: "Measurable business outcomes" }
];

export const whyChooseUs = [
  {
    title: "Business First Approach",
    description: "We understand your business, challenges, and goals before recommending solutions."
  },
  {
    title: "Deep Expertise",
    description: "Combining strategy, AI, data, and engineering to deliver practical and innovative solutions."
  },
  {
    title: "End-to-End Partnership",
    description: "From strategy to implementation and optimization, we stay with you at every step."
  },
  {
    title: "Measurable Impact",
    description: "We focus on outcomes that matter — driving growth, efficiency, and long-term value."
  }
];
