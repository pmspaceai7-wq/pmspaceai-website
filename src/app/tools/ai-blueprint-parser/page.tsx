import { Metadata } from "next";
import BlueprintParserPage from "./BlueprintParserPage";
import { FAQSchema } from "@/components/SEOSchemas";

const PAGE_URL = "https://pmspace.ai/tools/ai-blueprint-parser/";

export const metadata: Metadata = {
  title: "Free AI Blueprint Parser | Turn Construction Drawings into Structured Data | Space AI",
  description:
    "Upload PDF blueprints, civil plans, or DOT sheets and instantly extract text, tables, and page evidence. Free AI blueprint parser — no signup required.",
  keywords: [
    "free AI blueprint parser",
    "construction drawing OCR",
    "PDF blueprint extractor",
    "civil plan data extraction",
    "DOT sheet parser",
    "construction drawing to data",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Free AI Blueprint Parser | Space AI",
    description:
      "Upload PDF blueprints and convert construction drawings into structured text and tables — no signup required.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "Is the AI Blueprint Parser really free?",
    answer:
      "Yes. You can upload PDF blueprints, civil plans, and DOT sheets and extract text and tables without creating an account or paying anything.",
  },
  {
    question: "What file types are supported?",
    answer:
      "The parser currently supports PDF construction drawings. Vector PDFs with embedded text give the cleanest results. Scanned image-based PDFs are supported experimentally when OCR mode is enabled.",
  },
  {
    question: "Is my drawing data kept private?",
    answer:
      "Yes. Parsing happens in your browser. The file is not uploaded to any server, so your plans and proprietary drawings stay on your device.",
  },
  {
    question: "Can I export the extracted data?",
    answer:
      "Yes. You can copy the extracted text to your clipboard or use Print / Save as PDF to export a formatted report with page evidence.",
  },
  {
    question: "How accurate is the table extraction?",
    answer:
      "Table detection works best on drawings with clean grid layouts. Complex or densely overlapping sheets may need review in the platform before they are used for cost or schedule workflows.",
  },
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BlueprintParserPage />
    </>
  );
}
