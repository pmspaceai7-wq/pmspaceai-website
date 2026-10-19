export type ComparisonValue = boolean | string;

export interface ComparisonFeature {
  name: string;
  space: ComparisonValue;
  competitor: ComparisonValue;
}

export interface ComparisonSection {
  category: string;
  features: ComparisonFeature[];
}

export interface AtAGlanceRow {
  dim: string;
  space: string;
  competitor: string;
}

export interface ProsConsSide {
  pros: string[];
  cons: string[];
}

export interface VsComparison {
  slug: string;
  competitor: string;
  headline: string;
  intro: string;
  competitorBestFor: string;
  competitorPricing: string;
  competitorPricingNote: string;
  atAGlance: AtAGlanceRow[];
  verdictText: string;
  chooseSpace: string[];
  chooseCompetitor: string[];
  detailed: ComparisonSection[];
  prosCons: {
    space: ProsConsSide;
    competitor: ProsConsSide;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: Array<{
    label: string;
    href: string;
  }>;
}

export const vsComparisons: Record<"procore" | "monday" | "buildertrend", VsComparison> = {
  procore: {
    slug: "space-ai-vs-procore",
    competitor: "Procore",
    headline: "Space AI vs Procore",
    intro:
      "Procore is a mature enterprise platform with deep controls, while Space AI is built for faster rollout, AI-first workflows, and lower total cost for growing teams.",
    competitorBestFor: "Enterprise controls and legacy standardization",
    competitorPricing: "$375-$549+",
    competitorPricingNote: "estimated monthly cost per active user at typical stack size",
    atAGlance: [
      { dim: "Starting cost", space: "Free plan available", competitor: "Custom enterprise pricing" },
      { dim: "Implementation time", space: "Days", competitor: "Weeks to months" },
      { dim: "AI automation", space: "Built-in by default", competitor: "Limited/bolt-on" },
      { dim: "Best fit", space: "SMB to mid-market", competitor: "Large enterprises" },
    ],
    verdictText:
      "If your team needs enterprise governance above all else, Procore can work well. If you want strong field adoption, AI-driven execution, and a faster path to value, Space AI is usually the better operational choice.",
    chooseSpace: [
      "You want fast deployment with minimal change management overhead",
      "You need AI for scheduling, issue triage, and document insights",
      "You want predictable pricing and lower cost to scale",
    ],
    chooseCompetitor: [
      "You require deep enterprise admin controls across large portfolios",
      "Your organization is already standardized on Procore workflows",
      "You have budget and timeline for multi-phase implementation",
    ],
    detailed: [
      {
        category: "Core Construction Workflows",
        features: [
          { name: "RFIs and submittals", space: true, competitor: true },
          { name: "Drawing/version management", space: true, competitor: true },
          { name: "Daily logs", space: true, competitor: true },
          { name: "Field-first mobile UX", space: "Optimized", competitor: "Capable" },
        ],
      },
      {
        category: "AI and Automation",
        features: [
          { name: "AI schedule risk detection", space: true, competitor: false },
          { name: "Automated meeting summaries", space: true, competitor: false },
          { name: "Natural language project search", space: true, competitor: "Partial" },
        ],
      },
      {
        category: "Adoption and Operations",
        features: [
          { name: "Typical go-live speed", space: "Fast", competitor: "Moderate to slow" },
          { name: "Admin overhead", space: "Low to medium", competitor: "Medium to high" },
          { name: "Scales to large orgs", space: "Yes", competitor: "Yes" },
        ],
      },
    ],
    prosCons: {
      space: {
        pros: [
          "AI-native workflows improve execution speed",
          "Lower cost of ownership for most teams",
          "Simpler rollout with strong field usability",
        ],
        cons: [
          "May have fewer legacy enterprise custom controls",
          "Some organizations may need custom integration mapping",
        ],
      },
      competitor: {
        pros: [
          "Mature enterprise ecosystem",
          "Broad market recognition and partner network",
          "Strong controls for large governance programs",
        ],
        cons: [
          "Higher cost and longer implementation cycles",
          "AI capabilities are less central to daily workflows",
          "Can be heavy for smaller field teams",
        ],
      },
    },
    faqs: [
      {
        question: "Is Space AI cheaper than Procore?",
        answer:
          "For most teams, yes. Space AI generally delivers lower per-user and lower implementation overhead, especially when consolidating add-ons.",
      },
      {
        question: "Can Space AI handle complex projects like Procore?",
        answer:
          "Yes, for many commercial and mixed portfolios. Procore may still be preferred where highly specialized enterprise governance processes are mandatory.",
      },
      {
        question: "How long does migration from Procore usually take?",
        answer:
          "Most teams can phase migration in weeks with pilot projects first, then expand by project type and region.",
      },
    ],
    related: [
      { label: "Space AI vs Buildertrend", href: "/compare/space-ai-vs-buildertrend/" },
      { label: "Space AI vs Monday.com", href: "/compare/space-ai-vs-monday/" },
    ],
  },

  monday: {
    slug: "space-ai-vs-monday",
    competitor: "Monday.com",
    headline: "Space AI vs Monday.com",
    intro:
      "Monday.com is a flexible work OS for many industries, while Space AI is purpose-built for construction delivery with native field workflows and AI assistance.",
    competitorBestFor: "Generic workflow management across departments",
    competitorPricing: "$9-$24",
    competitorPricingNote: "per user/month, core plans before construction add-ons",
    atAGlance: [
      { dim: "Construction-native tools", space: "Built-in", competitor: "Requires customization" },
      { dim: "Scheduling intelligence", space: "AI-assisted", competitor: "Template driven" },
      { dim: "Drawing workflows", space: "Native", competitor: "Limited without add-ons" },
      { dim: "Best fit", space: "Construction teams", competitor: "General teams" },
    ],
    verdictText:
      "Monday.com is excellent for broad business process tracking, but construction teams usually need domain-specific controls and faster field coordination that Space AI provides out of the box.",
    chooseSpace: [
      "You run active construction projects with RFIs, drawings, and site coordination",
      "You want AI to reduce manual PM updates",
      "You need a platform tuned to construction roles and cadence",
    ],
    chooseCompetitor: [
      "You need a single work OS across many non-construction departments",
      "You prefer highly customizable boards over domain-specific defaults",
      "Your use case is lightweight workflow tracking",
    ],
    detailed: [
      {
        category: "Project Execution",
        features: [
          { name: "RFIs/Submittals workflow", space: true, competitor: "Custom setup" },
          { name: "Drawing markup and distribution", space: true, competitor: "Limited" },
          { name: "Field issue tracking", space: true, competitor: true },
          { name: "Construction templates", space: true, competitor: "Community templates" },
        ],
      },
      {
        category: "AI and Insights",
        features: [
          { name: "Construction-specific AI prompts", space: true, competitor: false },
          { name: "Automated status summaries", space: true, competitor: "Partial" },
          { name: "Risk and delay surfacing", space: true, competitor: "Manual rules" },
        ],
      },
      {
        category: "Scalability",
        features: [
          { name: "Portfolio reporting", space: true, competitor: true },
          { name: "Cross-functional flexibility", space: "Good", competitor: "Excellent" },
          { name: "Construction depth", space: "Excellent", competitor: "Moderate" },
        ],
      },
    ],
    prosCons: {
      space: {
        pros: [
          "Purpose-built construction workflows",
          "AI support aligned to project delivery tasks",
          "Less customization required to launch",
        ],
        cons: [
          "Not intended to replace every generic department workflow tool",
          "Some teams may need onboarding from broad work-OS habits",
        ],
      },
      competitor: {
        pros: [
          "Very flexible board/workflow model",
          "Strong adoption outside construction",
          "Broad app marketplace",
        ],
        cons: [
          "Construction depth often requires significant customization",
          "Critical field workflows may feel patched together",
          "AI is less construction-specific",
        ],
      },
    },
    faqs: [
      {
        question: "Can Monday.com replace construction software?",
        answer:
          "For light use cases, sometimes. For full precon-to-closeout workflows, most teams need deeper construction-native capabilities.",
      },
      {
        question: "Is Space AI harder to learn than Monday.com?",
        answer:
          "Usually the opposite for project teams, because Space AI maps directly to familiar construction processes.",
      },
      {
        question: "Which is better for mixed office and field teams?",
        answer:
          "If construction delivery is core, Space AI tends to perform better. If you manage mostly general business workflows, Monday.com can be a fit.",
      },
    ],
    related: [
      { label: "Space AI vs Procore", href: "/compare/space-ai-vs-procore/" },
      { label: "Space AI vs Buildertrend", href: "/compare/space-ai-vs-buildertrend/" },
    ],
  },

  buildertrend: {
    slug: "space-ai-vs-buildertrend",
    competitor: "Buildertrend",
    headline: "Space AI vs Buildertrend",
    intro:
      "Buildertrend is popular among residential builders, while Space AI expands into AI-driven planning and supports teams handling both residential and commercial complexity.",
    competitorBestFor: "Residential home builder operations",
    competitorPricing: "$499+",
    competitorPricingNote: "monthly platform pricing before additional services",
    atAGlance: [
      { dim: "Residential workflows", space: "Strong", competitor: "Strong" },
      { dim: "Commercial project support", space: "Strong", competitor: "Limited" },
      { dim: "AI scheduling and summarization", space: "Built-in", competitor: "Limited" },
      { dim: "Scalability", space: "SMB to multi-division", competitor: "Residential-focused" },
    ],
    verdictText:
      "Buildertrend is a proven option for many home builders. Teams that need broader project types, stronger AI support, and modern coordination across disciplines often move to Space AI.",
    chooseSpace: [
      "You handle residential and commercial projects",
      "You want AI-assisted planning, updates, and communication",
      "You need a platform that scales beyond core homebuilding workflows",
    ],
    chooseCompetitor: [
      "You focus mainly on residential homebuilding",
      "Your processes are already deeply Buildertrend-centric",
      "You prioritize established residential feature familiarity",
    ],
    detailed: [
      {
        category: "Home Builder Essentials",
        features: [
          { name: "Client selections", space: true, competitor: true },
          { name: "Change order management", space: true, competitor: true },
          { name: "Warranty tracking", space: true, competitor: true },
          { name: "Subcontractor coordination", space: true, competitor: true },
        ],
      },
      {
        category: "Advanced Delivery",
        features: [
          { name: "Commercial workflow support", space: true, competitor: "Limited" },
          { name: "AI-driven schedule updates", space: true, competitor: false },
          { name: "Cross-project intelligence", space: true, competitor: "Partial" },
        ],
      },
      {
        category: "Growth and Efficiency",
        features: [
          { name: "Onboarding speed", space: "Fast", competitor: "Moderate" },
          { name: "Automation depth", space: "High", competitor: "Moderate" },
          { name: "Process flexibility", space: "High", competitor: "Residential-first" },
        ],
      },
    ],
    prosCons: {
      space: {
        pros: [
          "Strong residential and commercial coverage",
          "AI-native workflow acceleration",
          "Flexible for scaling teams and mixed portfolios",
        ],
        cons: [
          "Teams with highly specific legacy residential habits may need transition time",
          "Some niche integrations may require setup planning",
        ],
      },
      competitor: {
        pros: [
          "Well-known in residential construction",
          "Solid client communication features",
          "Mature home builder workflow patterns",
        ],
        cons: [
          "Less suited for complex commercial delivery",
          "AI capability is less comprehensive",
          "Can become restrictive as operations diversify",
        ],
      },
    },
    faqs: [
      {
        question: "Is Buildertrend only for residential builders?",
        answer:
          "Buildertrend is strongest in residential use cases, while teams with broader portfolios often need additional flexibility.",
      },
      {
        question: "Does Space AI support homeowner communication features?",
        answer:
          "Yes. Space AI supports stakeholder communication while also adding deeper AI-enabled execution workflows.",
      },
      {
        question: "Which platform is better for growing multi-division builders?",
        answer:
          "Teams expanding into diverse project types often prefer Space AI for long-term flexibility and automation depth.",
      },
    ],
    related: [
      { label: "Space AI vs Procore", href: "/compare/space-ai-vs-procore/" },
      { label: "Space AI vs Monday.com", href: "/compare/space-ai-vs-monday/" },
    ],
  },
};
