"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Calendar,
  ClipboardCheck,
  DollarSign,
  Users,
  Shield,
  Download,
  ArrowRight,
  Clock,
  BarChart,
  FileSpreadsheet,
  CheckSquare,
  AlertTriangle,
  Wrench,
  Building,
  Truck,
  HardHat,
  Star,
  X,
  Mail,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ElementType;
  format: string[];
  downloads: string;
  rating: number;
  featured: boolean;
  previewImage?: string;
}

const templates: Template[] = [
  // Project Planning
  {
    id: "gantt-chart",
    name: "Construction Gantt Chart",
    description: "Comprehensive project timeline template with milestones, dependencies, and resource allocation. Perfect for tracking multi-phase construction projects.",
    category: "Project Planning",
    icon: Calendar,
    format: ["Excel", "Google Sheets", "PDF"],
    downloads: "12.5K",
    rating: 4.9,
    featured: true,
  },
  {
    id: "project-schedule",
    name: "Master Project Schedule",
    description: "Detailed scheduling template with critical path analysis, float calculations, and baseline comparison. Includes WBS structure.",
    category: "Project Planning",
    icon: Clock,
    format: ["Excel", "MS Project"],
    downloads: "8.2K",
    rating: 4.8,
    featured: true,
  },
  {
    id: "wbs-template",
    name: "Work Breakdown Structure (WBS)",
    description: "Hierarchical decomposition template for breaking down construction projects into manageable work packages.",
    category: "Project Planning",
    icon: BarChart,
    format: ["Excel", "PDF", "Word"],
    downloads: "6.7K",
    rating: 4.7,
    featured: false,
  },

  // Documentation
  {
    id: "rfi-template",
    name: "Request for Information (RFI)",
    description: "Professional RFI form with tracking log, response fields, and distribution matrix. Includes automated numbering.",
    category: "Documentation",
    icon: FileText,
    format: ["Excel", "Word", "PDF"],
    downloads: "15.3K",
    rating: 4.9,
    featured: true,
  },
  {
    id: "submittal-log",
    name: "Submittal Log & Tracker",
    description: "Track shop drawings, product data, and samples. Includes status tracking, approval workflow, and revision history.",
    category: "Documentation",
    icon: ClipboardCheck,
    format: ["Excel", "Google Sheets"],
    downloads: "9.8K",
    rating: 4.8,
    featured: false,
  },
  {
    id: "daily-report",
    name: "Daily Construction Report",
    description: "Comprehensive daily log capturing weather, workforce, equipment, work completed, safety incidents, and visitor log.",
    category: "Documentation",
    icon: FileSpreadsheet,
    format: ["Excel", "Word", "PDF"],
    downloads: "18.2K",
    rating: 4.9,
    featured: true,
  },
  {
    id: "meeting-minutes",
    name: "Construction Meeting Minutes",
    description: "Structured meeting template for OAC meetings, progress meetings, and coordination sessions. Includes action item tracking.",
    category: "Documentation",
    icon: Users,
    format: ["Word", "PDF"],
    downloads: "7.4K",
    rating: 4.6,
    featured: false,
  },

  // Financial
  {
    id: "budget-tracker",
    name: "Construction Budget Tracker",
    description: "Detailed cost tracking with original budget, commitments, actual costs, forecasts, and variance analysis by CSI division.",
    category: "Financial",
    icon: DollarSign,
    format: ["Excel", "Google Sheets"],
    downloads: "14.1K",
    rating: 4.9,
    featured: true,
  },
  {
    id: "change-order",
    name: "Change Order Form",
    description: "Professional change order template with cost breakdown, schedule impact, and approval workflow.",
    category: "Financial",
    icon: FileText,
    format: ["Excel", "Word", "PDF"],
    downloads: "11.3K",
    rating: 4.8,
    featured: false,
  },
  {
    id: "pay-application",
    name: "Pay Application (AIA G702/G703)",
    description: "Industry-standard payment application forms with schedule of values and continuation sheet.",
    category: "Financial",
    icon: FileSpreadsheet,
    format: ["Excel", "PDF"],
    downloads: "10.5K",
    rating: 4.7,
    featured: false,
  },

  // Safety
  {
    id: "safety-checklist",
    name: "Site Safety Inspection Checklist",
    description: "Comprehensive OSHA-compliant safety inspection checklist covering PPE, fall protection, scaffolding, electrical, and more.",
    category: "Safety",
    icon: Shield,
    format: ["Excel", "PDF", "Word"],
    downloads: "13.7K",
    rating: 4.9,
    featured: true,
  },
  {
    id: "jsa-template",
    name: "Job Safety Analysis (JSA)",
    description: "Step-by-step hazard analysis template for identifying risks and control measures for construction tasks.",
    category: "Safety",
    icon: AlertTriangle,
    format: ["Excel", "Word", "PDF"],
    downloads: "8.9K",
    rating: 4.8,
    featured: false,
  },
  {
    id: "incident-report",
    name: "Incident Report Form",
    description: "Detailed incident/accident report template with investigation findings, root cause analysis, and corrective actions.",
    category: "Safety",
    icon: ClipboardCheck,
    format: ["Word", "PDF"],
    downloads: "6.2K",
    rating: 4.7,
    featured: false,
  },

  // Quality
  {
    id: "punch-list",
    name: "Punch List Template",
    description: "Organized punch list with location tracking, photo attachment fields, responsible party assignment, and completion status.",
    category: "Quality",
    icon: CheckSquare,
    format: ["Excel", "PDF"],
    downloads: "16.8K",
    rating: 4.9,
    featured: true,
  },
  {
    id: "quality-checklist",
    name: "Quality Control Checklist",
    description: "Trade-specific QC checklists for concrete, steel, MEP, finishes, and more. Includes inspection criteria and acceptance standards.",
    category: "Quality",
    icon: ClipboardCheck,
    format: ["Excel", "PDF"],
    downloads: "9.1K",
    rating: 4.8,
    featured: false,
  },

  // Resources
  {
    id: "equipment-log",
    name: "Equipment Log & Tracker",
    description: "Track equipment usage, maintenance schedules, operator assignments, and rental costs across your project.",
    category: "Resources",
    icon: Truck,
    format: ["Excel", "Google Sheets"],
    downloads: "5.4K",
    rating: 4.6,
    featured: false,
  },
  {
    id: "labor-tracker",
    name: "Labor Hours Tracker",
    description: "Track workforce hours by trade, calculate labor costs, and analyze productivity. Includes overtime calculations.",
    category: "Resources",
    icon: HardHat,
    format: ["Excel", "Google Sheets"],
    downloads: "7.8K",
    rating: 4.7,
    featured: false,
  },
  {
    id: "material-tracker",
    name: "Material Procurement Tracker",
    description: "Manage material orders, deliveries, and inventory. Includes lead time tracking and reorder alerts.",
    category: "Resources",
    icon: Wrench,
    format: ["Excel", "Google Sheets"],
    downloads: "6.3K",
    rating: 4.6,
    featured: false,
  },
];

