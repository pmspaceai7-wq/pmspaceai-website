import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "AI Recommendation Engine for Project Decisions | Space AI",
  description:
    "Get AI-powered recommendations for sequencing, resource allocation, and risk mitigation using live project signals and historical patterns.",
  keywords: [
    "AI recommendation engine",
    "construction AI recommendations",
    "predictive project decisions",
    "resource allocation AI",
    "construction risk mitigation",
    "project sequencing AI",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/ai-recommendation-engine/",
  },
  openGraph: {
    title: "AI Recommendation Engine for Project Decisions | Space AI",
    description:
      "Turn project signals into ranked, actionable recommendations for scheduling, resources, and risk with Space AI.",
    url: "https://pmspace.ai/tools/ai-recommendation-engine/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does an AI recommendation engine do in construction?",
    answer:
      "It analyzes live project data and historical patterns to suggest specific actions—such as adjusting schedules, reallocating crews, or mitigating emerging risks—ranked by expected impact and urgency.",
  },
  {
    question: "What kind of recommendations does Space AI provide?",
    answer:
      "Recommendations cover schedule sequencing, resource balancing, delay prevention, cost protection, and risk mitigation. Each suggestion includes context so teams understand why it matters and what will change if they act.",
  },
  {
    question: "How does the engine learn from historical projects?",
    answer:
      "Space AI uses anonymized patterns from past projects—such as typical delay drivers, trade dependencies, and resource constraints—to identify similar conditions in active projects and recommend proven responses.",
  },
  {
    question: "Can project managers override AI recommendations?",
    answer:
      "Yes. The engine provides recommendations, not mandates. Project managers and executives remain in control and can accept, modify, or dismiss suggestions based on field knowledge and stakeholder priorities.",
  },
];

export default function AIRecommendationEnginePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Recommendation Engine
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Move from reactive decisions to proactive project control with AI-powered recommendations for scheduling, resources, and risk.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Project Decisions Need AI Recommendations
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Modern construction projects involve too many moving variables for manual analysis alone. Schedules shift, crews change, materials arrive late, and weather windows close. By the time a human spots a pattern, the project may already be off track. An AI recommendation engine continuously monitors these signals and suggests the best next actions before problems escalate.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI recommendation engine connects schedule, cost, resource, and risk data to generate ranked, context-aware suggestions. Instead of drowning in dashboards, project leaders get clear guidance on where to focus attention and what to do next.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Proactive Risk Mitigation",
                    desc: "Detect early warning signals and receive mitigation recommendations before schedule or cost issues escalate.",
                  },
                  {
                    title: "Resource Allocation Optimization",
                    desc: "Recommend crew and equipment assignments that balance workload, skill availability, and critical path needs.",
                  },
                  {
                    title: "Schedule Sequencing",
                    desc: "Suggest task sequences and trade handoffs that reduce idle time and protect milestone dates.",
                  },
                  {
                    title: "Prioritized Action Rankings",
                    desc: "See recommendations ranked by business impact so teams execute the highest-value actions first.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Business Impact
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Teams that use AI recommendations reduce the time spent debating what to do next. Decisions become data-driven and consistent across projects, reducing the influence of guesswork and fragmented spreadsheets.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The outcome is fewer schedule slips, better resource utilization, and stronger protection of project margins across the portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/construction-delay-risk-calculator/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Delay Risk Calculator
                </Link>
                <Link
                  href="/tools/construction-analytics-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Construction Analytics Software
                </Link>
                <Link
                  href="/tools/project-scheduling-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Project Scheduling Software
                </Link>
                <Link
                  href="/tools/ai-assistant/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  AI Assistant
                </Link>
                <Link
                  href="/tools/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  All Tools
                </Link>
              </div>
            </section>

            <section className="text-center bg-gradient-to-r from-purple-500/20 to-teal-400/20 border border-white/10 rounded-2xl p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Make Smarter Project Decisions
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI recommendation engine turns project signals into ranked, actionable guidance.
              </p>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
