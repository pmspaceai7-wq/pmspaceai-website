// src/app/predictive-analytics-construction/page.tsx
// TASK 21: Predictive Analytics for Construction Landing Page
// Targeting "predictive analytics construction" for technical buyers
// Focus: Advanced analytics, ML models, data-driven decision making

import { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Brain,
  LineChart,
  BarChart3,
  Target,
  Eye,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  AlertTriangle,
  Activity,
  PieChart,
  Database,
  Cpu,
  Layers,
  GitBranch,
  RefreshCw,
  Building2,
  DollarSign,
  Calendar,
  Users,
  FileSearch,
  Gauge,
  CircuitBoard,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title:
    "Predictive Analytics for Construction | Space AI",
  description:
    "Predictive analytics for construction. Forecast delays 45 days early, predict cost overruns, and optimize resources with machine learning.",
  keywords: [
    "predictive analytics construction",
    "construction analytics",
    "construction data analytics",
    "predictive project management",
    "construction forecasting",
    "ai analytics construction",
    "machine learning construction",
    "construction business intelligence",
    "project analytics software",
    "construction data intelligence",
    "predictive scheduling construction",
    "construction performance analytics",
  ],
  alternates: {
    canonical: "https://pmspace.ai/predictive-analytics-construction/",
  },
  openGraph: {
    title: "Predictive Analytics for Construction | AI-Powered Forecasting",
    description:
      "See the future of your projects. Machine learning forecasts delays, costs, and risks before they happen.",
    url: "https://pmspace.ai/predictive-analytics-construction/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/predictive-analytics-og.png",
        width: 1200,
        height: 630,
        alt: "Predictive Analytics for Construction",
      },
    ],
  },
};

// Analytics capabilities
const analyticsCapabilities = [
  {
    icon: Calendar,
    title: "Schedule Intelligence",
    description:
      "ML models analyze task durations, dependencies, and historical patterns to forecast schedule outcomes with unprecedented accuracy.",
    predictions: [
      "Delay probability scoring",
      "Completion date forecasting",
      "Critical path risk analysis",
      "Resource conflict prediction",
    ],
    accuracy: "92%",
    leadTime: "45 days",
  },
  {
    icon: DollarSign,
    title: "Cost Analytics",
    description:
      "Predict final project costs based on current performance, market conditions, and similar project histories.",
    predictions: [
      "Budget variance forecasting",
      "Change order prediction",
      "Material cost trends",
      "Labor cost optimization",
    ],
    accuracy: "94%",
    leadTime: "30 days",
  },
  {
    icon: Shield,
    title: "Risk Intelligence",
    description:
      "AI continuously scores and prioritizes risks across safety, schedule, budget, and quality dimensions.",
    predictions: [
      "Risk probability scoring",
      "Impact magnitude estimation",
      "Mitigation effectiveness",
      "Emerging risk detection",
    ],
    accuracy: "88%",
    leadTime: "60 days",
  },
  {
    icon: Users,
    title: "Resource Analytics",
    description:
      "Optimize workforce, equipment, and material allocation with predictive utilization modeling.",
    predictions: [
      "Demand forecasting",
      "Utilization optimization",
      "Shortage prediction",
      "Productivity trends",
    ],
    accuracy: "91%",
    leadTime: "14 days",
  },
];

// Data sources the AI uses
const dataSources = [
  {
    icon: Calendar,
    title: "Schedule Data",
    items: ["Task durations", "Dependencies", "Milestones", "Progress actuals"],
  },
  {
    icon: DollarSign,
    title: "Financial Data",
    items: ["Budgets", "Costs", "Change orders", "Invoices"],
  },
  {
    icon: Users,
    title: "Resource Data",
    items: ["Crew assignments", "Equipment usage", "Material deliveries", "Productivity"],
  },
  {
    icon: FileSearch,
    title: "Document Data",
    items: ["Contracts", "RFIs", "Submittals", "Correspondence"],
  },
  {
    icon: Activity,
    title: "External Data",
    items: ["Weather forecasts", "Market indices", "Supply chain status", "Permit timelines"],
  },
  {
    icon: Database,
    title: "Historical Data",
    items: ["Past projects", "Industry benchmarks", "Company patterns", "Lessons learned"],
  },
];

// Machine learning models used
const mlModels = [
  {
    name: "Schedule Prediction Model",
    type: "Ensemble (XGBoost + LSTM)",
    inputs: "50+ features",
    accuracy: "92%",
    description: "Forecasts task completion times and overall schedule outcomes",
  },
  {
    name: "Cost Forecasting Model",
    type: "Gradient Boosting",
    inputs: "35+ features",
    accuracy: "94%",
    description: "Predicts final project costs and identifies budget risk areas",
  },
  {
    name: "Risk Scoring Model",
    type: "Random Forest",
    inputs: "60+ features",
    accuracy: "88%",
    description: "Continuously assesses and prioritizes project risks",
  },
  {
    name: "Document Intelligence",
    type: "Transformer (BERT-based)",
    inputs: "Unstructured text",
    accuracy: "97%",
    description: "Extracts entities and insights from construction documents",
  },
];

