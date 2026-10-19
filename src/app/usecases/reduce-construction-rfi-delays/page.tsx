// Task 64: Use Case Story - Reducing Construction RFI Delays with AI
// SEO Target: "construction RFI management", "reduce RFI delays", "AI RFI processing"

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ArrowRight,
  FileText,
  Clock,
  TrendingUp,
  Users,
  MessageSquare,
  Zap,
  AlertTriangle,
  Target,
  BarChart3,
  Calendar,
  Building,
  ArrowDown,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "How to Reduce Construction RFI Delays with AI | Space AI Use Case",
  description:
    "Learn how AI-powered RFI management reduces response times by 65% and eliminates project delays. Real-world case study with measurable results.",
  keywords:
    "construction RFI management, reduce RFI delays, AI RFI processing, RFI response time, construction document management, request for information construction",
  openGraph: {
    title: "Reduce Construction RFI Delays with AI | Space AI Case Study",
    description:
      "How AI-powered RFI management reduces response times by 65% and eliminates project delays.",
    type: "article",
    url: "https://pmspace.ai/usecases/reduce-construction-rfi-delays/",
  },
  alternates: {
    canonical: "https://pmspace.ai/usecases/reduce-construction-rfi-delays/",
  },
};

const problemStats = [
  { stat: "42%", label: "of construction delays caused by RFI bottlenecks" },
  { stat: "14 days", label: "average RFI response time industry-wide" },
  { stat: "$26K", label: "average cost per delayed RFI" },
  { stat: "35%", label: "of RFIs are duplicates or easily answered" },
];

