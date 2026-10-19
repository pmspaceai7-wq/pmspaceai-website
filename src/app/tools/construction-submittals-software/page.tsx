import React from "react";

export const metadata = {
  title: "Construction Submittals Software | Space AI",
  description: "Automate submittal workflows, track approvals, and ensure compliance with AI-powered submittals software for construction projects.",
  alternates: { canonical: "https://pmspace.ai/tools/construction-submittals-software/" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-16 px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Construction Submittals Software</h1>
        <p className="mb-4 text-white/70">Automate submittal workflows, track approvals, and ensure compliance with Space AI&apos;s submittals software for construction projects.</p>
        <ul className="list-disc ml-6 mb-6 text-white/80">
          <li>AI-powered submittal review and routing</li>
          <li>Automated approval tracking and notifications</li>
          <li>Centralized submittal archive</li>
          <li>Compliance and audit-ready records</li>
        </ul>
        <p className="mb-8">Accelerate project delivery and reduce risk with intelligent submittal management.</p>
      </div>
    </main>
  );
}
