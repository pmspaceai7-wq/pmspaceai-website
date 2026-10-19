import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BarChart3,
  CheckCircle2,
  FileText,
  Gauge,
  Layers3,
  Sparkles,
} from "lucide-react";
import { getRoleSolutionBySlug, roleSolutions } from "@/lib/roleSolutions";

type PageProps = {
  params: { slug: string };
};

export const revalidate = 3600;

export function generateStaticParams() {
  return roleSolutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const solution = getRoleSolutionBySlug(params.slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Space AI",
    };
  }

  return {
    title: `${solution.title} Construction Software | Space AI Solutions`,
    description: solution.description,
    alternates: {
      canonical: `https://pmspace.ai/solutions/${solution.slug}/`,
    },
    openGraph: {
      title: `${solution.title} | Space AI Solutions`,
      description: solution.description,
      url: `https://pmspace.ai/solutions/${solution.slug}/`,
      type: "website",
    },
  };
}

export default function RoleSolutionPage({ params }: PageProps) {
  const solution = getRoleSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  const visibleWorkflows = solution.workflows.slice(0, 6);
  const connectedItems = [...solution.outcomes, ...solution.workflows].slice(0, 5);
  const relatedRoles = roleSolutions
    .filter((item) => item.slug !== solution.slug)
    .slice(0, 3);
  const personImageSrc = `/assets/images/roles/${solution.slug}-person.png`;

  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-white">
      <section className="relative pb-14 pt-10 lg:pb-20 lg:pt-12">
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-purple-950/25 backdrop-blur-md md:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8c45ff]/70 to-transparent" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8c45ff]/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100">
                  <Sparkles className="h-4 w-4" />
                  Solutions by role
                </div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-200/80">
                  {solution.audience}
                </p>
                <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  <span className="bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
                    Space AI for {solution.title}
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  {solution.hero}
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                  {solution.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/construction-software-demo/"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
                  >
                    Request a Demo
                  </Link>
                  <Link
                    href="/solutions/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white/85 hover:bg-white/[0.08]"
                  >
                    View all roles
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-3 shadow-2xl shadow-black/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(45,212,191,0.28),transparent_34%),radial-gradient(circle_at_18%_84%,rgba(140,69,255,0.22),transparent_32%),linear-gradient(145deg,rgba(7,17,31,0.92),rgba(0,0,0,0.72))]" />
                  <div className="relative flex min-h-[430px] items-end justify-end overflow-hidden rounded-2xl bg-[#07111f]/45 px-4 pt-6">
                    <div className="absolute bottom-8 left-5 right-5 h-28 rounded-full bg-teal-300/12 blur-3xl" />
                    <div className="absolute bottom-5 left-3 z-20 max-w-[230px] rounded-2xl border border-teal-300/20 bg-[#07111f]/90 p-4 shadow-xl backdrop-blur sm:bottom-6 sm:left-4 sm:max-w-[250px]">
                      <div className="flex items-center gap-3 text-sm font-semibold text-teal-100">
                        <Gauge className="h-5 w-5" />
                        Decision-ready layer
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/62">
                        Live project signals, evidence, and AI workflows in one place.
                      </p>
                    </div>
                    <Image
                      src={personImageSrc}
                      alt={`${solution.title} construction role specialist`}
                      width={520}
                      height={760}
                      sizes="(min-width: 1200px) 360px, (min-width: 768px) 42vw, 82vw"
                      className="relative z-10 max-h-[520px] w-auto max-w-[72%] object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)] sm:max-w-[68%] lg:max-w-[72%]"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
              <BarChart3 className="h-4 w-4" />
              Role pressure points
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              You are doing the work. Fragmented tools make it harder.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
              These are the pressure points Space AI connects for {solution.shortTitle.toLowerCase()}.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {solution.problems.map((problem, index) => (
              <div
                key={problem}
                className={`min-h-[170px] rounded-2xl border p-6 shadow-xl transition-transform hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "border-purple-300/20 bg-purple-400/[0.08] shadow-purple-950/20"
                    : "border-white/10 bg-white/[0.035] shadow-black/20"
                }`}
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-purple-200">
                  <span className="text-sm font-bold">0{index + 1}</span>
                </div>
                <p className="text-base font-semibold leading-7 text-white/78">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080412] to-black" />
        <div className="absolute left-1/2 top-10 h-64 w-[720px] -translate-x-1/2 rounded-full bg-[#8c45ff]/15 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
                <Layers3 className="h-4 w-4" />
                One connected Space AI layer
              </div>
              <h2 className="text-4xl font-bold leading-tight md:text-[3.25rem]">
                One place for the work {solution.shortTitle.toLowerCase()} already manage.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                No bouncing between tools. No rebuilding context for every update. Space AI brings the role&apos;s project signals into one governed intelligence layer.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-500/15 blur-3xl" />
              <div className="absolute -bottom-24 left-10 h-52 w-52 rounded-full bg-teal-300/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/80">
                    Connected context
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                    Everything {solution.shortTitle.toLowerCase()} are responsible for, synced into one project view.
                  </h3>
                </div>

                <ul className="space-y-3">
                  {connectedItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white/70"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
              <FileText className="h-4 w-4" />
              Daily workflows
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">
              What You&apos;ll Use Most
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleWorkflows.map((workflow, index) => (
              <div
                key={workflow}
                className="group relative min-h-[150px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/15 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/35 to-teal-400/25 text-sm font-bold text-white ring-1 ring-white/10">
                  {index + 1}
                </div>
                <p className="relative text-base font-semibold leading-7 text-white/75">
                  {workflow}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.07] via-purple-400/[0.08] to-teal-400/[0.08] p-8 text-white md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">
                  <Sparkles className="h-4 w-4" />
                  Role-specific intelligence
                </div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Built for the way {solution.shortTitle.toLowerCase()} actually work.
                </h2>
              </div>
              <div>
                <p className="text-base leading-7 text-white/70">
                  Space AI brings specialist workflows into a shared construction intelligence layer, so each team keeps its own working view while leadership gets consistent project visibility.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {relatedRoles.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/solutions/${item.slug}`}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70 hover:border-purple-300/35 hover:text-white"
                    >
                      {item.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
