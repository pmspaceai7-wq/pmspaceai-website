// Task 64: Use Case Story - AI Schedule Optimization
// SEO Target: "construction schedule optimization", "AI project scheduling", "predictive schedule management"

import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Calendar,
  AlertTriangle,
  Target,
  BarChart3,
  Cloud,
  Users,
  Zap,
  Brain,
  LineChart,
  Timer,
  Shield,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "AI Schedule Optimization for Construction Projects | Space AI Use Case",
  description:
    "Predict and prevent schedule delays before they happen. Learn how AI-powered scheduling reduces delays by 40% and improves on-time delivery rates.",
  keywords:
    "construction schedule optimization, AI project scheduling, predictive schedule management, construction delay prediction, AI schedule forecasting, construction planning software",
  openGraph: {
    title: "AI Schedule Optimization for Construction | Space AI",
    description:
      "Predict and prevent schedule delays before they happen with AI-powered construction scheduling.",
    type: "article",
    url: "https://pmspace.ai/usecases/ai-construction-scheduling/",
  },
  alternates: {
    canonical: "https://pmspace.ai/usecases/ai-construction-scheduling/",
  },
};

const industryStats = [
  { stat: "77%", label: "of construction projects finish late" },
  { stat: "20%", label: "average schedule overrun on large projects" },
  { stat: "$15K-50K", label: "daily cost of project delays" },
  { stat: "60%", label: "of delays are preventable with early intervention" },
];

const aiCapabilities = [
  {
    capability: "Predictive Delay Analysis",
    description: "AI analyzes 50+ risk factors to predict which tasks are likely to slip before they miss their dates.",
    accuracy: "85% prediction accuracy",
    leadTime: "2-4 weeks advance warning",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    capability: "Weather Integration",
    description: "Historical weather data and 10-day forecasts automatically adjust schedules for weather-sensitive activities.",
    accuracy: "92% weather impact accuracy",
    leadTime: "10-day lookahead",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    capability: "Resource Optimization",
    description: "AI balances labor, equipment, and material availability across activities to eliminate resource conflicts.",
    accuracy: "30% improved utilization",
    leadTime: "Continuous optimization",
    icon: <Users className="w-8 h-8" />,
  },
  {
    capability: "Critical Path Intelligence",
    description: "Dynamic critical path analysis that updates in real-time based on actual progress and predicted delays.",
    accuracy: "Real-time updates",
    leadTime: "Instant recalculation",
    icon: <LineChart className="w-8 h-8" />,
  },
];

const beforeAfter = [
  {
    aspect: "Delay Detection",
    before: "Delays discovered when tasks miss dates",
    after: "AI predicts delays 2-4 weeks in advance",
    impact: "Time for proactive intervention",
  },
  {
    aspect: "Weather Planning",
    before: "Manual weather checks, reactive rescheduling",
    after: "Automatic schedule adjustments based on forecasts",
    impact: "40% reduction in weather delays",
  },
  {
    aspect: "Resource Conflicts",
    before: "Discovered during execution, causes standby time",
    after: "AI identifies conflicts weeks ahead",
    impact: "85% reduction in resource conflicts",
  },
  {
    aspect: "Schedule Updates",
    before: "Weekly updates, often outdated",
    after: "Real-time updates with AI forecasting",
    impact: "Always current decision-making",
  },
  {
    aspect: "What-If Analysis",
    before: "Manual scenarios, time-consuming",
    after: "Instant AI-powered scenario modeling",
    impact: "10x faster decision-making",
  },
];

const resultMetrics = [
  {
    metric: "40%",
    label: "Reduction in Schedule Delays",
    description: "Projects using Space AI AI scheduling see 40% fewer schedule overruns",
  },
  {
    metric: "2.5 weeks",
    label: "Average Early Warning",
    description: "AI identifies potential delays 2.5 weeks before traditional methods",
  },
  {
    metric: "92%",
    label: "On-Time Delivery Rate",
    description: "Clients using AI scheduling achieve 92% on-time milestone delivery",
  },
  {
    metric: "$2.1M",
    label: "Average Savings per Project",
    description: "Reduced delay costs, overtime, and acceleration measures",
  },
];

