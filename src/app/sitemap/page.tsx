import { Metadata } from "next";
import SitemapPage from "./SitemapPage";

export const metadata: Metadata = {
  title: "Site Map | Space AI",
  description:
    "Navigate all pages on Space AI. Find solutions, products, guides, case studies, and comparison tools to help you manage your construction projects.",
  keywords: [
    "Space AI sitemap",
    "Space AI pages",
    "construction software features",
    "Space AI guides",
  ],
  alternates: {
    canonical: "https://pmspace.ai/sitemap/",
  },
  openGraph: {
    title: "Site Map | Space AI",
    description: "Navigate all pages and resources on Space AI.",
    type: "website",
    url: "https://pmspace.ai/sitemap/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <SitemapPage />;
}
