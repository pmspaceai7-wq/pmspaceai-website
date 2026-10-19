import Link from "next/link";
import { standardComparisonSections, comparisonMethodLinks } from "@/lib/comparison-standard";

export default function ComparisonStandardBlock() {
  return (
    <section className="py-16 border-y border-white/10 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80 mb-3">
            Comparison Standard
          </p>
          <h2 className="text-3xl font-bold text-white">
            How Space AI comparison pages should be read
          </h2>
          <p className="mt-4 text-white/70">
            Every comparison should help buyers evaluate workflow fit, adoption
            risk, pricing context, and practical migration questions instead of
            relying on feature lists alone.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {standardComparisonSections.map((section) => (
            <div key={section.key} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{section.purpose}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {comparisonMethodLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-cyan-300 hover:text-cyan-200 underline">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
