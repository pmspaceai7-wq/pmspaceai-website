import { Metadata } from "next";
import Link from "next/link";
import { RelatedPages } from "@/components/InternalLinking";
import { 
  BookOpen, 
  FileText, 
  Lightbulb, 
  ArrowRight, 
  Puzzle, 
  Building2, 
  FileDown,
  Video,
  Users,
  TrendingUp,
  Search,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Management Resources | Space AI",
  description:
    "Free construction management resources: project templates, ROI case studies, software integrations, AI guides, and industry glossary.",
  keywords: [
    "construction management resources",
    "free construction templates",
    "construction case studies",
    "construction software integrations",
    "AI construction guides",
    "construction project management templates",
    "construction technology resources",
    "building project templates",
    "construction ROI calculator",
    "construction management best practices"
  ],
  alternates: {
    canonical: "https://pmspace.ai/resources/",
  },
  openGraph: {
    title: "Free Construction Management Resources | Space AI",
    description: "Templates, case studies, integration guides, and AI resources for construction professionals.",
    type: "website",
  },
};

const featuredResources = [
  {
    title: "Free Construction Templates",
    description:
      "Download ready-to-use templates for RFIs, submittals, daily logs, punch lists, safety checklists, and more. Save hours on every project.",
    href: "/templates/",
    icon: FileDown,
    count: "25+ Templates",
    badge: "Most Popular",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    borderColor: "hover:border-green-500/50",
  },
  {
    title: "Customer Case Studies",
    description:
      "Real ROI results from construction companies. See how teams reduced delays by 40%, cut costs by 25%, and improved productivity.",
    href: "/case-studies/",
    icon: Building2,
    count: "12 Case Studies",
    badge: "Proven Results",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
  },
  {
    title: "Software Integrations",
    description:
      "Connect Space AI with your existing tools: Procore, Autodesk, QuickBooks, Sage, Microsoft 365, and 50+ more construction apps.",
    href: "/integrations/",
    icon: Puzzle,
    count: "50+ Integrations",
    badge: "Connect Everything",
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
  },
];

const learningResources = [
  {
    title: "AI in Construction Hub",
    description:
      "Deep-dive articles on AI-driven scheduling, predictive analytics, machine learning for risk management, and construction automation.",
    href: "/resources/ai-construction/",
    icon: Lightbulb,
    count: "10 Articles",
  },
  {
    title: "Construction Glossary",
    description:
      "Comprehensive glossary of AI, technology, and construction management terms. From BIM to Machine Learning explained simply.",
    href: "/resources/glossary/",
    icon: BookOpen,
    count: "50+ Terms",
  },
  {
    title: "Product Guides",
    description:
      "Step-by-step guides for IDP, E-Sign, Designer, Email Integration, BIM tools, and all Space AI platform features.",
    href: "/guides/",
    icon: FileText,
    count: "15+ Guides",
  },
  {
    title: "Documentation Hub",
    description:
      "A canonical hub for Space AI product pages, workflows, integrations, comparisons, and onboarding knowledge.",
    href: "/docs/",
    icon: BookOpen,
    count: "Core Docs",
  },
  {
    title: "AI Claims and Trust",
    description:
      "A trust page that explains how to interpret Space AI's AI positioning, workflow claims, and product framing.",
    href: "/trust/ai-claims/",
    icon: BookOpen,
    count: "Trust Surface",
  },
];

const comparisonResources = [
  {
    title: "Space AI vs Procore",
    description: "See why teams switch from Procore to Space AI's AI-powered platform.",
    href: "/alternatives/procore-alternative/",
  },
  {
    title: "Space AI vs Autodesk ACC",
    description: "Compare unified Space AI vs fragmented Autodesk Construction Cloud.",
    href: "/alternatives/autodesk-construction-cloud-alternative/",
  },
  {
    title: "Space AI vs PlanGrid",
    description: "Modern alternative to discontinued PlanGrid with full migration support.",
    href: "/alternatives/plangrid-alternative/",
  },
  {
    title: "All Comparisons",
    description: "See how Space AI compares to 12+ construction management platforms.",
    href: "/alternatives/",
  },
  {
    title: "Construction Software Comparison Hub",
    description: "Feature-by-feature breakdown of top construction software options.",
    href: "/compare/construction-software-comparison/",
  },
];

const editorialResources = [
  {
    title: "What Is Construction AI?",
    href: "/what-is-construction-ai/",
  },
  {
    title: "How Can AI Reduce Construction Delays?",
    href: "/how-can-ai-reduce-construction-delays/",
  },
  {
    title: "Best Construction Management Software for Small Contractors",
    href: "/best-construction-management-software-for-small-contractors/",
  },
  {
    title: "Construction Cost Overruns Guide",
    href: "/blogs/construction-cost-overruns-guide/",
  },
  {
    title: "Construction Document Management Complete Guide",
    href: "/blogs/construction-document-management-complete-guide/",
  },
  {
    title: "Construction Cost Management Software",
    href: "/construction-cost-management-software/",
  },
  {
    title: "Construction Document Management Software",
    href: "/construction-document-management-software/",
  },
];

