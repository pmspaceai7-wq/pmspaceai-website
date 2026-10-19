import React from "react";

export const metadata = {
  title: "Construction Daily Log Software | Space AI",
  description: "Automate daily reporting, track site progress, and ensure compliance with AI-powered daily log software for construction projects.",
  alternates: { canonical: "https://pmspace.ai/tools/construction-daily-log-software/" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-16 px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Construction Daily Log Software</h1>
        <p className="mb-4 text-white/70">Automate daily reporting, track site progress, and ensure compliance with Space AI&apos;s daily log software. Capture weather, labor, equipment, and incidents in real time.</p>
        <ul className="list-disc ml-6 mb-6 text-white/80">
          <li>AI-assisted data entry and error detection</li>
          <li>Photo and file attachments for every log</li>
          <li>Instant PDF and Excel exports</li>
          <li>Mobile-friendly for field use</li>
        </ul>
        <p className="mb-8">Keep your project records accurate, auditable, and always up to date with automated daily logs.</p>
      </div>
    </main>
  );
}
