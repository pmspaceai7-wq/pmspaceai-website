export type RegionContent = {
  slug: string;
  locale: string;
  canonical: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: { value: string; label: string }[];
  };
  differentiators: { title: string; description: string; stat?: string }[];
  compliance: { title: string; items: string[] }[];
  caseStudy: {
    title: string;
    location: string;
    summary: string;
    metrics: string[];
    quote: string;
  };
  cities: string[];
  partnerships: { title: string; description: string; items: string[] };
  keywordsBlock: string[];
};

export const REGIONAL_ALTERNATES: Record<string, string> = {
  "en-US": "https://pmspace.ai/construction-management-software-usa/",
  "en-IN": "https://pmspace.ai/construction-management-software-india/",
  "en-AE": "https://pmspace.ai/construction-management-software-uae/",
  "en-GB": "https://pmspace.ai/construction-management-software-uk/",
  "en-AU": "https://pmspace.ai/construction-management-software-australia/",
  "en-SG": "https://pmspace.ai/construction-management-software-singapore/",
  "x-default": "https://pmspace.ai/construction-management-software/",
};

export const regionalPages: Record<string, RegionContent> = {
  usa: {
    slug: "construction-management-software-usa",
    locale: "en-US",
    canonical: "https://pmspace.ai/construction-management-software-usa/",
    metaTitle: "Construction Software USA | AI Project Controls | Space AI",
    metaDescription:
      "AI construction management software for US contractors. OSHA-ready safety packs, certified payroll exports, union reporting, and ENR city playbooks to deliver with fewer delays.",
    keywords: [
      "construction management software usa",
      "project management software usa",
      "ai construction software united states",
      "oshea compliance software",
      "certified payroll construction software",
    ],
    ogImage: "https://pmspace.ai/assets/images/og-image.jpeg",
    hero: {
      eyebrow: "US market playbooks",
      title: "Construction Management Software for US Contractors",
      subtitle:
        "Predict delays, automate RFIs, and stay OSHA-compliant with AI workflows built for ENR firms, union jobs, and public works.",
      primaryCta: { label: "Book US demo", href: "/construction-software-demo/" },
      secondaryCta: { label: "View US delivery playbook", href: "/resources/construction-project-management-best-practices/" },
      stats: [
        { value: "23%", label: "Faster RFI turnaround" },
        { value: "-14 days", label: "Critical path recovered" },
        { value: "4.8/5", label: "GC/CM satisfaction" },
      ],
    },
    differentiators: [
      {
        title: "OSHA + safety readiness",
        description: "Safety inspections, toolbox talks, and OSHA 300/301 exports in one workflow so superintendents close the day with zero rework.",
        stat: "92% completion on safety logs",
      },
      {
        title: "Union & certified payroll",
        description: "Certified payroll-ready exports (WH-347) and union wage tables keep public projects compliant without manual spreadsheets.",
        stat: "3 hrs/week saved per project",
      },
      {
        title: "DOT and public works",
        description: "Audit-ready document trails for DOT/FAA/Davis-Bacon jobs with sealed submittal packages and automated approvals.",
      },
      {
        title: "Local scheduling intelligence",
        description: "Weather-aware lookahead schedules calibrated to US regions to keep field crews and inspectors synchronized.",
      },
    ],
    compliance: [
      {
        title: "US compliance pack",
        items: [
          "OSHA 300/301/300A exports",
          "Davis-Bacon certified payroll support",
          "Buy America/Build America attachment tracking",
          "Lien waiver and COI expirations",
        ],
      },
      {
        title: "Financial + tax",
        items: ["AIA billing support", "QuickBooks/Sage Intacct exports", "Sales tax tracking by state"],
      },
    ],
    caseStudy: {
      title: "Healthcare expansion, Phoenix, AZ",
      location: "ENR Southwest GC",
      summary: "Reduced RFI aging and pulled inspections forward with weather-aware sequencing and certified payroll exports for the owner rep.",
      metrics: ["-14 days on critical path", "23% faster RFI cycle", "100% OSHA logs submitted on time"],
      quote: "Space AI let us keep the owner, inspectors, and trades aligned without spreadsheet chaos.",
    },
    cities: ["New York", "Houston", "Chicago", "Phoenix", "Seattle", "Atlanta", "Denver", "Miami"],
    partnerships: {
      title: "US integrations",
      description: "Prebuilt connectors and data exports tuned for US accounting, estimating, and BIM stacks.",
      items: ["Procore export kits", "Autodesk Construction Cloud", "QuickBooks + Sage Intacct", "Bluebeam set sync"],
    },
    keywordsBlock: ["construction software usa", "project management software united states", "oshea compliant construction software", "certified payroll software"],
  },
  india: {
    slug: "construction-management-software-india",
    locale: "en-IN",
    canonical: "https://pmspace.ai/construction-management-software-india/",
    metaTitle: "Construction Software India | RERA-Ready AI Platform | Space AI",
    metaDescription:
      "AI construction management software for India. RERA-ready documentation, GST-smart cost control, and metro/infra playbooks built for EPCs and developers.",
    keywords: [
      "construction management software india",
      "project management software india",
      "rera construction software",
      "gst construction billing software",
      "ai construction platform india",
    ],
    ogImage: "https://pmspace.ai/assets/images/og-image.jpeg",
    hero: {
      eyebrow: "India delivery playbooks",
      title: "AI Construction Management for Indian Developers & EPCs",
      subtitle: "Stay RERA-compliant, control BOQ costs, and automate RFIs with metro-ready workflows built for Indian project rhythms.",
      primaryCta: { label: "Book India demo", href: "/construction-software-demo/" },
      secondaryCta: { label: "See RERA reporting kit", href: "/resources/ai-construction/roi-ai-construction/" },
      stats: [
        { value: "18%", label: "Faster billing approvals" },
        { value: "12%", label: "Capex savings on BOQ changes" },
        { value: "4.8/5", label: "Developer satisfaction" },
      ],
    },
    differentiators: [
      {
        title: "RERA-ready documentation",
        description: "Auto-generate RERA packs with milestone proof, photos, and approval trails ready for submissions.",
        stat: "0 rejected submissions in pilot cities",
      },
      {
        title: "GST-smart cost control",
        description: "Line-level GST handling on BOQ items with change-order history and vendor compliance notes.",
      },
      {
        title: "Metro & infra workflows",
        description: "Stage-gate controls for metro rail, highways, and airports with QA/QC checklists localized to CPWD norms.",
      },
      {
        title: "Subcontractor performance",
        description: "Track contractor productivity with variance alerts before delays reach clients or lenders.",
      },
    ],
    compliance: [
      {
        title: "India compliance pack",
        items: ["RERA milestone evidence bundles", "GST-compliant invoicing exports", "CPWD/BOQ change audit trail", "Safety inspections aligned to IS codes"],
      },
      {
        title: "Finance + owners",
        items: ["Tally/Zoho Books exports", "Lender-ready draw schedules", "Cost-to-complete snapshots"],
      },
    ],
    caseStudy: {
      title: "Residential township, Bengaluru",
      location: "Tier-1 developer",
      summary: "Shortened tower handovers by synchronizing contractors with RERA milestone proof and GST-ready billing packs.",
      metrics: ["-11 days per tower", "18% faster billing approvals", "Zero RERA re-submits"],
      quote: "The RERA packs and BOQ controls made lender and buyer updates painless.",
    },
    cities: ["Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kochi"],
    partnerships: {
      title: "India stack",
      description: "Local accounting, estimating, and BIM connections so finance and site teams stay in sync.",
      items: ["Tally / Zoho Books", "AutoCAD/Revit set sync", "Power BI dashboards", "Local ERP CSV exports"],
    },
    keywordsBlock: ["construction software india", "rera project management", "gst ready construction software", "boq management software"],
  },
  uae: {
    slug: "construction-management-software-uae",
    locale: "en-AE",
    canonical: "https://pmspace.ai/construction-management-software-uae/",
    metaTitle: "Construction Software UAE | AI Delivery for GCC | Space AI",
    metaDescription:
      "AI construction management software for UAE and GCC builders. Municipality approvals, Arabic/English handover packs, and FIDIC-ready workflows with predictive scheduling.",
    keywords: [
      "construction management software uae",
      "project management software uae",
      "gcc construction software",
      "fidic construction platform",
      "municipality approval software",
    ],
    ogImage: "https://pmspace.ai/assets/images/og-image.jpeg",
    hero: {
      eyebrow: "GCC delivery",
      title: "AI Construction Management for UAE & GCC",
      subtitle: "Win municipality approvals faster, coordinate consultants, and deliver snag-free handovers with bilingual packs.",
      primaryCta: { label: "Book UAE demo", href: "/construction-software-demo/" },
      secondaryCta: { label: "See GCC handover kit", href: "/construction-punch-list-management-software/" },
      stats: [
        { value: "21%", label: "Snag closure speed" },
        { value: "2x", label: "Faster authority responses" },
        { value: "4.8/5", label: "Consultant satisfaction" },
      ],
    },
    differentiators: [
      {
        title: "Municipality & authority ready",
        description: "Track submissions for Dubai Municipality, ADM, RTA, and Civil Defense with versioned drawings and approvals.",
        stat: "2x faster authority loops",
      },
      {
        title: "Bilingual handovers",
        description: "Arabic/English snag lists, O&M manuals, and warranties in a single export for FM teams.",
      },
      {
        title: "FIDIC/NEC governance",
        description: "Correspondence and variation orders tagged to clauses to keep consultants and clients aligned.",
      },
      {
        title: "Precise lookahead schedules",
        description: "Heat/wind-aware sequencing and supplier lead-time buffers for Gulf projects.",
      },
    ],
    compliance: [
      {
        title: "UAE/GCC compliance pack",
        items: ["Municipality submission tracking", "Civil Defense/NOC documentation", "FIDIC clause-linked VO logs", "Bilingual O&M handovers"],
      },
      {
        title: "Commercial & finance",
        items: ["Retention/advance tracking", "Aconex/Primavera exports", "Supplier lead-time buffers"],
      },
    ],
    caseStudy: {
      title: "Hospitality tower, Dubai",
      location: "Design-build contractor",
      summary: "Cut authority response times with structured submissions and bilingual handover exports for FM teams.",
      metrics: ["2x faster authority cycles", "21% faster snag closure", "Zero handover rejections"],
      quote: "Our consultants stopped chasing spreadsheets; everything was clause-linked and bilingual.",
    },
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Riyadh", "Jeddah", "Doha", "Manama"],
    partnerships: {
      title: "GCC stack",
      description: "Work with the tools your consultants use across the Gulf.",
      items: ["Aconex exchange", "Primavera P6 exports", "Autodesk / Revit", "Oracle NetSuite CSV"],
    },
    keywordsBlock: ["construction software uae", "gcc construction management", "fidic project management", "municipality approval software"],
  },
  uk: {
    slug: "construction-management-software-uk",
    locale: "en-GB",
    canonical: "https://pmspace.ai/construction-management-software-uk/",
    metaTitle: "Construction Management Software UK | CDM & NEC Ready | Space AI",
    metaDescription:
      "AI construction management software for UK contractors. CDM 2015 safety packs, NEC/FIDIC correspondence, and BIM Level 2-friendly workflows with predictive scheduling.",
    keywords: [
      "construction management software uk",
      "project management software uk",
      "cdm 2015 software",
      "nec contract management software",
      "bim level 2 construction software",
    ],
    ogImage: "https://pmspace.ai/assets/images/og-image.jpeg",
    hero: {
      eyebrow: "UK delivery",
      title: "Construction Management Software for the UK",
      subtitle: "Keep CDM duties, NEC correspondence, and BIM Level 2 compliance in one AI-first delivery platform.",
      primaryCta: { label: "Book UK demo", href: "/construction-software-demo/" },
      secondaryCta: { label: "Download CDM checklists", href: "/resources/construction-software-buying-checklist/" },
      stats: [
        { value: "20%", label: "Faster design approvals" },
        { value: "-9 days", label: "Saved on programmes" },
        { value: "4.8/5", label: "Site team satisfaction" },
      ],
    },
    differentiators: [
      {
        title: "CDM 2015 ready",
        description: "Construction phase plans, RAMS, and site inductions with evidence logs for Principal Contractors and Duty Holders.",
        stat: "98% audit pass rate",
      },
      {
        title: "NEC/FIDIC correspondence",
        description: "Compensation events, early warnings, and clause-linked communications tracked without email sprawl.",
      },
      {
        title: "BIM Level 2 friendly",
        description: "Common data environment approach with drawing versions and approvals aligned to UK BIM frameworks.",
      },
      {
        title: "Programme resilience",
        description: "Lookahead schedules that factor weather, supplier lead times, and inspections common in UK regions.",
      },
    ],
    compliance: [
      {
        title: "UK compliance pack",
        items: ["CDM 2015 duties evidence", "RAMS + site induction logs", "NEC compensation/early warning logs", "BIM Level 2 approval trail"],
      },
      {
        title: "Commercial",
        items: ["Application for payment exports", "Retention tracking", "CIS-ready supplier records"],
      },
    ],
    caseStudy: {
      title: "Education build, Manchester",
      location: "Tier-2 contractor",
      summary: "Kept CDM evidence tidy and accelerated design approvals by aligning consultants on NEC clause-linked threads.",
      metrics: ["-9 days on programme", "20% faster approvals", "Zero CDM findings"],
      quote: "CDM evidence and NEC threads in one place saved us from risk during audits.",
    },
    cities: ["London", "Manchester", "Birmingham", "Glasgow", "Leeds", "Bristol", "Edinburgh", "Cardiff"],
    partnerships: {
      title: "UK stack",
      description: "Integrations that UK QS, design, and finance teams already trust.",
      items: ["Aconex / Viewpoint exports", "Sage / Xero", "Power BI dashboards", "Revit / Navisworks"],
    },
    keywordsBlock: ["construction software uk", "cdm 2015 software", "nec project management", "bim level 2 software"],
  },
  australia: {
    slug: "construction-management-software-australia",
    locale: "en-AU",
    canonical: "https://pmspace.ai/construction-management-software-australia/",
    metaTitle: "Construction Software Australia | NCC & WHS Ready | Space AI",
    metaDescription:
      "AI construction management software for Australia. NCC/WHS-ready checklists, subcontractor compliance, and weather-aware schedules for Tier-1 and Tier-2 builders.",
    keywords: [
      "construction management software australia",
      "project management software australia",
      "whs construction software",
      "ncc compliant construction software",
      "ai construction software australia",
    ],
    ogImage: "https://pmspace.ai/assets/images/og-image.jpeg",
    hero: {
      eyebrow: "Australia delivery",
      title: "Construction Management Software for Australian Builders",
      subtitle: "Close WHS gaps, manage subcontractors, and deliver with NCC-ready documentation backed by predictive schedules.",
      primaryCta: { label: "Book AU demo", href: "/construction-software-demo/" },
      secondaryCta: { label: "See WHS playbook", href: "/construction-safety-management-software/" },
      stats: [
        { value: "24%", label: "Faster subcontractor onboarding" },
        { value: "-10 days", label: "Programme savings" },
        { value: "4.9/5", label: "PM satisfaction" },
      ],
    },
    differentiators: [
      {
        title: "WHS-first workflows",
        description: "Safe Work Method Statements, inductions, and incident logs centralized with evidence for audits.",
        stat: "98% WHS task completion",
      },
      {
        title: "NCC & state codes",
        description: "Document controls and approval trails aligned to NCC and state requirements to simplify certifier reviews.",
      },
      {
        title: "Weather + supply buffers",
        description: "Predictive schedules that account for coastal weather and long-haul supplier lead times across AU states.",
      },
      {
        title: "Subcontractor compliance",
        description: "COI/licence expiry alerts, site access, and safety briefings handled without email chains.",
      },
    ],
    compliance: [
      {
        title: "Australia compliance pack",
        items: ["WHS checklists and SWMS logs", "NCC documentation traceability", "Environmental/Sustainability logs", "COI/licence expiry alerts"],
      },
      {
        title: "Commercial",
        items: ["Progress claim exports", "Retention and variations", "Xero/Myob/Tencia exports"],
      },
    ],
    caseStudy: {
      title: "Logistics hub, Western Sydney",
      location: "National contractor",
      summary: "Reduced onboarding friction and kept SWMS and NCC evidence organized for certifiers, cutting programme risk.",
      metrics: ["24% faster onboarding", "-10 days on programme", "Zero WHS non-conformances"],
      quote: "WHS, NCC, and subcontractor evidence lived in one place, so audits stopped being fire drills.",
    },
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra", "Gold Coast", "Newcastle"],
    partnerships: {
      title: "Australia stack",
      description: "Tools AU builders rely on for finance, BIM, and delivery.",
      items: ["Aconex exchange", "Xero / MYOB", "Power BI", "Revit / Navisworks"],
    },
    keywordsBlock: ["construction software australia", "whs project management", "ncc construction software", "australia construction scheduling"],
  },
  singapore: {
    slug: "construction-management-software-singapore",
    locale: "en-SG",
    canonical: "https://pmspace.ai/construction-management-software-singapore/",
    metaTitle: "Construction Software Singapore | BCA & PPVC Ready | Space AI",
    metaDescription:
      "AI construction management software for Singapore. BCA e-submissions, PPVC/QS workflows, and bilingual handovers to keep consultants and owners aligned.",
    keywords: [
      "construction management software singapore",
      "project management software singapore",
      "bca submission software",
      "ppvc management software",
      "ai construction software singapore",
    ],
    ogImage: "https://pmspace.ai/assets/images/og-image.jpeg",
    hero: {
      eyebrow: "Singapore delivery",
      title: "Construction Management Software for Singapore",
      subtitle: "Manage BCA submissions, PPVC workflows, and consultant coordination with AI-powered schedules and snag control.",
      primaryCta: { label: "Book SG demo", href: "/construction-software-demo/" },
      secondaryCta: { label: "See PPVC playbook", href: "/construction-punch-list-management-software/" },
      stats: [
        { value: "19%", label: "Faster authority submissions" },
        { value: "2.1x", label: "Snag closure speed" },
        { value: "4.8/5", label: "Consultant satisfaction" },
      ],
    },
    differentiators: [
      {
        title: "BCA-ready submissions",
        description: "Package drawings, method statements, and safety documents for BCA e-submissions with clear approval trails.",
        stat: "19% faster submissions",
      },
      {
        title: "PPVC/DFMA workflows",
        description: "Track module fabrication, delivery, and on-site installation with QA/QC holds and consultant sign-offs.",
      },
      {
        title: "Bilingual handovers",
        description: "English/Chinese snag lists and O&M manuals so FM teams receive clean turnover bundles.",
      },
      {
        title: "Tight urban scheduling",
        description: "Logistics-aware lookahead plans that factor road permits, crane slots, and weather windows.",
      },
    ],
    compliance: [
      {
        title: "Singapore compliance pack",
        items: ["BCA e-submission tracker", "PPVC/DFMA QA/QC logs", "Safety inspections for MOM", "Bilingual handover bundles"],
      },
      {
        title: "Commercial",
        items: ["Progress claim exports", "Retention and defects", "Xero/NetSuite exports"],
      },
    ],
    caseStudy: {
      title: "Mixed-use tower, Singapore CBD",
      location: "Design & build contractor",
      summary: "Accelerated BCA submissions and tightened PPVC QA/QC to deliver a cleaner handover for the asset owner.",
      metrics: ["19% faster submissions", "2.1x faster snag closure", "Zero turnover disputes"],
      quote: "PPVC tracking and bilingual handovers kept consultants, owners, and FM on the same page.",
    },
    cities: ["Singapore", "Jurong", "Tampines", "Woodlands", "Bukit Timah", "Pasir Ris", "Yishun", "Paya Lebar"],
    partnerships: {
      title: "Singapore stack",
      description: "Connect to the finance and BIM tools used across Singapore projects.",
      items: ["Aconex exchange", "Xero / NetSuite", "Autodesk / Revit", "Power BI"],
    },
    keywordsBlock: ["construction software singapore", "bca submission software", "ppvc management", "dfma project management"],
  },
};
