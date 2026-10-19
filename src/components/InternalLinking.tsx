// src/components/InternalLinking.tsx
// Strategic Internal Linking Components for SEO Authority Building

"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const SITE_URL = "https://pmspace.ai";

// ============================================================================
// RELATED PAGES DATA
// Defines topical clusters for internal linking
// ============================================================================

export const topicalClusters = {
  // Core Software Pages Cluster
  "construction-software": {
    pillar: "/construction-management-software/",
    related: [
      { url: "/features/", title: "Features", description: "Explore all Space AI features" },
      { url: "/pricing/", title: "Pricing", description: "Transparent pricing plans" },
      { url: "/enterprise/", title: "Enterprise", description: "Solutions for large teams" },
      { url: "/free-construction-management-software/", title: "Free Plan", description: "Get started for free" },
      { url: "/mobile-construction-management-app/", title: "Mobile App", description: "Manage projects on the go" },
    ],
  },
  
  // AI & Technology Cluster
  "ai-technology": {
    pillar: "/ai-construction-management/",
    related: [
      { url: "/platform/ai/", title: "AI Platform", description: "Our AI capabilities" },
      { url: "/predictive-analytics-construction/", title: "Predictive Analytics", description: "Forecast project outcomes" },
      { url: "/usecases/reduce-construction-rfi-delays/", title: "Reduce RFI Delays", description: "AI-powered RFI management" },
      { url: "/usecases/ai-construction-scheduling/", title: "Schedule Optimization", description: "Intelligent scheduling" },
      { url: "/guides/ai-construction-management-complete-guide/", title: "AI Guide", description: "Complete AI guide" },
      { url: "/case-studies/concrete-delay-prediction/", title: "Concrete Delay AI", description: "Predicting delays case study" },
      { url: "/case-studies/mep-clash-avoidance/", title: "MEP Clash Avoidance", description: "Generative design case study" },
      { url: "/guides/ai-construction-management-complete-guide/", title: "AI Construction Guide", description: "Complete AI guide for construction" },
      { url: "/tools/construction-delay-risk-calculator/", title: "Risk Calculator", description: "Estimate delay risks" },
      { url: "/resources/2026-construction-ai-trends/", title: "2026 AI Trends", description: "State of AI Report" },
    ],
  },
  
  // Competitor Alternatives Cluster
  "alternatives": {
    pillar: "/alternatives/",
    related: [
      { url: "/alternatives/procore-alternative/", title: "Procore Alternative", description: "Compare with Procore" },
      { url: "/alternatives/buildertrend-alternative/", title: "Buildertrend Alternative", description: "Compare with Buildertrend" },
      { url: "/alternatives/plangrid-alternative/", title: "PlanGrid Alternative", description: "Compare with PlanGrid" },
      { url: "/alternatives/autodesk-construction-cloud-alternative/", title: "Autodesk Alternative", description: "Compare with Autodesk" },
      { url: "/compare/construction-software-comparison/", title: "Full Comparison", description: "Side-by-side comparison" },
    ],
  },
  
  // Geographic Pages Cluster
  "locations": {
    pillar: "/construction-management-software/",
    related: [
      { url: "/construction-management-software-usa/", title: "USA", description: "For US construction teams" },
      { url: "/construction-management-software-uk/", title: "UK", description: "For UK construction teams" },
      { url: "/construction-management-software-australia/", title: "Australia", description: "For Australian teams" },
      { url: "/construction-management-software-india/", title: "India", description: "For Indian teams" },
      { url: "/construction-management-software-uae/", title: "UAE", description: "For UAE teams" },
      { url: "/construction-management-software-singapore/", title: "Singapore", description: "For Singapore teams" },
    ],
  },
  
  // Industry Verticals Cluster
  "industries": {
    pillar: "/industries/",
    related: [
      { url: "/industries/infrastructure/", title: "Infrastructure", description: "For infrastructure projects" },
      { url: "/industries/real-estate/", title: "Real Estate", description: "For real estate developers" },
      { url: "/industries/health-care/", title: "Healthcare", description: "For healthcare construction" },
      { url: "/industries/education/", title: "Education", description: "For educational facilities" },
      { url: "/industries/government/", title: "Government", description: "For government projects" },
      { url: "/industries/commercial-high-rise/", title: "Commercial High-Rise", description: "For high-rise projects" },
      { url: "/locations/dubai-mega-projects/", title: "Dubai Mega-Projects", description: "For GCC mega-builds" },
    ],
  },
  
  // Features Cluster
  "features": {
    pillar: "/features/",
    related: [
      { url: "/project-scheduling-software/", title: "Scheduling", description: "Project scheduling tools" },
      { url: "/construction-document-management-software/", title: "Documents", description: "Document management" },
      { url: "/construction-cost-management-software/", title: "Cost Management", description: "Budget & cost tools" },
      { url: "/construction-rfi-management-software/", title: "RFI Management", description: "RFI tracking & responses" },
      { url: "/construction-safety-management-software/", title: "Safety", description: "Safety management tools" },
    ],
  },

  // Platform Vision Cluster
  "platform": {
    pillar: "/platform/our-vision/",
    related: [
      { url: "/platform/blueprint/", title: "Our Blueprint", description: "Three-pronged transformation strategy" },
      { url: "/platform/system-of-intelligence/", title: "System of Intelligence", description: "From reactive records to proactive insights" },
      { url: "/platform/ai/", title: "Artificial Intelligence", description: "AI agents and copilots for construction" },
      { url: "/platform/process-automation/", title: "Process Automation", description: "End-to-end workflow automation" },
      { url: "/platform/inefficiency/", title: "The Inefficiency Problem", description: "The $1.6T challenge in construction" },
      { url: "/platform/cracks-in-foundation/", title: "Cracks in the Foundation", description: "Root causes of waste and delays" },
      { url: "/platform/space-ai-advantages/", title: "The Space AI Advantage", description: "Predictive capabilities that set us apart" },
    ],
  },
};

