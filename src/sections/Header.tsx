import { Header as HeaderClient } from "./HeaderClient";

// Static fallback navigation for non-JavaScript crawlers (AI crawlers, social crawlers, etc.)
// The interactive HeaderClient component is rendered for users with JavaScript enabled.
const fallbackNavLinks = [
  { name: "Home", href: "/" },
  { name: "What is Space AI?", href: "/what-is-space-ai/" },
  { name: "Construction Management Software", href: "/construction-management-software/" },
  { name: "AI Construction Management", href: "/ai-construction-management/" },
  { name: "Best AI Construction Software", href: "/best-ai-construction-software/" },
  { name: "Platform Our Vision", href: "/platform/our-vision/" },
  { name: "Platform Blueprint", href: "/platform/blueprint/" },
  { name: "System of Intelligence", href: "/platform/system-of-intelligence/" },
  { name: "Artificial Intelligence", href: "/platform/ai/" },
  { name: "Process Automation", href: "/platform/process-automation/" },
  { name: "Space AI Core", href: "/core/" },
  { name: "AI Workflow Orchestration", href: "/core/ai-workflow-orchestration/" },
  { name: "Intelligent Document Processing", href: "/core/idp/" },
  { name: "Space BIM", href: "/core/space-bim/" },
  { name: "E-Sign", href: "/core/e-sign/" },
  { name: "Space Capture", href: "/core/space-capture/" },
  { name: "Tender Management", href: "/core/construction-tender-management-software/" },
  { name: "Space Vision", href: "/core/space-vision/" },
  { name: "Smart Contracts", href: "/core/smart-contract-management/" },
  { name: "Environmental Impact Analysis", href: "/core/environmental-impact-analysis-ai/" },
  { name: "Solutions", href: "/solutions/" },
  { name: "Project Managers", href: "/solutions/project-managers/" },
  { name: "Commercial Managers", href: "/solutions/commercial-managers/" },
  { name: "Owner Directors", href: "/solutions/owner-directors/" },
  { name: "HSEQ Managers", href: "/solutions/hseq-managers/" },
  { name: "Schedulers", href: "/solutions/schedulers/" },
  { name: "Compare", href: "/compare/" },
  { name: "Procore Alternative", href: "/alternatives/procore-alternative/" },
  { name: "Asite Alternative", href: "/alternatives/asite-alternative/" },
  { name: "PlanGrid Alternative", href: "/alternatives/plangrid-alternative/" },
  { name: "Buildertrend Alternative", href: "/alternatives/buildertrend-alternative/" },
  { name: "Industries", href: "/industries/" },
  { name: "General Contractors", href: "/industries/general-contractors/" },
  { name: "Government", href: "/industries/government/" },
  { name: "Health Care", href: "/industries/health-care/" },
  { name: "Infrastructure", href: "/industries/infrastructure/" },
  { name: "Real Estate", href: "/industries/real-estate/" },
  { name: "Services", href: "/services/" },
  { name: "API Development", href: "/services/api-development/" },
  { name: "Data Management Services", href: "/services/data-management-services/" },
  { name: "Digital Transformation", href: "/services/digital-transformation-services/" },
  { name: "AI App Development", href: "/services/ai-app-development/" },
  { name: "Tools", href: "/tools/" },
  { name: "Space Team", href: "/space-team/" },
  { name: "Enterprise", href: "/enterprise/" },
  { name: "Pricing", href: "/pricing/" },
  { name: "Resources", href: "/resources/" },
  { name: "AI Construction", href: "/resources/ai-construction/" },
  { name: "Docs", href: "/docs/" },
  { name: "Guides", href: "/guides/" },
  { name: "AI Construction Guide", href: "/guides/ai-construction-management-complete-guide/" },
  { name: "Blogs", href: "/blogs/" },
  { name: "Videos", href: "/videos/" },
  { name: "Case Studies", href: "/case-studies/" },
  { name: "Press & News", href: "/press/" },
  { name: "Resellers", href: "/resellers/" },
  { name: "FAQ", href: "/faq/" },
  { name: "Contact", href: "/construction-software-demo/" },
];

export const Header = () => {
  return (
    <>
      <noscript>
        <nav
          aria-label="Main navigation fallback"
          className="bg-black border-b border-white/10 px-4 py-4"
        >
          <div className="container mx-auto">
            <p className="text-white/60 text-sm mb-3">
              JavaScript is disabled. Here is a static list of important pages:
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {fallbackNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </noscript>
      <HeaderClient />
    </>
  );
};
