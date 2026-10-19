import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function DocsCallout() {
  return (
    <section className="my-14 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8">
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
          <BookOpen className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-semibold text-white">
          Explore the Space AI docs hub
        </h2>
        <p className="mt-4 text-white/70">
          Use the docs hub to understand how Space AI works, which workflows it
          supports, how it fits with existing systems, and how buyers should
          evaluate the platform.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/docs/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            Open docs hub
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs/how-space-ai-works/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Read how Space AI works
          </Link>
        </div>
      </div>
    </section>
  );
}
