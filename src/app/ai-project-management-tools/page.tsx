// src/app/ai-project-management-tools/page.tsx
// TASK 20: AI Project Management Tools Landing Page
// Targeting "ai project management tools" for broader AI PM audience
// Focus: AI capabilities across all project management functions

import { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  FileText,
  Users,
  Calendar,
  MessageSquare,
  LineChart,
  Lightbulb,
  Rocket,
  Bot,
  Wand2,
  Eye,
  RefreshCw,
  Layers,
  DollarSign,
  Building2,
  AlertTriangle,
  Award,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title:
    "AI Project Management Tools | Predictive Software | Space AI",
  description:
    "AI project management tools that predict delays, automate scheduling, and optimize resources. Transform project management with machine learning. Try free.",
  keywords: [
    "ai project management tools",
    "ai project management",
    "ai project management software",
    "artificial intelligence project management ",
    "ai pm tools",
    "machine learning project management",
    "ai powered project management",
    "intelligent project management",
    "smart project management software",
    "ai task management",
    "predictive project management",
    "automated project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/ai-project-management-tools/",
  },
  openGraph: {
    title: "AI Project Management Tools | The Future of PM ",
    description:
      "Predictive analytics, automated scheduling, and intelligent insights. AI-powered project management.",
    url: "https://pmspace.ai/ai-project-management-tools/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/ai-pm-tools-og.png",
        width: 1200,
        height: 630,
        alt: "AI Project Management Tools",
      },
    ],
  },
};

