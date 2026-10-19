import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  CheckCheck,
  ClipboardList,
  DatabaseZap,
  Filter,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Action Items - Teams Transcript to Tasks | Space AI Core",
  description:
    "Space AI Action Items connects to Microsoft Teams, reads meeting transcripts, and extracts decisions, follow-ups, priorities, and assignees into tracked project tasks automatically.",
  alternates: {
    canonical: "https://pmspace.ai/core/action-items/",
  },
  openGraph: {
    title: "Action Items - Turn Teams meetings into tracked project tasks",
    description:
      "Connect Microsoft Teams transcripts to pmspace.ai and import AI-generated action items directly into your Space Lean workspace.",
    url: "https://pmspace.ai/core/action-items/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/action-items-teams-ai-tasks.webp",
        width: 1792,
        height: 1024,
        alt: "AI action item extraction dashboard from Microsoft Teams transcripts",
      },
    ],
  },
};

const steps = [
  {
    title: "Connect your Microsoft Teams account",
    description:
      "Sign in once with your Microsoft account. pmspace.ai securely reads meeting transcripts without copy-paste or extra setup.",
    icon: ShieldCheck,
  },
  {
    title: "Pick your meetings",
    description:
      "Filter by today, yesterday, last 7 days, or a custom date range. See every recorded meeting with a transcript available.",
    icon: CalendarDays,
  },
  {
    title: "AI extracts the action items",
    description:
      "Generate from one meeting or run bulk extraction across many. AI identifies commitments, decisions, and follow-ups with title, description, priority, and assignee.",
    icon: BrainCircuit,
  },
  {
    title: "Review, select, and import",
    description:
      "Cherry-pick the tasks that matter, deselect the noise, and import approved items into your project workspace.",
    icon: CheckCheck,
  },
];

const capabilities = [
  {
    title: "Teams transcript sync",
    description:
      "Reads live transcripts through Microsoft Graph API, with no manual export needed.",
    icon: DatabaseZap,
  },
  {
    title: "Claude task extraction",
    description:
      "Identifies action items, commitments, and follow-ups from natural conversation.",
    icon: Sparkles,
  },
  {
    title: "Priority detection",
    description:
      "Urgent, high, medium, and low priority levels are assigned from meeting context.",
    icon: Zap,
  },
  {
    title: "Assignee recognition",
    description:
      "Names mentioned in context of a task are automatically tagged as owners.",
    icon: Users,
  },
  {
    title: "Bulk generation",
    description:
      "Process multiple meetings in one flow with select-all and bulk generate controls.",
    icon: Workflow,
  },
  {
    title: "Selective import",
    description:
      "Review every extracted task before it enters your project and remove what you do not need.",
    icon: MousePointerClick,
  },
  {
    title: "Direct workspace import",
    description:
      "Tasks go straight into your Space Lean workspace, ready to schedule and track.",
    icon: ClipboardList,
  },
  {
    title: "Meeting filters",
    description:
      "Use quick date ranges or a custom window to find the transcripts that matter.",
    icon: Filter,
  },
];

const proofPoints = [
  "No note-taking during the call",
  "No follow-up email archaeology",
  "No unassigned decisions",
  "No task handoff spreadsheet",
];

export default function ActionItemsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <ClipboardList className="h-4 w-4" />
              Action Items for Microsoft Teams
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Every meeting decision becomes a tracked task - automatically.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              pmspace.ai connects directly to your Microsoft Teams meetings, reads the transcript, and extracts every action item using AI. No note-taking. No follow-up emails. Just tasks, ready to assign.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/try-it-now/"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Try Action Items
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950 shadow-2xl shadow-cyan-500/10">
              <Image
                src="/assets/images/action-items-teams-ai-tasks.webp"
                alt="Action Items dashboard extracting tasks from Teams meeting transcripts"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              The problem it solves
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Meeting follow-ups fail when they never become real project work.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-5xl font-bold text-white">73%</p>
            <p className="mt-3 text-lg leading-8 text-white/72">
              of meeting action items are never completed because they were never written down clearly, assigned, or tracked.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 p-3 text-sm text-white/75">
                  <CheckCheck className="h-4 w-4 flex-none text-emerald-300" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="container mx-auto px-4 py-14 md:py-18">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From transcript to tracked task in four steps.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </span>
                    <span className="text-sm font-semibold text-white/40">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Key capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for the messy reality of project meetings.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/35 hover:bg-white/[0.06]">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10">
                  <Icon className="h-5 w-5 text-emerald-200" />
                </span>
                <h3 className="font-semibold">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-emerald-500/10 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Ready when the meeting ends
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Turn your last meeting into tasks.
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Eliminate the gap between what was agreed in a meeting and what actually gets done. Every decision gets an owner, a status, and a place in your schedule.
            </p>
          </div>
          <Link
            href="/try-it-now/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-cyan-100"
          >
            Try Action Items
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
