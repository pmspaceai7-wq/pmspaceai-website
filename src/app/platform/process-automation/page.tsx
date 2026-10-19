import { Metadata } from "next";
import ProcessAutomationPage from "./ProcessAutomationPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Process Automation | AI & RPA | Space AI",
  description:
    "Automate construction workflows with AI, RPA, intelligent document processing, and API integrations. Boost efficiency, scalability, and compliance.",
  keywords: [
    "construction process automation",
    "construction rpa",
    "construction workflow automation",
    "intelligent document processing construction",
    "construction automation software",
  ],
  alternates: { canonical: "https://pmspace.ai/platform/process-automation/" },
  openGraph: {
    title: "Process Automation | Space AI",
    description: "AI-powered process automation for construction operations.",
    url: "https://pmspace.ai/platform/process-automation/",
    type: "website",
  },
};

const automationFAQs = [
  { question: "What construction processes can Space AI automate?", answer: "Space AI automates RFI routing and response tracking, submittal review workflows, daily report generation, change order processing, invoice matching and approval, safety inspection checklists, progress photo tagging and classification, and document version control. Most repetitive administrative tasks that consume project manager time can be automated." },
  { question: "How does intelligent document processing work in construction?", answer: "Space AI's IDP engine uses OCR and NLP to extract data from construction documents including drawings, specifications, contracts, and submittals. The platform automatically classifies documents, extracts key data points, cross-references specifications with submittals, and flags discrepancies — eliminating hours of manual document review." },
  { question: "Can Space AI automate compliance and reporting workflows?", answer: "Yes. Space AI automates compliance tracking by monitoring project activities against regulatory requirements, generating required reports on schedule, and flagging non-compliant activities before they become issues. The platform auto-generates Davis-Bacon reports, safety compliance summaries, and DBE participation tracking." },
  { question: "How much time does construction automation save?", answer: "Teams using Space AI's automation features save an average of 15-20 hours per week on administrative tasks per project manager. Document processing that previously took 2-3 hours is completed in minutes. RFI routing time is reduced by 70%, and daily report generation drops from 45 minutes to under 5 minutes." },
  { question: "Does automation work with our existing construction workflows?", answer: "Yes. Space AI's automation engine is configurable to match your existing workflows rather than forcing you into rigid processes. The platform maps your current approval chains, notification preferences, and document routing rules, then automates them while maintaining full visibility and override capability." }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={automationFAQs} />
      <ProcessAutomationPage />
    </>
  );
}
