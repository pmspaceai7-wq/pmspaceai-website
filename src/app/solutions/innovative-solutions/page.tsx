import { Metadata } from "next";
import InnovativeSolutionsPage from "./InnovativeSolutionsPage";

export const metadata: Metadata = {
  title: "Innovative AI Solutions | Space AI for Enterprise Growth",
  description:
    "Explore Space AI's innovative solutions to modernize data, automate operations, unlock insights, and accelerate enterprise innovation.",
  keywords: [
    "innovative AI solutions",
    "enterprise AI",
    "data modernization",
    "automation solutions",
    "Space AI enterprise",
    "digital transformation",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/innovative-solutions/",
  },
  openGraph: {
    title: "Innovative AI Solutions | Space AI for Enterprise Growth",
    description: "Explore Space AI's innovative solutions to modernize data, automate operations, unlock insights, and accelerate enterprise innovation.",
    type: "website",
    url: "https://pmspace.ai/solutions/innovative-solutions/",
  },
};




export default function Page() {
  return <InnovativeSolutionsPage/>;
}