// AI capabilities across PM functions
const aiCapabilities = [
  {
    icon: Eye,
    title: "Predictive Analytics",
    subtitle: "See the Future",
    description:
      "Machine learning models analyze project data to forecast outcomes before they happen. Know which projects are at risk and why, 45 days before problems hit.",
    metrics: [
      { value: "45 days", label: "early warning" },
      { value: "92%", label: "accuracy" },
    ],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Wand2,
    title: "Intelligent Automation",
    subtitle: "Work Smarter ",
    description:
      "Automate repetitive PM tasks with AI. From schedule updates to report generation,let intelligent automation handle the busywork while you focus on decisions.",
    metrics: [
      { value: "10+", label: "hours saved/week" },
      { value: "80%", label: "less manual work" },
    ],
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Brain,
    title: "Smart Recommendations",
    subtitle: "Expert Guidance",
    description:
      "AI suggests optimal resource allocation, schedule adjustments, and risk mitigation strategies based on analysis of successful project patterns.",
    metrics: [
      { value: "35%", label: "better decisions" },
      { value: "24/7", label: "availability" },
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    subtitle: "Smart Documents",
    description:
      "Extract data from contracts, specs, and drawings automatically. AI understands document context and turns unstructured data into actionable insights.",
    metrics: [
      { value: "80%", label: "faster processing" },
      { value: "99%", label: "extraction accuracy" },
    ],
    color: "from-orange-500 to-amber-600",
  },
];

// AI use cases across industries
const useCases = [
  {
    industry: "Construction",
    icon: Building2,
    applications: [
      "Delay prediction",
      "Resource optimization",
      "Risk identification",
      "Document processing",
    ],
  },
  {
    industry: "IT & Software",
    icon: Layers,
    applications: [
      "Sprint planning",
      "Velocity forecasting",
      "Bug prediction",
      "Resource matching",
    ],
  },
  {
    industry: "Marketing",
    icon: Target,
    applications: [
      "Campaign timing",
      "Budget optimization",
      "Performance prediction",
      "Content scheduling",
    ],
  },
  {
    industry: "Product Development",
    icon: Lightbulb,
    applications: [
      "Launch readiness",
      "Feature prioritization",
      "Timeline forecasting",
      "Team capacity",
    ],
  },
];

// Traditional vs AI comparison
const comparisons = [
  {
    traditional: "React to delays after they happen",
    ai: "Predict delays 45 days in advance",
    impact: "60% fewer delays",
  },
  {
    traditional: "Manual schedule updates hourly",
    ai: "AI auto-optimizes continuously",
    impact: "35% time savings",
  },
  {
    traditional: "Spreadsheet-based resource tracking",
    ai: "Intelligent resource allocation",
    impact: "28% productivity boost",
  },
  {
    traditional: "Gut-feel risk assessment",
    ai: "Data-driven risk scoring",
    impact: "50% better risk identification",
  },
  {
    traditional: "Manual document review",
    ai: "AI-powered document extraction",
    impact: "80% faster processing",
  },
  {
    traditional: "Static reporting dashboards",
    ai: "Predictive insights and alerts",
    impact: "Real-time intelligence",
  },
];

// AI maturity journey
const maturityStages = [
  {
    stage: 1,
    title: "Data Collection",
    description: "AI learns from your project history and patterns",
    icon: BarChart3,
  },
  {
    stage: 2,
    title: "Pattern Recognition",
    description: "Machine learning identifies what leads to success or failure",
    icon: Eye,
  },
  {
    stage: 3,
    title: "Predictive Insights",
    description: "AI forecasts outcomes and alerts you to risks",
    icon: TrendingUp,
  },
  {
    stage: 4,
    title: "Autonomous Optimization",
    description: "AI automatically adjusts and recommends improvements",
    icon: Rocket,
  },
];

// Trust stats
const trustStats = [
  { value: "500+", label: "Projects Optimized", icon: Target },
  { value: "45 days", label: "Advance Prediction", icon: Clock },
  { value: "4.8/5", label: "Customer Rating", icon: Star },
  { value: "23%", label: "Cost Reduction", icon: DollarSign },
];

// FAQs
const faqs = [
  {
    question: "What are AI project management tools?",
    answer:
      "AI project management tools use artificial intelligence and machine learning to enhance how projects are planned, executed, and controlled. Unlike traditional PM software that simply tracks what happened, AI tools predict what will happen, automate routine tasks, and provide intelligent recommendations. Key capabilities include predictive analytics (forecasting delays and budget overruns), intelligent automation (auto-scheduling, report generation), smart recommendations (resource allocation, risk mitigation), and document intelligence (extracting data from unstructured content).",
  },
  {
    question: "How does AI predict project delays?",
    answer:
      "AI predicts delays by analyzing patterns across multiple data sources. Space AI's AI engine examines 50+ factors including historical project performance, resource utilization, task completion rates, external factors (weather, supply chain), and current progress velocity. Machine learning models identify correlations between these factors and past delays, enabling predictions up to 45 days before problems materialize. The system continuously learns from new data, improving accuracy over time.",
  },
  {
    question: "Will AI replace project managers?",
    answer:
      "No, AI enhances project managers rather than replacing them. AI handles data analysis, pattern recognition, and routine tasks that consume PM time—like schedule updates, progress reporting, and risk monitoring. This frees project managers to focus on leadership, stakeholder relationships, team development, and strategic decisions that require human judgment. The best outcomes come from PMs who leverage AI as a force multiplier, combining human expertise with machine intelligence.",
  },
  {
    question: "How long does it take to see value from AI project management?",
    answer:
      "With Space AI, teams see value in three phases: Immediate (Week 1) - automation of routine tasks saves 5-10 hours per week. Short-term (Months 1-3) - AI provides increasingly accurate predictions as it learns your project patterns. Long-term (3+ months) - the system identifies optimization opportunities that drive significant improvements in on-time delivery and cost performance. Unlike AI solutions that require months of data collection, Space AI provides useful insights from day one using industry benchmarks.",
  },
  {
    question: "Is my project data safe with AI analysis?",
    answer:
      "Space AI maintains enterprise-grade security for all AI processing. Your data is encrypted at rest and in transit, processed in isolated environments, and never shared with other customers or used to train public AI models. We're SOC 2 Type II certified with data residency options for organizations with geographic requirements. Our AI runs on secure cloud infrastructure with role-based access controls ensuring only authorized users see sensitive information.",
  },
  {
    question: "What data does AI need to work effectively?",
    answer:
      "AI project management improves with data quality and quantity, but doesn't require perfect data to start. Space AI's AI can generate insights from: (1) Project schedules and actuals - task durations, dependencies, and completion dates, (2) Resource information - team assignments and availability, (3) Financial data - budgets, costs, and change orders, (4) Documents - contracts, specs, and correspondence. The AI supplements your data with industry benchmarks to provide value even for organizations with limited historical data.",
  },
  {
    question: "How does Space AI's AI compare to other AI PM tools?",
    answer:
      "Space AI differentiates through construction-specific AI. While generic AI tools (built into Monday.com, Asana, etc.) offer basic automation, they lack industry-specific intelligence. Space AI's AI is trained on construction data, understanding industry-specific patterns like weather impacts, trade dependencies, and seasonal availability. Our 45-day delay prediction capability and document intelligence for construction documents are capabilities that generic tools can't match. For construction teams, this specialized AI delivers 3-5x better prediction accuracy.",
  },
  {
    question: "Can AI project management tools integrate with existing software?",
    answer:
      "Yes, Space AI integrates with your existing tool ecosystem. Native integrations include BIM tools (Revit, Navisworks), accounting software (Sage, QuickBooks), scheduling tools (P6, MS Project), and communication platforms (Slack, Teams). Our open API enables custom integrations with any system. AI insights flow across integrated tools, and data from those tools enhances AI predictions. This means you can adopt AI capabilities without abandoning existing investments.",
  },
];

export default function AIProjectManagementToolsPage() {
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
            name: "Space AI AI Project Management",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "AI Project Management Tools",
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
            },
            featureList: [
              "Predictive Analytics",
              "Intelligent Automation",
              "Smart Recommendations",
              "Document Intelligence",
              "Risk Prediction",
              "Resource Optimization",
              "Schedule Optimization",
              "AI-Powered Reports",
            ],
          }),
        }}
      />

      <div className="bg-black text-white min-h-screen">
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black to-indigo-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-white/80">The Future of Project Management</span>
              </div>
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  AI Project
                </span>
                <br />
                <span className="text-white">Management</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Tools
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
                Project management powered by{" "}
                <span className="text-violet-400 font-semibold">artificial intelligence</span>.
                Predict outcomes, automate workflows, and optimize every project—
                <span className="text-indigo-400 font-semibold">automatically</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-violet-500/25"
                >
                  Try AI PM Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <Bot className="w-5 h-5" />
                  See AI in Action
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {trustStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <stat.icon className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AI CAPABILITIES */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 mb-6">
                <Brain className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300">AI-Powered Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Four AI Engines.{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Infinite Possibilities.
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Space AI combines multiple AI systems to transform every aspect of project management
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {aiCapabilities.map((cap, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cap.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${cap.color} flex-shrink-0`}>
                      <cap.icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <div className="text-sm text-white/50 mb-1">{cap.subtitle}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{cap.title}</h3>
                      <p className="text-white/70 mb-4">{cap.description}</p>

                      <div className="flex gap-4">
                        {cap.metrics.map((metric, mIndex) => (
                          <div
                            key={mIndex}
                            className="px-4 py-2 rounded-lg bg-white/10"
                          >
                            <div className="text-xl font-bold text-white">{metric.value}</div>
                            <div className="text-xs text-white/50">{metric.label}</div>
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
        {/* TRADITIONAL VS AI */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                From Reactive to{" "}
                <span className="bg-gradient-to-r from-red-400 to-violet-400 bg-clip-text text-transparent">
                  Predictive
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                See how AI transforms project management from documenting the past to shaping the
                future
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {comparisons.map((comp, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-4 items-center bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-xs text-red-400 mb-1">TRADITIONAL</div>
                      <div className="text-white/80">{comp.traditional}</div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-gradient-to-r from-red-400 to-violet-400" />
                      <Sparkles className="w-5 h-5 text-violet-400" />
                      <div className="h-px w-8 bg-gradient-to-r from-violet-400 to-indigo-400" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-xs text-violet-400 mb-1">WITH AI</div>
                      <div className="text-white">{comp.ai}</div>
                      <div className="text-sm text-indigo-400 font-medium">{comp.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AI MATURITY JOURNEY */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI Journey</h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                How Space AI&apos;s AI grows smarter with every project
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {maturityStages.map((stage, index) => (
                  <div key={index} className="relative">
                    {index < maturityStages.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-violet-500/50 to-violet-500/10" />
                    )}

                    <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-violet-500/30 transition-all">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{stage.stage}</span>
                      </div>

                      <stage.icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                      <p className="text-sm text-white/60">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* USE CASES */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Intelligent project management adapts to your industry&apos;s unique challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, aIndex) => (
                      <li key={aIndex} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        {app}
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
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center text-sm font-bold">
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-indigo-900/50" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Intelligent PM?
                </span>
              </h2>

              <p className="text-xl text-white/70 mb-8">
                Join hundreds of teams using AI to predict, automate, and optimize their projects.
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
                  Book a Demo
                </Link>
              </div>

              <p className="mt-8 text-white/50 text-sm">
                Free forever tier • AI included in all plans • No credit card required
              </p>
            </div>
          </div>
        </section>
        <section className="pb-12">
          <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3 justify-center">
            <Link href="/tools/ai-recommendation-engine/" className="text-white/80 hover:text-white underline">AI Recommendation Engine</Link>
            <Link href="/tools/construction-delay-risk-calculator/" className="text-white/80 hover:text-white underline">Delay Risk Calculator</Link>
            <Link href="/resources/ai-construction/" className="text-white/80 hover:text-white underline">AI Construction Resources</Link>
            <Link href="/pricing/" className="text-white/80 hover:text-white underline">Pricing</Link>
          </div>
        </section>
      </div>
    </>
  );
}
