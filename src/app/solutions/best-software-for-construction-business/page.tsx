// app/solutions/best-software-for-construction-business/page.tsx
import { Metadata } from "next";
import BestConstructionSoftwarePage from "./BestConstructionSoftwarePage";


export const metadata: Metadata = {
  title: "Best Software for Modern Construction Businesses | Space AI",
  description:
    "Turn waste into profit with a true System of Intelligence. Predict risks, automate workflows, and ensure outcomes across your construction portfolio.",
  keywords: [
    "best construction business software",
    "construction business management",
    "modern construction software",
    "construction company software",
    "construction business tools",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/best-software-for-construction-business/",
  },
  openGraph: {
    title: "Best Software for Modern Construction Businesses | Space AI",
    description: "Turn waste into profit with predictive risk management and automated workflows.",
    type: "website",
    url: "https://pmspace.ai/solutions/best-software-for-construction-business/",
  },
};

export default function Page() {
  return <BestConstructionSoftwarePage/>;
}
