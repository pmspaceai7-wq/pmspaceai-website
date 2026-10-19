"use client";

// src/app/press/PressClient.tsx
// Client component for press page with working media kit download buttons

import { useState } from "react";
import Link from "next/link";
import {
  Newspaper,
  ArrowRight,
  Download,
  Mail,
  Award,
  TrendingUp,
  Users,
  Zap,
  Building,
  Globe,
  FileText,
  Briefcase,
  X,
  CheckCircle,
  Image as ImageIcon,
} from "lucide-react";

// Types
interface PressRelease {
  title: string;
  date: string;
  category: string;
  summary: string;
  link: string;
}

interface MediaAsset {
  name: string;
  description: string;
  format: string;
  size: string;
  icon: React.ReactNode;
}

// Data
const mediaAssets: MediaAsset[] = [
  {
    name: "Space AI Logo Package",
    description: "Official logos in various formats (PNG, SVG, EPS)",
    format: "ZIP",
    size: "2.4 MB",
    icon: <ImageIcon className="w-6 h-6" aria-hidden />,
  },
  {
    name: "Executive Headshots",
    description: "High-resolution photos of leadership team",
    format: "ZIP",
    size: "8.1 MB",
    icon: <Users className="w-6 h-6" aria-hidden />,
  },
  {
    name: "Product Screenshots",
    description: "UI screenshots for editorial use",
    format: "ZIP",
    size: "12.3 MB",
    icon: <FileText className="w-6 h-6" aria-hidden />,
  },
  {
    name: "Company Fact Sheet",
    description: "Quick reference company information",
    format: "PDF",
    size: "245 KB",
    icon: <Briefcase className="w-6 h-6" aria-hidden />,
  },
];

const pressReleases: PressRelease[] = [
  {
    title: "Space AI Prepares for Series C Growth Round to Accelerate AI Development",
    date: "January 8, 2025",
    category: "Funding",
    summary:
      "Space AI announces preparations for a Series C financing round to accelerate AI development, product expansion, and international growth.",
    link: "/press/series-c-funding-announcement/",
  },
  {
    title: "Space AI Named Leader in G2 Winter 2025 Construction Management Grid",
    date: "January 5, 2025",
    category: "Recognition",
    summary:
      "Space AI is named a G2 Leader for Winter 2025, earning top marks for user satisfaction, ease of setup, and fastest implementation time.",
    link: "/press/g2-leader-winter-2025/",
  },
  {
    title: "Space AI Partners with Autodesk for Enhanced BIM Integration",
    date: "December 18, 2024",
    category: "Partnership",
    summary:
      "New strategic integration with Autodesk brings BIM model coordination and issue tracking directly into the Space AI platform.",
    link: "/press/autodesk-partnership/",
  },
  {
    title: "Space AI Achieves SOC 2 Type II and ISO 27001 Certifications",
    date: "December 10, 2024",
    category: "Security",
    summary:
      "Independent audits validate Space AI's enterprise-grade security controls and information security management practices.",
    link: "/press/security-certifications-2024/",
  },
  {
    title: "Space AI AI Copilot Beta Program Opens to Enterprise Customers",
    date: "November 28, 2024",
    category: "Product",
    summary:
      "Select enterprise customers gain early access to the Space AI Copilot, a generative AI assistant built for construction workflows.",
    link: "/press/ai-copilot-beta/",
  },
  {
    title: "Space AI Expands to Middle East with Dubai Office Opening",
    date: "November 15, 2024",
    category: "Expansion",
    summary:
      "Space AI opens a regional headquarters in Dubai to serve the fast-growing construction technology market across the GCC.",
    link: "/press/dubai-office-opening/",
  },
  {
    title: "Space AI Platform Surpasses 10,000 Active Construction Projects",
    date: "October 30, 2024",
    category: "Milestone",
    summary:
      "The Space AI platform now supports more than 10,000 active construction projects across commercial, infrastructure, and industrial sectors.",
    link: "/press/10000-projects-milestone/",
  },
  {
    title: "Space AI Introduces Enterprise Analytics Dashboard Suite",
    date: "October 15, 2024",
    category: "Product",
    summary:
      "New executive dashboards deliver portfolio-wide visibility, predictive insights, and real-time KPI tracking for large construction firms.",
    link: "/press/enterprise-analytics-launch/",
  },
];

const companyFacts = [
  { label: "Active Projects", value: "10,000+", icon: <Building className="w-5 h-5" /> },
  { label: "Offices", value: "Global", icon: <Globe className="w-5 h-5" /> },
  { label: "G2 Recognition", value: "Leader", icon: <Award className="w-5 h-5" /> },
  { label: "Security", value: "SOC 2 / ISO 27001", icon: <CheckCircle className="w-5 h-5" /> },
];

