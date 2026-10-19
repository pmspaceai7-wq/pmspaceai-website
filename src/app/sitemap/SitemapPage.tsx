"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Products",
      items: [
        { text: "Construction Management Software", href: "/construction-management-software/" },
        { text: "AI Construction Management", href: "/ai-construction-management/" },
        { text: "Best Project Management Software", href: "/project-management-software/" },
        { text: "Building Project Management", href: "/construction-project-management-system/" },
        { text: "Project Scheduling Software", href: "/project-scheduling-software/" },
        { text: "AI Project Management Tools", href: "/ai-project-management-tools/" },
        { text: "Predictive Analytics", href: "/predictive-analytics-construction/" },
        { text: "Project Management System", href: "/construction-project-management-system/" },
        { text: "Mobile Construction App", href: "/mobile-construction-management-app/" },
        { text: "Document Management", href: "/construction-document-management-software/" },
        { text: "Cost Management", href: "/construction-cost-management-software/" },
        { text: "Free Construction Software", href: "/free-construction-management-software/" },
        { text: "Small Business Software", href: "/construction-management-software-small-business/" },
        { text: "Enterprise Software", href: "/enterprise/" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { text: "Innovative Solutions", href: "/solutions/innovative-solutions/" },
        { text: "AI Project Management", href: "/solutions/construction-solutions/" },
        { text: "Data-Driven Insights", href: "/solutions/data-management/" },
        { text: "Construction Management", href: "/solutions/construction-management/" },
        { text: "Construction Solutions", href: "/solutions/construction-solutions/" },
        { text: "Project Management", href: "/solutions/project-management/" },
        { text: "Smart Project Management", href: "/solutions/smart-project-management/" },
        { text: "Online Construction Management", href: "/solutions/construction-management-online/" },
        { text: "Construction Software for Small Builders", href: "/blogs/budget-tracking-for-contractors/" },
        { text: "Construction Software for Enterprises", href: "/solutions/construction-software-for-enterprises/" },
        { text: "Best Construction Software for General Contractors", href: "/solutions/best-construction-software-for-general-contractors/" },
        { text: "All in one Construction Software", href: "/solutions/all-in-one-construction-software/" },
        { text: "Project Management Software for Small Business", href: "/solutions/project-management-software-for-small-business/" },
        { text: "Project Management Software for Enterprises", href: "/solutions/project-management-software-for-enterprises/" },
        { text: "Best Software for Construction Business", href: "/solutions/all-in-one-construction-software/" },
        { text: "Project Management for Building Construction", href: "/solutions/project-management-for-building-construction/" },
      ],
    },
    {
      title: "Guides",
      items: [
        { text: "Getting Started with Space AI", href: "/guides/getting-started-pmspace/" },
        { text: "Ultimate Construction Guide", href: "/guides/ultimate-construction-management-guide/" },
        { text: "AI Construction Guide", href: "/guides/ai-construction-management-complete-guide/" },
        { text: "How to Choose Software", href: "/guides/how-to-choose-construction-software/" },
        { text: "Healthcare Construction", href: "/guides/healthcare-construction-management/" },
        { text: "Infrastructure Construction", href: "/guides/infrastructure-construction-management/" },
        { text: "Commercial Real Estate", href: "/guides/commercial-real-estate-construction/" },
        { text: "Intelligent Document Processing", href: "/guides/idp/" },
        { text: "Common Data Platform", href: "/guides/common-data-platform/" },
        { text: "AI Workflow Orchestration", href: "/guides/ai-workflow-orchestration/" },
        { text: "Space BIM", href: "/core/space-bim/" },
        { text: "AI Construction Management Complete Guide", href: "/guides/ai-construction-management-complete-guide/" },
      ],
    },
    {
      title: "Resources",
      items: [
        { text: "All Resources", href: "/resources/" },
        { text: "AI Construction Guide", href: "/resources/ai-construction/" },
        { text: "Glossary of Construction AI", href: "/resources/glossary/" },
        { text: "Case Studies", href: "/case-studies/" },
        { text: "Templates Library", href: "/templates/" },
        { text: "Integrations", href: "/integrations/" },
        { text: "Webinars & Events", href: "/resources/webinars/" },
        { text: "Downloads", href: "/resources/construction-software-downloads/" },
        { text: "Video Library", href: "/resources/video-library/" },
        { text: "Success Stories", href: "/customers/success-stories/" },
        { text: "2026 AI Trends Report", href: "/resources/2026-construction-ai-trends/" },
        { text: "Risk Calculator", href: "/tools/construction-delay-risk-calculator/" },
        { text: "Construction CRM Software", href: "/tools/construction-crm-software/" },
        { text: "Core Email Integration", href: "/guides/email-integration/" },
        { text: "Concrete Delay Prediction", href: "/case-studies/concrete-delay-prediction/" },
        { text: "MEP Clash Avoidance", href: "/case-studies/mep-clash-avoidance/" },
        { text: "Construction Estimation Software", href: "/construction-estimation-software/" },
        { text: "Education Construction Software", href: "/industries/education/" },
        { text: "Healthcare Construction", href: "/industries/health-care/" },
        { text: "Oil & Gas", href: "/industries/oil-and-gas/" },
        { text: "Transportation", href: "/industries/transportation/" },
        { text: "Dubai Mega-Projects", href: "/locations/dubai-mega-projects/" },
        { text: "Commercial High-Rise", href: "/industries/commercial-high-rise/" },
        { text: "AI Lean Construction Platform", href: "/core/ai-lean-construction-platform/" },
        { text: "Space Connectors", href: "/core/space-connectors/" },
        // Removed legacy Space MCP entry; the canonical page is Space Connectors.
      ],
    },
    {
      title: "Compare",
      items: [
        { text: "Software Comparison Hub", href: "/compare/construction-software-comparison/" },
        { text: "Procore Alternative", href: "/alternatives/procore-alternative/" },
        { text: "Asite Alternative", href: "/alternatives/asite-alternative/" },
        { text: "PlanGrid Alternative", href: "/alternatives/plangrid-alternative/" },
        { text: "Buildertrend Alternative", href: "/alternatives/buildertrend-alternative/" },
        { text: "Smartsheet Alternative", href: "/alternatives/smartsheet-alternative/" },
        { text: "Autodesk Alternative", href: "/alternatives/autodesk-construction-cloud-alternative/" },
        { text: "CoConstruct Alternative", href: "/alternatives/coconstruct-alternative/" },
        { text: "All Alternatives", href: "/alternatives/" },
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About Us", href: "/" },
        { text: "Careers", href: "/careers/" },
        { text: "Contact", href: "/construction-software-demo/" },
        { text: "Use Cases", href: "/usecases/" },
        { text: "Press & News", href: "/press/" },
        { text: "Newsletter", href: "/construction-newsletter/" },
        { text: "Resellers", href: "/resellers/" },
        { text: "Blogs", href: "/blogs/" },
        { text: "Document Management Guide", href: "/blogs/construction-document-management-complete-guide/" },
        { text: "Construction Cost Overruns Guide", href: "/blogs/construction-cost-overruns-guide/" },
        { text: "Videos", href: "/videos/" },
      ],
    },
    {
      title: "Legal",
      items: [
        { text: "Privacy Policy", href: "/privacy-policy/" },
        { text: "Terms of Service", href: "/terms-of-service/" },
        { text: "Cookie Policy", href: "/cookie-policy/" },
      ],
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="pt-32 pb-16 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,69,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Space AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Site Map</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Navigate through all the pages, resources, guides, and tools available on Space AI.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10 text-white/90">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="group flex items-start text-white/60 hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                      <span className="-ml-6 group-hover:ml-0 transition-all duration-300 transform inline-block">
                        {item.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
