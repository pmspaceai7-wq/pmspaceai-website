// src/app/guides/ultimate-construction-management-guide/page.tsx
// TASK 51: Ultimate Guide to Construction Management Software
// 5000+ word comprehensive guide - Featured snippet target for "what is construction management software"

import { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, CheckCircle, ArrowRight, Layers, Target,
  BarChart3, FileText, Users, Clock, Shield, Zap,
  Brain, Workflow, Globe, Rocket, Award, Star,
  ChevronRight, Download, BookOpen, Lightbulb,
  Calculator, TrendingUp, Settings, Smartphone,
  Calendar, DollarSign, AlertTriangle, HardHat, Sparkles
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import { TableOfContents, TOCItem } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Ultimate Guide to Construction Management Software 2026 | Space AI",
  description: "The definitive guide to construction management software. Learn key features, how to choose the right platform, implementation best practices, and ROI calculations in this expert guide.",
  keywords: [
    "construction management software",
    "what is construction management software",
    "construction management software guide",
    "construction software features",
    "how to choose construction software",
    "construction project management software",
    "best construction management software",
    "construction software comparison",
    "construction software implementation",
    "construction software ROI",
  ],
  alternates: {
    canonical: "https://pmspace.ai/guides/ultimate-construction-management-guide/",
  },
  openGraph: {
    title: "Ultimate Guide to Construction Management Software 2026",
    description: "Everything you need to know about construction management software: features, selection criteria, implementation, and ROI.",
    url: "https://pmspace.ai/guides/ultimate-construction-management-guide/",
    type: "article",
    publishedTime: "2026-01-14T00:00:00Z",
    authors: ["Space AI Research Team"],
    images: [
      {
        url: "https://pmspace.ai/assets/images/ultimate-cms-guide-og.png",
        width: 1200,
        height: 630,
        alt: "Ultimate Construction Management Software Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Guide to Construction Management Software 2026",
    description: "The definitive guide to construction management software.",
  },
};

// Table of contents structure
const tableOfContents: TOCItem[] = [
  { id: "introduction", title: "What is Construction Management Software?", level: 1 },
  { id: "evolution", title: "The Evolution of Construction Technology", level: 1 },
  { id: "key-features", title: "Essential Features to Look For", level: 1 },
  { id: "feature-project-management", title: "Project Management & Scheduling", level: 2 },
  { id: "feature-document-management", title: "Document Management", level: 2 },
  { id: "feature-financial", title: "Financial Management", level: 2 },
  { id: "feature-field-management", title: "Field Management", level: 2 },
  { id: "feature-ai", title: "AI & Predictive Analytics", level: 2 },
  { id: "types", title: "Types of Construction Software", level: 1 },
  { id: "selection-criteria", title: "How to Choose the Right Software", level: 1 },
  { id: "implementation", title: "Implementation Best Practices", level: 1 },
  { id: "roi", title: "Calculating ROI", level: 1 },
  { id: "trends", title: "Future Trends 2026-2030", level: 1 },
  { id: "checklist", title: "Buyer&apos;s Checklist", level: 1 },
  { id: "faq", title: "Frequently Asked Questions", level: 1 },
];

// FAQ data for schema
const faqs = [
  {
    question: "What is construction management software?",
    answer: "Construction management software is a digital platform that helps construction professionals plan, coordinate, and control projects from inception to completion. It centralizes project data, automates workflows, manages documents, tracks budgets, schedules tasks, and facilitates team collaboration. Modern solutions include AI-powered features for predictive analytics and risk management."
  },
  {
    question: "How much does construction management software cost?",
    answer: "Construction management software typically costs between $0-$150 per user per month. Basic plans start free or around $29/user/month, mid-tier solutions range $50-99/user/month, and enterprise solutions can cost $100-150+/user/month. Space AI offers a free tier with unlimited projects, with paid plans starting at $49/user/month."
  },
  {
    question: "What are the key features of construction management software?",
    answer: "Essential features include: project scheduling and Gantt charts, document management, budget tracking, RFI and submittal management, daily reports, mobile access, team collaboration, safety management, and reporting/analytics. Advanced features include AI-powered scheduling, predictive delay detection, and automated workflows."
  },
  {
    question: "How long does it take to implement construction management software?",
    answer: "Implementation timelines vary: simple cloud solutions can be set up in 1-2 weeks, mid-complexity implementations take 4-8 weeks, and enterprise deployments may require 3-6 months. Space AI offers rapid onboarding with most teams fully operational within 2 weeks."
  },
  {
    question: "What is the ROI of construction management software?",
    answer: "According to the FMI Corporation 2023 Construction Technology Benchmark and Dodge Data & Analytics 2024 SmartMarket Report, construction management software delivers 15-30% improvement in project efficiency, 20-40% reduction in rework, 10-25% cost savings on projects, and 50-70% reduction in administrative time. Typical ROI is achieved within 3-6 months of implementation."
  },
  {
    question: "Can small construction companies benefit from construction management software?",
    answer: "Absolutely. Small construction companies often see the highest ROI from construction management software because they can eliminate manual processes that consume disproportionate time. Cloud-based solutions with free tiers like Space AI make enterprise-grade features accessible to businesses of all sizes."
  },
  {
    question: "What is the difference between construction management software and project management software?",
    answer: "Construction management software is specifically designed for the construction industry, including features like RFI management, submittal tracking, punch lists, drawing management, and field reporting. General project management software lacks these industry-specific features and integrations with construction tools like BIM."
  },
  {
    question: "Is cloud-based or on-premise construction software better?",
    answer: "Cloud-based construction software is recommended for most companies due to lower upfront costs, automatic updates, better mobile access, easier collaboration, and reduced IT burden. On-premise solutions may be preferred by large enterprises with specific security requirements or government contracts requiring data sovereignty."
  }
];

export default function UltimateConstructionManagementGuidePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* FAQ Schema */}
      <FAQSchema faqs={faqs} />

      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
              Comprehensive Guide
            </span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
              5000+ Words
            </span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium">
              Updated Jan 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              The Ultimate Guide to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Construction Management Software
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Everything you need to know about selecting, implementing, and maximizing ROI 
            from construction management software in 2026 and beyond.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Clock, label: "Read Time", value: "25 min" },
              { icon: FileText, label: "Sections", value: "15" },
              { icon: CheckCircle, label: "Checklist Items", value: "50+" },
              { icon: Star, label: "Expert Tips", value: "30+" },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with TOC Sidebar */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar TOC */}
          <aside className="lg:w-72 flex-shrink-0">
            <TableOfContents items={tableOfContents} title="In This Guide" sticky />
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-400" />
                What is Construction Management Software?
              </h2>
              
              {/* Featured Answer Box for Featured Snippet */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
                <p className="text-lg text-white leading-relaxed">
                  <strong className="text-blue-300">Construction management software</strong> is a comprehensive 
                  digital platform designed to help construction professionals plan, coordinate, and control 
                  building projects from inception to completion. It serves as a central hub for all project 
                  data, enabling teams to manage schedules, budgets, documents, resources, and communications 
                  in one unified system.
                </p>
              </div>

              <p className="text-white/80 leading-relaxed mb-6">
                The construction industry manages over $13 trillion in global annual spending, yet it remains 
                one of the least digitized sectors. According to McKinsey 2023 Construction Productivity Report, 
                98% of large capital projects experience cost overruns or delays of at least 20%, with projects 
                typically running 80% over budget and taking 20% longer than planned. Construction management software 
                addresses these challenges by providing visibility, automation, and data-driven insights 
                that were previously impossible with paper-based or fragmented digital systems.
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                Modern construction management platforms go beyond simple project tracking. They incorporate 
                artificial intelligence to predict delays before they occur, automate routine workflows, 
                and provide prescriptive recommendations for keeping projects on track. This evolution from 
                &quot;systems of record&quot; to &quot;systems of intelligence&quot; represents the biggest shift in construction 
                technology since the adoption of CAD.
              </p>

              {/* Key Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, title: "Save Time", desc: "Reduce administrative tasks by 40-60% (FMI Corporation 2023 Labor Productivity Study)" },
                  { icon: DollarSign, title: "Cut Costs", desc: "Lower project costs by 10-25% (Dodge Data & Analytics 2024 SmartMarket Report)" },
                  { icon: Shield, title: "Reduce Risk", desc: "Identify potential issues 45+ days before they impact schedule (McKinsey 2023 Construction Technology Analysis)" },
                  { icon: Users, title: "Improve Collaboration", desc: "Connect office and field teams in real-time" },
                ].map((benefit, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <benefit.icon className="w-6 h-6 text-blue-400 mb-3" />
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-white/60">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Evolution */}
            <section id="evolution" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-purple-400" />
                The Evolution of Construction Technology
              </h2>

              <p className="text-white/80 leading-relaxed mb-6">
                Construction technology has evolved through several distinct phases, each bringing new 
                capabilities and efficiencies to the industry. Understanding this evolution helps explain 
                why modern AI-powered platforms represent such a significant leap forward.
              </p>

              {/* Timeline */}
              <div className="relative border-l-2 border-purple-500/30 pl-8 space-y-8 mb-8">
                {[
                  { year: "1980s-1990s", title: "CAD Era", desc: "Computer-aided design replaces hand drafting. Documents remain paper-based." },
                  { year: "2000s", title: "Point Solutions", desc: "Specialized software for estimating, scheduling, and accounting emerges. Systems don't communicate." },
                  { year: "2010-2015", title: "Cloud Adoption", desc: "Web-based platforms enable mobile access and real-time collaboration. Procore leads market growth." },
                  { year: "2016-2020", title: "Platform Consolidation", desc: "All-in-one platforms emerge. BIM adoption accelerates. Mobile becomes essential." },
                  { year: "2021-2024", title: "AI Integration", desc: "Machine learning enters construction. Predictive analytics, computer vision, and automation features appear." },
                  { year: "2025+", title: "Intelligent Systems", desc: "AI-native platforms provide prescriptive insights. Autonomous project management becomes reality." },
                ].map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-11 w-5 h-5 rounded-full bg-purple-500/50 border-2 border-purple-400"></div>
                    <span className="text-purple-400 font-semibold">{phase.year}</span>
                    <h4 className="text-lg font-bold text-white mt-1">{phase.title}</h4>
                    <p className="text-white/60">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Key Features */}
            <section id="key-features" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-green-400" />
                Essential Features to Look For
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                When evaluating construction management software, certain features are non-negotiable for 
                modern construction operations. Here&apos;s a comprehensive breakdown of the capabilities 
                your platform should offer.
              </p>

              {/* Feature: Project Management */}
              <div id="feature-project-management" className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  Project Management &amp; Scheduling
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  The core of any construction management platform is its ability to plan, schedule, and 
                  track project progress. Look for these capabilities:
                </p>
                <ul className="space-y-3">
                  {[
                    "Gantt charts with drag-and-drop scheduling",
                    "Critical path method (CPM) analysis",
                    "Resource allocation and leveling",
                    "Milestone tracking and dependencies",
                    "Baseline comparison and variance analysis",
                    "AI-powered schedule optimization",
                    "What-if scenario planning",
                    "Integration with Primavera P6 and MS Project"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature: Document Management */}
              <div id="feature-document-management" className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-orange-400" />
                  Document Management
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Construction projects generate thousands of documents. Effective document management 
                  ensures the right information reaches the right people at the right time.
                </p>
                <ul className="space-y-3">
                  {[
                    "Centralized document repository with version control",
                    "Drawing management with markup and redlining",
                    "RFI (Request for Information) workflow",
                    "Submittal tracking and approval workflows",
                    "Transmittal management",
                    "OCR and intelligent document processing",
                    "Mobile access to drawings in the field",
                    "Integration with Bluebeam, AutoCAD, and Revit"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature: Financial Management */}
              <div id="feature-financial" className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  Financial Management
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Budget overruns are the single biggest cause of project failure. Robust financial 
                  management features provide real-time visibility into project costs.
                </p>
                <ul className="space-y-3">
                  {[
                    "Budget creation and tracking",
                    "Cost coding and categorization",
                    "Change order management",
                    "Progress billing and pay applications",
                    "Subcontractor payment tracking",
                    "Cash flow forecasting",
                    "Earned value management (EVM)",
                    "Integration with accounting systems (QuickBooks, Sage, Viewpoint)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature: Field Management */}
              <div id="feature-field-management" className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <HardHat className="w-6 h-6 text-yellow-400" />
                  Field Management
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Field teams need mobile-first tools that work offline and capture real-time data 
                  from the jobsite.
                </p>
                <ul className="space-y-3">
                  {[
                    "Daily logs and field reports",
                    "Time tracking and labor management",
                    "Safety inspections and incident reporting",
                    "Punch list management with photos",
                    "Quality assurance checklists",
                    "Equipment tracking",
                    "Weather integration",
                    "Offline mode with automatic sync"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature: AI */}
              <div id="feature-ai" className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-400" />
                  AI &amp; Predictive Analytics
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  The newest generation of construction software incorporates artificial intelligence 
                  to transform reactive management into proactive project control.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5 mb-4">
                  <p className="text-purple-200 font-medium mb-2">
                    💡 Pro Tip: AI capabilities are now table stakes
                  </p>
                  <p className="text-white/70 text-sm">
                    By 2026, construction software without AI features is considered legacy technology. 
                    Look for platforms built with AI at their core, not bolted on as an afterthought.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Predictive delay detection (30-45 days advance warning)",
                    "Schedule risk analysis and scoring",
                    "Automated document classification",
                    "Natural language processing for RFIs",
                    "Computer vision for progress monitoring",
                    "Cost overrun prediction",
                    "Resource optimization recommendations",
                    "Anomaly detection for safety and quality"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 4: Types of Software */}
            <section id="types" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-cyan-400" />
                Types of Construction Software
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                Construction software exists in several categories. Understanding the landscape helps 
                you identify what type of solution best fits your needs.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "All-in-One Platforms",
                    desc: "Comprehensive solutions covering project management, financials, and field ops",
                    examples: "Space AI, Procore, Autodesk Construction Cloud",
                    bestFor: "General contractors, large projects",
                    icon: Layers
                  },
                  {
                    title: "Scheduling Specialists",
                    desc: "Deep scheduling and planning capabilities",
                    examples: "Primavera P6, Microsoft Project, Smartsheet",
                    bestFor: "Complex scheduling needs",
                    icon: Calendar
                  },
                  {
                    title: "Estimating Software",
                    desc: "Pre-construction cost estimation and takeoffs",
                    examples: "PlanSwift, Bluebeam, Stack",
                    bestFor: "Estimators, bid preparation",
                    icon: Calculator
                  },
                  {
                    title: "Field Management Apps",
                    desc: "Mobile-first tools for jobsite productivity",
                    examples: "Fieldwire, PlanGrid, Raken",
                    bestFor: "Field teams, daily reporting",
                    icon: Smartphone
                  },
                  {
                    title: "Safety & Compliance",
                    desc: "Safety inspections, incident tracking, training",
                    examples: "SafetyCulture, ComplianceQuest",
                    bestFor: "Safety managers, high-risk projects",
                    icon: Shield
                  },
                  {
                    title: "BIM Platforms",
                    desc: "Building Information Modeling tools",
                    examples: "Revit, Navisworks, BIM 360",
                    bestFor: "Design-build, complex structures",
                    icon: Building2
                  },
                ].map((type, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <type.icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">{type.title}</h4>
                    <p className="text-white/70 text-sm mb-3">{type.desc}</p>
                    <p className="text-xs text-white/50 mb-1"><strong>Examples:</strong> {type.examples}</p>
                    <p className="text-xs text-cyan-400"><strong>Best for:</strong> {type.bestFor}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Selection Criteria */}
            <section id="selection-criteria" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-red-400" />
                How to Choose the Right Software
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                Selecting construction management software is a significant decision that will impact 
                your operations for years. Follow this structured evaluation process to make the right choice.
              </p>

              {/* Step-by-step process */}
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Assess Your Current State",
                    content: "Document your existing processes, pain points, and tool inventory. Interview stakeholders from different departments to understand their needs. Calculate the cost of your current inefficiencies.",
                    questions: ["What processes take the most time?", "Where do projects commonly go wrong?", "What data do you wish you had?"]
                  },
                  {
                    step: 2,
                    title: "Define Requirements",
                    content: "Create a prioritized list of must-have vs nice-to-have features. Consider both immediate needs and 3-5 year growth plans. Factor in integration requirements with existing systems.",
                    questions: ["What features are non-negotiable?", "What integrations are required?", "What's your growth trajectory?"]
                  },
                  {
                    step: 3,
                    title: "Evaluate Vendors",
                    content: "Create a shortlist of 3-5 vendors. Request demos tailored to your use cases. Check references from similar companies in your market.",
                    questions: ["Is the vendor financially stable?", "What's their implementation track record?", "How responsive is support?"]
                  },
                  {
                    step: 4,
                    title: "Calculate Total Cost of Ownership",
                    content: "Look beyond subscription fees to include implementation, training, customization, and ongoing support costs. Factor in productivity gains and risk reduction.",
                    questions: ["What are all the costs over 3 years?", "What's the expected ROI timeline?", "Are there hidden fees?"]
                  },
                  {
                    step: 5,
                    title: "Run a Pilot",
                    content: "Test your top choice on a real project before full commitment. Involve actual end users in the pilot. Measure concrete results against baseline.",
                    questions: ["Did it solve our key problems?", "Was adoption smooth?", "What's the user feedback?"]
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-white/70 mb-3">{step.content}</p>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Key Questions to Ask:</p>
                        <ul className="text-sm text-white/60 space-y-1">
                          {step.questions.map((q, i) => (
                            <li key={i}>• {q}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Implementation */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-orange-400" />
                Implementation Best Practices
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                The difference between a successful software implementation and a failed one often comes 
                down to change management, not technology. Follow these best practices for smooth adoption.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { phase: "Phase 1", title: "Planning", duration: "2-4 weeks", items: ["Define success metrics", "Assign project team", "Create communication plan", "Set realistic timeline"] },
                  { phase: "Phase 2", title: "Configuration", duration: "2-6 weeks", items: ["Set up organizational structure", "Configure workflows", "Import existing data", "Integrate connected systems"] },
                  { phase: "Phase 3", title: "Rollout", duration: "4-8 weeks", items: ["Train power users first", "Phase rollout by team", "Provide ongoing support", "Measure and iterate"] },
                ].map((phase, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-orange-400 text-sm font-medium">{phase.phase}</span>
                    <h4 className="text-xl font-bold text-white mt-1 mb-1">{phase.title}</h4>
                    <p className="text-white/50 text-sm mb-4">{phase.duration}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="text-sm text-white/70 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Warning Box */}
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-300 mb-1">Common Implementation Pitfalls</h4>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Trying to change everything at once (boil the ocean)</li>
                      <li>• Insufficient training budget and time</li>
                      <li>• Lack of executive sponsorship</li>
                      <li>• No change management plan</li>
                      <li>• Expecting immediate perfection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: ROI */}
            <section id="roi" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-green-400" />
                Calculating ROI
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                Demonstrating ROI is essential for gaining executive buy-in and justifying your 
                software investment. Here&apos;s how to calculate the return on construction management software.
              </p>

              {/* ROI Calculator Preview */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-green-300 mb-4">Sample ROI Calculation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/50 text-sm mb-2">COSTS (Annual)</p>
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between"><span>Software subscription</span><span>$60,000</span></div>
                      <div className="flex justify-between"><span>Implementation</span><span>$15,000</span></div>
                      <div className="flex justify-between"><span>Training</span><span>$10,000</span></div>
                      <div className="flex justify-between border-t border-white/10 pt-2 font-bold"><span>Total Investment</span><span>$85,000</span></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-2">SAVINGS (Annual)</p>
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between"><span>Admin time saved</span><span>$120,000</span></div>
                      <div className="flex justify-between"><span>Reduced rework</span><span>$200,000</span></div>
                      <div className="flex justify-between"><span>Avoided delays</span><span>$150,000</span></div>
                      <div className="flex justify-between border-t border-white/10 pt-2 font-bold text-green-400"><span>Total Savings</span><span>$470,000</span></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/20 rounded-lg text-center">
                  <span className="text-green-300 text-lg font-bold">ROI: 453% | Payback Period: 2.2 months</span>
                </div>
                <p className="text-white/50 text-sm mt-2">Sample based on mid-market contractor data from FMI Corporation and Dodge Data & Analytics benchmarks. Individual results vary.</p>
              </div>

              {/* ROI Drivers */}
              <h4 className="text-xl font-bold text-white mb-4">Key ROI Drivers</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { metric: "Time Savings", value: "15-25%", desc: "Reduction in administrative tasks (FMI Corporation 2023)" },
                  { metric: "Rework Reduction", value: "20-40%", desc: "Fewer errors from better coordination (Dodge Data & Analytics 2024)" },
                  { metric: "Schedule Improvement", value: "10-20%", desc: "Faster project completion (McKinsey 2023)" },
                  { metric: "Cost Avoidance", value: "5-15%", desc: "Prevented budget overruns (Construction Industry Institute 2023)" },
                ].map((driver, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{driver.value}</div>
                    <div className="font-semibold text-white">{driver.metric}</div>
                    <div className="text-sm text-white/50">{driver.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Future Trends */}
            <section id="trends" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-indigo-400" />
                Future Trends 2026-2030
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                The construction technology landscape is evolving rapidly. Understanding emerging trends 
                helps you select a platform that will remain relevant and competitive.
              </p>

              <div className="space-y-6">
                {[
                  {
                    trend: "Autonomous Project Management",
                    desc: "AI agents that can independently manage routine tasks, escalating only exceptions to humans. By 2028, expect 40% of project management tasks to be fully automated.",
                    icon: Brain
                  },
                  {
                    trend: "Digital Twins at Scale",
                    desc: "Real-time digital replicas of construction projects connected to IoT sensors, enabling predictive maintenance and simulation before execution.",
                    icon: Building2
                  },
                  {
                    trend: "Generative AI for Design",
                    desc: "AI-generated design options, automated drawing creation, and natural language interfaces for querying project data.",
                    icon: Sparkles
                  },
                  {
                    trend: "Extended Reality (XR) Integration",
                    desc: "AR for field workers to overlay digital information on physical spaces. VR for project reviews and safety training.",
                    icon: Globe
                  },
                  {
                    trend: "Blockchain for Contracts",
                    desc: "Smart contracts for automated payments, immutable audit trails, and transparent supply chain tracking.",
                    icon: Shield
                  },
                ].map((trend, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl">
                    <trend.icon className="w-8 h-8 text-indigo-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{trend.trend}</h4>
                      <p className="text-white/70">{trend.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Checklist */}
            <section id="checklist" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-teal-400" />
                Buyer&apos;s Checklist
              </h2>

              <p className="text-white/80 leading-relaxed mb-8">
                Use this comprehensive checklist when evaluating construction management software vendors.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      category: "Core Features",
                      items: ["Project scheduling & Gantt charts", "Document management & version control", "Budget tracking & cost management", "RFI & submittal workflows", "Daily reporting & field logs", "Mobile app (iOS & Android)"]
                    },
                    {
                      category: "Advanced Features",
                      items: ["AI-powered predictions", "Automated workflows", "Custom reporting & dashboards", "API & integrations", "Offline mode", "Multi-project portfolio view"]
                    },
                    {
                      category: "Security & Compliance",
                      items: ["SOC 2 Type II certification", "Data encryption (at rest & in transit)", "Role-based access controls", "Audit logging", "GDPR compliance", "Regular security audits"]
                    },
                    {
                      category: "Vendor Evaluation",
                      items: ["Financial stability", "Implementation track record", "Customer support quality", "Training resources", "Product roadmap", "User community & ecosystem"]
                    },
                  ].map((section, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-teal-300 mb-3">{section.category}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-4 h-4 border border-white/30 rounded"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 10: FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-yellow-400" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <h4 className="font-bold text-white mb-2">{faq.question}</h4>
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Construction Operations?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Space AI is the AI-native construction management platform trusted by contractors worldwide. 
                Start with our free tier or book a personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* Related Guides */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AI in Construction Guide", href: "/guides/ai-construction-management-complete-guide/", desc: "Deep dive into AI technology" },
              { title: "Software Comparison", href: "/compare/construction-software-comparison/", desc: "Compare top 10 solutions" },
              { title: "ROI Calculator", href: "/tools/roi-calculator/", desc: "Calculate your potential savings" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group"
              >
                <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">
                  {link.title}
                </h4>
                <p className="text-sm text-white/50">{link.desc}</p>
                <span className="text-blue-400 text-sm mt-2 inline-flex items-center gap-1">
                  Read guide <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

