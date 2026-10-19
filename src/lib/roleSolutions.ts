export type RoleSolution = {
  slug: string;
  title: string;
  shortTitle: string;
  audience: string;
  description: string;
  hero: string;
  problems: string[];
  outcomes: string[];
  workflows: string[];
  metrics: { value: string; label: string }[];
};

export const roleSolutions: RoleSolution[] = [
  {
    slug: "project-managers",
    title: "Project Managers",
    shortTitle: "Project Managers",
    audience: "Project delivery teams",
    description:
      "Give project managers one command layer for schedules, RFIs, submittals, procurement, field updates, and stakeholder reporting.",
    hero:
      "Space AI helps project managers move from chasing updates to managing decisions with live construction context, predictive risk signals, and source-backed project summaries.",
    problems: [
      "Schedules, documents, procurement, and field updates live in separate systems.",
      "Project teams spend hours preparing status reports instead of resolving blockers.",
      "Risks are often visible only after they become delays, claims, or rework.",
    ],
    outcomes: [
      "See project health across schedule, cost, document, and workflow signals.",
      "Get earlier warnings for delayed approvals, unresolved RFIs, and procurement constraints.",
      "Create decision-ready summaries for owners, consultants, and delivery teams.",
    ],
    workflows: [
      "Daily project control dashboard",
      "RFI and submittal risk tracking",
      "Procurement and schedule dependency alerts",
      "Owner-ready progress reporting",
    ],
    metrics: [
      { value: "45 days", label: "Earlier delay warning" },
      { value: "1 view", label: "Connected project context" },
      { value: "24/7", label: "Project intelligence layer" },
    ],
  },
  {
    slug: "commercial-managers",
    title: "Commercial Managers",
    shortTitle: "Commercial Managers",
    audience: "Commercial and cost control",
    description:
      "Connect commitments, variations, claims, approvals, cost signals, and contract records so commercial teams can protect margin.",
    hero:
      "Space AI gives commercial managers a connected view of cost exposure, change history, subcontractor activity, and approval risk before margin pressure appears in the final report.",
    problems: [
      "Variation evidence is scattered across emails, drawings, RFIs, and site notes.",
      "Cost forecasts lag behind live project decisions and delayed approvals.",
      "Final account and claim preparation depends on manual record chasing.",
    ],
    outcomes: [
      "Track variations, approvals, and commercial exposure with supporting sources.",
      "Connect cost items to project events, documents, and workflow history.",
      "Improve forecast confidence with live risk and change signals.",
    ],
    workflows: [
      "Variation register intelligence",
      "Claim evidence assembly",
      "Cost forecast exception tracking",
      "Subcontractor payment and approval review",
    ],
    metrics: [
      { value: "30%", label: "Cost control lift" },
      { value: "Every change", label: "Traceable to source" },
      { value: "Day 1", label: "Forecast visibility" },
    ],
  },
  {
    slug: "owner-directors",
    title: "Owner Directors",
    shortTitle: "Owner Directors",
    audience: "Owners and executives",
    description:
      "Give owners and directors portfolio-level visibility into risk, delivery confidence, commercial exposure, and decision accountability.",
    hero:
      "Space AI turns project data into board-ready intelligence so owners can see which projects need attention, which risks are growing, and where decisions are blocked.",
    problems: [
      "Leadership reports arrive late and often describe what already happened.",
      "Project risk is hard to compare across teams, regions, and delivery models.",
      "Strategic decisions lack a shared source of project truth.",
    ],
    outcomes: [
      "Review portfolio risk, schedule health, and commercial exposure from one layer.",
      "Understand why an issue matters and which team owns the next action.",
      "Use AI summaries to prepare faster executive reviews and stakeholder updates.",
    ],
    workflows: [
      "Portfolio health review",
      "Executive risk briefing",
      "Blocked decision escalation",
      "Project performance benchmarking",
    ],
    metrics: [
      { value: "2x", label: "Faster executive decisions" },
      { value: "Portfolio", label: "Cross-project visibility" },
      { value: "Real time", label: "Risk escalation" },
    ],
  },
  {
    slug: "hseq-managers",
    title: "HSEQ Managers",
    shortTitle: "HSEQ Managers",
    audience: "Health, safety, environment, and quality",
    description:
      "Connect inspections, observations, incidents, quality records, corrective actions, and closeout evidence into one HSEQ operating view.",
    hero:
      "Space AI helps HSEQ managers move from disconnected checklists to proactive safety and quality intelligence across site activity, evidence, and accountability.",
    problems: [
      "Safety and quality observations are often trapped in forms, photos, and spreadsheets.",
      "Corrective actions lose momentum when ownership and evidence are unclear.",
      "Compliance reporting takes too long because records are disconnected.",
    ],
    outcomes: [
      "Surface repeated safety and quality patterns before they become systemic issues.",
      "Connect inspections, evidence, responsible teams, and closeout status.",
      "Create faster audit-ready HSEQ summaries from live site data.",
    ],
    workflows: [
      "Inspection and observation tracking",
      "Corrective action closeout",
      "Quality evidence management",
      "Audit and compliance reporting",
    ],
    metrics: [
      { value: "Source-backed", label: "Audit evidence" },
      { value: "Faster", label: "Corrective closeout" },
      { value: "Live", label: "Safety and quality view" },
    ],
  },
  {
    slug: "schedulers",
    title: "Schedulers",
    shortTitle: "Schedulers",
    audience: "Planning and scheduling",
    description:
      "Help schedulers connect programme logic with RFIs, procurement, approvals, field progress, and emerging delay risk.",
    hero:
      "Space AI supports schedulers with predictive schedule intelligence that links programme activities to the real project signals affecting delivery.",
    problems: [
      "Programme updates depend on manual inputs from field, procurement, and document teams.",
      "Critical-path risk is hidden across RFIs, approvals, late materials, and unresolved decisions.",
      "Delay explanations take too long to assemble and defend.",
    ],
    outcomes: [
      "Identify schedule exposure from delayed approvals, procurement risk, and field progress.",
      "Connect activity logic to documents, decisions, and workflow status.",
      "Prepare clearer schedule narratives with source-backed evidence.",
    ],
    workflows: [
      "Critical-path risk analysis",
      "Lookahead readiness checks",
      "Procurement-to-programme dependency tracking",
      "Delay narrative preparation",
    ],
    metrics: [
      { value: "45 days", label: "Advance schedule warning" },
      { value: "5+", label: "Connected data sources" },
      { value: "Every activity", label: "Context-aware risk" },
    ],
  },
  {
    slug: "software-champions-and-internal-systems-leads",
    title: "Software Champions and Internal Systems Leads",
    shortTitle: "Systems Leads",
    audience: "Technology adoption and systems teams",
    description:
      "Help internal champions standardize workflows, connect systems, improve adoption, and prove value without adding another disconnected tool.",
    hero:
      "Space AI gives systems leads a practical way to unify construction data, automate workflows, and improve adoption across teams that already use multiple platforms.",
    problems: [
      "Teams resist new tools when rollout adds duplicate data entry.",
      "Existing platforms do not share enough context for AI-ready workflows.",
      "Internal champions need measurable adoption, governance, and business value.",
    ],
    outcomes: [
      "Connect existing construction systems into a governed intelligence layer.",
      "Reduce duplicate entry through workflow automation and structured integrations.",
      "Give teams role-specific views while leadership sees standardized reporting.",
    ],
    workflows: [
      "System integration planning",
      "Workflow standardization",
      "Role-based onboarding",
      "Adoption and value measurement",
    ],
    metrics: [
      { value: "50+", label: "Integration-ready workflows" },
      { value: "Lower", label: "Admin burden" },
      { value: "Governed", label: "Enterprise data layer" },
    ],
  },
  {
    slug: "quantity-surveyors-and-senior-qss",
    title: "Quantity Surveyors and Senior QSs",
    shortTitle: "Quantity Surveyors",
    audience: "QS and commercial delivery",
    description:
      "Support QS teams with connected variation evidence, payment records, retention tracking, provisional sums, and final account intelligence.",
    hero:
      "Space AI helps quantity surveyors keep every commercial decision traceable, from progress claims and variations to retention, provisional sums, and final account closeout.",
    problems: [
      "Commercial evidence is split between drawings, RFIs, emails, approvals, and site records.",
      "Retention, claims, and provisional sum drawdowns require repeated manual reconciliation.",
      "Disputes take longer when the audit trail is incomplete or hard to retrieve.",
    ],
    outcomes: [
      "Connect commercial records to the project events and documents behind them.",
      "Prepare payment, variation, and final account reviews with stronger evidence.",
      "Reduce manual reconciliation with source-backed commercial context.",
    ],
    workflows: [
      "Variation and claim evidence tracking",
      "Progress payment review",
      "Retention and provisional sum monitoring",
      "Final account closeout",
    ],
    metrics: [
      { value: "Every item", label: "Traceable to evidence" },
      { value: "Faster", label: "Final account review" },
      { value: "Clear", label: "Commercial audit trail" },
    ],
  },
];

export const getRoleSolutionBySlug = (slug: string) =>
  roleSolutions.find((solution) => solution.slug === slug);
