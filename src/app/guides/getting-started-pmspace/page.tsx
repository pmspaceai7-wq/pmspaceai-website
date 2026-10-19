// Task 66: Getting Started with Space AI Guide
// SEO Target: "getting started construction software", "Space AI tutorial", "construction management onboarding"

import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Clock,
  Users,
  Settings,
  FileText,
  BarChart3,
  Calendar,
  Building,
  Shield,
  Zap,
  BookOpen,
  Video,
  MessageSquare,
  HelpCircle,
  Rocket,
  Target,
  Layers,
  FolderOpen,
  UserPlus,
  Bell,
  Smartphone,
  AlertTriangle,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Getting Started with Space AI | Complete Setup Guide 2026",
  description:
    "Complete guide to setting up Space AI construction management software. Step-by-step onboarding, configuration, and best practices for your team.",
  keywords:
    "getting started Space AI, Space AI tutorial, construction software setup, Space AI onboarding, construction management training, Space AI guide",
  openGraph: {
    title: "Getting Started with Space AI | Complete Setup Guide",
    description:
      "Complete guide to setting up Space AI construction management software for your team.",
    type: "article",
    url: "https://pmspace.ai/guides/getting-started-pmspace/",
  },
  alternates: {
    canonical: "https://pmspace.ai/guides/getting-started-pmspace/",
  },
};

const quickStartSteps = [
  {
    step: 1,
    title: "Create Your Account",
    duration: "2 minutes",
    description: "Sign up with your work email and verify your account. You'll receive immediate access to your organization workspace.",
    actions: ["Visit pmspace.ai/try-it-now", "Enter work email", "Set password", "Verify email"],
    tip: "Use your company domain email to enable automatic team discovery.",
  },
  {
    step: 2,
    title: "Set Up Your Organization",
    duration: "5 minutes",
    description: "Configure your company profile, upload your logo, and set your default settings for all projects.",
    actions: ["Add company name and logo", "Set timezone and currency", "Configure fiscal year", "Set up cost codes"],
    tip: "Import your existing cost code structure from a CSV file to save time.",
  },
  {
    step: 3,
    title: "Create Your First Project",
    duration: "10 minutes",
    description: "Add your first project with key details, team members, and initial settings.",
    actions: ["Enter project details", "Set budget and schedule", "Define project phases", "Upload key documents"],
    tip: "Start with a smaller project to learn the system before migrating complex projects.",
  },
  {
    step: 4,
    title: "Invite Your Team",
    duration: "5 minutes",
    description: "Add team members, set permissions, and configure their access levels.",
    actions: ["Import team from CSV or manually add", "Assign roles and permissions", "Send invitations", "Configure notifications"],
    tip: "Use role-based templates to quickly assign appropriate permissions.",
  },
  {
    step: 5,
    title: "Connect Integrations",
    duration: "10 minutes",
    description: "Link Space AI with your existing tools like accounting, design software, and communication platforms.",
    actions: ["Browse integration marketplace", "Connect accounting system", "Link design tools", "Set up email sync"],
    tip: "Start with your most-used integrations and add more as needed.",
  },
];

const onboardingModules = [
  {
    module: "Project Setup Essentials",
    duration: "30 min",
    topics: ["Creating projects", "Budget structure", "Team assignment", "Document organization"],
    icon: <FolderOpen className="w-8 h-8" />,
    level: "Beginner",
  },
  {
    module: "Document Management Mastery",
    duration: "45 min",
    topics: ["Uploading documents", "Version control", "Drawing sets", "RFI workflows"],
    icon: <FileText className="w-8 h-8" />,
    level: "Beginner",
  },
  {
    module: "Schedule Management",
    duration: "60 min",
    topics: ["Creating schedules", "Task dependencies", "Progress tracking", "AI predictions"],
    icon: <Calendar className="w-8 h-8" />,
    level: "Intermediate",
  },
  {
    module: "Cost Control & Budgeting",
    duration: "60 min",
    topics: ["Budget setup", "Cost tracking", "Change orders", "Financial reports"],
    icon: <BarChart3 className="w-8 h-8" />,
    level: "Intermediate",
  },
  {
    module: "Field Operations",
    duration: "45 min",
    topics: ["Mobile app usage", "Daily reports", "Photo documentation", "Punch lists"],
    icon: <Smartphone className="w-8 h-8" />,
    level: "Beginner",
  },
  {
    module: "AI Features Deep Dive",
    duration: "45 min",
    topics: ["AI Copilot", "Predictive analytics", "Smart search", "Automation"],
    icon: <Zap className="w-8 h-8" />,
    level: "Advanced",
  },
];

