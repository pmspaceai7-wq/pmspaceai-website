import { Metadata } from "next";
import SpaceVsPage from "@/components/SpaceVsPage";
import { vsComparisons } from "@/lib/vsComparisons";

export const metadata: Metadata = {
  title: "Space AI vs Monday.com 2026 | Construction vs Work Management",
  description:
    "Space AI vs Monday.com: compare construction-native features, RFIs, drawings, scheduling, AI, and pricing. See why construction teams outgrow Monday.com.",
  keywords: [
    "Space AI vs Monday.com",
    "Monday.com vs Space AI",
    "Monday.com alternative for construction",
    "best Monday.com competitor",
    "construction project management vs Monday",
  ],
  alternates: {
    canonical: "https://pmspace.ai/compare/space-ai-vs-monday/",
  },
};

export default function Page() {
  return <SpaceVsPage config={vsComparisons.monday} />;
}
