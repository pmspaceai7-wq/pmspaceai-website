import { Metadata } from "next";
import GovernmentPage from "./GovernmentPage";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Government Construction Software | Space AI",
  description:
    "AI-powered construction management for government projects. Streamline permitting, ensure compliance, and manage taxpayer-funded builds efficiently.",
  keywords: [
    "government construction management",
    "public sector construction software",
    "government project management",
    "municipal construction management",
    "public works project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/government/",
  },
  openGraph: {
    title: "Government Construction Management Software | Space AI",
    description: "AI-powered project management for government and public sector construction.",
    url: "https://pmspace.ai/industries/government/",
    type: "website",
  },
};

const governmentFAQs = [
  {
    question: "How does Space AI ensure transparency in government construction projects?",
    answer: "Space AI provides complete audit trails for every decision, change order, and expenditure. The platform generates real-time dashboards that can be shared with oversight committees, public stakeholders, and elected officials. All project data is archived and searchable for FOIA compliance and public accountability reporting."
  },
  {
    question: "Does Space AI comply with government procurement and security requirements?",
    answer: "Yes. Space AI supports FedRAMP-aligned security protocols, SOC 2 compliance, and role-based access controls suitable for government environments. The platform handles prevailing wage tracking, DBE/MBE compliance reporting, and integrates with government procurement systems including SAM.gov and state-specific e-procurement platforms."
  },
  {
    question: "How does the platform handle multi-agency coordination on public projects?",
    answer: "Space AI enables multi-agency collaboration through configurable permission layers. Each agency maintains its own workspace while sharing relevant project data through controlled access points. The platform coordinates inter-agency reviews, manages shared infrastructure dependencies, and provides consolidated reporting for joint oversight committees."
  },
  {
    question: "Can Space AI manage bond-funded capital improvement programs?",
    answer: "Absolutely. Space AI tracks entire capital improvement programs with bond-fund allocation across multiple projects. The platform monitors spending against bond requirements, generates compliance reports for bond trustees, and provides taxpayer-facing dashboards showing how public funds are being utilized across the program."
  },
  {
    question: "What cost savings do government agencies achieve with Space AI?",
    answer: "Government agencies using Space AI typically achieve 15-25% cost savings on construction projects through predictive scheduling, automated compliance tracking, and reduced change orders. For a $100M public works program, this translates to $15-25M in taxpayer savings while maintaining full regulatory compliance."
  }
];

export default function Page() {
  return (
    <>
      <FAQSchema faqs={governmentFAQs} />
      <GovernmentPage />
    </>
  );
}

