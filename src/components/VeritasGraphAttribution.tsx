import Link from "next/link";

const VERITASGRAPH_GITHUB = "https://github.com/bibinprathap/VeritasGraph";
const VERITASGRAPH_DOCS = "https://bibinprathap.github.io/VeritasGraph/index.html";

const LINK_CLASS = "text-cyan-400 hover:text-cyan-300 hover:underline";

const DEFAULT_TITLE =
  "Grounded by VeritasGraph — verifiable AI with source attribution";

function AttributionIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

interface VeritasGraphAttributionProps {
  variant?: "card" | "footer";
  className?: string;
  title?: string;
  badges?: string[];
}

export default function VeritasGraphAttribution({
  variant = "card",
  className = "",
  title = DEFAULT_TITLE,
  badges,
}: VeritasGraphAttributionProps) {
  if (variant === "footer") {
    return (
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <AttributionIcon className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Grounded by{" "}
                <a
                  href={VERITASGRAPH_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK_CLASS}
                >
                  VeritasGraph
                </a>
              </p>
              <p className="text-xs text-white/50">
                Verifiable AI with source attribution
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={VERITASGRAPH_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VeritasGraph source code on GitHub"
              className="text-white/50 hover:text-white transition-colors hover:underline"
            >
              VeritasGraph on GitHub
            </a>
            <span className="text-white/20">|</span>
            <a
              href={VERITASGRAPH_DOCS}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VeritasGraph documentation"
              className="text-white/50 hover:text-white transition-colors hover:underline"
            >
              VeritasGraph documentation
            </a>
            <span className="text-white/20">|</span>
            <Link
              href="/technology/"
              aria-label="How Space AI uses VeritasGraph"
              className="text-white/50 hover:text-white transition-colors hover:underline"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      aria-label="VeritasGraph attribution"
      className={`rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 ${className}`.trim()}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <AttributionIcon className="h-5 w-5 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Every AI answer on Space AI is grounded by{" "}
            <a
              href={VERITASGRAPH_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              VeritasGraph
            </a>
            , an open-source GraphRAG knowledge-graph framework. Instead of
            guessing from similarity, VeritasGraph reasons over a structured
            knowledge graph and returns every answer with a verifiable citation
            and reasoning path — so you can trust the source of every result.
          </p>

          {badges && badges.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={VERITASGRAPH_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              Explore the VeritasGraph source code on GitHub
            </a>
            <span className="text-white/20">|</span>
            <a
              href={VERITASGRAPH_DOCS}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              Read the VeritasGraph documentation
            </a>
            <span className="text-white/20">|</span>
            <Link href="/technology/" className={LINK_CLASS}>
              See how Space AI uses VeritasGraph
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
