// app/solutions/all-in-one-construction-software/page.tsx
import { Metadata } from "next";
import AllInOneConstructionSoftwarePage from "./AllInOneConstructionSoftwarePage";


export const metadata: Metadata = {
    title: "All-in-One Construction Software | AECO Project Platform | Space AI",
  description:
    "Unify scheduling, cost, documents, and field collaboration. Space AI connects data across projects to predict risks and accelerate delivery.",
  keywords: [
    "all-in-one construction software",
    "AECO software",
    "unified construction platform",
    "construction collaboration software",
    "integrated construction management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/all-in-one-construction-software/",
  },
  openGraph: {
  title: "All-in-One Construction Software | AECO Project Platform | Space AI",
    description: "Unify scheduling, cost, documents, and field collaboration in one platform.",
    type: "website",
    url: "https://pmspace.ai/solutions/all-in-one-construction-software/",
  },
};

export default function Page() {
  return <AllInOneConstructionSoftwarePage />;
}