const roleGuides = [
  {
    role: "Project Manager",
    description: "Full project oversight including schedules, budgets, and team coordination",
    keyFeatures: ["Dashboard overview", "Schedule management", "Cost tracking", "Team communication"],
    firstSteps: ["Set up project dashboard", "Import schedule", "Configure alerts", "Invite team members"],
    icon: <Target className="w-6 h-6" />,
  },
  {
    role: "Superintendent",
    description: "Field operations management with focus on daily activities and safety",
    keyFeatures: ["Daily logs", "Safety tracking", "Subcontractor coordination", "Photo documentation"],
    firstSteps: ["Download mobile app", "Set up daily report template", "Configure safety checklists", "Learn photo markup"],
    icon: <Building className="w-6 h-6" />,
  },
  {
    role: "Project Engineer",
    description: "Technical coordination including RFIs, submittals, and design issues",
    keyFeatures: ["RFI management", "Submittal tracking", "Drawing management", "Meeting notes"],
    firstSteps: ["Set up RFI workflow", "Configure submittal log", "Upload drawing sets", "Create meeting templates"],
    icon: <Layers className="w-6 h-6" />,
  },
  {
    role: "Project Accountant",
    description: "Financial management including budgets, billing, and cost reporting",
    keyFeatures: ["Budget management", "Pay applications", "Change orders", "Financial reports"],
    firstSteps: ["Import budget", "Connect accounting system", "Set up cost codes", "Configure report templates"],
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    role: "Executive/Owner",
    description: "Portfolio oversight with high-level dashboards and reporting",
    keyFeatures: ["Portfolio dashboard", "Executive reports", "Risk overview", "Resource allocation"],
    firstSteps: ["Configure executive dashboard", "Set up automated reports", "Review AI insights", "Define KPI thresholds"],
    icon: <Shield className="w-6 h-6" />,
  },
];

const bestPractices = [
  {
    category: "Project Setup",
    practices: [
      "Use consistent naming conventions across all projects",
      "Set up your cost code structure before creating projects",
      "Create project templates for similar project types",
      "Define milestone payment triggers early",
    ],
  },
  {
    category: "Team Management",
    practices: [
      "Use role-based permission templates for consistency",
      "Require two-factor authentication for security",
      "Set up notification preferences to avoid alert fatigue",
      "Create user groups for bulk communication",
    ],
  },
  {
    category: "Document Control",
    practices: [
      "Establish a clear folder structure and naming convention",
      "Use version control for all key documents",
      "Link documents to relevant RFIs and change orders",
      "Set up automated backups and retention policies",
    ],
  },
  {
    category: "Daily Operations",
    practices: [
      "Complete daily reports before leaving the site",
      "Attach photos to substantiate progress claims",
      "Use mobile app for real-time updates",
      "Review AI alerts each morning",
    ],
  },
];

const supportResources = [
  {
    resource: "Knowledge Base",
    description: "Searchable articles covering every Space AI feature",
    link: "/resources",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    resource: "Video Tutorials",
    description: "Step-by-step video guides for common workflows",
    link: "/resources/video-library",
    icon: <Video className="w-6 h-6" />,
  },
  {
    resource: "Live Chat Support",
    description: "Real-time help from our support team",
    link: "#",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    resource: "Community Forum",
    description: "Connect with other Space AI users",
    link: "#",
    icon: <Users className="w-6 h-6" />,
  },
  {
    resource: "Webinars & Training",
    description: "Live training sessions and recorded webinars",
    link: "/resources/webinars",
    icon: <PlayCircle className="w-6 h-6" />,
  },
  {
    resource: "Implementation Services",
    description: "Hands-on help from our professional services team",
    link: "/contact-sales",
    icon: <UserPlus className="w-6 h-6" />,
  },
];

