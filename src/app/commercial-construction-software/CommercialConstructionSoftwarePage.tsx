"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Shield,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Layers,
  Smartphone,
  Brain,
  BarChart3,
  Lock,
  Globe,
  HardHat,
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "What is the best commercial construction software in 2026?",
    answer:
      "Space AI is the leading commercial construction software in 2026, combining enterprise features like multi-site coordination and document control with AI-powered scheduling and predictive analytics. Unlike Procore or PlanGrid, Space AI includes AI that predicts delays, optimizes resources across projects, and automates compliance tracking—with pricing that scales with your business.",
  },
  {
    question: "What software do commercial contractors use?",
    answer:
      "Commercial contractors commonly use Procore, PlanGrid, and Space AI for project management. Space AI is gaining market share due to its AI capabilities, modern interface, and better value for mid-market to enterprise contractors. Key features: document control, RFIs, submittals, multi-stakeholder coordination, and enterprise reporting.",
  },
  {
    question: "How much does commercial construction software cost?",
    answer:
      "Commercial construction software ranges from $375/month (Space AI entry) to $50,000+/year (Procore enterprise). Space AI offers tiered pricing: Starter free tier, Professional at $99/user/month, and Enterprise with volume discounts—typically 50-70% less than Procore with comparable or superior features.",
  },
  {
    question: "What features do commercial contractors need in software?",
    answer:
      "Essential commercial construction software features: document control, RFI/submittal management, multi-stakeholder permissions, enterprise reporting, resource allocation, safety compliance, punch lists, change order management, integration capabilities, and multi-site coordination. Space AI includes all these plus AI-powered predictions.",
  },
  {
    question: "Is Space AI good for large commercial projects?",
    answer:
      "Yes, Space AI excels at large commercial projects. It handles unlimited documents, coordinates multiple stakeholders with granular permissions, tracks resources across sites, provides enterprise reporting dashboards, and uses AI to predict delays and optimize schedules for complex multi-phase projects.",
  },
  {
    question: "Can commercial construction software handle multiple projects?",
    answer:
      "Yes, Space AI provides enterprise-grade multi-project management. View portfolio dashboards, allocate resources across projects, track budgets at company and project levels, standardize workflows, and use AI to identify risks across your entire project portfolio.",
  },
  {
    question: "What makes commercial construction software different from residential?",
    answer:
      "Commercial construction software emphasizes document control, complex stakeholder management, enterprise reporting, and compliance tracking. It handles larger teams, longer timelines, and more complex workflows. Space AI bridges both, making it ideal for contractors doing commercial and high-end residential work.",
  },
  {
    question: "Does Space AI integrate with commercial construction tools?",
    answer:
      "Yes, Space AI integrates with major commercial construction tools: Bluebeam for drawings, Procore for data migration, accounting systems (Sage, QuickBooks, Viewpoint), BIM software (Revit, Navisworks), and enterprise tools (Microsoft 365, Google Workspace). Open API for custom integrations.",
  },
];

// FAQ Schema
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Software Schema
function SoftwareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Space AI Commercial Construction Software",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Commercial Construction Management",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "299",
      priceCurrency: "USD",
      offerCount: "4",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "485",
      bestRating: "5",
    },
    featureList: [
      "Document Control",
      "RFI Management",
      "Submittal Tracking",
      "AI Schedule Optimization",
      "Multi-Project Dashboard",
      "Enterprise Reporting",
      "Resource Allocation",
      "Safety Compliance",
      "Change Order Management",
      "Multi-Stakeholder Permissions",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Commercial Contractors, General Contractors, Enterprise Builders",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const features = [
  {
    icon: FileText,
    title: "Document Control",
    description:
      "Enterprise-grade document management with version control, approval workflows, and automatic distribution. Never lose a drawing revision again.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "RFI & Submittal Management",
    description:
      "Streamlined RFI and submittal workflows with automatic routing, tracking, and deadline alerts. Reduce response times by 60%.",
    highlight: true,
  },
  {
    icon: Calendar,
    title: "AI-Powered Scheduling",
    description:
      "Smart scheduling for complex commercial timelines. AI predicts delays, optimizes sequences, and auto-adjusts when changes occur.",
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Enterprise Reporting",
    description:
      "Executive dashboards, portfolio analytics, and custom reports. Real-time visibility across all projects and stakeholders.",
  },
  {
    icon: Users,
    title: "Multi-Stakeholder Coordination",
    description:
      "Granular permissions for owners, architects, subs, and consultants. Everyone sees what they need, nothing more.",
  },
  {
    icon: DollarSign,
    title: "Budget & Cost Control",
    description:
      "Track budgets, manage change orders, forecast costs. Integration with major accounting systems for real-time financials.",
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description:
      "Safety inspections, incident tracking, compliance documentation. Meet OSHA requirements and reduce liability.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "SOC 2 compliant, SSO integration, audit logs. Enterprise-grade security for sensitive project data.",
  },
];

const projectTypes = [
  {
    title: "Office Buildings",
    description: "Multi-floor coordination, tenant improvement tracking, complex MEP management",
    icon: Building2,
  },
  {
    title: "Healthcare Facilities",
    description: "Infection control compliance, phased construction, 24/7 coordination requirements",
    icon: Shield,
  },
  {
    title: "Industrial & Manufacturing",
    description: "Equipment installation coordination, safety protocols, production timeline integration",
    icon: HardHat,
  },
  {
    title: "Multi-Family Residential",
    description: "Unit tracking, amenity coordination, multi-phase delivery management",
    icon: Globe,
  },
];

