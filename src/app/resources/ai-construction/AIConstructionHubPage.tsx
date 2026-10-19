"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BrainCircuit,
  Clock,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Workflow,
  BarChart,
  Lightbulb,
  Building,
  ArrowRight,
} from "lucide-react";

const articles = [
  {
    slug: "ai-driven-construction-scheduling",
    title: "AI-Driven Construction Scheduling: A Complete Guide",
    description:
      "How machine learning is revolutionizing project scheduling by predicting delays, optimizing sequences, and adapting to changes in real-time.",
    icon: Clock,
    readTime: "12 min read",
    category: "Scheduling",
    featured: true,
  },
  {
    slug: "predictive-project-analytics",
    title: "Predictive Project Analytics in Construction",
    description:
      "Learn how predictive analytics uses historical data and ML algorithms to forecast project outcomes, costs, and risks before they materialize.",
    icon: TrendingUp,
    readTime: "10 min read",
    category: "Analytics",
    featured: true,
  },
  {
    slug: "machine-learning-risk-management",
    title: "Machine Learning for Construction Risk Management",
    description:
      "Explore how AI identifies, scores, and mitigates project risks automatically, enabling proactive rather than reactive management.",
    icon: Shield,
    readTime: "11 min read",
    category: "Risk Management",
    featured: true,
  },
  {
    slug: "intelligent-document-processing",
    title: "Intelligent Document Processing in Construction",
    description:
      "How IDP technology extracts, classifies, and processes construction documents automatically, eliminating manual data entry.",
    icon: FileText,
    readTime: "9 min read",
    category: "Automation",
    featured: false,
  },
  {
    slug: "ai-resource-optimization",
    title: "AI-Powered Resource Optimization for Construction",
    description:
      "Discover how AI algorithms optimize labor, equipment, and material allocation across projects to maximize efficiency.",
    icon: Users,
    readTime: "10 min read",
    category: "Resource Management",
    featured: false,
  },
  {
    slug: "agentic-ai-construction",
    title: "Agentic AI: The Future of Autonomous Construction Management",
    description:
      "Understanding autonomous AI agents that can make decisions, execute tasks, and manage workflows with minimal human intervention.",
    icon: BrainCircuit,
    readTime: "13 min read",
    category: "AI Technology",
    featured: true,
  },
  {
    slug: "computer-vision-construction",
    title: "Computer Vision Applications in Construction",
    description:
      "From progress monitoring to safety compliance, explore how computer vision is transforming construction site management.",
    icon: Building,
    readTime: "11 min read",
    category: "AI Technology",
    featured: false,
  },
  {
    slug: "ai-construction-safety",
    title: "AI for Construction Safety: Preventing Incidents Before They Happen",
    description:
      "How AI analyzes site conditions, worker behavior, and equipment status to predict and prevent safety incidents.",
    icon: Shield,
    readTime: "10 min read",
    category: "Safety",
    featured: false,
  },
  {
    slug: "digital-twin-ai-integration",
    title: "Digital Twins and AI: The Next Evolution in Construction",
    description:
      "Combining digital twin technology with AI for real-time monitoring, simulation, and optimization of construction projects.",
    icon: Lightbulb,
    readTime: "12 min read",
    category: "Technology",
    featured: false,
  },
  {
    slug: "roi-ai-construction",
    title: "Measuring ROI of AI in Construction: A Practical Guide",
    description:
      "How to calculate and maximize the return on investment from AI construction technology implementations.",
    icon: BarChart,
    readTime: "8 min read",
    category: "Business",
    featured: false,
  },
];

const featuredArticles = articles.filter((a) => a.featured);
const otherArticles = articles.filter((a) => !a.featured);

export default function AIConstructionHubPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-4">
            Deep Dive Article Series
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            The Future of AI in Construction
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-6 max-w-3xl mx-auto">
            Explore how artificial intelligence is transforming construction
            management. Our comprehensive article series covers everything from
            AI-driven scheduling to predictive analytics and beyond.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1.5 bg-gray-800/50 border border-white/10 rounded-full text-white/70 text-xs">
              10 In-Depth Articles
            </span>
            <span className="px-3 py-1.5 bg-gray-800/50 border border-white/10 rounded-full text-white/70 text-xs">
              Expert Analysis
            </span>
            <span className="px-3 py-1.5 bg-gray-800/50 border border-white/10 rounded-full text-white/70 text-xs">
              Practical Insights
            </span>
          </div>
        </motion.div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Featured Articles
          </h2>
          <p className="text-sm text-white/60">
            Start here for the most impactful insights on AI in construction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/resources/ai-construction/${article.slug}`}>
                <div className="group bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-white/10 rounded-xl p-5 h-full hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <article.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-purple-400 font-medium">
                          {article.category}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="text-xs text-white/40">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-white/60 text-xs">
                        {article.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-purple-400 text-xs font-medium">
                        Read Article
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Complete Article Series
          </h2>
          <p className="text-sm text-white/60">
            Deep dives into every aspect of AI in construction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/resources/ai-construction/${article.slug}`}>
                <div className="group bg-gray-900/50 border border-white/10 rounded-xl p-5 h-full hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-2 bg-gray-800/50 rounded-lg w-fit mb-3">
                    <article.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-purple-400 font-medium">
                      {article.category}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs text-white/40">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Topics Overview */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Topics We Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI Scheduling",
                desc: "ML-powered schedule optimization",
              },
              {
                title: "Predictive Analytics",
                desc: "Forecasting project outcomes",
              },
              { title: "Risk Management", desc: "Automated risk identification" },
              {
                title: "Document Processing",
                desc: "Intelligent document handling",
              },
              {
                title: "Resource Optimization",
                desc: "AI-driven resource allocation",
              },
              { title: "Computer Vision", desc: "Visual AI applications" },
              { title: "Safety Analytics", desc: "Predictive safety management" },
              { title: "Digital Twins", desc: "AI-enhanced digital twins" },
            ].map((topic, index) => (
              <div key={index} className="text-center">
                <h3 className="text-white font-semibold mb-1">{topic.title}</h3>
                <p className="text-white/50 text-sm">{topic.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Implement AI in Your Projects?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            See these concepts in action. Book a demo to experience how Space AI
            brings AI-powered construction management to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/resources/glossary/">
              <button className="border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                View AI Glossary
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
