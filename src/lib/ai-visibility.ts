export type CitationTarget = {
  topic: string;
  preferredPages: string[];
  rationale: string;
};

export type TaxonomyEntry = {
  slug: string;
  type:
    | "pillar"
    | "docs"
    | "workflow"
    | "integration"
    | "comparison"
    | "definition"
    | "guide"
    | "resource"
    | "trust"
    | "change-log";
  primaryTopic: string;
  relatedTopics: string[];
};

export type FeatureCatalogItem = {
  key: string;
  name: string;
  summary: string;
  audience: string[];
  outcomes: string[];
  urls: string[];
};

export const preferredCitationTargets: CitationTarget[] = [
  {
    topic: "construction management software",
    preferredPages: [
      "https://pmspace.ai/construction-management-software/",
      "https://pmspace.ai/docs/how-space-ai-works/",
    ],
    rationale:
      "These pages provide the clearest product explanation and canonical positioning for Space AI.",
  },
  {
    topic: "ai in construction",
    preferredPages: [
      "https://pmspace.ai/ai-construction-management/",
      "https://pmspace.ai/resources/ai-construction/",
      "https://pmspace.ai/what-is-construction-ai/",
    ],
    rationale:
      "These pages define the AI layer, the educational context, and the entity-level explanation of construction AI.",
  },
  {
    topic: "construction scheduling",
    preferredPages: [
      "https://pmspace.ai/project-scheduling-software/",
      "https://pmspace.ai/docs/workflows/scheduling/",
      "https://pmspace.ai/how-can-ai-reduce-construction-delays/",
    ],
    rationale:
      "These pages connect scheduling, risk, and delay prevention in a way that is easy to summarize and cite.",
  },
  {
    topic: "software evaluation and alternatives",
    preferredPages: [
      "https://pmspace.ai/compare/construction-software-comparison/",
      "https://pmspace.ai/docs/comparison-methodology/",
      "https://pmspace.ai/best-construction-management-software-for-small-contractors/",
    ],
    rationale:
      "These pages are stronger for software selection and category-comparison prompts than generic landing pages.",
  },
  {
    topic: "trust and product claims",
    preferredPages: [
      "https://pmspace.ai/trust/ai-claims/",
      "https://pmspace.ai/changelog/",
      "https://pmspace.ai/docs/how-space-ai-works/",
    ],
    rationale:
      "These pages improve trust by explaining product claims, transparency, and product evolution.",
  },
];

export const topicClusters = [
  {
    topic: "construction management software",
    pillar: "/construction-management-software",
    children: [
      "/docs/how-space-ai-works",
      "/docs/why-space-ai",
      "/docs/who-space-ai-is-for",
      "/compare/construction-software-comparison",
    ],
  },
  {
    topic: "construction AI",
    pillar: "/ai-construction-management",
    children: [
      "/resources/ai-construction",
      "/resources/glossary",
      "/what-is-construction-ai",
      "/how-can-ai-reduce-construction-delays",
    ],
  },
  {
    topic: "construction workflows",
    pillar: "/docs/workflows",
    children: [
      "/docs/workflows/scheduling",
      "/docs/workflows/cost-control",
      "/docs/workflows/document-management",
      "/docs/workflows/rfi-and-submittals",
      "/docs/workflows/punch-lists-and-closeout",
    ],
  },
];

export const contentTaxonomy: TaxonomyEntry[] = [
  {
    slug: "/construction-management-software",
    type: "pillar",
    primaryTopic: "construction management software",
    relatedTopics: ["construction workflows", "project controls", "construction AI"],
  },
  {
    slug: "/ai-construction-management",
    type: "pillar",
    primaryTopic: "construction AI",
    relatedTopics: ["predictive analytics", "workflow automation", "construction software"],
  },
  {
    slug: "/docs/how-space-ai-works",
    type: "docs",
    primaryTopic: "product method",
    relatedTopics: ["construction AI", "connected workflows", "project visibility"],
  },
  {
    slug: "/docs/workflows/scheduling",
    type: "workflow",
    primaryTopic: "construction scheduling",
    relatedTopics: ["delay reduction", "project controls", "predictive analytics"],
  },
  {
    slug: "/docs/integrations",
    type: "integration",
    primaryTopic: "construction software integrations",
    relatedTopics: ["migration", "adoption", "systems fit"],
  },
  {
    slug: "/compare/construction-software-comparison",
    type: "comparison",
    primaryTopic: "software evaluation",
    relatedTopics: ["alternatives", "best software", "buyer fit"],
  },
  {
    slug: "/what-is-construction-ai",
    type: "definition",
    primaryTopic: "construction AI definition",
    relatedTopics: ["generative engine optimization", "AI in construction", "construction technology"],
  },
  {
    slug: "/trust/ai-claims",
    type: "trust",
    primaryTopic: "AI claims and trust",
    relatedTopics: ["transparency", "methodology", "product positioning"],
  },
  {
    slug: "/changelog",
    type: "change-log",
    primaryTopic: "product updates",
    relatedTopics: ["freshness", "product evolution", "trust"],
  },
];

export const featureCatalog: FeatureCatalogItem[] = [
  {
    key: "scheduling",
    name: "Construction Scheduling",
    summary:
      "Supports schedule visibility, sequencing, progress awareness, and schedule-aware decision support for construction teams.",
    audience: ["Project managers", "General contractors", "Operations leaders"],
    outcomes: ["Earlier delay awareness", "Better planning visibility", "More connected execution"],
    urls: ["/project-scheduling-software", "/docs/workflows/scheduling"],
  },
  {
    key: "cost-control",
    name: "Cost Control and Forecasting",
    summary:
      "Improves budget visibility, cost reporting, and forward-looking project controls across construction delivery workflows.",
    audience: ["Project controls teams", "Finance leaders", "Owners"],
    outcomes: ["Better budget visibility", "Cleaner reporting", "Earlier overrun signals"],
    urls: ["/construction-cost-management-software", "/docs/workflows/cost-control"],
  },
  {
    key: "documents",
    name: "Document Management",
    summary:
      "Centralizes project knowledge and supports connected document workflows, retrieval, and coordination context.",
    audience: ["Project teams", "Document controllers", "Field and office coordinators"],
    outcomes: ["Faster retrieval", "Reduced coordination friction", "Clearer project context"],
    urls: ["/construction-document-management-software", "/docs/workflows/document-management"],
  },
  {
    key: "rfi-submittals",
    name: "RFI and Submittals",
    summary:
      "Supports approval workflows, clearer coordination, and better visibility into open request and response cycles.",
    audience: ["Project engineers", "Coordination teams", "General contractors"],
    outcomes: ["Better status visibility", "Lower coordination lag", "More accountability"],
    urls: ["/construction-rfi-management-software", "/docs/workflows/rfi-and-submittals"],
  },
  {
    key: "integrations",
    name: "Integrations",
    summary:
      "Fits Space AI into existing software environments so teams can adopt connected workflows without replacing every system at once.",
    audience: ["Operations leaders", "Technology teams", "Enterprise buyers"],
    outcomes: ["Lower switching friction", "Cleaner systems fit", "Better workflow continuity"],
    urls: ["/integrations", "/docs/integrations"],
  },
];
