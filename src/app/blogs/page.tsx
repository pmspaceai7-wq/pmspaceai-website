import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blogs";
import BlogsPage from "./BlogPage";
import Link from "next/link";
import VeritasGraphAttribution from "@/components/VeritasGraphAttribution";

// Generate metadata on the server
export const metadata: Metadata = {
  title: "Construction Management Blog | Space AI Insights & Guides",
  description:
    "Expert construction management articles, guides & insights. Learn about AI, project scheduling, risk management, and best practices.",
  keywords: [
    "construction management blog",
    "construction technology articles",
    "ai construction insights",
    "project management guides",
    "construction industry news",
    "construction software tips",
  ],
  alternates: {
    canonical: "https://pmspace.ai/blogs/",
  },
  openGraph: {
    title: "Construction Management Blog | Space AI",
    description: "Expert articles on construction management, AI technology, and industry best practices.",
    url: "https://pmspace.ai/blogs/",
    type: "website",
  },
};

// Main Server Component for the blogs page
// This component fetches the data on the server
export default async function Page() {
  const blogPosts = await getAllBlogPosts();

  // It passes the fetched data to the client component for rendering
  return (
    <>
      <BlogsPage blogPosts={blogPosts} />

      {/* VeritasGraph attribution section */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <VeritasGraphAttribution />
        </div>
      </section>

      <nav aria-label="Featured blog links" className="bg-black text-white pb-10">
        <div className="container mx-auto px-4 text-sm flex flex-wrap gap-3">
          <Link href="/blogs/all-in-one-construction-software/" className="text-white/80 hover:text-white underline">All-in-One Construction Software</Link>
          <Link href="/blogs/best-software-for-construction-business/" className="text-white/80 hover:text-white underline">Best Software for Construction Business</Link>
          <Link href="/blogs/construction-software-for-small-builders/" className="text-white/80 hover:text-white underline">Construction Software for Small Builders</Link>
          <Link href="/blogs/how-knowledge-graph-powers-construction-ai/" className="text-white/80 hover:text-white underline">How Knowledge Graph Powers Construction AI</Link>
          <Link href="/predictive-analytics-construction/" className="text-white/80 hover:text-white underline">Predictive Analytics in Construction</Link>
        </div>
      </nav>
    </>
  );
}