const caseStudy = {
  company: "Mid-Size Commercial Contractor",
  projectType: "6-story Office Building",
  projectValue: "$42M",
  duration: "18 months",
  challenge: "Managing a tight schedule with limited float, multiple critical paths, and seasonal weather constraints in the Northeast",
  results: [
    { before: "Typical 3-month schedule overrun on similar projects", after: "Delivered 2 weeks early" },
    { before: "4-5 major schedule recovery efforts per project", after: "Zero recovery efforts needed" },
    { before: "15% average overtime costs", after: "3% overtime costs" },
    { before: "Weekly schedule update meetings", after: "Real-time dashboard, monthly review meetings" },
  ],
  quote: "The AI predicted our structural steel delay three weeks before it would have impacted us. We were able to renegotiate with the fabricator and adjust sequencing—something that would have cost us a month if we'd found out later.",
  quoteName: "Senior Project Manager",
};

const features = [
  {
    title: "AI Risk Scoring",
    description: "Every task receives a dynamic risk score based on historical performance, current progress, resource availability, weather, and dependency health.",
    benefits: ["Daily risk score updates", "Threshold alerts", "Drill-down analysis", "Historical benchmarking"],
  },
  {
    title: "Intelligent Scheduling Engine",
    description: "Goes beyond CPM with AI that considers realistic activity durations based on similar past work, resource constraints, and external factors.",
    benefits: ["Machine learning duration estimates", "Automatic leveling", "Multi-calendar support", "What-if modeling"],
  },
  {
    title: "Weather-Aware Planning",
    description: "Integrates historical weather patterns and real-time forecasts to schedule weather-sensitive activities optimally.",
    benefits: ["10-day forecast integration", "Historical weather analysis", "Seasonal optimization", "Automatic rescheduling"],
  },
  {
    title: "Real-Time Progress Tracking",
    description: "Mobile-first progress updates feed AI models continuously, enabling dynamic forecasting and early warning.",
    benefits: ["Field mobile app", "Photo documentation", "Voice updates", "Automatic ETC calculation"],
  },
];

const faqs = [
  {
    question: "How does AI predict construction schedule delays?",
    answer: "Space AI AI analyzes over 50 factors to predict delays including: historical performance of similar tasks and crews, current progress velocity vs. planned, resource availability and conflicts, weather forecasts and historical patterns, RFI/submittal status and typical durations, material delivery tracking, and dependency chain health. Machine learning models trained on thousands of projects identify patterns that precede delays, enabling predictions 2-4 weeks before traditional detection methods.",
  },
  {
    question: "How accurate is the AI schedule prediction?",
    answer: "Space AI AI schedule predictions achieve 85% accuracy for identifying tasks at risk of delay 2+ weeks in advance. Accuracy improves as the AI learns your specific project patterns, crew performance, and local conditions. The system continuously learns from outcomes, refining predictions throughout the project lifecycle. Even when predictions don't result in delays (due to intervention), the system learns from those outcomes too.",
  },
  {
    question: "Does Space AI replace traditional scheduling software like P6 or MS Project?",
    answer: "Space AI can work alongside or replace traditional scheduling tools. Many clients use Space AI as their primary scheduler due to its AI capabilities and modern interface. For organizations with significant P6 investments, Space AI integrates bi-directionally, enhancing P6 schedules with AI analytics while preserving existing workflows. The AI layer adds predictive capabilities that traditional tools lack.",
  },
  {
    question: "How does weather integration work?",
    answer: "Space AI integrates with weather services to provide: 10-day rolling forecasts for your project location, historical weather analysis for seasonal planning, automatic flagging of weather-sensitive activities (concrete pours, roofing, exterior work), schedule adjustment suggestions based on forecasts, and post-weather impact analysis for future planning. Activities are tagged with weather sensitivity levels, and the AI automatically considers weather in all predictions.",
  },
  {
    question: "Can Space AI handle multiple critical paths?",
    answer: "Yes, Space AI excels at managing near-critical paths that traditional tools often miss. The AI monitors not just the critical path but all paths within a configurable float threshold. As conditions change, the system identifies when near-critical paths become critical and alerts you before it impacts the project. This 'multi-path awareness' catches issues that single-critical-path analysis misses.",
  },
  {
    question: "How quickly can we see results from AI scheduling?",
    answer: "Most clients see measurable improvements within the first 60 days: Week 1-2: AI begins learning your project patterns and generating risk scores. Week 3-4: First predictive insights start identifying at-risk activities. Week 5-8: Pattern recognition improves, predictions become more accurate. Ongoing: Continuous improvement as AI learns from your specific project outcomes. The AI is pre-trained on industry data, so it provides value from day one while becoming more accurate over time.",
  },
];

