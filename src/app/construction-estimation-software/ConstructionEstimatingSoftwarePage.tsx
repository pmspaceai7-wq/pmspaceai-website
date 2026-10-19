"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  FileText,
  DollarSign,
  BarChart3,
  Database,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Brain,
  Target,
  TrendingUp,
  Layers,
  Image as ImageIcon,
  RefreshCw,
  Zap,
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "What is construction estimating software?",
    answer:
      "Construction estimating software helps contractors calculate project costs accurately. It includes digital takeoff tools, cost databases, labor calculations, and markup management. Space AI's estimating module adds AI that learns from your past projects to improve accuracy and speed.",
  },
  {
    question: "What is the best construction estimating software in 2026?",
    answer:
      "Space AI is the leading construction estimating software in 2026, combining traditional takeoff and costing with AI-powered predictions. Unlike standalone tools like PlanSwift or Bluebeam, Space AI integrates estimating with bidding and project management for a complete workflow. The AI learns your pricing patterns to improve accuracy over time.",
  },
  {
    question: "How much does construction estimating software cost?",
    answer:
      "Construction estimating software ranges from $50/month (basic) to $500+/month (enterprise). Space AI includes estimating in Professional plans at $99/user/month with AI features. Standalone tools like ProEst or Sage Estimating cost $200-500/user/month. Space AI's integration with bidding and PM provides better overall value.",
  },
  {
    question: "What features should construction estimating software have?",
    answer:
      "Essential estimating features: digital takeoff, cost databases, labor calculations, assembly pricing, markup management, proposal generation, and reporting. Premium features include AI cost predictions, historical data analysis, real-time material pricing, and integration with bidding/accounting software.",
  },
  {
    question: "How does AI improve construction estimating?",
    answer:
      "Space AI's AI improves estimating by: 1) Learning from your historical costs to improve accuracy, 2) Identifying items commonly missed on similar projects, 3) Predicting material price changes, 4) Comparing your estimate to market benchmarks, 5) Flagging outliers that may indicate errors.",
  },
  {
    question: "Can construction estimating software do takeoffs from PDFs?",
    answer:
      "Yes, Space AI provides digital takeoff from PDF plans. Use on-screen measuring tools, automatic area calculations, and count features. The AI can identify common elements to speed up takeoffs. Export quantities directly to your estimate or connect with Bluebeam for advanced markup.",
  },
  {
    question: "How accurate is AI construction estimating?",
    answer:
      "Space AI's AI estimating achieves 95%+ accuracy when trained on your historical data. The AI gets smarter over time, learning your pricing patterns, local market rates, and project-specific adjustments. It flags estimates that deviate significantly from predictions for manual review.",
  },
  {
    question: "Does estimating software integrate with QuickBooks?",
    answer:
      "Yes, Space AI integrates with QuickBooks Online and Desktop. Sync cost codes, track actual vs. estimated costs, and flow estimate data into your accounting system. Also integrates with Sage, Viewpoint, and other construction accounting platforms.",
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
    name: "Space AI Construction Estimating Software",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Construction Cost Estimation",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "99",
      priceCurrency: "USD",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "234",
      bestRating: "5",
    },
    featureList: [
      "Digital Takeoff",
      "AI Cost Predictions",
      "Cost Databases",
      "Labor Calculations",
      "Assembly Pricing",
      "Proposal Generation",
      "Historical Analysis",
      "Material Pricing",
      "Bid Integration",
      "Accounting Sync",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Contractors, Estimators, Project Managers",
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
    icon: ImageIcon,
    title: "Digital Takeoff",
    description:
      "On-screen takeoff from PDF plans. Measure linear, area, and count quantities. AI assists with common element identification.",
    highlight: true,
  },
  {
    icon: Brain,
    title: "AI Cost Prediction",
    description:
      "AI learns from your historical data to predict costs. Flags outliers, suggests missing items, and improves accuracy over time.",
    highlight: true,
  },
  {
    icon: Database,
    title: "Cost Databases",
    description:
      "Built-in cost data for materials, labor, and equipment. Customizable for your local market and pricing structures.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Assembly Pricing",
    description:
      "Build reusable assemblies for common scope items. Price walls, rooms, or systems with one click.",
  },
  {
    icon: Calculator,
    title: "Labor Calculations",
    description:
      "Automatic labor calculations based on quantities and productivity rates. Adjust for crew size and conditions.",
  },
  {
    icon: FileText,
    title: "Proposal Generation",
    description:
      "Generate professional proposals from estimates. Customizable templates with your branding.",
  },
  {
    icon: RefreshCw,
    title: "Bid Integration",
    description:
      "Seamless flow from estimate to bid. Import subcontractor quotes and compare to your estimated costs.",
  },
  {
    icon: BarChart3,
    title: "Variance Analysis",
    description:
      "Compare estimates to actuals. Track accuracy by trade, project type, and estimator to improve future estimates.",
  },
];

