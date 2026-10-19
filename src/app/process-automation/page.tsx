import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Process Automation | Space AI",
  description:
    "Automate approvals, notifications, and repetitive workflows across construction projects with Space AI's process automation features.",
  alternates: {
    canonical: "https://pmspace.ai/process-automation/",
  },
  openGraph: {
    title: "Process Automation | Space AI",
    description:
      "Automate approvals, notifications, and repetitive workflows across construction projects with Space AI's process automation features.",
    url: "https://pmspace.ai/process-automation/",
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Process Automation</h1>
        <p className="text-lg text-white/70 mb-8 max-w-3xl">
          Reduce manual work and speed up approvals by automating common processes
          (RFIs, submittals, approvals, daily reports, and handoffs). Connect
          triggers, conditions, and actions across your project data to keep
          work flowing.
        </p>

        <div className="flex gap-4 flex-wrap mb-12">
          <Link
            href="/try-it-now/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-3 px-6 rounded-xl font-semibold"
          >
            Start Free Trial
          </Link>

          <Link
            href="/construction-software-demo/"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white py-3 px-6 rounded-xl font-semibold"
          >
            Watch Demo
          </Link>
        </div>

        <section className="space-y-6 max-w-3xl">
          <h2 className="text-2xl font-bold">What you can automate</h2>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>RFI routing and auto-assign based on discipline</li>
            <li>Change order approvals with threshold-based escalation</li>
            <li>Automatic daily report generation from field data</li>
            <li>Document reviews and versioning workflows</li>
            <li>Notifications and handoffs between teams</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
