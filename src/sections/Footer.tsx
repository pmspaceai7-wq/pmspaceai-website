import Image from "next/image";
import { Grid3x3, Phone } from "lucide-react";
import Link from "next/link";
import { socialPlatforms } from "@/lib/socialPlatforms";
import { contactNumbers } from "@/lib/contactNumbers";
import VeritasGraphAttribution from "@/components/VeritasGraphAttribution";

const solutionLinks = [
  { text: "Innovative Solutions", href: "/solutions/innovative-solutions/" },
  { text: "AI Project Management", href: "/solutions/ai-powered/" },
  { text: "Data-Driven Insights", href: "/solutions/data-management/" },
  { text: "Construction Management", href: "/solutions/construction-management/" },
  { text: "Construction Solutions", href: "/solutions/construction-solutions/" },
  { text: "Project Management", href: "/solutions/project-management/" },
  { text: "Smart Project Management", href: "/solutions/smart-project-management/" },
  { text: "Online Construction Management", href: "/solutions/construction-management-online/" },
  { text: "Construction Software for Small Builders", href: "/solutions/construction-software-for-small-builders/" },
  { text: "Construction Software for Enterprises", href: "/solutions/construction-software-for-enterprises/" },
  { text: "Best Construction Software for General Contractors", href: "/solutions/best-construction-software-for-general-contractors/" },
  { text: "All in one Construction Software", href: "/solutions/all-in-one-construction-software/" },
  { text: "Project Management Software for Small Business", href: "/solutions/project-management-software-for-small-business/" },
  { text: "Project Management Software for Enterprises", href: "/solutions/project-management-software-for-enterprises/" },
  { text: "Best Software for Construction Business", href: "/solutions/best-software-for-construction-business/" },
  { text: "Project Management for Building Construction", href: "/solutions/project-management-for-building-construction/" },
  { text: "Project Managers", href: "/solutions/project-managers/" },
  { text: "Commercial Managers", href: "/solutions/commercial-managers/" },
  { text: "Owner Directors", href: "/solutions/owner-directors/" },
  { text: "HSEQ Managers", href: "/solutions/hseq-managers/" },
  { text: "Schedulers", href: "/solutions/schedulers/" },
  { text: "Quantity Surveyors", href: "/solutions/quantity-surveyors-and-senior-qss/" },
  { text: "Software Champions", href: "/solutions/software-champions-and-internal-systems-leads/" },
];

const guideLinks = [
  { text: "GEO for Construction Software", href: "/guides/generative-engine-optimization-for-construction-software/" },
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
  { text: "AI Form Automation", href: "/guides/ai-powered-form-automation/" },
  { text: "E-Sign", href: "/core/e-sign/" },
  { text: "Email Integration", href: "/guides/email-integration/" },
  { text: "AI in Construction", href: "/guides/ai-in-construction/" },
  { text: "Space Vision", href: "/guides/space-vision/" },
  { text: "Space Connectors", href: "/core/space-connectors/" },
  { text: "Construction Tender Management", href: "/core/construction-tender-management-software/" },
  { text: "How We Migrate You", href: "/guides/how-we-migrate-you/" },
];

const companyLinks = [
  { text: "About Us", href: "/about/" },
  { text: "Space Team", href: "/space-team/" },
  { text: "Enterprise", href: "/enterprise/" },
  { text: "Careers", href: "/careers/" },
  { text: "Contact", href: "/construction-software-demo/" },
  { text: "E-Signature Demo", href: "/e-signature-demo/" },
  { text: "Use Cases", href: "/usecases/" },
  { text: "Press & News", href: "/press/" },
  { text: "Newsletter", href: "/construction-newsletter/" },
  { text: "Resellers", href: "/resellers/" },
  { text: "Blogs", href: "/blogs/" },
  { text: "Videos", href: "/videos/" },
  { text: "Process Automation", href: "/process-automation/" },
  { text: "Platform Features", href: "/platform-features/" },
];

const resourceLinks = [
  { text: "All Resources", href: "/resources/" },
  { text: "Docs", href: "/docs/" },
  { text: "AI Systems Reference", href: "/docs/ai-systems/" },
  { text: "AI Visibility for Construction", href: "/resources/ai-visibility-for-construction/" },
  { text: "AI Claims & Trust", href: "/trust/ai-claims/" },
  { text: "Changelog", href: "/changelog/" },
  { text: "AI Construction Guide", href: "/resources/ai-construction/" },
  { text: "Glossary of Construction AI", href: "/resources/glossary/" },
  { text: "Case Studies", href: "/case-studies/" },
  { text: "Concrete Delay Prediction", href: "/case-studies/concrete-delay-prediction/" },
  { text: "MEP Clash Avoidance", href: "/case-studies/mep-clash-avoidance/" },
  { text: "Templates Library", href: "/templates/" },
  { text: "Integrations", href: "/integrations/" },
  { text: "Webinars & Events", href: "/resources/webinars/" },
  { text: "Downloads", href: "/resources/construction-software-downloads/" },
  { text: "Video Library", href: "/resources/video-library/" },
  { text: "Success Stories", href: "/customers/success-stories/" },
  { text: "Buying Checklist", href: "/resources/construction-software-buying-checklist/" },
  { text: "Best Practices", href: "/resources/construction-project-management-best-practices/" },
  { text: "2026 Construction AI Trends", href: "/resources/2026-construction-ai-trends/" },
  { text: "Construction Infographics", href: "/resources/construction-infographics/" },
  { text: "White Papers", href: "/white-papers/" },
  { text: "State of Construction AI 2026", href: "/research/construction-ai-2026/" },
  { text: "Locations", href: "/locations/" },
  { text: "Features", href: "/features/" },
];

