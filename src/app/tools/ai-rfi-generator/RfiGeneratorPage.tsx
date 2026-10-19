"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Copy,
  Check,
  Printer,
  Wand2,
  Zap,
  AlertTriangle,
  CalendarDays,
  Wrench,
} from "lucide-react";

type Trade = {
  label: string;
  defaultSpec: string;
  checklist: string[];
  solution: (notes: string) => string;
};

const TRADES: Trade[] = [
  {
    label: "Structural Steel",
    defaultSpec: "Section 05 12 00",
    checklist: [
      "Anchor bolt layout conflicts with slab embeds",
      "Shop drawing dimensions differ from architectural",
      "Beam-to-column connection detail unclear",
      "Camber or erection sequence not defined",
      "Coordination clash with MEP penetrations",
    ],
    solution: (n) =>
      `Expedite a structural engineer's review of the affected bay, revise the shop drawing to match the approved structural set, and re-issue for coordination. Confirm the connection detail against ${n} before proceeding with fabrication.`,
  },
  {
    label: "MEP / Mechanical",
    defaultSpec: "Section 23 05 00",
    checklist: [
      "Mechanical room layout conflicts with equipment schedule",
      "Ductwork routing clashes with structural members",
      "Equipment access and maintenance clearances missing",
      "Plumbing riser location not coordinated with fire rating",
      "Sleeve and penetration locations undocumented",
    ],
    solution: (n) =>
      `Coordinate the affected riser and duct routing in the current 3D model, resolve clashes with adjacent structural elements, and submit an updated layout for approval. Reference ${n} for the governing equipment schedule.`,
  },
  {
    label: "Electrical",
    defaultSpec: "Section 26 05 00",
    checklist: [
      "Panel schedule does not match feeder sizes",
      "Conduit routing conflicts with fire-rated walls",
      "Lighting fixture locations not reflected on reflected ceiling plan",
      "Underground duct bank elevation in conflict",
      "Service entrance clearance not verified",
    ],
    solution: (n) =>
      `Revise the feeder schedule and conduit routing to match the approved electrical drawings, verify fire-rating penetrations, and resubmit the affected sheets for review against ${n}.`,
  },
  {
    label: "Concrete / Structural",
    defaultSpec: "Section 03 30 00",
    checklist: [
      "Rebar placement conflicts with embedded items",
      "Concrete mix design change requested",
      "Slab edge elevation discrepancy on plans",
      "Formwork and shoring sequence not addressed",
      "Dowels and tie-in details unclear at joints",
    ],
    solution: (n) =>
      `Clarify the slab elevations and embed locations against the structural drawings referenced in ${n}, update the formwork and shoring plan, and obtain structural approval before placement.`,
  },
  {
    label: "Roofing / Waterproofing",
    defaultSpec: "Section 07 30 00",
    checklist: [
      "Roof slope and drainage conflict on drawings",
      "Membrane type substitution under review",
      "Parapet flashing detail not dimensioned",
      "Roof penetrations not coordinated",
      "Warranty requirements unclear for assembly",
    ],
    solution: (n) =>
      `Confirm the roof assembly, slope, and flashing details against ${n}, resolve drainage conflicts, and lock the membrane specification before procurement to avoid rework.`,
  },
  {
    label: "Architectural / Finishes",
    defaultSpec: "Section 09 00 00",
    checklist: [
      "Finish schedule conflicts with door hardware schedule",
      "Ceiling height not coordinated with MEP",
      "Tile pattern and layout unclear",
      "Storefront glazing anchor detail missing",
      "Paint/sheen specification ambiguous",
    ],
    solution: (n) =>
      `Align the finish and hardware schedules, verify ceiling clearances with MEP services, and confirm the affected details against ${n} prior to purchasing finishes.`,
  },
  {
    label: "Other / Custom",
    defaultSpec: "Section 00 00 00",
    checklist: [
      "Information in referenced documents is incomplete",
      "Field condition differs from the issued drawings",
      "Required detail or dimension is missing",
      "Sequencing or phasing question",
      "Material substitution or availability question",
    ],
    solution: (n) =>
      `Review the referenced specification or drawing, verify the field condition, and issue a clarification that resolves ${n} without impacting downstream work.`,
  },
];