const solutionBenefits = [
  {
    metric: "65%",
    label: "Faster RFI Response",
    description: "AI routes RFIs to the right person and suggests answers from historical data",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    metric: "80%",
    label: "Reduction in Duplicate RFIs",
    description: "Smart search surfaces existing answers before new RFIs are created",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    metric: "3.2 days",
    label: "Average Response Time",
    description: "Down from 14 days with AI-powered routing and automated reminders",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    metric: "$180K",
    label: "Annual Savings per Project",
    description: "Reduced delay costs, administrative overhead, and rework",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const workflow = [
  {
    step: 1,
    title: "RFI Creation",
    before: "Manual entry, inconsistent formatting, no categorization",
    after: "Smart templates with auto-categorization and duplicate detection",
    improvement: "90% faster creation",
  },
  {
    step: 2,
    title: "Routing & Assignment",
    before: "Manual forwarding, unclear ownership, lost in email",
    after: "AI routes to correct party based on content analysis",
    improvement: "100% accurate routing",
  },
  {
    step: 3,
    title: "Response Generation",
    before: "Start from scratch every time, no historical reference",
    after: "AI suggests answers from similar RFIs and project docs",
    improvement: "50% faster responses",
  },
  {
    step: 4,
    title: "Review & Approval",
    before: "Serial approval process, no visibility into status",
    after: "Parallel workflows with real-time status tracking",
    improvement: "75% faster approvals",
  },
  {
    step: 5,
    title: "Documentation",
    before: "Manual filing, inconsistent naming, hard to find later",
    after: "Auto-linked to drawings, specs, and related RFIs",
    improvement: "100% traceability",
  },
];

const caseStudy = {
  company: "Regional General Contractor",
  projectType: "Mixed-Use Development",
  projectValue: "$85M",
  challenge: "Managing 400+ RFIs across a complex mixed-use project with multiple architects, engineers, and tenant representatives",
  results: [
    { metric: "14 → 3.2 days", label: "RFI response time" },
    { metric: "412 → 165", label: "Total RFIs submitted (duplicate elimination)" },
    { metric: "$0", label: "Delay claims related to RFI bottlenecks" },
    { metric: "92%", label: "Team satisfaction with RFI process" },
  ],
  quote: "Space AI transformed our RFI process from a constant source of project friction to a streamlined workflow. The AI suggestions alone save our team hours every week.",
  quoteName: "Project Director",
  quoteTitle: "Regional General Contractor",
};

const faqs = [
  {
    question: "How does AI improve RFI response times?",
    answer: "AI improves RFI response times in several ways: First, it automatically routes RFIs to the correct party based on content analysis, eliminating misdirected requests. Second, it surfaces similar historical RFIs and their responses, giving responders a starting point. Third, it sends intelligent reminders based on priority and approaching deadlines. Fourth, it enables parallel review workflows instead of serial approval chains. Together, these capabilities typically reduce response times from 14+ days to under 4 days.",
  },
  {
    question: "Can Space AI detect duplicate RFIs before submission?",
    answer: "Yes, Space AI uses semantic search to compare new RFI content against your existing RFI database and project documentation. When a user starts creating an RFI, the system automatically surfaces potentially relevant existing RFIs, resolved issues, and spec/drawing sections that might answer the question. This prevents duplicate submissions and helps teams find answers faster without waiting for responses.",
  },
  {
    question: "How does Space AI handle RFI routing across multiple parties?",
    answer: "Space AI uses AI-powered content analysis to understand RFI topics and automatically route to the appropriate party—whether that's the architect for design clarifications, structural engineer for load questions, or MEP engineer for coordination issues. You can also configure routing rules based on CSI divisions, building areas, or custom categories. All routing decisions are logged for audit purposes.",
  },
  {
    question: "What integrations does Space AI offer for RFI management?",
    answer: "Space AI integrates with major construction platforms including Procore, Autodesk Construction Cloud, PlanGrid, and Bluebeam for seamless RFI workflows. RFIs can be linked directly to BIM models, drawings, and specs. Email integration allows RFI creation from forwarded messages, and mobile apps enable field submission with photo attachments and voice-to-text.",
  },
  {
    question: "How does Space AI help with RFI cost tracking?",
    answer: "Space AI enables comprehensive RFI cost tracking by linking RFIs to potential change orders, tracking delay impacts, and generating cost reports. You can flag RFIs as 'cost impact potential' and track them through resolution. The system also calculates delay costs based on your project's burn rate, helping you prioritize high-impact RFIs and quantify the cost of slow responses.",
  },
];

export default function ReduceRFIDelaysPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
              Use Case
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              Case Study Included
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Reduce Construction RFI Delays by 65% with AI
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Stop losing days (and dollars) to RFI bottlenecks. Learn how AI-powered RFI 
            management eliminates delays and keeps projects on schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/construction-software-demo/"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              See RFI Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features/"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Explore RFI Features
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">The RFI Problem</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Request for Information delays are one of the most common—and costly—sources 
            of construction project friction.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {problemStats.map((item, idx) => (
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

      {/* Solution Benefits */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">The AI-Powered Solution</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Space AI transforms RFI management with intelligent routing, suggested responses, 
            and real-time tracking.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-colors"
              >
                <div className="p-3 bg-green-500/20 rounded-xl text-green-400 w-fit mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.metric}</div>
                <h3 className="font-semibold mb-2">{benefit.label}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Comparison */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Before & After: RFI Workflow</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            See how AI transforms each step of the RFI process.
          </p>
          <div className="space-y-4">
            {workflow.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="p-6 bg-white/5 border-r border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-lg font-bold">
                        {item.step}
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-red-500/5 border-r border-white/10">
                    <div className="text-xs text-red-400 uppercase tracking-wider mb-2">Before</div>
                    <p className="text-white/70 text-sm">{item.before}</p>
                  </div>
                  <div className="p-6 bg-green-500/5 border-r border-white/10">
                    <div className="text-xs text-green-400 uppercase tracking-wider mb-2">After with Space AI</div>
                    <p className="text-white/70 text-sm">{item.after}</p>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{item.improvement}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              Case Study
            </span>
            <h2 className="text-3xl font-bold mt-6 mb-4">{caseStudy.company}</h2>
            <p className="text-white/60">
              {caseStudy.projectType} • {caseStudy.projectValue} Project Value
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">The Challenge</h3>
            <p className="text-white/70">{caseStudy.challenge}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {caseStudy.results.map((result, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-green-400 mb-2">{result.metric}</div>
                <p className="text-white/70 text-sm">{result.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-2xl p-8">
            <blockquote className="text-lg italic text-white/90 mb-4">
              &ldquo;{caseStudy.quote}&rdquo;
            </blockquote>
            <div className="text-white/60">
              <span className="font-medium text-white">{caseStudy.quoteName}</span>
              <span className="mx-2">•</span>
              <span>{caseStudy.quoteTitle}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key RFI Management Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Smart RFI Creation</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Template library with auto-fill
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Duplicate detection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Drawing/spec linking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Mobile submission with photos
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">AI-Powered Response</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Similar RFI suggestions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Document references
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Response draft generation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Automatic routing
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Tracking & Analytics</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Real-time status dashboards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Response time metrics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Cost impact tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Party performance reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Eliminate RFI Delays?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of construction teams using AI to cut RFI response times 
              and keep projects on schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construction-software-demo/"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                See It In Action <ArrowRight className="w-5 h-5" />
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
              href="/usecases/ai-construction-scheduling/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
            >
              <Calendar className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">AI Schedule Optimization</h3>
              <p className="text-white/60 text-sm">Predict and prevent schedule delays before they happen.</p>
            </Link>
            <Link
              href="/usecases/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-colors"
            >
              <FileText className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">Reduce Change Order Disputes</h3>
              <p className="text-white/60 text-sm">Streamline change order workflows with clear documentation.</p>
            </Link>
            <Link
              href="/usecases/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
            >
              <Users className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2">Field-Office Collaboration</h3>
              <p className="text-white/60 text-sm">Bridge the gap between field crews and project management.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />
    </div>
  );
}
