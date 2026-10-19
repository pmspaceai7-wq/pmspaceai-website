import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IntegrationDetailPage, { type ProductData } from "./IntegrationDetailPage";

export const revalidate = 3600;

const products: Record<string, ProductData> = {
  "space-sign": {
    name: "Space Sign",
    slug: "space-sign",
    url: "https://space-sign.ai",
    tagline: "AI Contract Analysis & Electronic Signatures for Construction",
    category: "Contracts & E-Signatures",
    accentColor: "bg-indigo-900/50",
    badgeColor: "bg-indigo-500/20 border border-indigo-500/30 text-indigo-300",
    metaDescription:
      "Connect pmspace.ai with Space Sign to automate construction contract workflows. Signed agreements flow directly into project records — no manual uploads.",
    heroDescription:
      "Space Sign is the AI-powered contract and e-signature platform built for construction and legal teams. When connected with pmspace.ai, every executed contract — subcontractor agreements, change orders, owner approvals — is automatically attached to the corresponding project record. Teams stop chasing down signed documents and start executing work the moment ink (digital or otherwise) is dry.",
    dataFlowFrom: "Project context, contract templates, signatory lists, milestone triggers",
    dataFlowTo: "Executed contracts, audit trails, signature timestamps, approval status",
    howItWorks: [
      {
        step: 1,
        title: "Initiate from pmspace.ai",
        description:
          "When a change order or subcontract is created in pmspace.ai, Space Sign is triggered automatically. The right contract template is selected based on document type and jurisdiction.",
      },
      {
        step: 2,
        title: "AI reviews and routes the contract",
        description:
          "Space Sign's AI engine checks the contract against your clause library, flags non-standard terms, and routes it to the correct signatories in the right order — no manual routing.",
      },
      {
        step: 3,
        title: "Signed document flows back",
        description:
          "Once executed, the signed PDF, audit trail, and timestamp are pushed back to pmspace.ai and attached to the project. The contract status in the project dashboard updates instantly.",
      },
    ],
    features: [
      {
        title: "Change order automation",
        description:
          "Change orders initiated in pmspace.ai trigger Space Sign workflows automatically, capturing approvals before work begins.",
      },
      {
        title: "Subcontractor onboarding",
        description:
          "New subcontractors added to a project receive their agreements for signature without leaving either platform.",
      },
      {
        title: "Owner approval tracking",
        description:
          "Track which owner-facing documents are pending, signed, or rejected — directly inside the pmspace.ai project timeline.",
      },
      {
        title: "Compliance audit trail",
        description:
          "Every signature event is logged with IP, timestamp, and device. Accessible from pmspace.ai for compliance and dispute resolution.",
      },
      {
        title: "Contract clause alerts",
        description:
          "Space Sign flags unusual liability or payment clauses before execution, surfacing risks inside your project management workflow.",
      },
      {
        title: "Milestone-locked payments",
        description:
          "Payment authorizations in pmspace.ai can be gated on contract execution, preventing disbursement before agreements are signed.",
      },
    ],
    useCases: [
      "Signing change orders before field crews begin additional scope",
      "Issuing and tracking subcontractor agreements across a multi-trade project",
      "Getting owner signatures on shop drawings or submittals",
      "Managing NDA and access agreements for site personnel",
      "Digitizing lien waiver collection at project closeout",
    ],
    personas: [
      "Project Managers who need contracts linked to project milestones",
      "Contract Administrators managing subcontractor paperwork",
      "Construction Attorneys reviewing agreement terms before execution",
      "Owners and Developers approving scopes and budgets",
      "Finance teams gating payments on signed documentation",
    ],
  },

  spacecapture: {
    name: "Space Capture",
    slug: "spacecapture",
    url: "https://spacecapture.ai",
    tagline: "AI Field Inspection & Site Documentation for Construction Teams",
    category: "Field Inspections",
    accentColor: "bg-green-900/50",
    badgeColor: "bg-green-500/20 border border-green-500/30 text-green-300",
    metaDescription:
      "Connect pmspace.ai with Space Capture to bring field inspection data, progress photos, and audit reports directly into your project management dashboard.",
    heroDescription:
      "Space Capture is the AI-powered field inspection and site documentation platform used by construction and industrial teams. When connected with pmspace.ai, every photo, inspection checklist, and audit report captured on-site is automatically linked to the corresponding project, location, and schedule activity. Project managers get real-time field visibility without waiting for end-of-day reports.",
    dataFlowFrom: "Project locations, inspection templates, schedule activities, open issues",
    dataFlowTo: "Progress photos, inspection results, defect lists, completion status",
    howItWorks: [
      {
        step: 1,
        title: "Field team opens Space Capture on-site",
        description:
          "Inspectors and supervisors use Space Capture on mobile to complete checklists, photograph progress, and log defects — all tied to specific project locations defined in pmspace.ai.",
      },
      {
        step: 2,
        title: "AI processes and tags the content",
        description:
          "Space Capture's AI engine categorizes photos by location and activity, identifies defects, and flags items that need remediation — organizing data before it reaches the office.",
      },
      {
        step: 3,
        title: "Records sync to pmspace.ai",
        description:
          "Inspection reports, tagged photos, and issue lists flow into the relevant project in pmspace.ai. Schedule activities update their completion status based on inspection sign-offs.",
      },
    ],
    features: [
      {
        title: "Progress photo records",
        description:
          "Site photos are automatically dated, geotagged, and attached to the relevant schedule activity in pmspace.ai.",
      },
      {
        title: "Defect tracking",
        description:
          "Defects logged in Space Capture become open issues in pmspace.ai, assigned to the responsible trade with a due date.",
      },
      {
        title: "Daily field reports",
        description:
          "End-of-day field reports from Space Capture aggregate into the project log in pmspace.ai — no duplicate data entry.",
      },
      {
        title: "Milestone documentation",
        description:
          "Inspection sign-offs in Space Capture can mark schedule milestones as complete in pmspace.ai, keeping the project timeline accurate.",
      },
      {
        title: "Quality audit trails",
        description:
          "Every inspection event — who did it, when, what they found — is recorded and accessible from the project record for owner or lender reporting.",
      },
      {
        title: "Safety incident logging",
        description:
          "Safety observations and near-misses captured in the field are linked to the project safety register in pmspace.ai.",
      },
    ],
    useCases: [
      "Daily progress documentation tied to schedule activities",
      "Pre-pour and pre-close inspections before concrete or drywall",
      "Quality audits at structural, MEP, and finishes stages",
      "Punch list documentation during project closeout",
      "Owner walk documentation with timestamped photo evidence",
    ],
    personas: [
      "Site Supervisors doing daily rounds and documenting progress",
      "Quality Control Managers running formal inspection programs",
      "Project Engineers tracking open defects across a site",
      "Project Managers who need field data linked to schedule status",
      "Owners and lenders requesting milestone documentation",
    ],
  },

  spacelizit: {
    name: "Space Lizit",
    slug: "spacelizit",
    url: "https://spacelizit.com",
    tagline: "AI Immigration Automation for Construction Workforce Compliance",
    category: "Workforce & Immigration",
    accentColor: "bg-yellow-900/50",
    badgeColor: "bg-yellow-500/20 border border-yellow-500/30 text-yellow-300",
    metaDescription:
      "Connect pmspace.ai with Space Lizit to manage international workforce compliance. Track visa status, work authorization, and immigration deadlines alongside your project schedule.",
    heroDescription:
      "Space Lizit is an AI immigration automation platform for law firms and enterprises managing H-1B, L-1, O-1, and EB-2 NIW petitions. For construction companies hiring specialized international talent — structural engineers, BIM specialists, project directors — Space Lizit connects with pmspace.ai to ensure the right personnel are authorized and available when your project schedule demands them. Workforce compliance and project planning stop operating in separate silos.",
    dataFlowFrom: "Project resource requirements, assignment dates, location and role data",
    dataFlowTo: "Visa status, work authorization expiry, petition milestones, compliance alerts",
    howItWorks: [
      {
        step: 1,
        title: "Resource assignment triggers compliance check",
        description:
          "When a specialist is assigned to a project in pmspace.ai, Space Lizit is queried to confirm their work authorization is valid for the assignment duration and jurisdiction.",
      },
      {
        step: 2,
        title: "Immigration timeline syncs with project schedule",
        description:
          "Space Lizit's petition milestones — filing dates, approval windows, transfer timelines — are surfaced inside pmspace.ai so project managers can plan around them.",
      },
      {
        step: 3,
        title: "Alerts before authorization gaps",
        description:
          "Space Lizit sends advance alerts to both the HR team and the project manager in pmspace.ai when a team member's authorization is expiring relative to their project assignment end date.",
      },
    ],
    features: [
      {
        title: "Work authorization status on resource profiles",
        description:
          "View current visa status and work authorization validity directly from the team member's profile in pmspace.ai.",
      },
      {
        title: "Expiry alerts tied to project duration",
        description:
          "Alerts trigger when authorization expiry falls within the project window, giving HR lead time to file extensions.",
      },
      {
        title: "Jurisdiction compliance checks",
        description:
          "Projects spanning multiple states or countries trigger automatic checks for the relevant visa categories and work permit requirements.",
      },
      {
        title: "Petition milestone tracking",
        description:
          "USCIS filing dates and decision timelines are visible alongside project milestones so workforce planning accounts for immigration lead times.",
      },
      {
        title: "Onboarding coordination",
        description:
          "New hires with pending petitions are flagged in pmspace.ai until authorization is confirmed, preventing premature project assignments.",
      },
      {
        title: "Audit-ready compliance records",
        description:
          "Immigration documents and authorization history are stored in Space Lizit and referenced from the project record for labor compliance audits.",
      },
    ],
    useCases: [
      "Verifying that international BIM or structural specialists are authorized before project start",
      "Planning project schedules around visa renewal timelines for key personnel",
      "Managing H-1B transfers when a specialist moves between projects",
      "Ensuring compliance on multi-state construction projects with different labor requirements",
      "Onboarding international project directors with O-1 or L-1 visas",
    ],
    personas: [
      "HR Directors managing a workforce that includes international specialists",
      "Project Managers who depend on specific individuals with specialized skills",
      "Legal Counsel tracking active petitions across the organization",
      "Finance teams budgeting for immigration legal fees per project",
      "Construction executives managing workforce across US, India, UAE, and Singapore",
    ],
  },

  spacehr: {
    name: "SpaceHR",
    slug: "spacehr",
    url: "https://spacehr.net",
    tagline: "AI-Powered HRMS with Payroll, Performance, and Workforce Analytics",
    category: "HR & Workforce",
    accentColor: "bg-pink-900/50",
    badgeColor: "bg-pink-500/20 border border-pink-500/30 text-pink-300",
    metaDescription:
      "Connect pmspace.ai with SpaceHR to link workforce management and payroll with project schedules. Crew assignments, labor costs, and attendance flow directly into project tracking.",
    heroDescription:
      "SpaceHR is an AI-powered human resources management platform covering payroll automation, performance management, and workforce analytics. When connected with pmspace.ai, crew scheduling, labor cost data, and attendance records flow directly into project management. Project managers see accurate labor costs in real time. HR sees which projects are creating workforce strain. Both teams work from the same data.",
    dataFlowFrom: "Project schedules, crew requirements, trade allocations, budget codes",
    dataFlowTo: "Crew assignments, hours worked, payroll costs, attendance records, performance flags",
    howItWorks: [
      {
        step: 1,
        title: "Project creates a crew demand in pmspace.ai",
        description:
          "When a project phase is scheduled, pmspace.ai generates a resource demand — trades, headcount, and start dates. This is sent to SpaceHR to match against available workforce.",
      },
      {
        step: 2,
        title: "SpaceHR assigns and confirms crew",
        description:
          "SpaceHR matches available workers to the demand, checks for conflicts, handles shift planning, and confirms the assignment back to pmspace.ai with the confirmed roster.",
      },
      {
        step: 3,
        title: "Time and cost data closes the loop",
        description:
          "Daily attendance, hours worked, and payroll costs flow from SpaceHR back into the project's cost tracking in pmspace.ai, keeping actual vs. budgeted labor accurate.",
      },
    ],
    features: [
      {
        title: "Real-time labor cost tracking",
        description:
          "Payroll data from SpaceHR updates the labor cost line in pmspace.ai project budgets without manual entry.",
      },
      {
        title: "Crew scheduling from project demand",
        description:
          "Schedule activities in pmspace.ai generate worker demand that SpaceHR fulfills, closing the gap between planning and staffing.",
      },
      {
        title: "Attendance linked to project activities",
        description:
          "On-site attendance captured through SpaceHR is linked to specific schedule activities, flagging gaps before they cause delays.",
      },
      {
        title: "Trade utilization reports",
        description:
          "See how each trade is distributed across projects, identifying over-allocation before it creates quality or schedule problems.",
      },
      {
        title: "Subcontractor workforce visibility",
        description:
          "Track sub-contractor headcount and hours the same way direct labor is tracked — without requiring subs to change their own systems.",
      },
      {
        title: "Performance flags on project impact",
        description:
          "Persistent performance issues logged in SpaceHR are surfaced in pmspace.ai when the same worker is assigned to a critical path activity.",
      },
    ],
    useCases: [
      "Tracking total labor cost per project with automatic payroll data",
      "Scheduling crew across multiple active construction sites",
      "Managing shift rotations on 24-hour construction programs",
      "Monitoring subcontractor labor hours against contracted quantities",
      "Generating labor productivity reports for owner reporting",
    ],
    personas: [
      "Project Managers who need accurate labor cost data without waiting for finance",
      "HR Directors managing hundreds of field workers across multiple sites",
      "Finance Controllers reconciling payroll with project budgets",
      "Superintendents planning daily crew deployment",
      "Construction executives tracking workforce utilization across the portfolio",
    ],
  },

  spacelean: {
    name: "SpaceLean",
    slug: "spacelean",
    url: "https://spacelean.ai",
    tagline: "AI-Native Lean Construction Scheduling with BIM Integration",
    category: "Scheduling & Planning",
    accentColor: "bg-cyan-900/50",
    badgeColor: "bg-cyan-500/20 border border-cyan-500/30 text-cyan-300",
    metaDescription:
      "Connect pmspace.ai with SpaceLean for AI-driven lean construction scheduling. Critical path analysis, 4D BIM, and look-ahead planning flow directly into project oversight.",
    heroDescription:
      "SpaceLean is an AI-native lean project management and construction scheduling platform built around Last Planner System principles with 4D BIM integration. When connected with pmspace.ai, the construction schedule is not just a document — it becomes a live intelligence layer. Delay predictions, critical path analysis, and look-ahead plans from SpaceLean feed directly into pmspace.ai's project oversight, giving owners, developers, and project directors a single source of truth for schedule health.",
    dataFlowFrom: "Project milestones, budget baselines, risk flags, stakeholder reporting needs",
    dataFlowTo: "Critical path status, look-ahead plans, delay predictions, BIM-linked activities, plan percent complete",
    howItWorks: [
      {
        step: 1,
        title: "Master schedule is built in SpaceLean",
        description:
          "The construction team builds the master schedule in SpaceLean with 4D BIM linking, critical path analysis, and constraint identification. The baseline is shared with pmspace.ai.",
      },
      {
        step: 2,
        title: "Weekly look-ahead syncs to pmspace.ai",
        description:
          "SpaceLean's rolling 3-6 week look-ahead plans are automatically pushed to pmspace.ai, giving project managers and owners a view of near-term work without logging into the scheduling tool.",
      },
      {
        step: 3,
        title: "AI delay alerts trigger in pmspace.ai",
        description:
          "SpaceLean's predictive engine identifies emerging delays on the critical path. These alerts surface in pmspace.ai so decisions can be made — resequencing, overtime, procurement — before the impact materializes.",
      },
    ],
    features: [
      {
        title: "Predictive critical path analysis",
        description:
          "SpaceLean's AI identifies activities trending toward delay and surfaces the cascade impact in pmspace.ai before it reaches the milestone.",
      },
      {
        title: "4D BIM timeline view",
        description:
          "Schedule activities linked to BIM elements in SpaceLean are visible in pmspace.ai, so stakeholders can see what gets built when.",
      },
      {
        title: "Look-ahead plans in project dashboard",
        description:
          "The 3-week look-ahead from SpaceLean's Last Planner workflow appears directly in the pmspace.ai project dashboard.",
      },
      {
        title: "Plan Percent Complete (PPC) tracking",
        description:
          "Weekly PPC scores from SpaceLean's pull planning sessions are tracked as a leading indicator of schedule health in pmspace.ai.",
      },
      {
        title: "Constraint logging across teams",
        description:
          "Constraints logged by trade foremen in SpaceLean become action items in pmspace.ai with assigned owners and resolution deadlines.",
      },
      {
        title: "Milestone-level schedule updates",
        description:
          "Key milestone dates updated in SpaceLean propagate to pmspace.ai automatically, keeping stakeholder-facing reporting current.",
      },
    ],
    useCases: [
      "Running a Last Planner pull planning session with trade foremen and feeding results into project oversight",
      "Identifying which activities on the critical path are at risk three weeks before the delay occurs",
      "Linking the 4D construction sequence to owner milestone reporting in pmspace.ai",
      "Tracking schedule recovery after a delay event",
      "Comparing planned vs actual progress on a week-by-week basis",
    ],
    personas: [
      "Project Managers who need schedule intelligence without manually parsing a Gantt chart",
      "Schedulers building and maintaining master programs in SpaceLean",
      "Owners and developers who need milestone status without a daily briefing",
      "Construction Directors managing schedule risk across a portfolio",
      "BIM Coordinators linking model elements to construction sequences",
    ],
  },

  spacenexus: {
    name: "SpaceNexus",
    slug: "spacenexus",
    url: "https://spacenexus.net",
    tagline: "Enterprise Virtual Data Room for Construction Asset Transactions",
    category: "Document Management & Finance",
    accentColor: "bg-amber-900/50",
    badgeColor: "bg-amber-500/20 border border-amber-500/30 text-amber-300",
    metaDescription:
      "Connect pmspace.ai with SpaceNexus to organize construction project data into a secure virtual data room for lenders, investors, and M&A due diligence.",
    heroDescription:
      "SpaceNexus is an enterprise-grade virtual data room platform built for M&A transactions, capital raising, and secure legal document sharing. For construction and real estate developers, the connection between pmspace.ai and SpaceNexus means that project documentation — contracts, permits, inspection records, financial reports — can be assembled into a structured, permission-controlled data room for lenders, joint venture partners, or acquisition buyers without starting from scratch every time.",
    dataFlowFrom: "Project documents, contracts, inspection reports, schedule data, cost reports",
    dataFlowTo: "Organized data room packages, access logs, NDA tracking, due diligence Q&A",
    howItWorks: [
      {
        step: 1,
        title: "Select documents from pmspace.ai",
        description:
          "When preparing for a transaction or lender draw, users select the relevant documents from pmspace.ai — contracts, inspection sign-offs, schedule baselines, cost reports — and push them to SpaceNexus.",
      },
      {
        step: 2,
        title: "SpaceNexus organizes the data room",
        description:
          "SpaceNexus automatically indexes the documents into the correct data room folders, applies watermarks, and sets permission levels for each document category based on the counterparty role.",
      },
      {
        step: 3,
        title: "Access and activity feed back to pmspace.ai",
        description:
          "Document access logs, due diligence questions, and NDA execution status from SpaceNexus are referenced back in pmspace.ai so the project team knows exactly what information has been reviewed by which party.",
      },
    ],
    features: [
      {
        title: "Lender draw package assembly",
        description:
          "Pull the exact documents required for a construction loan draw directly from pmspace.ai into a structured SpaceNexus room, without manual collation.",
      },
      {
        title: "Acquisition due diligence rooms",
        description:
          "Assemble project-level documentation for a portfolio sale or asset acquisition in a structured VDR with full access controls.",
      },
      {
        title: "Investor reporting packages",
        description:
          "Periodic investor updates using live project data from pmspace.ai, organized and distributed through SpaceNexus.",
      },
      {
        title: "Document watermarking and audit trail",
        description:
          "Every document accessed in the data room is watermarked and logged. The audit trail is accessible from pmspace.ai for the project record.",
      },
      {
        title: "NDA management",
        description:
          "NDAs for data room access are managed in SpaceNexus and their execution status is tracked in the pmspace.ai project record.",
      },
      {
        title: "Permission-layered access",
        description:
          "Different counterparties (lenders, equity partners, buyers) see only the document categories appropriate to their role — controlled from a single interface.",
      },
    ],
    useCases: [
      "Assembling a construction loan draw package for a lender review",
      "Preparing project documentation for a joint venture partner's technical due diligence",
      "Organizing records for a portfolio acquisition across 5-15 projects",
      "Providing equity investors with access to project financials and progress reports",
      "Creating a permanent project record room for future asset management or disposition",
    ],
    personas: [
      "Real Estate Developers raising construction debt or equity",
      "Project Finance teams preparing lender reporting packages",
      "Construction executives supporting M&A transactions on owned assets",
      "Legal teams managing NDAs and counterparty access",
      "Asset Managers documenting project history for future sale",
    ],
  },

  spacecrm: {
    name: "SpaceCRM",
    slug: "spacecrm",
    url: "https://spacecrm.net",
    tagline: "AI-Powered Multi-Channel CRM for Construction Business Development",
    category: "Sales & CRM",
    accentColor: "bg-orange-900/50",
    badgeColor: "bg-orange-500/20 border border-orange-500/30 text-orange-300",
    metaDescription:
      "Connect pmspace.ai with SpaceCRM to close the loop between business development and project execution. Won opportunities become live projects without manual handoff.",
    heroDescription:
      "SpaceCRM is an AI-powered multi-channel CRM that automates outreach across email, LinkedIn, and WhatsApp — built for construction, engineering, and development businesses with complex, high-value sales cycles. The connection with pmspace.ai closes the most expensive gap in construction operations: the bid-to-build handoff. When a project is won in SpaceCRM, all the context — scope, client expectations, budget, key contacts — flows directly into pmspace.ai so execution teams start informed, not blank.",
    dataFlowFrom: "Project execution updates, milestone completions, delivery risks, invoice status",
    dataFlowTo: "Won opportunity data, scope details, client contacts, budget estimates, relationship history",
    howItWorks: [
      {
        step: 1,
        title: "Opportunity is won in SpaceCRM",
        description:
          "When a bid is accepted and the deal is moved to 'Won' in SpaceCRM, the opportunity data — client details, scope summary, budget, key contacts — is automatically sent to pmspace.ai to create the project record.",
      },
      {
        step: 2,
        title: "pmspace.ai creates the project from CRM data",
        description:
          "A new project is created in pmspace.ai pre-populated with the client information, agreed scope, budget baseline, and key stakeholders from SpaceCRM. No re-entry of data that was already captured during the sales process.",
      },
      {
        step: 3,
        title: "Delivery milestones feed back into client relationship",
        description:
          "As the project progresses in pmspace.ai, milestone completions and delivery updates are pushed back to SpaceCRM — keeping the client-facing account record current and enabling proactive outreach at key moments.",
      },
    ],
    features: [
      {
        title: "Zero-friction bid-to-build handoff",
        description:
          "Won opportunities in SpaceCRM create project records in pmspace.ai automatically — no copy-paste, no lost context, no delayed start.",
      },
      {
        title: "Client data shared across platforms",
        description:
          "Contact details, communication history, and relationship notes from SpaceCRM are accessible inside the pmspace.ai project record.",
      },
      {
        title: "Budget baseline from proposal",
        description:
          "The budget agreed during sales is pre-loaded as the project baseline in pmspace.ai, giving cost tracking a real starting point.",
      },
      {
        title: "Milestone completion triggers client outreach",
        description:
          "Key milestones in pmspace.ai can trigger automated client update sequences in SpaceCRM — keeping owners informed without manual emails.",
      },
      {
        title: "Pipeline-to-portfolio view",
        description:
          "See upcoming projects in the SpaceCRM pipeline alongside active projects in pmspace.ai — so resource planning looks ahead of contract execution.",
      },
      {
        title: "Invoice and payment status in CRM",
        description:
          "Invoice issuance and payment receipt from pmspace.ai finance tracking is reflected in the SpaceCRM account record for client relationship management.",
      },
    ],
    useCases: [
      "Automatically creating a pmspace.ai project when a construction contract is signed",
      "Sharing scope and client expectations from the sales process with the delivery team",
      "Triggering a client satisfaction outreach at the 30-day project mark",
      "Using pipeline data in SpaceCRM to plan resource capacity in pmspace.ai 6-8 weeks ahead",
      "Tracking repeat client projects from bid to delivery in one connected view",
    ],
    personas: [
      "Business Development Directors closing construction contracts and handing to operations",
      "Project Managers who receive projects and need context from the sales process",
      "Construction CEOs who want visibility from pipeline to delivery in one place",
      "Account Managers maintaining client relationships through the delivery phase",
      "Operations Directors planning capacity based on upcoming awarded work",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products[params.slug];
  if (!product) return {};

  return {
    title: `pmspace.ai + ${product.name} Integration | Space AI`,
    description: product.metaDescription,
    openGraph: {
      title: `pmspace.ai + ${product.name} Integration | Space AI`,
      description: product.metaDescription,
      type: "website",
      url: `https://pmspace.ai/integrations/${product.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title: `pmspace.ai + ${product.name} Integration`,
      description: product.metaDescription,
    },
    alternates: {
      canonical: `https://pmspace.ai/integrations/${product.slug}/`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = products[params.slug];
  if (!product) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `pmspace.ai + ${product.name} Integration`,
    description: product.metaDescription,
    url: `https://pmspace.ai/integrations/${product.slug}/`,
    about: [
      {
        "@type": "SoftwareApplication",
        name: "Space AI",
        url: "https://pmspace.ai",
        "@id": "https://pmspace.ai/#organization",
      },
      {
        "@type": "SoftwareApplication",
        name: product.name,
        url: product.url,
        provider: {
          "@id": "https://pmspace.ai/#organization",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IntegrationDetailPage product={product} />
    </>
  );
}
