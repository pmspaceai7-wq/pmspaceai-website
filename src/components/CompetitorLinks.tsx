import Link from "next/link";

// Shared internal-link component for competitor pages (hub ↔ alternatives ↔ vs ↔ pricing).
// Reduces drift: adding a page here updates all competitor pages at once.

interface CompetitorLink {
  label: string;
  href: string;
}

interface CompetitorLinksProps {
  currentPath?: string;
  competitor?: string;
}

const COMPETITOR_LINKS: CompetitorLink[] = [
  { label: "Procore", href: "/alternatives/procore-alternative/" },
  { label: "Procore Alternatives", href: "/alternatives/procore-alternatives/" },
  { label: "Space AI vs Procore", href: "/compare/space-ai-vs-procore/" },
  { label: "Buildertrend", href: "/alternatives/buildertrend-alternative/" },
  { label: "Buildertrend Alternatives", href: "/alternatives/buildertrend-alternatives/" },
  { label: "Space AI vs Buildertrend", href: "/compare/space-ai-vs-buildertrend/" },
  { label: "Autodesk Construction Cloud", href: "/alternatives/autodesk-construction-cloud-alternative/" },
  { label: "ACC Alternatives", href: "/alternatives/autodesk-construction-cloud-alternatives/" },
  { label: "PlanGrid", href: "/alternatives/plangrid-alternative/" },
  { label: "Fieldwire", href: "/alternatives/fieldwire-alternative/" },
  { label: "CoConstruct", href: "/alternatives/coconstruct-alternative/" },
  { label: "Smartsheet", href: "/alternatives/smartsheet-alternative/" },
  { label: "Wrike", href: "/alternatives/wrike-alternative/" },
  { label: "ClickUp", href: "/alternatives/clickup/" },
  { label: "Monday.com", href: "/alternatives/monday-alternative/" },
  { label: "Primavera P6", href: "/alternatives/primavera-p6-alternative/" },
  { label: "Oracle ERP", href: "/alternatives/oracle-erp-alternatives/" },
  { label: "Space AI vs Monday", href: "/compare/space-ai-vs-monday/" },
];

const GLOBAL_LINKS: CompetitorLink[] = [
  { label: "Comparison Hub", href: "/compare/construction-software-comparison/" },
  { label: "Procore Pricing", href: "/compare/procore-pricing/" },
  { label: "Procore vs Buildertrend", href: "/compare/procore-vs-buildertrend/" },
  { label: "All Alternatives", href: "/alternatives/" },
  { label: "How We Migrate You", href: "/guides/how-we-migrate-you/" },
];

function isCurrent(href: string, currentPath?: string, competitor?: string): boolean {
  if (!currentPath) return false;
  if (href === currentPath) return true;
  // Highlight the page whose slug matches this competitor page
  if (competitor && href.includes(competitor)) return true;
  return false;
}

export default function CompetitorLinks({ currentPath, competitor }: CompetitorLinksProps) {
  return (
    <section className="container mx-auto px-4 py-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-white mb-4">
          Related Competitor Pages
        </h3>
        <div className="flex flex-wrap gap-3">
          {[...GLOBAL_LINKS, ...COMPETITOR_LINKS].map((link, i) => {
            const active = isCurrent(link.href, currentPath, competitor);
            return (
              <Link
                key={i}
                href={link.href}
                className={`px-4 py-2 border rounded-lg transition-colors text-sm ${
                  active
                    ? "bg-purple-500/20 border-purple-500/50 text-purple-200"
                    : "bg-gray-800/50 border-white/10 text-white/80 hover:border-purple-500/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