// Predictive dashboard metrics
const dashboardMetrics = [
  {
    metric: "Delay Risk Score",
    description: "Real-time probability of schedule delay",
    visual: "Gauge chart with trend",
  },
  {
    metric: "Cost-at-Completion Forecast",
    description: "Predicted final cost with confidence interval",
    visual: "Line chart with bands",
  },
  {
    metric: "Risk Heat Map",
    description: "Visual priority matrix of active risks",
    visual: "Interactive heat map",
  },
  {
    metric: "Resource Utilization Forecast",
    description: "Predicted demand vs. availability",
    visual: "Stacked area chart",
  },
];

// Benefits with metrics
const analyticsROI = [
  { icon: Clock, stat: "45 days", label: "advance delay prediction", description: "React to problems before they impact your schedule" },
  { icon: DollarSign, stat: "23%", label: "cost reduction", description: "Prevent overruns with early cost intelligence" },
  { icon: Shield, stat: "60%", label: "fewer safety incidents", description: "Predict and prevent safety risks" },
  { icon: Target, stat: "92%", label: "forecast accuracy", description: "Make decisions with confidence" },
];

// Trust stats
const trustStats = [
  { value: "500+", label: "Projects Analyzed", icon: Building2 },
  { value: "10M+", label: "Data Points Processed", icon: Database },
  { value: "4.8/5", label: "Customer Rating", icon: Star },
  { value: "$2.3M", label: "Avg. Savings/Project", icon: DollarSign },
];

// FAQs
const faqs = [
  {
    question: "What is predictive analytics in construction?",
    answer:
      "Predictive analytics in construction uses historical data, statistical algorithms, and machine learning to forecast future project outcomes. Unlike traditional reporting that shows what happened, predictive analytics answers what will happen—enabling proactive decision-making. Key applications include schedule delay prediction (knowing weeks in advance which projects will run late), cost forecasting (predicting final costs with high accuracy), risk scoring (identifying and prioritizing threats before they materialize), and resource optimization (forecasting demand to prevent shortages).",
  },
  {
    question: "How does Space AI predict construction delays?",
    answer:
      "Space AI's delay prediction uses an ensemble of machine learning models analyzing 50+ risk factors: historical project performance (how similar tasks performed), current progress velocity (actual vs. planned completion rates), resource availability (crew, equipment, material status), external factors (weather forecasts, supply chain indicators), and pattern recognition (identifying combinations that historically led to delays). The models update continuously as new data arrives, providing real-time delay probability scores for each task and the overall project.",
  },
  {
    question: "What accuracy can I expect from construction predictive analytics?",
    answer:
      "Space AI's predictive models achieve the following accuracy levels: Schedule prediction 92% (measured as mean absolute percentage error), Cost forecasting 94%, Risk identification 88%, Document extraction 97%. Accuracy improves over time as the models learn from your specific project patterns. Initial predictions use industry benchmarks, with company-specific tuning occurring after 2-3 completed projects. These accuracy levels are validated through backtesting against historical project outcomes.",
  },
  {
    question: "What data does predictive analytics require?",
    answer:
      "Space AI's predictive analytics work with data you're already collecting: schedule data (task definitions, durations, dependencies), progress updates (percent complete, milestone status), financial data (budgets, costs, change orders), resource information (assignments, availability), and project documents (contracts, RFIs, submittals). The AI also incorporates external data like weather forecasts and market indices. You don't need perfect data to start—the system provides value immediately and improves as data quality and quantity grow.",
  },
  {
    question: "How is predictive analytics different from traditional BI dashboards?",
    answer:
      "Traditional business intelligence dashboards show lagging indicators—what already happened. By the time you see a budget overrun in a dashboard, it's too late to prevent it. Predictive analytics shows leading indicators—what will happen. Space AI's predictive engine forecasts outcomes 30-60 days in advance, giving you time to take preventive action. Additionally, predictive systems automatically surface insights and anomalies, rather than requiring users to find problems in charts and reports.",
  },
  {
    question: "Can predictive analytics help with construction safety?",
    answer:
      "Yes, Space AI's risk intelligence includes safety prediction capabilities. The system analyzes factors correlated with safety incidents: concurrent activities (high-risk trade overlaps), schedule pressure (compressed timelines), weather conditions (extreme temperatures, precipitation), crew composition (experience levels, fatigue patterns), and historical safety performance. The AI generates safety risk scores and alerts superintendents to high-risk periods, enabling proactive safety interventions. Users report 60% fewer safety incidents after implementation.",
  },
  {
    question: "How long does it take to implement predictive analytics?",
    answer:
      "Space AI delivers predictive insights from day one using industry benchmark models. The implementation timeline has three phases: Week 1 - immediate insights using benchmarks and your existing data, Months 1-3 - models calibrate to your specific patterns and improve accuracy, Month 3+ - fully tuned models with company-specific predictions. Unlike traditional BI implementations that take 6-12 months, Space AI's pre-trained AI means you see value in days, not months.",
  },
  {
    question: "What's the ROI of predictive analytics in construction?",
    answer:
      "Space AI customers report average ROI of 5:1 or higher. Typical savings sources include: delay prevention ($200K-500K per major delay avoided), cost overrun reduction (23% average improvement), productivity gains (35% from optimized resource allocation), and risk mitigation (60% fewer safety incidents). For a $10M project, these improvements typically yield $2M+ in savings. The platform pays for itself with preventing a single significant delay—everything beyond that is profit improvement.",
  },
];

