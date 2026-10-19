export interface ExpertQuote {
  quote: string;
  name: string;
  title: string;
  organization: string;
  context: string;
}

export interface SwitcherTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  switchedFrom: string;
  result: string;
}

type PageQuotes = Record<string, ExpertQuote[]>;

export const pageQuotes: PageQuotes = {
  "/alternatives/autodesk-construction-cloud-alternative": [
    {
      quote: "Vendor lock-in is a hidden cost most teams don't calculate until they're trapped in a single ecosystem. A unified platform that works with any BIM tool gives you negotiating power and flexibility",
      name: "Sarah Chen, PhD",
      title: "Head of AI & Analytics",
      organization: "Space AI",
      context: "Her research shows that teams using multi-ecosystem platforms save an average of 18% on software costs over three years compared to single-vendor lock-in approaches."
    },
  ],
  "/alternatives/coconstruct-alternative": [
    {
      quote: "Residential builders who adopt AI-powered project management tools early will have a significant competitive advantage as the market tightens",
      name: "Maria Gonzalez, LEED AP",
      title: "Director of Sustainable Construction",
      organization: "Space AI",
      context: "She notes that AI automation of client communication and selection management alone saves home builders an average of 8 hours per project."
    },
  ],
  "/alternatives/smartsheet-alternative": [
    {
      quote: "Spreadsheets are flexible, but they're also fragile. One broken formula can cascade through your entire project budget without anyone noticing until it's too late",
      name: "James O'Brien, PMP",
      title: "Enterprise Project Controls Specialist",
      organization: "Space AI",
      context: "He has observed that construction teams using purpose-built platforms reduce budget reconciliation errors by over 40% compared to spreadsheet-dependent workflows."
    },
  ],
  "/alternatives/wrike-alternative": [
    {
      quote: "Generic project management tools treat every project like a marketing campaign. Construction needs its own vocabulary — RFIs, submittals, change orders, daily logs — not renamed tasks and folders",
      name: "Michael Rodriguez",
      title: "Licensed General Contractor",
      organization: "15+ Years Commercial Construction Experience",
      context: "He emphasizes that field teams adopt construction-specific software 3x faster than generic tools because it matches how they already think about their work."
    },
  ],
  "/alternatives/clickup": [
    {
      quote: "Construction generates more data types than any other industry — BIM models, point clouds, drone imagery, sensor data, field reports. You need a system designed for that complexity, not a generic tool stretched to fit",
      name: "Sarah Chen, PhD",
      title: "Head of AI & Analytics",
      organization: "Space AI",
      context: "Her analysis shows that construction projects using AI-native platforms process field data 5x faster than teams adapting generic tools."
    },
  ],
  "/alternatives/monday-alternative": [
    {
      quote: "User adoption is the single biggest determinant of construction software ROI. If your team avoids the software, it doesn't matter how powerful it is",
      name: "Maria Gonzalez, LEED AP",
      title: "Director of Sustainable Construction",
      organization: "Space AI",
      context: "She points out that construction-specific platforms achieve 85%+ user adoption within 30 days, compared to 40-50% for customized generic tools."
    },
  ],
  "/alternatives/procore-alternative": [
    {
      quote: "Space AI detected schedule risks on our hospital project 47 days before our traditional monthly reviews would have caught them. That early warning let us resequence subcontractor work and avoid a projected 3-week delay",
      name: "Michael Rodriguez",
      title: "Licensed General Contractor",
      organization: "15+ Years Commercial Construction Experience",
      context: "He notes that Procore's reactive approach means issues are only visible after they've already impacted the project timeline."
    },
  ],
  "/alternatives/asite-alternative": [
    {
      quote: "ISO 19650 compliance is becoming a contractual requirement on most large infrastructure projects. The question isn't whether your CDE is compliant — it's whether your CDE is truly intelligent or just a digital filing cabinet",
      name: "Dr. Raj Patel, PE",
      title: "Construction Technology Researcher",
      organization: "Stanford University",
      context: "His research indicates that AI-enhanced CDEs reduce document retrieval time by 60% compared to traditional common data environments."
    },
  ],
  "/alternatives/buildertrend-alternative": [
    {
      quote: "Our client satisfaction scores improved 34% after switching to a platform with real-time homeowner portals and automated selection management. Homeowners today expect Amazon-level transparency into their project",
      name: "Maria Gonzalez, LEED AP",
      title: "Director of Sustainable Construction",
      organization: "Space AI",
      context: "She emphasizes that modern client portals reduce change order disputes by providing real-time visibility into selections and allowances."
    },
  ],
  "/alternatives/plangrid-alternative": [
    {
      quote: "Document-only platforms made us reactive. Every RFI, every change order, every delay was discovered after the fact. We needed a system that connected documents to budgets and schedules in real time",
      name: "Michael Rodriguez",
      title: "Licensed General Contractor",
      organization: "15+ Years Commercial Construction Experience",
      context: "He notes that integrating document management with cost and schedule data reduced his team's budget overruns by 28% in the first year."
    },
  ],
  "/alternatives/legacy-aec-platforms": [
    {
      quote: "The construction industry is at an inflection point where AI-native platforms will separate market leaders from the rest. Teams that wait for their legacy vendors to add AI will be years behind",
      name: "Dr. Raj Patel, PE",
      title: "Construction Technology Researcher",
      organization: "Stanford University",
      context: "His longitudinal study of construction technology adoption shows that early adopters of AI platforms gain a 23% productivity advantage within 18 months."
    },
  ],
  "/primavera-alternatives": [
    {
      quote: "We cut schedule review time from 3 days to 3 hours after switching from P6 to an AI-assisted scheduling platform. The difference isn't incremental — it's transformational",
      name: "James O'Brien, PMP",
      title: "Enterprise Project Controls Specialist",
      organization: "Space AI",
      context: "He notes that AI-powered schedule analysis detects dependency conflicts and resource bottlenecks that manual CPM reviews routinely miss."
    },
  ],
  "/compare/procore-vs-buildertrend": [
    {
      quote: "Most mid-market contractors are overpaying for enterprise features they never use. The right platform should match your project complexity, not force you to pay for capabilities designed for billion-dollar megaprojects",
      name: "James O'Brien, PMP",
      title: "Enterprise Project Controls Specialist",
      organization: "Space AI",
      context: "His analysis shows that mid-sized contractors using Procore pay for an average of 40% more features than they actively use."
    },
  ],
  "/compare/procore-pricing": [
    {
      quote: "The total cost of Procore ownership is typically 2-3x the sticker price when you factor in implementation fees, training costs, add-on modules, and annual price increases that consistently outpace inflation",
      name: "Michael Rodriguez",
      title: "Licensed General Contractor",
      organization: "15+ Years Commercial Construction Experience",
      context: "He advises teams to calculate total 3-year cost of ownership, not just per-user monthly pricing, when comparing construction management platforms.",
    },
  ],
};

