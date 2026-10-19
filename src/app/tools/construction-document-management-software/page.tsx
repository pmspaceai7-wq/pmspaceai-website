import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Construction Document Management Software for Project Teams | Space AI",
  description:
    "Centralize drawings, RFIs, submittals, contracts, and closeout files in one system. Improve version control, approval speed, and field-to-office visibility.",
  alternates: { canonical: "https://pmspace.ai/tools/construction-document-management-software/" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Construction Document Management Tool for Project Teams</h1>
        <p className="mb-4 text-white/80 text-lg">
          Space AI gives project teams one reliable source of truth for drawings,
          specifications, RFIs, submittals, contracts, and closeout records. Teams can
          stop chasing email attachments and work from controlled, searchable records.
        </p>
        <p className="mb-8 text-white/70">
          Built for live construction environments where document quality directly
          affects schedule, claims exposure, and handover readiness.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Business Outcomes You Should Expect</h2>
          <div className="grid md:grid-cols-3 gap-4 text-white/80">
            <div className="border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="text-2xl font-semibold text-white mb-1">Fewer Rework Errors</p>
              <p>Teams work from current revisions with clear version ownership.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="text-2xl font-semibold text-white mb-1">Faster Approvals</p>
              <p>Submittals and RFIs follow structured review paths with accountability.</p>
            </div>
            <div className="border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="text-2xl font-semibold text-white mb-1">Better Handover</p>
              <p>Closeout packages are assembled continuously, not at the last minute.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What You Can Automate</h2>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>Drawing and specification version control with revision history</li>
            <li>RFI and submittal intake, routing, review, and turnaround tracking</li>
            <li>Discipline- and package-based document permissions</li>
            <li>Field access to latest documents from mobile devices</li>
            <li>Closeout checklists for O&amp;M manuals, warranties, and as-builts</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Implementation Approach</h2>
          <ol className="list-decimal ml-6 text-white/80 space-y-2">
            <li>Standardize naming conventions and folder structure by project type.</li>
            <li>Define approval workflows for RFIs, submittals, and contract artifacts.</li>
            <li>Launch with one project and enforce revision governance from day one.</li>
            <li>Measure turnaround time, overdue reviews, and document retrieval time.</li>
            <li>Scale templates across projects and business units.</li>
          </ol>
        </section>

        <section className="mb-2">
          <h2 className="text-2xl font-semibold mb-4">Related Tools</h2>
          <ul className="list-disc ml-6 text-white/80 space-y-2">
            <li>
              <Link href="/tools/invoice-management-software/" className="underline hover:text-white">
                Invoice Management Software
              </Link>{" "}
              for financial workflow alignment
            </li>
            <li>
              <Link href="/construction-rfi-management-software/" className="underline hover:text-white">
                Construction RFI Management Software
              </Link>{" "}
              for RFI cycle acceleration
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
