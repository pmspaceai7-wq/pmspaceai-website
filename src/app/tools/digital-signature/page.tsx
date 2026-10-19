import { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Digital Signature Software for Construction Documents | Space AI",
  description:
    "Sign contracts, submittals, change orders, and approvals faster with legally binding digital signature software built for construction workflows.",
  keywords: [
    "digital signature software",
    "e-signature construction",
    "construction contract signing",
    "document approval software",
    "esign construction",
    "electronic signatures",
  ],
  alternates: {
    canonical: "https://pmspace.ai/tools/digital-signature/",
  },
  openGraph: {
    title: "Digital Signature Software for Construction Documents | Space AI",
    description:
      "Accelerate approvals with secure, legally binding digital signatures from Space AI.",
    url: "https://pmspace.ai/tools/digital-signature/",
    type: "website",
  },
};

const faqs = [
  {
    question: "Are digital signatures legally binding in construction?",
    answer:
      "Yes. Space AI digital signatures comply with major e-signature regulations and provide tamper-evident certificates, signer identity tracking, and complete audit trails suitable for construction contracts and compliance documentation.",
  },
  {
    question: "What construction documents can be signed digitally?",
    answer:
      "Common documents include contracts, change orders, submittals, RFIs, purchase orders, safety acknowledgments, lien waivers, and closeout packages.",
  },
  {
    question: "How does it speed up approvals?",
    answer:
      "Instead of printing, signing, scanning, and emailing documents, recipients sign electronically from any device. Automated reminders and sequential routing keep approvals moving without manual follow-up.",
  },
  {
    question: "Can signatures be embedded into project workflows?",
    answer:
      "Yes. Digital signature requests can be triggered automatically when documents reach specific workflow stages, such as approved change orders or finalized submittals.",
  },
];

export default function DigitalSignaturePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="bg-black text-white min-h-screen">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Signature Software for Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Eliminate printing and scanning delays with secure, legally binding signatures built for project workflows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Close Documents Faster Without the Paper Chase
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Construction projects depend on dozens of signed documents, from contracts and change orders to submittals and safety acknowledgments. Traditional signing processes create bottlenecks: documents are printed, mailed or walked around for signatures, scanned back in, and filed. Each handoff adds delay and risk.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Space AI digital signature software replaces that friction with a secure, integrated signing experience. Documents are sent electronically, signed from any device, and automatically stored with a complete audit trail connected to the rest of the project record.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Key Capabilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Legally Binding Signatures",
                    desc: "Meet compliance requirements with audit trails, timestamps, and signer verification.",
                  },
                  {
                    title: "Workflow Routing",
                    desc: "Send documents to multiple signers in parallel or sequential order automatically.",
                  },
                  {
                    title: "Mobile Signing",
                    desc: "Allow field teams, owners, and subcontractors to sign from phones or tablets.",
                  },
                  {
                    title: "Project Record Integration",
                    desc: "Signed documents are stored with the related project, RFI, or change order.",
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
                Why Construction Teams Need It
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Speed matters in construction. Delayed contract approvals push back start dates. Slow change-order signatures create cost exposure. Backlogged submittal approvals stall procurement. Digital signatures compress approval cycles from days to hours.
              </p>
              <p className="text-gray-400 leading-relaxed">
                For compliance and legal teams, the system provides a defensible record of who signed what and when, reducing disputes and simplifying audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Related Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/construction-document-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Document Management Software
                </Link>
                <Link
                  href="/core/e-sign/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  E-Sign Core Feature
                </Link>
                <Link
                  href="/tools/invoice-management-software/"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Invoice Management
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
                Speed Up Approvals Today
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book a demo to see how Space AI digital signatures integrate with your project workflows.
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
