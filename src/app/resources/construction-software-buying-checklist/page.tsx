// src/app/resources/construction-software-checklist/page.tsx
// TASK 65: Construction Software Evaluation Checklist
// Interactive checklist for evaluating construction management software

import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Download,
  Building2, Brain, Shield, Zap, Users, FileText,
  Smartphone, BarChart3, Clock, DollarSign, 
  Lock, Cloud, HeadphonesIcon, Layers, Target
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Software Evaluation Checklist | 50+ Criteria | Space AI",
  description: "Free construction software evaluation checklist with 50+ criteria. Score vendors on features, integrations, pricing, support, and implementation. Make informed software decisions.",
  keywords: [
    "construction software evaluation checklist",
    "construction management software checklist",
    "software evaluation criteria construction",
    "construction software comparison checklist",
    "construction software buying guide",
    "how to evaluate construction software",
    "construction software requirements checklist",
    "construction software rfp template",
  ],
  openGraph: {
    title: "Construction Software Evaluation Checklist | Space AI",
    description: "Free 50+ criteria checklist for evaluating construction management software vendors.",
    type: "website",
    url: "https://pmspace.ai/resources/construction-software-buying-checklist/",
  },
  alternates: {
    canonical: "https://pmspace.ai/resources/construction-software-buying-checklist/",
  },
};

