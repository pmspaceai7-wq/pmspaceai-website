"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Database,
  Brain,
  CalendarClock,
  FileSearch,
  Workflow,
  ShoppingCart,
  Layers,
  HardHat,
  Users,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const platformFeatures = [
  {
    icon: Database,
    title: "Common Data Platform",
    subtitle: "Single Source of Truth",
    why: "Eliminates fragmented systems and creates a centralized operational intelligence layer across every project and stakeholder.",
    accent: "from-violet-600 to-purple-700",
    border: "border-violet-500/30",
    tag: "bg-violet-900/40 text-violet-300",
  },
  {
    icon: Brain,
    title: "AI Construction Intelligence Engine",
    subtitle: "Predictive Decision-Making",
    why: "Shifts teams from reactive management to predictive decision-making — catching risks before they become delays or cost overruns.",
    accent: "from-cyan-600 to-teal-700",
    border: "border-cyan-500/30",
    tag: "bg-cyan-900/40 text-cyan-300",
  },
  {
    icon: CalendarClock,
    title: "AI Scheduling & Project Controls",
    subtitle: "Schedule Predictability",
    why: "Reduces schedule overruns and improves project predictability by automatically optimizing timelines against live site data.",
    accent: "from-blue-600 to-indigo-700",
    border: "border-blue-500/30",
    tag: "bg-blue-900/40 text-blue-300",
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    subtitle: "Document Intelligence",
    why: "Find any document within seconds and automate document-heavy processes. McKinsey 2023 Digital Construction Report found that AI-enhanced common data environments reduce document retrieval time by 30% and version control errors by 25%, while Space AI users see even greater gains through intelligent automation.",
    accent: "from-emerald-600 to-green-700",
    border: "border-emerald-500/30",
    tag: "bg-emerald-900/40 text-emerald-300",
  },
  {
    icon: Workflow,
    title: "AI Workflow Orchestration",
    subtitle: "No-Code Automation",
    why: "Automates operational workflows without coding — from RFI routing to approval chains — freeing teams for high-value work.",
    accent: "from-orange-600 to-amber-700",
    border: "border-orange-500/30",
    tag: "bg-orange-900/40 text-orange-300",
  },
  {
    icon: ShoppingCart,
    title: "Autonomous Procurement Platform",
    subtitle: "Faster Tender Cycles",
    why: "Tender cycles reduced from weeks to minutes — consistent with McKinsey 2023 Construction Productivity Report findings that AI-assisted procurement cuts bid evaluation time by over 70%. AI evaluates bids, flags anomalies, and surfaces the best-fit vendors automatically.",
    accent: "from-rose-600 to-pink-700",
    border: "border-rose-500/30",
    tag: "bg-rose-900/40 text-rose-300",
  },
  {
    icon: Layers,
    title: "BIM & Digital Twin Platform",
    subtitle: "Connected Digital Environment",
    why: "Creates a connected digital twin environment where design, construction, and operations data converge in real time.",
    accent: "from-sky-600 to-blue-700",
    border: "border-sky-500/30",
    tag: "bg-sky-900/40 text-sky-300",
  },
  {
    icon: HardHat,
    title: "Field Management",
    subtitle: "Field-to-Office Visibility",
    why: "Improves visibility between field and office teams — daily reports, inspections, punch lists, and progress captured on site, visible instantly.",
    accent: "from-yellow-600 to-orange-700",
    border: "border-yellow-500/30",
    tag: "bg-yellow-900/40 text-yellow-300",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    subtitle: "Unified Stakeholder Platform",
    why: "Keeps all stakeholders — owners, contractors, consultants, and subcontractors — aligned on one platform with role-based access.",
    accent: "from-teal-600 to-cyan-700",
    border: "border-teal-500/30",
    tag: "bg-teal-900/40 text-teal-300",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    subtitle: "Compliance Risk Reduction",
    why: "Reduces compliance risk and improves safety performance through AI-driven inspection tracking, incident reporting, and regulatory audit trails.",
    accent: "from-red-600 to-rose-700",
    border: "border-red-500/30",
    tag: "bg-red-900/40 text-red-300",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    subtitle: "Portfolio-Scale Intelligence",
    why: "Enables data-driven decision making at portfolio scale — live dashboards, executive summaries, and predictive forecasts in one view.",
    accent: "from-indigo-600 to-violet-700",
    border: "border-indigo-500/30",
    tag: "bg-indigo-900/40 text-indigo-300",
  },
];

function FeatureCard({ feature, index }: { feature: typeof platformFeatures[0]; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`group relative rounded-2xl border ${feature.border} bg-white/[0.03] hover:bg-white/[0.06] p-6 transition-all duration-300 flex flex-col gap-4`}
    >
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center shadow-lg`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide mb-2 ${feature.tag}`}>
          {feature.subtitle}
        </span>
        <h3 className="text-white font-bold text-lg leading-snug mb-2">{feature.title}</h3>
        <p className="text-white/55 text-sm leading-relaxed">{feature.why}</p>
      </div>
      <div className={`h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${feature.accent} transition-all duration-500 rounded-full mt-auto`} />
    </motion.div>
  );
}

