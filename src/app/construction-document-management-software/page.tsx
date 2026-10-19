// src/app/construction-document-management-software/page.tsx
// TASK 28: Construction Document Management Software Page
// Target: "construction document management", "construction document control"

import { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, CheckCircle, Star, ArrowRight, Zap, Shield, 
  Search, Clock, BarChart3, Sparkles, Users, Upload,
  Rocket, Target, FolderOpen, Eye, Download, Lock,
  Cloud, Layers, RefreshCw, History, Filter, Tag
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Document Management Software | Space AI | Free Tier",
  description: "Organize, search, and share construction documents instantly with AI-powered document management. Auto-classification, version control, and mobile access. Free tier available.",
  keywords: [
    "construction document management software",
    "construction document management",
    "construction document control",
    "construction file management",
    "construction document storage",
    "construction drawings management",
    "blueprint management software",
    "construction plan management",
    "rfi document management",
    "submittal management software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-document-management-software/",
  },
  openGraph: {
    title: "Construction Document Management Software | Space AI | Free Tier",
    description: "AI-powered document management for construction. Find any document in seconds. Free tier available.",
    url: "https://pmspace.ai/construction-document-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/document-management-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Document Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Document Management Software | Space AI",
    description: "Find any construction document in seconds with AI-powered search. Free tier available.",
  },
};

// Document management features
const documentFeatures = [
  {
    icon: Sparkles,
    title: "AI Document Classification",
    description: "Artificial intelligence automatically categorizes documents as they're uploaded — drawings, specs, RFIs, submittals, contracts, and more.",
    benefit: "Save 10+ hours/week on filing",
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description: "Natural language search finds documents by content, not just filename. Ask 'exterior brick spec' and get the right document instantly.",
    benefit: "Find anything in seconds",
  },
  {
    icon: History,
    title: "Version Control",
    description: "Automatic version tracking ensures everyone has the latest documents. View change history, compare versions, and roll back if needed.",
    benefit: "Never use wrong version",
  },
  {
    icon: Cloud,
    title: "Unlimited Cloud Storage",
    description: "All plans include generous storage for drawings, photos, and project documents. Enterprise plans offer unlimited storage.",
    benefit: "No storage limits",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Granular permissions control who can view, edit, or download documents. Keep sensitive information secure.",
    benefit: "Complete security control",
  },
  {
    icon: Zap,
    title: "Mobile Access",
    description: "Access documents from the field with iOS and Android apps. Works offline — sync when you get signal.",
    benefit: "Full field access",
  },
];

// Document types supported
const documentTypes = [
  { type: "Drawings & Plans", formats: "PDF, DWG, DWF, RVT", icon: Layers },
  { type: "Specifications", formats: "PDF, DOCX, TXT", icon: FileText },
  { type: "RFIs", formats: "All formats + workflow", icon: RefreshCw },
  { type: "Submittals", formats: "PDF, images, packages", icon: Upload },
  { type: "Contracts", formats: "PDF, DOCX", icon: Shield },
  { type: "Photos & Videos", formats: "JPG, PNG, MP4", icon: Eye },
  { type: "Reports", formats: "PDF, Excel, custom", icon: BarChart3 },
  { type: "Correspondence", formats: "Email import, PDF", icon: FolderOpen },
];

// Key benefits
const keyBenefits = [
  {
    metric: "80%",
    label: "Faster document retrieval",
    description: "AI search finds documents in seconds, not minutes",
  },
  {
    metric: "60%",
    label: "Reduction in RFI response time",
    description: "AI suggests answers from related documents",
  },
  {
    metric: "95%",
    label: "Auto-classification accuracy",
    description: "AI categorizes documents correctly on upload",
  },
  {
    metric: "100%",
    label: "Version control coverage",
    description: "Every document automatically version tracked",
  },
];

// FAQ data
const faqData = [
  {
    question: "How does AI document classification work?",
    answer: "When you upload a document, Space AI's AI analyzes the content, layout, and metadata to automatically classify it into the correct category (drawing, specification, RFI, submittal, etc.). The system learns from corrections, becoming more accurate over time for your specific document types and naming conventions.",
  },
  {
    question: "Can I search for content inside documents?",
    answer: "Yes, Space AI performs optical character recognition (OCR) on all uploaded documents, making the full text searchable. You can search for specific terms, specification sections, or even ask natural language questions like 'fire rating requirements for stairwell doors' and find relevant documents instantly.",
  },
  {
    question: "How does version control work for construction drawings?",
    answer: "Space AI automatically tracks versions when you upload updated documents. The system recognizes drawing numbers and revision codes, linking new versions to previous ones. You can view the complete revision history, compare versions side-by-side, and see exactly who uploaded each version and when.",
  },
  {
    question: "Can subcontractors and clients access documents?",
    answer: "Yes, you control exactly who sees what. Create custom permission groups for subcontractors, owners, architects, and other stakeholders. Limit access to specific folders, document types, or individual files. Track who views and downloads documents.",
  },
  {
    question: "How do I migrate documents from another system?",
    answer: "Space AI offers free migration from Procore, PlanGrid, Bluebeam, SharePoint, and other platforms. Our migration team handles the transfer, preserving folder structures, metadata, and permissions. Most migrations complete within 1-2 weeks depending on volume.",
  },
  {
    question: "Does Space AI work with Bluebeam?",
    answer: "Yes, Space AI integrates with Bluebeam Studio for markup and annotation. Documents synced between platforms, so markups made in Bluebeam appear in Space AI automatically. You can also use Space AI's built-in markup tools for simpler annotations.",
  },
  {
    question: "What file formats are supported?",
    answer: "Space AI supports all common construction document formats including PDF, DWG, DWF, RVT, DXF, JPG, PNG, MP4, DOCX, XLSX, and more. Large CAD files and BIM models are supported with specialized viewers that don't require desktop software.",
  },
  {
    question: "Is my data secure and backed up?",
    answer: "Space AI uses bank-level encryption (AES-256) for all documents at rest and in transit. Data is stored in SOC 2 certified data centers with automatic redundant backups across multiple geographic locations. You maintain complete ownership and can export your data anytime.",
  },
];

export default function ConstructionDocumentManagementPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={faqData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Space AI Construction Document Management",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0",
              "highPrice": "99",
              "priceCurrency": "USD",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "234",
              "bestRating": "5",
              "worstRating": "1",
            },
            "featureList": [
              "AI Document Classification",
              "Full-Text Search",
              "Version Control",
              "Mobile Access",
              "Access Permissions",
              "Cloud Storage",
              "Bluebeam Integration",
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            {/* Floating document icons */}
            {[FileText, FolderOpen, Layers, Upload].map((Icon, i) => (
              <div
                key={i}
                className="absolute text-blue-500/10 animate-float"
                style={{
                  left: `${15 + i * 25}%`,
                  top: `${25 + i * 10}%`,
                  animationDelay: `${i * 2}s`,
                }}
              >
                <Icon className="w-20 h-20" />
              </div>
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">AI-Powered Document Control</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Construction Document
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                  Management Software
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Find any document in seconds with AI-powered search. Automatic classification, 
                version control, and secure access for your entire project team.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>AI auto-classification</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Full-text search</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Automatic versioning</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Mobile access</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/25"
                >
                  <Upload className="w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-blue-400">{benefit.metric}</div>
                    <div className="text-white/60 text-sm">{benefit.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Stop Drowning in Documents
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    Construction projects generate thousands of documents. Without the right system, 
                    critical information gets lost, wrong versions get used, and teams waste hours 
                    searching for what they need.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <div className="text-red-400 text-2xl">❌</div>
                      <div>
                        <div className="text-white font-medium">Without proper document management:</div>
                        <div className="text-white/60">8+ hours/week searching for documents, wrong versions causing rework, security risks</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <div className="text-green-400 text-2xl">✓</div>
                      <div>
                        <div className="text-white font-medium">With Space AI document management:</div>
                        <div className="text-white/60">Instant search, automatic versioning, secure access, mobile field access</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">How AI Search Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-xl">
                      <Search className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="text-white font-medium">You type:</div>
                        <div className="text-blue-400">&ldquo;exterior curtain wall specs&rdquo;</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-white/40" />
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl">
                      <FileText className="w-6 h-6 text-green-400" />
                      <div>
                        <div className="text-white font-medium">AI finds:</div>
                        <div className="text-green-400">Division 08 42 00 - Curtain Wall Section 3.2 Exterior Glazing</div>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm text-center">
                      No need to know the exact file name — AI understands what you&apos;re looking for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Document Management Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Everything you need to organize, find, and share construction documents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {documentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Document Types */}
        <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                All Your Document Types in One Place
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Space AI handles every type of construction document with specialized viewers and workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {documentTypes.map((docType, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <docType.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{docType.type}</h3>
                  <p className="text-white/40 text-sm">{docType.formats}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Integration */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Documents Connected to Workflows
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    Documents don&apos;t exist in isolation. Space AI connects them to RFI workflows, 
                    submittals, change orders, and daily reports — so context is always available.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "RFI Attachments", description: "Documents automatically linked to RFI responses" },
                      { title: "Submittal Packages", description: "Organize product data, samples, and approvals" },
                      { title: "Change Order Support", description: "Link supporting documents to COs" },
                      { title: "Daily Report Photos", description: "Photo logs organized by date and location" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-white">{item.title}</h3>
                          <p className="text-white/60">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 text-blue-400" />
                    RFI Document Workflow
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">1</div>
                      <div className="text-white/70">RFI created with question and attachments</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">2</div>
                      <div className="text-white/70">AI suggests related specs and drawings</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">3</div>
                      <div className="text-white/70">Response attached with markup</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">✓</div>
                      <div className="text-white/70">Complete RFI package archived automatically</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Works With Your Tools
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Integrate with the tools your team already uses.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Bluebeam", "Autodesk", "Revit", "AutoCAD",
                "Microsoft Office", "Google Drive", "Dropbox",
                "Box", "SharePoint", "DocuSign", "PlanGrid"
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-white/70 hover:border-blue-500/30 hover:text-white transition-all"
                >
                  {tool}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/integrations/"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                View All Integrations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Document Management FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
                <FileText className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">Take Control of Your Documents</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Find Any Document in Seconds
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Stop wasting time searching for documents. Start your free trial and 
                experience AI-powered document management today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-2xl shadow-blue-500/30"
                >
                  <Upload className="w-6 h-6" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="text-white/50 mt-6 text-sm">
                Free migration from existing systems • Unlimited storage on Enterprise
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
