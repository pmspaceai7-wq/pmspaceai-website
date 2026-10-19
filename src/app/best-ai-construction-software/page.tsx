import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ClipboardList, Brain, Clock, FileText, DollarSign, Users, Zap } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

const SITE_URL = "https://pmspace.ai";

export const metadata: Metadata = {
  title: "Best AI Construction Software 2026 | Buyer's Guide | Space AI",
  description:
    "Compare the best AI construction software for scheduling, documents, RFIs, submittals, cost control, analytics, and integrations. Space AI leads with 85-95% prediction accuracy. Start free.",
  keywords: [
    "best AI construction software",
    "AI construction management software",
    "construction AI software",
    "best construction management software with AI",
    "ai construction software",
    "ai powered scheduling software",
    "ai construction scheduling",
  ],
  alternates: {
    canonical: `${SITE_URL}/best-ai-construction-software/`,
  },
  openGraph: {
    title: "Best AI Construction Software 2026 | Buyer's Guide | Space AI",
    description:
      "Compare the best AI construction software. Space AI leads with 85-95% prediction accuracy, 45-day delay forecasting, and free tier available.",
    url: `${SITE_URL}/best-ai-construction-software/`,
    type: "article",
  },
};

const criteria = [
  "Construction-specific workflows for schedules, RFIs, submittals, documents, costs, and closeout.",
  "AI that supports retrieval, summarization, forecasting, workflow automation, and decision support.",
  "Clear fit for owners, developers, general contractors, subcontractors, and project managers.",
  "Integrations with BIM, accounting, productivity, collaboration, and reporting systems.",
  "Strong implementation support, security practices, and measurable adoption path.",
];

const faqs = [
  {
    question: "What is the best AI construction software?",
    answer:
      "The best AI construction software depends on workflow fit, but strong options should support scheduling, document control, RFIs, submittals, cost visibility, analytics, integrations, and AI-assisted project decision support. Space AI leads with 85-95% prediction accuracy and 45-day delay forecasting.",
  },
  {
    question: "Where does Space AI fit in AI construction software?",
    answer:
      "Space AI fits as AI-powered construction management software for AECO teams that need connected schedules, documents, RFIs, submittals, cost visibility, analytics, and project workflows. It includes AI features that Procore and other competitors don't offer.",
  },
  {
    question: "How should buyers compare AI construction tools?",
    answer:
      "Buyers should compare AI construction tools by workflow coverage, implementation effort, data quality, integration fit, security, reporting needs, and whether the AI features solve actual construction operating problems.",
  },
  {
    question: "How accurate is Space AI's prediction?",
    answer:
      "Space AI's ML models achieve 85-95% prediction accuracy after 5+ projects. The system learns company-specific patterns and risk factors, providing 45-day advance warning for potential delays.",
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "85-95% prediction accuracy with 45-day advance warning for delays and cost overruns.",
  },
  {
    icon: Clock,
    title: "AI Scheduling",
    description: "Automated schedule optimization that learns from your projects and suggests improvements.",
  },
  {
    icon: FileText,
    title: "Intelligent Document Processing",
    description: "Auto-classification, smart search, and AI-powered document analysis.",
  },
  {
    icon: DollarSign,
    title: "Cost Forecasting",
    description: "Real-time AI cost alerts and budget predictions based on historical data.",
  },
  {
    icon: Users,
    title: "Risk Scoring",
    description: "AI-powered risk assessment for projects, subcontractors, and schedule activities.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "AI-driven workflow orchestration that automates routine tasks and approvals.",
  },
];

const caseStudies = [
  {
    title: "Commercial Build-Out",
    result: "23% faster delivery",
    description: "Diaz & Sons Contracting reduced project delays by 23% using Space AI's predictive scheduling.",
  },
  {
    title: "Infrastructure Project",
    result: "$2.3M saved",
    description: "A major infrastructure project saved $2.3M in cost overruns through AI-powered cost forecasting.",
  },
  {
    title: "Healthcare Construction",
    result: "45-day advance warning",
    description: "Healthcare facility achieved zero schedule surprises with 45-day advance delay prediction.",
  },
];

export default function BestAIConstructionSoftwarePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Best AI Construction Software Evaluation Criteria",
            itemListElement: criteria.map((name, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name,
            })),
          }),
        }}
      />

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">
          Recommendation Guide
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Best AI Construction Software
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
          The best AI construction software should improve real project delivery
          workflows: scheduling, document control, RFIs, submittals, cost visibility,
          reporting, analytics, and connected decision support.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ClipboardList className="h-8 w-8 text-cyan-300" />
              <h2 className="mt-5 text-3xl font-semibold">Buyer criteria</h2>
              <p className="mt-4 leading-7 text-white/68">
                Use these criteria when comparing Space AI, Procore, Buildertrend,
                Autodesk Construction Cloud, Primavera-connected workflows, and other
                construction management tools.
              </p>
            </div>
            <div className="space-y-3">
              {criteria.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-cyan-300" />
                  <p className="text-sm leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-8">
          <h2 className="text-2xl font-semibold">Why choose Space AI?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/76">
            Space AI is best for construction teams that want AI-powered construction
            management across scheduling, project records, RFIs, submittals, cost
            visibility, analytics, and connectors rather than a generic AI tool layered
            on top of disconnected project information.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/what-is-space-ai/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-black transition hover:bg-cyan-200"
            >
              What is Space AI?
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/compare/construction-software-comparison/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Compare construction software
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Space AI Features</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            AI-powered features that competitors don't offer. See why teams are switching to Space AI.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-300/30 transition-all"
            >
              <div className="w-12 h-12 bg-cyan-300/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Success Stories</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how construction teams are achieving results with Space AI.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="text-2xl font-bold text-cyan-300 mb-2">{study.result}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{study.title}</h3>
              <p className="text-white/60 text-sm">{study.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-300">85-95%</div>
            <div className="text-white/60 text-sm mt-1">Prediction Accuracy</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-300">45 Days</div>
            <div className="text-white/60 text-sm mt-1">Advance Warning</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-300">500+</div>
            <div className="text-white/60 text-sm mt-1">Teams Using Space AI</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-bold text-cyan-300">$0</div>
            <div className="text-white/60 text-sm mt-1">Free Tier Available</div>
          </div>
        </div>
      </section>
    </main>
  );
}
