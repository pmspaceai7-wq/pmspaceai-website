// app/guides/page.tsx
import { Metadata } from "next";
import { getAllGuides } from "@/lib/guides";
import GuidesPage from "./GuidesPage";
import Link from "next/link";

// Generate metadata on the server - Task 46: Optimized for keywords
export const metadata: Metadata = {
  title: "Construction Management Guides & Tutorials | AI Project Management | Space AI",
  description:
    "Free construction management guides covering AI scheduling, BIM integration, document automation, and project planning. Step-by-step tutorials for construction professionals.",
  keywords: "construction management guides, AI scheduling tutorials, BIM integration guide, construction project planning, document automation construction, construction software tutorials",
  openGraph: {
    title: "Construction Management Guides & Tutorials | Space AI",
    description: "Step-by-step guides for AI-powered construction management. Learn scheduling, BIM, document automation, and more.",
    url: "https://pmspace.ai/guides/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Management Guides | Space AI",
    description: "Free guides for AI-powered construction management and project planning.",
  },
  alternates: {
    canonical: "https://pmspace.ai/guides/",
  },
};

// Main Server Component for the guides page
// This component fetches the data on the server
export default async function Page() {
  const guides = await getAllGuides();

  // It passes the fetched data to the client component for rendering
  return (
    <>
      <GuidesPage guides={guides} />
      <section className="bg-black text-white pb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">Popular Guide Paths</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/core/space-connectors/" className="text-white/80 hover:text-white underline">Space Connectors Guide</Link>
            <Link href="/guides/space-capture/" className="text-white/80 hover:text-white underline">Space Capture Guide</Link>
            <Link href="/guides/space-vision/" className="text-white/80 hover:text-white underline">Space Vision Guide</Link>
            <Link href="/guides/designer/" className="text-white/80 hover:text-white underline">Designer Workspace Guide</Link>
            <Link href="/guides/common-data-platform/" className="text-white/80 hover:text-white underline">CDE Platform Guide</Link>
            <Link href="/guides/ultimate-construction-management-guide/" className="text-white/80 hover:text-white underline">Ultimate Construction Management Guide</Link>
            <Link href="/guides/admin-module/" className="text-white/80 hover:text-white underline">Admin Module Guide</Link>
            <Link href="/core/ai-lean-construction-platform/" className="text-white/80 hover:text-white underline">AI Lean Construction Platform Guide</Link>
            <Link href="/core/custom-workstreams/" className="text-white/80 hover:text-white underline">Custom Workstreams Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}

