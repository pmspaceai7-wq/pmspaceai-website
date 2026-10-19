"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import { FREE_TOOLS } from "@/lib/freeTools";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pathLabels: Record<string, string> = {
  // Main sections
  solutions: "Solutions",
  guides: "Guides",
  compare: "Compare",
  alternative: "Alternatives",
  alternatives: "Alternatives",
  resources: "Resources",
  industries: "Industries",
  platform: "Platform",
  services: "Services",
  tools: "Tools",
  blogs: "Blog",
  videos: "Videos",
  career: "Careers",
  core: "Core Modules",
  "case-studies": "Case Studies",
  templates: "Templates",
  integrations: "Integrations",
  features: "Features",
  pricing: "Pricing",
  freetire: "Free Tier",
  
  // Specific pages
  "book-a-demo": "Book a Demo",
  "contact-sales": "Contact Sales",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "cookie-policy": "Cookie Policy",
  "try-it-now": "Try It Now",
  usecases: "Use Cases",
  resellers: "Resellers",
  enterprise: "Enterprise",
  "about": "About Us",
  "space-team": "Space Team",
  
  // Resources
  glossary: "Glossary",
  "ai-construction": "AI in Construction",
  "video-library": "Video Library",
  "downloads": "Downloads",
  "infographics": "Infographics",
  "webinars": "Webinars",
  "construction-software-checklist": "Software Checklist",
  "construction-project-management-best-practices": "Best Practices",
  
  // Comparisons
  "pmspace-vs-procore": "Space AI vs Procore",
  "pmspace-vs-asite": "Space AI vs Asite",
  
  // All Alternatives
  procore: "Procore Alternative",
  asite: "Asite Alternative",
  plangrid: "PlanGrid Alternative",
  buildertrend: "Buildertrend Alternative",
  fieldwire: "Fieldwire Alternative",
  monday: "Monday.com Alternative",
  smartsheet: "Smartsheet Alternative",
  primavera: "Primavera Alternative",
  "autodesk-construction-cloud": "Autodesk ACC Alternative",
  clickup: "ClickUp Alternative",
  wrike: "Wrike Alternative",
  coconstruct: "CoConstruct Alternative",
  
  // Industries
  "real-estate": "Real Estate",
  "oil-and-gas": "Oil & Gas",
  "health-care": "Healthcare",
  infrastructure: "Infrastructure",
  marine: "Marine",
  transportation: "Transportation",
  government: "Government",
  education: "Education",
  defense: "Defense",
  hospitality: "Hospitality",
  
  // Guides
  "common-data-platform": "Common Data Platform",
  "ai-powered-form-automation": "AI Form Automation",
  "ai-workflow-orchestration": "AI Workflow Orchestration",
  idp: "Intelligent Document Processing",
  "space-bim": "Space BIM",
  "e-sign": "E-Sign",
  "email-integration": "Email Integration",
  designer: "Designer",
  
  // Platform
  ai: "AI Platform",
  blueprint: "Blueprint",
  "cracks-in-foundation": "Cracks in Foundation",
  inefficiency: "Inefficiency",
  "our-vision": "Our Vision",
  "process-automation": "Process Automation",
  "space-ai-advantages": "Space AI Advantages",
  "system-of-intelligence": "System of Intelligence",
  
  // Services
  "ai-app-development": "AI App Development",
  "api-development": "API Development",
  "application-maintenance": "Application Maintenance",
  "data-management-service": "Data Management",
  "digital-transformation": "Digital Transformation",
  "software-injection": "Software Integration",
  
  // Solutions
  "innovative-solutions": "Innovative Solutions",
  "ai-powered": "AI Powered",
  "data-management": "Data Management",
  "construction-management": "Construction Management",
  "construction-solutions": "Construction Solutions",
  "project-management": "Project Management",
  "smart-project-management": "Smart Project Management",
  "construction-management-online": "Online Construction Management",
  "construction-software-for-small-builders": "Software for Small Builders",
  "construction-software-for-enterprises": "Enterprise Software",
  "predictive-delays": "Predictive Delays",
  "project-managers": "Project Managers",
  "commercial-managers": "Commercial Managers",
  "owner-directors": "Owner Directors",
  "hseq-managers": "HSEQ Managers",
  schedulers: "Schedulers",
  "software-champions-and-internal-systems-leads": "Systems Leads",
  "quantity-surveyors-and-senior-qss": "Quantity Surveyors",
  
  // New SEO Landing Pages (Tasks 16-30)
  "construction-management-software": "Construction Management Software",
  "ai-construction-management": "AI Construction Management",
  "best-project-management-software": "Best Project Management Software",
  "building-project-management-software": "Building Project Management Software",
  "project-scheduling-software": "Project Scheduling Software",
  "ai-project-management-tools": "AI Project Management Tools",
  "predictive-analytics-construction": "Predictive Analytics Construction",
  "construction-project-management-system": "Construction PM System",
  "free-construction-management-software": "Free Construction Software",
  "construction-management-software-small-business": "Small Business Software",
  "enterprise-construction-management-software": "Enterprise Software",
  "construction-document-management-software": "Document Management",
  "construction-cost-management-software": "Cost Management",
  "mobile-construction-management-app": "Mobile App",
  "ai-construction-management-complete-guide": "AI Construction Guide",
  "construction-software-comparison": "Software Comparison",
  
  // Article slugs
  "ai-driven-construction-scheduling": "AI-Driven Scheduling",
  "predictive-project-analytics": "Predictive Analytics",
  "machine-learning-risk-management": "ML Risk Management",
  "intelligent-document-processing": "Intelligent Document Processing",
  "ai-resource-optimization": "AI Resource Optimization",
  "agentic-ai-construction": "Agentic AI",
  "computer-vision-construction": "Computer Vision",
  "ai-construction-safety": "AI Safety",
  "digital-twin-ai-integration": "Digital Twin Integration",
  "roi-ai-construction": "ROI of AI",
};