export default function PredictiveAnalyticsConstructionPage() {
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
            name: "Space AI Predictive Analytics",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Analytics Software",
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
              "Schedule Delay Prediction",
              "Cost Forecasting",
              "Risk Intelligence",
              "Resource Analytics",
              "Machine Learning Models",
              "Predictive Dashboards",
              "Real-time Alerts",
              "Historical Analysis",
            ],
          }),
        }}
      />

      <div className="bg-black text-white min-h-screen">
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section className="relative overflow-hidden pt-24 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          {/* Data visualization lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M0 80 Q 25 60, 50 70 T 100 50"
                stroke="url(#gradient1)"
                strokeWidth="0.2"
                fill="none"
              />
              <path
                d="M0 60 Q 30 40, 60 50 T 100 30"
                stroke="url(#gradient2)"
                strokeWidth="0.2"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <LineChart className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white/80">AI-Powered Construction Intelligence</span>
              </div>
            </div>

            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Predictive
                </span>
                <br />
                <span className="text-white">Analytics for</span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Construction
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
                See the future of your projects.{" "}
                <span className="text-emerald-400 font-semibold">Machine learning</span> forecasts
                delays, costs, and risks{" "}
                <span className="text-teal-400 font-semibold">weeks before</span> they impact your
                bottom line.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-emerald-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  <BarChart3 className="w-5 h-5" />
                  See Analytics Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {trustStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANALYTICS ROI */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300">Measurable Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Data-Driven{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Results
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Predictive analytics delivers measurable improvements across every dimension of
                project performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {analyticsROI.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="text-4xl font-bold text-white mb-1">{item.stat}</div>
                  <div className="text-sm text-emerald-400 font-medium mb-3">{item.label}</div>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANALYTICS CAPABILITIES */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Predictive{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Intelligence Engines
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Four specialized AI engines working together to forecast every aspect of your
                projects
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {analyticsCapabilities.map((cap, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex-shrink-0">
                      <cap.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{cap.title}</h3>
                      <p className="text-white/70 mb-4">{cap.description}</p>

                      <div className="flex gap-4 mb-4">
                        <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-sm">
                          {cap.accuracy} accuracy
                        </div>
                        <div className="px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-sm">
                          {cap.leadTime} lead time
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {cap.predictions.map((pred, pIndex) => (
                          <div key={pIndex} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            {pred}
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
        {/* DATA SOURCES */}
        {/* ============================================ */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powered by{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Your Data
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Space AI analytics leverage data you&apos;re already collecting—no new systems required
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <source.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{source.title}</h3>
                  <ul className="space-y-2">
                    {source.items.map((item, iIndex) => (
                      <li key={iIndex} className="text-sm text-white/60 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
        {/* ML MODELS */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 mb-6">
                <CircuitBoard className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-300">Under the Hood</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Enterprise-Grade{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  ML Models
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Production-tested machine learning models built specifically for construction
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {mlModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-500/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{model.name}</h3>
                      <p className="text-sm text-white/60">{model.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-lg bg-teal-500/20 text-teal-300 text-xs">
                        {model.type}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs">
                        {model.inputs}
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold">
                        {model.accuracy} accuracy
                      </span>
                    </div>
                  </div>
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
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-teal-900/50" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/30 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                See the Future of{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Your Projects
                </span>
              </h2>

              <p className="text-xl text-white/70 mb-8">
                Start predicting delays, costs, and risks before they impact your bottom line.
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
                  Book Analytics Demo
                </Link>
              </div>

              <p className="mt-8 text-white/50 text-sm">
                Analytics included in all plans • No data science team required • ROI in weeks
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
