export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  intro: string;
  imageSrc?: string;
  sections: GuideSection[];
  takeaways: string[];
}

const DEFAULT_GUIDE_IMAGE = "/assets/images/crm.jpg";
const WORKFLOW_IMAGE = "/assets/images/aiworkflows.png";
const FIELD_IMAGE = "/assets/images/mobile1.webp";

export const guideArticles: GuideArticle[] = [
  {
    slug: "admin-module",
    title: "Admin Module Guide for Construction",
    description:
      "Learn how an AI-powered admin module streamlines construction project administration, improves compliance, and gives teams tighter control over users, data, and approvals.",
    category: "Administration",
    readTime: "5 min read",
    intro:
      "Construction operations break down when user permissions, document standards, and approval rules are managed inconsistently. A modern admin module gives leadership a reliable way to govern projects without slowing teams down.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "What the Admin Module Solves",
        paragraphs: [
          "Manual project administration creates fragmented permissions, inconsistent workflows, and weak audit trails. Admin teams spend too much time enforcing standards by hand.",
        ],
        bullets: [
          "Centralized user and role management",
          "Approval routing for sensitive updates",
          "Project-wide policy enforcement",
          "Audit-ready access and activity history",
        ],
      },
      {
        heading: "Core Capabilities",
        paragraphs: [
          "The strongest admin modules combine security, workflow governance, and operational visibility in one place so project teams can move quickly without creating risk.",
        ],
        bullets: [
          "Role-based access control across modules",
          "Compliance reporting and document retention support",
          "Workflow templates for repeatable controls",
          "Automated notifications for exceptions and escalations",
        ],
      },
      {
        heading: "Why It Matters",
        paragraphs: [
          "When administration becomes structured and automated, project teams spend less time fixing process issues and more time delivering work. Leadership gets stronger control without micromanaging the field.",
        ],
      },
    ],
    takeaways: [
      "Administrative consistency reduces downstream project risk",
      "Governance works best when it is built into the workflow",
      "Audit trails and permissions should be automated, not manual",
      "A strong admin layer improves both speed and compliance",
    ],
  },
  {
    slug: "ai-bim-level-2-workflow",
    title: "Integrating AI Into Your BIM Level 2 Workflow",
    description:
      "A practical guide for BIM managers on using AI for model auditing, clash prioritization, COBie enrichment, and faster design coordination.",
    category: "BIM & Coordination",
    readTime: "7 min read",
    intro:
      "BIM Level 2 workflows already create a common digital foundation, but AI turns that foundation into an operating advantage. Instead of only storing models and exchanges, teams can use AI to detect issues, classify data, and accelerate coordination decisions.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "Where BIM Level 2 Teams Lose Time",
        paragraphs: [
          "Even disciplined BIM environments still struggle with manual QA reviews, repeated clash triage, and slow metadata cleanup before handover.",
        ],
        bullets: [
          "Model auditing is often repetitive and checklist-driven",
          "Clash lists contain too much low-value noise",
          "COBie and asset data preparation becomes a late-stage scramble",
          "Design issues reach coordination meetings too late",
        ],
      },
      {
        heading: "How AI Improves the Workflow",
        paragraphs: [
          "AI can review model structure, naming, attributes, and coordination patterns continuously. That shifts BIM from periodic checking to active decision support.",
        ],
        bullets: [
          "Automated model health and standards auditing",
          "Priority scoring for clashes by constructability impact",
          "Suggested classification and metadata completion",
          "Faster handover data preparation for owners and FM teams",
        ],
      },
      {
        heading: "Implementation Advice",
        paragraphs: [
          "Start with model QA, clash triage, and metadata enrichment. These are high-friction tasks where AI creates fast wins without forcing teams to redesign the whole BIM process.",
        ],
      },
    ],
    takeaways: [
      "AI strengthens BIM Level 2 workflows without replacing them",
      "Automated QA and clash prioritization free coordinators to focus on critical issues",
      "Metadata enrichment improves downstream handover quality",
      "Early AI wins usually come from audit and coordination workflows",
    ],
  },
  {
    slug: "ai-in-construction",
    title: "AI in Construction Guide 2026",
    description:
      "Discover how artificial intelligence is transforming construction planning, safety, scheduling, document control, and project delivery.",
    category: "Industry Outlook",
    readTime: "5 min read",
    intro:
      "AI in construction is no longer limited to pilots and marketing demos. It is becoming a practical layer across scheduling, risk management, field reporting, document workflows, and executive forecasting.",
    imageSrc: WORKFLOW_IMAGE,
    sections: [
      {
        heading: "Where AI Delivers the Fastest Value",
        paragraphs: [
          "Construction teams see the earliest results where repetitive work, fragmented data, and delayed decisions create friction every day.",
        ],
        bullets: [
          "Predictive scheduling and delay forecasting",
          "Document intake, tagging, and approval automation",
          "Computer vision for progress and safety monitoring",
          "AI copilots for RFIs, logs, and executive reporting",
        ],
      },
      {
        heading: "What Changes for Project Teams",
        paragraphs: [
          "AI does not replace project managers or field engineers. It reduces the manual workload around them and surfaces the signals they need earlier.",
        ],
      },
      {
        heading: "How to Adopt It Safely",
        paragraphs: [
          "Strong adoption starts with one or two workflows tied to measurable outcomes. Clean data, clear ownership, and human review are still essential.",
        ],
      },
    ],
    takeaways: [
      "AI is most valuable where teams are overloaded with repetitive coordination work",
      "Better data and faster decisions matter more than novelty",
      "Scheduling, documents, and field intelligence are high-impact starting points",
      "Successful adoption pairs automation with accountable human review",
    ],
  },
  {
    slug: "ai-lean-construction-platform",
    title: "AI Lean Construction Platform Guide",
    description:
      "See how AI supports lean construction by reducing waiting, rework, and information waste across planning, field execution, and closeout.",
    category: "Lean Construction",
    readTime: "6 min read",
    intro:
      "Lean construction depends on flow, reliable commitments, and fast feedback. AI strengthens those principles by surfacing bottlenecks earlier and automating the information loops that usually slow teams down.",
    imageSrc: WORKFLOW_IMAGE,
    sections: [
      {
        heading: "Where Lean Breaks Down",
        paragraphs: [
          "Most lean initiatives stall when planning boards, field reality, and project data drift apart. Teams know the right habits but lack timely insight.",
        ],
      },
      {
        heading: "How AI Supports Lean Work",
        paragraphs: [
          "AI helps planners and field leaders see constraints sooner, maintain reliable work plans, and spot waste patterns that would otherwise stay hidden.",
        ],
        bullets: [
          "Constraint detection from schedules, RFIs, and submittals",
          "Reliable commitment tracking across trades",
          "Automated variance and root-cause analysis",
          "Real-time production feedback from the field",
        ],
      },
      {
        heading: "Results to Expect",
        paragraphs: [
          "Teams that combine lean practices with AI usually gain better plan reliability, faster issue escalation, and fewer downstream surprises.",
        ],
      },
    ],
    takeaways: [
      "AI reinforces lean execution by improving visibility and feedback loops",
      "Constraint management becomes more proactive",
      "Reliable planning improves when field signals are continuous",
      "The goal is less waste and more predictable delivery",
    ],
  },
  {
    slug: "ai-site-inspection-tools",
    title: "AI Site Inspection Tools for Construction",
    description:
      "Explore how AI-powered inspection tools improve construction quality, safety, compliance, and documentation with faster issue detection.",
    category: "Field Operations",
    readTime: "5 min read",
    intro:
      "Traditional construction inspections depend on who was on site, what they noticed, and how quickly they wrote it down. AI inspection tools add consistent detection, digital evidence, and faster follow-up.",
    imageSrc: FIELD_IMAGE,
    sections: [
      {
        heading: "What AI Inspection Tools Do",
        paragraphs: [
          "These tools combine photo analysis, mobile workflows, and rule-based checks to help teams identify issues before they grow into delays, defects, or compliance failures.",
        ],
        bullets: [
          "Automated photo and video review",
          "Digital checklists and punch workflows",
          "Safety and quality issue flagging",
          "Structured reporting with timestamps and evidence",
        ],
      },
      {
        heading: "Operational Benefits",
        paragraphs: [
          "Inspection teams move faster, documentation becomes more defensible, and project leaders can see patterns across repeated issues instead of only isolated defects.",
        ],
      },
      {
        heading: "Adoption Best Practices",
        paragraphs: [
          "The best results come when inspection workflows connect directly to quality, safety, and document control processes instead of living in a separate silo.",
        ],
      },
    ],
    takeaways: [
      "AI inspections improve consistency and speed",
      "Digital evidence strengthens accountability",
      "Issues are easier to escalate when data is structured",
      "Inspection tools work best when linked to broader project workflows",
    ],
  },
  {
    slug: "automated-progress-tracking",
    title: "Automated Progress Tracking in Construction",
    description:
      "Learn how AI-driven progress tracking turns field photos, site observations, and schedule data into faster, more objective project status updates.",
    category: "Progress Tracking",
    readTime: "5 min read",
    intro:
      "Progress reporting often depends on manual updates, subjective percentages, and delayed field notes. Automated progress tracking creates a more current and defensible view of what is really happening on site.",
    imageSrc: FIELD_IMAGE,
    sections: [
      {
        heading: "Why Manual Tracking Falls Short",
        paragraphs: [
          "Weekly progress updates are often assembled after the fact. By the time leadership sees a variance, the delay has already started to compound.",
        ],
      },
      {
        heading: "How Automation Helps",
        paragraphs: [
          "AI can classify field imagery, compare installed work to plans, and connect that information with schedules and milestones.",
        ],
        bullets: [
          "Objective status signals from photos and videos",
          "Faster earned-value style reporting inputs",
          "Automatic trend detection by area, trade, or milestone",
          "Earlier escalation of stalled or off-sequence work",
        ],
      },
      {
        heading: "Where Teams Benefit Most",
        paragraphs: [
          "Projects with large sites, many concurrent trades, or demanding owner reporting gain the most from more frequent and more reliable progress visibility.",
        ],
      },
    ],
    takeaways: [
      "Automated tracking reduces dependence on subjective updates",
      "Field imagery becomes operational data, not just documentation",
      "Leaders get earlier warning of schedule drift",
      "Reliable progress data improves forecasting and owner reporting",
    ],
  },
  {
    slug: "automated-submittal-review",
    title: "Automated Submittal Review for Construction Teams",
    description:
      "See how AI helps construction teams classify, route, compare, and review submittals faster while reducing turnaround time and approval bottlenecks.",
    category: "Document Control",
    readTime: "6 min read",
    intro:
      "Submittal workflows slow down when every review depends on manual sorting, incomplete packages, and inconsistent comparisons to specs and drawings. Automation shortens that cycle.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "The Problem With Traditional Submittals",
        paragraphs: [
          "Review teams spend too much time checking completeness, distributing packages, and chasing comments. Critical scope can sit idle before the real technical review even begins.",
        ],
      },
      {
        heading: "What AI Automates",
        paragraphs: [
          "AI can prepare the review before a human even opens the package by organizing content, identifying missing information, and highlighting mismatches against standards.",
        ],
        bullets: [
          "Automatic categorization and routing",
          "Package completeness and metadata checks",
          "Spec and drawing comparison support",
          "Consolidated review comments and status tracking",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "Faster submittal cycles mean fewer procurement delays, fewer review bottlenecks, and stronger confidence that teams are working from the correct information.",
        ],
      },
    ],
    takeaways: [
      "Automation removes non-technical work from the review cycle",
      "Incomplete packages are caught earlier",
      "Spec comparison becomes more consistent",
      "Faster approvals protect procurement and schedule performance",
    ],
  },
  {
    slug: "bim-data-extraction",
    title: "BIM Data Extraction for Construction Teams",
    description:
      "Understand how AI-powered BIM data extraction converts model content into structured quantities, attributes, and decision-ready project intelligence.",
    category: "BIM & Data",
    readTime: "5 min read",
    intro:
      "BIM models contain valuable information, but that value is often trapped inside geometry and inconsistent attributes. Data extraction turns models into something estimators, planners, and operations teams can act on quickly.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "Why Extraction Matters",
        paragraphs: [
          "Teams lose time when model data must be manually interpreted, copied into other systems, or cleaned before it can support estimating, procurement, or handover.",
        ],
      },
      {
        heading: "What AI Adds",
        paragraphs: [
          "AI helps normalize naming, infer missing classifications, and accelerate the flow from model content to operational use cases.",
        ],
        bullets: [
          "Quantity and attribute extraction at scale",
          "Automated classification and data mapping",
          "Validation against project standards",
          "Faster handoff into cost, schedule, and asset systems",
        ],
      },
      {
        heading: "Best Use Cases",
        paragraphs: [
          "Extraction is especially useful for takeoffs, asset registers, handover packages, and any workflow where model data needs to feed another business process.",
        ],
      },
    ],
    takeaways: [
      "Model data becomes more useful when it is structured for downstream teams",
      "AI reduces cleanup and classification effort",
      "Extraction supports estimating, planning, and handover",
      "Good data pipelines increase BIM's operational value",
    ],
  },

  {
    slug: "custom-workstreams",
    title: "Custom Workstreams in Construction Project Management",
    description:
      "Learn how custom workstreams help contractors, project managers, and specialist teams automate repeatable processes without forcing every project into the same mold.",
    category: "Workflow Automation",
    readTime: "5 min read",
    intro:
      "No two construction projects run exactly the same way. Custom workstreams let teams tailor approvals, handoffs, and notifications to project reality while still keeping execution controlled.",
    imageSrc: WORKFLOW_IMAGE,
    sections: [
      {
        heading: "What Custom Workstreams Solve",
        paragraphs: [
          "Generic workflow templates rarely match the way specialty trades, owners, or regional processes actually operate. Teams end up working around the software instead of through it.",
        ],
      },
      {
        heading: "What to Configure",
        paragraphs: [
          "Strong custom workstreams define who owns the step, what information is required, and what happens when deadlines or conditions are missed.",
        ],
        bullets: [
          "Role-based task routing",
          "Conditional approvals and escalation logic",
          "Project-specific document requirements",
          "Connections to schedules, cost controls, and field updates",
        ],
      },
      {
        heading: "Why AI Matters",
        paragraphs: [
          "AI makes workstreams more adaptive by recommending routes, detecting blockers, and summarizing where work is stalling across the portfolio.",
        ],
      },
    ],
    takeaways: [
      "Custom workstreams fit software to the project instead of forcing the reverse",
      "Clear ownership and conditions reduce dropped handoffs",
      "Automation improves consistency without removing flexibility",
      "AI helps teams spot blockers before the workflow stalls",
    ],
  },
  {
    slug: "designer-workspace",
    title: "Designer Workspace Guide for Construction Teams",
    description:
      "See how a dedicated designer workspace improves drawing control, BIM collaboration, and coordinated design delivery across construction projects.",
    category: "Design Collaboration",
    readTime: "6 min read",
    intro:
      "Design teams need more than file storage. They need a workspace where drawings, specifications, workflows, and model coordination stay connected as the design evolves.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "Common Design Workflow Friction",
        paragraphs: [
          "Manual drawing handling, disconnected reviews, and poor visibility across revisions make coordination slower and less reliable than it should be.",
        ],
      },
      {
        heading: "What a Good Designer Workspace Includes",
        paragraphs: [
          "The goal is to give designers and reviewers one place to manage design intent, revisions, and collaboration with the broader project team.",
        ],
        bullets: [
          "Centralized drawing and specification control",
          "BIM-aware collaboration and review",
          "Compliance and standards support",
          "Clear visibility into active workflows and responsibilities",
        ],
      },
      {
        heading: "Project-Level Benefits",
        paragraphs: [
          "When design coordination becomes more structured, downstream teams receive cleaner information earlier and field execution becomes more predictable.",
        ],
      },
    ],
    takeaways: [
      "Design collaboration improves when files and workflows live together",
      "Revision control reduces downstream errors",
      "BIM-aware workflows accelerate coordination",
      "A strong design workspace improves project-wide information quality",
    ],
  },
  {
    slug: "intelligent-scheduling",
    title: "Intelligent Scheduling in Construction",
    description:
      "Discover how AI-powered scheduling improves forecast accuracy, reduces delays, and helps project teams react earlier to schedule risk.",
    category: "Scheduling",
    readTime: "5 min read",
    intro:
      "Intelligent scheduling uses AI and live project signals to move planning from static updates to active decision support. That matters most when teams need earlier warning, not just cleaner reports.",
    imageSrc: WORKFLOW_IMAGE,
    sections: [
      {
        heading: "Why Traditional Scheduling Struggles",
        paragraphs: [
          "Static updates and manual look-ahead processes often miss the early signals that a task, trade, or area is about to fall behind.",
        ],
      },
      {
        heading: "What AI Adds to Scheduling",
        paragraphs: [
          "AI looks across schedule logic, field progress, documents, and team activity to identify risk patterns before they show up as obvious slippage.",
        ],
        bullets: [
          "Predictive delay warnings",
          "Constraint-aware look-ahead planning",
          "Resource and sequence risk detection",
          "Faster scenario analysis for recovery options",
        ],
      },
      {
        heading: "Where It Has the Most Value",
        paragraphs: [
          "Projects with tight milestones, heavy coordination, or large subcontractor networks gain the most from earlier and more data-backed schedule decisions.",
        ],
      },
    ],
    takeaways: [
      "Intelligent scheduling focuses on early warning, not just reporting",
      "AI helps planners see risk before float is exhausted",
      "Connected schedule data supports faster recovery decisions",
      "The best results come when field progress feeds the schedule continuously",
    ],
  },
  {
    slug: "predictive-maintenance-construction",
    title: "Predictive Maintenance for Construction Operations",
    description:
      "Learn how predictive maintenance helps construction teams prevent equipment downtime, control service costs, and improve site reliability.",
    category: "Asset Operations",
    readTime: "5 min read",
    intro:
      "Construction equipment failures create more than repair costs. They disrupt crews, schedules, logistics, and safety planning. Predictive maintenance helps teams act before breakdowns create wider project damage.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "What Makes Traditional Maintenance Reactive",
        paragraphs: [
          "Many teams rely on fixed service intervals or wait until something fails. Neither approach reflects actual usage conditions on active construction sites.",
        ],
      },
      {
        heading: "How Predictive Maintenance Works",
        paragraphs: [
          "Sensor readings, usage patterns, service history, and failure signals are combined to forecast which assets need attention first.",
        ],
        bullets: [
          "Condition-based alerts instead of static schedules",
          "Failure pattern detection across fleets",
          "Better spare-parts and service planning",
          "Reduced unplanned downtime on critical equipment",
        ],
      },
      {
        heading: "Operational Outcomes",
        paragraphs: [
          "Teams gain more reliable equipment availability, fewer emergency interventions, and better control over maintenance spend across multiple projects.",
        ],
      },
    ],
    takeaways: [
      "Predictive maintenance reduces avoidable downtime",
      "Service timing improves when tied to actual equipment condition",
      "Fleet visibility supports better planning and utilization",
      "Reliability improvements protect schedule performance",
    ],
  },

  {
    slug: "smart-contract-management",
    title: "Smart Contract Management for Construction Projects",
    description:
      "Explore how AI-powered contract management improves visibility into obligations, risk, compliance, and change events across construction projects.",
    category: "Contracts",
    readTime: "5 min read",
    intro:
      "Construction contracts are dense, time-sensitive, and full of downstream consequences. Smart contract management helps teams surface obligations earlier and respond before risk turns into cost.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "Where Contract Risk Hides",
        paragraphs: [
          "Critical notice periods, payment conditions, insurance requirements, and change language often live in documents that only a few people read closely enough.",
        ],
      },
      {
        heading: "What Smart Management Adds",
        paragraphs: [
          "AI can extract obligations, monitor deadlines, and connect contract clauses to active project events such as RFIs, changes, delays, and compliance issues.",
        ],
        bullets: [
          "Clause extraction and obligation tracking",
          "Deadline reminders tied to notice requirements",
          "Change-order and claims context support",
          "Searchable contract intelligence across the portfolio",
        ],
      },
      {
        heading: "Why It Matters Operationally",
        paragraphs: [
          "Teams gain a more active understanding of contract risk instead of treating the agreement as something to revisit only when problems become serious.",
        ],
      },
    ],
    takeaways: [
      "Contract risk is often operational, not just legal",
      "AI helps turn clauses into trackable actions",
      "Deadlines and notice requirements should be surfaced early",
      "Searchable contract intelligence improves claims readiness",
    ],
  },
  {
    slug: "smart-resource-allocation",
    title: "Smart Resource Allocation in Construction",
    description:
      "Understand how AI-driven resource allocation improves labor planning, equipment utilization, and trade coordination across active construction projects.",
    category: "Resource Planning",
    readTime: "5 min read",
    intro:
      "Resource allocation problems rarely start with a lack of people or equipment. They start with poor timing, weak visibility, and reactive planning. Smart allocation helps teams deploy the right capacity where it matters most.",
    imageSrc: WORKFLOW_IMAGE,
    sections: [
      {
        heading: "Why Allocation Gets Messy",
        paragraphs: [
          "Construction projects compete for shared labor, equipment, and specialist support. Without clear visibility, teams overcommit in one place and under-serve another.",
        ],
      },
      {
        heading: "What AI Improves",
        paragraphs: [
          "AI helps project leaders forecast demand, detect overloads earlier, and rebalance resources before delays or idle time spread across the schedule.",
        ],
        bullets: [
          "Forward-looking labor and equipment demand signals",
          "Conflict detection across projects and phases",
          "Better matching of capacity to near-term priorities",
          "Reduced idle time and fewer emergency reallocations",
        ],
      },
      {
        heading: "Where It Pays Off",
        paragraphs: [
          "The biggest gains appear in multi-project environments where labor and critical equipment must be shared carefully across changing priorities.",
        ],
      },
    ],
    takeaways: [
      "Smarter allocation depends on earlier visibility into demand",
      "AI helps rebalance resources before disruption compounds",
      "Multi-project organizations gain the most from coordinated planning",
      "Better allocation protects both productivity and margins",
    ],
  },
  {
    slug: "space-capture",
    title: "Space Capture: Digital Reality in Construction",
    description:
      "Learn how digital site capture improves documentation, progress tracking, and quality control using imagery, scanning, and AI-assisted review.",
    category: "Field Capture",
    readTime: "5 min read",
    intro:
      "Digital capture tools create a persistent visual record of the jobsite. When paired with AI, that record becomes more than documentation. It becomes a source of project intelligence.",
    imageSrc: FIELD_IMAGE,
    sections: [
      {
        heading: "What Digital Capture Solves",
        paragraphs: [
          "Traditional site documentation is fragmented across phones, folders, and memory. Important details are often impossible to find when claims, quality issues, or schedule questions appear later.",
        ],
      },
      {
        heading: "Key Capabilities",
        paragraphs: [
          "Capture solutions combine photos, video, spatial context, and analysis so teams can understand what happened, where it happened, and how conditions changed over time.",
        ],
        bullets: [
          "Visual as-built documentation",
          "Progress evidence tied to locations and time",
          "Quality and defect review support",
          "Better collaboration between field and office teams",
        ],
      },
      {
        heading: "Why AI Makes It Stronger",
        paragraphs: [
          "AI reduces the effort required to classify imagery, find the right moments, and connect field visuals to broader project workflows.",
        ],
      },
    ],
    takeaways: [
      "Captured visuals are more useful when they are searchable and structured",
      "Digital reality improves trust in field reporting",
      "Strong site records support quality, claims, and handover",
      "AI helps teams use visual data operationally instead of archivally",
    ],
  },
  {
    slug: "space-connectors",
    title: "Space Connectors: Integrating Your Construction Tech Stack",
    description:
      "Discover how Space Connectors unify ERP, project management, and field systems so teams can reduce duplicate entry and keep data moving in real time.",
    category: "Integrations",
    readTime: "5 min read",
    intro:
      "Construction teams rarely suffer from a lack of software. They suffer from disconnected software. Integration is what turns separate systems into one operational environment.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "Why Integrations Matter",
        paragraphs: [
          "When schedules, budgets, RFIs, and documents live in different tools, teams spend time reconciling information instead of using it.",
        ],
        bullets: [
          "Less duplicate data entry",
          "Fewer mismatches across systems",
          "Faster reporting and executive visibility",
          "Better automation across project workflows",
        ],
      },
      {
        heading: "What Strong Connectors Do",
        paragraphs: [
          "The best connectors move more than raw data. They preserve context, map fields intelligently, and keep updates synchronized as work changes.",
        ],
        bullets: [
          "Bi-directional sync where needed",
          "AI-assisted field mapping and transformation",
          "Real-time updates between project systems",
          "Support for both standard and custom integrations",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "Good integrations improve trust in reporting, reduce manual coordination overhead, and make every other AI workflow more useful because the data foundation is stronger.",
        ],
      },
    ],
    takeaways: [
      "Disconnected tools create hidden operational waste",
      "Connectors protect data consistency across systems",
      "Integration quality directly affects automation quality",
      "A unified stack improves speed, visibility, and trust",
    ],
  },
  {
    slug: "space-vision",
    title: "Space Vision: AR Site Intelligence for Construction",
    description:
      "Discover how Space Vision combines wearable capture, AI analysis, and spatial comparison to improve site visibility, progress tracking, and field decision-making.",
    category: "Site Intelligence",
    readTime: "6 min read",
    intro:
      "Space Vision extends site awareness beyond manual walkthroughs by turning wearable capture and visual AI into continuous project intelligence. Teams gain a clearer picture of progress, quality, and emerging risk without waiting for weekly summaries.",
    imageSrc: FIELD_IMAGE,
    sections: [
      {
        heading: "What Space Vision Changes",
        paragraphs: [
          "Most site supervision depends on limited snapshots: someone visits, takes notes, and reports back later. Space Vision creates a broader and more timely view of the project as work is happening.",
        ],
      },
      {
        heading: "How the System Works",
        paragraphs: [
          "Wearables and field imagery capture the jobsite continuously. AI then interprets that visual stream to detect progress, deviations, and quality signals faster than manual review alone.",
        ],
        bullets: [
          "Hands-free image capture from the field",
          "Progress and deviation analysis from visual data",
          "Spatial comparison against plans or BIM context",
          "Automated reporting for supervisors and project leaders",
        ],
      },
      {
        heading: "Why It Matters",
        paragraphs: [
          "Better visual intelligence helps teams catch issues earlier, scale supervision more effectively, and support owner reporting with clearer proof of work in place.",
        ],
      },
    ],
    takeaways: [
      "Continuous visual intelligence improves site awareness",
      "Wearable capture reduces reporting friction for field teams",
      "AI turns imagery into progress and risk signals",
      "Stronger visual records support quality, schedule, and reporting outcomes",
    ],
  },
  {
    slug: "ultimate-construction-project-management-guide",
    title: "Ultimate Construction Project Management Guide",
    description:
      "A practical construction project management guide covering planning, communication, cost control, documentation, scheduling, and continuous improvement.",
    category: "Project Management",
    readTime: "8 min read",
    intro:
      "Strong construction project management is not one discipline. It is the coordination of planning, documents, schedules, contracts, people, and risk. The best teams build repeatable systems around all of them.",
    imageSrc: DEFAULT_GUIDE_IMAGE,
    sections: [
      {
        heading: "The Core Pillars",
        paragraphs: [
          "Construction project management works best when leaders treat scope, schedule, cost, quality, and communication as interconnected control systems rather than separate reporting streams.",
        ],
        bullets: [
          "Clear scope and decision ownership",
          "Reliable schedule control and look-ahead planning",
          "Disciplined cost and change management",
          "Strong documentation and field-to-office coordination",
        ],
      },
      {
        heading: "Where Projects Usually Break Down",
        paragraphs: [
          "Delays and overruns often come from weak handoffs, late decisions, unclear records, and poor visibility into emerging constraints rather than one dramatic failure.",
        ],
      },
      {
        heading: "How Modern Teams Improve",
        paragraphs: [
          "The highest-performing teams use connected systems, structured workflows, and AI-assisted reporting to reduce friction and improve the speed of decision-making across the project lifecycle.",
        ],
      },
    ],
    takeaways: [
      "Good project management is coordinated control across multiple disciplines",
      "Most project pain comes from slow decisions and weak information flow",
      "Documentation and communication are operational levers, not admin overhead",
      "Connected workflows improve predictability at every stage",
    ],
  },
  {
    slug: "how-we-migrate-you",
    title: "How We Migrate You from Another Platform to Space AI",
    description:
      "A step-by-step guide to moving projects, documents, RFIs, submittals, schedules, and contacts from Procore, Buildertrend, Monday.com, or any other platform to Space AI — with zero data loss and minimal disruption.",
    category: "Migration",
    readTime: "6 min read",
    intro:
      "Switching construction software feels risky because your project history lives in the old system. Space AI's white-glove migration team transfers your active data, validates it against your real workflows, and keeps your team productive throughout. Here is exactly what moves, what gets reconfigured, and how long it takes.",
    sections: [
      {
        heading: "What We Transfer",
        paragraphs: [
          "We start by taking an inventory of your active data in the source platform. Our migration specialists map it into Space AI's structure so nothing meaningful is left behind.",
        ],
        bullets: [
          "Projects — active and recently closed, with custom fields preserved",
          "Documents and drawing registers, including version history and markups",
          "RFIs and submittals with their full status and correspondence threads",
          "Schedules — imported and rebuilt into Space AI's scheduling engine",
          "Contacts — owners, architects, consultants, subs, and vendors",
          "Change orders, daily logs, punch lists, and inspection records",
        ],
      },
      {
        heading: "How Long Migration Takes",
        paragraphs: [
          "Most migrations complete in 1–2 weeks. Small residential portfolios can move in days; large enterprise rollouts with parallel operation typically take 2–4 weeks so your team can transition at its own pace.",
        ],
      },
      {
        heading: "The Reconfiguration Effort",
        paragraphs: [
          "Data migration is only half the work. We also re-map your workflows so the new system matches how your team actually operates.",
        ],
        bullets: [
          "User roles, permissions, and approval chains rebuilt to match your org",
          "RFI and submittal routing recreated from your existing templates",
          "Report and dashboard layouts configured from your current KPIs",
          "Integrations — email, accounting, BIM tools, and existing connectors",
        ],
      },
      {
        heading: "How We Keep You Running",
        paragraphs: [
          "We run Space AI in parallel with your old system during the transition, provide live training for office and field teams, and assign a dedicated migration specialist who stays on the account through go-live and the first full project cycle.",
        ],
      },
    ],
    takeaways: [
      "Active data — projects, documents, RFIs, submittals, schedules, contacts — is fully transferred",
      "Most teams go live in 1–2 weeks; large rollouts use parallel operation",
      "Workflow reconfiguration is included, not an add-on service",
      "A dedicated migration specialist supports you through go-live and beyond",
    ],
  },
];

export const getAllGuideArticles = (): GuideArticle[] => guideArticles;

export const getGuideArticleBySlug = (
  slug: string
): GuideArticle | undefined => guideArticles.find((guide) => guide.slug === slug);

