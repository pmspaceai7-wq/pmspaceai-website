"use client";

import { usePathname } from "next/navigation";

interface AuthorInfo {
  name: string;
  credentials: string;
  title: string;
  years: string;
  bio: string;
  initials: string;
}

const authors: Record<string, AuthorInfo> = {
  "thomas-jomon": {
    name: "Thomas Jomon",
    credentials: "Co-Founder, President & Chief AI Officer",
    title: "Co-Founder, President & Chief AI Officer",
    years: "15+",
    bio: "Enterprise AI and digital transformation leader driving Space AI's vision for AI-powered construction management. Previously led AI strategy for multiple enterprise SaaS platforms.",
    initials: "TJ",
  },
  "sarah-chen": {
    name: "Sarah Chen",
    credentials: "PhD in Machine Learning",
    title: "Head of AI & Analytics",
    years: "10+",
    bio: "PhD in Machine Learning leading AI innovation in construction management. Specializes in predictive analytics, natural language processing, and computer vision applications for project controls.",
    initials: "SC",
  },
  "michael-rodriguez": {
    name: "Michael Rodriguez",
    credentials: "Licensed General Contractor",
    title: "Construction Operations Advisor",
    years: "15+",
    bio: "Licensed General Contractor with 15+ years managing commercial construction projects ranging from $5M to $200M. Brings real-world field experience to product design and AI workflow development.",
    initials: "MR",
  },
  "raj-patel": {
    name: "Dr. Raj Patel",
    credentials: "PE, PhD in Construction Engineering",
    title: "Construction Technology Researcher",
    years: "12+",
    bio: "Professional Engineer and researcher specializing in AI applications for project controls, delay analysis, and construction risk assessment. Published in ASCE and IEEE journals.",
    initials: "RP",
  },
  "maria-gonzalez": {
    name: "Maria Gonzalez",
    credentials: "LEED AP, PMP",
    title: "Director of Sustainable Construction",
    years: "12+",
    bio: "LEED Accredited Professional with 12+ years in sustainable construction project management. Focuses on AI-driven sustainability analytics and green building compliance.",
    initials: "MG",
  },
  "james-obrien": {
    name: "James O'Brien",
    credentials: "PMP",
    title: "Enterprise Project Controls Specialist",
    years: "20+",
    bio: "PMP-certified project controls specialist with 20+ years managing enterprise construction programs. Expertise in earned value management, critical path analysis, and risk mitigation.",
    initials: "JO",
  },
  "amara-okafor": {
    name: "Dr. Amara Okafor",
    credentials: "PhD, PE",
    title: "Structural Engineer & AI Research Lead",
    years: "10+",
    bio: "PhD in Structural Engineering and licensed Professional Engineer. Researches AI applications for construction defect detection, structural health monitoring, and quality assurance.",
    initials: "AO",
  },
  "carlos-mendez": {
    name: "Carlos Mendez",
    credentials: "PMP, LEED AP",
    title: "Director of Digital Construction",
    years: "18+",
    bio: "PMP and LEED AP certified with 18+ years leading digital transformation for ENR top-20 contractors. Specializes in BIM integration, AI workflow automation, and field technology adoption.",
    initials: "CM",
  },
  "jennifer-walsh": {
    name: "Jennifer Walsh",
    credentials: "AIA, NCARB",
    title: "Construction Technology Architect",
    years: "14+",
    bio: "Registered Architect (AIA) with 14+ years bridging design and construction technology. Leads product strategy for AI-powered document intelligence and design coordination.",
    initials: "JW",
  },
};

const routeAuthorMap: [string, string][] = [
  ["/blogs", "thomas-jomon"],
  ["/guides", "raj-patel"],
  ["/docs", "james-obrien"],
  ["/case-studies", "michael-rodriguez"],
  ["/white-papers", "sarah-chen"],
  ["/research", "sarah-chen"],
  ["/compare", "carlos-mendez"],
  ["/alternatives", "carlos-mendez"],
  ["/resources", "jennifer-walsh"],
  ["/what-is-space-ai", "james-obrien"],
  ["/construction-management-software", "carlos-mendez"],
  ["/ai-construction-management", "sarah-chen"],
  ["/best-ai-construction-software", "sarah-chen"],
  ["/platform", "jennifer-walsh"],
  ["/solutions", "michael-rodriguez"],
  ["/features", "carlos-mendez"],
  ["/pricing", "james-obrien"],
  ["/core", "jennifer-walsh"],
  ["/industries", "michael-rodriguez"],
  ["/services", "carlos-mendez"],
  ["/integrations", "jennifer-walsh"],
  ["/tools", "james-obrien"],
  ["/apps", "jennifer-walsh"],
  ["/software", "jennifer-walsh"],
  ["/usecases", "michael-rodriguez"],
  ["/transform", "carlos-mendez"],
  ["/about", "thomas-jomon"],
  ["/space-team", "thomas-jomon"],
  ["/enterprise", "james-obrien"],
  ["/construction-software-demo", "james-obrien"],
  ["/what-is-construction-ai", "sarah-chen"],
  ["/how-can-ai-reduce-construction-delays", "raj-patel"],
];

const excludedPrefixes = [
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/sitemap",
  "/search",
  "/careers",
  "/press",
  "/changelog",
  "/resellers",
  "/faq",
  "/contact-sales",
  "/contact-specialists",
  "/try-it-now",
  "/e-signature-demo",
  "/social-media-platforms",
  "/process-automation",
  "/trust",
  "/construction-software-pricing",
  "/locations",
  "/construction-newsletter",
  "/templates",
];

export default function PageAuthorBio() {
  const pathname = usePathname();

  if (excludedPrefixes.some((p) => pathname.startsWith(p))) return null;

  const authorKey = routeAuthorMap.find(([prefix]) => pathname.startsWith(prefix))?.[1];
  if (!authorKey) return null;

  const author = authors[authorKey];
  if (!author) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="border-t border-white/10 pt-8">
        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-5">
          About the Author
        </h3>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-base shrink-0">
            {author.initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">
              {author.name}
            </p>
            <p className="text-xs text-white/50 mt-0.5">
              {author.title} — <span className="text-blue-300/70">{author.credentials}</span>
            </p>
            <p className="text-xs text-white/40 mt-0.5">
              {author.years} years in construction technology
            </p>
            <p className="text-sm text-white/60 mt-2 leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
