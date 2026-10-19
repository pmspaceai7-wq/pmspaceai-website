// src/app/project-scheduling-software/page.tsx
// TASK 19: Project Scheduling Software Landing Page
// Targeting "project scheduling software construction" keywords
// Focus: Construction scheduling, Gantt charts, resource allocation

import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  GitBranch,
  RefreshCw,
  TrendingUp,
  Timer,
  Brain,
  Activity,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title:
    "Project Scheduling Software | AI-Powered | Space AI | #1 Construction Scheduling",
  description:
    "Project scheduling software for construction teams with Gantt charts, critical path planning, resource coordination, and AI-powered delay prediction (45 days). Free tier available. Start free.",
  keywords: [
    "project scheduling software",
    "construction scheduling software",
    "project scheduler",
    "construction schedule software",
    "gantt chart software construction",
    "project scheduling tools",
    "scheduling software for construction",
    "construction project scheduler",
    "job scheduling software construction",
    "ai scheduling software",
    "resource scheduling construction",
    "critical path scheduling software",
    "ai powered scheduling software",
    "ai construction scheduling",
  ],
  alternates: {
    canonical: "https://pmspace.ai/project-scheduling-software/",
  },
  openGraph: {
    title: "Project Scheduling Software | AI-Powered Construction Scheduling | Space AI",
    description:
      "Create optimized construction schedules with AI. Gantt charts, critical path analysis, resource leveling. 45-day delay prediction. Free tier available.",
    url: "https://pmspace.ai/project-scheduling-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/scheduling-software-og.png",
        width: 1200,
        height: 630,
        alt: "Project Scheduling Software",
      },
    ],
  },
};

// Key scheduling features
const schedulingFeatures = [
  {
    icon: Calendar,
    title: "Interactive Gantt Charts",
    description:
      "Drag-and-drop Gantt chart scheduling with automatic dependency linking. See your entire project timeline at a glance and make adjustments in real-time.",
    capabilities: [
      "Drag-and-drop task editing",
      "Auto-dependency linking",
      "Zoom controls (day/week/month)",
      "Baseline comparison",
    ],
  },
  {
    icon: GitBranch,
    title: "Critical Path Analysis",
    description:
      "Automatically identify the critical path and near-critical activities. Know exactly which tasks can slip and which will delay your project.",
    capabilities: [
      "Auto-calculated critical path",
      "Float/slack visualization",
      "What-if scenario modeling",
      "Impact analysis",
    ],
  },
  {
    icon: Users,
    title: "Resource Management",
    description:
      "Allocate crews, equipment, and materials efficiently. See resource conflicts before they happen and optimize utilization across projects.",
    capabilities: [
      "Resource leveling",
      "Utilization dashboards",
      "Conflict detection",
      "Multi-project allocation",
    ],
  },
  {
    icon: Brain,
    title: "AI Schedule Optimization",
    description:
      "Let AI suggest the optimal schedule based on constraints, dependencies, and historical data. Save hours of manual schedule tuning.",
    capabilities: [
      "Auto-optimization suggestions",
      "Delay prediction (45 days)",
      "Pattern learning",
      "Risk-aware scheduling",
    ],
  },
];

// Scheduling capabilities matrix
const capabilitiesMatrix = [
  {
    category: "Schedule Creation",
    items: [
      "Work breakdown structure (WBS)",
      "Template-based scheduling",
      "Import from P6/MS Project",
      "Task dependencies (FS, SS, FF, SF)",
      "Lag and lead times",
      "Milestones and phases",
    ],
  },
  {
    category: "Visualization",
    items: [
      "Interactive Gantt charts",
      "Network diagrams",
      "Calendar views",
      "Timeline reports",
      "Progress visualization",
      "Baseline comparisons",
    ],
  },
  {
    category: "Analysis",
    items: [
      "Critical path calculation",
      "Float/slack analysis",
      "What-if scenarios",
      "Earned value tracking",
      "Variance analysis",
      "Forecasting",
    ],
  },
  {
    category: "Resources",
    items: [
      "Resource assignment",
      "Utilization tracking",
      "Conflict resolution",
      "Resource leveling",
      "Cost loading",
      "Multi-project views",
    ],
  },
];