// Download Request Modal
function DownloadModal({
  asset,
  onClose,
}: {
  asset: MediaAsset | null;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!asset) return null;

  const handleRequest = () => {
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
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
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
              <p className="text-white/60">
                Our PR team will send you the {asset.name} shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                  {asset.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{asset.name}</h3>
                <p className="text-white/60 text-sm">{asset.description}</p>
                <p className="text-white/40 text-xs mt-2">{asset.format} • {asset.size}</p>
              </div>

              <div className="space-y-4">
                <p className="text-center text-sm text-white/70">
                  Media assets are available to verified press contacts.
                  Click below to request access.
                </p>

                <button
                  onClick={handleRequest}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Request Download
                </button>

                <Link
                  href="/contact-sales/"
                  className="block w-full py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition text-center"
                >
                  Contact PR Team
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PressClient() {
  const [selectedAsset, setSelectedAsset] = useState<MediaAsset | null>(null);
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Download Modal */}
      <DownloadModal
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              Press Room
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            News & Announcements
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            The latest updates on Space AI&apos;s mission to transform construction management
            with AI-powered intelligence. Find official press releases, media resources,
            executive commentary, company milestones, and spokesperson contact information.
            This page is updated regularly with news about product launches, partnerships,
            funding, security certifications, and global expansion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#releases"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Newspaper className="w-5 h-5" /> Press Releases
            </a>
            <a
              href="#media-kit"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Download className="w-5 h-5" /> Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* Company at a Glance */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Company at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyFacts.map((fact, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-blue-500/20 rounded-xl text-blue-400">
                  {fact.icon}
                </div>
                <p className="text-2xl font-bold text-white">{fact.value}</p>
                <p className="text-white/60 text-sm">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Journalists */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">For Journalists</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What We Do</h3>
              <p>
                Space AI builds an AI-powered construction management platform that helps
                contractors, owners, and project teams plan, execute, and deliver complex
                builds with greater speed and control. Our software combines predictive
                analytics, intelligent scheduling, automated documentation, and real-time
                collaboration to turn fragmented construction data into actionable
                intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Story Angles</h3>
              <p>
                We are happy to provide commentary and data on the future of AI in
                construction, the shift from digitization to intelligence, global
                construction technology markets, startup growth in proptech and contech,
                and the role of predictive analytics in reducing project risk.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <p className="text-white/70 mb-4">
              Need a quote, interview, or background briefing? Our team responds to press
              inquiries within 24 hours.
            </p>
            <a
              href="mailto:press@pmspace.ai"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              <Mail className="w-4 h-4" /> press@pmspace.ai
            </a>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="releases" className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Press Releases</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Official announcements covering product launches, partnerships, expansion,
            security certifications, recognition, and company milestones. Click any release
            to read the full article.
          </p>

          {/* Release List */}
          <div className="space-y-4">
            {pressReleases.map((release, idx) => (
              <Link
                key={idx}
                href={release.link}
                className="block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                        {release.category}
                      </span>
                      <span className="text-white/50 text-sm">{release.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{release.summary}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-blue-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics / Coverage Areas */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Coverage Areas</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Space AI leadership is available to comment on the topics shaping the future of
            construction technology, from artificial intelligence and machine learning to
            global market expansion and enterprise software adoption.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "AI in Construction", desc: "Machine learning, predictive analytics, and generative AI for project delivery." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Project Controls", desc: "Schedule risk, cost forecasting, change management, and portfolio analytics." },
              { icon: <Globe className="w-6 h-6" />, title: "Global Expansion", desc: "Construction technology adoption in the Middle East, Asia, and North America." },
              { icon: <Award className="w-6 h-6" />, title: "Industry Recognition", desc: "User satisfaction, implementation excellence, and platform benchmarks." },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 w-fit mb-4">
                  {topic.icon}
                </div>
                <h3 className="font-semibold mb-2">{topic.title}</h3>
                <p className="text-white/60 text-sm">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Media Kit</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Download official Space AI assets for press coverage, event promotion, and
            editorial use.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map((asset, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors"
              >
                <div className="p-4 bg-blue-500/20 rounded-xl text-blue-400 w-fit mx-auto mb-4">
                  {asset.icon}
                </div>
                <h3 className="font-semibold mb-1">{asset.name}</h3>
                <p className="text-white/60 text-sm mb-3">{asset.description}</p>
                <p className="text-white/40 text-xs mb-4">
                  {asset.format} • {asset.size}
                </p>
                <button
                  onClick={() => setSelectedAsset(asset)}
                  className="w-full px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Space AI */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Space AI</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Space AI is an AI-powered construction management platform that helps contractors,
            owners, and project teams plan, execute, and deliver complex builds with greater
            speed, accuracy, and control. By combining predictive analytics, intelligent
            scheduling, automated documentation, and real-time collaboration, Space AI turns
            construction data into actionable intelligence.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            Founded with the belief that construction deserves modern, intelligent software,
            Space AI serves projects across commercial, infrastructure, healthcare, education,
            and industrial sectors worldwide. The company is headquartered with regional teams
            and partners supporting customers in North America, the Middle East, Southeast
            Asia, and Europe. Space AI is backed by a growing ecosystem of resellers,
            implementation partners, and technology integrations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> About Us
            </Link>
            <Link
              href="/resellers/"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Partners
            </Link>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Press Contact</h2>
          <p className="text-white/70 mb-6">
            For press inquiries, interview requests, speaker opportunities, review access,
            or additional background information about Space AI and the construction
            technology market.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/80 mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:press@pmspace.ai" className="text-blue-400 hover:text-blue-300">
                press@pmspace.ai
              </a>
            </p>
            <p className="text-white/60 text-sm mb-4">
              We aim to respond to all press inquiries within 24 hours.
            </p>
            <Link
              href="/contact-sales/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" /> Contact PR Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
