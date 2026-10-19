// src/app/construction-cost-management-software/page.tsx
// TASK 29: Construction Cost Management Software Page
// Target: "construction cost management software", "construction cost tracking"

import { Metadata } from "next";
import Link from "next/link";
import { 
  DollarSign, CheckCircle, Star, ArrowRight, Zap, Shield, 
  TrendingUp, Clock, BarChart3, Sparkles, Users, Calculator,
  Rocket, Target, PieChart, AlertTriangle, Receipt, Wallet,
  LineChart, Building2, Percent, FileSpreadsheet, Layers, Ban
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Cost Management Software | Space AI | Free Tier",
  description: "Track every dollar with AI construction cost management. Real-time budget monitoring, job costing, change orders, and predictive forecasting. Free tier available.",
  keywords: [
    "construction cost management software",
    "construction cost tracking software",
    "construction budgeting software",
    "job costing software construction",
    "construction cost control",
    "construction financial management",
    "construction project cost management",
    "construction cost estimating software",
    "change order management software",
    "construction accounting software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-cost-management-software/",
  },
  openGraph: {
    title: "Construction Cost Management Software | Space AI | Free Tier",
    description: "Track every dollar. AI-powered construction cost management with real-time forecasting. Free tier available.",
    url: "https://pmspace.ai/construction-cost-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/cost-management-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Cost Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Cost Management Software | Space AI",
    description: "Never go over budget again with AI-powered cost forecasting. Free tier available.",
  },
};

// Cost management features
const costFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Budget Tracking",
    description: "See exactly where your project stands financially at any moment. Live dashboards show committed costs, actual costs, and projected final costs.",
    benefit: "Always know your position",
  },
  {
    icon: Sparkles,
    title: "AI Cost Forecasting",
    description: "Machine learning analyzes spending patterns and predicts final project costs. Get early warnings before budgets slip.",
    benefit: "Predict overruns 6 weeks early",
  },
  {
    icon: Calculator,
    title: "Job Costing",
    description: "Track costs by project, phase, cost code, or cost type. See exactly where money is being spent and compare to budgeted amounts.",
    benefit: "Pinpoint cost drivers",
  },
  {
    icon: Receipt,
    title: "Change Order Management",
    description: "Capture, price, and approve change orders with full audit trails. Track their impact on overall project budget.",
    benefit: "Control scope creep",
  },
  {
    icon: FileSpreadsheet,
    title: "Cost Reporting",
    description: "Generate professional cost reports for owners and stakeholders. Export to Excel, PDF, or integrate with accounting systems.",
    benefit: "Impress stakeholders",
  },
  {
    icon: Wallet,
    title: "Payment Applications",
    description: "Create pay applications (SOV, G702/G703) directly from cost data. Track billings against budget with automatic calculations.",
    benefit: "Faster billing cycles",
  },
];

// Key metrics
const keyMetrics = [
  {
    metric: "98%",
    label: "Budget accuracy",
    description: "AI forecasts within 2% of final costs",
  },
  {
    metric: "6 weeks",
    label: "Early warning",
    description: "Average lead time on budget issue detection",
  },
  {
    metric: "35%",
    label: "Faster close-out",
    description: "Reduction in financial close-out time",
  },
  {
    metric: "$2.3M",
    label: "Average savings",
    description: "Cost savings per $100M in managed spend",
  },
];

// Cost code categories
const costCodeCategories = [
  { code: "01", name: "General Requirements", icon: Building2 },
  { code: "02", name: "Site Work", icon: Layers },
  { code: "03", name: "Concrete", icon: Building2 },
  { code: "04", name: "Masonry", icon: Building2 },
  { code: "05", name: "Metals", icon: Building2 },
  { code: "06", name: "Wood & Plastics", icon: Building2 },
  { code: "07", name: "Thermal & Moisture", icon: Building2 },
  { code: "08", name: "Doors & Windows", icon: Building2 },
];