export default function AIScheduleOptimizationPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              Use Case
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              AI-Powered
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            AI Schedule Optimization
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Predict and prevent schedule delays before they happen. AI-powered scheduling 
            that keeps your projects on track with 85% prediction accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/construction-software-demo/"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              See Schedule AI Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features/"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">The Schedule Challenge</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Schedule delays are the most common problem in construction—but most are preventable 
            with early detection.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {industryStats.map((item, idx) => (
              <div
                key={idx}
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-red-400 mb-2">{item.stat}</div>
                <p className="text-white/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI Scheduling Capabilities</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Machine learning that goes beyond traditional scheduling to predict, prevent, and optimize.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.capability}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.description}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-400">{item.accuracy}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-blue-400">{item.leadTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Before & After AI Scheduling</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            See how AI transforms construction schedule management.
          </p>
          <div className="space-y-4">
            {beforeAfter.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="p-5 bg-white/5 border-r border-white/10 flex items-center">
                    <h3 className="font-semibold">{item.aspect}</h3>
                  </div>
                  <div className="p-5 bg-red-500/5 border-r border-white/10">
                    <div className="text-xs text-red-400 uppercase tracking-wider mb-2">Traditional</div>
                    <p className="text-white/70 text-sm">{item.before}</p>
                  </div>
                  <div className="p-5 bg-green-500/5 border-r border-white/10">
                    <div className="text-xs text-green-400 uppercase tracking-wider mb-2">With Space AI AI</div>
                    <p className="text-white/70 text-sm">{item.after}</p>
                  </div>
                  <div className="p-5 flex items-center justify-center bg-blue-500/5">
                    <p className="text-blue-400 text-sm font-medium text-center">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Proven Results</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {resultMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{item.metric}</div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
              Case Study
            </span>
            <h2 className="text-3xl font-bold mt-6 mb-4">{caseStudy.company}</h2>
            <p className="text-white/60">
              {caseStudy.projectType} • {caseStudy.projectValue} • {caseStudy.duration}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">The Challenge</h3>
            <p className="text-white/70">{caseStudy.challenge}</p>
          </div>

          <div className="space-y-4 mb-8">
            {caseStudy.results.map((result, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-4"
              >
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="text-xs text-red-400 uppercase tracking-wider mb-2">Before</div>
                  <p className="text-white/80 text-sm">{result.before}</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="text-xs text-green-400 uppercase tracking-wider mb-2">After</div>
                  <p className="text-white/80 text-sm">{result.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-2xl p-8">
            <blockquote className="text-lg italic text-white/90 mb-4">
              &ldquo;{caseStudy.quote}&rdquo;
            </blockquote>
            <p className="text-white/60">— {caseStudy.quoteName}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Schedule Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm mb-4">{feature.description}</p>
                <ul className="grid grid-cols-2 gap-2">
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for AI-Powered Scheduling?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join construction teams achieving 92% on-time delivery with AI schedule optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construction-software-demo/"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Schedule Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing/"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="container mx-auto px-4 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/usecases/reduce-construction-rfi-delays/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
            >
              <Timer className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Reduce RFI Delays</h3>
              <p className="text-white/60 text-sm">Cut RFI response times by 65% with AI routing.</p>
            </Link>
            <Link
              href="/usecases/construction-cost-prediction/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">Predictive Cost Management</h3>
              <p className="text-white/60 text-sm">Forecast costs at completion with AI accuracy.</p>
            </Link>
            <Link
              href="/usecases/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-colors"
            >
              <Shield className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="font-semibold mb-2">Safety Incident Prevention</h3>
              <p className="text-white/60 text-sm">Predict and prevent safety incidents with AI.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />
    </div>
  );
}
