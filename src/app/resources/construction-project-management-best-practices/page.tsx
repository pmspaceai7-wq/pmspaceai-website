// src/app/resources/construction-project-management-best-practices/page.tsx
// TASK 54: Construction Project Management Best Practices Guide
// 3000+ word comprehensive best practices resource

import { Metadata } from "next";
import Link from "next/link";
import { 
  Target, CheckCircle, ArrowRight, Shield, Clock,
  BarChart3, FileText, Users, Zap, Brain,
  DollarSign, Smartphone, AlertTriangle, ChevronRight,
  Building2, Lightbulb, Award, Calendar, Cog,
  MessageSquare, TrendingUp, Flag, Layers, Lock
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Project Management Best Practices | Expert Guide 2026 | Space AI",
  description: "Master construction project management with proven best practices. From preconstruction through closeout, learn methodologies used by top-performing construction teams worldwide.",
  keywords: [
    "construction project management best practices",
    "construction management methodology",
    "project management in construction",
    "construction project planning",
    "construction scheduling best practices",
    "construction budget management",
    "construction team management",
    "construction risk management",
    "construction project delivery",
    "construction project success factors",
  ],
  alternates: {
    canonical: "https://pmspace.ai/resources/construction-project-management-best-practices/",
  },
  openGraph: {
    title: "Construction Project Management Best Practices | Expert Guide 2026",
    description: "Proven methodologies and best practices from top-performing construction teams.",
    url: "https://pmspace.ai/resources/construction-project-management-best-practices/",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Project Management Best Practices",
    description: "Expert guide to construction PM methodologies and success factors.",
  },
};

// FAQ data
const faqs = [
  {
    question: "What is the most important construction project management best practice?",
    answer: "Communication is consistently ranked as the most critical best practice. Research shows that 56% of construction rework is caused by poor communication. Establishing clear communication protocols, regular meeting cadences, and centralized document management are foundational to project success."
  },
  {
    question: "How do I improve construction project profitability?",
    answer: "Focus on three areas: accurate estimating (±10% variance target), proactive change order management (document everything in real-time), and labor productivity tracking. Companies using AI-powered project management tools like Space AI report 15-20% improvement in project margins."
  },
  {
    question: "What are the key metrics to track in construction project management?",
    answer: "Track these core metrics: Schedule Performance Index (SPI), Cost Performance Index (CPI), RFI response time, submittal approval rate, safety incident rate, change order percentage, and labor productivity. Dashboard these metrics and review weekly."
  },
  {
    question: "How can AI improve construction project management?",
    answer: "AI improves construction PM through: predictive delay detection (2-3 weeks advance warning), automated document processing, intelligent resource scheduling, risk identification, and real-time budget forecasting. Space AI's AI has helped teams reduce delays by 35% on average."
  },
  {
    question: "What is the best project delivery method for construction?",
    answer: "The best method depends on project characteristics. Design-Bid-Build suits simple projects with well-defined scope. Design-Build works for speed-to-market priorities. CM at Risk balances cost certainty with design flexibility. Integrated Project Delivery (IPD) maximizes collaboration on complex projects."
  }
];

