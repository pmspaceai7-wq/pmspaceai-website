// src/lib/pluralAlternatives.ts
// TASK 13-16: Data for plural-alternatives pages (Format 2).
// Each entry lists the primary competitor being "searched for alternatives to"
// plus the real alternative options to compare (Space AI first).

export interface PluralAltOption {
  name: string;
  tagline: string;
  bestFor: string;
  pricing: string;
  pros: string[];
  cons: string[];
  href: string;
  isPmspace?: boolean;
}

export interface PluralAltConfig {
  slug: string;
  competitor: string;
  heading: string;
  subheading: string;
  intro: string;
  painPoints: string[];
  criteria: { title: string; description: string }[];
  options: PluralAltOption[];
  byUseCase: { need: string; choice: string; reason: string }[];
  faqs: { question: string; answer: string }[];
}

export const pluralAlternativesConfig: Record<string, PluralAltConfig> = {
  procore: {
    slug: "procore",
    competitor: "Procore",
    heading: "Best Procore Alternatives 2026",
    subheading: "Compare 6 real alternatives to Procore",
    intro:
      "Procore is the industry-standard enterprise construction platform, but its high cost, complex implementation, and lack of AI features push many teams to look elsewhere. Here are the best Procore alternatives in 2026, with an honest breakdown of who each is best for.",
    painPoints: [
      "Per-user pricing that balloons to $500–$1,000+/user for enterprise tiers",
      "Six-figure implementation costs and months-long onboarding",
      "No native AI or predictive analytics",
      "Overkill features for mid-size and residential teams",
      "Annual contracts with little flexibility",
    ],
    criteria: [
      {
        title: "AI & Automation",
        description: "Does it predict delays and automate document work, or just record data?",
      },
      {
        title: "Total Cost of Ownership",
        description: "Factor in per-user price, implementation fees, and add-on modules.",
      },
      {
        title: "Implementation Time",
        description: "Weeks to value matters more than feature lists.",
      },
      {
        title: "Industry Coverage",
        description: "Commercial, residential, or both — does it match your project mix?",
      },
    ],
    options: [
      {
        name: "Space AI",
        tagline: "AI-powered construction management",
        bestFor: "AI-forward teams of all sizes",
        pricing: "Free – $99/user/mo",
        pros: [
          "Predictive delay analysis (3–4 weeks ahead)",
          "Free tier with unlimited projects",
          "Fast implementation in days",
        ],
        cons: ["Newer to market", "Smaller integration ecosystem"],
        href: "/alternatives/procore-alternative/",
        isPmspace: true,
      },
      {
        name: "Buildertrend",
        tagline: "Residential builder & remodeler software",
        bestFor: "Home builders and remodelers",
        pricing: "$499–$999/mo flat",
        pros: ["Excellent client portal", "Selection management", "Flat pricing"],
        cons: ["Residential only", "No AI", "Dated interface"],
        href: "/alternatives/buildertrend-alternative/",
      },
      {
        name: "Autodesk Construction Cloud",
        tagline: "BIM-first construction platform",
        bestFor: "Design-build firms on Revit/AutoCAD",
        pricing: "$80–$500+/user/mo",
        pros: ["Deep BIM integration", "Comprehensive document management"],
        cons: ["Complex and costly", "Vendor lock-in", "Slow implementation"],
        href: "/alternatives/autodesk-construction-cloud-alternative/",
      },
      {
        name: "PlanGrid",
        tagline: "Field document management",
        bestFor: "Field teams managing large drawing sets",
        pricing: "$55–$100/user/mo",
        pros: ["Best-in-class drawing management", "Offline field access"],
        cons: ["Being folded into Autodesk", "No financials or scheduling"],
        href: "/alternatives/plangrid-alternative/",
      },
      {
        name: "Fieldwire",
        tagline: "Field task management",
        bestFor: "Superintendents and field teams",
        pricing: "Free – $54/user/mo",
        pros: ["Free tier", "Fast task management", "Good mobile"],
        cons: ["Limited PM features", "No financials", "No AI"],
        href: "/alternatives/fieldwire-alternative/",
      },
      {
        name: "CoConstruct",
        tagline: "Custom home builder software",
        bestFor: "Custom home builders",
        pricing: "$99–$199/user/mo",
        pros: ["Strong client communication", "Selection tracking"],
        cons: ["Residential only", "No AI", "Limited commercial support"],
        href: "/alternatives/coconstruct-alternative/",
      },
    ],
    byUseCase: [
      { need: "AI & predictive analytics", choice: "Space AI", reason: "Only platform with native delay prediction and AI scheduling." },
      { need: "Residential home building", choice: "Buildertrend / CoConstruct", reason: "Purpose-built client portals and selection management." },
      { need: "BIM-heavy design-build", choice: "Autodesk Construction Cloud", reason: "Unmatched Revit/AutoCAD integration." },
      { need: "Budget-conscious mid-size firm", choice: "Space AI", reason: "Free tier and transparent per-user pricing." },
      { need: "Field-first task tracking", choice: "Fieldwire", reason: "Fast mobile task management on the jobsite." },
    ],
    faqs: [
      {
        question: "What is the best Procore alternative in 2026?",
        answer:
          "Space AI is the leading Procore alternative, offering AI-powered construction management with predictive analytics, intelligent scheduling, and automated document processing at a fraction of Procore's cost.",
      },
      {
        question: "Why do teams switch from Procore?",
        answer:
          "Teams switch for lower cost, faster implementation, and AI capabilities Procore lacks — predictive delay analysis, automated risk scoring, and intelligent document classification.",
      },
      {
        question: "Can I migrate data from Procore?",
        answer:
          "Yes. Space AI provides comprehensive migration tools that import projects, documents, RFIs, submittals, schedules, and contacts — most migrations complete in 1–2 weeks with zero data loss.",
      },
    ],
  },
  buildertrend: {
    slug: "buildertrend",
    competitor: "Buildertrend",
    heading: "Best Buildertrend Alternatives 2026",
    subheading: "Compare 6 real alternatives to Buildertrend",
    intro:
      "Buildertrend is a popular choice for residential builders, but its residential-only focus, dated interface, and lack of AI push growing teams to evaluate alternatives. Here are the best Buildertrend alternatives in 2026.",
    painPoints: [
      "Residential-only — no support for commercial projects",
      "No AI or predictive analytics",
      "Basic reporting and dashboards",
      "Dated user interface",
      "Weak drawing and document management",
    ],
    criteria: [
      { title: "AI & Automation", description: "Does it offer predictive scheduling and document automation?" },
      { title: "Project Coverage", description: "Residential only, or does it scale to commercial and mixed portfolios?" },
      { title: "Client Communication", description: "How strong is the client portal and selection management?" },
      { title: "Total Cost", description: "Flat monthly vs. per-user pricing — what scales better?" },
    ],
    options: [
      {
        name: "Space AI",
        tagline: "AI-powered construction management",
        bestFor: "Builders wanting AI + residential & commercial",
        pricing: "Free – $99/user/mo",
        pros: ["Predictive scheduling AI", "Client portal included", "Works across all project types"],
        cons: ["Newer to market", "Growing integration library"],
        href: "/alternatives/buildertrend-alternative/",
        isPmspace: true,
      },
      {
        name: "Procore",
        tagline: "Enterprise construction management",
        bestFor: "Large commercial contractors",
        pricing: "$375+/user/mo",
        pros: ["Industry standard", "Comprehensive", "Strong integrations"],
        cons: ["Very expensive", "Overkill for residential", "Complex implementation"],
        href: "/alternatives/procore-alternative/",
      },
      {
        name: "CoConstruct",
        tagline: "Custom home builder software",
        bestFor: "Custom home builders",
        pricing: "$99–$199/user/mo",
        pros: ["Strong client communication", "Selection management"],
        cons: ["Residential only", "Limited commercial support"],
        href: "/alternatives/coconstruct-alternative/",
      },
      {
        name: "PlanGrid",
        tagline: "Field document management",
        bestFor: "Field teams managing drawings",
        pricing: "$55–$100/user/mo",
        pros: ["Best drawing management", "Offline access"],
        cons: ["No financials", "Being folded into Autodesk"],
        href: "/alternatives/plangrid-alternative/",
      },
      {
        name: "Monday.com",
        tagline: "General work management",
        bestFor: "Teams wanting simple task tracking",
        pricing: "$9–$24/user/mo",
        pros: ["Easy to use", "Flexible", "Good pricing"],
        cons: ["Not construction-specific", "No RFIs or drawings"],
        href: "/alternatives/monday-alternative/",
      },
      {
        name: "Fieldwire",
        tagline: "Field task management",
        bestFor: "Field supervisors",
        pricing: "Free – $54/user/mo",
        pros: ["Free tier", "Good mobile", "Fast tasks"],
        cons: ["Limited PM", "No financials", "No AI"],
        href: "/alternatives/fieldwire-alternative/",
      },
    ],
    byUseCase: [
      { need: "Residential builders wanting AI", choice: "Space AI", reason: "Client portal + AI scheduling in one platform." },
      { need: "Large commercial work", choice: "Procore", reason: "Enterprise standard with deep integrations." },
      { need: "Custom home focus", choice: "CoConstruct", reason: "Best-in-class selections and client communication." },
      { need: "Simple task tracking", choice: "Monday.com / Fieldwire", reason: "Quick to adopt for non-complex needs." },
    ],
    faqs: [
      {
        question: "What is the best Buildertrend alternative?",
        answer:
          "For teams wanting AI capabilities, Space AI is the best Buildertrend alternative — offering AI-driven scheduling, predictive analytics, and a client portal across residential and commercial projects.",
      },
      {
        question: "Is there a cheaper Buildertrend alternative?",
        answer:
          "Yes. Space AI starts free and scales affordably, typically delivering 30–50% savings versus Buildertrend's flat monthly pricing while including AI features in all plans.",
      },
      {
        question: "Can I migrate from Buildertrend?",
        answer:
          "Yes. Space AI provides full Buildertrend migration support — import projects, contacts, documents, and schedules with a transition typically completed in 1–2 weeks.",
      },
    ],
  },
  oracle: {
    slug: "oracle",
    competitor: "Oracle ERP",
    heading: "Oracle ERP vs Construction ERP: Best Oracle Alternatives 2026",
    subheading: "Compare Oracle ERP with 6 construction-focused platforms",
    intro:
      "Oracle Fusion Cloud ERP is a massive enterprise suite — powerful, but expensive, slow to implement, and built for finance-first organizations, not construction. General-ledger-centric systems miss construction-specific workflows like RFIs, submittals, schedules, and lien management. Here are the best Oracle ERP alternatives for construction teams in 2026.",
    painPoints: [
      "Implementation measured in years, not weeks — 12–18+ month rollouts are common",
      "Construction-specific modules (project controls, RFIs, submittals) are bolted on, not native",
      "Per-module licensing that quickly exceeds budget",
      "Requires dedicated IT staff and consultants to maintain",
      "Poor field adoption — superintendents won't use finance-first UIs",
    ],
    criteria: [
      {
        title: "Construction-Native",
        description: "Built for project management, RFIs, submittals, and schedules — or just adapted from finance?",
      },
      {
        title: "Time to Value",
        description: "Weeks to live vs. 18-month enterprise rollouts.",
      },
      {
        title: "Total Cost",
        description: "Transparent per-user pricing vs. per-module enterprise licensing.",
      },
      {
        title: "Field Adoption",
        description: "Will your superintendents and subs actually use it daily?",
      },
    ],
    options: [
      {
        name: "Space AI",
        tagline: "AI-powered construction project management",
        bestFor: "Construction teams wanting construction-native ERP/PM without enterprise cost",
        pricing: "Free – $99/user/mo",
        pros: [
          "Purpose-built for construction, not adapted from finance",
          "AI predictive scheduling and risk scoring",
          "Live in days, not months",
        ],
        cons: ["Newer to market", "Accounting integrations via API rather than built-in GL"],
        href: "/alternatives/procore-alternative/",
        isPmspace: true,
      },
      {
        name: "Procore",
        tagline: "Construction project management + ERP integrations",
        bestFor: "Large contractors needing PM + ERP integration layers",
        pricing: "$375+/user/mo",
        pros: ["Industry-standard PM", "Prebuilt ERP integrations"],
        cons: ["Still needs a separate ERP/accounting stack", "Expensive", "No native AI"],
        href: "/alternatives/procore-alternative/",
      },
      {
        name: "Oracle Fusion Cloud ERP",
        tagline: "Enterprise financials & supply chain",
        bestFor: "Large enterprises needing deep financials",
        pricing: "$900–$3,000+/user/yr",
        pros: ["Deep financial controls", "Global scale", "Strong supply chain"],
        cons: ["Very expensive", "Years to implement", "Construction features are add-ons"],
        href: "/alternatives/procore-alternative/",
      },
      {
        name: "Autodesk Construction Cloud",
        tagline: "BIM-first construction platform",
        bestFor: "Design-build firms on Revit/AutoCAD",
        pricing: "$80–$500+/user/mo",
        pros: ["Deep BIM integration", "Comprehensive document management"],
        cons: ["Ecosystem lock-in", "Complex", "No financials"],
        href: "/alternatives/autodesk-construction-cloud-alternative/",
      },
      {
        name: "Buildertrend",
        tagline: "Residential builder & remodeler software",
        bestFor: "Home builders needing client portals + selections",
        pricing: "$499–$999/mo flat",
        pros: ["Client portal", "Selection management", "Flat pricing"],
        cons: ["Residential only", "No AI", "No enterprise ERP scale"],
        href: "/alternatives/buildertrend-alternative/",
      },
      {
        name: "Monday.com",
        tagline: "General work management",
        bestFor: "Small teams wanting flexible task tracking",
        pricing: "$9–$24/user/mo",
        pros: ["Easy to use", "Flexible"],
        cons: ["Not construction-specific", "No RFIs or drawings"],
        href: "/alternatives/monday-alternative/",
      },
    ],
    byUseCase: [
      { need: "Construction-native PM replacing a finance-centric ERP", choice: "Space AI", reason: "RFIs, submittals, schedules, and AI prediction built for construction — live in days." },
      { need: "Global enterprise with heavy financial controls", choice: "Oracle Fusion Cloud ERP", reason: "Unmatched depth in financials, supply chain, and global scale." },
      { need: "Large contractor bridging PM + accounting", choice: "Procore", reason: "Best-in-class PM with prebuilt ERP integration layers." },
      { need: "BIM-heavy design-build", choice: "Autodesk Construction Cloud", reason: "Deepest Revit/AutoCAD integration." },
    ],
    faqs: [
      {
        question: "What is the best Oracle ERP alternative for construction?",
        answer:
          "Space AI is the best Oracle ERP alternative for construction teams — it's construction-native project management with AI predictive scheduling and risk scoring, deployable in days rather than Oracle's months-long rollouts, at a fraction of the cost.",
      },
      {
        question: "Can Oracle ERP handle construction project management?",
        answer:
          "Oracle Fusion Cloud ERP is finance-first. It can run project financials at enterprise scale, but construction workflows like RFIs, submittals, and daily schedules are add-ons, and field adoption is notoriously poor compared with purpose-built construction platforms.",
      },
      {
        question: "Is Oracle ERP more expensive than construction software?",
        answer:
          "Yes. Oracle Fusion Cloud ERP pricing is per-module and typically $900–$3,000+ per user per year, plus implementation consultants. Construction-native platforms like Space AI cost a fraction and include the project workflows construction teams actually use.",
      },
    ],
  },
  autodesk: {
    slug: "autodesk-construction-cloud",
    competitor: "Autodesk Construction Cloud",
    heading: "Best Autodesk Construction Cloud Alternatives 2026",
    subheading: "Compare 6 real alternatives to ACC",
    intro:
      "Autodesk Construction Cloud bundles BIM 360, PlanGrid, and BuildingConnected, but its cost, complexity, and ecosystem lock-in drive many teams to evaluate alternatives. Here are the best ACC alternatives in 2026.",
    painPoints: [
      "Separate products (Docs, Build, BIM Collaborate) each cost extra",
      "Vendor lock-in to the Autodesk ecosystem",
      "Poor experience with non-Autodesk design tools",
      "Months-long implementation cycles",
      "Confusing product bundling and opaque pricing",
    ],
    criteria: [
      { title: "Tool Agnosticism", description: "Does it work with any design tool or lock you into one ecosystem?" },
      { title: "All-in-One vs. Bundled", description: "One integrated platform vs. several products that cost more together." },
      { title: "AI & Automation", description: "Native AI for scheduling, risk, and documents?" },
      { title: "Total Cost", description: "Transparent pricing vs. add-on product stacking." },
    ],
    options: [
      {
        name: "Space AI",
        tagline: "AI-powered construction management",
        bestFor: "Teams wanting tool-agnostic AI construction",
        pricing: "Free – $99/user/mo",
        pros: ["Works with any design tool", "AI scheduling & risk scoring", "One integrated platform"],
        cons: ["Newer to market", "Growing BIM module"],
        href: "/alternatives/autodesk-construction-cloud-alternative/",
        isPmspace: true,
      },
      {
        name: "Procore",
        tagline: "Enterprise construction management",
        bestFor: "Large general contractors",
        pricing: "$375+/user/mo",
        pros: ["Industry standard", "Strong integrations"],
        cons: ["Expensive", "No AI", "Complex implementation"],
        href: "/alternatives/procore-alternative/",
      },
      {
        name: "PlanGrid",
        tagline: "Field document management",
        bestFor: "Field teams with large drawing sets",
        pricing: "$55–$100/user/mo",
        pros: ["Best drawing management", "Offline access"],
        cons: ["Being absorbed into ACC", "No financials"],
        href: "/alternatives/plangrid-alternative/",
      },
      {
        name: "Buildertrend",
        tagline: "Residential builder software",
        bestFor: "Home builders and remodelers",
        pricing: "$499–$999/mo flat",
        pros: ["Client portal", "Selection management"],
        cons: ["Residential only", "No BIM"],
        href: "/alternatives/buildertrend-alternative/",
      },
      {
        name: "Smartsheet",
        tagline: "Enterprise work management",
        bestFor: "Spreadsheet-driven teams",
        pricing: "$9–$32/user/mo",
        pros: ["Familiar interface", "Flexible"],
        cons: ["Not construction-specific", "No BIM"],
        href: "/alternatives/smartsheet-alternative/",
      },
      {
        name: "Fieldwire",
        tagline: "Field task management",
        bestFor: "Field supervisors",
        pricing: "Free – $54/user/mo",
        pros: ["Free tier", "Good mobile"],
        cons: ["Limited PM", "No BIM coordination"],
        href: "/alternatives/fieldwire-alternative/",
      },
    ],
    byUseCase: [
      { need: "Avoid ecosystem lock-in", choice: "Space AI", reason: "Tool-agnostic — works with Revit, SketchUp, or hand drawings." },
      { need: "Large commercial enterprise", choice: "Procore", reason: "Established standard with a large ecosystem." },
      { need: "Drawing-heavy field work", choice: "PlanGrid", reason: "Best-in-class sheet management." },
      { need: "BIM coordination", choice: "Stay on ACC", reason: "Deepest Revit/AutoCAD integration if you're all-in on Autodesk." },
    ],
    faqs: [
      {
        question: "What is the best Autodesk Construction Cloud alternative?",
        answer:
          "For teams wanting AI-first, tool-agnostic construction management, Space AI is the leading ACC alternative — predictive analytics, intelligent scheduling, and document automation without ecosystem lock-in.",
      },
      {
        question: "Is Autodesk Construction Cloud expensive?",
        answer:
          "Yes. Costs stack across Docs, Build, and BIM Collaborate products. Space AI typically costs 40–60% less while including AI features in one transparent plan.",
      },
      {
        question: "Does Space AI integrate with Revit and AutoCAD?",
        answer:
          "Yes. Space AI supports Revit, AutoCAD, and IFC models via its BIM module — you get coordination without being locked into the Autodesk ecosystem.",
      },
    ],
  },
};