// ============================================================================
// RELATED PAGES COMPONENT
// ============================================================================

interface RelatedPagesProps {
  cluster: keyof typeof topicalClusters;
  currentPath?: string;
  title?: string;
  maxItems?: number;
}

export function RelatedPages({ 
  cluster, 
  currentPath, 
  title = "Related Resources",
  maxItems = 4 
}: RelatedPagesProps) {
  const clusterData = topicalClusters[cluster];
  
  if (!clusterData) return null;
  
  // Filter out current page and limit items
  const relatedPages = clusterData.related
    .filter(page => page.url !== currentPath)
    .slice(0, maxItems);
  
  return (
    <section className="py-8 border-t border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedPages.map((page) => (
          <Link
            key={page.url}
            href={page.url}
            className="group flex items-center justify-between p-4 bg-gray-900/50 border border-white/10 rounded-lg hover:border-purple-500/50 hover:bg-gray-900/80 transition-all"
          >
            <div>
              <span className="text-white font-medium group-hover:text-purple-400 transition-colors">
                {page.title}
              </span>
              <p className="text-white/50 text-sm mt-1">{page.description}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// CONTEXTUAL LINKS COMPONENT (for in-content linking)
// ============================================================================

interface ContextualLink {
  text: string;
  url: string;
}

interface ContextualLinksProps {
  links: ContextualLink[];
  className?: string;
}

export function ContextualLinks({ links, className = "" }: ContextualLinksProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
        >
          {link.text}
          <ChevronRight className="w-3 h-3" />
        </Link>
      ))}
    </div>
  );
}

// ============================================================================
// COMPETITOR COMPARISON CARDS
// ============================================================================

const competitors = [
  { name: "Procore", href: "/alternatives/procore-alternative/", description: "Full-featured but complex" },
  { name: "Oracle Primavera", href: "/primavera-alternatives/", description: "Legacy CPM scheduling" },
  { name: "Buildertrend", href: "/alternatives/buildertrend-alternative/", description: "Good for residential" },
  { name: "PlanGrid", href: "/alternatives/plangrid-alternative/", description: "Document-focused" },
  { name: "Autodesk", href: "/alternatives/autodesk-construction-cloud-alternative/", description: "BIM integration" },
  { name: "Fieldwire", href: "/alternatives/", description: "Field management" },
  { name: "Monday.com", href: "/alternatives/monday-alternative/", description: "General project management" },
];

interface CompetitorLinksProps {
  currentCompetitor?: string;
  maxItems?: number;
}

