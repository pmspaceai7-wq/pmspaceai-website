// src/app/ai-construction-management/page.tsx
// TASK 16: AI Construction Management Landing Page
// Elite pillar page targeting "ai construction management" keywords
// Design: Award-winning SaaS visuals with scroll-driven storytelling

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Sparkles,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Building2,
  Users,
  FileText,
  Layers,
  Cpu,
  LineChart,
  AlertTriangle,
  Calendar,
  DollarSign,
  Award,
  Globe,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import PageSummary from "@/components/PageSummary";
import { RelatedPages } from "@/components/InternalLinking";

export const metadata: Metadata = {
  title: "AI Construction Management Software 2026 | Space AI",
  description:
    "AI construction management software: predict delays 45 days early, automate scheduling, reduce costs by 23%. See the future of building. Get started free.",
  keywords: [
    "ai construction management",
    "ai construction management system",
    "artificial intelligence construction",
    "ai in construction industry",
    "ai construction software",
    "machine learning construction",
    "predictive analytics construction",
    "ai project management construction",
    "smart construction management",
    "intelligent construction software",
    "ai for construction projects",
    "construction ai platform",
  ],
  alternates: {
    canonical: "https://pmspace.ai/ai-construction-management/",
  },
  openGraph: {
    title: "AI Construction Management | The Future of Building",
    description:
      "Predict delays before they happen. AI-powered construction management that transforms how you build.",
    url: "https://pmspace.ai/ai-construction-management/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/ai-construction-og.png",
        width: 1200,
        height: 630,
        alt: "AI Construction Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Construction Management | Space AI",
    description: "Predict delays 45 days early. The future of construction is here.",
  },
};

