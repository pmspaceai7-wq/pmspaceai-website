// app/videos/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { getAllVideoPosts, VideoPost } from "@/lib/videos"; 
import VideosPage from "./VideosPage";


// Generate metadata on the server
export const metadata: Metadata = {
  title: "Space AI Video Gallery | Construction Management Tutorials",
  description:
    "Watch expert videos on project planning, scheduling, risk management, and AI-powered solutions from Space AI.",
  keywords: [
    "construction management videos",
    "Space AI tutorials",
    "project management videos",
    "construction software training",
    "AI construction demos",
  ],
  alternates: {
    canonical: "https://pmspace.ai/videos/",
  },
  openGraph: {
    title: "Space AI Video Gallery | Construction Management Tutorials",
    description: "Watch expert videos on project planning, scheduling, and AI-powered solutions.",
    type: "website",
    url: "https://pmspace.ai/videos/",
  },
};

// Main Server Component for the videos page
export default async function Page() {
  // Fetch data on the server
  const videoPosts: VideoPost[] = await getAllVideoPosts();

  // Pass the fetched data to the client component for interactivity
  return (
    <>
      <VideosPage videoPosts={videoPosts} />
      <nav aria-label="Featured videos" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/videos/ai-invoice-management-software-with-automation-space-ai/" className="text-white/80 hover:text-white underline">AI Invoice Management Video</Link>
          <Link href="/videos/building-next-gen-enterprise-ai/" className="text-white/80 hover:text-white underline">Next-Gen Enterprise AI Video</Link>
          <Link href="/videos/cost-estimation-tool/" className="text-white/80 hover:text-white underline">Cost Estimation Tool Video</Link>
          <Link href="/videos/project-management-dashboard-demo/" className="text-white/80 hover:text-white underline">Project Dashboard Demo</Link>
          <Link href="/videos/space-ai-tutorial-forms-files-user-management-explained/" className="text-white/80 hover:text-white underline">Space AI Tutorial Video</Link>
        </div>
      </nav>
    </>
  );
}
