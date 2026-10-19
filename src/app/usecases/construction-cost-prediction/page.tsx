// Task 64: Use Case Story - Predictive Cost Management
// SEO Target: "construction cost management", "AI cost forecasting", "budget management construction"

import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Target,
  BarChart3,
  PieChart,
  Calculator,
  FileText,
  Zap,
  Shield,
  Brain,
  LineChart,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Predictive Cost Management for Construction | Space AI Use Case",
  description:
    "Forecast construction costs with 95% accuracy using AI. Learn how predictive analytics eliminates budget overruns and improves financial control.",
  keywords:
    "construction cost management, AI cost forecasting, budget management construction, predictive cost analytics, construction financial management, cost to complete forecasting",
  openGraph: {
    title: "Predictive Cost Management for Construction | Space AI",
    description:
      "Forecast construction costs with 95% accuracy using AI-powered predictive analytics.",
    type: "article",
    url: "https://pmspace.ai/usecases/construction-cost-prediction/",
  },
  alternates: {
    canonical: "https://pmspace.ai/usecases/construction-cost-prediction/",
  },
};

const industryProblems = [
  { stat: "85%", label: "of construction projects exceed budget" },
  { stat: "28%", label: "average cost overrun on large projects" },
  { stat: "6-8 weeks", label: "typical lag in detecting cost issues" },
  { stat: "$1.2M", label: "average overrun on $10M projects" },
];

const aiCapabilities = [
  {
    title: "Cost at Completion Forecasting",
    description: "AI predicts final project cost based on current spending patterns, change order trends, and remaining work complexity.",
    accuracy: "95% accuracy within 5% of final cost",
    timing: "Updated daily with new data",
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "Change Order Prediction",
    description: "Machine learning identifies scope areas likely to generate change orders based on historical patterns and project characteristics.",
    accuracy: "80% prediction of change-prone areas",
    timing: "Early warning during design phase",
    icon: <AlertTriangle className="w-8 h-8" />,
  },
  {
    title: "Contingency Optimization",
    description: "AI recommends optimal contingency allocation based on project risk profile and historical accuracy of estimates.",
    accuracy: "40% reduction in unused contingency",
    timing: "Continuous rebalancing",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Cash Flow Forecasting",
    description: "Predict monthly cash requirements based on schedule, committed costs, and payment terms.",
    accuracy: "90% accuracy on 90-day forecasts",
    timing: "Rolling 12-month projection",
    icon: <LineChart className="w-8 h-8" />,
  },
];

const costCategories = [
  {
    category: "Labor",
    traditional: "Hours tracked weekly, overruns discovered at billing",
    withAI: "Real-time productivity tracking with crew-level forecasting",
    improvement: "35% earlier detection of labor overruns",
  },
  {
    category: "Materials",
    traditional: "Invoice matching, delayed reconciliation",
    withAI: "AI matches deliveries to POs, predicts price escalations",
    improvement: "90% reduction in invoice discrepancies",
  },
  {
    category: "Subcontractors",
    traditional: "Pay app review, change order negotiations",
    withAI: "Automated pay app verification, contract compliance monitoring",
    improvement: "50% faster pay app processing",
  },
  {
    category: "Equipment",
    traditional: "Monthly rentals, unclear utilization",
    withAI: "Usage-based tracking, optimal rent vs. buy analysis",
    improvement: "25% reduction in equipment costs",
  },
  {
    category: "Change Orders",
    traditional: "Reactive negotiation, disputed scope",
    withAI: "Proactive scope risk identification, automated documentation",
    improvement: "30% reduction in change order disputes",
  },
];

const evmMetrics = [
  {
    metric: "CPI (Cost Performance Index)",
    description: "Earned value / Actual cost",
    aiEnhancement: "AI predicts future CPI based on trend analysis",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    metric: "EAC (Estimate at Completion)",
    description: "Projected final cost",
    aiEnhancement: "Machine learning improves EAC accuracy by 40%",
    icon: <Calculator className="w-6 h-6" />,
  },
  {
    metric: "VAC (Variance at Completion)",
    description: "Budget minus EAC",
    aiEnhancement: "Early warning when variance exceeds thresholds",
    icon: <AlertTriangle className="w-6 h-6" />,
  },
  {
    metric: "TCPI (To Complete Performance Index)",
    description: "Required efficiency to meet budget",
    aiEnhancement: "AI assesses feasibility of meeting TCPI targets",
    icon: <Target className="w-6 h-6" />,
  },
];

