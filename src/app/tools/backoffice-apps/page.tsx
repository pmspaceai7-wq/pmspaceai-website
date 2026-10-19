import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Backoffice Apps for Construction Operations | Space AI",
  description:
    "Automate internal workflows, approvals, and operations with customizable backoffice apps built for AECO teams.",
  keywords: [
    "backoffice apps",
    "construction workflow automation",
    "internal tools construction",
    "operations automation",
    "AECO backoffice",
    "no-code workflow tools",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/backoffice-apps/",
  },
  openGraph: {
    title: "Backoffice Apps for Construction Operations | Space AI",
    description:
      "Streamline internal operations with Space AI backoffice apps and workflow automation.",
    url: "https://pmspace.ai/tools/backoffice-apps/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What are backoffice apps in construction?",
    answer:
      "Backoffice apps are internal tools that automate administrative and operational workflows such as approvals, data entry, reporting, HR processes, and compliance tracking. They help teams work faster without relying on spreadsheets or manual handoffs.",
  },
  {
    question: "Do I need developers to build backoffice apps?",
    answer:
      "No. Space AI provides configurable app-building capabilities that allow operations teams to create custom workflows, forms, and dashboards without writing code.",
  },
  {
    question: "What workflows can be automated?",
    answer:
      "Common examples include purchase approvals, timesheet validation, safety incident reporting, employee onboarding, document reviews, and project closeout checklists.",
  },
  {
    question: "How do backoffice apps connect to project data?",
    answer:
      "They share the same unified data layer as the rest of the Space AI platform, so internal workflows can reference project records, user roles, schedules, and cost data.",
  },
];

export default function BackofficeAppsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Backoffice Apps for Construction Operations
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Automate internal workflows and build custom operational tools without writing code.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Remove Operational Friction
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Behind every construction project is a web of internal processes: approvals, data entry, reporting, compliance checks, and handoffs between departments. When these processes rely on email and spreadsheets, they slow down teams, create errors, and hide bottlenecks.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI backoffice apps let operations teams digitize these workflows quickly. Using configurable forms, approval rules, and dashboards, teams can build the internal tools they need while keeping data connected to the broader project platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "No-Code App Builder",
                    desc: "Create custom forms, workflows, and views without engineering resources.",
                  },
                  {
                    title: "Automated Approvals",
                    desc: "Route requests to the right people based on rules, thresholds, and roles.",
                  },
                  {
                    title: "Connected Data",
                    desc: "Pull project, cost, and user data directly into internal workflows.",
                  },
                  {
                    title: "Operational Dashboards",
                    desc: "Monitor queue status, bottlenecks, and completion metrics in real time.",
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
                Common Use Cases
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Teams use backoffice apps to manage purchase approvals, safety incident workflows, employee onboarding, document review queues, project closeout checklists, and finance reconciliation. Each app can be tailored to the company's exact process while sharing data with project modules.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The result is fewer manual tasks, faster turnaround times, and clearer accountability for operational work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/admin-panels/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Admin Panels
                </Link>
                <Link
                  href="/tools/ai-assistant/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  AI Assistant
                </Link>
                <Link
                  href="/tools/ai-recommendation-engine/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  AI Recommendation Engine
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
                Automate Your Internal Operations
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI backoffice apps replace manual workflows with connected tools.
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