function MeetupPhoto({ src, alt, title, index }: { src: string; alt: string; title: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      <div className="absolute top-0 left-0 right-0 p-5 sm:p-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 group-hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse group-hover:bg-white" />
          <h3 className="text-white text-lg sm:text-xl font-bold tracking-wide">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative w-[320px] sm:w-[400px] aspect-[4/3] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-lg shadow-black/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/30">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        sizes="(max-width: 768px) 320px, 400px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(107,33,168,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HERO ── */}
        <section className="pt-16 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-900/50 text-violet-300 border border-violet-500/30 mb-6">
              About Space AI
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI-Native
              </span>{" "}
              Construction<br className="hidden sm:block" /> Intelligence Platform
            </h1>
            <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed mb-10">
              Space AI combines project management, AI agents, workflow automation, document intelligence,
              BIM, procurement, and predictive analytics into a unified ecosystem — built for how
              the construction industry actually works.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/try-it-now/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/space-team/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/[0.05] text-white font-semibold text-sm hover:bg-white/[0.10] transition-colors"
              >
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── BRAND STORY ── */}
        <section className="pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">
                Why We Built Space AI
              </h2>
              <div className="space-y-4 text-white/60 text-base leading-relaxed max-w-4xl">
                <p>
                  Construction is one of the world&apos;s largest industries — and one of its least digitized. Projects routinely run over budget, behind schedule, and buried under paperwork. The problem isn&apos;t a lack of software. It&apos;s that existing tools were built for document management, not intelligence.
                </p>
                <p>
                  Space AI was founded to change that. We started from a simple belief: that every construction decision — from procurement to safety to scheduling — should be informed by real-time data and augmented by AI. Not AI bolted onto a legacy product, but AI designed into the foundation of every workflow.
                </p>
                <p>
                  Our team brings together decades of experience across AEC project delivery, enterprise AI, and digital transformation across Asia, the Middle East, Europe, and the Americas. We built Space AI for the enterprises that are building the world — and who deserve tools as sophisticated as the projects they deliver.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PLATFORM CAPABILITIES ── */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Platform Capabilities
            </h2>
            <p className="text-white/55 text-base max-w-2xl mx-auto">
              Eleven integrated modules. One unified platform. Every capability designed to work together — not as separate tools bolted side by side.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">
                Our Vision
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-4xl">
                &ldquo;To be the leading innovators in AI-powered project information and collaboration, empowering the AEC industry with transformative, results-driven solutions that shape the future of enterprise efficiency&rdquo;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">
                Our Mission
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-4xl">
                We aspire to empower enterprises in the architectural, engineering, and construction sectors with cutting-edge, results-driven solutions that enhance operational efficiency, facilitate seamless collaboration and drive transformative advancements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── COMPANY MEETUP ── */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-900/50 text-cyan-300 border border-cyan-500/30 mb-6">
              Team Moments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              The People Behind Space AI
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-4">
              Company Meetup
            </h3>
            <p className="text-white/55 text-base max-w-2xl mx-auto">
              Bringing the team together to celebrate milestones, share ideas, and build the future of construction intelligence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-10">
            <MeetupPhoto
              src="/assets/images/about-meetup/space-ai-founders-company-meetup.png"
              alt="Space AI founders celebrating with a company cake"
              title="Founders"
              index={0}
            />
            <p className="mt-4 text-center text-white/60 text-sm sm:text-base font-medium">
              Our Founders — celebrating the milestones that shape the journey of Space AI.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
              <iframe
                src="https://www.youtube.com/embed/Vb65FT-lU2o"
                title="Space AI Team Meetup"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">
              The <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Team</span>
            </h3>
            <p className="text-center text-white/60 text-sm sm:text-base font-medium mb-6">
              From meetings to milestones — the people making it happen every day.
            </p>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-5 w-max"
                animate={{ x: [0, -80, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <MarqueeItem
                  src="/assets/images/about-meetup/space-ai-team-meetup.jpeg"
                  alt="Space AI team meeting around a long table"
                />
                <MarqueeItem
                  src="/assets/images/about-meetup/space-ai-team-relaxing-meetup.jpeg"
                  alt="Space AI team relaxing together during a meetup"
                />
                <MarqueeItem
                  src="/assets/images/about-meetup/spaceai.png"
                  alt="Space AI"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent" />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-900/20 to-cyan-900/10 p-10 md:p-14 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to See It in Action?
            </h2>
            <p className="text-white/55 text-base max-w-xl mx-auto mb-8">
              See how Space AI can transform the way your teams plan, build, and deliver — from the first blueprint to the final handover.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/try-it-now/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/space-team/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 bg-white/[0.05] text-white font-semibold hover:bg-white/[0.10] transition-colors"
              >
                Meet Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
