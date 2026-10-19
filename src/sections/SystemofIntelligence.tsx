"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle, GitBranch, Workflow, Activity, Layers, Shuffle, CalendarDays, Cpu, Quote, Gift } from "lucide-react";
import { useEffect, useState } from "react";
import starBg from "@/assets/stars.png";

// Ensure this image path is correct in your project structure
import systemComparisonBackgroundImage from "@/app/platform/images/system-comparison-background.png";

const competitorNames = ["Procore", "Autodesk Forma / ACC", "Aconex", "Asite", "Fieldwire", "BuilderTrend"];

const RotatingCompetitorName = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const rotationTimer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % competitorNames.length);
    }, 2400);

    return () => window.clearInterval(rotationTimer);
  }, []);

  return (
    <span
      className="relative mt-2 block h-8 overflow-hidden text-xl sm:h-12 sm:text-4xl lg:h-16 lg:text-5xl"
      aria-live="polite"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={competitorNames[activeIndex]}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text uppercase text-transparent drop-shadow-[0_0_18px_rgba(140,69,255,0.32)]"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
          transition={{ duration: 0.42, ease: "easeOut" }}
        >
          {competitorNames[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const legacyWeaknesses = [
  {
    title: "AI Transformation Complexity",
    description:
      "Retrofit AI leaves intelligence trapped in legacy data models, disconnected workflows, and slow integration.",
  },
  {
    title: "Legacy Workflow Architecture",
    description:
      "Workflow-first systems route tasks and store records but cannot reason across BIM, schedules, RFIs, and field updates in real time.",
  },
  {
    title: "Historically Workflow-First",
    description:
      "They document the past instead of becoming predictive operating layers for autonomous construction.",
  },
];

const differentiationMetrics = [
  { legacy: "Reactive", spaceAi: "45 days", label: "Advance warning" },
  { legacy: "Retrofit AI", spaceAi: "92-95%", label: "Prediction accuracy path" },
  { legacy: "Workflow-first", spaceAi: "AI-first", label: "Operating foundation" },
];

const spaceAiCapabilities = [
  {
    title: "Active Intelligence Layer",
    description:
      "Space AI treats intelligence as the operating layer, synthesizing project context instead of waiting for manual workflow updates.",
    icon: BrainCircuit,
  },
  {
    title: "Contextual Project Reasoning",
    description:
      "It connects fragmented data into dependencies, risk signals, schedule logic, and cross-disciplinary construction insight.",
    icon: GitBranch,
  },
  {
    title: "Predictive Orchestration",
    description:
      "Space AI moves teams from reactive management to predictive scheduling, autonomous workflows, and decision support.",
    icon: Workflow,
  },
];

const chooseSpaceAiItems = [
  {
    title: "Predictive Construction Intelligence",
    icon: Activity,
  },
  {
    title: "AI-Driven Workflow Execution",
    icon: Workflow,
  },
  {
    title: "BIM Semantic Reasoning",
    icon: Layers,
  },
  {
    title: "Cross-Platform Orchestration",
    icon: Shuffle,
  },
  {
    title: "Autonomous Scheduling Potential",
    icon: CalendarDays,
  },
  {
    title: "Future Construction Operating Intelligence",
    icon: Cpu,
  },
];

const particleNodes = Array.from({ length: 44 }, (_, index) => ({
  left: (index * 37) % 100,
  top: (index * 53) % 100,
  size: 2 + (index % 4),
  delay: (index % 9) * 0.28,
  duration: 4 + (index % 7) * 0.55,
}));

const cubeFaces = [
  { label: "SPACE AI", transform: "translateZ(var(--cube-depth))", imageSrc: "/assets/images/icononly_transparent_nobuffer.png" },
  { label: "BIM", transform: "rotateY(90deg) translateZ(var(--cube-depth))" },
  { label: "ML", transform: "rotateY(180deg) translateZ(var(--cube-depth))" },
  { label: "DATA", transform: "rotateY(-90deg) translateZ(var(--cube-depth))" },
  { label: "PRED", transform: "rotateX(90deg) translateZ(var(--cube-depth))" },
  { label: "IOT", transform: "rotateX(-90deg) translateZ(var(--cube-depth))" },
];

const IntelligenceParticleField = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [transform:perspective(700px)_rotateX(62deg)_translateY(-18%)]" />
    <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 1000 620" preserveAspectRatio="none">
      <motion.path
        d="M70 220 C220 90 340 280 500 170 S760 60 930 190"
        fill="none"
        stroke="url(#spaceAiLineA)"
        strokeWidth="1.2"
        strokeDasharray="7 18"
        animate={{ pathLength: [0.18, 1, 0.18], opacity: [0.25, 0.85, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M120 460 C310 330 470 520 640 390 S820 300 960 420"
        fill="none"
        stroke="url(#spaceAiLineB)"
        strokeWidth="1.2"
        strokeDasharray="5 15"
        animate={{ pathLength: [1, 0.22, 1], opacity: [0.2, 0.75, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="spaceAiLineA" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="52%" stopColor="#d8b4fe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="spaceAiLineB" x1="0" x2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.18" />
          <stop offset="55%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.28" />
        </linearGradient>
      </defs>
    </svg>
    {particleNodes.map((node, index) => (
      <motion.span
        key={`${node.left}-${node.top}-${index}`}
        className="absolute rounded-full bg-purple-200 shadow-[0_0_16px_rgba(140,69,255,0.72)]"
        style={{
          left: `${node.left}%`,
          top: `${node.top}%`,
          width: node.size,
          height: node.size,
        }}
        animate={{ opacity: [0.16, 0.88, 0.16], y: [-10, 12, -10] }}
        transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

function IntelligenceCube() {
  return (
  <div className="intelligence-cube-wrap relative mx-auto flex w-full items-center justify-center">
    <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl sm:h-52 sm:w-52" />
    <motion.div
      className="absolute h-40 w-40 rounded-full border border-cyan-300/30 sm:h-56 sm:w-56"
      animate={{ rotate: 360 }}
      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute h-48 w-48 rounded-full border border-purple-300/25 sm:h-64 sm:w-64"
      animate={{ rotate: -360 }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    />
    <motion.span
      className="absolute right-10 top-12 h-2 w-2 rounded-full bg-green-300 shadow-[0_0_14px_rgba(134,239,172,0.8)]"
      animate={{ x: [0, 8, -6, 0], y: [0, -6, 5, 0], opacity: [0.7, 1, 0.75, 0.7] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.span
      className="absolute bottom-12 left-12 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]"
      animate={{ x: [0, -7, 6, 0], y: [0, 7, -5, 0], opacity: [0.7, 1, 0.75, 0.7] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="cube-orbit-ring" aria-hidden="true" />
    <div className="competitor-orbit" aria-label="Legacy competitors">
      {competitorNames.map((name, index) => {
        const angle = index * (360 / competitorNames.length);

        return (
          <div
            key={name}
            className="competitor-orbit-item"
            style={{
              transform: `rotate(${angle}deg) translateY(calc(var(--competitor-radius) * -1)) rotate(${-angle}deg)`,
            }}
          >
            <span>{name}</span>
          </div>
        );
      })}
    </div>

    <div className="cube-scene">
      <div className="intelligence-cube">
        {cubeFaces.map((face) => (
          <div key={face.label} className="cube-face" style={{ transform: face.transform }}>
            {face.imageSrc ? (
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={face.imageSrc}
                  alt="Space AI brand icon on the intelligence cube face"
                  width={68}
                  height={68}
                  className="cube-logo object-contain drop-shadow-[0_0_18px_rgba(103,232,249,0.85)]"
                />
                <span className="text-[10px]">{face.label}</span>
              </div>
            ) : (
              face.label
            )}
          </div>
        ))}
      </div>
    </div>

  </div>
  );
}

type SystemOfIntelligenceProps = {
  showFreeTierVideo?: boolean;
  showAlternativeViewMore?: boolean;
  showRecordComparison?: boolean;
  showSupportSections?: boolean;
};

const SystemOfIntelligence = ({
  showFreeTierVideo = false,
  showAlternativeViewMore = true,
  showRecordComparison = true,
  showSupportSections = true,
}: SystemOfIntelligenceProps) => {
  return (
    <>
    {showRecordComparison && (
      <section className="-pt-10 pb-4 sm:pb-5 md:pb-6">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="mb-8 text-center md:mb-12 lg:mb-16">
            <motion.h1
              className="text-xl font-bold leading-snug text-white md:text-2xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              System of Record vs. System of Intelligence
            </motion.h1>
          </div>
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                  className="group relative mx-auto h-72 w-full max-w-xl cursor-pointer overflow-hidden rounded-2xl border border-blue-500/20 sm:h-80 lg:h-96 lg:max-w-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(80, 120, 255, 0.2)", transition: { type: "spring", stiffness: 300 } }}
              >
                  <Image
                      src={systemComparisonBackgroundImage}
                      alt="AI powered dashboards showing predictive analytics"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                  />
              </motion.div>
              <div className="mx-auto w-full max-w-xl space-y-5 lg:max-w-none lg:space-y-8">
                  <motion.div
                      className="rounded-xl border border-white/10 bg-gray-800/20 p-5 sm:p-6 lg:p-8"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                      <h3 className="text-xl font-bold text-white/70 sm:text-2xl">System of Record (The Past)</h3>
                      <ul className="mt-5 space-y-3 text-white/60 sm:mt-6 sm:space-y-4">
                          <li className="flex items-start"><CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" /> Digitized analog workflows</li>
                          <li className="flex items-start"><CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" /> Centralized documentation repository</li>
                          <li className="flex items-start"><CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" /> Answers: &apos;What happened?&apos; (Reactive)</li>
                      </ul>
                  </motion.div>
                  <motion.div
                      className="rounded-xl border border-purple-500/50 bg-purple-900/20 p-5 sm:p-6 lg:p-8"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  >
                      <h3 className="text-xl font-bold text-purple-300 sm:text-2xl">System of Intelligence (The Future)</h3>
                      <ul className="mt-5 space-y-3 text-white sm:mt-6 sm:space-y-4">
                          <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Active data synthesis and prediction</li>
                          <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Leverages ML, computer vision, and AI agents</li>
                          <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /> Answers: &apos;What will happen and what should we do?&apos; (Proactive)</li>
                      </ul>
                  </motion.div>
              </div>
          </div>
        </div>
      </section>
    )}

      {/* AI-Native Alternative Positioning */}
      <section
        className="relative overflow-hidden py-8 sm:py-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 22%, rgba(140, 69, 255, 0.2), rgba(54, 13, 91, 0.12) 28%, transparent 58%),
            radial-gradient(circle at 52% 34%, rgba(251, 146, 60, 0.16), transparent 38%),
            radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.12), transparent 30%),
            linear-gradient(180deg, #07020f 0%, #040008 48%, #000000 100%),
            url(${starBg.src})
          `,
          backgroundPosition: "center top, center top, left top, center, center",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, repeat",
          backgroundSize: "1200px 720px, 860px 560px, 600px 500px, cover, 700px auto",
        }}
      >
        <div className="pointer-events-none absolute left-1/2 top-48 h-[300px] w-[440px] -translate-x-1/2 rounded-full bg-slate-300/4 blur-[92px]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-[18%] top-40 h-72 w-72 rounded-full bg-slate-300/5 blur-[92px]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[14%] top-36 h-72 w-72 rounded-full bg-orange-300/10 blur-[88px]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-[460px] h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-slate-200/4 blur-[110px]" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-[8%] h-72 w-[520px] rounded-full bg-cyan-300/8 blur-[96px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-purple-300/10 sm:h-[720px] sm:w-[720px]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-8 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-white/5 sm:h-[940px] sm:w-[940px]" aria-hidden="true" />
        <div className="container mx-auto px-2 sm:px-6">
          <motion.div
            className="relative mx-auto max-w-6xl overflow-hidden px-2 py-0 sm:px-4 md:px-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 24%, rgba(167, 139, 250, 0.16), rgba(88, 28, 135, 0.1) 28%, transparent 56%),
                radial-gradient(circle at 50% 34%, rgba(251, 146, 60, 0.12), transparent 36%),
                radial-gradient(circle at 18% 28%, rgba(37, 99, 235, 0.1), transparent 32%),
                url(${starBg.src})
              `,
              backgroundPosition: "center top, center top, left top, center",
              backgroundRepeat: "no-repeat, no-repeat, no-repeat, repeat",
              backgroundSize: "980px 620px, 760px 460px, 520px 420px, 560px auto",
            }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-70 blur-2xl sm:h-[620px] sm:w-[620px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.34) 0%, rgba(91, 33, 182, 0.18) 42%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <IntelligenceParticleField />

            <div className="relative mb-3 flex flex-col gap-4 p-2 sm:gap-5 sm:p-4">
              <div className="text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
                  AI-native alternative
                </p>
                <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="block">THE BEST REPLACEMENT FOR</span>
                  <RotatingCompetitorName />
                </h2>
              </div>

              <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-5">
                <IntelligenceCube />
                <div className="mx-auto grid w-full max-w-[340px] grid-cols-[minmax(0,1fr)_104px] items-stretch gap-2 sm:w-auto sm:max-w-none sm:grid-cols-[auto_auto] sm:items-center sm:gap-3">
                  <div className="flex min-h-11 min-w-0 items-center justify-center rounded-full border border-purple-300/20 bg-purple-500/10 px-3 py-2 text-center text-[10px] font-semibold uppercase leading-[1.2] tracking-[0.04em] text-purple-100 sm:min-h-10 sm:rounded-lg sm:px-4 sm:text-xs sm:tracking-[0.22em]">
                    Decision Intelligence Platform
                  </div>
                  <Link
                    href="/try-it-now/"
                    className="inline-flex min-h-11 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 text-[10px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:border-white/25 sm:min-h-10 sm:rounded-lg sm:px-6 sm:text-xs sm:tracking-[0.14em]"
                  >
                    Try it now
                  </Link>
                </div>
                <div className="mx-auto flex w-full items-start gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-3 py-4 text-left sm:gap-3 sm:px-4">
                  <Quote className="mt-1 h-4 w-4 flex-none text-purple-200 sm:h-5 sm:w-5" />
                  <p className="text-[13px] font-semibold leading-6 text-white/90 sm:text-lg sm:leading-7">
                    <span className="text-stone-300">SPACE AI</span> is an AI-native platform for modern construction intelligence.
                    <span className="hidden sm:inline"> It is a modern alternative platform compared to</span>
                    <span className="hidden text-purple-200 sm:inline"> Procore, Autodesk Forma / ACC, Aconex, Asite, Fieldwire, and BuilderTrend.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative my-6 px-3 py-5 sm:px-4">
              <div className="mb-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
                  Legacy vs Space AI
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Legacy weakness, matched to the{" "}
                  <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
                    Space AI response
                  </span>
                </h3>
              </div>

              <div>
                {legacyWeaknesses.map((weakness, index) => {
                  const capability = spaceAiCapabilities[index];
                  const Icon = capability.icon;

                  return (
                    <div
                      key={weakness.title}
                      className="grid gap-4 border-t border-white/10 py-5 first:border-t-0 lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-6"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.22em] text-purple-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h4 className="text-base font-semibold tracking-wide text-white">
                          {weakness.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-white/60">
                          {weakness.description}
                        </p>
                      </div>

                      <div className="lg:border-l lg:border-white/10 lg:pl-6">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[#4a208a]/45 text-purple-100">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h4 className="text-base font-semibold tracking-wide text-white">
                            {capability.title}
                          </h4>
                        </div>
                        <p className="text-sm leading-6 text-white/70">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-5 overflow-hidden px-3 py-6 sm:px-4">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_18%_100%,rgba(140,69,255,0.22),transparent_34%),radial-gradient(circle_at_68%_96%,rgba(251,146,60,0.14),transparent_30%),radial-gradient(circle_at_92%_100%,rgba(196,181,253,0.14),transparent_28%)] blur-2xl" aria-hidden="true" />
              <div className="relative z-10 flex flex-col gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
                    Why SPACE AI?
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Choose SPACE AI when construction intelligence must move{" "}
                    <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
                      beyond data capture
                    </span>
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                  This is the platform for teams that need predictive insight, BIM-aware reasoning, cross-system orchestration, and a foundation built for autonomous scheduling and future operating intelligence.
                </p>
              </div>
              <div className="relative z-10 mt-5 grid gap-x-6 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
                {chooseSpaceAiItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="group flex items-center gap-3 text-white">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[#4a208a]/35 text-purple-100">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-semibold leading-6 text-white/85 transition-colors group-hover:text-white">{item.title}</h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {showAlternativeViewMore && (
              <div className="mt-5 flex justify-center">
                <Link
                  href="/alternatives/legacy-aec-platforms/"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-5 text-sm font-medium text-white transition-colors hover:border-white/25"
                >
                  View more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {showFreeTierVideo && (
        <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden border-y border-white/10 bg-black py-20 text-white sm:py-24">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale"
            src="/videos/space-ai-free-tier-walkthrough.mp4"
            poster="/assets/images/free-tier-youtube-demo-blog-hero.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Space AI Free Tier walkthrough video"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
                Free Tier Walkthrough
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl xl:whitespace-nowrap">
                See How the Free Trial{" "}
                <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-purple-100/85 sm:text-lg">
                Watch the new Space AI Free Tier demo to see how construction teams can start managing project mapping,
                documents, and connected data in one platform without a heavy setup process.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/try-it-now/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
                >
                  <Gift className="h-4 w-4" aria-hidden="true" />
                  Try it now free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=ZV14hsbxR1Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
                >
                  Watch demo video
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {showSupportSections && (
      <>
      {/* Intelligence Benefits */}
      <section className="relative overflow-hidden py-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.1),transparent_36%)]" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
              Intelligence Metrics
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              From Record-Keeping to{" "}
              <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
                Prediction
              </span>
            </h2>
          </div>
          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "85-95%", label: "Prediction Accuracy", desc: "ML models improve continuously as they learn from your projects.", icon: Activity },
              { stat: "45 Days", label: "Advance Warning", desc: "Identify risks over a month before they impact schedules.", icon: CalendarDays },
              { stat: "5+", label: "Data Sources", desc: "Correlates schedule, cost, weather, labor, and supply chain data.", icon: Layers },
              { stat: "Day 1", label: "Immediate Value", desc: "Historical data migration enables predictions from the start.", icon: Cpu },
            ].map((item, i) => {
              const MetricIcon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8c45ff]/45 hover:bg-[#190d2e]/45"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8c45ff]/70 to-transparent" />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-purple-100">
                    <MetricIcon className="h-5 w-5" />
                  </div>
                  <div className="mb-1 text-3xl font-bold tracking-tight text-white">
                    {item.stat}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-purple-200">
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      </>
      )}

      <style jsx global>{`
        .intelligence-cube-wrap {
          --orbit-size: 468px;
          --competitor-radius: 216px;
          --scene-size: 240px;
          --cube-size: 128px;
          --cube-depth: 64px;
          height: 460px;
          max-width: 620px;
        }

        .cube-scene {
          position: relative;
          width: var(--scene-size);
          height: var(--scene-size);
          margin: auto;
          perspective: 900px;
        }

        .intelligence-cube {
          position: absolute;
          inset: 0;
          margin: auto;
          width: var(--cube-size);
          height: var(--cube-size);
          transform-style: preserve-3d;
          animation: space-ai-cube-spin 16s linear infinite;
        }

        .cube-orbit-ring {
          position: absolute;
          inset: 0;
          margin: auto;
          width: var(--orbit-size);
          height: var(--orbit-size);
          border: 1px solid rgba(34, 211, 238, 0.22);
          border-radius: 50%;
          box-shadow:
            0 0 48px rgba(34, 211, 238, 0.16),
            inset 0 0 20px rgba(168, 85, 247, 0.08);
          pointer-events: none;
        }

        .competitor-orbit {
          position: absolute;
          inset: 0;
          margin: auto;
          width: var(--orbit-size);
          height: var(--orbit-size);
          pointer-events: none;
        }

        .competitor-orbit-item {
          position: absolute;
          left: 50%;
          top: 50%;
          transform-origin: 0 0;
        }

        .competitor-orbit-item span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 30px;
          max-width: 168px;
          padding: 0.32rem 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(196, 181, 253, 0.28);
          background:
            linear-gradient(135deg, rgba(25, 13, 46, 0.92), rgba(74, 32, 138, 0.72)),
            rgba(0, 0, 0, 0.58);
          box-shadow:
            0 0 18px rgba(140, 69, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          color: rgba(245, 243, 255, 0.92);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.15;
          text-align: center;
          text-transform: uppercase;
          white-space: normal;
          transform: translate(-50%, -50%);
        }

        .cube-logo {
          width: clamp(46px, 14vw, 68px);
          height: clamp(46px, 14vw, 68px);
        }

        .cube-face {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(103, 232, 249, 0.38);
          background:
            linear-gradient(135deg, rgba(34, 211, 238, 0.12), rgba(168, 85, 247, 0.1)),
            rgba(0, 0, 0, 0.42);
          box-shadow:
            inset 0 0 24px rgba(103, 232, 249, 0.12),
            0 0 22px rgba(168, 85, 247, 0.18);
          color: rgba(236, 254, 255, 0.96);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-shadow: 0 0 16px rgba(103, 232, 249, 0.75);
        }

        @media (max-width: 640px) {
          .intelligence-cube-wrap {
            --orbit-size: min(72vw, 276px);
            --competitor-radius: min(calc(36vw - 28px), 110px);
            --scene-size: 166px;
            --cube-size: 88px;
            --cube-depth: 44px;
            height: 312px;
            max-width: 100%;
          }

          .cube-orbit-ring {
            box-shadow:
              0 0 30px rgba(34, 211, 238, 0.14),
              inset 0 0 14px rgba(168, 85, 247, 0.08);
          }

          .competitor-orbit-item span {
            min-height: 24px;
            max-width: 74px;
            padding: 0.2rem 0.34rem;
            font-size: 0.48rem;
            letter-spacing: 0.03em;
            line-height: 1.05;
          }

          .cube-face {
            border-radius: 14px;
            font-size: 12px;
            letter-spacing: 0.12em;
          }

        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .intelligence-cube-wrap {
            --orbit-size: 400px;
            --competitor-radius: 184px;
            --scene-size: 210px;
            --cube-size: 112px;
            --cube-depth: 56px;
            height: 410px;
            max-width: 520px;
          }
        }


        .industrial-label {
          font-family:
            "DM Mono",
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .industrial-split {
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 28px 80px rgba(0, 0, 0, 0.55);
        }

        
        @keyframes space-ai-cube-spin {
          0% {
            transform: rotateX(-18deg) rotateY(0deg) rotateZ(0deg);
          }
          50% {
            transform: rotateX(18deg) rotateY(180deg) rotateZ(8deg);
          }
          100% {
            transform: rotateX(-18deg) rotateY(360deg) rotateZ(0deg);
          }
        }

      `}</style>
    </>
  );
};

export default SystemOfIntelligence;
