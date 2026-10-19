import { Metadata } from "next";
import ResellersPage from "./ResellersPage";


// Generate static metadata for the resellers page
export const metadata: Metadata = {
  title: "Space AI Resellers | Global Partners & Distributors",
  description:
    "Find our trusted global partners and resellers who distribute and support Space AI's innovative construction management solutions.",
  keywords: [
    "Space AI resellers",
    "construction software partners",
    "Space AI distributors",
    "global construction partners",
    "authorized resellers",
  ],
  alternates: {
    canonical: "https://pmspace.ai/resellers/",
  },
  openGraph: {
    title: "Space AI Resellers | Global Partners & Distributors",
    description: "Find our trusted global partners and resellers who distribute Space AI solutions.",
    type: "website",
    url: "https://pmspace.ai/resellers/",
  },
};

export default function Page() {
  return <ResellersPage />;
}