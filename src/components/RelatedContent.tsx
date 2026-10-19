// src/components/RelatedContent.tsx
// Internal linking component for SEO - helps distribute page authority

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  category?: string;
}

interface RelatedContentProps {
  title?: string;
  links: RelatedLink[];
  variant?: "cards" | "list" | "minimal";
}

export default function RelatedContent({
  title = "Related Resources",
  links,
  variant = "cards",
}: RelatedContentProps) {
  if (variant === "minimal") {
    return (
      <div className="mt-8 pt-8 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
              >
                {link.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="mt-12 py-8 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
        <div className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  {link.category && (
                    <span className="text-xs text-purple-400 uppercase tracking-wider">
                      {link.category}
                    </span>
                  )}
                  <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-white/60 mt-1">{link.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-purple-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default: cards variant
  return (
    <section className="mt-16 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white text-center mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:-translate-y-1"
            >
              {link.category && (
                <span className="text-xs text-teal-400 uppercase tracking-wider font-medium">
                  {link.category}
                </span>
              )}
              <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-purple-300 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-white/60">{link.description}</p>
              {/* Task 44: Improved anchor text with keyword-rich link text */}
              <span className="inline-flex items-center gap-1 text-purple-400 text-sm mt-4 group-hover:gap-2 transition-all">
                Explore {link.title} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-defined link collections for common use cases
export const alternativeLinks: RelatedLink[] = [
  {
    title: "Procore Alternative",
    description: "See why teams switch from Procore to Space AI",
    href: "/alternatives/procore-alternative/",
    category: "Alternative",
  },
  {
    title: "Asite Alternative",
    description: "Modern AI-powered replacement for Asite",
    href: "/alternatives/asite-alternative/",
    category: "Alternative",
  },
  {
    title: "PlanGrid Alternative",
    description: "Better mobile experience than PlanGrid",
    href: "/alternatives/plangrid-alternative/",
    category: "Alternative",
  },
];

export const solutionLinks: RelatedLink[] = [
  {
    title: "Predictive Delay Analysis",
    description: "Forecast schedule risks 45 days in advance",
    href: "/solutions/predictive-delays/",
    category: "Solution",
  },
  {
    title: "Construction Management",
    description: "Complete project lifecycle management",
    href: "/solutions/construction-management/",
    category: "Solution",
  },
  {
    title: "AI-Powered Features",
    description: "Intelligent automation for construction",
    href: "/solutions/construction-solutions/",
    category: "Solution",
  },
];

export const resourceLinks: RelatedLink[] = [
  {
    title: "AI in Construction Guide",
    description: "Complete guide to AI adoption in construction",
    href: "/resources/ai-construction/",
    category: "Resource",
  },
  {
    title: "Construction Glossary",
    description: "Industry terms and definitions",
    href: "/resources/glossary/",
    category: "Resource",
  },
  {
    title: "Case Studies",
    description: "Real results from real customers",
    href: "/case-studies/",
    category: "Resource",
  },
];

export const ctaLinks: RelatedLink[] = [
  {
    title: "Book a Demo",
    description: "See Space AI in action with a personalized demo",
    href: "/construction-software-demo/",
    category: "Get Started",
  },
  {
    title: "Start Free Trial",
    description: "Try Space AI free for 14 days",
    href: "/try-it-now/",
    category: "Get Started",
  },
  {
    title: "View Pricing",
    description: "Transparent pricing for every team size",
    href: "/pricing/",
    category: "Get Started",
  },
];
