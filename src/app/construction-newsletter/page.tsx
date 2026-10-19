// Task 70: Email Newsletter Signup & Archive Page
// SEO Target: "construction newsletter", "construction management updates", "Space AI newsletter"

import { Metadata } from "next";
import NewsletterClient from "./NewsletterClient";

export const metadata: Metadata = {
  title: "Newsletter | Construction Management Insights | Space AI",
  description:
    "Subscribe to The Build Brief - weekly construction management insights, AI innovations, industry trends, and best practices from Space AI experts.",
  keywords:
    "construction newsletter, construction management news, Space AI newsletter, construction technology insights, construction industry updates",
  openGraph: {
    title: "Newsletter | Construction Management Insights | Space AI",
    description:
      "Weekly construction management insights and AI innovations delivered to your inbox.",
    type: "website",
    url: "https://pmspace.ai/construction-newsletter/",
  },
  alternates: {
    canonical: "https://pmspace.ai/construction-newsletter/",
  },
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}
