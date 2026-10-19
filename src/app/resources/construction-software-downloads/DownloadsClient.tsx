"use client";

// src/app/resources/downloads/DownloadsClient.tsx
// Client component for downloads page with functional download buttons

import { useState } from "react";
import Link from "next/link";
import { 
  Download, FileText, Calculator, FileSpreadsheet, 
  BookOpen, CheckCircle, ArrowRight,
  Building2, BarChart3, Shield, Clock, Target,
  Star, Users, Zap, Brain, Award, Mail, X
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

// Types
interface Resource {
  id: number;
  title: string;
  description: string;
  format: string;
  pages: string | number;
  downloadUrl: string;
  thumbnail: string;
  featured?: boolean;
  topics: string[];
  downloads: string;
}

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  resources: Resource[];
}

// Resource categories
const resourceCategories: ResourceCategory[] = [
  {
    id: "guides",
    title: "Buyer's Guides & Whitepapers",
    description: "In-depth guides to help you make informed decisions",
    icon: BookOpen,
    accentColor: "purple",
    resources: [
      {
        id: 1,
        title: "Construction Management Software Buyer's Guide 2026",
        description: "A comprehensive 40-page guide to evaluating and selecting construction management software. Includes comparison frameworks, evaluation criteria, and vendor assessment templates.",
        format: "PDF",
        pages: 40,
        downloadUrl: "/guides/how-to-choose-construction-software",
        thumbnail: "/assets/images/projectmanagementdashboard.png",
        featured: true,
        topics: ["Software Evaluation", "Vendor Comparison", "ROI Analysis", "Implementation Planning"],
        downloads: "12,450",
      },
      {
        id: 2,
        title: "AI in Construction: Industry Whitepaper",
        description: "Research-backed whitepaper on AI adoption in construction. Market trends, use cases, implementation strategies, and future predictions from industry experts.",
        format: "PDF",
        pages: 28,
        downloadUrl: "/guides/ai-construction-management-complete-guide",
        thumbnail: "/assets/images/aiagent.png",
        topics: ["AI Technology", "Industry Trends", "Case Studies", "Best Practices"],
        downloads: "8,320",
      },
      {
        id: 3,
        title: "Digital Transformation Roadmap for Construction",
        description: "Step-by-step roadmap for construction companies embarking on digital transformation. From assessment to full adoption with milestones and KPIs.",
        format: "PDF",
        pages: 22,
        downloadUrl: "/guides/ultimate-construction-management-guide",
        thumbnail: "/assets/images/constructionmanagmentonline.webp",
        topics: ["Digital Strategy", "Change Management", "Technology Stack", "ROI Metrics"],
        downloads: "5,890",
      },
    ],
  },
  {
    id: "templates",
    title: "Project Templates",
    description: "Ready-to-use templates for construction project management",
    icon: FileSpreadsheet,
    accentColor: "cyan",
    resources: [
      {
        id: 4,
        title: "Construction Project Checklist Template",
        description: "Comprehensive checklist covering pre-construction through closeout phases. 200+ items organized by project phase to ensure nothing is missed.",
        format: "Interactive",
        pages: "15 pages",
        downloadUrl: "/resources/construction-software-buying-checklist",
        thumbnail: "/assets/images/files.webp",
        featured: true,
        topics: ["Project Planning", "Phase Checklists", "Quality Control", "Closeout"],
        downloads: "28,900",
      },
      {
        id: 5,
        title: "RFI Log Template",
        description: "Track and manage RFIs from submission to response. Includes status tracking, response time metrics, and cost impact tracking.",
        format: "Interactive",
        pages: "3 tabs",
        downloadUrl: "/construction-rfi-management-software",
        thumbnail: "/assets/images/documentmanagement.png",
        topics: ["RFI Management", "Document Control", "Communication", "Response Tracking"],
        downloads: "15,670",
      },
      {
        id: 6,
        title: "Daily Construction Report Template",
        description: "Standardized daily log for job sites. Weather, manpower, equipment, progress, issues, and next-day planning all in one form.",
        format: "Interactive",
        pages: "2 pages",
        downloadUrl: "/templates",
        thumbnail: "/assets/images/forms.png",
        topics: ["Daily Logs", "Progress Tracking", "Labor Hours", "Equipment"],
        downloads: "22,340",
      },
      {
        id: 7,
        title: "Submittal Log Template",
        description: "Manage material and shop drawing submittals. Track status, approvals, and resubmissions with built-in deadline alerts.",
        format: "Interactive",
        pages: "4 tabs",
        downloadUrl: "/templates",
        thumbnail: "/assets/images/constructionsoftwareforbusiness.png",
        topics: ["Submittals", "Approvals", "Document Control", "Deadlines"],
        downloads: "12,890",
      },
      {
        id: 8,
        title: "Punch List Template",
        description: "Track deficiency items from identification to completion. Location tagging, photo attachment support, and responsibility assignment.",
        format: "Interactive",
        pages: "3 tabs",
        downloadUrl: "/construction-punch-list-management-software",
        thumbnail: "/assets/images/workspace.png",
        topics: ["Punch Lists", "Deficiency Tracking", "Closeout", "Quality"],
        downloads: "18,560",
      },
    ],
  },
  {
    id: "calculators",
    title: "Calculators & Tools",
    description: "Interactive tools to support your decision-making",
    icon: Calculator,
    accentColor: "green",
    resources: [
      {
        id: 9,
        title: "Construction Software ROI Calculator",
        description: "Calculate the return on investment for construction management software. Input your project data to see projected savings from automation and efficiency gains.",
        format: "Interactive",
        pages: "5 tabs",
        downloadUrl: "/pricing",
        thumbnail: "/assets/images/costestimation.png",
        featured: true,
        topics: ["ROI Analysis", "Cost Savings", "Productivity Gains", "Payback Period"],
        downloads: "7,560",
      },
      {
        id: 10,
        title: "Project Cost Estimator",
        description: "Detailed cost estimation template with built-in formulas for labor, materials, equipment, and overhead. CSI division breakdown included.",
        format: "Interactive",
        pages: "12 tabs",
        downloadUrl: "/construction-cost-management-software",
        thumbnail: "/assets/images/invoicemanagementsystem.png",
        topics: ["Cost Estimation", "Budget Planning", "CSI Divisions", "Contingency"],
        downloads: "21,340",
      },
      {
        id: 11,
        title: "Resource Allocation Planner",
        description: "Plan manpower and equipment needs across project phases. Visual resource leveling and conflict detection built into the tool.",
        format: "Interactive",
        pages: "8 tabs",
        downloadUrl: "/project-scheduling-software",
        thumbnail: "/assets/images/scheduleingsoftware.webp",
        topics: ["Resource Planning", "Manpower", "Equipment", "Scheduling"],
        downloads: "6,230",
      },
      {
        id: 12,
        title: "Construction Bid Comparison Tool",
        description: "Compare bids from multiple subcontractors side-by-side. Normalize pricing, track inclusions/exclusions, and score vendors objectively.",
        format: "Interactive",
        pages: "6 tabs",
        downloadUrl: "/subcontractor-management-software-construction",
        thumbnail: "/assets/images/constructionsoftwareforenterprises.png",
        topics: ["Bid Analysis", "Vendor Scoring", "Cost Comparison", "Award Decisions"],
        downloads: "8,910",
      },
    ],
  },
  {
    id: "checklists",
    title: "Checklists & Forms",
    description: "Standardized forms for field and office use",
    icon: CheckCircle,
    accentColor: "orange",
    resources: [
      {
        id: 13,
        title: "Construction Safety Inspection Checklist",
        description: "OSHA-aligned safety inspection checklist for jobsites. 150+ items covering PPE, scaffolding, electrical, excavation, and more.",
        format: "Interactive",
        pages: "8 pages",
        downloadUrl: "/construction-safety-management-software",
        thumbnail: "/assets/images/defense.webp",
        topics: ["Safety Compliance", "OSHA", "Jobsite Inspections", "Hazard ID"],
        downloads: "19,450",
      },
      {
        id: 14,
        title: "Pre-Construction Meeting Agenda Template",
        description: "Structured agenda for kickoff meetings. Covers roles, communication plans, safety protocols, schedule milestones, and documentation requirements.",
        format: "Guide",
        pages: "4 pages",
        downloadUrl: "/guides/getting-started-pmspace",
        thumbnail: "/assets/images/welcometospaceai.jpg",
        topics: ["Meeting Management", "Project Kickoff", "Stakeholder Alignment", "Communication"],
        downloads: "13,670",
      },
      {
        id: 15,
        title: "Quality Control Inspection Form",
        description: "Standardized QC form for various construction activities. Customizable sections for different trade inspections.",
        format: "Guide",
        pages: "6 pages",
        downloadUrl: "/resources/construction-project-management-best-practices",
        thumbnail: "/assets/images/clinicmanagementwithspaceai.png",
        topics: ["Quality Assurance", "Inspections", "Documentation", "Compliance"],
        downloads: "10,230",
      },
      {
        id: 16,
        title: "Software Evaluation Checklist",
        description: "Score construction software vendors against 50+ criteria. Features, integrations, support, pricing, and implementation considerations.",
        format: "Interactive",
        pages: "5 pages",
        downloadUrl: "/resources/construction-software-buying-checklist",
        thumbnail: "/assets/images/allinoneconstructionsoftware.png",
        topics: ["Software Selection", "Vendor Evaluation", "Feature Comparison", "Due Diligence"],
        downloads: "9,120",
      },
    ],
  },
];