const URGENCY: Record<string, { label: string; color: string; days: string }> = {
  standard: { label: "Standard", color: "text-blue-400", days: "7 business days" },
  priority: { label: "Priority", color: "text-yellow-400", days: "3 business days" },
  urgent: { label: "Urgent", color: "text-red-400", days: "24-48 hours" },
};

const RfiGeneratorPage = () => {
  const [tradeLabel, setTradeLabel] = useState(TRADES[0].label);
  const [specRef, setSpecRef] = useState(TRADES[0].defaultSpec);
  const [urgency, setUrgency] = useState<keyof typeof URGENCY>("standard");
  const [notes, setNotes] = useState("");
  const [projectName, setProjectName] = useState("");
  const [company, setCompany] = useState("");
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const trade = useMemo(
    () => TRADES.find((t) => t.label === tradeLabel) ?? TRADES[0],
    [tradeLabel]
  );

  const [rfiNumber] = useState(() => `RFI-${Math.floor(1000 + Math.random() * 9000)}`);

  const doc = useMemo(() => {
    if (!generated) return null;
    const issue = notes.trim() || "See attached field notes and referenced drawings.";
    const subject = `${urgency === "urgent" ? "URGENT - " : ""}Clarification Required: ${trade.label} / ${specRef || "Specification"}`;
    const problem = `${trade.label} work at ${projectName || "the project"} cannot proceed as issued. ${issue} The attached details and the drawings referenced by ${specRef || "the specification"} are in conflict, and field conditions prevent safe or code-compliant continuation of the work.`;
    const impact = `Response required within ${URGENCY[urgency].days}. Each day this remains open risks delaying ${trade.label} completion and downstream trade start dates, with potential schedule impact to the overall critical path.`;
    return {
      subject,
      problem,
      impact,
      solution: trade.solution(notes.trim() || "the stated field condition"),
    };
  }, [generated, trade, specRef, urgency, notes, projectName]);

  const copyAll = async () => {
    if (!doc) return;
    const text = `RFI: ${rfiNumber}\nDate: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}\nFrom: ${company || "Field Engineering"}\nProject: ${projectName || "—"}\nTrade: ${trade.label}\nSpec/Drawing Reference: ${specRef}\nUrgency: ${URGENCY[urgency].label} (${URGENCY[urgency].days})\n\nSubject: ${doc.subject}\n\nPROBLEM DESCRIPTION\n${doc.problem}\n\nSCHEDULE IMPACT STATEMENT\n${doc.impact}\n\nPROPOSED SOLUTION\n${doc.solution}\n\nGenerated with Space AI RFI Writer — pmspace.ai`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable
    }
  };

  const handleTradeChange = (label: string) => {
    setTradeLabel(label);
    const t = TRADES.find((x) => x.label === label);
    if (t) setSpecRef(t.defaultSpec);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className="container mx-auto max-w-6xl px-4 py-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Free AI RFI Writer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI RFI &amp; Submittal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Document Generator
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Fill in four fields and get a polished, professionally structured
            RFI — with subject, problem description, schedule impact, and
            proposed solution — ready to copy or export as a branded PDF.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-white/10 h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold mb-6">Step 1 — Describe the Issue</h2>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Trade
              </label>
              <select
                value={tradeLabel}
                onChange={(e) => handleTradeChange(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
              >
                {TRADES.map((t) => (
                  <option key={t.label} value={t.label}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Spec / Drawing Reference
                </label>
                <input
                  type="text"
                  value={specRef}
                  onChange={(e) => setSpecRef(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Urgency Level
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as keyof typeof URGENCY)}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                >
                  <option value="standard">Standard</option>
                  <option value="priority">Priority</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Rough Issue Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder={`e.g. Anchor bolts on grid line B clash with the MEP penetrations and the slab edge detail on sheet S-104 is inconsistent with the shop drawings...`}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Project Name
                  <span className="text-white/40 font-normal"> (optional)</span>
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Company
                  <span className="text-white/40 font-normal"> (optional)</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => setGenerated(true)}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              Generate RFI Document
            </button>

            <p className="text-xs text-white/40 text-center">
              Drafting assistance only — review all technical content with your
              design team before issuing.
            </p>
          </div>

          {/* Output */}
          <div>
            {!generated || !doc ? (
              <div className="h-full min-h-[420px] bg-black/50 border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-center p-10">
                <FileText className="w-14 h-14 text-white/20 mb-4" />
                <p className="text-white/50 font-medium text-lg">
                  Your generated RFI will appear here
                </p>
                <p className="text-white/30 text-sm mt-2 max-w-sm">
                  Complete the fields and click &quot;Generate RFI
                  Document&quot; to see a structured, ready-to-issue RFI.
                </p>
              </div>
            ) : (
              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Request for Information
                    </p>
                    <p className="text-2xl font-bold mt-1">{rfiNumber}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold border ${
                      urgency === "urgent"
                        ? "bg-red-50 text-red-600 border-red-200"
                        : urgency === "priority"
                        ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                        : "bg-blue-50 text-blue-600 border-blue-200"
                    }`}
                  >
                    {urgency === "urgent" && <Zap className="w-3.5 h-3.5" />}
                    {URGENCY[urgency].label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                      Trade
                    </p>
                    <p className="font-medium flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-gray-400" />
                      {trade.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                      Spec / Drawing Ref
                    </p>
                    <p className="font-medium">{specRef}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                      Project
                    </p>
                    <p className="font-medium">{projectName || "—"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">
                      Submitted By
                    </p>
                    <p className="font-medium">{company || "Field Engineering"}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-1">{doc.subject}</h3>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Problem Description
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{doc.problem}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" /> Schedule Impact Statement
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{doc.impact}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Proposed Solution
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{doc.solution}</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={copyAll}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Printer className="w-4 h-4" /> Print / Save as PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Field explanations */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What Each Field Means
            </h2>
            <p className="text-white/60">
              A great RFI is clear, specific, and actionable. Here is how each
              input shapes the generated document.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Trade",
                description:
                  "Select the construction trade the question belongs to — e.g. Structural Steel, MEP, Electrical, or Roofing. This sets the technical context and tailors the proposed solution.",
              },
              {
                title: "Spec / Drawing Reference Number",
                description:
                  "Enter the specification section, drawing number, or sheet reference that governs the work. This creates a traceable link in the RFI so the design team knows exactly where to look.",
              },
              {
                title: "Urgency Level",
                description:
                  "Choose Standard, Priority, or Urgent. The generator sets the response deadline and highlights the request so reviewers understand the schedule pressure.",
              },
              {
                title: "Rough Issue Notes",
                description:
                  "Describe the conflict, missing detail, or field condition in plain language. The generator turns these rough notes into a structured problem statement and schedule-impact paragraph.",
              },
              {
                title: "Project Name",
                description:
                  "Optional. Adds the project name to the RFI header for identification when you are managing multiple jobs.",
              },
              {
                title: "Company / Submitted By",
                description:
                  "Optional. Adds the submitting company or field engineer name to the header so the recipient knows who is asking the question.",
              },
            ].map((field) => (
              <div
                key={field.title}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{field.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {field.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform CTA */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Automate RFIs inside Space AI
            </h3>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Route questions to the right specialist, auto-suggest answers, and
              track aging RFIs so nothing stalls your critical path.
            </p>
            <Link href="/construction-rfi-management-software/">
              <span className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300">
                Explore RFI Management <Wand2 className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RfiGeneratorPage;