export function CompetitorLinks({ currentCompetitor, maxItems = 5 }: CompetitorLinksProps) {
  const filteredCompetitors = competitors
    .filter(c => c.href !== currentCompetitor)
    .slice(0, maxItems);
  
  return (
    <section className="py-8">
      <h3 className="text-lg font-semibold text-white mb-4">Compare Other Alternatives</h3>
      <div className="flex flex-wrap gap-3">
        {filteredCompetitors.map((competitor) => (
          <Link
            key={competitor.href}
            href={competitor.href}
            className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 hover:text-white transition-all"
          >
            {competitor.name} Alternative
          </Link>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// LOCATION LINKS
// ============================================================================

const locations = [
  { name: "USA", code: "usa", flag: "🇺🇸" },
  { name: "UK", code: "uk", flag: "🇬🇧" },
  { name: "Australia", code: "australia", flag: "🇦🇺" },
  { name: "India", code: "india", flag: "🇮🇳" },
  { name: "UAE", code: "uae", flag: "🇦🇪" },
  { name: "Singapore", code: "singapore", flag: "🇸🇬" },
];

interface LocationLinksProps {
  currentLocation?: string;
}

export function LocationLinks({ currentLocation }: LocationLinksProps) {
  const filteredLocations = locations.filter(l => l.code !== currentLocation);
  
  return (
    <section className="py-8">
      <h3 className="text-lg font-semibold text-white mb-4">Available in Your Region</h3>
      <div className="flex flex-wrap gap-3">
        {filteredLocations.map((location) => (
          <Link
            key={location.code}
            href={`/construction-management-software-${location.code}/`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 hover:text-white transition-all"
          >
            <span>{location.flag}</span>
            <span>{location.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// CALL TO ACTION LINKS
// ============================================================================

interface CTALinksProps {
  variant?: "primary" | "secondary";
}

export function CTALinks({ variant = "primary" }: CTALinksProps) {
  if (variant === "primary") {
    return (
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/construction-software-demo/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Book a Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/try-it-now/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
        >
          Start Free Trial
        </Link>
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/pricing/"
        className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
      >
        View Pricing →
      </Link>
      <Link
        href="/features/"
        className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
      >
        Explore Features →
      </Link>
      <Link
        href="/case-studies/"
        className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
      >
        Read Case Studies →
      </Link>
    </div>
  );
}

// ============================================================================
// FOOTER NAVIGATION LINKS (SEO-optimized)
// ============================================================================

export const footerNavigation = {
  product: [
    { name: "Features", href: "/features/" },
    { name: "Pricing", href: "/pricing/" },
    { name: "Enterprise", href: "/enterprise/" },
    { name: "Free Plan", href: "/free-construction-management-software/" },
    { name: "Mobile App", href: "/mobile-construction-management-app/" },
    { name: "Integrations", href: "/integrations/" },
  ],
  solutions: [
    { name: "General Contractors", href: "/construction-software-for-general-contractors/" },
    { name: "Subcontractors", href: "/subcontractor-management-software-construction/" },
    { name: "Small Business", href: "/construction-management-software-small-business/" },
    { name: "Enterprise", href: "/enterprise/" },
  ],
  industries: [
    { name: "Infrastructure", href: "/industries/infrastructure/" },
    { name: "Real Estate", href: "/industries/real-estate/" },
    { name: "Healthcare", href: "/industries/health-care/" },
    { name: "Education", href: "/industries/education/" },
    { name: "Government", href: "/industries/government/" },
  ],
  resources: [
    { name: "Blog", href: "/blogs/" },
    { name: "Guides", href: "/guides/" },
    { name: "Case Studies", href: "/case-studies/" },
    { name: "Webinars", href: "/resources/webinars/" },
    { name: "Docs", href: "/docs/" },
  ],
  compare: [
    { name: "vs Procore", href: "/alternatives/procore-alternative/" },
    { name: "vs Oracle Primavera", href: "/primavera-alternatives/" },
    { name: "vs Buildertrend", href: "/alternatives/buildertrend-alternative/" },
    { name: "vs PlanGrid", href: "/alternatives/plangrid-alternative/" },
    { name: "vs Autodesk", href: "/alternatives/autodesk-construction-cloud-alternative/" },
    { name: "Full Comparison", href: "/compare/construction-software-comparison/" },
  ],
  regions: [
    { name: "USA", href: "/construction-management-software-usa/" },
    { name: "UK", href: "/construction-management-software-uk/" },
    { name: "Australia", href: "/construction-management-software-australia/" },
    { name: "India", href: "/construction-management-software-india/" },
    { name: "UAE", href: "/construction-management-software-uae/" },
    { name: "Singapore", href: "/construction-management-software-singapore/" },
  ],
};

export default RelatedPages;
