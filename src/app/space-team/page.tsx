import { Metadata } from "next";
import SpaceTeamPage from "./SpaceTeamPage";

export const metadata: Metadata = {
  title: "Our Leadership Team | PMSPACE AI",
  description:
    "Meet the visionary leaders behind PMSPACE AI — distinguished professionals driving innovation in AI-powered construction management across the globe.",
  keywords: [
    "PMSPACE AI team",
    "space ai leadership",
    "construction ai executives",
    "paul deasy",
    "thomas jomon",
    "mohammed assakkaf",
    "geetha pradeep",
  ],
  alternates: {
    canonical: "https://pmspace.ai/space-team/",
  },
  openGraph: {
    title: "Our Leadership Team | PMSPACE AI",
    description:
      "Meet the visionary leaders behind PMSPACE AI — driving innovation in AI-powered construction and enterprise technology.",
    url: "https://pmspace.ai/space-team/",
    type: "website",
  },
};

export default function Page() {
  return <SpaceTeamPage />;
}
