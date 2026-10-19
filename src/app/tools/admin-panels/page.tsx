import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Admin Panels for Construction Data Management | Space AI",
  description:
    "Build customizable admin panels to manage AECO project data, user roles, workflows, and reporting with real-time insights and intuitive dashboards.",
  keywords: [
    "admin panels",
    "construction admin dashboard",
    "project data management",
    "user role management",
    "AECO dashboard",
    "workflow administration",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/admin-panels/",
  },
  openGraph: {
    title: "Admin Panels for Construction Data Management | Space AI",
    description:
      "Manage project data, users, and workflows with customizable Space AI admin panels.",
    url: "https://pmspace.ai/tools/admin-panels/",
    type: "website",
  },
};

const faqs = [
  {
    question: "What are admin panels used for in construction software?",
    answer:
      "Admin panels provide a centralized interface for managing project data, user accounts, roles and permissions, workflows, integrations, and system configuration. They are essential for operations and IT teams who administer the platform.",
  },
  {
    question: "Can admin panels be customized without coding?",
    answer:
      "Yes. Space AI admin panels include configurable views, forms, and dashboards that allow operations teams to adapt the interface to their specific data and workflow needs without writing code.",
  },
  {
    question: "How do role-based permissions work?",
    answer:
      "Administrators can define roles such as project manager, superintendent, subcontractor, or executive, then control what data each role can view, edit, or approve. This protects sensitive information while enabling collaboration.",
  },
  {
    question: "What kind of reporting is available?",
    answer:
      "Admin panels include dashboards for user activity, project health, workflow status, data quality, and integration performance. Reports can be customized and exported for stakeholders.",
  },
];

export default function AdminPanelsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Admin Panels for Construction Data
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Configure users, workflows, and project data with flexible admin dashboards built for AECO operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Centralized Control for Complex Projects
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction platforms manage large volumes of users, projects, documents, and workflows. Without a strong administrative layer, IT and operations teams struggle to maintain data quality, enforce security, and support users at scale. Admin panels provide the control center needed to manage the platform effectively.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI admin panels offer customizable dashboards, role-based access controls, workflow configuration, and real-time reporting. Administrators can manage who sees what, monitor data health, and adapt the system as organizational needs evolve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "User & Role Management",
                    desc: "Create users, assign roles, and control permissions across projects and modules.",
                  },
                  {
                    title: "Custom Dashboards",
                    desc: "Build admin views that surface the metrics and records most relevant to your operations.",
                  },
                  {
                    title: "Workflow Configuration",
                    desc: "Define approval chains, status transitions, and automation rules without engineering support.",
                  },
                  {
                    title: "Data Quality Monitoring",
                    desc: "Identify incomplete records, duplicates, and anomalies before they affect reporting.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Who Uses Admin Panels
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                IT administrators use them for security, integrations, and user provisioning. Operations managers use them to configure workflows and monitor adoption. Project directors use reporting dashboards to understand portfolio performance and data completeness.
              </p>
              <p className="text-gray-400 leading-relaxed">
                A well-designed admin layer reduces support tickets, improves governance, and ensures the platform scales with the organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/backoffice-apps/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Backoffice Apps
                </Link>
                <Link
                  href="/tools/ai-assistant/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  AI Assistant
                </Link>
                <Link
                  href="/tools/construction-analytics-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Analytics Software
                </Link>
                <Link
                  href="/tools/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  All Tools
                </Link>
              </div>
            </section>

            <section className="text-center bg-gradient-to-r from-purple-500/20 to-teal-400/20 border border-white/10 rounded-2xl p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Manage Your Platform with Confidence
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI admin panels simplify governance and operations.
              </p>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