const aiCapabilities = [
  {
    title: "Historical Learning",
    description: "AI analyzes your past projects to understand your pricing patterns and improve predictions",
  },
  {
    title: "Missing Item Detection",
    description: "Automatically identifies scope items commonly included on similar projects that may be missing",
  },
  {
    title: "Market Comparison",
    description: "Compare your estimate against anonymized market data to ensure competitiveness",
  },
  {
    title: "Error Flagging",
    description: "Highlights quantities or prices that seem unusual based on project characteristics",
  },
];

const testimonials = [
  {
    quote: "Space AI's AI caught $50K in scope I'd missed on a hospital project. The 'commonly included items' feature is a game-changer for complex estimates.",
    author: "Richard Park",
    role: "Senior Estimator, Pacific Builders",
    rating: 5,
  },
  {
    quote: "Digital takeoff is so much faster than paper. Combined with our cost database, we're producing estimates 3x faster with better accuracy.",
    author: "Lisa Chen",
    role: "Owner, Chen Construction",
    rating: 5,
  },
  {
    quote: "The integration between estimating and bidding saves us from double-entry errors. Subcontractor quotes flow right into comparison with our estimates.",
    author: "Mark Thompson",
    role: "Preconstruction Manager, Urban Developers",
    rating: 5,
  },
];

export default function ConstructionEstimatingSoftwarePage() {
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-medium mb-4">
            <Calculator className="w-3.5 h-3.5" />
            AI-Powered Accuracy
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Construction Estimating Software
            </span>
            <br />
            <span className="text-cyan-400">That Learns Your Business</span>
          </h1>

          <p className="text-lg text-white/70 mb-6 max-w-3xl mx-auto">
            AI-powered estimating for <strong>contractors</strong> and <strong>estimators</strong>. 
            Digital takeoff, intelligent cost databases, and predictions that get smarter with every project. 
            <strong> Free tier available.</strong>
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Target className="w-4 h-4 text-green-400" />
              <span>95%+ accuracy</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>3x faster estimates</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/try-it-now/">
              <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Start Estimating Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/construction-software-demo/">
              <button className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                See Demo
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
          <div className="bg-gradient-to-r from-red-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-4">
                  Traditional Estimating Challenges
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Manually counting from paper plans
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Outdated cost data and labor rates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Missing scope items discovered during construction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    No learning from past estimate accuracy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Disconnected from bidding and project management
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-cyan-400 mb-4">
                  The Space AI Estimating Solution
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    AI-assisted digital takeoff from PDFs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    Updated cost databases with your data
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    AI detects commonly missed items
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    Predictions improve with every project
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    Seamless flow to bidding and execution
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
            Complete Estimating Platform
          </h2>
          <p className="text-center text-white/60 mb-8">
            Everything you need to create winning estimates
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
                    ? "bg-gradient-to-br from-cyan-500/20 to-teal-500/10 border border-cyan-500/30"
                    : "bg-gray-900/50 border border-white/10"
                }`}
              >
                <feature.icon className={`w-8 h-8 mb-3 ${
                  feature.highlight ? "text-cyan-400" : "text-purple-400"
                }`} />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Deep Dive */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-bold text-white">
                AI That Makes You a Better Estimator
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              Space AI&apos;s AI learns from every estimate to help you be more accurate and efficient:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-black/30 rounded-lg p-4">
                  <div className="text-purple-400 font-semibold mb-1">{capability.title}</div>
                  <p className="text-sm text-white/60">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Accuracy Stats */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Proven Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-white/60 text-sm">Estimate Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">3x</div>
              <div className="text-white/60 text-sm">Faster Estimates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-white/60 text-sm">Fewer Missed Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-white/60 text-sm">Better Win Rate</div>
            </div>
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
            Estimators Trust Space AI
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
          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Estimate Smarter?
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join estimators using Space AI to create more accurate estimates, 
              win more bids, and never miss scope again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-it-now/">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Estimating Free
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/construction-software-demo/">
                <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  Schedule Demo
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
            <Link href="/construction-bidding-software/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-cyan-500/50 transition-colors text-sm">
              Bidding Software →
            </Link>
            <Link href="/construction-cost-management-software/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-cyan-500/50 transition-colors text-sm">
              Cost Management →
            </Link>
            <Link href="/construction-software-for-general-contractors/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-cyan-500/50 transition-colors text-sm">
              General Contractor Software →
            </Link>
            <Link href="/construction-estimation-software/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-cyan-500/50 transition-colors text-sm">
              Preconstruction Software →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
