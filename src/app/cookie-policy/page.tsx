
import { Metadata } from "next";
import CookiePolicyPage from "./CookiePolicyPage";


export const metadata: Metadata = {
  title: "Cookie Policy | Space AI",
  description:
    "Learn how Space AI uses cookies to enhance your browsing experience, improve performance, and ensure secure, personalized services.",
  keywords: [
    "Space AI cookie policy",
    "cookies usage",
    "website cookies",
    "privacy cookies",
    "cookie settings",
  ],
  alternates: {
    canonical: "https://pmspace.ai/cookie-policy/",
  },
  openGraph: {
    title: "Cookie Policy | Space AI",
    description: "Learn how Space AI uses cookies to enhance your browsing experience.",
    type: "website",
    url: "https://pmspace.ai/cookie-policy/",
  },
};

export default function Page() {
  return <CookiePolicyPage/>;
}
