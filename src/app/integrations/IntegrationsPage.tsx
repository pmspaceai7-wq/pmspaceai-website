"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Search,
  Layers,
  FileText,
  DollarSign,
  Cloud,
  Building,
  Shield,
  Zap,
  Link as LinkIcon,
  RefreshCw,
  FileSignature,
  Camera,
  Users,
  GitBranch,
  Briefcase,
  BarChart3,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Integration {
  name: string;
  description: string;
  category: string;
  logo: string;
  features: string[];
  popular: boolean;
}

const integrations: Integration[] = [
  // Design & BIM
  {
    name: "Autodesk AutoCAD",
    description: "Sync 2D drawings and annotations directly with Space AI for seamless document management.",
    category: "Design & BIM",
    logo: "/assets/integrations/autocad.svg",
    features: ["Drawing sync", "Version control", "Markup export"],
    popular: true,
  },
  {
    name: "Autodesk Revit",
    description: "Import BIM models, track changes, and coordinate with Revit workflows.",
    category: "Design & BIM",
    logo: "/assets/integrations/revit.svg",
    features: ["BIM import", "Model coordination", "Clash detection"],
    popular: true,
  },
  {
    name: "Autodesk BIM 360",
    description: "Bi-directional sync with BIM 360 for comprehensive project data management.",
    category: "Design & BIM",
    logo: "/assets/integrations/bim360.svg",
    features: ["Issue sync", "RFI transfer", "Document linking"],
    popular: true,
  },
  {
    name: "Navisworks",
    description: "Review and coordinate 3D models with Navisworks integration for clash detection.",
    category: "Design & BIM",
    logo: "/assets/integrations/navisworks.svg",
    features: ["Model review", "Clash reports", "4D scheduling"],
    popular: false,
  },
  {
    name: "Trimble SketchUp",
    description: "Import SketchUp models for quick visualization and stakeholder presentations.",
    category: "Design & BIM",
    logo: "/assets/integrations/sketchup.svg",
    features: ["Model import", "3D visualization", "Export support"],
    popular: false,
  },
  {
    name: "Bluebeam Revu",
    description: "Integrate PDF markup workflows and Studio sessions with Space AI projects.",
    category: "Design & BIM",
    logo: "/assets/integrations/bluebeam.svg",
    features: ["PDF sync", "Markup transfer", "Punch lists"],
    popular: true,
  },

  // Accounting & Finance
  {
    name: "QuickBooks",
    description: "Sync invoices, payments, and cost data between Space AI and QuickBooks.",
    category: "Accounting & Finance",
    logo: "/assets/integrations/quickbooks.svg",
    features: ["Invoice sync", "Payment tracking", "Cost codes"],
    popular: true,
  },
  {
    name: "Sage 300 CRE",
    description: "Enterprise-grade integration with Sage 300 for comprehensive financial management.",
    category: "Accounting & Finance",
    logo: "/assets/integrations/sage.svg",
    features: ["Job costing", "AP/AR sync", "Budget import"],
    popular: true,
  },
  {
    name: "Xero",
    description: "Connect with Xero for streamlined invoicing and expense tracking.",
    category: "Accounting & Finance",
    logo: "/assets/integrations/xero.svg",
    features: ["Invoice sync", "Expense tracking", "Bank feeds"],
    popular: false,
  },
  {
    name: "Foundation Software",
    description: "Integrate with Foundation for construction-specific accounting workflows.",
    category: "Accounting & Finance",
    logo: "/assets/integrations/foundation.svg",
    features: ["Job costing", "Payroll sync", "Equipment tracking"],
    popular: false,
  },
  {
    name: "Viewpoint Vista",
    description: "Connect with Viewpoint Vista for comprehensive ERP integration.",
    category: "Accounting & Finance",
    logo: "/assets/integrations/viewpoint.svg",
    features: ["ERP sync", "Project accounting", "HR data"],
    popular: false,
  },

  // Productivity & Collaboration
  {
    name: "Microsoft 365",
    description: "Seamless integration with Outlook, Teams, SharePoint, and OneDrive.",
    category: "Productivity",
    logo: "/assets/integrations/microsoft365.svg",
    features: ["Email sync", "Teams integration", "File storage"],
    popular: true,
  },
  {
    name: "Google Workspace",
    description: "Connect Gmail, Drive, and Calendar for unified project communication.",
    category: "Productivity",
    logo: "/assets/integrations/google.svg",
    features: ["Gmail sync", "Drive storage", "Calendar events"],
    popular: true,
  },
  {
    name: "Slack",
    description: "Get Space AI notifications and updates directly in your Slack channels.",
    category: "Productivity",
    logo: "/assets/integrations/slack.svg",
    features: ["Notifications", "Commands", "File sharing"],
    popular: true,
  },
  {
    name: "Zoom",
    description: "Schedule and launch Zoom meetings directly from Space AI projects.",
    category: "Productivity",
    logo: "/assets/integrations/zoom.svg",
    features: ["Meeting links", "Calendar sync", "Recording storage"],
    popular: false,
  },
  {
    name: "Dropbox",
    description: "Store and sync project files with Dropbox for easy access anywhere.",
    category: "Productivity",
    logo: "/assets/integrations/dropbox.svg",
    features: ["File sync", "Version history", "Sharing"],
    popular: false,
  },
  {
    name: "Box",
    description: "Enterprise file management with Box integration for secure document storage.",
    category: "Productivity",
    logo: "/assets/integrations/box.svg",
    features: ["Secure storage", "Compliance", "Collaboration"],
    popular: false,
  },

  // Scheduling & Planning
  {
    name: "Microsoft Project",
    description: "Import and export schedules between MS Project and Space AI.",
    category: "Scheduling",
    logo: "/assets/integrations/msproject.svg",
    features: ["Schedule import", "Resource sync", "Baseline tracking"],
    popular: true,
  },
  {
    name: "Primavera P6",
    description: "Enterprise scheduling integration with Oracle Primavera P6.",
    category: "Scheduling",
    logo: "/assets/integrations/primavera.svg",
    features: ["CPM sync", "Resource leveling", "Cost loading"],
    popular: true,
  },
  {
    name: "Asta Powerproject",
    description: "Sync schedules with Asta Powerproject for UK/EU construction workflows.",
    category: "Scheduling",
    logo: "/assets/integrations/asta.svg",
    features: ["Schedule sync", "Gantt export", "Progress tracking"],
    popular: false,
  },

  // Field & Mobile
  {
    name: "Procore",
    description: "Bi-directional sync with Procore for teams using both platforms.",
    category: "Field & Mobile",
    logo: "/assets/integrations/procore.svg",
    features: ["RFI sync", "Submittal transfer", "Photo sync"],
    popular: true,
  },
  {
    name: "PlanGrid",
    description: "Import plans and punch lists from PlanGrid into Space AI.",
    category: "Field & Mobile",
    logo: "/assets/integrations/plangrid.svg",
    features: ["Drawing sync", "Punch lists", "Field reports"],
    popular: false,
  },
  {
    name: "Fieldwire",
    description: "Connect field data from Fieldwire with Space AI project management.",
    category: "Field & Mobile",
    logo: "/assets/integrations/fieldwire.svg",
    features: ["Task sync", "Inspections", "Plan markup"],
    popular: false,
  },

  // Hardware & IoT
  {
    name: "DJI Drones",
    description: "Import drone imagery and maps for site documentation and progress tracking.",
    category: "Hardware & IoT",
    logo: "/assets/integrations/dji.svg",
    features: ["Image import", "3D mapping", "Progress photos"],
    popular: false,
  },
  {
    name: "Matterport",
    description: "Embed Matterport 3D scans in Space AI for virtual site tours.",
    category: "Hardware & IoT",
    logo: "/assets/integrations/matterport.svg",
    features: ["3D tours", "Measurements", "Documentation"],
    popular: false,
  },

  // Security & SSO
  {
    name: "Okta",
    description: "Enterprise single sign-on with Okta for secure authentication.",
    category: "Security & SSO",
    logo: "/assets/integrations/okta.svg",
    features: ["SSO", "MFA", "User provisioning"],
    popular: false,
  },
  {
    name: "Azure AD",
    description: "Integrate with Azure Active Directory for Microsoft-based organizations.",
    category: "Security & SSO",
    logo: "/assets/integrations/azuread.svg",
    features: ["SSO", "Group sync", "Conditional access"],
    popular: true,
  },
];