// Comparison with other tools
const comparisons = [
  {
    competitor: "Primavera P6",
    verdict: "Too Complex",
    description:
      "Enterprise power but requires weeks of training and dedicated schedulers. Space AI delivers 90% of the capability with 10% of the complexity.",
  },
  {
    competitor: "MS Project",
    verdict: "Outdated",
    description:
      "Desktop-bound, no real-time collaboration, no AI features. Space AI is cloud-native with modern collaboration and predictive AI built in.",
  },
  {
    competitor: "Excel Spreadsheets",
    verdict: "Manual & Error-Prone",
    description:
      "No dependencies, no automation, endless version control headaches. Space AI automates what Excel can't and keeps everyone on the same version.",
  },
  {
    competitor: "Generic PM Tools",
    verdict: "Not Construction-Ready",
    description:
      "Monday, Asana, and Wrike lack construction logic—no critical path, no resource leveling, no delay prediction. Space AI understands how construction works.",
  },
];

// AI scheduling benefits
const aiSchedulingBenefits = [
  {
    icon: Timer,
    stat: "AI",
    unit: "",
    label: "schedule guidance",
    description: "Use machine assistance to review dependencies, risk patterns, and upcoming schedule pressure.",
  },
  {
    icon: TrendingUp,
    stat: "Live",
    unit: "",
    label: "progress visibility",
    description: "Keep the office and field aligned around current progress and schedule updates.",
  },
  {
    icon: Target,
    stat: "Crew",
    unit: "",
    label: "resource context",
    description: "Coordinate labor, equipment, and task timing from the same scheduling workspace.",
  },
  {
    icon: Activity,
    stat: "Field",
    unit: "",
    label: "team alignment",
    description: "Share look-ahead plans and updates with supervisors, PMs, and trade partners.",
  },
];

// Trust indicators
const trustStats = [
  { value: "Gantt", label: "Chart Planning", icon: Calendar },
  { value: "CPM", label: "Critical Path", icon: CheckCircle },
  { value: "Field", label: "Progress Updates", icon: Star },
  { value: "Crew", label: "Resource Views", icon: Clock },
];

// Use Cases by Project Type
const projectUseCases = [
  {
    type: "Commercial Construction",
    description: "Multi-phase office, retail, and mixed-use projects",
    benefits: [
      "Tenant coordination scheduling",
      "Floor-by-floor phase planning",
      "Curtainwall and MEP sequencing",
      "Lease-up critical dates",
    ],
  },
  {
    type: "Residential Development",
    description: "Single and multi-family residential projects",
    benefits: [
      "Lot-by-lot phasing",
      "Unit types scheduling",
      "Model home coordination",
      "Quick-turn delivery tracking",
    ],
  },
  {
    type: "Infrastructure",
    description: "Roads, bridges, utilities, and civil projects",
    benefits: [
      "Traffic control coordination",
      "Weather-dependent phasing",
      "Multi-mile linear scheduling",
      "Seasonal constraints",
    ],
  },
  {
    type: "Heavy Civil",
    description: "Dams, tunnels, and complex engineering projects",
    benefits: [
      "Long-duration task sequencing",
      "Equipment-intensive planning",
      "Excavation and staging",
      "Environmental compliance scheduling",
    ],
  },
  {
    type: "Healthcare/Education",
    description: "Occupied facility construction",
    benefits: [
      "Phased occupancy management",
      "Swing space coordination",
      "Operational continuity",
      "Compliance handover planning",
    ],
  },
  {
    type: "Industrial",
    description: "Plants, factories, and manufacturing facilities",
    benefits: [
      "Equipment installation sequencing",
      "Startup readiness planning",
      "Commissioning phases",
      "Safety-critical path tracking",
    ],
  },
];

// Detailed Feature Comparison
const detailedComparison = [
  {
    feature: "Core Functionality",
    spaceAI: ["Gantt charts", "Critical path", "Resource leveling", "What-if scenarios"],
    P6: ["Gantt charts", "Critical path", "Resource leveling", "What-if scenarios"],
    MSProject: ["Gantt charts", "Critical path", "Resource leveling", "What-if scenarios"],
    winner: "tie",
  },
  {
    feature: "Ease of Use (Learning Curve)",
    spaceAI: ["Guided onboarding", "Intuitive UI", "Shared team workflows"],
    P6: ["Scheduler-led setup", "Complex interface", "Dedicated specialist focus"],
    MSProject: ["Project-centric", "Dated UI", "Desktop-heavy workflow"],
    winner: "spaceAI",
  },
  {
    feature: "AI Capabilities",
    spaceAI: ["Predictive delay signals", "Auto-optimization", "Pattern learning"],
    P6: ["None", "None", "None"],
    MSProject: ["None", "None", "None"],
    winner: "spaceAI",
  },
  {
    feature: "Collaboration (Real-time)",
    spaceAI: ["Full cloud", "Mobile-first", "Multi-user real-time"],
    P6: ["Limited cloud", "Desktop focus", "Batch updates"],
    MSProject: ["OneDrive only", "Desktop-only", "Version control issues"],
    winner: "spaceAI",
  },
  {
    feature: "Mobile Capabilities",
    spaceAI: ["Full iOS/Android app", "Progress tracking", "Photo upload"],
    P6: ["Basic viewer only", "Read-only access", "No progress entry"],
    MSProject: ["None", "None", "None"],
    winner: "spaceAI",
  },
];