const commonMistakes = [
  {
    mistake: "Not setting up cost codes before creating projects",
    impact: "Inconsistent cost tracking across projects",
    solution: "Import or create your cost code structure first, then use it as a template for all projects",
  },
  {
    mistake: "Inviting entire team before configuring permissions",
    impact: "Users see data they shouldn't or can't access what they need",
    solution: "Set up role templates with appropriate permissions, then assign roles during invitation",
  },
  {
    mistake: "Uploading all documents without organization",
    impact: "Users can't find documents, leading to duplicate uploads",
    solution: "Establish folder structure and naming conventions before bulk uploads",
  },
  {
    mistake: "Not configuring notifications",
    impact: "Alert fatigue from too many notifications or missing critical alerts",
    solution: "Customize notifications per user role with appropriate thresholds",
  },
  {
    mistake: "Skipping mobile app setup",
    impact: "Field teams don't adopt the system, data entry lags",
    solution: "Prioritize mobile training for field users, make it part of daily routine",
  },
];

const migrationChecklist = [
  {
    phase: "Pre-Migration",
    items: [
      "Export data from existing systems",
      "Clean up historical data (archive old projects)",
      "Document current workflows and processes",
      "Identify key users for pilot testing",
      "Schedule training sessions",
    ],
  },
  {
    phase: "Data Migration",
    items: [
      "Import company settings and cost codes",
      "Migrate active project data",
      "Upload key documents and drawings",
      "Verify data accuracy post-import",
      "Set up integrations with existing systems",
    ],
  },
  {
    phase: "Team Onboarding",
    items: [
      "Conduct role-based training sessions",
      "Distribute quick reference guides",
      "Set up support channels for questions",
      "Run parallel operations during transition",
      "Gather feedback and adjust workflows",
    ],
  },
  {
    phase: "Go-Live",
    items: [
      "Switch to Space AI as primary system",
      "Monitor adoption metrics",
      "Address issues as they arise",
      "Celebrate early wins with team",
      "Schedule 30-day review",
    ],
  },
];

const faqs = [
  {
    question: "How long does it take to set up Space AI for my organization?",
    answer: "Basic setup takes about 30 minutes—creating your account, configuring company settings, and creating your first project. Full implementation with data migration, team training, and integration setup typically takes 2-4 weeks depending on your organization's size and complexity. We offer implementation packages that include hands-on support to accelerate this process.",
  },
  {
    question: "Can I import data from my existing construction software?",
    answer: "Yes, Space AI supports data import from most major construction management platforms including Procore, Autodesk Construction Cloud, PlanGrid, and others. We can import projects, contacts, documents, cost data, and more. Our implementation team can assist with complex migrations, or you can use our self-service import tools for standard formats like CSV and Excel.",
  },
  {
    question: "What training resources are available?",
    answer: "Space AI provides comprehensive training resources including: on-demand video tutorials for every feature, live webinars with Q&A, role-based training guides, an extensive knowledge base, in-app contextual help, and live chat support. Enterprise customers receive dedicated training sessions customized to their workflows and can access our professional services team for hands-on onboarding.",
  },
  {
    question: "How do I get my field team to adopt Space AI?",
    answer: "Field adoption is key to success. We recommend: starting with the mobile app (it's intuitive and designed for field use), making daily reports the first required workflow, showing how Space AI saves time vs. paper processes, recognizing and rewarding early adopters, and addressing feedback quickly. Our field-focused training materials are designed for crew members who may be less tech-savvy.",
  },
  {
    question: "Can I customize Space AI for my company's workflows?",
    answer: "Yes, Space AI is highly customizable. You can create custom fields, configure workflows to match your processes, design report templates, set up role-based permissions, create project templates, and configure automated notifications. For enterprise customers, our team can help implement advanced customizations including custom integrations and workflows.",
  },
  {
    question: "What support is available if I get stuck?",
    answer: "Space AI provides multiple support channels: in-app help with contextual guidance, a searchable knowledge base with 500+ articles, live chat support during business hours, email support with guaranteed response times, phone support for enterprise customers, and community forums for peer advice. Our customer success team also proactively monitors adoption and reaches out to help.",
  },
];

export default function GettingStartedSpaceAIPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
              Getting Started
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              Complete Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Getting Started with Space AI
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Your complete guide to setting up Space AI construction management software. 
            From account creation to team onboarding in one comprehensive resource.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/try-it-now/"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" /> Start Free Trial
            </Link>
            <Link
              href="/construction-software-demo/"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> Watch Demo
            </Link>
          </div>
          <p className="text-white/50 text-sm mt-6">
            <Clock className="w-4 h-4 inline mr-1" /> Estimated setup time: 30 minutes
          </p>
        </div>
      </section>

      {/* Quick Start Steps */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Quick Start in 5 Steps</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Get up and running with Space AI in under an hour with this step-by-step guide.
          </p>
          <div className="space-y-6">
            {quickStartSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-white/10 to-transparent border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-12 gap-0">
                  <div className="md:col-span-1 p-6 bg-purple-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="md:col-span-7 p-6 border-r border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="text-xs text-white/50 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.duration}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.actions.map((action, actionIdx) => (
                        <span
                          key={actionIdx}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                        >
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-4 p-6 bg-green-500/5">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs text-green-400 font-medium">Pro Tip</span>
                        <p className="text-white/60 text-sm mt-1">{step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Modules */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Training Modules</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Self-paced learning modules to master every aspect of Space AI.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onboardingModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                    {module.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    module.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    module.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {module.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{module.module}</h3>
                <p className="text-white/50 text-sm mb-4 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {module.duration}
                </p>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="text-sm text-white/70 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Guides */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Guides by Role</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Tailored getting started guides for every team member role.
          </p>
          <div className="space-y-6">
            {roleGuides.map((guide, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="p-6 border-r border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        {guide.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{guide.role}</h3>
                    </div>
                    <p className="text-white/60 text-sm">{guide.description}</p>
                  </div>
                  <div className="p-6 border-r border-white/10">
                    <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {guide.keyFeatures.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-sm text-white/80 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-purple-500/5">
                    <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">First Steps</h4>
                    <ol className="space-y-2">
                      {guide.firstSteps.map((step, stepIdx) => (
                        <li key={stepIdx} className="text-sm text-white/80 flex items-start gap-2">
                          <span className="w-5 h-5 bg-purple-500/30 rounded-full flex items-center justify-center text-xs shrink-0">
                            {stepIdx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Best Practices</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Tips from successful Space AI implementations to maximize your success.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((section, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{section.category}</h3>
                <ul className="space-y-3">
                  {section.practices.map((practice, practiceIdx) => (
                    <li key={practiceIdx} className="text-sm text-white/80 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Common Mistakes to Avoid</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Learn from others&apos; experiences—avoid these common setup pitfalls.
          </p>
          <div className="space-y-4">
            {commonMistakes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-400 mb-1">{item.mistake}</h3>
                    <p className="text-white/60 text-sm mb-3">
                      <strong className="text-white/80">Impact:</strong> {item.impact}
                    </p>
                    <div className="flex items-start gap-2 p-3 bg-green-500/10 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-green-300">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Checklist */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Migration Checklist</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Moving from another system? Follow this checklist for a smooth transition.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationChecklist.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold">{phase.phase}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-white/70 flex items-start gap-2">
                      <div className="w-4 h-4 border border-white/30 rounded mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Support Resources</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Get help when you need it with our comprehensive support ecosystem.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportResources.map((resource, idx) => (
              <Link
                key={idx}
                href={resource.link}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors group"
              >
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.resource}</h3>
                <p className="text-white/60 text-sm">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
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
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of construction professionals using Space AI to deliver projects on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/try-it-now/"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" /> Start Free Trial
              </Link>
              <Link
                href="/contact-sales/"
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />
    </div>
  );
}

