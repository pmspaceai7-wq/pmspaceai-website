"use client";

// src/app/resources/infographics/InfographicsClient.tsx
// Client component for infographics page with working view/download buttons

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Download, ArrowRight, Eye, X, ExternalLink } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

// Types
interface KeyStat {
  stat: string;
  label: string;
}

interface Infographic {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  thumbnail: string;
  fullImage: string;
  downloadUrl: string;
  featured?: boolean;
  views: string;
  downloads: string;
  keyStats: KeyStat[];
  topics: string[];
  lastUpdated: string;
}

// View Modal
function InfographicModal({ 
  infographic, 
  onClose 
}: { 
  infographic: Infographic | null; 
  onClose: () => void;
}) {
  if (!infographic) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-gray-900 rounded-2xl border border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-white/60 hover:text-white transition z-10 bg-black/50 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-t-2xl">
          <Image
            src={infographic.thumbnail}
            alt={infographic.title}
            fill
            className="object-contain"
            sizes="(max-width: 512px) 100vw, 512px"
          />
          <div className="absolute top-3 left-3 px-3 py-1 bg-purple-500/90 text-white rounded-full text-xs font-medium">
            {infographic.category}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2">{infographic.title}</h3>
          <p className="text-white/60 text-sm mb-4">{infographic.description}</p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {infographic.keyStats.map((stat, idx) => (
              <div key={idx} className="text-center p-2 bg-white/5 rounded-lg">
                <div className="text-sm font-bold text-white">{stat.stat}</div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-4">
            {infographic.topics.map((topic, idx) => (
              <span key={idx} className="px-2 py-1 bg-white/5 text-white/60 rounded text-xs border border-white/10">
                {topic}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href={infographic.downloadUrl}
              className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition text-center flex items-center justify-center gap-2 text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Resource
            </Link>
            <Link
              href="/construction-software-demo/"
              className="flex-1 py-2.5 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition text-center flex items-center justify-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" />
              Request Download
            </Link>
          </div>

          <p className="text-center text-xs text-white/40 mt-3">
            Last updated: {infographic.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
}

// Data
const categories = ["All", "Industry Trends", "Best Practices", "Comparison", "Safety", "Technology"];

const infographics: Infographic[] = [
  {
    id: 1,
    title: "The State of AI in Construction 2026",
    slug: "ai-construction-2026",
    description: "Comprehensive overview of AI adoption in the construction industry. Market size, adoption rates, use cases, ROI metrics, and predictions through 2030.",
    category: "Industry Trends",
    thumbnail: "/assets/images/aiagent.png",
    fullImage: "/assets/images/aiagent.png",
    downloadUrl: "/guides/ai-construction-management-complete-guide",
    featured: true,
    views: "45,230",
    downloads: "12,450",
    keyStats: [
      { stat: "$4.5B", label: "AI in Construction Market (2026)" },
      { stat: "47%", label: "Companies Using AI" },
      { stat: "23%", label: "Average Delay Reduction" },
      { stat: "340%", label: "5-Year ROI" },
    ],
    topics: ["AI Adoption", "Market Size", "Use Cases", "ROI Data"],
    lastUpdated: "January 2026",
  },
  {
    id: 2,
    title: "Construction Project Lifecycle",
    slug: "project-lifecycle",
    description: "Visual guide to the complete construction project lifecycle from conception to closeout. Key milestones, deliverables, and best practices for each phase.",
    category: "Best Practices",
    thumbnail: "/assets/images/projectmanagementdashboard.png",
    fullImage: "/assets/images/projectmanagementdashboard.png",
    downloadUrl: "/guides/ultimate-construction-management-guide",
    featured: true,
    views: "38,120",
    downloads: "9,870",
    keyStats: [
      { stat: "5", label: "Major Project Phases" },
      { stat: "25+", label: "Key Milestones" },
      { stat: "100+", label: "Deliverables Mapped" },
      { stat: "4-18", label: "Months Typical Duration" },
    ],
    topics: ["Preconstruction", "Planning", "Execution", "Closeout"],
    lastUpdated: "December 2025",
  },
  {
    id: 3,
    title: "Space AI vs Competitors Feature Matrix",
    slug: "pmspace-vs-competitors",
    description: "Side-by-side comparison of Space AI against Procore, Buildertrend, PlanGrid, and other construction management software. Features, pricing, and ratings.",
    category: "Comparison",
    thumbnail: "/assets/images/allinoneconstructionsoftware.png",
    fullImage: "/assets/images/allinoneconstructionsoftware.png",
    downloadUrl: "/compare",
    featured: true,
    views: "28,450",
    downloads: "7,230",
    keyStats: [
      { stat: "8", label: "Vendors Compared" },
      { stat: "50+", label: "Features Evaluated" },
      { stat: "#1", label: "Space AI AI Ranking" },
      { stat: "40%", label: "Cost Savings vs Procore" },
    ],
    topics: ["Feature Comparison", "Pricing", "Ratings", "Use Cases"],
    lastUpdated: "January 2026",
  },
  {
    id: 4,
    title: "Construction Technology Stack 2026",
    slug: "construction-tech-stack",
    description: "The essential technology stack for modern construction companies. Software categories, integration requirements, and implementation priorities.",
    category: "Industry Trends",
    thumbnail: "/assets/images/constructionmanagmentonline.webp",
    fullImage: "/assets/images/constructionmanagmentonline.webp",
    downloadUrl: "/platform",
    views: "21,340",
    downloads: "5,670",
    keyStats: [
      { stat: "12", label: "Core Software Categories" },
      { stat: "8.2", label: "Avg Tools Per Company" },
      { stat: "67%", label: "Need Better Integration" },
      { stat: "$125K", label: "Avg Annual Tech Spend" },
    ],
    topics: ["Tech Stack", "Integration", "Implementation", "Spending"],
    lastUpdated: "November 2025",
  },
  {
    id: 5,
    title: "Construction Safety Statistics",
    slug: "construction-safety-stats",
    description: "Critical safety statistics for the construction industry. Accident rates, OSHA violations, fatality causes, and the impact of safety software.",
    category: "Safety",
    thumbnail: "/assets/images/defense.webp",
    fullImage: "/assets/images/defense.webp",
    downloadUrl: "/construction-safety-management-software",
    views: "19,780",
    downloads: "4,320",
    keyStats: [
      { stat: "1,008", label: "Fatal Injuries (2024)" },
      { stat: "21%", label: "All Workplace Fatalities" },
      { stat: "65%", label: "Reduction with Safety Tech" },
      { stat: "$42K", label: "Avg OSHA Fine" },
    ],
    topics: ["Fatality Data", "OSHA Compliance", "Safety Software", "Prevention"],
    lastUpdated: "October 2025",
  },
  {
    id: 6,
    title: "Construction Industry Market Overview",
    slug: "market-overview-2026",
    description: "Global and US construction market statistics. Market size, growth projections, sector breakdowns, and regional trends.",
    category: "Industry Trends",
    thumbnail: "/assets/images/marketingroi.png",
    fullImage: "/assets/images/marketingroi.png",
    downloadUrl: "/industries",
    views: "24,560",
    downloads: "6,120",
    keyStats: [
      { stat: "$12.7T", label: "Global Market (2026)" },
      { stat: "4.2%", label: "Annual Growth Rate" },
      { stat: "42%", label: "Infrastructure Sector" },
      { stat: "78M", label: "Industry Workers" },
    ],
    topics: ["Market Size", "Growth Trends", "Sectors", "Workforce"],
    lastUpdated: "December 2025",
  },
  {
    id: 7,
    title: "RFI Process Optimization Guide",
    slug: "rfi-optimization",
    description: "Visual breakdown of the RFI process and how AI automation reduces response times from weeks to days.",
    category: "Best Practices",
    thumbnail: "/assets/images/documentmanagement.png",
    fullImage: "/assets/images/documentmanagement.png",
    downloadUrl: "/construction-rfi-management-software",
    views: "15,890",
    downloads: "4,230",
    keyStats: [
      { stat: "65%", label: "Faster Response Time" },
      { stat: "14→5", label: "Days to Respond" },
      { stat: "89%", label: "First-Time Resolution" },
      { stat: "$50K", label: "Avg Project Savings" },
    ],
    topics: ["RFI Workflow", "AI Automation", "Time Savings", "ROI"],
    lastUpdated: "November 2025",
  },
  {
    id: 8,
    title: "Construction Document Management Flow",
    slug: "document-management",
    description: "How modern document management systems organize, track, and secure construction project documentation.",
    category: "Technology",
    thumbnail: "/assets/images/files.webp",
    fullImage: "/assets/images/files.webp",
    downloadUrl: "/construction-document-management-software",
    views: "12,450",
    downloads: "3,560",
    keyStats: [
      { stat: "1000+", label: "Docs Per Project" },
      { stat: "40%", label: "Time Saved on Search" },
      { stat: "99.9%", label: "Document Security" },
      { stat: "50+", label: "File Types Supported" },
    ],
    topics: ["Document Control", "Version Management", "Security", "Search"],
    lastUpdated: "October 2025",
  },
];

const infographicStats = [
  { number: "8", label: "Visual Resources" },
  { number: "150K+", label: "Total Views" },
  { number: "50K+", label: "Downloads" },
  { number: "Free", label: "Access" },
];

const faqs = [
  {
    question: "Can I use these infographics in my presentations?",
    answer: "Yes! All infographics are free to use in presentations, reports, proposals, and internal communications. We ask that you credit Space AI as the source when sharing publicly. For embedding on websites, please contact us for high-resolution versions."
  },
  {
    question: "What formats are available for download?",
    answer: "Infographics are primarily available as high-quality PDF files optimized for both screen viewing and printing. Some infographics are also available as PNG images for easy embedding. Request specific formats through our contact form if needed."
  },
  {
    question: "Are the statistics in these infographics up-to-date?",
    answer: "We maintain our infographics with current data. Each infographic shows a 'Last Updated' date—we typically refresh industry statistics annually and technology-related data quarterly. Always check the update date for the most relevant information."
  },
  {
    question: "How often are the infographics updated?",
    answer: "We update our infographics as new industry data becomes available, typically annually for market statistics and quarterly for AI and technology trends. Check the 'Last Updated' date on each infographic."
  },
  {
    question: "Can I request a custom infographic for my company?",
    answer: "Enterprise customers can request custom infographics with company-specific data or branding. Contact our team to discuss custom content creation for your organization."
  },
];

export default function InfographicsClient() {
  const [selectedInfographic, setSelectedInfographic] = useState<Infographic | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInfographics = activeCategory === "All" 
    ? infographics 
    : infographics.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* View Modal */}
      <InfographicModal 
        infographic={selectedInfographic} 
        onClose={() => setSelectedInfographic(null)} 
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <ImageIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">Visual Construction Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Construction Infographics
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Visual guides to AI adoption, project lifecycle, market statistics, and software comparisons. 
              Perfect for presentations, reports, and social sharing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {infographicStats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    cat === activeCategory 
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white" 
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Infographics */}
      {activeCategory === "All" && (
        <section className="py-16 bg-gradient-to-b from-black to-gray-950">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              ⭐ Featured Infographics
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {infographics.filter(i => i.featured).map((infographic) => (
                <div 
                  key={infographic.id}
                  className="bg-gradient-to-br from-purple-900/30 to-cyan-900/20 rounded-2xl border border-white/10 overflow-hidden group hover:border-purple-500/50 transition cursor-pointer"
                  onClick={() => setSelectedInfographic(infographic)}
                >
                  {/* Preview Image */}
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <Image
                      src={infographic.thumbnail}
                      alt={infographic.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-medium">
                      Featured
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 text-white/80 text-xs rounded">
                      {infographic.category}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm flex items-center gap-2 border border-white/20">
                        <Eye className="w-4 h-4" />
                        Click to View
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition">
                      {infographic.title}
                    </h3>

                    <p className="text-sm text-white/60 mb-4 line-clamp-2">
                      {infographic.description}
                    </p>

                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {infographic.keyStats.slice(0, 4).map((stat, idx) => (
                        <div key={idx} className="text-center p-2 bg-white/5 rounded-lg">
                          <div className="text-lg font-bold text-white">{stat.stat}</div>
                          <div className="text-xs text-white/50">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {infographic.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {infographic.downloads}
                        </span>
                      </div>
                      <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        View
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Infographics Grid */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {activeCategory === "All" ? "All Infographics" : `${activeCategory} Infographics`}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInfographics.map((infographic) => (
              <div 
                key={infographic.id}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group hover:border-purple-500/30 transition cursor-pointer"
                onClick={() => setSelectedInfographic(infographic)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={infographic.thumbnail}
                    alt={infographic.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white/80 text-xs rounded">
                    {infographic.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition">
                    {infographic.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4 line-clamp-2">
                    {infographic.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {infographic.keyStats.slice(0, 2).map((stat, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-white/60 rounded text-xs">
                        {stat.stat} {stat.label}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {infographic.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" /> {infographic.downloads}
                      </span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Infographic?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Enterprise customers can request custom infographics with company-specific 
              data, branding, and industry focus.
            </p>
            <Link 
              href="/contact-sales/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Request Custom Content
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Projects?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            The data in these infographics shows the power of AI in construction. 
            See how Space AI can deliver these results for your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/try-it-now/"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/construction-software-demo/"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={faqs} />
    </div>
  );
}
