import { Metadata } from "next";
import RfiGeneratorPage from "./RfiGeneratorPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Free AI RFI Writer & Construction RFI Template Generator | Space AI",
  description:
    "Generate a polished, professionally structured construction RFI document in seconds. Free AI RFI template generator for superintendents, field engineers, and project coordinators.",
  keywords: [
    "free AI RFI writer",
    "construction RFI template generator",
    "RFI generator",
    "construction RFI example",
    "request for information construction",
    "RFI template construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/ai-rfi-generator/",
  },
  openGraph: {
    title: "Free AI RFI Writer for Construction Teams | Space AI",
    description:
      "Turn rough issue notes into a structured, professional RFI document ready to copy or save as PDF.",
    url: "https://pmspace.ai/tools/ai-rfi-generator/",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is this AI RFI generator really free?",
    answer:
      "Yes. Space AI provides this RFI document generator free of charge to help construction teams draft clear, structured requests for information in seconds without starting from a blank page.",
  },
  {
    question: "What is a construction RFI?",
    answer:
      "A Request for Information (RFI) is a formal document used on construction projects to ask for clarification about drawings, specifications, or site conditions. It records the question, the answer, and the schedule impact for the project record.",
  },
  {
    question: "Can I export the generated RFI?",
    answer:
      "Yes. After generating, you can copy the document to your clipboard or use the Print / Save as PDF button to export a clean, branded document for distribution.",
  },
  {
    question: "Does Space AI automate RFIs in the platform?",
    answer:
      "Yes. Space AI routes incoming RFIs to the right specialist, auto-suggests answers, and tracks aging questions so they never stall the critical path.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <RfiGeneratorPage />
    </>
  );
}
