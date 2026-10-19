import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "AI Assistant for Construction Teams | Space AI",
  description:
    "Automate repetitive coordination tasks, summarize project communication, and get fast answers with the Space AI assistant built for construction teams.",
  keywords: [
    "AI assistant construction",
    "construction AI assistant",
    "project management assistant",
    "automated project updates",
    "construction communication AI",
    "AI copilot for construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/ai-assistant/",
  },
  openGraph: {
    title: "AI Assistant for Construction Teams | Space AI",
    description:
      "Let Space AI handle status summaries, RFI lookups, and coordination tasks so project managers can focus on execution.",
    url: "https://pmspace.ai/tools/ai-assistant/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What can an AI assistant do for construction teams?",
    answer:
      "A construction AI assistant automates repetitive coordination work such as drafting status updates, summarizing long email threads, answering questions about project documents, and surfacing next steps from meeting notes and field logs.",
  },
  {
    question: "How does Space AI assistant access project information?",
    answer:
      "Space AI connects to your project data sources—documents, schedules, RFIs, change orders, and field reports—and uses that context to answer questions and generate summaries in natural language.",
  },
  {
    question: "Is the AI assistant safe for sensitive project data?",
    answer:
      "Yes. Space AI is built for AECO environments with access controls, audit trails, and data isolation so teams can collaborate confidently without exposing confidential project information.",
  },
  {
    question: "Can it replace project managers?",
    answer:
      "No. The AI assistant augments project managers by removing busywork. It helps teams retrieve information faster and communicate more clearly, while humans remain in control of decisions and stakeholder relationships.",
  },
];

export default function AIAssistantPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Assistant for Construction Teams
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Automate coordination, summarize communication, and get instant answers from your project data with an AI assistant built for construction.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Construction Teams Need an AI Assistant
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction projects generate an overwhelming volume of communication. Between RFIs, submittals, daily logs, change orders, emails, and meeting notes, project managers spend hours each week searching for information and writing updates. An AI assistant cuts through that noise by connecting directly to project data and responding in natural language.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI assistant acts as a coordination copilot. It can summarize the latest status of a trade package, draft a response to an owner question, extract action items from a meeting transcript, and highlight risks that need attention—freeing project managers to focus on execution rather than administration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Natural Language Queries",
                    desc: "Ask questions about schedules, budgets, documents, and risks using plain language and get accurate, contextual answers.",
                  },
                  {
                    title: "Automated Status Summaries",
                    desc: "Generate project or trade-package updates in seconds by pulling from daily logs, schedules, and communication history.",
                  },
                  {
                    title: "Action Item Extraction",
                    desc: "Turn meeting notes, emails, and field reports into structured tasks with owners and due dates.",
                  },
                  {
                    title: "Document & RFI Lookup",
                    desc: "Find the right specification, drawing, or past RFI response without digging through folders and inboxes.",
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
                Teams using an AI assistant spend less time on information retrieval and repetitive writing. Project managers can respond to stakeholders faster, field teams get clearer direction, and executives receive more consistent status reporting.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The result is fewer miscommunications, faster decision cycles, and more time spent on high-value activities that protect schedule and budget performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/construction-document-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Document Management Software
                </Link>
                <Link
                  href="/tools/project-scheduling-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Project Scheduling Software
                </Link>
                <Link
                  href="/tools/construction-analytics-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Construction Analytics Software
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
                See the AI Assistant in Action
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI assistant reduces coordination overhead and keeps your projects moving.
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
