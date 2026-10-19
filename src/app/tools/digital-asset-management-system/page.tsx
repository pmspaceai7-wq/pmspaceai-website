import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Digital Asset Management System for Construction | Space AI",
  description:
    "Organize, search, and share construction media, BIM models, CAD files, and documents with AI-powered digital asset management.",
  keywords: [
    "digital asset management system",
    "construction DAM",
    "BIM file management",
    "CAD file storage",
    "construction media management",
    "project asset library",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/digital-asset-management-system/",
  },
  openGraph: {
    title: "Digital Asset Management System for Construction | Space AI",
    description:
      "Centralize BIM, CAD, photos, and documents with Space AI digital asset management.",
    url: "https://pmspace.ai/tools/digital-asset-management-system/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a digital asset management system in construction?",
    answer:
      "A DAM system organizes and stores digital project assets such as BIM models, CAD drawings, photos, videos, renderings, and documents. It makes assets searchable, shareable, and version-controlled across project stakeholders.",
  },
  {
    question: "Can Space AI handle large BIM and CAD files?",
    answer:
      "Yes. The system supports large engineering files and includes preview capabilities so teams can review models and drawings without needing specialized desktop software.",
  },
  {
    question: "How does AI improve asset search?",
    answer:
      "AI automatically tags assets based on content, project context, and file metadata. This makes it possible to find the right drawing, model, or photo using natural language search rather than memorizing folder structures.",
  },
  {
    question: "Is version control included?",
    answer:
      "Yes. Teams can track versions, compare revisions, and ensure stakeholders are always referencing the latest approved asset rather than an outdated file.",
  },
];

export default function DigitalAssetManagementSystemPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Asset Management System for Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Centralize BIM models, CAD files, photos, and project media in a searchable, AI-powered library.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stop Hunting for Project Files
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction projects produce an enormous volume of digital assets: drawings, specifications, BIM models, site photos, drone footage, renderings, and marketing materials. When these files are scattered across drives, email threads, and individual laptops, teams waste hours searching and risk using outdated versions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI digital asset management creates a single, organized repository for all project media. AI-powered tagging and search make it easy to find the right file instantly, while version control and permissions protect project integrity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI Auto-Tagging",
                    desc: "Automatically categorize and tag assets based on content, project, and file type.",
                  },
                  {
                    title: "Advanced Search",
                    desc: "Find files using keywords, project filters, dates, and custom metadata.",
                  },
                  {
                    title: "Version Control",
                    desc: "Track revisions and ensure teams always use the latest approved asset.",
                  },
                  {
                    title: "Secure Sharing",
                    desc: "Share assets with internal teams and external stakeholders with controlled access.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why It Matters
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A well-managed asset library improves collaboration, reduces rework caused by outdated files, and protects institutional knowledge. Marketing and business development teams can reuse approved project media, while project teams can locate critical documents faster.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For firms managing multiple projects, a DAM system turns fragmented media into a reusable, searchable asset base.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/construction-document-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Document Management
                </Link>
                <Link
                  href="/core/space-bim/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Space BIM
                </Link>
                <Link
                  href="/tools/construction-asset-tracking-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Asset Tracking
                </Link>
                <Link
                  href="/tools/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  All Tools
                </Link>
              </div>
            </section>

            <section className="text-center bg-gradient-to-r from-purple-500/20 to-teal-400/20 border border-white/10 rounded-2xl p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Organize Your Project Media
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI digital asset management keeps files findable and secure.
              </p>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