const productLinks = [
  { text: "What is Space AI?", href: "/what-is-space-ai/" },
  { text: "Construction Management Software", href: "/construction-management-software/" },
  { text: "AI Construction Management", href: "/ai-construction-management/" },
  { text: "Best AI Construction Software", href: "/best-ai-construction-software/" },
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
  { text: "Commercial Construction Software", href: "/commercial-construction-software/" },
  { text: "Residential Construction Software", href: "/residential-construction-software/" },
  { text: "Construction Estimation Software", href: "/construction-estimation-software/" },
  { text: "AI Workflow Orchestration", href: "/core/ai-workflow-orchestration/" },
  { text: "Intelligent Document Processing", href: "/core/idp/" },
  { text: "Space BIM", href: "/core/space-bim/" },
  { text: "E-Sign", href: "/core/e-sign/" },
  { text: "Space Capture", href: "/core/space-capture/" },
  { text: "Tender Management", href: "/core/construction-tender-management-software/" },
  { text: "Space Vision", href: "/core/space-vision/" },
  { text: "Smart Contracts", href: "/core/smart-contract-management/" },
  { text: "Environmental Impact Analysis", href: "/guides/ai-construction-management-complete-guide/" },
  { text: "Construction Apps", href: "/apps/" },
  { text: "Software Modules", href: "/software/" },
];

const compareLinks = [
  { text: "Software Comparison Hub", href: "/compare/construction-software-comparison/" },
  { text: "Best for Small Contractors", href: "/best-construction-management-software-for-small-contractors/" },
  { text: "Procore Alternative", href: "/alternatives/procore-alternative/" },
  { text: "Asite Alternative", href: "/alternatives/asite-alternative/" },
  { text: "PlanGrid Alternative", href: "/alternatives/plangrid-alternative/" },
  { text: "Buildertrend Alternative", href: "/alternatives/buildertrend-alternative/" },
  { text: "ClickUp Alternative", href: "/alternatives/clickup/" },
  { text: "CoConstruct Alternative", href: "/alternatives/coconstruct-alternative/" },
  { text: "Fieldwire Alternative", href: "/alternatives/fieldwire-alternative/" },
  { text: "All Alternatives", href: "/alternatives/" },
  { text: "Procore Pricing", href: "/compare/procore-pricing/" },
  { text: "Procore vs Buildertrend", href: "/compare/procore-vs-buildertrend/" },
  { text: "Space AI vs Procore", href: "/compare/space-ai-vs-procore/" },
  { text: "Space AI vs Buildertrend", href: "/compare/space-ai-vs-buildertrend/" },
  { text: "Space AI vs Monday", href: "/compare/space-ai-vs-monday/" },
  { text: "Legacy AEC Platforms", href: "/alternatives/legacy-aec-platforms/" },
  { text: "Smartsheet Alternative", href: "/alternatives/smartsheet-alternative/" },
  { text: "Wrike Alternative", href: "/alternatives/wrike-alternative/" },
  { text: "Primavera P6 Alternative", href: "/alternatives/primavera-p6-alternative/" },
  { text: "Procore Alternatives", href: "/alternatives/procore-alternatives/" },
  { text: "Buildertrend Alternatives", href: "/alternatives/buildertrend-alternatives/" },
];

const ecosystemLinks = [
  { text: "pmspaceai", href: "https://pmspace.ai/" },
  { text: "space-sign", href: "https://space-sign.ai/" },
  { text: "space-capture", href: "https://spacecapture.ai/" },
  { text: "space-lizit", href: "https://spacelizit.com/" },
  { text: "spacehr", href: "https://spacehr.net/" },
  { text: "spacelean", href: "https://spacelean.ai/" },
  { text: "spacenexus", href: "https://spacenexus.net/" },
  { text: "spacecrm", href: "https://spacecrm.net/" },
];

