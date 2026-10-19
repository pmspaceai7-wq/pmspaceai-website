import { Metadata } from "next";
import MEPClashPage from "./MEPClashPage";

export const metadata: Metadata = {
  title: "Avoiding MEP Clashes using AI | Space AI Case Study",
  description:
    "See how Generative AI helped resolve 400+ MEP clashes before construction, saving 6 weeks of schedule. Advanced BIM coordination with Space AI.",
  keywords: [
    "mep clash detection",
    "ai in bim",
    "generative design construction",
    "mep coordination software",
    "construction clash avoidance",
  ],
  alternates: {
    canonical: "https://pmspace.ai/case-studies/mep-clash-avoidance/",
  },
  openGraph: {
    title: "Avoiding MEP Clashes using AI | Space AI",
    description: "Case study: How AI resolved 400+ clashes and saved 6 weeks of rework.",
    url: "https://pmspace.ai/case-studies/mep-clash-avoidance/",
    type: "article",
  },
};

export default function Page() {
  return <MEPClashPage/>;
}
