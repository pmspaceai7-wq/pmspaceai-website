import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Solutions } from "@/sections/Solutions";
import { KeyBenefits } from "@/sections/KeyBenefits";
import { Insights } from "@/sections/Insights";
import { AdvancedFeatures } from "@/sections/AdvancedFeatures";
import CopilotPopupClient from "@/components/CopilotPopupClient";
import ContactForm from "@/components/ContactForm";
import { Modules } from "@/sections/Modules";
import PlatformFeaturesPage from "@/components/platformFeaturesPage";
import AdditionalFeaturesPage from "@/components/additionalFeatures";
import SystemOfIntelligence from "@/sections/SystemofIntelligence";
import type { Metadata } from "next";
import { FAQSchema } from "@/components/SEOSchemas";
import { getAllBlogPosts } from "@/lib/blogs";
//changes
export const metadata: Metadata = {
  title: "Space AI - AI Construction Management Platform | #1 Software 2026",
  description:
    "Space AI is the leading AI construction management platform for scheduling, cost tracking, and project delivery. Predict delays 45 days ahead. Free tier available. Start your free trial today.",
  keywords: [
    "space ai",
    "ai construction management",
    "construction management software",
    "best construction management software",
    "construction project management software",
    "construction software",
    "project management software for construction",
    "building project management software",
    "ai project management",
    "construction management system",
    "construction management platform",
    "ai construction software",
  ],
  alternates: {
    canonical: "https://pmspace.ai",
  },
  openGraph: {
    title: "Space AI - AI Construction Management Platform | #1 Software 2026",
    description: "Space AI - The #1 AI construction management platform. Predict delays 45 days ahead, optimize schedules, and deliver projects on time. Free tier available.",
    url: "https://pmspace.ai",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Space AI - AI Construction Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space AI - AI Construction Management Platform | #1 Software 2026",
    description: "Space AI - The #1 AI construction management platform. Predict delays 45 days ahead. Free tier available.",
    images: ["https://pmspace.ai/assets/images/og-image.jpeg"],
  },
};

import React from "react";
import Locations from "@/sections/Locations";

const homeFAQs = [
  {
    question: "Does Space AI replace Oracle Primavera?",
    answer: "Yes, Space AI is a modern alternative to  Oracle Primavera P6. It offers AI-driven predictive scheduling that is easier to use while providing powerful Critical Path Method (CPM) capabilities, often recovering 10-15% of schedule time compared to legacy tools."
  },
  {
    question: "Is Space AI compatible with Revit and BIM?",
    answer: "Absolutely. Space  AI integrates directly with Autodesk Revit and other BIM tools (IFC/BCF standards). You can visualize 3D models alongside your schedule and costs, enabling 4D and 5D BIM workflows without leaving the platform."
  },
  {
    question: "How does Space AI predict construction delays?",
    answer: "Space AI analyzes historical project data, weather patterns, and real-time site progress to identify risks before they happen. Its machine learning engine flags potential bottlenecks—like supply chain issues or labor shortages—weeks in advance."
  },
  {
    question: "Can I use Space AI for small contractors?",
    answer: "Yes, Space AI scales from small specialty contractors to massive infrastructure projects. Our 'Starter' plan is free for up to 3 projects, making it perfect for smaller teams to digitize their daily logs, RFIs, and scheduling."
  }
];

export default function Home() {
  const enableCopilot = Boolean(process.env.NEXT_PUBLIC_COPILOTKIT_PUBLIC_API_KEY);
  const latestBlogPosts = getAllBlogPosts()
    .slice()
    .sort((a, b) => (b.datePublished || "").localeCompare(a.datePublished || ""))
    .slice(0, 3)
    .map(({ slug, title, description, imageSrc, href, datePublished, linkedinPostUrl, linkedinOrigin }) => ({
      slug,
      title,
      description,
      imageSrc,
      href,
      datePublished,
      linkedinPostUrl,
      linkedinOrigin,
    }));

  return ( 
    <div className="overflow-x-hidden">
      <FAQSchema faqs={homeFAQs} />
  
    <Hero  />
    <SystemOfIntelligence showFreeTierVideo />
    <Solutions/>
    <PlatformFeaturesPage/>
    <KeyBenefits/>
    <Testimonials />
    <Insights posts={latestBlogPosts}/>
    {/* <Modules/> */}
    {/* <AdditionalFeaturesPage/> */}
    {/* <AdvancedFeatures/> */}
     <Locations/>
     <section className="relative overflow-hidden bg-black py-16 sm:py-20">
      <div className="absolute inset-0 bg-[url('/assets/images/contact-ai-black-background.png')] bg-cover bg-center opacity-70" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
       <ContactForm enableCopilot={enableCopilot} />
      </div>
     </section>
    
  
    {/* <LogoTicker />
    <Features />
    <CallToAction /> */}
     {enableCopilot ? (
     <div className="relative z-50">
        <CopilotPopupClient />
      </div>
     ) : null}
    </div>
  );
}