const allInternalLinks = [
  ...productLinks,
  ...guideLinks,
  ...solutionLinks,
  ...companyLinks,
  ...resourceLinks,
  ...compareLinks,
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/15 pt-16 pb-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(140,69,255,0.15),transparent_60%)] pointer-events-none"></div>

      <noscript>
        <nav aria-label="Footer navigation fallback" className="container px-4 sm:px-6 mx-auto py-8">
          <p className="text-white/70 text-sm mb-4">
            JavaScript is disabled. Here is a static list of important pages:
          </p>
          <ul className="columns-2 md:columns-4 gap-4 text-sm">
            {allInternalLinks.map((link) => (
              <li key={link.href} className="mb-1">
                <a href={link.href} className="text-white/70 hover:text-white hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </noscript>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-6 mb-16">
          {/* Company info - takes more space on larger screens */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-5">
              <Link
                href="/"
                className="flex items-center px-1 py-1 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Space AI Home"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <Image
                    src="/assets/images/icononly_transparent_nobuffer.png"
                    alt="Space AI Logo"
                    width={18}
                    height={18}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-white text-2xl font-bold">SPACE AI</span>
              </Link>
            </div>

            <p className="text-white/60 text-sm mb-6">
              Transforming construction management through
              <br className="hidden sm:block" /> innovative AI technology.
            </p>
            <div className="space-y-2 mb-6">
              {contactNumbers.map((contact) => (
                <div key={contact.country} className="space-y-1">
                  <a
                    href={contact.href}
                    className="flex min-h-[44px] items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2.5 text-sm transition-colors hover:bg-white/[0.08] hover:text-white md:bg-transparent md:px-0 md:py-0 md:hover:bg-transparent md:hover:underline group"
                  >
                    <Phone className="w-4 h-4 text-white/40 shrink-0" />
                    <span className="font-medium text-white/80">{contact.country}</span>
                    <span>{contact.number}</span>
                  </a>
                  {contact.extraNumbers?.map((extra) => (
                    <a
                      key={extra.href}
                      href={extra.href}
                      className="flex min-h-[44px] items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2.5 text-sm transition-colors hover:bg-white/[0.08] hover:text-white md:bg-transparent md:px-0 md:py-0 md:hover:bg-transparent md:hover:underline pl-8"
                    >
                      <span>{extra.number}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.label}
                  className="text-white/50 hover:text-white transition-colors hover:-translate-y-1"
                >
                  <platform.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="/social-media-platforms/"
                aria-label="View all Space AI social media platforms"
                className="inline-flex h-5 w-5 items-center justify-center text-white/50 hover:text-white transition-colors hover:-translate-y-1"
              >
                <Grid3x3 className="w-5 h-5" />
              </a>
            </div>

            {/* Support hours */}
            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-3.5">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400"></span>
                <div className="md:hidden">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Support Hours</p>
                  <p className="mt-1 text-sm leading-5 text-white/60">
                    Mon–Sat · 9 AM – 9 PM (regional)
                    <br />
                    <a href="mailto:contact@pmspace.ai" className="text-white/70 hover:text-white hover:underline">contact@pmspace.ai</a>
                  </p>
                </div>
              </div>

              <div className="hidden md:block mt-3 space-y-2 border-t border-white/10 pt-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Support Hours</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-white/55">Mon–Sat</span>
                  <span className="font-display text-2xl font-semibold leading-none text-white">9</span>
                  <span className="text-xs self-end pb-0.5 text-white/45">AM</span>
                  <span className="text-lg leading-none text-white/25">–</span>
                  <span className="font-display text-2xl font-semibold leading-none text-white">9</span>
                  <span className="text-xs self-end pb-0.5 text-white/45">PM</span>
                </div>
                <a href="mailto:contact@pmspace.ai" className="block text-sm text-white/60 hover:text-white hover:underline">
                  contact@pmspace.ai
                </a>
              </div>
            </div>

            {/* Trust pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "G2 Leader Winter 2025",
                "SOC 2 Certified",
                "24/7 Support",
                "Free Trial · No Credit Card",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Space AI Ecosystem */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-white font-medium mb-4">Space AI Ecosystem</h3>
              <ul className="space-y-3">
                {ecosystemLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Guides</h3>
            <ul className="space-y-3">
              {guideLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Compare */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-medium mb-4 mt-6">Compare</h3>
            <ul className="space-y-3">
              {compareLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Grounded by VeritasGraph */}
        <VeritasGraphAttribution variant="footer" />

        {/* Legal section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
            <span className="text-white/40 text-xs">
              ©2026 Space AI. All rights reserved.
            </span>
            <div className="flex gap-4 md:gap-6 justify-center">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Site Map"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href={
                      item === "Privacy Policy"
                        ? "/privacy-policy/"
                        : item === "Terms of Service"
                        ? "/terms-of-service/"
                        : item === "Cookie Policy"
                        ? "/cookie-policy/"
                        : "/sitemap.xml"
                    }
                    className="text-white/40 hover:text-white/70 text-xs transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
