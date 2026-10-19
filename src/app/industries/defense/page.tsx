import { Metadata } from "next";
import DefensePage from "./DefensePage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Defense Construction Software | Space AI",
  description:
    "Secure AI construction management for defense & military projects. Compliance tracking and mission-critical facility builds with advanced security.",
  keywords: [
    "defense construction management",
    "military construction software",
    "defense project management",
    "secure construction management",
    "government defense construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/defense/",
  },
  openGraph: {
    title: "Defense Construction Management Software | Space AI",
    description: "Secure AI-powered project management for defense and military construction.",
    url: "https://pmspace.ai/industries/defense/",
    type: "website",
  },
};

const defenseFAQs = [
  {
    question: "How does Space AI ensure data security for defense construction projects?",
    answer: "Space AI provides enterprise-grade security with role-based access controls, encrypted data at rest and in transit, and compartmentalized project access. The platform supports multi-factor authentication, audit logging of all user actions, and data residency requirements. Security protocols can be configured to meet DoD and classified facility construction requirements."
  },
  {
    question: "Can Space AI manage MILCON and military construction programs?",
    answer: "Yes. Space AI is built to handle Military Construction (MILCON) programs with UFGS specification tracking, DD Form 1391 project documentation, and compliance with UFC (Unified Facilities Criteria). The platform manages multiple facilities within a MILCON program, tracks congressional authorization milestones, and generates DoD-compliant progress reports."
  },
  {
    question: "How does the platform handle anti-terrorism and force protection requirements?",
    answer: "Space AI integrates AT/FP (Anti-Terrorism/Force Protection) standards into project planning from day one. The platform tracks UFC 4-010-01 compliance requirements, manages setback distances, coordinates blast-resistant construction sequences, and ensures progressive collapse resistance is maintained throughout the construction process."
  },
  {
    question: "Does Space AI support construction on active military installations?",
    answer: "Absolutely. Space AI manages construction on active bases with security clearance tracking for all personnel, base access coordination, and operational security compliance. The platform schedules construction activities around military operations, manages noise and disruption constraints, and coordinates with installation commanders for access windows."
  },
  {
    question: "What efficiencies do defense agencies achieve with Space AI?",
    answer: "Defense agencies using Space AI typically achieve 20-25% reduction in MILCON project timelines, 30% fewer security-related work stoppages, and 95%+ compliance rates on first inspection. For a $500M installation development program, this translates to $75-100M in savings from schedule compression and reduced rework."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={defenseFAQs} />
      <DefensePage />
    </>
  );
}

