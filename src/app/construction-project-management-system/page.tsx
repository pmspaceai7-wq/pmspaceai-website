// src/app/construction-project-management-system/page.tsx
// TASK 22: Construction Project Management System - Comprehensive Page
// Targeting "construction project management system" keywords
// Focus: Complete system overview, all features, enterprise capabilities

import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Layers,
  Calendar,
  DollarSign,
  Users,
  FileText,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Clock,
  Brain,
  Smartphone,
  Cloud,
  Lock,
  Globe,
  TrendingUp,
  HardHat,
  Truck,
  Database,
  RefreshCw,
  Play,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title:
    "Construction Project Management System | Space AI",
  description:
    "Complete construction project management system for scheduling, budgeting, documents, field coordination, and reporting.",
  keywords: [
    "construction project management system",
    "construction project management",
    "construction management system",
    "project management system construction",
    "construction pm system",
    "construction management platform",
    "construction project software",
    "integrated construction management",
    "construction project control system",
    "cpms construction",
    "enterprise construction management",
    "construction management solution",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-project-management-system/",
  },
  openGraph: {
    title: "Construction Project Management System | Space AI",
    description:
      "All-in-one construction PM system. Scheduling, budgeting, documents, AI predictions & more.",
    url: "https://pmspace.ai/construction-project-management-system/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/cpms-og.png",
        width: 1200,
        height: 630,
        alt: "Construction Project Management System",
      },
    ],
  },
};

