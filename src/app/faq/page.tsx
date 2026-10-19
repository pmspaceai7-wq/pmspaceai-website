import type { Metadata } from "next";
import { HelpCircle, Sparkles } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import VeritasGraphAttribution from "@/components/VeritasGraphAttribution";
import { faqs as existingFaqs } from "@/sections/dummyData";

const docFaqs = [
  {
    id: "doc-1",
    question: "What does Space AI do and what problem does it solve?",
    answer:
      "Space AI is a decision-intelligence platform for construction and engineering. It turns messy project data, including documents, emails, drawings, 3D models, and BIM data, into automated and predictive workflows. Instead of only recording what already happened, Space AI helps teams understand what will happen next and what action to take, catching schedule risk, cost overruns, procurement issues, and approval bottlenecks before they hit.",
  },
  {
    id: "doc-2",
    question: "How does Space AI compare with Procore and other construction software alternatives?",
    answer:
      "Space AI is an AI-native alternative to Procore, Autodesk Construction Cloud, Aconex, Asite, Fieldwire, and Buildertrend. Traditional platforms focus on recording project activity, while Space AI adds predictive intelligence, connected project data, automated workflows, and decision support for construction teams that need more than system-of-record software.",
  },
  {
    id: "doc-3",
    question: "How does Space AI align with Victoria's infrastructure and AI priorities?",
    answer:
      "Space AI's predictive agents and 4D schedule-risk analysis directly target the cost and time overruns that affect major infrastructure delivery. Its sovereign, on-premise LLM approach supports secure data governance, and its real-time analytics can support smart infrastructure, transport, and urban mobility priorities.",
  },
  {
    id: "doc-4",
    question: "How is Space AI different from existing construction-tech or AI tools?",
    answer:
      "Many construction tools are document repositories with search added on top. Space AI is built AI-first with an integrated workflow and forms builder, RAG-agent task automation, BIM integration, multi-tenant SaaS, and on-premise deployment for sovereign clients. Its VeritasGraph engine gives source-traceable answers, helping solve the black-box trust problem for government and enterprise users.",
  },
  {
    id: "doc-5",
    question: "What is Space AI's view on responsible and ethical AI?",
    answer:
      "Responsible AI is central to Space AI's design. The platform is built around sovereign deployment, on-premise options, and source-traceable answers aligned with Australia's AI Ethics Principles and the CSIRO framework. VeritasGraph allows every AI answer to be traced back to its source, making AI more trustworthy for public-sector and regulated environments.",
  },
  {
    id: "doc-6",
    question: "How does Space AI verify that its AI answers are accurate?",
    answer:
      "Space AI verifies AI answers through source attribution. Every AI-generated answer is grounded by **VeritasGraph**, an open-source GraphRAG knowledge-graph framework, and is returned with a verifiable citation and reasoning path. Each claim links back to the source document — such as a schedule, RFI, contract, or cost record — so teams can independently confirm accuracy before acting on it.",
  },
  {
    id: "doc-7",
    question: "What is VeritasGraph and why does Space AI use it?",
    answer:
      "**VeritasGraph** is the open-source GraphRAG knowledge-graph framework that powers Space AI's AI search and answer engine. Space AI uses it because construction decisions depend on connected context: a delay links to a schedule, a cost record, a subcontractor, and a document. VeritasGraph reasons over those relationships and attaches source attribution to every answer, solving the black-box trust problem of generic AI tools.",
  },
  {
    id: "doc-8",
    question: "What is a knowledge graph and how does it improve AI answers in construction?",
    answer:
      "A knowledge graph is a structured representation of project entities — projects, documents, people, schedules, costs, RFIs — and the relationships between them. Instead of matching keywords, Space AI's VeritasGraph engine performs multi-hop reasoning across those relationships, so an answer about a delay can trace through the schedule, procurement, and RFI records that caused it. This produces answers that are both more accurate and fully source-attributed.",
  },
  {
    id: "doc-9",
    question: "Can I see the source and reasoning path behind an AI answer?",
    answer:
      "Yes. Source attribution is built into every answer Space AI produces. The VeritasGraph engine returns each response with the reasoning path it followed through the knowledge graph and citations to the underlying source documents, so you can audit exactly how and why the AI reached its conclusion.",
  },
];

const allFaqs = [
  ...existingFaqs.map((faq) => ({
    ...faq,
    id: `existing-${faq.id}`,
  })),
  ...docFaqs,
];

export const metadata: Metadata = {
  title: "Space AI FAQ | Construction AI Questions",
  description:
    "Answers to common questions about Space AI, construction decision intelligence, predictive workflows, BIM, responsible AI, implementation, security, and ROI.",
  alternates: {
    canonical: "https://pmspace.ai/faq/",
  },
};

function renderAnswer(answer: string) {
  return answer.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <FAQSchema faqs={allFaqs.map(({ question, answer }) => ({ question, answer }))} />

      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            <Sparkles className="h-4 w-4" />
            Construction AI FAQ
          </div>
          <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-300 sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Practical answers about Space AI, predictive construction workflows, implementation, integrations, security, and responsible AI.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {allFaqs.map((faq, index) => (
            <details
              key={faq.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.78),rgba(8,12,20,0.9))] shadow-xl shadow-black/20 transition-colors open:border-violet-300/35 open:bg-white/[0.045]"
              open={index < 2}
            >
              <summary className="flex cursor-pointer list-none items-start gap-4 p-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-300/25 bg-violet-500/15 text-violet-100">
                  <HelpCircle className="h-4 w-4" />
                </span>
                <span className="flex-1 text-base font-semibold leading-6 text-white">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg leading-none text-white/55 transition group-open:rotate-45 group-open:border-violet-300/30 group-open:text-violet-100">
                  +
                </span>
              </summary>
              <div className="border-t border-white/10 px-5 pb-5 pl-[4.25rem]">
                <p className="pt-4 text-sm leading-7 text-white/68">
                  {renderAnswer(faq.answer)}
                </p>
              </div>
            </details>
          ))}
        </div>

        <VeritasGraphAttribution className="mx-auto mt-12 max-w-4xl" />
      </section>
    </main>
  );
}