// Comparison data
const comparisonData = [
  { feature: "Real-Time Budget Tracking", pmspace: true, procore: true, sage: true, foundation: false },
  { feature: "AI Cost Forecasting", pmspace: true, procore: false, sage: false, foundation: false },
  { feature: "Change Order Management", pmspace: true, procore: true, sage: true, foundation: true },
  { feature: "Job Cost Reporting", pmspace: true, procore: true, sage: true, foundation: true },
  { feature: "Pay Application (G702/G703)", pmspace: true, procore: true, sage: true, foundation: true },
  { feature: "Predictive Analytics", pmspace: true, procore: false, sage: false, foundation: false },
  { feature: "Mobile Cost Entry", pmspace: true, procore: true, sage: false, foundation: false },
  { feature: "Integration with Accounting", pmspace: true, procore: true, sage: true, foundation: true },
  { feature: "Starting Price", pmspace: "Free", procore: "$833/mo", sage: "$500/mo", foundation: "$399/mo" },
];

// FAQ data
const faqData = [
  {
    question: "How does AI cost forecasting work?",
    answer: "Space AI's AI analyzes your current spending patterns, compares them to historical data from similar projects, and considers factors like weather delays, material price trends, and labor availability. It then generates probabilistic forecasts showing best-case, likely, and worst-case final costs — giving you weeks of advance warning on potential budget issues.",
  },
  {
    question: "Can I track costs by CSI MasterFormat codes?",
    answer: "Yes, Space AI supports full CSI MasterFormat (2018 Edition) cost coding, as well as custom cost code structures. You can track costs at any level of detail — from division level down to individual cost codes — and create custom codes for your specific needs.",
  },
  {
    question: "How does change order tracking work?",
    answer: "Space AI captures change orders from creation through approval, tracking pricing, scope, schedule impact, and approvals. Each CO is linked to related documents, RFIs, and submittals. The budget automatically updates when COs are approved, so you always see accurate project totals.",
  },
  {
    question: "Does Space AI integrate with accounting software?",
    answer: "Yes, Space AI integrates with Sage 300 CRE, Foundation Software, QuickBooks, Vista, Viewpoint, CMiC, and other construction accounting systems. Cost data syncs automatically so you don't have to re-enter information.",
  },
  {
    question: "Can I create G702/G703 pay applications?",
    answer: "Yes, Space AI generates AIA G702/G703 pay applications directly from your Schedule of Values and cost data. Applications are automatically calculated based on percent complete, stored materials, and retainage. You can also create custom pay app formats.",
  },
  {
    question: "How do I handle cost adjustments and transfers?",
    answer: "Space AI tracks all cost adjustments with full audit trails. You can transfer costs between cost codes, phases, or projects with proper documentation. Budget revisions are tracked separately from original contract amounts.",
  },
  {
    question: "What reports are available?",
    answer: "Space AI offers comprehensive cost reports including Job Cost Reports, Budget vs. Actual, Cost to Complete, Cash Flow Projections, Earned Value Analysis, Change Order Logs, and Custom Executive Dashboards. All reports can be exported to Excel, PDF, or scheduled for automatic distribution.",
  },
  {
    question: "Is there a mobile app for field cost tracking?",
    answer: "Yes, Space AI's mobile app allows field staff to log time, materials, equipment usage, and daily costs directly from the job site. Photos and notes can be attached to cost entries. Data syncs to the project budget in real-time.",
  },
];

