import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Communication Features | Space AI",
  description: "Discover how Space AI streamlines construction project communication with intelligent email integration, RFI tracking, and real-time collaboration tools.",
  keywords: [
    "construction communication software",
    "project communication",
    "email integration",
    "RFI tracking",
    "construction collaboration tools",
    "Space AI communication"
  ],
  alternates: {
    canonical: "https://pmspace.ai/features/communication/",
  },
  openGraph: {
    title: "Construction Communication Features | Space AI",
    description: "See how Space AI streamlines construction project communication with intelligent email integration, RFI tracking, and real-time collaboration tools.",
    url: "https://pmspace.ai/features/communication/",
    type: "website",
  },
};

export default function CommunicationFeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
              Communication Features
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Streamline Construction Project Communication
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Space AI centralizes all your project communication—emails, RFIs, submittals, and team messages—so nothing falls through the cracks. Boost collaboration, reduce delays, and keep every stakeholder in the loop.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-teal-300">Intelligent Email Integration</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Automatically capture and organize project emails</li>
                <li>Link emails to RFIs, submittals, and tasks</li>
                <li>Smart search for instant retrieval</li>
                <li>Centralized communication log for every project</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-teal-300">RFI & Submittal Tracking</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Submit, track, and respond to RFIs in one place</li>
                <li>Automated reminders for outstanding items</li>
                <li>Attach supporting documents and photos</li>
                <li>Full audit trail for compliance</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-teal-300">Real-Time Collaboration</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Team messaging and group chats</li>
                <li>Task assignments and progress updates</li>
                <li>Mobile app for field-to-office communication</li>
                <li>Role-based access for secure sharing</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-teal-300">Benefits</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Reduce miscommunication and costly delays</li>
                <li>Keep all stakeholders informed in real time</li>
                <li>Centralize all project correspondence</li>
                <li>Improve project outcomes and client satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