// Checklist categories with criteria
const checklistCategories = [
  {
    id: "core-features",
    title: "Core Features",
    icon: Building2,
    description: "Essential construction management capabilities",
    weight: 25,
    criteria: [
      { id: 1, item: "Project dashboard with real-time status", priority: "Must Have", pmspaceScore: 5 },
      { id: 2, item: "Document management with version control", priority: "Must Have", pmspaceScore: 5 },
      { id: 3, item: "RFI management and tracking", priority: "Must Have", pmspaceScore: 5 },
      { id: 4, item: "Submittal workflow and approvals", priority: "Must Have", pmspaceScore: 5 },
      { id: 5, item: "Daily log and field reporting", priority: "Must Have", pmspaceScore: 5 },
      { id: 6, item: "Schedule management (Gantt charts)", priority: "Must Have", pmspaceScore: 5 },
      { id: 7, item: "Budget tracking and cost management", priority: "Must Have", pmspaceScore: 5 },
      { id: 8, item: "Change order management", priority: "Must Have", pmspaceScore: 5 },
      { id: 9, item: "Punch list management", priority: "High", pmspaceScore: 5 },
      { id: 10, item: "Meeting minutes and action items", priority: "High", pmspaceScore: 5 },
    ],
  },
  {
    id: "ai-capabilities",
    title: "AI & Automation",
    icon: Brain,
    description: "Intelligent features that save time and prevent issues",
    weight: 20,
    criteria: [
      { id: 11, item: "AI-powered delay prediction", priority: "High", pmspaceScore: 5 },
      { id: 12, item: "Automated document classification", priority: "High", pmspaceScore: 5 },
      { id: 13, item: "Intelligent search across documents", priority: "High", pmspaceScore: 5 },
      { id: 14, item: "Risk scoring and early warnings", priority: "High", pmspaceScore: 5 },
      { id: 15, item: "Natural language query (AI copilot)", priority: "Medium", pmspaceScore: 5 },
      { id: 16, item: "Automated workflow triggers", priority: "High", pmspaceScore: 5 },
      { id: 17, item: "Predictive resource allocation", priority: "Medium", pmspaceScore: 4 },
      { id: 18, item: "OCR for extracting document data", priority: "High", pmspaceScore: 5 },
    ],
  },
  {
    id: "mobile-field",
    title: "Mobile & Field Tools",
    icon: Smartphone,
    description: "Capabilities for field teams and on-site work",
    weight: 15,
    criteria: [
      { id: 19, item: "Native iOS and Android apps", priority: "Must Have", pmspaceScore: 5 },
      { id: 20, item: "Offline mode with sync", priority: "Must Have", pmspaceScore: 5 },
      { id: 21, item: "Photo and video capture from app", priority: "Must Have", pmspaceScore: 5 },
      { id: 22, item: "Drawing markup on mobile", priority: "High", pmspaceScore: 5 },
      { id: 23, item: "Voice-to-text for field notes", priority: "Medium", pmspaceScore: 4 },
      { id: 24, item: "GPS location tagging", priority: "Medium", pmspaceScore: 5 },
      { id: 25, item: "Push notifications and alerts", priority: "High", pmspaceScore: 5 },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & API",
    icon: Layers,
    description: "Connectivity with your existing software ecosystem",
    weight: 15,
    criteria: [
      { id: 26, item: "Accounting integration (QuickBooks, Sage)", priority: "Must Have", pmspaceScore: 5 },
      { id: 27, item: "ERP integration capability", priority: "High", pmspaceScore: 5 },
      { id: 28, item: "BIM software integration", priority: "High", pmspaceScore: 5 },
      { id: 29, item: "Email integration (Outlook, Gmail)", priority: "High", pmspaceScore: 5 },
      { id: 30, item: "Calendar sync", priority: "Medium", pmspaceScore: 5 },
      { id: 31, item: "Open API for custom integrations", priority: "High", pmspaceScore: 5 },
      { id: 32, item: "Pre-built integration marketplace", priority: "Medium", pmspaceScore: 4 },
      { id: 33, item: "Single sign-on (SSO) support", priority: "High", pmspaceScore: 5 },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    icon: Shield,
    description: "Data protection and regulatory compliance",
    weight: 10,
    criteria: [
      { id: 34, item: "SOC 2 Type II certification", priority: "Must Have", pmspaceScore: 5 },
      { id: 35, item: "Data encryption at rest and in transit", priority: "Must Have", pmspaceScore: 5 },
      { id: 36, item: "Role-based access controls", priority: "Must Have", pmspaceScore: 5 },
      { id: 37, item: "Audit trails for all activities", priority: "Must Have", pmspaceScore: 5 },
      { id: 38, item: "GDPR compliance", priority: "High", pmspaceScore: 5 },
      { id: 39, item: "Multi-factor authentication", priority: "Must Have", pmspaceScore: 5 },
      { id: 40, item: "Data backup and recovery", priority: "Must Have", pmspaceScore: 5 },
    ],
  },
  {
    id: "usability",
    title: "Usability & Training",
    icon: Users,
    description: "Ease of use and learning curve",
    weight: 10,
    criteria: [
      { id: 41, item: "Intuitive user interface", priority: "Must Have", pmspaceScore: 5 },
      { id: 42, item: "Onboarding and training programs", priority: "High", pmspaceScore: 5 },
      { id: 43, item: "Help documentation and knowledge base", priority: "High", pmspaceScore: 5 },
      { id: 44, item: "Video tutorials and webinars", priority: "Medium", pmspaceScore: 5 },
      { id: 45, item: "In-app guided tours", priority: "Medium", pmspaceScore: 4 },
      { id: 46, item: "Customizable dashboards", priority: "High", pmspaceScore: 5 },
    ],
  },
  {
    id: "support-pricing",
    title: "Support & Pricing",
    icon: HeadphonesIcon,
    description: "Vendor support and total cost of ownership",
    weight: 5,
    criteria: [
      { id: 47, item: "24/7 technical support", priority: "High", pmspaceScore: 5 },
      { id: 48, item: "Dedicated customer success manager", priority: "High", pmspaceScore: 5 },
      { id: 49, item: "Transparent pricing (no hidden fees)", priority: "Must Have", pmspaceScore: 5 },
      { id: 50, item: "Free trial available", priority: "High", pmspaceScore: 5 },
      { id: 51, item: "Flexible contract terms", priority: "Medium", pmspaceScore: 5 },
      { id: 52, item: "Data migration assistance", priority: "High", pmspaceScore: 5 },
      { id: 53, item: "Implementation support included", priority: "High", pmspaceScore: 5 },
    ],
  },
];

// Scoring guide
const scoringGuide = [
  { score: 5, label: "Excellent", description: "Fully meets requirements, best-in-class" },
  { score: 4, label: "Good", description: "Meets requirements with minor gaps" },
  { score: 3, label: "Adequate", description: "Partially meets requirements" },
  { score: 2, label: "Limited", description: "Significant gaps or limitations" },
  { score: 1, label: "Poor", description: "Does not meet requirements" },
  { score: 0, label: "Missing", description: "Feature not available" },
];

// FAQs
const checklistFAQs = [
  {
    question: "How do I use this construction software evaluation checklist?",
    answer: "Download the checklist and score each vendor you're evaluating on a scale of 0-5 for each criterion. Multiply scores by the category weight to get weighted scores. The vendor with the highest total score best matches your requirements. Customize the criteria and weights based on your specific needs."
  },
  {
    question: "What are the most important features to look for in construction software?",
    answer: "The most critical features are: document management with version control, RFI and submittal tracking, schedule management (Gantt charts), mobile apps with offline capability, budget and cost tracking, and integrations with your accounting system. AI features like predictive analytics are increasingly important for competitive advantage."
  },
  {
    question: "How long does construction software evaluation typically take?",
    answer: "A thorough evaluation typically takes 4-8 weeks. This includes: initial research and shortlisting (1-2 weeks), demo scheduling and viewing (2-3 weeks), reference checks and trial periods (1-2 weeks), and final decision and negotiation (1 week). Rushing the process often leads to poor fit."
  },
  {
    question: "Should I involve my team in the software evaluation?",
    answer: "Absolutely. Include representatives from project management, field teams, accounting, and IT. Different users have different needs and perspectives. Their buy-in during evaluation leads to better adoption after implementation."
  },
  {
    question: "How do I compare pricing between construction software vendors?",
    answer: "Look beyond the monthly fee. Calculate total cost of ownership including: per-user costs, storage fees, integration costs, implementation fees, training costs, and any add-on modules. Ask vendors for a full pricing breakdown for your expected usage over 3 years."
  },
  {
    question: "What questions should I ask during construction software demos?",
    answer: "Key questions include: Can you show workflows specific to our project types? How does mobile offline mode work? What's included in implementation? What's the typical adoption timeline? Can we speak with similar customers? What's your product roadmap? How is data migrated from our current system?"
  },
];

export default function ConstructionSoftwareChecklistPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white/80">50+ Evaluation Criteria</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Construction Software Evaluation Checklist
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              A comprehensive checklist to evaluate construction management software vendors. 
              Score on features, integrations, pricing, support, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Excel Checklist
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF Version
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Guide */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Scoring Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {scoringGuide.map((item) => (
                <div key={item.score} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{item.score}</div>
                  <div className="text-sm font-medium text-cyan-400 mb-1">{item.label}</div>
                  <div className="text-xs text-white/50">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Categories */}
      {checklistCategories.map((category, categoryIdx) => (
        <section 
          key={category.id}
          className={`py-12 ${categoryIdx % 2 === 0 ? 'bg-black' : 'bg-gray-950'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10">
                  <category.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-white/60 text-sm">{category.description}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-white/50">Category Weight</div>
                  <div className="text-xl font-bold text-cyan-400">{category.weight}%</div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-white/70">Criteria</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70 w-24">Priority</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70 w-24">Space AI</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70 w-24">Vendor A</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70 w-24">Vendor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.criteria.map((criterion) => (
                      <tr key={criterion.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4 text-sm text-white/80">{criterion.item}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            criterion.priority === 'Must Have' ? 'bg-red-500/20 text-red-300' :
                            criterion.priority === 'High' ? 'bg-orange-500/20 text-orange-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {criterion.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 font-bold">
                            {criterion.pmspaceScore}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/50">
                            —
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/50">
                            —
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Summary Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              How Space AI Scores on This Checklist
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-green-400 mb-2">4.9/5</div>
                <div className="text-lg text-white mb-2">Average Score Across All Criteria</div>
                <p className="text-sm text-white/60">
                  Space AI scores excellent on 95% of evaluation criteria, 
                  with particular strengths in AI capabilities and mobile experience.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-lg text-white mb-2">&quot;Must Have&quot; Features</div>
                <p className="text-sm text-white/60">
                  Space AI includes all must-have features for modern construction 
                  management, plus advanced AI capabilities most competitors lack.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/70 mb-6">
                Download the complete checklist to score Space AI and other vendors 
                based on your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Checklist
                </button>
                <Link 
                  href="/construction-software-demo/"
                  className="px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition flex items-center gap-2"
                >
                  Book Demo to Verify Scores
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Tips */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Software Evaluation Best Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Define Requirements First",
                  desc: "Document your must-have vs nice-to-have features before viewing demos. This prevents being swayed by flashy features you don't need."
                },
                { 
                  title: "Include All Stakeholders",
                  desc: "Get input from project managers, field workers, and executives. Different roles have different needs that should be weighted."
                },
                { 
                  title: "Request Reference Customers",
                  desc: "Ask to speak with customers similar to your company size and project types. Generic references may not reflect your experience."
                },
                { 
                  title: "Test Mobile Apps in the Field",
                  desc: "Don't just demo in a conference room. Test mobile apps on an actual jobsite with spotty connectivity."
                },
                { 
                  title: "Calculate Total Cost of Ownership",
                  desc: "Include implementation, training, per-user fees, storage, and potential add-ons. The cheapest option may not be the best value."
                },
                { 
                  title: "Understand the Implementation Process",
                  desc: "Ask about data migration, training timelines, and support during rollout. Poor implementation kills software success."
                },
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                    <p className="text-sm text-white/60">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {checklistFAQs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Evaluate Space AI?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            See how Space AI stacks up against your checklist with a personalized demo. 
            We&apos;ll walk through your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/try-it-now/"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/construction-software-demo/"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={checklistFAQs} />
    </div>
  );
}