// Download stats
const downloadStats = [
  { number: "150K+", label: "Total Downloads" },
  { number: "16", label: "Free Resources" },
  { number: "4.8/5", label: "User Rating" },
  { number: "100%", label: "Free Forever" },
];

// FAQ data
const downloadFAQs = [
  {
    question: "Are these construction resources really free?",
    answer: "Yes! All our templates, guides, calculators, and checklists are completely free to download and use. There's no credit card required, and you can use them for your own projects without any restrictions. We believe in providing value to the construction community."
  },
  {
    question: "Do I need a Space AI account to download resources?",
    answer: "No account is required for most resources. Simply click the download button and access the resource directly. For some interactive tools, we may ask for your email so we can notify you about updates and new resources."
  },
  {
    question: "Can I customize these templates for my company?",
    answer: "Absolutely! All templates are provided in editable formats (Excel, Word, or Google Docs equivalents). You're encouraged to customize them with your company logo, branding, and specific requirements. Make them your own!"
  },
  {
    question: "How often are resources updated?",
    answer: "We review and update our resources quarterly to ensure they reflect current industry best practices, regulatory requirements (like OSHA standards), and technology trends. Major updates are communicated via our newsletter."
  },
  {
    question: "Are these templates compatible with Space AI software?",
    answer: "While these standalone templates work independently, they're designed to complement Space AI features. Many workflows covered in our templates are automated within Space AI. The templates help teams who haven't yet adopted digital project management."
  },
  {
    question: "Can I request a specific template or resource?",
    answer: "Yes! We regularly create new resources based on user requests. Contact us with your needs, and if it benefits the broader construction community, we'll prioritize creating it. Many of our most popular templates came from user suggestions."
  },
];