const categories = [
  "All",
  "Design & BIM",
  "Accounting & Finance",
  "Productivity",
  "Scheduling",
  "Field & Mobile",
  "Hardware & IoT",
  "Security & SSO",
];

const categoryIcons: Record<string, React.ElementType> = {
  "Design & BIM": Building,
  "Accounting & Finance": DollarSign,
  Productivity: Layers,
  Scheduling: FileText,
  "Field & Mobile": Cloud,
  "Hardware & IoT": Zap,
  "Security & SSO": Shield,
};

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory =
      selectedCategory === "All" || integration.category === selectedCategory;
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularIntegrations = integrations.filter((i) => i.popular);

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
            50+ Integrations
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Connect Your Construction Software
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">
            Space AI integrates with the tools you already use. Connect your
            design software, accounting systems, and productivity apps for
            seamless data flow across your entire project.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Integration Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "50+", label: "Integrations", icon: LinkIcon },
            { value: "2-Way", label: "Data Sync", icon: RefreshCw },
            { value: "99.9%", label: "Uptime SLA", icon: Zap },
            { value: "24/7", label: "API Access", icon: Cloud },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Space AI Ecosystem Integrations */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-4">
            Native Ecosystem
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Space AI Ecosystem Products</h2>
          <p className="text-sm text-white/60 max-w-2xl">
            These products are built and owned by Space AI. Each one integrates natively with pmspace.ai — sharing data, users, and project context without third-party connectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Space Sign",
              slug: "space-sign",
              url: "https://space-sign.ai",
              tagline: "AI contract analysis & e-signatures",
              icon: FileSignature,
              color: "from-indigo-900/40 to-blue-900/20 border-indigo-500/30 hover:border-indigo-400/60",
              iconColor: "text-indigo-400",
            },
            {
              name: "Space Capture",
              slug: "spacecapture",
              url: "https://spacecapture.ai",
              tagline: "Field inspections & site documentation",
              icon: Camera,
              color: "from-green-900/40 to-emerald-900/20 border-green-500/30 hover:border-green-400/60",
              iconColor: "text-green-400",
            },
            {
              name: "Space Lizit",
              slug: "spacelizit",
              url: "https://spacelizit.com",
              tagline: "Immigration automation for workforce",
              icon: Briefcase,
              color: "from-yellow-900/40 to-amber-900/20 border-yellow-500/30 hover:border-yellow-400/60",
              iconColor: "text-yellow-400",
            },
            {
              name: "SpaceHR",
              slug: "spacehr",
              url: "https://spacehr.net",
              tagline: "HRMS with payroll & workforce analytics",
              icon: Users,
              color: "from-pink-900/40 to-rose-900/20 border-pink-500/30 hover:border-pink-400/60",
              iconColor: "text-pink-400",
            },
            {
              name: "SpaceLean",
              slug: "spacelean",
              url: "https://spacelean.ai",
              tagline: "Lean construction scheduling & 4D BIM",
              icon: GitBranch,
              color: "from-cyan-900/40 to-sky-900/20 border-cyan-500/30 hover:border-cyan-400/60",
              iconColor: "text-cyan-400",
            },
            {
              name: "SpaceNexus",
              slug: "spacenexus",
              url: "https://spacenexus.net",
              tagline: "Virtual data room for M&A & capital raising",
              icon: Shield,
              color: "from-amber-900/40 to-orange-900/20 border-amber-500/30 hover:border-amber-400/60",
              iconColor: "text-amber-400",
            },
            {
              name: "SpaceCRM",
              slug: "spacecrm",
              url: "https://spacecrm.net",
              tagline: "Multi-channel AI CRM for BD teams",
              icon: Mail,
              color: "from-orange-900/40 to-red-900/20 border-orange-500/30 hover:border-orange-400/60",
              iconColor: "text-orange-400",
            },
          ].map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link href={`/integrations/${product.slug}`} className={`block bg-gradient-to-br ${product.color} border rounded-xl p-5 transition-colors group h-full`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className={`w-4 h-4 ${product.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm group-hover:text-white/90">{product.name}</h3>
                    <p className="text-xs text-white/50 mt-0.5">{product.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/40 group-hover:text-white/60 transition-colors mt-3">
                  <span>View integration</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-2">Popular Integrations</h2>
          <p className="text-sm text-white/60">
            Most commonly used integrations by our customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularIntegrations.slice(0, 8).map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 rounded-xl p-5 hover:border-purple-500/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {integration.name}
                </h3>
              </div>
              <p className="text-xs text-white/60 mb-3 line-clamp-2">
                {integration.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {integration.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-0.5 bg-gray-800/50 rounded text-xs text-white/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Filter & All Integrations */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-2">All Integrations</h2>
          <p className="text-sm text-white/60">
            Browse by category or search for specific tools
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors inline-flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "bg-gray-900/50 border border-white/10 text-white/70 hover:border-white/30"
                }`}
              >
                {Icon && <Icon className="w-3 h-3" />}
                {category}
              </button>
            );
          })}
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white/70" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {integration.name}
                    </h3>
                    {integration.popular && (
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-purple-400 mb-2">{integration.category}</p>
                  <p className="text-xs text-white/60 mb-3">
                    {integration.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {integration.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1 px-2 py-0.5 bg-gray-800/50 rounded text-xs text-white/50"
                      >
                        <CheckCircle className="w-2.5 h-2.5 text-green-400" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <LinkIcon className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <p className="text-white/60">
              No integrations found matching your criteria
            </p>
          </div>
        )}
      </section>

      {/* API Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-4">
                Developer API
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Build Custom Integrations
              </h2>
              <p className="text-white/70 mb-6">
                Don&apos;t see your tool? Use our REST API to build custom
                integrations. Full documentation, SDKs, and webhook support
                included.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  RESTful API with JSON responses
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  OAuth 2.0 authentication
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Webhooks for real-time events
                </li>
                <li className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Comprehensive documentation
                </li>
              </ul>
              <Link href="/contact-sales/">
                <button className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors inline-flex items-center gap-2">
                  Request API Access
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-black/50 rounded-xl p-4 font-mono text-xs overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <pre className="text-green-400">
                  <code>{`// Get project data
const response = await fetch(
  'https://api.pmspace.ai/v1/projects',
  {
    headers: {
      'Authorization': 'Bearer <token>',
      'Content-Type': 'application/json'
    }
  }
);

const projects = await response.json();
// Returns: { projects: [...] }`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            See how Space AI integrations can streamline your construction
            workflows and eliminate data silos across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact-sales/">
              <button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