const testimonials = [
  {
    quote: "Switched from Procore to Space AI for a 200M office tower. The AI scheduling saved us 3 weeks on critical path. The cost savings on licensing alone paid for the migration.",
    author: "David Thompson",
    role: "VP Operations, Turner-Allied Construction",
    location: "Chicago, IL",
    rating: 5,
  },
  {
    quote: "Managing 15 concurrent commercial projects used to be chaos. Space AI's portfolio view and resource allocation AI changed everything. We're 40% more efficient.",
    author: "Jennifer Walsh",
    role: "Director of PM, BuildCore Group",
    location: "Dallas, TX",
    rating: 5,
  },
  {
    quote: "The document control alone is worth it. We processed 50,000+ documents on our last hospital project without losing a single revision. RFI turnaround dropped from 2 weeks to 3 days.",
    author: "Robert Kim",
    role: "Project Executive, Healthcare Constructors",
    location: "Boston, MA",
    rating: 5,
  },
];

export default function CommercialConstructionSoftwarePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <FAQSchema />
      <SoftwareSchema />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise-Grade Construction Management
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Commercial Construction Software
            </span>
            <br />
            <span className="text-blue-400">Built for Scale</span>
          </h1>

          <p className="text-lg text-white/70 mb-6 max-w-3xl mx-auto">
            The AI-powered construction platform that <strong>general contractors</strong>, 
            <strong> commercial builders</strong>, and <strong>enterprise construction firms</strong> trust 
            for complex projects. Document control, multi-site coordination, enterprise reporting—
            the power of Procore at a fraction of the cost.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>$2B+ managed</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Lock className="w-4 h-4 text-green-400" />
              <span>SOC 2 Compliant</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/try-it-now/">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/construction-software-demo/">
              <button className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Request Enterprise Demo
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Problem/Solution */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-4">
                  The Commercial Construction Challenge
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Document versions scattered across systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    RFIs languishing for weeks without response
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    No visibility across multiple projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Paying $50K+/year for bloated enterprise software
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Critical path delays discovered too late
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-400 mb-4">
                  The Space AI Solution
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    Single source of truth for all documents
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    Automated RFI routing with deadline tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    Portfolio dashboard for all projects
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    Enterprise features at 50-70% less cost
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    AI predicts delays 3-4 weeks ahead
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Enterprise Features, Modern Experience
          </h2>
          <p className="text-center text-white/60 mb-8">
            Everything commercial contractors need without the legacy complexity
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl ${
                  feature.highlight
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30"
                    : "bg-gray-900/50 border border-white/10"
                }`}
              >
                <feature.icon className={`w-8 h-8 mb-3 ${
                  feature.highlight ? "text-blue-400" : "text-purple-400"
                }`} />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Highlight */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-bold text-white">
                AI That Handles Commercial Complexity
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              Space AI&apos;s AI is trained on thousands of commercial projects to proactively manage complexity:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Critical Path Analysis</div>
                <p className="text-sm text-white/60">
                  AI identifies schedule risks weeks before they impact delivery dates
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Resource Optimization</div>
                <p className="text-sm text-white/60">
                  Automatically balance crews and equipment across multiple projects
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Document Intelligence</div>
                <p className="text-sm text-white/60">
                  AI extracts key info from drawings, specs, and contracts automatically
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Types */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Built for Every Commercial Project Type
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors"
              >
                <project.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Comparison with Procore */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Space AI vs. Enterprise Software</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/80 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-blue-400 font-medium">Space AI</th>
                  <th className="text-center py-3 px-4 text-white/60 font-medium">Procore</th>
                  <th className="text-center py-3 px-4 text-white/60 font-medium">PlanGrid</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70">AI Scheduling</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-white/40">Limited</td>
                  <td className="text-center py-3 px-4 text-white/40">No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70">Document Control</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70">RFI/Submittal</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70">Predictive Analytics</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-white/40">Add-on</td>
                  <td className="text-center py-3 px-4 text-white/40">No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70">Free Tier</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4 text-white/40">No</td>
                  <td className="text-center py-3 px-4 text-white/40">No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white/70">Annual Cost (50 users)</td>
                  <td className="text-center py-3 px-4 text-green-400">~$60K</td>
                  <td className="text-center py-3 px-4 text-white/40">$150K+</td>
                  <td className="text-center py-3 px-4 text-white/40">$80K+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Trusted by Commercial Contractors
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                  <div className="text-white/40 text-xs">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Modernize Your Commercial Projects?
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join leading commercial contractors using Space AI to deliver projects on time, 
              under budget, and with complete visibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-it-now/">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/enterprise/">
                <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  Enterprise Solutions
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Links */}
      <section className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/alternatives/procore-alternative/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              Procore Alternative →
            </Link>
            <Link href="/alternatives/plangrid-alternative/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              PlanGrid Alternative →
            </Link>
            <Link href="/enterprise/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              Enterprise Software →
            </Link>
            <Link href="/construction-software-for-general-contractors/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-blue-500/50 transition-colors text-sm">
              General Contractor Software →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
