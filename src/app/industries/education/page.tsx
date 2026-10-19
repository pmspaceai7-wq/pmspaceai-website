import { Metadata } from "next";
import EducationPage from "./EducationPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Education Construction Software | Space AI",
  description:
    "AI-powered construction management for schools & universities. Smart campus planning to deliver educational facilities on time and budget.",
  keywords: [
    "education construction management",
    "school construction software",
    "university construction management",
    "campus construction project management",
    "education facility construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/education/",
  },
  openGraph: {
    title: "Education Construction Management Software | Space AI",
    description: "AI-powered project management for school and university construction.",
    url: "https://pmspace.ai/industries/education/",
    type: "website",
  },
};

const educationFAQs = [
  {
    question: "How does Space AI handle school construction scheduling around academic calendars?",
    answer: "Space AI integrates academic calendar constraints directly into project schedules. The platform automatically plans high-noise activities like demolition and concrete pouring during breaks and summer recess, while quieter finishing work is scheduled during school sessions. This ensures zero disruption to students and faculty."
  },
  {
    question: "Can Space AI manage K-12 and higher education construction differently?",
    answer: "Yes. Space AI offers configurable templates for K-12 schools, universities, and research facilities. Each template includes industry-specific compliance checklists, safety protocols for occupied campuses, and specialized workflows for laboratory fit-outs, athletic facilities, and student housing construction."
  },
  {
    question: "How does the platform ensure compliance with education facility building codes?",
    answer: "Space AI includes built-in compliance tracking for ADA accessibility, fire safety, environmental standards, and state-specific education facility codes. The platform automatically flags non-compliant designs during pre-construction and generates audit-ready reports for school board and regulatory approvals."
  },
  {
    question: "What cost savings can school districts expect with Space AI?",
    answer: "School districts using Space AI typically save 18-30% on construction costs through predictive analytics that prevent change orders, AI-optimized material procurement, and reduced rework. For a $25M school construction project, districts can expect $3-5M in savings while maintaining quality standards."
  },
  {
    question: "Does Space AI support phased campus construction for occupied schools?",
    answer: "Absolutely. Space AI excels at phased construction planning for occupied campuses. The platform creates detailed swing-space plans, coordinates temporary classroom setups, and manages student and staff safety zones. Real-time dashboards keep school administrators informed of progress and upcoming disruptions."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={educationFAQs} />
      <EducationPage />
    </>
  );
}