const caseStudy = {
  company: "National Healthcare Builder",
  projectType: "Hospital Expansion",
  projectValue: "$125M",
  challenge: "Complex healthcare project with strict infection control requirements, multiple phases, and regulatory compliance creating high change order potential",
  results: [
    { metric: "2.8%", label: "Final cost variance (industry avg: 12%)" },
    { metric: "95%", label: "EAC accuracy at 30% completion" },
    { metric: "$4.2M", label: "Contingency savings returned" },
    { metric: "45%", label: "Reduction in budget revision meetings" },
  ],
  quote: "Space AI predicted our mechanical scope would exceed budget by $1.8M when we were only 20% through rough-in. That early warning gave us time to value engineer without impacting the schedule—something that would have been a crisis discovery traditionally.",
  quoteName: "VP of Construction",
  quoteCompany: "National Healthcare Builder",
};

const features = [
  {
    title: "Real-Time Cost Dashboard",
    items: ["Live budget vs. actual tracking", "Drill-down by cost code/phase", "Committed vs. spent analysis", "Forecast trending charts"],
  },
  {
    title: "AI Cost Analytics",
    items: ["Predictive EAC/ETC calculations", "Anomaly detection in spending", "Productivity-based labor forecasts", "Material price escalation alerts"],
  },
  {
    title: "Change Order Management",
    items: ["Risk-based scope tracking", "Automated COR documentation", "Trend analysis by trade/cause", "Settlement forecasting"],
  },
  {
    title: "Financial Reporting",
    items: ["Owner/lender report generation", "Earned value dashboards", "Cash flow projections", "Audit-ready documentation"],
  },
];

const faqs = [
  {
    question: "How does AI improve cost forecasting accuracy?",
    answer: "Traditional cost forecasting relies on percentage-complete estimates that often lag reality. Space AI AI improves accuracy by: analyzing spending velocity vs. planned curves, learning from historical project patterns with similar characteristics, incorporating productivity data from daily reports, factoring in RFI/change order trends that indicate future costs, and adjusting for weather and schedule impacts. This multi-factor analysis achieves 95% EAC accuracy compared to 70-80% with traditional methods.",
  },
  {
    question: "Can Space AI predict change orders before they happen?",
    answer: "Yes, Space AI uses pattern recognition to identify scope areas with high change order probability. The AI analyzes: historical change order data from similar projects, bid completeness and specification clarity, design complexity indicators, contractor performance patterns, and owner change history. This enables proactive risk mitigation during design and early construction phases, often preventing change orders entirely or enabling better pricing through early identification.",
  },
  {
    question: "How does Space AI handle earned value management?",
    answer: "Space AI provides comprehensive EVM with AI enhancement: automatic calculation of CPI, SPI, EAC, ETC, VAC, and TCPI; trend analysis that predicts future performance indices; AI-powered assessment of whether TCPI targets are achievable; integration with schedule for true earned value calculation; and owner-ready EVM reporting packages. The AI layer adds predictive capabilities that transform EVM from lagging indicators to leading intelligence.",
  },
  {
    question: "What integrations does Space AI offer for cost management?",
    answer: "Space AI integrates with major financial systems including: accounting software (Sage, Vista, Foundation, QuickBooks); ERP systems (Oracle, SAP); procurement platforms for PO and invoice data; payroll systems for labor cost actuals; equipment rental tracking systems; and banking for payment reconciliation. These integrations ensure cost data flows automatically without manual entry, enabling real-time accuracy.",
  },
  {
    question: "How does contingency optimization work?",
    answer: "Space AI AI continuously evaluates your contingency allocation: analyzing risk profiles across different scope areas, comparing remaining contingency to predicted risk exposure, recommending reallocation as risks are retired or emerge, tracking contingency draw-down vs. project completion, and benchmarking against similar project contingency usage. This dynamic approach typically returns 30-40% more contingency than static allocation methods.",
  },
  {
    question: "Can Space AI help with lender reporting?",
    answer: "Yes, Space AI streamlines construction lender communication with: automated draw request preparation with AIA formatting, cost certification documentation, stored materials tracking and verification, budget reallocation tracking with explanations, progress photo integration, and inspection scheduling and reporting. Many lenders accept Space AI reports directly, reducing administrative overhead and accelerating funding.",
  },
];