function formatSegment(segment: string): string {
  if (pathLabels[segment]) {
    return pathLabels[segment];
  }
  // Convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();

  // usePathname can return null during SSR / hydration
  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  
  // Build custom breadcrumbs for free tools: Home > Free Tools > [Tool Name]
  const freeToolBreadcrumbs: Record<string, BreadcrumbItem[]> = {};
  FREE_TOOLS.forEach((tool) => {
    freeToolBreadcrumbs[tool.href] = [
      { label: "Home", href: "/" },
      { label: "Free Tools", href: "/free-tools/" },
      { label: tool.title, href: tool.href },
    ];
  });

  // Pages that live under a different logical parent than their URL suggests
  const customBreadcrumbs: Record<string, BreadcrumbItem[]> = {
    "/free-tools/": [
      { label: "Home", href: "/" },
      { label: "Tools", href: "/tools/" },
      { label: "Free Tools", href: "/free-tools/" },
    ],
    ...freeToolBreadcrumbs,
  };

  const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;

  const breadcrumbs: BreadcrumbItem[] = customBreadcrumbs[normalizedPathname]
    ? [...customBreadcrumbs[normalizedPathname]]
    : [{ label: "Home", href: "/" }];

  if (!customBreadcrumbs[normalizedPathname]) {
    let currentPath = "";
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: formatSegment(segment),
        href: currentPath,
      });
    });
  }

  const fallbackBackHref =
    breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2].href : "/";

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackBackHref);
  };

  // Generate JSON-LD schema for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://pmspace.ai${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visible Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="relative z-20 w-full py-2 sm:py-2.5 mt-6 sm:mt-8"
      >
        <div className="mx-auto w-full max-w-7xl relative flex flex-wrap items-center justify-between gap-3">
          <ol className="min-w-0 flex flex-wrap items-center gap-1 text-sm text-white/60">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-1 text-white/40" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white/90 font-medium" aria-current="page">
                    {index === 0 ? <Home className="w-4 h-4" /> : item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center"
                  >
                    {index === 0 ? <Home className="w-4 h-4" /> : item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>

          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </nav>
    </>
  );
}

export default Breadcrumbs;
