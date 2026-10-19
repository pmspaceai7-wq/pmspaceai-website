import { Metadata } from "next";
import InfrastructurePage from "./InfrastructurePage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Infrastructure Construction Software | Space AI",
  description:
    "Manage roads, bridges, and civil megaprojects with AI. Predictive analytics and collaboration to deliver infrastructure on time and within budget.",
  keywords: [
    "infrastructure construction management",
    "civil construction software",
    "infrastructure project management",
    "megaproject management software",
    "civil engineering project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/infrastructure/",
  },
  openGraph: {
    title: "Infrastructure Construction Management Software | Space AI",
    description: "AI-powered management for infrastructure and civil construction projects.",
    url: "https://pmspace.ai/industries/infrastructure/",
    type: "website",
  },
};

const infrastructureFAQs = [
  {
    question: "How does Space AI manage large-scale infrastructure megaprojects?",
    answer: "Space AI handles megaprojects through work breakdown structures that decompose billion-dollar programs into manageable work packages. The platform coordinates multiple contractors, tracks earned value across hundreds of activities, and provides program-level dashboards that aggregate progress, costs, and risks across all project components in real-time."
  },
  {
    question: "Can Space AI coordinate bridge and tunnel construction projects?",
    answer: "Yes. Space AI supports specialized workflows for bridge and tunnel construction including staged demolition sequencing, temporary works management, and geotechnical monitoring integration. The platform tracks critical path activities like pile driving, segmental erection, and post-tensioning with weather and tidal constraints factored into scheduling."
  },
  {
    question: "How does the platform handle utility infrastructure coordination?",
    answer: "Space AI manages utility relocation and installation projects with 3D underground utility mapping, conflict detection against existing infrastructure, and permit coordination across multiple utility providers. The platform tracks trenching sequences, utility crossings, and connection schedules to prevent costly conflicts and service disruptions."
  },
  {
    question: "Does Space AI support government-funded infrastructure projects?",
    answer: "Absolutely. Space AI includes built-in compliance tracking for Davis-Bacon wage requirements, Buy America provisions, DBE participation goals, and federal reporting standards. The platform generates FHWA, FTA, and state DOT-compliant progress reports and supports multi-year funding tracking across appropriation cycles."
  },
  {
    question: "What ROI do infrastructure owners see from using Space AI?",
    answer: "Infrastructure owners using Space AI typically achieve 15-20% schedule compression, 25-35% reduction in claims and disputes, and consistent delivery within 5% of budget. For a $200M infrastructure program, this translates to $30-50M in savings from avoided delays, reduced litigation, and optimized resource allocation."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={infrastructureFAQs} />
      <InfrastructurePage />
    </>
  );
}