export default function PredictiveCostManagementPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              Use Case
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
              AI-Powered
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
            Predictive Cost Management
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Forecast construction costs with 95% accuracy. AI-powered cost management 
            that eliminates budget surprises and maximizes financial control.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/construction-software-demo/"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              See Cost Management Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features/"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Problems */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">The Cost Control Challenge</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Budget overruns are the norm in construction—but they don&apos;t have to be with 
            AI-powered forecasting.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {industryProblems.map((item, idx) => (
              <div
                key={idx}
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-red-400 mb-2">{item.stat}</div>
                <p className="text-white/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI Cost Intelligence</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Machine learning that transforms cost management from reactive to predictive.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-xl text-green-400 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="text-green-400">{item.accuracy}</span>
                      <span className="text-blue-400">{item.timing}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Category Comparison */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI Impact by Cost Category</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            See how AI transforms cost management across every category.
          </p>
          <div className="space-y-4">
            {costCategories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="p-5 bg-white/5 border-r border-white/10 flex items-center">
                    <h3 className="font-semibold">{item.category}</h3>
                  </div>
                  <div className="p-5 bg-red-500/5 border-r border-white/10">
                    <div className="text-xs text-red-400 uppercase tracking-wider mb-2">Traditional</div>
                    <p className="text-white/70 text-sm">{item.traditional}</p>
                  </div>
                  <div className="p-5 bg-green-500/5 border-r border-white/10">
                    <div className="text-xs text-green-400 uppercase tracking-wider mb-2">With Space AI AI</div>
                    <p className="text-white/70 text-sm">{item.withAI}</p>
                  </div>
                  <div className="p-5 flex items-center justify-center">
                    <p className="text-green-400 text-sm font-medium text-center">{item.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVM Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">AI-Enhanced Earned Value Management</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Traditional EVM metrics supercharged with predictive AI capabilities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evmMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.metric}</h3>
                <p className="text-white/50 text-xs mb-3">{item.description}</p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-green-400 text-sm">{item.aiEnhancement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
              Case Study
            </span>
            <h2 className="text-3xl font-bold mt-6 mb-4">{caseStudy.company}</h2>
            <p className="text-white/60">
              {caseStudy.projectType} • {caseStudy.projectValue}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">The Challenge</h3>
            <p className="text-white/70">{caseStudy.challenge}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {caseStudy.results.map((result, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-green-400 mb-2">{result.metric}</div>
                <p className="text-white/70 text-sm">{result.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8">
            <blockquote className="text-lg italic text-white/90 mb-4">
              &ldquo;{caseStudy.quote}&rdquo;
            </blockquote>
            <p className="text-white/60">
              — {caseStudy.quoteName}, {caseStudy.quoteCompany}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Cost Management Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-white/70 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Eliminate Budget Surprises?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join construction teams achieving 95% cost forecasting accuracy with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construction-software-demo/"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Schedule Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing/"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Use Cases */}
      <section className="container mx-auto px-4 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/usecases/ai-construction-scheduling/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
            >
              <Brain className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2">AI Schedule Optimization</h3>
              <p className="text-white/60 text-sm">Predict and prevent schedule delays.</p>
            </Link>
            <Link
              href="/usecases/reduce-construction-rfi-delays/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
            >
              <FileText className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">Reduce RFI Delays</h3>
              <p className="text-white/60 text-sm">Cut RFI response times by 65%.</p>
            </Link>
            <Link
              href="/usecases/"
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors"
            >
              <AlertTriangle className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="font-semibold mb-2">Change Order Management</h3>
              <p className="text-white/60 text-sm">Streamline change order workflows.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />
    </div>
  );
}