const videoResources = [
  {
    title: "Product Demo Videos",
    description: "Watch Space AI in action with feature walkthroughs and use case demos.",
    href: "/videos/",
    icon: Video,
  },
  {
    title: "Customer Stories",
    description: "Hear directly from construction teams about their Space AI experience.",
    href: "/case-studies/",
    icon: Users,
  },
  {
    title: "Product Changelog",
    description: "Track notable updates to Space AI product knowledge, docs, and AI visibility surfaces.",
    href: "/changelog/",
    icon: Video,
  },
];

const seoKeywords = [
  "Construction project management software",
  "AI construction tools",
  "Building project templates",
  "Construction document management",
  "RFI management software",
  "Submittal tracking system",
  "Construction scheduling software",
  "BIM collaboration platform",
];

export default function ResourcesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
            Free Resources for Construction Teams
          </span>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            Construction Management Resources
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto">
            Free templates, proven case studies, integration guides, and expert content 
            to help you build better, faster, and smarter with AI-powered construction management.
          </p>
        </div>

        {/* Search/Quick Links Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Templates", "Case Studies", "Integrations", "Guides", "Glossary", "Videos"].map((item) => (
            <Link 
              key={item} 
              href={item === "Templates" ? "/templates" : 
                    item === "Case Studies" ? "/case-studies" : 
                    item === "Integrations" ? "/integrations" :
                    item === "Guides" ? "/guides" :
                    item === "Glossary" ? "/resources/glossary" :
                    "/videos"}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Featured Resources - Large Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {featuredResources.map((resource, index) => (
            <Link key={index} href={resource.href}>
              <div className={`group bg-gradient-to-br ${resource.gradient} border border-white/10 rounded-2xl p-6 h-full ${resource.borderColor} transition-all duration-300 hover:scale-[1.02]`}>
                {resource.badge && (
                  <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs text-white/80 font-medium mb-4">
                    {resource.badge}
                  </span>
                )}
                <div className={`p-3 bg-black/30 rounded-xl w-fit mb-4`}>
                  <resource.icon className={`w-8 h-8 ${resource.iconColor}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs ${resource.iconColor} font-medium`}>
                    {resource.count}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {resource.title}
                </h2>
                <p className="text-white/70 text-sm mb-4">
                  {resource.description}
                </p>
                <div className={`flex items-center gap-2 ${resource.iconColor} text-sm font-medium`}>
                  Explore Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Learning Resources */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Learn & Grow</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <Link key={index} href={resource.href}>
                <div className="group bg-gray-900/50 border border-white/10 rounded-xl p-6 h-full hover:border-yellow-500/30 transition-all duration-300">
                  <div className="p-3 bg-yellow-500/10 rounded-lg w-fit mb-4">
                    <resource.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-xs text-yellow-400 font-medium">{resource.count}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-yellow-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Software Comparisons</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comparisonResources.map((resource, index) => (
              <Link key={index} href={resource.href}>
                <div className="group bg-gray-900/50 border border-white/10 rounded-xl p-5 h-full hover:border-cyan-500/30 transition-all">
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-3">{resource.description}</p>
                  <span className="text-cyan-400 text-sm font-medium inline-flex items-center gap-1">
                    Compare <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Editorial Cross-Links */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Deep-Dive Editorial Guides</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {editorialResources.map((resource) => (
              <Link key={resource.href} href={resource.href}>
                <div className="group bg-gray-900/50 border border-white/10 rounded-xl p-5 h-full hover:border-emerald-500/40 transition-all">
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {resource.title}
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium inline-flex items-center gap-1 mt-3">
                    Open Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Video Resources */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-6 h-6 text-red-400" />
            <h2 className="text-2xl font-bold text-white">Watch & Learn</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {videoResources.map((resource, index) => (
              <Link key={index} href={resource.href}>
                <div className="group bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500/20 rounded-lg">
                      <resource.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-3">{resource.description}</p>
                      <span className="text-red-400 text-sm font-medium inline-flex items-center gap-1">
                        Watch Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Keywords Section (visible but subtle) */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gray-900/30 border border-white/5 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-white/40" />
              <span className="text-sm text-white/40">Popular Topics</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {seoKeywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
            <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Construction Projects?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Join thousands of construction professionals using Space AI to deliver projects on time and under budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/construction-software-demo/">
                <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact-sales/">
                <button className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors">
                  Talk to Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <RelatedPages
          cluster="construction-software"
          currentPath="/resources"
          title="Explore Product Resources"
          maxItems={4}
        />
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Construction Management Resources",
            "description": "Free construction management resources including templates, case studies, integration guides, and AI construction articles.",
            "url": "https://pmspace.ai/resources/",
            "publisher": {
              "@type": "Organization",
              "name": "Space AI",
              "url": "https://pmspace.ai"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Construction Templates",
                  "url": "https://pmspace.ai/templates/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Customer Case Studies",
                  "url": "https://pmspace.ai/case-studies/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Software Integrations",
                  "url": "https://pmspace.ai/integrations/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "AI Construction Articles",
                  "url": "https://pmspace.ai/resources/ai-construction/"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Construction Glossary",
                  "url": "https://pmspace.ai/resources/glossary/"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Space AI Docs",
                  "url": "https://pmspace.ai/docs/"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
