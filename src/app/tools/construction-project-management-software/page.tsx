import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Project Management Software | Space AI",
  description:
    "Plan, track, and deliver construction projects with AI-powered project management software. Real-time dashboards, automated workflows, and unified collaboration.",
  keywords: [
    "construction project management software",
    "AI project management construction",
    "project management dashboard",
    "construction task management",
    "construction collaboration software",
    "project tracking construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/construction-project-management-software/",
  },
  openGraph: {
    title: "Construction Project Management Software | Space AI",
    description:
      "Unify tasks, timelines, resources, and communication in one AI-powered construction project management platform.",
    url: "https://pmspace.ai/tools/construction-project-management-software/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is AI-powered construction project management software?",
    answer:
      "It is a platform that unifies schedules, tasks, resources, documents, and communication while using AI to automate routine work, predict risks, and recommend next steps.",
  },
  {
    question: "How does Space AI improve project visibility?",
    answer:
      "Space AI connects data from emails, schedules, ERP, field logs, and documents into a single dashboard. Teams see real-time progress, emerging risks, and budget status without manual consolidation.",
  },
  {
    question: "Can it automate project workflows?",
    answer:
      "Yes. Space AI can automate status updates, approval routing, RFI tracking, change order processing, and task assignments based on project rules and triggers.",
  },
  {
    question: "Is it suitable for owners and general contractors?",
    answer:
      "Yes. Space AI supports owners, general contractors, subcontractors, and design teams with role-based views, permissions, and reporting tailored to each stakeholder group.",
  },
];

export default function ConstructionProjectManagementSoftwarePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Project Management Software
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Plan, track, and deliver projects on time and on budget with a unified AI-powered project management platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Construction Project Management Needs AI
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction projects are complex coordination challenges. Schedules, budgets, documents, crews, and stakeholders must stay aligned across months or years of work. Traditional project management tools store data but leave the heavy lifting of analysis, communication, and risk detection to humans.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI construction project management software goes further. It unifies project data and applies AI to automate status tracking, surface risks, and recommend actions—so project managers spend less time chasing updates and more time delivering results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Unified Project Dashboard",
                    desc: "See schedule, cost, risk, and resource status in one real-time dashboard instead of switching between spreadsheets and apps.",
                  },
                  {
                    title: "Automated Workflows",
                    desc: "Streamline RFIs, submittals, change orders, approvals, and task assignments with configurable automation rules.",
                  },
                  {
                    title: "Predictive Risk Alerts",
                    desc: "Get early warnings for schedule slip, cost variance, and resource conflicts before they impact delivery.",
                  },
                  {
                    title: "Stakeholder Collaboration",
                    desc: "Keep owners, designers, contractors, and field teams aligned with shared views, comments, and notifications.",
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
                Teams using Space AI project management software reduce the time spent on manual status collection and reporting. Project managers can identify problems earlier, coordinate faster, and keep stakeholders informed with accurate, real-time data.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The result is more predictable schedules, stronger budget control, and higher owner confidence across the project portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/project-scheduling-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Project Scheduling Software
                </Link>
                <Link
                  href="/tools/construction-document-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Document Management Software
                </Link>
                <Link
                  href="/tools/construction-analytics-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Construction Analytics Software
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
                Deliver Projects with Confidence
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI project management software unifies planning, execution, and reporting.
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