const categories = [
  "All",
  "Project Planning",
  "Documentation",
  "Financial",
  "Safety",
  "Quality",
  "Resources",
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = (template: Template) => {
    setSelectedTemplate(template);
    setShowModal(true);
    setDownloadSuccess(false);
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedTemplate) return;

    setIsSubmitting(true);
    
    // Simulate API call - in production, this would send to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setDownloadSuccess(true);
    
    // Auto-close modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
      setSelectedTemplate(null);
      setDownloadSuccess(false);
    }, 3000);
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTemplates = templates.filter((t) => t.featured);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
            Free Download Library
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Construction Project Templates
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">
            Professional templates used by thousands of construction managers.
            Download free Gantt charts, RFI forms, daily logs, safety
            checklists, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Templates */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-2">Most Popular Templates</h2>
          <p className="text-sm text-white/60">
            Our highest-rated templates downloaded by thousands of professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTemplates.slice(0, 4).map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl p-5 hover:border-purple-500/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <template.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-xs">{template.rating}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {template.name}
              </h3>
              <p className="text-xs text-white/60 mb-3 line-clamp-2">
                {template.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40">
                  {template.downloads} downloads
                </span>
                <button 
                  onClick={() => handleDownloadClick(template)}
                  className="flex items-center gap-1 text-purple-400 text-xs font-medium hover:text-purple-300 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Filter & All Templates */}
      <section className="container mx-auto px-4 py-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-purple-500 text-white"
                  : "bg-gray-900/50 border border-white/10 text-white/70 hover:border-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg flex-shrink-0">
                  <template.icon className="w-6 h-6 text-white/70" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {template.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400 flex-shrink-0">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs">{template.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 mb-3">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.format.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2 py-0.5 bg-gray-800/50 rounded text-xs text-white/50"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      {template.downloads} downloads
                    </span>
                    <button 
                      onClick={() => handleDownloadClick(template)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-xs font-medium hover:bg-purple-500/30 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <p className="text-white/60">
              No templates found matching your criteria
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Go Beyond Templates with Space AI
              </h2>
              <p className="text-white/70 mb-6">
                Templates are a great start, but Space AI automates everything.
                AI-powered scheduling, automatic document classification, and
                predictive analytics — no more manual data entry.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckSquare className="w-4 h-4 text-green-400" />
                  Auto-generate RFIs and submittals
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckSquare className="w-4 h-4 text-green-400" />
                  AI-optimized project schedules
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckSquare className="w-4 h-4 text-green-400" />
                  Real-time budget tracking & forecasting
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckSquare className="w-4 h-4 text-green-400" />
                  Digital daily reports with photo capture
                </li>
              </ul>
              <Link href="/construction-software-demo/">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  See Space AI in Action
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <CheckSquare className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 bg-gray-700/50 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700/30 rounded w-1/2 mt-1"></div>
                    </div>
                    <span className="text-green-400 text-xs">Automated</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <BarChart className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 bg-gray-700/50 rounded w-2/3"></div>
                      <div className="h-2 bg-gray-700/30 rounded w-1/3 mt-1"></div>
                    </div>
                    <span className="text-purple-400 text-xs">AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 bg-gray-700/50 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-700/30 rounded w-2/5 mt-1"></div>
                    </div>
                    <span className="text-blue-400 text-xs">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Download Modal */}
      <AnimatePresence>
        {showModal && selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-gray-900 border border-white/20 rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {!downloadSuccess ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Download className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Download Template
                        </h3>
                        <p className="text-sm text-white/60">
                          {selectedTemplate.name}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-white/70 text-sm mb-4">
                    Enter your email to download this free template. We&apos;ll also
                    send you construction tips and updates (unsubscribe anytime).
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs text-white/50">Available formats:</span>
                      {selectedTemplate.format.map((fmt) => (
                        <span
                          key={fmt}
                          className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                        >
                          {fmt}
                        </span>
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Download Free Template
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-white/40 mt-3 text-center">
                    By downloading, you agree to our{" "}
                    <Link href="/privacy-policy/" className="text-purple-400 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Download Started!
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Your template is downloading. Check your email for additional
                    formats and helpful tips.
                  </p>
                  <p className="text-xs text-white/50">
                    This window will close automatically...
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
