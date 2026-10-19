import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Analytics Software | Real-Time Project Insights | Space AI",
  description:
    "Turn construction project data into actionable insights with Space AI analytics software. Real-time dashboards, predictive KPIs, and unified reporting for smarter decisions.",
  keywords: [
    "construction analytics software",
    "construction reporting",
    "project dashboards",
    "predictive analytics construction",
    "construction KPIs",
    "real-time project insights",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/construction-analytics-software/",
  },
  openGraph: {
    title: "Construction Analytics Software | Real-Time Project Insights | Space AI",
    description:
      "Unify project data into dashboards and predictive KPIs with Space AI construction analytics software.",
    url: "https://pmspace.ai/tools/construction-analytics-software/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What does construction analytics software do?",
    answer:
      "Construction analytics software aggregates data from schedules, budgets, field reports, documents, and models into dashboards and reports. It helps teams spot trends, forecast risks, and make data-driven decisions instead of relying on scattered spreadsheets.",
  },
  {
    question: "Which KPIs should construction teams track?",
    answer:
      "Critical KPIs include schedule performance index, cost performance index, rework rate, safety incident rate, RFI response time, change order volume, and cash-flow predictability. Space AI surfaces these automatically from connected project data.",
  },
  {
    question: "How is Space AI analytics different from spreadsheets?",
    answer:
      "Unlike static spreadsheets, Space AI connects live data sources, applies predictive models, and updates dashboards automatically. This reduces manual reporting and gives leaders a single source of truth across projects.",
  },
  {
    question: "Can analytics help prevent project overruns?",
    answer:
      "Yes. Early warning signals such as schedule slip, cost variance, and emerging risk patterns are flagged before they become critical, giving teams time to adjust plans and protect margins.",
  },
];

export default function ConstructionAnalyticsSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Analytics Software
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Transform disconnected project data into clear, actionable insights with real-time dashboards and predictive KPIs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Construction Teams Need Analytics
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction projects generate massive amounts of data across schedules, budgets, field logs, RFIs, change orders, safety reports, and model updates. Without a centralized analytics layer, that data remains trapped in silos, forcing project managers to reconstruct project reality manually. Construction analytics software unifies these sources so teams can see what is happening, why it matters, and what to do next.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI analytics goes beyond simple reporting. It connects emails, BIM, ERP, field data, and documents into a single source of truth, then applies predictive models to forecast schedule slip, cost variance, and emerging risks before they escalate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Real-Time Dashboards",
                    desc: "Visualize project health, progress, and risk in dashboards that update automatically as new data flows in.",
                  },
                  {
                    title: "Predictive KPIs",
                    desc: "Track leading indicators such as CPI, SPI, EAC, and delay probability rather than just lagging results.",
                  },
                  {
                    title: "Unified Data Fabric",
                    desc: "Combine information from schedules, costs, documents, and models without manual consolidation.",
                  },
                  {
                    title: "Executive Reporting",
                    desc: "Generate portfolio-level summaries and owner-ready reports with a few clicks.",
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
                Teams that use analytics software move from reactive reporting to proactive management. Project managers spend less time assembling status updates and more time addressing issues. Executives gain confidence in forecasts, and project owners receive clearer visibility into performance.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The result is faster decision-making, fewer surprises, and better protection of schedule and budget targets across the portfolio.
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
                  href="/tools/ai-recommendation-engine/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  AI Recommendation Engine
                </Link>
                <Link
                  href="/tools/project-scheduling-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Project Scheduling Software
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
                See Your Project Data Clearly
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI analytics turns project complexity into confident decisions.
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