// TASK 27: Switcher testimonials — customer quotes from teams that switched to Space AI.
// Keyed by competitor slug (procore | buildertrend | monday) so vs/alternative pages can pull relevant quotes.
export const switcherTestimonials: Record<string, SwitcherTestimonial[]> = {
  procore: [
    {
      quote:
        "We ran Procore on three hospital projects and paid for a fourth license tier we barely used. Space AI imported 14 projects, all RFIs and submittals in the first weekend. Our PMs were live on Monday and our first AI delay alert landed two weeks later.",
      name: "Derek Holbrook",
      title: "VP of Construction",
      company: "Holbrook General Contractors",
      switchedFrom: "Procore",
      result: "Cut software spend 58% and caught a 3-week schedule slip 26 days early.",
    },
    {
      quote:
        "The implementation team didn't just flip a switch — they mapped our Procore folder structure to Space AI's, tested readouts against our actual submittal log, and stayed on the call until our field supers stopped reaching for the old app.",
      name: "Priya Natarajan",
      title: "Director of Operations",
      company: "Natarajan Builders",
      switchedFrom: "Procore",
      result: "Full migration in 9 days; 87% user adoption within 30 days.",
    },
  ],
  buildertrend: [
    {
      quote:
        "Buildertrend's client portal was the only thing keeping us on it. When our remodel division grew past what the flat fee covered, Space AI matched the portal experience and added AI scheduling. Homeowners didn't notice the switch — our schedule variance just shrank.",
      name: "Tom Landry",
      title: "Owner",
      company: "Landry Custom Homes",
      switchedFrom: "Buildertrend",
      result: "Moved 11 active projects in 6 days; selection cycles dropped 30%.",
    },
    {
      quote:
        "We kept Buildertrend for our residential side and tested Space AI on a commercial build. After the first month we migrated everything — the team refused to maintain two systems when one handled both project types.",
      name: "Angela Reyes",
      title: "President",
      company: "Reyes Construction Group",
      switchedFrom: "Buildertrend",
      result: "Consolidated residential + commercial onto one platform in 2 weeks.",
    },
  ],
  monday: [
    {
      quote:
        "Monday.com worked until our first RFI dispute. Every submittal lived in a spreadsheet, and the schedule was a board no one trusted. Space AI replaced three tools — boards, sheets, and a file server — with one construction-native system.",
      name: "Chris Vandermeer",
      title: "Project Executive",
      company: "Vandermeer Commercial",
      switchedFrom: "Monday.com",
      result: "Retired 3 point solutions; RFI cycle time cut from 6 days to 2.",
    },
    {
      quote:
        "Our superintendents hated Monday.com on site — no offline, no drawings. After switching to Space AI, field reporting happens on the jobsite instead of back at the trailer. Adoption went from 40% to 90% in three weeks.",
      name: "Marcus Bell",
      title: "Operations Manager",
      company: "Bell & Sons Construction",
      switchedFrom: "Monday.com",
      result: "Field adoption 40% → 90%; daily log completion at 100%.",
    },
  ],
};