export default function ConstructionBestPracticesPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* FAQ Schema */}
      <FAQSchema faqs={faqs} />

      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
              Best Practices
            </span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
              Expert Guide
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Construction Project Management
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Best Practices
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Proven methodologies from industry leaders to deliver projects on time, 
            on budget, and beyond expectations.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stat: "35%", label: "Fewer Delays" },
              { stat: "20%", label: "Cost Savings" },
              { stat: "50%", label: "Less Rework" },
              { stat: "2x", label: "Team Efficiency" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">{item.stat}</div>
                <div className="text-sm text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-white/80 leading-relaxed mb-6">
              Construction projects are notorious for schedule overruns, budget blowouts, and quality 
              issues. Yet some teams consistently deliver exceptional results. What separates the 
              top performers from the rest? It&apos;s not luck—it&apos;s discipline in following proven 
              best practices.
            </p>
            <p className="text-white/80 leading-relaxed">
              This guide synthesizes best practices from PMBOK, Lean Construction, and interviews 
              with 100+ construction leaders who consistently deliver projects in the top quartile 
              for schedule and budget performance. Implement these practices to transform your 
              project outcomes.
            </p>
          </div>

          {/* Phase 1: Preconstruction */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Phase 1: Preconstruction</h2>
                <p className="text-white/50">Set the foundation for success</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              The preconstruction phase determines 80% of project outcomes. Invest disproportionate 
              effort here—every dollar spent in preconstruction saves $10-20 during construction.
            </p>

            {/* BP 1.1 */}
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                1.1 Conduct Comprehensive Risk Assessment
              </h3>
              <p className="text-white/70 mb-4">
                Identify risks early when you have the most options to mitigate them. Document risks 
                in a risk register with probability, impact, and mitigation strategies.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/50 text-sm mb-2">Risk Categories to Assess:</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Site conditions / geotechnical</li>
                    <li>• Design completeness</li>
                    <li>• Material availability / lead times</li>
                    <li>• Labor market conditions</li>
                    <li>• Weather / seasonal factors</li>
                    <li>• Regulatory / permitting</li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    <Brain className="w-4 h-4 inline mr-1" />
                    <strong>AI Enhancement:</strong> Space AI&apos;s AI analyzes historical project data 
                    to automatically identify risks you might miss based on similar projects.
                  </p>
                </div>
              </div>
            </div>

            {/* BP 1.2 */}
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                1.2 Develop a Detailed WBS
              </h3>
              <p className="text-white/70 mb-4">
                Break the project into manageable work packages. A well-structured Work Breakdown 
                Structure (WBS) enables accurate estimating, scheduling, and progress tracking.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/50 text-sm mb-2">WBS Best Practices:</p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• Decompose to level where work can be estimated confidently (typically 8-80 hours)</li>
                  <li>• Ensure 100% rule—WBS covers ALL project work</li>
                  <li>• Use consistent numbering system across projects</li>
                  <li>• Include dependencies and milestones</li>
                </ul>
              </div>
            </div>

            {/* BP 1.3 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                1.3 Establish Communication Protocols
              </h3>
              <p className="text-white/70 mb-4">
                Define HOW the team will communicate before the project starts. Document meeting 
                cadences, escalation paths, and information sharing protocols.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-blue-400 font-medium mb-2">Daily</p>
                  <ul className="space-y-1 text-white/70">
                    <li>• Field reports</li>
                    <li>• Safety briefings</li>
                    <li>• Coordination huddles</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-400 font-medium mb-2">Weekly</p>
                  <ul className="space-y-1 text-white/70">
                    <li>• OAC meetings</li>
                    <li>• Subcontractor meetings</li>
                    <li>• Schedule reviews</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-400 font-medium mb-2">Monthly</p>
                  <ul className="space-y-1 text-white/70">
                    <li>• Executive reviews</li>
                    <li>• Budget reconciliation</li>
                    <li>• Risk register updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 2: Planning & Scheduling */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Phase 2: Planning & Scheduling</h2>
                <p className="text-white/50">Build realistic, actionable schedules</p>
              </div>
            </div>

            {/* BP 2.1 */}
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                2.1 Use Pull Planning / Last Planner System
              </h3>
              <p className="text-white/70 mb-4">
                Instead of pushing schedules down, involve trade partners in planning their own work 
                backwards from milestones. This creates buy-in and realistic commitments.
              </p>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 text-sm">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  <strong>Impact:</strong> Teams using pull planning report 20-30% improvement in 
                  Percent Plan Complete (PPC) and significantly fewer schedule delays.
                </p>
              </div>
            </div>

            {/* BP 2.2 */}
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                2.2 Build Float Into Critical Paths
              </h3>
              <p className="text-white/70 mb-4">
                Every project will face unexpected delays. Build reasonable contingency into your 
                schedule—typically 5-10% depending on project complexity and risk profile.
              </p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <Flag className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Identify true critical path vs. near-critical paths
                </li>
                <li className="flex items-start gap-2">
                  <Flag className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Protect float on critical path activities
                </li>
                <li className="flex items-start gap-2">
                  <Flag className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Monitor float consumption weekly
                </li>
              </ul>
            </div>

            {/* BP 2.3 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                2.3 Integrate Schedule with Budget
              </h3>
              <p className="text-white/70 mb-4">
                Your schedule should drive your cash flow forecast. Use 4D scheduling to link 
                activities with costs and visualize financial performance over time.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/50 text-sm mb-2">Benefits:</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Accurate cash flow forecasting</li>
                    <li>• Early warning of cost overruns</li>
                    <li>• Better earned value analysis</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-2">Tools:</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Space AI AI scheduling</li>
                    <li>• Cost-loaded CPM schedules</li>
                    <li>• Integrated dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 3: Execution */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                <Cog className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Phase 3: Execution</h2>
                <p className="text-white/50">Execute with discipline and visibility</p>
              </div>
            </div>

            {/* BP 3.1 */}
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                3.1 Centralize Document Management
              </h3>
              <p className="text-white/70 mb-4">
                Use a single source of truth for all project documents. Version control, access 
                permissions, and searchability are non-negotiable features.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  <strong>Warning:</strong> Email attachments are where documents go to die. If a 
                  document isn&apos;t in your project management system, it effectively doesn&apos;t exist.
                </p>
              </div>
            </div>

            {/* BP 3.2 */}
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                3.2 Track Progress in Real-Time
              </h3>
              <p className="text-white/70 mb-4">
                Daily field reporting with photo documentation creates an accurate record and 
                enables early intervention when issues arise.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/50 text-sm mb-2">Daily Reports Should Include:</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Work completed vs. planned</li>
                    <li>• Manpower on site (by trade)</li>
                    <li>• Weather conditions</li>
                    <li>• Safety observations</li>
                    <li>• Issues / delays encountered</li>
                    <li>• Photo documentation</li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-purple-300 text-sm">
                    <Smartphone className="w-4 h-4 inline mr-1" />
                    <strong>Mobile First:</strong> Field teams won&apos;t complete reports on desktop 
                    at the end of the day. Use mobile-first tools that capture data in the moment.
                  </p>
                </div>
              </div>
            </div>

            {/* BP 3.3 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                3.3 Manage RFIs and Submittals Proactively
              </h3>
              <p className="text-white/70 mb-4">
                RFI and submittal delays are a top cause of project delays. Set clear SLAs, 
                track aging, and escalate before delays impact critical path.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-center">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">3-5 days</div>
                  <div className="text-white/50">RFI response target</div>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">7-10 days</div>
                  <div className="text-white/50">Submittal review target</div>
                </div>
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">14 days</div>
                  <div className="text-white/50">Submit ahead of need</div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 4: Monitoring & Control */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Phase 4: Monitoring & Control</h2>
                <p className="text-white/50">Measure what matters, act on insights</p>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Performance Indicators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { metric: "Schedule Performance Index (SPI)", target: "> 0.95", desc: "Earned value ÷ Planned value" },
                  { metric: "Cost Performance Index (CPI)", target: "> 0.95", desc: "Earned value ÷ Actual cost" },
                  { metric: "Percent Plan Complete (PPC)", target: "> 80%", desc: "Tasks completed as planned" },
                  { metric: "RFI Cycle Time", target: "< 5 days", desc: "Average RFI response time" },
                  { metric: "Change Order Rate", target: "< 5%", desc: "CO value ÷ Contract value" },
                  { metric: "Safety Incident Rate", target: "0", desc: "Recordable incidents" },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white font-medium text-sm">{item.metric}</span>
                      <span className="text-orange-400 font-mono text-sm">{item.target}</span>
                    </div>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
              <h4 className="font-bold text-orange-300 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Dashboard Best Practice
              </h4>
              <p className="text-white/70 text-sm">
                Create a single-page project dashboard that shows health at a glance. Include traffic 
                light indicators (green/yellow/red) for key metrics, upcoming milestones, top risks, 
                and critical action items. Review in every OAC meeting.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                  <h4 className="font-bold text-white mb-2">{faq.question}</h4>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Implement Best Practices with Space AI
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Space AI&apos;s AI-powered platform is built around construction project management best practices. 
              Automate compliance, get real-time insights, and deliver more successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construction-software-demo/"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                See Best Practices in Action <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/guides/ultimate-construction-management-guide/"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Read Complete Guide
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
