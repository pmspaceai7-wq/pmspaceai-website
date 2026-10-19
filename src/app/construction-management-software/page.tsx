// src/app/construction-management-software/page.tsx
// TASK 1: Primary Keyword Landing Page - "construction management software"
// Elite SEO pillar page targeting the highest-value commercial keyword

import { Metadata } from "next";
import Link from "next/link";
import { 
  Brain, Clock, FileText, Shield, Users, BarChart3, 
  Layers, Zap, CheckCircle, ArrowRight, Play, Star,
  TrendingUp, Target, Building2, Rocket, Award, Globe
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import DocsCallout from "@/components/docs/DocsCallout";
import PageSummary from "@/components/PageSummary";
import { RelatedPages } from "@/components/InternalLinking";

// Maximum SEO optimization for the primary commercial keyword
export const metadata: Metadata = {
  title: "Construction Management Software | AI-Powered | Space AI",
  description:
    "AI construction management software for scheduling, documents, cost tracking, and field coordination. Reduce delays by 23%. Get started free today. Sign up now.",
  keywords: [
    "construction management software",
    "best construction management software",
    "construction project management software",
    "construction management system",
    "construction software",
    "project management software for construction",
    "ai construction management",
    "construction management platform",
    "construction project software",
    "best construction software 2026",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-management-software/",
  },
  openGraph: {
    title: "Best Construction Management Software 2026 | Space AI",
    description:
      "AI-powered construction management for scheduling, documents, field visibility, and project coordination.",
    url: "https://pmspace.ai/construction-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/construction-management-software-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Construction Management Software Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Construction Management Software 2026 | Space AI",
    description: "AI-powered construction management for connected project delivery.",
  },
};

// Core features for the construction management software
const coreCapabilities = [
  {
    icon: Brain,
    title: "AI-Powered Scheduling",
    description: "Intelligent construction scheduling that learns from your projects, predicts bottlenecks, and automatically optimizes timelines for maximum efficiency.",
    stats: "AI schedule guidance",
    href: "/platform/ai/",
  },
  {
    icon: Clock,
    title: "Predictive Delay Analysis",
    description: "Machine learning algorithms forecast schedule slippage up to 45 days in advance, giving you time to prevent problems before they impact your project.",
    stats: "Earlier risk signals",
    href: "/solutions/predictive-delays/",
  },
  {
    icon: FileText,
    title: "Smart Document Management",
    description: "AI-powered document processing automatically extracts, classifies, and organizes construction documents. Find any file in seconds.",
    stats: "Searchable records",
    href: "/guides/idp/",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Proactively identify and mitigate project risks with automated risk scoring, compliance tracking, and real-time alerts.",
    stats: "Structured risk workflows",
    href: "/solutions/data-management/",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Keep all stakeholders aligned with real-time updates, task management, and communication tools that work on-site and in-office.",
    stats: "Shared project visibility",
    href: "/platform/process-automation/",
  },
  {
    icon: Layers,
    title: "BIM Integration",
    description: "Seamlessly connect your Building Information Models with project workflows. Visualize progress, detect clashes, and extract quantities.",
    stats: "Model-linked workflows",
    href: "/core/space-bim/",
  },
];

// Advanced features list
const advancedFeatures = [
  { icon: BarChart3, title: "Financial Forecasting", description: "AI-powered cost predictions and budget tracking" },
  { icon: Zap, title: "Workflow Automation", description: "Automate approvals, notifications, and repetitive tasks" },
  { icon: Globe, title: "Multi-site Management", description: "Manage multiple projects from one dashboard" },
  { icon: Target, title: "Resource Optimization", description: "Optimize labor, equipment, and material allocation" },
  { icon: TrendingUp, title: "Progress Tracking", description: "Real-time visibility into project milestones" },
  { icon: Building2, title: "Subcontractor Portal", description: "Seamless coordination with all project partners" },
];

// Comparison with legacy tools
const comparisonPoints = [
  { feature: "AI-Powered Scheduling", pmspace: true, legacy: false },
  { feature: "Predictive Analytics", pmspace: true, legacy: false },
  { feature: "Document AI/OCR", pmspace: true, legacy: false },
  { feature: "Real-time Collaboration", pmspace: true, legacy: true },
  { feature: "Mobile App", pmspace: true, legacy: true },
  { feature: "BIM Integration", pmspace: true, legacy: true },
  { feature: "45-Day Delay Prediction", pmspace: true, legacy: false },
  { feature: "Automated Risk Scoring", pmspace: true, legacy: false },
  { feature: "Flexible Onboarding", pmspace: true, legacy: false },
];

// Platform highlights
const trustStats = [
  { number: "AI", label: "Scheduling Workflows", icon: Building2 },
  { number: "Docs", label: "Project Records", icon: TrendingUp },
  { number: "Field", label: "Team Coordination", icon: Star },
  { number: "BIM", label: "Connected Context", icon: Target },
];

// Industry use cases
const industries = [
  { name: "Commercial Construction", href: "/industries/real-estate/" },
  { name: "Infrastructure", href: "/industries/infrastructure/" },
  { name: "Healthcare Facilities", href: "/industries/health-care/" },
  { name: "Education Buildings", href: "/industries/education/" },
  { name: "Government Projects", href: "/industries/government/" },
  { name: "Oil & Gas", href: "/industries/oil-and-gas/" },
];

// Integration List
const integrations = [
  { category: "BIM & Design", items: ["Revit", "AutoCAD", "ArchiCAD", "SketchUp"] },
  { category: "Accounting", items: ["QuickBooks", "Sage 100", "Deskera", "Xero"] },
  { category: "ERP Systems", items: ["NetSuite", "SAP", "Microsoft Dynamics", "Oracle"] },
  { category: "Collaboration", items: ["Microsoft 365", "Google Workspace", "Slack", "Teams"] },
  { category: "CRM", items: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"] },
];

// Comprehensive FAQs for rich snippets
const faqs = [
  {
    question: "Is Space AI construction management software?",
    answer: "Yes. Space AI is construction management software for AECO teams, with AI-powered workflows for scheduling, documents, RFIs, submittals, cost visibility, analytics, reporting, and connectors.",
  },
  {
    question: "Who uses Space AI?",
    answer: "Space AI is used by construction owners, developers, general contractors, subcontractors, project managers, operations leaders, and construction technology teams that need connected project visibility.",
  },
  {
    question: "What is construction management software?",
    answer: "Construction management software is a digital platform that helps construction professionals plan, coordinate, and control projects from inception to completion. It centralizes project documentation, schedules, budgets, and team communication in one place.",
  },
  {
    question: "What are the benefits of AI-powered construction management software?",
    answer: "AI-powered construction management software can help teams review risk patterns earlier, improve schedule coordination, automate repetitive document tasks, and keep field and office teams aligned around current project information.",
  },
  {
    question: "How much does construction management software cost?",
    answer: "Construction management software pricing varies based on team size, required workflows, support expectations, and integration scope. Contact the Space AI team for current packaging details that match your use case.",
  },
  {
    question: "What is the best construction management software in 2026?",
    answer: "The best construction management software for your team is the one that matches your workflows, project complexity, field needs, integration requirements, and rollout capacity. Construction-specific scheduling, document control, and field coordination are usually the most important areas to evaluate.",
  },
  {
    question: "How does Space AI compare to Procore and other construction software?",
    answer: "Space AI focuses on connected workflows across scheduling, documents, field coordination, and reporting. Teams comparing platforms should look at day-to-day usability, workflow coverage, implementation fit, and how well the software supports both office and field operations.",
  },
  {
    question: "Can construction management software integrate with my existing tools?",
    answer: "Yes, modern construction management software can integrate with broader construction and business systems such as BIM tools, accounting platforms, ERP systems, and collaboration suites. Space AI also supports API-based integrations for teams with custom requirements.",
  },
  {
    question: "How do I get current packaging details?",
    answer: "The best way to get current packaging and commercial details is through a live conversation with the Space AI team, where requirements can be matched to the right rollout approach.",
  },
  {
    question: "How long does it take to implement construction management software?",
    answer: "Implementation time varies by organization size, workflow complexity, migration needs, and integration scope. The right rollout plan depends on how much process change and historical data movement your team needs.",
  },
  {
    question: "How does predictive delay analysis work?",
    answer: "Space AI's predictive delay analysis uses machine learning trained on thousands of construction projects to identify early warning signs of schedule slippage. The AI analyzes real-time project data including task completion rates, resource allocation, weather delays, supplier performance, and historical patterns to forecast potential delays up to 45 days in advance. Teams receive actionable alerts with recommended mitigation strategies, allowing them to prevent delays before they impact the critical path.",
  },
  {
    question: "Can we migrate data from Procore to Space AI?",
    answer: "Space AI can support migration planning from common construction platforms. The migration path depends on the systems involved, the data you want to preserve, and the workflows you want active at launch.",
  },
  {
    question: "What construction industries does Space AI serve?",
    answer: "Space AI is built for all construction sectors: Commercial high-rise, infrastructure projects, healthcare facilities, educational buildings, government projects, oil & gas, residential, industrial, water utilities, and marine/shipbuilding. Our platform adapts to industry-specific workflows: complex bid documents for government projects, compliance tracking for healthcare, or specialized schedule dependencies for infrastructure work. We serve general contractors, subcontractors, engineering firms, and owners.",
  },
  {
    question: "How does BIM integration improve project delivery?",
    answer: "BIM integration can connect models to project workflows so teams can review context, link records, coordinate changes, and keep design information closer to execution.",
  },
  {
    question: "What makes Space AI different from Microsoft Project or other generic PM tools?",
    answer: "Traditional project management tools like Microsoft Project treat all industries the same. Space AI is construction-first: 1) Built for construction workflows (RFIs, submittals, change orders), 2) Industry-specific templates and processes, 3) AI trained on construction data (not generic business projects), 4) Mobile apps optimized for field teams (not office-only), 5) Integrations with construction tools (BIM, accounting, equipment tracking). Generic tools require extensive customization; Space AI works out-of-the-box for construction.",
  },
  {
    question: "How does the AI-powered scheduling optimize project timelines?",
    answer: "AI-powered scheduling helps teams review task relationships, resource pressure, sequencing options, and current progress so schedules can be updated with better context than static planning alone.",
  },
];

// Implement construction management software implementation timeline
const implementationTimeline = [
  {
    phase: "Planning & Setup",
    duration: "1-2 days",
    tasks: [
      "Account setup and user creation",
      "Initial configuration review",
      "Integration connections",
      "Team orientation",
    ],
  },
  {
    phase: "Data Migration",
    duration: "1-3 days",
    tasks: [
      "Historical project import",
      "Document and photo transfer",
      "Contact and vendor setup",
      "Workflow configuration",
    ],
  },
  {
    phase: "Training & Adoption",
    duration: "1-2 weeks",
    tasks: [
      "Team training sessions",
      "pilot project kickoff",
      "Best practices review",
      "Optimization recommendations",
    ],
  },
  {
    phase: "Ongoing Optimization",
    duration: "Continuous",
    tasks: [
      "Performance monitoring",
      "Team support & coaching",
      "Advanced features rollout",
      "ROI tracking",
    ],
  },
];

export default function ConstructionManagementSoftwarePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={faqs} />
      
      {/* Hero Section - Conversion Focused */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.1),transparent_60%)]" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 rounded-full mb-8">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white/90">AI-first workflows for construction teams</span>
            </div>
            
            {/* Main Headline - Primary Keyword in H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Construction Management
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                Software
              </span>
              <span className="text-white"> That </span>
              <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                Thinks Ahead
              </span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              Space AI helps teams coordinate schedules, documents, field updates, and project
              visibility in one connected operating system.
            </p>
            
            {/* Key Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {[
                { value: "AI", label: "Scheduling Guidance" },
                { value: "Docs", label: "Connected Records" },
                { value: "Field", label: "Live Coordination" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/try-it-now/"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/25"
              >
                <Rocket className="w-5 h-5" />
                Explore the Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/construction-software-demo/"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
            
            {/* Trust Signals */}
            <p className="text-sm text-white/50">
              ✓ Connected scheduling &nbsp;•&nbsp; ✓ Searchable project records &nbsp;•&nbsp; ✓ Field-ready workflows
            </p>
          </div>
        </div>
      </section>

      <PageSummary
        title="Category Definition"
        answer="Space AI is AI-powered construction management software for AECO teams. It supports core construction workflows including scheduling, documents, RFIs, submittals, cost visibility, analytics, reporting, and connectors."
        citations={[
          "Category: construction management software.",
          "Specialization: AI-powered construction management for AECO teams.",
          "Core workflows: scheduling, documents, RFIs, submittals, cost, analytics, connectors.",
          "Common alternatives: Procore, Buildertrend, Autodesk Construction Cloud, Primavera-connected workflows.",
        ]}
      />

      {/* Logos Section */}
      <section className="py-12 border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-white/50 mb-8">BUILT FOR TEAMS ACROSS CONSTRUCTION</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["Commercial", "Infrastructure", "Healthcare", "Education", "Industrial", "Residential"].map((name) => (
              <div key={name} className="text-lg font-semibold text-white/70">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Construction Management Software - SEO Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              What is Construction Management Software?
            </h2>
            <p className="text-lg text-white/70 text-center mb-8 leading-relaxed">
              Construction management software is a comprehensive digital platform designed to help construction professionals 
              plan, coordinate, and control every aspect of their projects. From initial planning through final handover, 
              modern <strong className="text-white">construction management software</strong> centralizes documentation, schedules, 
              budgets, and team communication in one powerful system.
            </p>
            <p className="text-lg text-white/70 text-center mb-12 leading-relaxed">
              <strong className="text-white">AI-powered construction management software</strong> like Space AI goes further—using 
              machine learning to predict delays, optimize schedules automatically, and process documents intelligently. 
              This next-generation approach helps teams review risks earlier, keep documentation organized, and make schedule updates with better context.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Space AI Tools */}
      <section className="py-16 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Space AI Construction Tools
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Purpose-built tools for scheduling, documents, cost control, analytics, and more.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              ["Project Management", "/tools/construction-project-management-software/"],
              ["Document Management", "/tools/construction-document-management-software/"],
              ["Scheduling", "/tools/project-scheduling-software/"],
              ["Analytics", "/tools/construction-analytics-software/"],
              ["Expense Management", "/tools/construction-expense-management-software/"],
              ["Supply Chain", "/tools/construction-supply-chain-management-software/"],
              ["AI Assistant", "/tools/ai-assistant/"],
              ["AI Recommendations", "/tools/ai-recommendation-engine/"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-purple-500/50 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Construction Management Features
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Every feature designed to predict problems, automate work, and keep your projects on track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreCapabilities.map((capability) => (
              <Link
                key={capability.title}
                href={capability.href}
                className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Stat Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-white">
                    {capability.stats}
                  </span>
                </div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {capability.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed mb-4">
                  {capability.description}
                </p>
                
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Construction Management Suite
            </h2>
            <p className="text-lg text-white/60">
              Everything you need to manage construction projects at scale
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {advancedFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 via-transparent to-teal-500/10">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
              Why Choose Space AI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space AI vs Legacy Construction Software
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              See why modern construction teams are switching to AI-powered management
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-purple-500/10 to-teal-500/10 border-b border-white/10">
                <div className="p-5 font-semibold text-white">Feature</div>
                <div className="p-5 font-semibold text-center">
                  <span className="text-purple-400">Space AI</span>
                </div>
                <div className="p-5 font-semibold text-center text-white/50">Legacy Tools</div>
              </div>

              {/* Rows */}
              {comparisonPoints.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 ${
                    index !== comparisonPoints.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="p-4 text-white/80">{row.feature}</div>
                  <div className="p-4 flex justify-center">
                    {row.pmspace ? (
                      <CheckCircle className="w-6 h-6 text-teal-400" />
                    ) : (
                      <span className="text-white/30">—</span>
                    )}
                  </div>
                  <div className="p-4 flex justify-center">
                    {row.legacy ? (
                      <CheckCircle className="w-6 h-6 text-white/30" />
                    ) : (
                      <span className="text-white/30">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrates with Your Tech Stack
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Connect to 100+ tools your team already uses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
            {integrations.map((category) => (
              <div key={category.category} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <p className="font-semibold text-white mb-4">{category.category}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-white/70 flex items-center gap-2">
                      <div className="w-1 h-1 bg-teal-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/60 mb-4">Don&apos;t see your tool?</p>
            <Link
              href="/integrations/"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
              Check our full integration list
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementation That Matches Your Team
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Rollout plans vary by workflow scope, migration needs, and operational complexity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="space-y-4">
              {implementationTimeline.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  <div className="flex gap-6">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      {index !== implementationTimeline.length - 1 && (
                        <div className="w-1 bg-gradient-to-b from-purple-500/50 to-transparent h-20 mt-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                            <p className="text-sm text-teal-400 font-semibold mt-1">{phase.duration}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {phase.tasks.map((task) => (
                            <li key={task} className="flex items-center gap-3 text-white/70">
                              <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
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

            <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-purple-500/20 rounded-2xl text-center">
              <p className="text-white font-semibold mb-2">Ready to Get Started?</p>
              <p className="text-white/70 mb-6">We can walk through your current stack and recommend an appropriate rollout path.</p>
              <Link
                href="/try-it-now/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                <Rocket className="w-5 h-5" />
                Request a Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Construction Management Software for Every Industry
            </h2>
            <p className="text-lg text-white/60">
              Tailored solutions for specialized construction needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all"
              >
                <span className="font-medium text-white group-hover:text-purple-300 transition-colors">
                  {industry.name}
                </span>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions About Construction Management Software
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Everything you need to know about choosing and implementing construction management software
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-teal-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Construction Management?
                </span>
              </h2>
              
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                See how Space AI can support planning, document control, field execution, and
                connected project reporting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/25"
                >
                  <Rocket className="w-5 h-5" />
                  Explore the Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  <Users className="w-5 h-5" />
                  Talk to Sales
                </Link>
              </div>
              
              <p className="text-sm text-white/50">
                ✓ Scheduling & documents &nbsp;•&nbsp; ✓ Field-ready coordination &nbsp;•&nbsp; ✓ Connected reporting
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <DocsCallout />
        <RelatedPages
          cluster="construction-software"
          currentPath="/construction-management-software"
          title="Explore Construction Management Resources"
          maxItems={6}
        />
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space AI Construction Management Software",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Project Management Software",
            operatingSystem: "Web, iOS, Android",
            description: "AI-powered construction management software for planning, documents, field coordination, and connected project workflows.",
            featureList: [
              "AI-Powered Construction Scheduling",
              "Predictive Delay Analysis (45 days advance)",
              "Intelligent Document Processing",
              "Risk Management & Scoring",
              "Real-time Team Collaboration",
              "BIM Integration",
              "Financial Forecasting",
              "Workflow Automation",
              "Multi-site Management",
              "Mobile App (iOS & Android)",
            ],
            screenshot: "https://pmspace.ai/assets/images/dashboard-screenshot.png",
            author: {
              "@type": "Organization",
              name: "Space AI",
              url: "https://pmspace.ai",
            },
          }),
        }}
      />
    </div>
  );
}
