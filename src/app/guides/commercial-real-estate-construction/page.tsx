// Commercial Real Estate Construction Management Guide - Task 62 (Part 3)
// SEO Target: "commercial real estate construction management", "CRE development software"
// Pattern: Industry-specific guide with specialized content

import { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  CheckCircle,
  ArrowRight,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  AlertTriangle,
  Layers,
  DollarSign,
  Zap,
  Users,
  BarChart3,
  Target,
  Building2,
  Ruler,
  Key,
  Calendar,
  PieChart,
  Briefcase,
  Home,
  Store,
  Hotel,
  Factory,
  Warehouse,
  Lightbulb,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Commercial Real Estate Construction Management Guide 2025 | Space AI",
  description:
    "Master commercial real estate construction with AI-powered management tools. Guide for office buildings, retail centers, mixed-use developments, and industrial facilities.",
  keywords:
    "commercial real estate construction management, CRE development software, office building construction, retail construction management, mixed-use development, industrial construction, tenant improvement management, commercial construction software",
  openGraph: {
    title: "Commercial Real Estate Construction Management Guide 2025 | Space AI",
    description:
      "Master commercial real estate construction with AI-powered management tools for office, retail, mixed-use, and industrial projects.",
    type: "article",
    url: "https://pmspace.ai/guides/commercial-real-estate-construction/",
    images: [
      {
        url: "/features/commercial-construction-og.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Real Estate Construction Management Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Real Estate Construction Management Guide 2025",
    description:
      "AI-powered construction management for commercial real estate development projects.",
  },
  alternates: {
    canonical: "https://pmspace.ai/guides/commercial-real-estate-construction/",
  },
};

const tableOfContents = [
  { id: "introduction", title: "Introduction to CRE Construction", level: 1 },
  { id: "project-types", title: "Commercial Project Types", level: 1 },
  { id: "investment-considerations", title: "Investment Considerations", level: 1 },
  { id: "development-phases", title: "Development Phases", level: 1 },
  { id: "tenant-coordination", title: "Tenant Coordination", level: 1 },
  { id: "financial-management", title: "Financial Management", level: 1 },
  { id: "pmspace-features", title: "Space AI for CRE", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

const projectTypes = [
  {
    type: "Office Buildings",
    icon: <Building2 className="w-8 h-8" />,
    subtypes: ["Class A/B/C Office Towers", "Corporate Campuses", "Medical Office Buildings", "Creative Office/Flex"],
    keyMetrics: ["RSF (Rentable Square Feet)", "Efficiency Ratio", "Parking Ratio", "TI Allowance"],
    typicalBudget: "$200-500/SF",
    timeline: "18-36 months",
    challenges: ["Tenant fit-out coordination", "LEED certification", "Lobby/amenity design", "Base building vs. TI"],
  },
  {
    type: "Retail Centers",
    icon: <Store className="w-8 h-8" />,
    subtypes: ["Shopping Malls", "Strip Centers", "Lifestyle Centers", "Outlet Centers"],
    keyMetrics: ["GLA", "Sales PSF", "Anchor Tenant %", "Parking Stalls"],
    typicalBudget: "$150-350/SF",
    timeline: "12-24 months",
    challenges: ["Anchor tenant requirements", "Co-tenancy clauses", "Seasonal opening targets", "Signage/visibility"],
  },
  {
    type: "Mixed-Use Developments",
    icon: <Layers className="w-8 h-8" />,
    subtypes: ["Vertical Mixed-Use", "Horizontal Mixed-Use", "Transit-Oriented Development", "Urban Infill"],
    keyMetrics: ["Residential Units", "Commercial GLA", "FAR", "Density"],
    typicalBudget: "$250-600/SF",
    timeline: "24-48 months",
    challenges: ["Zoning complexity", "Phased delivery", "Multiple ownership", "Parking allocation"],
  },
  {
    type: "Industrial/Logistics",
    icon: <Warehouse className="w-8 h-8" />,
    subtypes: ["Distribution Centers", "Manufacturing Facilities", "Data Centers", "Cold Storage"],
    keyMetrics: ["Clear Height", "Loading Docks", "Power Capacity", "Truck Courts"],
    typicalBudget: "$80-200/SF",
    timeline: "8-18 months",
    challenges: ["Site/foundation work", "Power infrastructure", "Specialized systems", "Environmental compliance"],
  },
  {
    type: "Hospitality",
    icon: <Hotel className="w-8 h-8" />,
    subtypes: ["Full-Service Hotels", "Select-Service Hotels", "Resort Properties", "Extended Stay"],
    keyMetrics: ["Keys/Rooms", "FF&E Budget", "PIP Requirements", "ADR Targets"],
    typicalBudget: "$150-500/key",
    timeline: "18-36 months",
    challenges: ["Brand standards", "FF&E procurement", "Pre-opening operations", "Seasonal deadlines"],
  },
  {
    type: "Multifamily",
    icon: <Home className="w-8 h-8" />,
    subtypes: ["Market-Rate Apartments", "Affordable Housing", "Student Housing", "Senior Living"],
    keyMetrics: ["Unit Count", "Unit Mix", "Rent PSF", "Amenity Package"],
    typicalBudget: "$200-400/SF",
    timeline: "18-30 months",
    challenges: ["Phased lease-up", "Amenity timing", "Affordable compliance", "Punch list volume"],
  },
];

const investmentConsiderations = [
  {
    factor: "Return on Investment (ROI)",
    description: "Commercial construction decisions are driven by expected investment returns and payback periods.",
    metrics: ["Cap Rate", "IRR", "Cash-on-Cash Return", "NPV"],
    pmspaceValue: "Real-time budget tracking with ROI impact analysis for change orders",
  },
  {
    factor: "Time-to-Revenue",
    description: "Every day of construction delay represents lost rental income or operating revenue.",
    metrics: ["Revenue per Day", "Lease Commencement Date", "Stabilization Timeline"],
    pmspaceValue: "AI schedule prediction with revenue impact forecasting",
  },
  {
    factor: "Capital Structure",
    description: "Construction financing terms create constraints around disbursement schedules and cost categories.",
    metrics: ["Loan-to-Cost", "Interest Reserve", "Hard/Soft Cost Ratio"],
    pmspaceValue: "Draw request automation with lender reporting integration",
  },
  {
    factor: "Risk Mitigation",
    description: "Protecting invested capital through insurance, guarantees, and contingency management.",
    metrics: ["Contingency %", "Insurance Coverage", "Bonding Requirements"],
    pmspaceValue: "Contingency tracking with AI-powered risk exposure analysis",
  },
];

const developmentPhases = [
  {
    phase: "Pre-Development",
    duration: "6-18 months",
    activities: [
      "Site acquisition and due diligence",
      "Market analysis and feasibility studies",
      "Zoning and entitlements",
      "Environmental assessments",
      "Conceptual design and budgeting",
      "Capital stack assembly",
    ],
    keyDeliverables: ["Feasibility Study", "Pro Forma", "LOI/PSA", "Entitlements", "Preliminary Budget"],
    pmspaceCapabilities: ["Development tracker", "Due diligence checklists", "Budget modeling"],
  },
  {
    phase: "Design Development",
    duration: "4-12 months",
    activities: [
      "Architect and consultant selection",
      "Schematic through construction documents",
      "Value engineering",
      "Permit applications",
      "GC selection and bidding",
      "Tenant pre-leasing coordination",
    ],
    keyDeliverables: ["CDs", "Building Permits", "GMP Contract", "Pre-Lease Agreements"],
    pmspaceCapabilities: ["Design review workflows", "RFP management", "Bid analysis"],
  },
  {
    phase: "Construction",
    duration: "12-36 months",
    activities: [
      "Site work and foundations",
      "Core and shell construction",
      "Base building MEP",
      "Building envelope",
      "Common area finishes",
      "Tenant improvement build-outs",
    ],
    keyDeliverables: ["Monthly Pay Apps", "Schedule Updates", "Inspection Reports", "CO/TCO"],
    pmspaceCapabilities: ["Progress tracking", "Cost management", "Quality control", "Daily reports"],
  },
  {
    phase: "Lease-Up & Stabilization",
    duration: "6-24 months",
    activities: [
      "TI design and construction",
      "Tenant move-in coordination",
      "Punch list completion",
      "Warranty management",
      "As-built documentation",
      "Property management transition",
    ],
    keyDeliverables: ["TI Closeouts", "Substantial Completion", "O&M Manuals", "Warranty Packages"],
    pmspaceCapabilities: ["TI tracking", "Punch list management", "Warranty tracking"],
  },
];

const tenantCoordinationChallenges = [
  {
    challenge: "Multiple Tenant Timelines",
    description: "Each tenant has different lease commencement dates, requiring coordinated construction schedules across multiple fit-outs.",
    solution: "Multi-tenant scheduling with dependency tracking and critical path analysis per tenant",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    challenge: "TI Allowance Management",
    description: "Tracking tenant improvement allowances, over/under calculations, and landlord work vs. tenant responsibility.",
    solution: "Automated TI budget tracking with allowance calculations and variance reporting",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    challenge: "Design Coordination",
    description: "Coordinating tenant architect drawings with base building systems and adjacent tenant spaces.",
    solution: "Centralized document management with automated clash detection alerts",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    challenge: "Access and Security",
    description: "Managing contractor access across occupied and unoccupied spaces with security requirements.",
    solution: "Digital badging integration and area-specific access control",
    icon: <Key className="w-6 h-6" />,
  },
  {
    challenge: "Communication Complexity",
    description: "Coordinating between ownership, property management, tenant representatives, and multiple contractors.",
    solution: "Role-based communication portals with tenant-specific project views",
    icon: <Users className="w-6 h-6" />,
  },
  {
    challenge: "Lease Requirement Compliance",
    description: "Ensuring construction meets lease specifications including finishes, systems, and completion requirements.",
    solution: "Lease requirement checklists with automated compliance tracking",
    icon: <FileText className="w-6 h-6" />,
  },
];

const financialManagementFeatures = [
  {
    feature: "Development Pro Forma Integration",
    description: "Connect construction budgets to overall development pro forma for real-time investment analysis.",
    benefits: ["Live ROI calculations", "Cost-to-complete forecasting", "Scenario modeling", "Partner reporting"],
    icon: <PieChart className="w-8 h-8" />,
  },
  {
    feature: "Draw Request Automation",
    description: "Streamlined lender draw preparation with automated AIA billing, lien waiver collection, and supporting documentation.",
    benefits: ["AIA G702/G703 generation", "Lien waiver tracking", "Stored materials tracking", "Bank inspector coordination"],
    icon: <FileText className="w-8 h-8" />,
  },
  {
    feature: "Multi-Entity Cost Allocation",
    description: "Allocate costs across multiple entities, phases, or funding sources with proper accounting treatment.",
    benefits: ["Entity-level budgets", "Hard/soft cost tracking", "Capitalizable vs. expense", "Tax basis tracking"],
    icon: <Building className="w-8 h-8" />,
  },
  {
    feature: "Change Order ROI Analysis",
    description: "Evaluate change orders not just on cost impact but on revenue and NOI implications.",
    benefits: ["Revenue impact modeling", "Payback calculations", "Value-add analysis", "Decision support"],
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const pmspaceFeatures = [
  {
    feature: "Multi-Project Portfolio Dashboard",
    description: "Oversee entire development portfolio from a single dashboard with drill-down to individual projects, phases, or tenants.",
    benefits: ["Portfolio-level KPIs", "Cross-project resource visibility", "Executive reporting", "Investor dashboards"],
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    feature: "Tenant Improvement Module",
    description: "Purpose-built TI management with allowance tracking, tenant-specific workflows, and lease requirement compliance.",
    benefits: ["TI allowance tracking", "Landlord/tenant work split", "Lease compliance checklists", "Move-in coordination"],
    icon: <Key className="w-8 h-8" />,
  },
  {
    feature: "Investor Reporting Portal",
    description: "Automated investor and lender reports with customizable templates and secure portal access.",
    benefits: ["Monthly investor reports", "Draw request packages", "Photo documentation", "Schedule narratives"],
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    feature: "Lease-Up Integration",
    description: "Connect construction progress to leasing pipeline for coordinated tenant onboarding.",
    benefits: ["Lease milestone triggers", "TI initiation workflows", "Tenant handbook generation", "Move-in checklists"],
    icon: <Target className="w-8 h-8" />,
  },
  {
    feature: "LEED & Sustainability Tracking",
    description: "Track green building certification requirements throughout construction with credit documentation.",
    benefits: ["LEED credit tracking", "Material certifications", "Waste diversion tracking", "Energy modeling integration"],
    icon: <Zap className="w-8 h-8" />,
  },
  {
    feature: "AI-Powered Schedule Optimization",
    description: "Machine learning algorithms that learn from historical CRE projects to predict delays and optimize sequences.",
    benefits: ["Revenue-weighted scheduling", "Weather integration", "Trade availability prediction", "CO timeline forecasting"],
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const faqs = [
  {
    question: "How does Space AI handle multi-tenant commercial projects?",
    answer: "Space AI includes a dedicated Tenant Improvement module designed for multi-tenant commercial buildings. You can create tenant-specific project spaces within your base building project, track TI allowances and overage calculations, manage tenant architect coordination and submittals, coordinate multiple fit-out schedules with base building milestones, and generate tenant-specific reports while maintaining portfolio visibility. Each tenant sees only their project information while ownership has full visibility across all tenants.",
  },
  {
    question: "Can Space AI integrate with our development pro forma?",
    answer: "Yes, Space AI provides robust financial integration for commercial real estate development. You can import budget categories that align with your pro forma line items, track actual costs against pro forma projections in real-time, generate cost-to-complete forecasts that feed back into investment analysis, model change order impacts on ROI and IRR, and export data to Excel or direct integration with accounting systems. This enables developers to make construction decisions with full visibility into investment implications.",
  },
  {
    question: "How does Space AI support construction lender requirements?",
    answer: "Space AI streamlines lender communication and draw request preparation with: automated AIA G702/G703 billing document generation, lien waiver collection and tracking workflows, stored materials documentation, inspection scheduling and report management, title update coordination, budget reallocation tracking, and customizable lender report packages. Many commercial construction lenders accept Space AI reports directly, reducing administrative overhead.",
  },
  {
    question: "What LEED and sustainability tracking does Space AI offer?",
    answer: "Space AI supports green building certification tracking including: LEED credit checklists and documentation, material certification collection (FSC, low-VOC, recycled content), construction waste diversion tracking and reporting, energy modeling integration for commissioning, air quality testing coordination, and sustainability narrative generation for certification submissions. We support LEED, WELL, BREEAM, and other green building rating systems.",
  },
  {
    question: "How does Space AI handle base building vs. tenant responsibility?",
    answer: "Space AI provides clear delineation between landlord and tenant work with: work letter parsing and scope definition, separate budget tracking for base building and TI, change order attribution to appropriate party, shared systems coordination (MEP tie-ins), turnover condition documentation, and lease compliance verification. This clarity reduces disputes and ensures accurate cost tracking for each party's obligations.",
  },
  {
    question: "Can Space AI manage a portfolio of development projects?",
    answer: "Space AI is designed for portfolio-level management with: consolidated dashboard across all active developments, cross-project resource and trade visibility, portfolio-level budget and schedule reporting, standardized processes across projects with local flexibility, investor and ownership reporting aggregation, and lessons learned capture across projects. Developers managing multiple simultaneous projects benefit from consistency and visibility across their entire portfolio.",
  },
];

export default function CommercialRealEstateConstructionGuide() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              Industry Guide
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
              2025 Edition
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Commercial Real Estate Construction Management
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            The complete guide to managing office buildings, retail centers, mixed-use developments, 
            and industrial facilities with AI-powered construction management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/construction-software-demo/"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              See CRE Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources/construction-software-downloads/"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <FileText className="w-5 h-5" /> Development Checklist
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 20 min read
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Updated January 2025
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" /> For Developers & Owners
            </span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <TableOfContents items={tableOfContents} />
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-blue-400" />
            Introduction to CRE Construction
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Commercial real estate construction represents one of the most financially 
              complex segments of the construction industry. Unlike residential or infrastructure 
              projects, CRE developments are fundamentally <strong>investment vehicles</strong> where 
              every construction decision impacts returns, valuations, and investor outcomes.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Success in commercial construction requires mastery of not just construction management, 
              but also tenant coordination, lease requirements, capital markets timing, and the 
              intricate dance between base building delivery and multiple tenant fit-outs.
            </p>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">The CRE Construction Landscape</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$850B+</div>
                  <div className="text-white/60 text-sm">Annual U.S. Commercial Construction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15-25%</div>
                  <div className="text-white/60 text-sm">Average CRE Budget Overruns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$50K+</div>
                  <div className="text-white/60 text-sm">Daily Cost of Schedule Delays</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Project Types */}
      <section id="project-types" className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Commercial Project Types</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Each commercial property type has unique construction requirements, timelines, 
            and success metrics.
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {projectTypes.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.type}</h3>
                    <div className="flex gap-4 text-sm text-white/60 mt-1">
                      <span>{project.typicalBudget}</span>
                      <span>•</span>
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Subtypes</div>
                  <div className="flex flex-wrap gap-2">
                    {project.subtypes.map((subtype, subIdx) => (
                      <span key={subIdx} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                        {subtype}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Key Metrics</div>
                  <div className="flex flex-wrap gap-2">
                    {project.keyMetrics.map((metric, metricIdx) => (
                      <span key={metricIdx} className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Key Challenges</div>
                  <ul className="space-y-1">
                    {project.challenges.map((challenge, chalIdx) => (
                      <li key={chalIdx} className="text-sm text-white/70 flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3 text-yellow-400 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Considerations */}
      <section id="investment-considerations" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Investment Considerations</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Commercial construction is fundamentally about creating investment value. 
            Every decision must be evaluated through a financial lens.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {investmentConsiderations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold">{item.factor}</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">{item.description}</p>
                <div className="mb-4">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-2">Key Metrics</div>
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((metric, metricIdx) => (
                      <span key={metricIdx} className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span><strong>Space AI:</strong> {item.pmspaceValue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section id="development-phases" className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Commercial Development Phases</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Commercial development follows a structured lifecycle from site acquisition through 
            stabilized operations.
          </p>
          <div className="space-y-6">
            {developmentPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500/20 to-transparent p-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-xl font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{phase.phase}</h3>
                      <p className="text-white/60 text-sm">Duration: {phase.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-white/60 text-sm mb-3">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, actIdx) => (
                          <li key={actIdx} className="text-sm text-white/80 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white/60 text-sm mb-3">Key Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.keyDeliverables.map((deliverable, delIdx) => (
                          <span
                            key={delIdx}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white/60 text-sm mb-3">Space AI Capabilities</h4>
                      <ul className="space-y-2">
                        {phase.pmspaceCapabilities.map((capability, capIdx) => (
                          <li key={capIdx} className="text-sm text-green-400 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Coordination */}
      <section id="tenant-coordination" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Tenant Coordination Challenges</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Multi-tenant commercial projects require sophisticated coordination between 
            base building construction and individual tenant fit-outs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenantCoordinationChallenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                <p className="text-white/60 text-sm mb-4">{item.description}</p>
                <div className="flex items-start gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Management */}
      <section id="financial-management" className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Financial Management Features</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            CRE construction demands sophisticated financial tools that connect construction 
            costs to investment returns.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {financialManagementFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl text-green-400 shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.feature}</h3>
                    <p className="text-white/60 text-sm mb-4">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIdx) => (
                        <li key={benefitIdx} className="text-sm text-white/80 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space AI Features */}
      <section id="pmspace-features" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Space AI for Commercial Real Estate</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Purpose-built features for the unique demands of commercial development and construction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmspaceFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.feature}</h3>
                <p className="text-white/60 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="text-sm text-white/80 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-white/60 text-center mb-12">
            Common questions about commercial real estate construction management.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your CRE Development?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              See how Space AI helps developers, owners, and investors deliver commercial 
              projects on budget and maximize investment returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construction-software-demo/"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Schedule CRE Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies/"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" /> View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="container mx-auto px-4 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Industry Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/guides/healthcare-construction-management/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors group"
            >
              <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Healthcare Construction</h3>
              <p className="text-white/60 text-sm">Managing hospital and medical facility projects with compliance focus.</p>
            </Link>
            <Link
              href="/guides/infrastructure-construction-management/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors group"
            >
              <div className="text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                <Ruler className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Infrastructure Construction</h3>
              <p className="text-white/60 text-sm">Highways, bridges, and civil engineering project management.</p>
            </Link>
            <Link
              href="/guides/ultimate-construction-management-guide/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-colors group"
            >
              <div className="text-green-400 mb-3 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Ultimate Guide</h3>
              <p className="text-white/60 text-sm">Comprehensive construction management software guide.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <FAQSchema faqs={faqs} />
    </div>
  );
}