// Download Modal for collecting email (optional)
function DownloadModal({ 
  resource, 
  onClose, 
  onDownload 
}: { 
  resource: Resource | null; 
  onClose: () => void;
  onDownload: (resource: Resource) => void;
}) {
  const [email, setEmail] = useState("");
  const [skipEmail, setSkipEmail] = useState(false);

  if (!resource) return null;

  const handleDownload = () => {
    // If resource has an internal link, navigate to it
    window.location.href = resource.downloadUrl;
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md mx-4 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
              <Download className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
            <p className="text-white/60 text-sm">{resource.format} • {resource.pages}</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleDownload}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Access Resource
            </button>

            <p className="text-center text-xs text-white/40">
              Click to view/access the resource
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DownloadsClient() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleDownload = (resource: Resource) => {
    // Navigate directly to the resource URL
    window.location.href = resource.downloadUrl;
  };

  const handleResourceClick = (resource: Resource) => {
    // Open modal for more info, or navigate directly
    setSelectedResource(resource);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Download Modal */}
      <DownloadModal 
        resource={selectedResource} 
        onClose={() => setSelectedResource(null)}
        onDownload={handleDownload}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">Free Construction Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Download Center
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Free templates, guides, calculators, and checklists for construction project managers. 
              Everything you need to run successful projects.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {downloadStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Category Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {resourceCategories.map((cat) => (
                <a 
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 hover:border-white/20 transition text-sm"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            ⭐ Most Popular Downloads
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resourceCategories.flatMap(cat => cat.resources.filter(r => r.featured)).map((resource) => (
              <div 
                key={resource.id}
                className="bg-gradient-to-br from-purple-900/30 to-cyan-900/20 rounded-2xl border border-white/10 overflow-hidden group hover:border-purple-500/50 transition"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-medium">
                      Featured
                    </span>
                    <span className="text-white/60 text-sm">{resource.format}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.topics.slice(0, 3).map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-white/60 rounded text-xs border border-white/10">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-white/50">{resource.downloads} views</span>
                    <button 
                      onClick={() => handleDownload(resource)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition"
                    >
                      <Download className="w-4 h-4" />
                      Access
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      {resourceCategories.map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-16 border-t border-white/5"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10">
                <category.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                <p className="text-white/60">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource) => (
                <div 
                  key={resource.id}
                  className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group hover:border-purple-500/30 transition"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded">
                        {resource.format}
                      </span>
                      <span className="text-white/50 text-xs">{resource.pages}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition">
                      {resource.title}
                    </h3>

                    <p className="text-sm text-white/60 mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {resource.topics.map((topic, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/5 text-white/50 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-white/50">
                        {resource.downloads} views
                      </span>
                      <button 
                        onClick={() => handleDownload(resource)}
                        className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition"
                      >
                        <ArrowRight className="w-4 h-4" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Email Signup CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get New Resources Delivered to Your Inbox
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Subscribe to receive new templates, guides, and industry insights. 
              We&apos;ll never spam—just valuable resources for construction professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Link
                href="/construction-newsletter/"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition text-center"
              >
                Subscribe to Newsletter
              </Link>
            </div>

            <p className="text-sm text-white/50 mt-4">
              Join 15,000+ construction professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Request a Resource */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-white/70 mb-6">
              We&apos;re always creating new resources based on industry needs. 
              Let us know what templates or guides would help your projects.
            </p>
            <Link 
              href="/contact-sales/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition"
            >
              Request a Resource
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
            {downloadFAQs.map((faq, idx) => (
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
            Ready to Automate These Workflows?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Space AI digitizes and automates the processes in these templates. 
            See how AI can take your project management to the next level.
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
      <FAQSchema faqs={downloadFAQs} />
    </div>
  );
}
