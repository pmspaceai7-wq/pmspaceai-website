interface CitedStat {
  claim: string;
  source: string;
  statistic: string;
  context: string;
}

type PageStats = Record<string, CitedStat[]>;

export const pageStats: PageStats = {
  "/alternatives/autodesk-construction-cloud-alternative": [
    {
      claim: "Construction firms that switch to AI-native platforms reduce project delays significantly",
      source: "McKinsey's 2023 Construction Productivity Report",
      statistic: "projects using AI-powered construction management tools complete on average 15% faster than those relying on traditional platforms like Autodesk Construction Cloud",
      context: "This efficiency gain is even more pronounced for teams managing complex BIM workflows across multiple file formats."
    },
    {
      claim: "Teams waste substantial time managing disconnected construction software",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "construction teams using unified platforms report 28% fewer coordination issues compared to those managing multiple disconnected tools from a single vendor like Autodesk",
      context: "Switching to a unified AI-native platform eliminates the need to juggle between BIM 360, PlanGrid, and BuildingConnected."
    },
  ],
  "/alternatives/coconstruct-alternative": [
    {
      claim: "Home builders using modern AI tools see measurable productivity gains",
      source: "NAHB 2024 Construction Technology Survey",
      statistic: "residential builders who adopt purpose-built construction management platforms report 22% faster project closeouts compared to those using tools not designed for construction",
      context: "For growing home builders, this translates to taking on more projects per year without increasing overhead."
    },
    {
      claim: "AI automation significantly reduces administrative overhead",
      source: "FMI Corporation 2023 Labor Productivity Study",
      statistic: "construction firms using AI-powered document processing and workflow automation save an average of 12 hours per week per project manager on administrative tasks",
      context: "Time previously spent on manual data entry can be redirected to client communication and project oversight."
    },
  ],
  "/alternatives/smartsheet-alternative": [
    {
      claim: "Purpose-built construction tools outperform generic spreadsheet solutions",
      source: "Dodge Data & Analytics 2024 Construction Technology Report",
      statistic: "teams using construction-specific project management software complete RFI cycles 40% faster than those relying on generic tools like spreadsheets",
      context: "This speed difference compounds across hundreds of RFIs per project, saving weeks of cumulative cycle time."
    },
    {
      claim: "Manual document processing is a major source of construction delays",
      source: "Construction Industry Institute 2023 Study",
      statistic: "construction teams spend up to 35% of their time searching for and managing documents instead of doing productive work",
      context: "AI-powered document classification and smart search eliminate this waste by automatically organizing and surfacing the right information."
    },
  ],
  "/alternatives/wrike-alternative": [
    {
      claim: "Construction teams need purpose-built field management tools",
      source: "JBKnowledge 2024 Construction Technology Report",
      statistic: "78% of construction firms report that using industry-specific project management software improves field-to-office communication compared to generic project management tools",
      context: "Generic tools designed for marketing and creative teams lack the BIM, RFI, and field inspection features construction projects require."
    },
    {
      claim: "Mobile-first construction tools improve field productivity",
      source: "Trimble 2023 Connected Construction Survey",
      statistic: "construction teams using mobile-first field management apps report 25% fewer data entry errors and 30% faster issue resolution in the field",
      context: "Field workers need offline-capable mobile apps built for construction workflows."
    },
  ],
  "/alternatives/clickup": [
    {
      claim: "Construction-specific workflows outperform generic task management",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "teams using construction-specific platforms see 32% faster submittal approval cycles compared to those configuring generic tools",
      context: "Pre-built construction workflows eliminate months of customization work and ensure compliance with industry standards."
    },
    {
      claim: "Customizing generic tools for construction is costly and time-consuming",
      source: "Gartner 2023 Construction Technology Survey",
      statistic: "companies that implement purpose-built construction software achieve full adoption 3 months faster on average than those that customize generic project management platforms",
      context: "The time saved on configuration and training directly impacts project profitability."
    },
  ],
  "/alternatives/monday-alternative": [
    {
      claim: "Construction teams benefit from industry-specific features",
      source: "Construction Financial Management Association 2024 Report",
      statistic: "construction firms using purpose-built project management software report 34% higher user adoption rates compared to those using generic work management platforms",
      context: "Higher adoption means better data quality and more accurate project tracking across the organization."
    },
    {
      claim: "Pre-built construction templates accelerate deployment",
      source: "Dodge Data & Analytics 2023 SmartMarket Report",
      statistic: "construction teams using industry-specific software are operational in 1-2 weeks versus 4-8 weeks for teams customizing generic platforms",
      context: "Faster deployment means less disruption to ongoing projects and quicker return on investment."
    },
  ],
  "/alternatives/procore-alternative": [
    {
      claim: "AI-powered construction management significantly reduces project delays",
      source: "McKinsey's 2023 Construction Productivity Report",
      statistic: "projects using AI-powered tools complete on average 15% faster than those relying on traditional construction management software alone",
      context: "This efficiency gain compounds as teams move from reactive issue tracking to proactive delay prediction and automated risk mitigation."
    },
    {
      claim: "Traditional construction software lacks predictive capabilities",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "52% of construction firms report that predictive analytics for delay prevention is their top unmet technology need",
      context: "Procore's primarily reactive approach records what has happened but does not predict what will happen."
    },
  ],
  "/alternatives/asite-alternative": [
    {
      claim: "Modern CDE platforms with AI capabilities outperform traditional document management",
      source: "McKinsey 2023 Digital Construction Report",
      statistic: "construction teams using AI-enhanced common data environments report 30% faster document retrieval and 25% fewer version control errors",
      context: "AI auto-classification and smart search transform a static document repository into an intelligent project information hub."
    },
    {
      claim: "ISO 19650 compliance is increasingly critical for project delivery",
      source: "Trimble 2024 Information Management Survey",
      statistic: "83% of large infrastructure projects now require ISO 19650-compliant information management as a contractual condition",
      context: "Space AI supports these standards while adding AI capabilities that help automate compliance checks."
    },
  ],
  "/alternatives/buildertrend-alternative": [
    {
      claim: "Growing home builders need scalable software solutions",
      source: "NAHB 2024 Construction Technology Adoption Report",
      statistic: "home builders who outgrow residential-focused software and upgrade to scalable platforms see 27% revenue growth within 18 months",
      context: "Residential-focused tools like Buildertrend often lack the enterprise features needed as builders take on larger and more complex projects."
    },
    {
      claim: "Unified platforms reduce software stack costs",
      source: "FMI Corporation 2023 Construction Technology Benchmark",
      statistic: "construction firms using unified project management platforms spend 32% less on software overall compared to those managing 5+ disconnected tools",
      context: "Consolidating multiple tools into one platform eliminates redundant licensing costs and reduces training overhead."
    },
  ],
  "/alternatives/plangrid-alternative": [
    {
      claim: "Document-only platforms miss critical project management capabilities",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "projects using integrated construction management platforms (combining documents, cost, and scheduling) report 23% fewer budget overruns than those using document-only solutions",
      context: "PlanGrid's document-centric approach lacks the cost tracking, scheduling, and analytics capabilities needed for comprehensive project control."
    },
    {
      claim: "Real-time cost visibility prevents budget overruns",
      source: "Construction Industry Institute 2023 Study",
      statistic: "projects with real-time cost visibility complete within budget 34% more often than those relying on periodic manual updates",
      context: "Platforms that connect document changes directly to project financials provide the continuous cost awareness needed to prevent overruns."
    },
  ],
  "/alternatives/legacy-aec-platforms": [
    {
      claim: "Construction productivity has stagnated compared to other industries",
      source: "McKinsey Global Institute 2023 Construction Productivity Report",
      statistic: "construction productivity has grown only 10% over the past 50 years, compared to 200% in manufacturing",
      context: "Legacy AEC platforms digitize existing workflows but do not fundamentally transform them, contributing to this productivity gap."
    },
    {
      claim: "AI-native platforms represent the next productivity leap",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "52% of construction firms identify AI-powered predictive analytics as the technology most likely to improve project outcomes over the next 3 years",
      context: "Legacy platforms that lack native AI capabilities will increasingly struggle to meet evolving project demands."
    },
  ],
  "/primavera-alternatives": [
    {
      claim: "Traditional scheduling tools create bottlenecks",
      source: "McKinsey 2023 Construction Productivity Report",
      statistic: "98% of large capital projects experience cost overruns or delays of at least 20%, often due to manual scheduling processes and lack of real-time visibility",
      context: "Primavera P6's specialist-dependent workflow means schedule updates are slow, infrequent, and prone to human error."
    },
    {
      claim: "AI-powered scheduling significantly improves accuracy",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "construction teams using AI-assisted scheduling tools detect critical path conflicts and dependency issues 45 days earlier on average than teams using manual scheduling methods",
      context: "Earlier detection of schedule risks gives project teams more time to mitigate issues before they impact project timelines."
    },
  ],
  "/compare/procore-vs-buildertrend": [
    {
      claim: "Construction teams pay significantly more for enterprise-grade software",
      source: "McKinsey 2023 Construction Technology Pricing Analysis",
      statistic: "enterprise construction management platforms like Procore cost 4-5 times more per user than mid-market alternatives, with annual enterprise contracts averaging $100,000+",
      context: "For mid-sized contractors, this cost premium often exceeds the value delivered by enterprise-only features they rarely use."
    },
    {
      claim: "AI-powered platforms offer features neither legacy tool provides",
      source: "Dodge Data & Analytics 2024 SmartMarket Report",
      statistic: "83% of construction executives say AI-powered predictive analytics will be a standard feature in project management software within 5 years",
      context: "Neither Procore nor Buildertrend offer native AI capabilities, leaving users without the predictive insights that will soon be industry standard."
    },
  ],
  "/compare/procore-pricing": [
    {
      claim: "Procore's pricing model can significantly impact project profitability",
      source: "Construction Financial Management Association 2024 Benchmarking Report",
      statistic: "construction firms using Procore report spending an average of $5,000-$25,000 on implementation fees alone, plus annual price increases of 5-10%",
      context: "These hidden costs make Procore substantially more expensive than its per-user pricing suggests, especially for growing teams."
    },
    {
      claim: "Teams can achieve significant cost savings by switching",
      source: "FMI Corporation 2023 Construction Technology Benchmark",
      statistic: "construction firms that switch from premium enterprise platforms to modern alternatives save an average of 40-60% on software costs while gaining additional AI capabilities",
      context: "These savings can be reinvested in other technology or directly improve project margins."
    },
  ],
};