// Complete system modules
const systemModules = [
  {
    icon: Calendar,
    title: "Project Scheduling",
    category: "Core",
    description:
      "Create and manage construction schedules with Gantt charts, critical path analysis, and AI-powered optimization.",
    features: [
      "Interactive Gantt charts",
      "Critical path analysis",
      "Resource leveling",
      "Look-ahead scheduling",
      "Baseline tracking",
      "AI delay prediction",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    category: "Core",
    description:
      "Complete budget control from estimates to final costs, with change order tracking and predictive cost analytics.",
    features: [
      "Budget management",
      "Cost tracking",
      "Change orders",
      "Invoice processing",
      "Forecasting",
      "Earned value",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Document Control",
    category: "Core",
    description:
      "Centralize all project documents with version control, approval workflows, and AI-powered search.",
    features: [
      "Version control",
      "Drawing management",
      "Approval workflows",
      "AI document search",
      "Mobile access",
      "Secure sharing",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: HardHat,
    title: "Field Management",
    category: "Field",
    description:
      "Empower field teams with mobile tools for daily logs, inspections, punch lists, and real-time progress tracking.",
    features: [
      "Daily reports",
      "Quality inspections",
      "Punch lists",
      "Progress photos",
      "Time tracking",
      "Offline mode",
    ],
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    category: "Collaboration",
    description:
      "Keep everyone connected with real-time messaging, task assignments, and stakeholder communication tools.",
    features: [
      "Real-time chat",
      "Task assignments",
      "Notifications",
      "Meeting notes",
      "Stakeholder portal",
      "Email integration",
    ],
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    category: "Field",
    description:
      "Manage safety programs with digital inspections, incident tracking, and compliance documentation.",
    features: [
      "Safety inspections",
      "Incident reporting",
      "Training records",
      "Compliance tracking",
      "OSHA logs",
      "Certifications",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "Resource Management",
    category: "Planning",
    description:
      "Optimize workforce, equipment, and material allocation across all projects with intelligent scheduling.",
    features: [
      "Workforce planning",
      "Equipment tracking",
      "Material management",
      "Vendor management",
      "Procurement",
      "Inventory",
    ],
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI Intelligence",
    category: "Intelligence",
    description:
      "Leverage machine learning for predictive analytics, automated insights, and intelligent document processing.",
    features: [
      "Delay prediction",
      "Cost forecasting",
      "Risk scoring",
      "Document AI",
      "Smart alerts",
      "Auto-optimization",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    category: "Intelligence",
    description:
      "Gain insights with customizable dashboards, automated reports, and portfolio-level analytics.",
    features: [
      "Custom dashboards",
      "Automated reports",
      "KPI tracking",
      "Portfolio views",
      "Export to PDF/Excel",
      "Executive summaries",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
];

// System integration ecosystem
const integrations = [
  { category: "BIM & Design", tools: ["Revit", "Navisworks", "BIM 360", "AutoCAD"] },
  { category: "Accounting", tools: ["Sage", "QuickBooks", "Viewpoint", "Foundation"] },
  { category: "Scheduling", tools: ["Primavera P6", "MS Project", "Smartsheet"] },
  { category: "Communication", tools: ["Slack", "Microsoft Teams", "Outlook", "Gmail"] },
  { category: "Storage", tools: ["SharePoint", "Google Drive", "Dropbox", "Box"] },
  { category: "Field", tools: ["Bluebeam", "PlanGrid", "Fieldwire"] },
];

// Deployment options
const deploymentOptions = [
  {
    icon: Cloud,
    title: "Cloud (SaaS)",
    description: "Fully managed cloud deployment with automatic updates and zero maintenance",
    features: ["No IT infrastructure", "Automatic updates", "Global CDN", "99.9% uptime SLA"],
  },
  {
    icon: Lock,
    title: "Private Cloud",
    description: "Dedicated cloud environment for organizations with enhanced security requirements",
    features: ["Dedicated resources", "Custom security", "VPN connectivity", "Compliance controls"],
  },
  {
    icon: Database,
    title: "Hybrid",
    description: "Combine cloud convenience with on-premise data residency for sensitive information",
    features: ["Data sovereignty", "Local storage option", "Cloud processing", "Best of both"],
  },
];

// Why choose Space AI system
const whySpaceAI = [
  {
    icon: Brain,
    title: "AI-Native Architecture",
    description:
      "Built from the ground up with AI, not bolted on as an afterthought. Predictive analytics throughout.",
  },
  {
    icon: Smartphone,
    title: "True Mobile Experience",
    description:
      "Full functionality on any device with offline capability for field teams without connectivity.",
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description:
      "Go live in weeks, not months. Intuitive design means minimal training and fast adoption.",
  },
  {
    icon: Globe,
    title: "Enterprise Scale",
    description:
      "From single projects to global portfolios. Scales seamlessly as your business grows.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption and granular access controls.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Innovation",
    description:
      "Monthly updates with new features. Your system gets better without disruption.",
  },
];

// Capability highlights
const successMetrics = [
  { value: "Live", label: "Project Visibility", icon: Clock },
  { value: "Shared", label: "Budget Context", icon: DollarSign },
  { value: "Connected", label: "Team Workflows", icon: TrendingUp },
  { value: "Role-Based", label: "Operational Access", icon: Shield },
];

// Platform highlights
const trustStats = [
  { value: "Core", label: "Scheduling", icon: Building2 },
  { value: "Control", label: "Budgets & Costs", icon: DollarSign },
  { value: "Field", label: "Execution Tools", icon: Star },
  { value: "Secure", label: "Deployment Options", icon: Zap },
];

// FAQs
const faqs = [
  {
    question: "What is a construction project management system?",
    answer:
      "A construction project management system (CPMS) is a comprehensive software platform that integrates all aspects of construction project delivery into a unified system. Unlike point solutions that handle single functions, a CPMS provides scheduling, budgeting, document management, field tools, resource management, and reporting in one connected platform. This integration eliminates data silos, reduces manual data entry, and provides real-time visibility across all project dimensions. Modern systems like Space AI add AI capabilities for predictive analytics and intelligent automation.",
  },
  {
    question: "What modules are included in Space AI's construction management system?",
    answer:
      "Space AI includes nine integrated modules: (1) Project Scheduling - Gantt charts, critical path, AI optimization, (2) Financial Management - budgets, costs, change orders, forecasting, (3) Document Control - version management, workflows, AI search, (4) Field Management - daily logs, inspections, punch lists, (5) Team Collaboration - messaging, tasks, stakeholder portals, (6) Safety & Compliance - inspections, incidents, OSHA tracking, (7) Resource Management - workforce, equipment, materials, (8) AI Intelligence - predictions, automation, document processing, and (9) Reporting & Analytics - dashboards, KPIs, portfolio views. All modules share a common data layer for seamless integration.",
  },
  {
    question: "How does Space AI differ from other construction management systems?",
    answer:
      "Space AI is designed as a connected system for scheduling, financial workflows, documents, field coordination, and reporting. The focus is on keeping teams in one operational environment instead of stitching together disconnected point tools.",
  },
  {
    question: "How long does CPMS implementation take?",
    answer:
      "Space AI implementation is significantly faster than traditional CPMS deployments. Typical timelines: Small teams (1-10 users) - operational in 1-2 weeks with self-service setup. Mid-size companies (10-50 users) - 2-4 weeks with guided onboarding. Enterprise (50+ users) - 4-8 weeks including integrations, custom configuration, and comprehensive training. This compares favorably to traditional enterprise systems that often take 6-12 months. Our rapid deployment is enabled by cloud architecture, pre-built templates, and intuitive design that minimizes training requirements.",
  },
  {
    question: "What integrations does the construction management system support?",
    answer:
      "Space AI integrates with your existing construction technology ecosystem: BIM & Design (Revit, Navisworks, BIM 360, AutoCAD), Accounting (Sage, QuickBooks, Viewpoint, Foundation), Scheduling (Primavera P6, MS Project, Smartsheet), Communication (Slack, Microsoft Teams, Outlook, Gmail), Storage (SharePoint, Google Drive, Dropbox, Box), and Field tools (Bluebeam, PlanGrid). We also offer a comprehensive REST API for custom integrations with any system. Integration data flows enhance AI predictions and eliminate duplicate data entry.",
  },
  {
    question: "Is Space AI suitable for enterprise construction companies?",
    answer:
      "Yes. Space AI supports portfolio oversight, multi-entity structures, enterprise security controls, and flexible deployment models for organizations that need broader operational governance.",
  },
  {
    question: "How does pricing work for the construction management system?",
    answer:
      "Packaging depends on team size, workflow scope, support needs, and integration requirements. The best way to get current commercial details is through a scoped conversation with the Space AI team.",
  },
  {
    question: "What training and support is provided?",
    answer:
      "Space AI provides comprehensive support: Self-Service - extensive help center, video tutorials, and in-app guidance. Onboarding - dedicated success manager for Professional and Enterprise customers. Training - live webinars, on-demand courses, and optional on-site training. Support - email support for all tiers, priority phone/chat for Professional+, and dedicated account team for Enterprise. Our intuitive design philosophy means most users are productive within hours, not weeks, reducing formal training requirements compared to traditional enterprise systems.",
  },
];

export default function ConstructionProjectManagementSystemPage() {
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
            name: "Space AI Construction Project Management System",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Project Management System",
            operatingSystem: "Web, iOS, Android",
            featureList: [
              "Project Scheduling",
              "Financial Management",
              "Document Control",
              "Field Management",
              "Team Collaboration",
              "Safety & Compliance",
              "Resource Management",
              "AI Intelligence",
              "Reporting & Analytics",
            ],
          }),
        }}
      />

      <div className="bg-black text-white min-h-screen">
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-black to-blue-900/30" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Blueprint grid effect */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Layers className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white/80">Complete Construction Management Platform</span>
              </div>
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Construction</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Project Management
                </span>
                <br />
                <span className="text-white">System</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
                One unified system for{" "}
                <span className="text-blue-400 font-semibold">scheduling</span>,{" "}
                <span className="text-purple-400 font-semibold">budgeting</span>,{" "}
                <span className="text-teal-400 font-semibold">documents</span>, and{" "}
                <span className="text-green-400 font-semibold">field management</span>—powered by AI.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-blue-500/25"
                >
                  Explore the Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  <Play className="w-5 h-5" />
                  Watch System Demo
                </Link>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {trustStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SUCCESS METRICS */}
        {/* ============================================ */}
        <section className="py-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                Built for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Connected Operations
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {successMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <metric.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SYSTEM MODULES */}
        {/* ============================================ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                <Layers className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Integrated Platform</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nine Modules.{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  One System.
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Every aspect of construction management, unified in a single intelligent platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {systemModules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${module.gradient} flex-shrink-0`}>
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase mb-1">{module.category}</div>
                      <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-4">{module.description}</p>

                  <div className="grid grid-cols-2 gap-1">
                    {module.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-1.5 text-xs text-white/60">
                        <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHY PMSPACE */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Teams Choose{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Space AI
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Built different from legacy construction management systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whySpaceAI.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/60 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* INTEGRATIONS */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connects With Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Existing Tools
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Seamless integrations with the construction technology ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {integrations.map((cat, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-blue-400 font-semibold mb-3">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* DEPLOYMENT OPTIONS */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Flexible{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Deployment Options
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Choose the deployment model that fits your organization&apos;s requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {deploymentOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-blue-500/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-white/60 text-sm mb-6">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">
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
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for a Complete{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Construction Management System?
                </span>
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                See how Space AI can support project controls, field coordination, and connected
                reporting from preconstruction through closeout.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all"
                >
                  Request a Walkthrough
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
                Scheduling, budgeting, documents, and field workflows in one system
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