// Implementation Timeline
const schedImplementationTimeline = [
  {
    phase: "Setup & Import",
    duration: "Kickoff",
    tasks: [
      "Account creation and user setup",
      "Import existing schedule (P6/MS Project)",
      "Calendar configuration",
      "Team onboarding",
    ],
  },
  {
    phase: "Configuration",
    duration: "Working session",
    tasks: [
      "Resource pool setup",
      "Project template creation",
      "Integration configuration",
      "Baseline scheduling",
    ],
  },
  {
    phase: "Team Training",
    duration: "Team rollout",
    tasks: [
      "Scheduler training (advanced features)",
      "PM/Field trainer training",
      "Field team mobile app training",
      "Executive dashboards setup",
    ],
  },
  {
    phase: "Operational",
    duration: "Ongoing",
    tasks: [
      "Weekly schedule updates",
      "Predictive delay analysis reviews",
      "Resource optimization",
      "Performance tracking",
    ],
  },
];

// FAQs
const faqs = [
  {
    question: "What is project scheduling software?",
    answer:
      "Project scheduling software helps construction teams plan, sequence, and track work activities over time. Core capabilities include creating task timelines, defining dependencies between activities, allocating resources, identifying the critical path, and monitoring progress against the baseline. Modern scheduling software like Space AI adds AI-powered optimization and predictive delay analysis to traditional scheduling capabilities.",
  },
  {
    question: "How does AI improve construction scheduling?",
    answer:
      "Space AI adds scheduling assistance by surfacing risk patterns, suggesting plan adjustments, and helping teams review dependencies and constraints with better context.",
  },
  {
    question: "Can I import schedules from Primavera P6 or Microsoft Project?",
    answer:
      "Yes, Space AI supports imports from common scheduling formats including Primavera P6, Microsoft Project, and spreadsheet-based schedules. The team can help scope the right migration approach for your current setup.",
  },
  {
    question: "What's the difference between Space AI and Primavera P6?",
    answer:
      "Primavera P6 is often centered around specialist scheduler workflows, while Space AI is designed to be easier for broader project teams to use across planning, updates, and execution.",
  },
  {
    question: "How does critical path analysis work in Space AI?",
    answer:
      "Space AI automatically calculates the critical path based on task durations and dependencies. The system identifies tasks with zero float (the critical path) and displays total float for all other activities. When schedule changes occur, the critical path updates instantly. Space AI also shows near-critical paths (activities within 5 days of becoming critical) so you can proactively manage schedule risk.",
  },
  {
    question: "Can Space AI handle resource-constrained scheduling?",
    answer:
      "Absolutely. Space AI offers resource-constrained scheduling (resource leveling) that adjusts task timing based on available resources. You can define resource pools (crews, equipment, materials), assign capacities, and let Space AI resolve over-allocations automatically. The system optimizes for either shortest duration or resource efficiency based on your project priorities.",
  },
  {
    question: "Does Space AI support look-ahead scheduling?",
    answer:
      "Yes, Space AI includes rolling look-ahead views (2-week, 3-week, 6-week) commonly used in lean construction. Look-ahead schedules can be extracted automatically from the master schedule, distributed to subcontractors, and tracked for commitment reliability. The system calculates Planned Percent Complete (PPC) metrics to measure schedule adherence over time.",
  },
  {
    question: "How does Space AI integrate with field operations?",
    answer:
      "Space AI connects scheduling with field execution through our mobile app. Field teams can view their scheduled tasks, report progress, log delays with reasons, and capture photos—all syncing to the master schedule in real-time. This eliminates the gap between what's planned and what's happening on site, giving schedulers accurate data for forecasting and replanning.",
  },
  {
    question: "Can I integrate Space AI with portfolio management systems?",
    answer:
      "Yes, Space AI offers API integrations with portfolio management systems, project portfolio management (PPM) tools, and enterprise systems. We can integrate with SAP, NetSuite, Primavera, and custom systems. This allows you to track scheduling across multiple projects at the portfolio level, coordinate resources, and ensure enterprise-wide schedule alignment.",
  },
  {
    question: "How does Space AI handle look-ahead scheduling for subcontractors?",
    answer:
      "Space AI automates rolling look-ahead scheduling (2-week, 3-week, or 6-week windows) extracted from your master schedule. Look-ahead schedules can be auto-generated, exported to subcontractors, and tracked for Planned Percent Complete (PPC)—a lean construction metric. The system shows commitments, tracks reliability, and alerts when subs won't meet scheduled dates.",
  },
  {
    question: "What project types does Space AI work best for?",
    answer:
      "Space AI works for all construction types: commercial, residential, infrastructure, heavy civil, healthcare, education, industrial, water utilities, and specialized projects. For each project type, we offer templates optimized for that industry—commercial templates include phasing logic, residential templates support lot-by-lot scheduling, infrastructure templates handle linear projects. This customization makes setup and accuracy better than generic tools.",
  },
];