// AI Capabilities with specific use cases
const aiCapabilities = [
  {
    icon: Brain,
    title: "Predictive Delay Analysis",
    subtitle: "See Problems Before They Happen",
    description:
      "Our machine learning algorithms analyze 50+ risk factors including weather, resource availability, and historical patterns to forecast schedule slippage up to 45 days in advance.",
    stats: { value: "45", unit: "days", label: "advance warning" },
    color: "from-purple-500 to-violet-600",
    features: [
      "Weather pattern integration",
      "Resource conflict detection",
      "Historical delay analysis",
      "Critical path monitoring",
    ],
  },
  {
    icon: Calendar,
    title: "Intelligent Scheduling",
    subtitle: "AI That Learns Your Projects",
    description:
      "Automatically optimize construction schedules based on resource availability, dependencies, and real-time conditions. The AI continuously learns from your project patterns.",
    stats: { value: "35", unit: "%", label: "time savings" },
    color: "from-teal-500 to-cyan-600",
    features: [
      "Auto-schedule optimization",
      "Dependency management",
      "Resource leveling",
      "What-if scenario modeling",
    ],
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    subtitle: "AI-Powered Document Processing",
    description:
      "Extract data from contracts, drawings, and specifications automatically. Our IDP engine understands construction documents and turns them into actionable data.",
    stats: { value: "80", unit: "%", label: "faster processing" },
    color: "from-orange-500 to-amber-600",
    features: [
      "OCR + NLP extraction",
      "Contract analysis",
      "Drawing interpretation",
      "Automated categorization",
    ],
  },
  {
    icon: Shield,
    title: "Risk Intelligence",
    subtitle: "Proactive Risk Management",
    description:
      "AI-powered risk scoring identifies potential issues across safety, budget, schedule, and quality dimensions before they become critical problems.",
    stats: { value: "60", unit: "%", label: "risk reduction" },
    color: "from-red-500 to-rose-600",
    features: [
      "Real-time risk scoring",
      "Compliance monitoring",
      "Safety prediction",
      "Mitigation recommendations",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Prediction",
    subtitle: "AI Financial Forecasting",
    description:
      "Predict final project costs with unprecedented accuracy. Machine learning models analyze historical data, market trends, and project specifics for precise forecasting.",
    stats: { value: "92", unit: "%", label: "accuracy" },
    color: "from-emerald-500 to-green-600",
    features: [
      "Budget variance prediction",
      "Change order forecasting",
      "Material cost trends",
      "Labor cost optimization",
    ],
  },
  {
    icon: Users,
    title: "Resource Optimization",
    subtitle: "Smart Allocation Engine",
    description:
      "AI analyzes your workforce, equipment, and materials to suggest optimal allocation strategies that maximize productivity and minimize idle time.",
    stats: { value: "28", unit: "%", label: "productivity boost" },
    color: "from-blue-500 to-indigo-600",
    features: [
      "Workforce optimization",
      "Equipment utilization",
      "Material forecasting",
      "Subcontractor matching",
    ],
  },
];

// How AI transforms construction - before/after comparison
const transformations = [
  {
    before: "React to delays after they happen",
    after: "Predict delays 45 days in advance",
    impact: "Proactive instead of reactive",
  },
  {
    before: "Manual schedule updates taking hours",
    after: "AI auto-optimizes schedules in seconds",
    impact: "35% time savings",
  },
  {
    before: "Documents scattered across systems",
    after: "AI extracts and organizes automatically",
    impact: "80% faster document processing",
  },
  {
    before: "Guesswork in resource allocation",
    after: "Data-driven resource optimization",
    impact: "28% productivity increase",
  },
  {
    before: "Surprise cost overruns at project end",
    after: "Real-time cost predictions with 92% accuracy",
    impact: "23% average cost savings",
  },
  {
    before: "Reactive safety incident response",
    after: "AI predicts and prevents safety risks",
    impact: "60% reduction in incidents",
  },
];

// Industry statistics
const industryStats = [
  {
    stat: "$1.6T",
    label: "Lost annually to construction inefficiency",
    source: "McKinsey Global Institute",
  },
  {
    stat: "77%",
    label: "of megaprojects are over budget",
    source: "Construction Industry Institute",
  },
  {
    stat: "98%",
    label: "of projects experience delays",
    source: "KPMG Construction Survey",
  },
  {
    stat: "35%",
    label: "potential productivity gain with AI",
    source: "Accenture Research",
  },
];

// Trust indicators
const trustSignals = [
  { value: "500+", label: "Projects Managed", icon: Building2 },
  { value: "45 days", label: "Advance Predictions", icon: Clock },
  { value: "4.8/5", label: "Customer Rating", icon: Star },
  { value: "$2.3M", label: "Avg. Savings/Project", icon: DollarSign },
];

// Use cases by role
const roleUseCases = [
  {
    role: "Project Managers",
    benefit: "Spend less time firefighting, more time leading",
    features: ["AI schedule optimization", "Risk alerts", "Team coordination"],
  },
  {
    role: "Executives",
    benefit: "Portfolio-wide visibility and predictive insights",
    features: ["Cost forecasting", "Resource optimization", "Strategic planning"],
  },
  {
    role: "Field Teams",
    benefit: "Right information at the right time on any device",
    features: ["Mobile access", "Real-time updates", "Digital forms"],
  },
  {
    role: "Estimators",
    benefit: "AI-assisted takeoffs and historical analysis",
    features: ["Cost prediction", "Quantity extraction", "Bid analysis"],
  },
];

// FAQs for AI Construction Management
const faqs = [
  {
    question: "What is AI construction management?",
    answer:
      "AI construction management uses artificial intelligence and machine learning to transform how construction projects are planned, executed, and controlled. Unlike traditional software that simply records what happened, AI construction management systems like Space AI predict what will happen, enabling proactive decision-making. Key capabilities include predictive delay analysis (forecasting problems up to 45 days early), intelligent scheduling optimization, automated document processing, and AI-powered risk management.",
  },
  {
    question: "How does AI predict construction delays?",
    answer:
      "Space AI's AI analyzes 50+ risk factors including historical project data, weather patterns, resource availability, supply chain status, and current progress to forecast potential delays. Machine learning models identify patterns that lead to delays and alert project teams before problems occur. Our predictive engine can forecast schedule slippage up to 45 days in advance with 92% accuracy, giving teams time to take preventive action.",
  },
  {
    question: "What ROI can I expect from AI construction management?",
    answer:
      "Companies using Space AI's AI construction management platform report an average of 23% cost savings, 45% fewer schedule delays, and 35% improvement in team productivity. For a typical $10M project, this translates to over $2M in savings. The ROI comes from preventing costly delays, optimizing resource allocation, reducing rework, and automating manual tasks that previously consumed hundreds of hours.",
  },
  {
    question: "Is AI construction management suitable for small builders?",
    answer:
      "Absolutely. Space AI is designed for construction teams of all sizes. Small builders benefit from AI capabilities that were previously only available to large enterprises with dedicated technology teams. Our free tier includes basic AI features, and our intuitive interface requires no technical expertise. Small builders typically see the highest percentage improvement in efficiency because they're replacing manual processes with intelligent automation.",
  },
  {
    question: "How does Space AI's AI integrate with existing tools?",
    answer:
      "Space AI integrates seamlessly with your existing construction technology stack including BIM tools (Revit, Navisworks), accounting software (Sage, QuickBooks), scheduling tools (P6, MS Project), and field apps. Our open API and pre-built connectors ensure your AI-powered insights flow across all systems. Data from integrated tools enhances the AI's predictive accuracy.",
  },
  {
    question: "What makes Space AI different from other AI construction tools?",
    answer:
      "Space AI is built specifically for the AECO industry by construction technology experts, not generic AI applied to construction. Our AI models are trained on millions of construction data points, understanding the unique patterns and risks of building projects. We offer the only platform that combines predictive scheduling, document intelligence, risk management, and resource optimization in a single unified system. Plus, our 45-day advance delay prediction is industry-leading.",
  },
  {
    question: "How long does it take to implement AI construction management?",
    answer:
      "Most teams are up and running with Space AI in under 2 weeks. Our onboarding process includes data migration from existing systems, team training, and initial AI model configuration. The AI begins providing value immediately and becomes more accurate over time as it learns your specific project patterns. Enterprise deployments with complex integrations typically take 4-6 weeks.",
  },
  {
    question: "Is my construction data secure with AI processing?",
    answer:
      "Space AI maintains enterprise-grade security with SOC 2 Type II certification, end-to-end encryption, and compliance with industry standards. Your data is never shared with other customers or used to train public AI models. We offer data residency options for organizations with geographic requirements, and our AI processing happens in secure, isolated environments.",
  },
];

export default function AIConstructionManagementPage() {
  return (
    <>
      {/* FAQ Schema for Rich Snippets */}
      <FAQSchema faqs={faqs} />

      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space AI AI Construction Management",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Management Software",
            operatingSystem: "Web, iOS, Android",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "0",
              highPrice: "999",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "247",
              bestRating: "5",
            },
            featureList: [
              "AI Predictive Delay Analysis",
              "Intelligent Schedule Optimization",
              "Document Intelligence (IDP)",
              "Risk Management AI",
              "Cost Prediction Engine",
              "Resource Optimization",
              "BIM Integration",
              "Mobile App Access",
            ],
          }),
        }}
      />

      <div className="bg-black text-white min-h-screen">
        {/* ============================================ */}
        {/* HERO SECTION - Cinematic & Bold */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-24 pb-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-teal-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            {/* Trust badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-white/80">The Future of Construction Technology</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  AI Construction
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Predict delays <span className="text-purple-400 font-semibold">45 days before</span>{" "}
                they happen. Automate scheduling. Reduce costs by{" "}
                <span className="text-teal-400 font-semibold">23%</span>. Welcome to the future of
                construction.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-purple-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  Watch AI Demo
                </Link>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {trustSignals.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{item.value}</div>
                    <div className="text-sm text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Answer-First Summary */}
      <PageSummary 
          title="Category Definition"
          answer="Space AI is AI-powered construction management software for AECO teams. It applies AI to construction scheduling, document workflows, RFIs, submittals, cost visibility, analytics, reporting, connectors, and project decision support."
          citations={[
            "Category: construction management software.",
            "Specialization: AI-powered construction management for AECO teams.",
            "Core workflows: scheduling, documents, RFIs, submittals, cost, analytics, connectors.",
            "Common alternatives: Procore, Buildertrend, Autodesk Construction Cloud, Primavera-connected workflows."
          ]}
        />

        {/* ============================================ */}
        {/* PROBLEM STATEMENT - Industry Stats */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Construction Industry Has a{" "}
                <span className="text-red-400">$1.6 Trillion Problem</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Traditional construction management tools document problems after they happen. AI
                changes everything.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {industryStats.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-white/70 mb-3">{item.label}</div>
                  <div className="text-xs text-white/40">{item.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AI CAPABILITIES - Deep Feature Showcase */}
        {/* ============================================ */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Powered by Advanced AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Six AI Engines.{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  One Platform.
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Space AI combines multiple AI systems trained specifically for construction, working
                together to transform every aspect of your projects.
              </p>
            </div>

            {/* AI Capability Cards */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Gradient accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color} rounded-t-2xl`}
                  />

                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${capability.color} flex-shrink-0`}
                    >
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-sm text-white/50 mb-1">{capability.subtitle}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                      <p className="text-white/70 mb-4">{capability.description}</p>

                      {/* Stats badge */}
                      <div className="inline-flex items-baseline gap-1 px-4 py-2 rounded-lg bg-white/10 mb-4">
                        <span className="text-3xl font-bold text-white">
                          {capability.stats.value}
                        </span>
                        <span className="text-lg text-white/70">{capability.stats.unit}</span>
                        <span className="text-sm text-white/50 ml-2">{capability.stats.label}</span>
                      </div>

                      {/* Features list */}
                      <div className="grid grid-cols-2 gap-2">
                        {capability.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                            {feature}
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
        {/* TRANSFORMATION SECTION - Before/After */}
        {/* ============================================ */}
        <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                From Reactive to{" "}
                <span className="bg-gradient-to-r from-red-400 to-teal-400 bg-clip-text text-transparent">
                  Predictive
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                See how AI transforms construction management from documenting the past to shaping
                the future.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {transformations.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-4 items-center bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  {/* Before */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-xs text-red-400 mb-1">BEFORE</div>
                      <div className="text-white/80">{item.before}</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-gradient-to-r from-red-400 to-teal-400" />
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <div className="h-px w-8 bg-gradient-to-r from-purple-400 to-teal-400" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-xs text-teal-400 mb-1">WITH AI</div>
                      <div className="text-white">{item.after}</div>
                      <div className="text-sm text-purple-400 font-medium">{item.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* USE CASES BY ROLE */}
        {/* ============================================ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                AI That{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Understands Your Role
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Different roles, different needs. Space AI&apos;s AI adapts to deliver the right insights
                to the right people.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {roleUseCases.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="text-purple-400 font-semibold mb-2">{item.role}</div>
                  <h3 className="text-lg font-bold text-white mb-4">{item.benefit}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
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
        {/* AI vs LEGACY COMPARISON */}
        {/* ============================================ */}
        <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                <Lightbulb className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">The Difference Is AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                AI Construction Management vs{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Legacy Platforms
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Procore, Buildertrend, and Autodesk Construction Cloud record what happened.
                Space AI predicts what happens next.
              </p>
            </div>

            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full min-w-[600px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-white/10 border-b border-white/10">
                    <th className="p-4 text-left text-sm font-medium text-white/80">Capability</th>
                    <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                    <th className="p-4 text-center text-sm font-medium text-white/60">Legacy Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cap: "Delay prediction", space: "AI flags risks 3–4 weeks ahead", legacy: "Reactive — after the fact" },
                    { cap: "Scheduling", space: "AI-optimized + prescriptive", legacy: "Manual Gantt edits" },
                    { cap: "Documents & RFIs", space: "AI auto-classification and routing", legacy: "Manual data entry" },
                    { cap: "Risk scoring", space: "Automated, project-wide", legacy: "None" },
                    { cap: "Cost forecasting", space: "Real-time AI predictions", legacy: "Historical budgets" },
                    { cap: "Time to value", space: "Days", legacy: "Months" },
                  ].map((row, i) => (
                    <tr key={i} className={i !== 5 ? "border-b border-white/5" : ""}>
                      <td className="p-4 text-sm text-white/80">{row.cap}</td>
                      <td className="p-4 text-sm text-purple-300/90 text-center">{row.space}</td>
                      <td className="p-4 text-sm text-white/60 text-center">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-3xl mx-auto mt-10 text-center text-white/70">
              <p className="mb-6">
                See how Space AI stacks up against the platforms most teams evaluate first.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/compare/construction-software-comparison/" className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white/85 hover:border-purple-500/50 transition-colors text-sm">
                  Full Software Comparison
                </Link>
                <Link href="/alternatives/procore-alternative/" className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white/85 hover:border-purple-500/50 transition-colors text-sm">
                  Procore Alternative
                </Link>
                <Link href="/alternatives/buildertrend-alternative/" className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white/85 hover:border-purple-500/50 transition-colors text-sm">
                  Buildertrend Alternative
                </Link>
                <Link href="/alternatives/autodesk-construction-cloud-alternative/" className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white/85 hover:border-purple-500/50 transition-colors text-sm">
                  Autodesk Alternative
                </Link>
                <Link href="/alternatives/procore-alternatives/" className="px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-white/85 hover:border-purple-500/50 transition-colors text-sm">
                  Procore Alternatives
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FAQ SECTION */}
        {/* ============================================ */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions About{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  AI Construction Management
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
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
        {/* FINAL CTA */}
        {/* ============================================ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-teal-900/50" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <Rocket className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-white/80">Join the AI Revolution</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Build{" "}
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Smarter?
                </span>
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Start predicting delays, optimizing schedules, and reducing costs with AI
                construction management. Free trial, no credit card required.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Schedule AI Demo
                </Link>
              </div>

              <p className="mt-8 text-white/50 text-sm">
                No credit card required • Free tier available forever • Setup in under 2 weeks
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <RelatedPages
            cluster="ai-technology"
            currentPath="/ai-construction-management"
            title="Explore AI Construction Resources"
            maxItems={6}
          />
        </section>
      </div>
    </>
  );
}