export default function ConstructionCostManagementPage() {
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
            "name": "Space AI Construction Cost Management",
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
              "ratingValue": "4.9",
              "reviewCount": "189",
              "bestRating": "5",
              "worstRating": "1",
            },
            "featureList": [
              "Real-Time Budget Tracking",
              "AI Cost Forecasting",
              "Job Costing",
              "Change Order Management",
              "Pay Applications",
              "Cost Reporting",
              "Accounting Integration",
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            {/* Floating money icons */}
            {[DollarSign, TrendingUp, BarChart3, PieChart].map((Icon, i) => (
              <div
                key={i}
                className="absolute text-emerald-500/10 animate-float"
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
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">AI-Powered Financial Control</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Construction Cost
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
                  Management Software
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Track every dollar in real-time. AI-powered forecasting predicts budget overruns 
                6 weeks early so you can take action before it&apos;s too late.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Real-time tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>AI forecasting</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Change order tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Accounting integration</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/25"
                >
                  <DollarSign className="w-5 h-5" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  See Cost Forecasting Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {keyMetrics.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold text-emerald-400">{stat.metric}</div>
                    <div className="text-white font-medium text-sm">{stat.label}</div>
                    <div className="text-white/50 text-xs mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-20 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Stop Budget Surprises
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    Most contractors don&apos;t know they&apos;re over budget until it&apos;s too late. 
                    By the time monthly reports come in, the damage is done and margins are gone.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <AlertTriangle className="w-8 h-8 text-red-400" />
                      <div>
                        <div className="text-white font-medium">The $3.2 Trillion Problem</div>
                        <div className="text-white/60">80% of construction projects exceed their original budget</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                      <div>
                        <div className="text-white font-medium">The Space AI Solution</div>
                        <div className="text-white/60">AI predicts overruns 6 weeks early, so you can course-correct</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                    AI Cost Forecasting
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white">Original Budget</span>
                        <span className="text-white font-bold">$4,200,000</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-emerald-500/40 rounded-full" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white">Spent to Date</span>
                        <span className="text-white font-bold">$2,730,000</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-yellow-400">⚠️ AI Projected Final Cost</span>
                        <span className="text-yellow-400 font-bold">$4,380,000</span>
                      </div>
                      <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[104%] bg-yellow-500 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                      <div className="text-yellow-400 font-semibold mb-1">⚠️ Early Warning</div>
                      <div className="text-white/70 text-sm">
                        Projected 4.3% overage ($180K) due to steel price increases. 
                        Recommend value engineering in Phase 3 structural scope.
                      </div>
                    </div>
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
                Complete Cost Control
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Everything you need to track, forecast, and report construction costs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {costFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Compare Cost Management Solutions
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                See how Space AI stacks up against other construction cost management tools.
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-emerald-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-white/60">Procore</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-white/60">Sage 300</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-white/60">Foundation</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white/70">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.pmspace === 'boolean' ? (
                          row.pmspace ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" />
                          ) : (
                            <Ban className="w-5 h-5 text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-emerald-400 font-bold">{row.pmspace}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.procore === 'boolean' ? (
                          row.procore ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <Ban className="w-5 h-5 text-red-400/60 mx-auto" />
                          )
                        ) : (
                          <span className="text-white/40">{row.procore}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.sage === 'boolean' ? (
                          row.sage ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <Ban className="w-5 h-5 text-red-400/60 mx-auto" />
                          )
                        ) : (
                          <span className="text-white/40">{row.sage}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.foundation === 'boolean' ? (
                          row.foundation ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <Ban className="w-5 h-5 text-red-400/60 mx-auto" />
                          )
                        ) : (
                          <span className="text-white/40">{row.foundation}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Connects to Your Accounting System
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    No double entry. Space AI syncs with your accounting software so cost data 
                    flows seamlessly between field and office.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Sage 300 CRE",
                      "Foundation Software",
                      "Vista by Viewpoint",
                      "CMiC",
                      "QuickBooks",
                      "Xero",
                      "Jonas Construction",
                      "Spectrum by Dexter & Chaney",
                    ].map((system, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm">{system}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/integrations/"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium mt-6"
                  >
                    View All Integrations
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">How Sync Works</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Field captures cost", desc: "Time, materials, equipment logged in app" },
                      { step: "2", title: "Costs coded automatically", desc: "AI assigns job, phase, and cost codes" },
                      { step: "3", title: "Data syncs to accounting", desc: "Cost data flows to your accounting system" },
                      { step: "4", title: "Financials updated live", desc: "Job cost reports always current" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-white/60 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Professional Cost Reports
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Generate reports that impress owners and stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Budget vs Actual", description: "Compare budgeted to actual costs by code" },
                { title: "Cost to Complete", description: "Forecast remaining costs to finish" },
                { title: "Cash Flow", description: "Project cash needs by period" },
                { title: "Earned Value", description: "EV metrics (CPI, SPI, EAC)" },
                { title: "Change Order Log", description: "Track all COs and impacts" },
                { title: "Commitment Log", description: "POs and subcontracts" },
                { title: "Executive Dashboard", description: "High-level KPIs at a glance" },
                { title: "Custom Reports", description: "Build your own reports" },
              ].map((report, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
                  <BarChart3 className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="font-bold text-white mb-2">{report.title}</h3>
                  <p className="text-white/60 text-sm">{report.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Cost Management FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-teal-600/20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Take Control of Your Costs</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Never Get Caught by Budget Overruns Again
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Start tracking costs in real-time with AI-powered forecasting. 
                See the future of your project finances today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-2xl shadow-emerald-500/30"
                >
                  <DollarSign className="w-6 h-6" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="text-white/50 mt-6 text-sm">
                Free tier available • Integrates with your accounting system
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