export default function ProjectSchedulingSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space AI Project Scheduling Software",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Project Scheduling Software",
            operatingSystem: "Web, iOS, Android",
            featureList: [
              "Interactive Gantt Charts",
              "Critical Path Analysis",
              "Resource Management",
              "AI Schedule Optimization",
              "Predictive Delay Analysis",
              "Look-ahead Scheduling",
              "Mobile Progress Tracking",
              "P6/MS Project Import",
            ],
          }),
        }}
      />

      <div className="bg-black text-white min-h-screen">
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-white/80">AI-Powered Construction Scheduling</span>
              </div>
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Project</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Scheduling
                </span>
                <br />
                <span className="text-white">Software</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
                Construction scheduling with{" "}
                <span className="text-cyan-400 font-semibold">AI assistance</span>. Create
                optimized schedules, manage dependencies, and keep every project on track with
                better coordination across the field and office.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-cyan-500/25"
                >
                  Explore Scheduling Workflows
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  See Gantt Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {trustStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AI SCHEDULING BENEFITS */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">Powered by AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Scheduling That{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Thinks Ahead
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Traditional scheduling reacts to delays. Space AI predicts and prevents them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {aiSchedulingBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">{benefit.stat}</span>
                    <span className="text-lg text-white/70">{benefit.unit}</span>
                  </div>
                  <div className="text-sm text-cyan-400 font-medium mb-3">{benefit.label}</div>
                  <p className="text-sm text-white/60">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CORE SCHEDULING FEATURES */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Scheduling Toolkit
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Everything you need to plan, visualize, and optimize construction schedules
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {schedulingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/70 mb-4">{feature.description}</p>

                      <div className="grid grid-cols-2 gap-2">
                        {feature.capabilities.map((cap, cIndex) => (
                          <div key={cIndex} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CAPABILITIES MATRIX */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Scheduling Capabilities</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Enterprise scheduling power without enterprise complexity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {capabilitiesMatrix.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-cyan-400/70 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* COMPARISON SECTION */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Teams Switch to{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Space AI
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {comparisons.map((comp, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">{comp.competitor}</span>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                      {comp.verdict}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* USE CASES BY PROJECT TYPE */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Construction Scheduling for Every Project Type
              </h2>
              <p className="text-lg text-white/60">Industry-specific templates and capabilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projectUseCases.map((usecase) => (
                <div
                  key={usecase.type}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{usecase.type}</h3>
                  <p className="text-sm text-white/60 mb-4">{usecase.description}</p>
                  <ul className="space-y-2">
                    {usecase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* IMPLEMENTATION TIMELINE */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fast Implementation
              </h2>
              <p className="text-lg text-white/60">From import to operational in 3-4 weeks</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {schedImplementationTimeline.map((phase, index) => (
                  <div key={phase.phase} className="relative">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        {index !== schedImplementationTimeline.length - 1 && (
                          <div className="w-1 bg-gradient-to-b from-cyan-500/50 to-transparent h-20 mt-4" />
                        )}
                      </div>

                      <div className="pb-8 flex-1">
                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                              <p className="text-sm text-cyan-400 font-semibold mt-1">{phase.duration}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {phase.tasks.map((task) => (
                              <li key={task} className="flex items-center gap-3 text-white/70">
                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl text-center">
                <p className="text-white font-semibold mb-2">Ready to Improve Your Scheduling?</p>
                <p className="text-white/70 mb-6">We can walk through your current scheduling workflow and the right rollout path.</p>
                <Link
                  href="/try-it-now/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-400 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Request a Walkthrough
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-white/70 pl-11">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA */}
        {/* ============================================ */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-blue-900/50" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Scheduling{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Smarter
                </span>
              </h2>

              <p className="text-xl text-white/70 mb-8">
                See how Space AI can support scheduling, look-ahead planning, and progress updates
                across your project teams.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all"
                >
                  Explore the Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Book a Demo
                </Link>
              </div>

              <p className="mt-8 text-white/50 text-sm">
                Import common schedule formats • Coordinate field updates • Review critical path
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
