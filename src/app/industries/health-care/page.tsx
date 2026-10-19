import { Metadata } from "next";
import Link from "next/link";
import HealthcarePage from "./HealthcarePage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Healthcare Construction Software | Space AI",
  description:
    "AI management for hospitals & healthcare facilities. Zero-disruption scheduling, compliance tracking, and predictive analytics for complex builds.",
  keywords: [
    "healthcare construction management",
    "hospital construction software",
    "healthcare facility construction",
    "medical building project management",
    "healthcare construction compliance",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/health-care/",
  },
  openGraph: {
    title: "Healthcare Construction Management Software | Space AI",
    description: "AI-powered project management for healthcare facility construction.",
    url: "https://pmspace.ai/industries/health-care/",
    type: "website",
  },
};

const healthcareFAQs = [
  {
    question: "How does Space AI manage hospital construction without disrupting patient care?",
    answer: "Space AI uses infection control risk assessment (ICRA) protocols integrated directly into scheduling. The platform plans construction activities around patient-sensitive areas, manages negative air pressure barriers, coordinates utility shutdowns during low-census periods, and ensures HEPA filtration requirements are met. Real-time monitoring alerts teams when construction activities approach patient care zones."
  },
  {
    question: "Can Space AI handle healthcare construction compliance requirements?",
    answer: "Yes. Space AI tracks compliance with HIPAA physical safeguards, Joint Commission environment of care standards, ADA requirements, and state health department codes. The platform maintains audit-ready documentation, automates life safety plan updates, and generates compliance reports for regulatory inspections throughout the construction process."
  },
  {
    question: "How does the platform manage MEP systems in healthcare facilities?",
    answer: "Space AI coordinates complex healthcare MEP systems including medical gas piping, nurse call systems, pneumatic tube systems, and redundant power configurations. The platform detects clashes between critical systems before construction, sequences installations to maintain facility operations, and tracks commissioning requirements for each system."
  },
  {
    question: "Does Space AI support phased hospital renovation projects?",
    answer: "Absolutely. Space AI excels at occupied hospital renovations with swing-space planning, temporary service routing, and phase-by-phase patient relocation coordination. The platform ensures each phase meets life safety requirements before occupancy, manages interim fire safety measures, and coordinates with clinical staff to minimize impact on patient services."
  },
  {
    question: "What cost savings do healthcare systems achieve with Space AI?",
    answer: "Healthcare systems using Space AI typically achieve 20-30% reduction in construction timelines, 40% fewer infection control incidents during construction, and 25% improvement in budget accuracy. For a $150M hospital project, this translates to $25-40M in savings from avoided delays, reduced rework, and elimination of ICRA-related shutdowns."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={healthcareFAQs} />
      <HealthcarePage />
      <nav aria-label="Related resources" style={{ display: "none" }}>
        <Link href="/guides/healthcare-construction-management/">Healthcare Construction Management Guide</Link>
        <Link href="/construction-software-demo/">Book a Construction Software Demo</Link>
      </nav>
    </>
  );
}

