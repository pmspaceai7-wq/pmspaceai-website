"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Users,
  ClipboardCheck,
  Megaphone,
  Printer,
  Wand2,
  CheckCircle,
  AlertTriangle,
  CalendarDays,
} from "lucide-react";

type Activity = {
  label: string;
  icon: string;
  intro: string;
  checks: string[];
  keyHazards: string[];
  ppe: string[];
};

const ACTIVITIES: Activity[] = [
  {
    label: "Deep Excavation",
    icon: "🚧",
    intro:
      "Before anyone steps into a trench or excavation, confirm protective systems are in place, the competent person has signed off, and spoil, traffic, and utilities are controlled.",
    checks: [
      "Competent person inspected excavation before shift start",
      "Protective system (sloping/shoring/shielding) matches soil classification",
      "Spoil piles and materials kept at least 2 ft from the edge",
      "Underground utilities located and marked / clearance verified",
      "Ladder or egress within 25 ft of every worker",
      "Atmospheric testing completed if required",
      "Water accumulation controlled / pumped out",
      "Barricades, warning lines, and lighting installed",
      "Heavy equipment and traffic kept clear of excavation lip",
      "Daily inspection documented and posted",
    ],
    keyHazards: ["Cave-in", "Struck-by equipment", "Falls", "Atmospheric hazard", "Drowning"],
    ppe: ["Hard hat", "High-vis vest", "Steel-toe boots", "Gloves", "Eye protection"],
  },
  {
    label: "Scaffolding",
    icon: "🪜",
    intro:
      "Every scaffold must be level, plumb, fully decked, and tagged before use. Guardrails, access, and load limits are non-negotiable.",
    checks: [
      "Scaffold erected under competent person supervision and tagged",
      "Base plates / mud sills are level and sound",
      "All frames, braces, and couplers are complete and tight",
      "Full decking installed with no gaps wider than 1 inch",
      "Guardrails, mid-rails, and toeboards in place on all open sides",
      "Access ladder secured and extends 3 ft above platform",
      "Load rating posted and not exceeded",
      "Scaffold is plumb and ties/anchors installed per design",
      "Overhead electrical lines identified and de-energized or guarded",
      "Weekly inspection current and documented",
    ],
    keyHazards: ["Falls from height", "Struck-by falling objects", "Collapse", "Electrocution"],
    ppe: ["Hard hat", "High-vis vest", "Harness (when required)", "Non-slip boots", "Gloves"],
  },
  {
    label: "Crane Operations",
    icon: "🏗️",
    intro:
      "Crane lifts demand clear communication, certified operators, and a verified load path. No lift starts without a plan.",
    checks: [
      "Operator and rigger certifications current and on file",
      "Daily crane inspection completed",
      "Lift plan reviewed and communicated to crew",
      "Load weight and rigging capacity verified",
      "Outriggers fully extended on stable ground / mats",
      "Spotter / signal person assigned and visible to operator",
      "Overhead power lines de-energized or minimum clearance maintained",
      "Barricaded swing radius and exclusion zone",
      "Rigging inspected for cuts, kinks, or wear",
      "Weather conditions within safe operating limits",
    ],
    keyHazards: ["Struck-by load", "Electrocution", "Tip-over", "Crush / pinch points"],
    ppe: ["Hard hat", "High-vis vest", "Steel-toe boots", "Gloves", "Hearing protection"],
  },
  {
    label: "Electrical Work",
    icon: "⚡",
    intro:
      "Treat every conductor as energized until proven otherwise. Lockout/tagout, PPE, and qualified-person oversight keep the crew safe.",
    checks: [
      "Energy source identified and lockout/tagout applied",
      "Qualified person verified zero energy state",
      "Arc-flash and shock-risk assessment completed",
      "Proper voltage-rated gloves and tools selected",
      "Insulated tools inspected before use",
      "Panel clearance and access maintained",
      "Temporary power protected from weather and traffic",
      "GFCI protection active on all 120V temporary circuits",
      "Overhead lines identified and clearance maintained",
      "Buddy system / spotter in place for energized work",
    ],
    keyHazards: ["Electrocution", "Arc flash", "Burns", "Falls"],
    ppe: ["Hard hat", "Voltage-rated gloves", "Safety glasses", "Arc-rated clothing", "Non-conductive boots"],
  },
  {
    label: "Roofing / Heights",
    icon: "🏠",
    intro:
      "Falls are the leading cause of construction fatalities. When working at height, guardrails, harnesses, and controlled access zones are the last line of defense.",
    checks: [
      "Fall protection plan in place and understood by crew",
      "Guardrails, safety nets, or PFAS selected and inspected",
      "Anchorages verified by competent person",
      "Skylights, holes, and roof openings protected or covered",
      "Ladders secured and extend 3 ft above landing",
      "Material staging clear of roof edges and openings",
      "Weather / wind conditions safe for work at height",
      "Debris and slip hazards removed",
      "Access controlled to trained workers only",
      "Rescue plan communicated",
    ],
    keyHazards: ["Falls from height", "Slips/trips", "Heat stress", "Struck-by materials"],
    ppe: ["Hard hat", "Harness / lanyard", "Non-slip boots", "Gloves", "Eye protection"],
  },
  {
    label: "Demolition",
    icon: "🧱",
    intro:
      "Demolition is high-risk, sequential work. Engineering surveys, utility disconnects, and exclusion zones come first.",
    checks: [
      "Engineering survey completed before demolition begins",
      "Utilities disconnected / capped and verified",
      "Exclusion zone established and barricaded",
      "Structural bracing / shoring installed as required",
      "Dust, noise, and debris control measures active",
      "Equipment operators and ground workers coordinated",
      "Emergency evacuation route clear",
      "Fire watch / hot work permits issued if applicable",
      "Asbestos / hazardous materials survey current",
      "Method of demolition reviewed at pre-task briefing",
    ],
    keyHazards: ["Structural collapse", "Struck-by debris", "Respirable silica", "Falls", "Utilities"],
    ppe: ["Hard hat", "Respiratory protection", "High-vis vest", "Steel-toe boots", "Gloves"],
  },
  {
    label: "Concrete Pours",
    icon: "🧪",
    intro:
      "Concrete work involves heavy forms, rebar hazards, and silica exposure. Verify formwork, reinforcing, and placement zones before the truck arrives.",
    checks: [
      "Formwork and shoring inspected and signed off",
      "Rebar placement matches approved drawings",
      "Concrete pump / boom setup on stable ground",
      "Washout area and spill controls in place",
      "Exclusion zone established around concrete pump boom",
      "Silica exposure controls active (water / ventilation / PPE)",
      "Access walkways and ladders secured",
      "Pour sequence and stopping points communicated",
      "Emergency stop signals agreed between pump operator and crew",
      "Curing protection materials ready",
    ],
    keyHazards: ["Formwork collapse", "Silica exposure", "Struck-by pump", "Slips/falls", "Chemical burns"],
    ppe: ["Hard hat", "Safety glasses", "Gloves", "Rubber boots", "Respiratory protection"],
  },
  {
    label: "Confined Space",
    icon: "🕳️",
    intro:
      "Confined spaces require permits, atmospheric monitoring, standby rescue, and strict entry control. Never enter without authorization.",
    checks: [
      "Entry permit completed and posted",
      "Atmospheric testing current and within safe limits",
      "Ventilation / purge plan active",
      "Attendant assigned and trained in rescue procedures",
      "Communication system tested between entrant and attendant",
      "Rescue equipment staged at entry point",
      "Isolation of hazards (lockout/tagout) verified",
      "PPE / harness / retrieval line inspected",
      "Continuous monitoring in place",
      "Emergency services notified if required",
    ],
    keyHazards: ["Oxygen deficiency", "Toxic atmosphere", "Engulfment", "Entrapment", "Fire / explosion"],
    ppe: ["Hard hat", "Harness / retrieval line", "Respiratory protection", "Gloves", "Non-sparking tools"],
  },
  {
    label: "Heavy Equipment",
    icon: "🚜",
    intro:
      "Heavy equipment and pedestrians do not mix. Establish exclusion zones, verify operator competence, and inspect machines daily.",
    checks: [
      "Operator training and certifications verified",
      "Pre-operation inspection completed and documented",
      "Backup alarms, lights, and horns functional",
      "Exclusion / swing radius barricaded",
      "Spotter assigned where visibility is limited",
      "Ground conditions stable for equipment movement",
      "Overhead and buried utilities identified",
      "Fuel / hydraulic leaks addressed before operation",
      "Pedestrian traffic routed away from active work zone",
      "Radio / hand signal communication confirmed",
    ],
    keyHazards: ["Struck-by", "Caught-in/between", "Tip-over", "Rollover", "Noise exposure"],
    ppe: ["Hard hat", "High-vis vest", "Steel-toe boots", "Gloves", "Hearing protection"],
  },
  {
    label: "Fall Protection / General",
    icon: "🦺",
    intro:
      "Falls kill. Every worker above 6 ft must have fall protection, every opening must be covered, and every ladder must be secured.",
    checks: [
      "Fall protection plan reviewed for the work area",
      "Harnesses, lanyards, and anchors inspected",
      "All floor holes and openings covered / guarded",
      "Stairways and ladders meet OSHA standards",
      "Toeboards installed where materials could fall",
      "Scaffolds and elevated platforms fully guarded",
      "Competent person sign-off on fall-protection systems",
      "Workers trained on recognized fall hazards",
      "Emergency rescue procedures communicated",
      "Housekeeping maintained to prevent trips",
    ],
    keyHazards: ["Falls", "Struck-by falling objects", "Trips"],
    ppe: ["Hard hat", "High-vis vest", "Harness / lanyard", "Non-slip boots", "Gloves"],
  },
];

const SafetyBriefingPage = () => {
  const [activityLabel, setActivityLabel] = useState(ACTIVITIES[0].label);
  const [crewSize, setCrewSize] = useState(8);
  const [company, setCompany] = useState("");
  const [generated, setGenerated] = useState(false);

  const activity = ACTIVITIES.find((a) => a.label === activityLabel) ?? ACTIVITIES[0];

  const script = `Good morning, crew. Today we are working on ${activity.label.toLowerCase()} with ${crewSize} people on site. ${activity.intro} Our top hazards today are ${activity.keyHazards.join(", ")}. Before we start, make sure your ${activity.ppe.join(", ")} is on and in good condition. If you see any of these issues — missing guards, unstable ground, energized lines, or an unprotected edge — stop work immediately and notify me or the competent person. Remember: no task is so urgent that we cannot do it safely. Let's sign the sheet and get to work.`;

  const signOffLines = Array.from({ length: Math.max(4, crewSize) }, (_, i) => i + 1);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className="container mx-auto max-w-6xl px-4 py-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Free OSHA Safety Generator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Safety Briefing &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              OSHA Inspection Generator
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Pick a jobsite activity and crew size. Instantly generate an
            OSHA-style checklist and a 2-minute toolbox talk script for your
            morning huddle — ready to print or email.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-white/10 h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold mb-2">Step 1 — Pick the Activity</h2>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Jobsite Activity
              </label>
              <select
                value={activityLabel}
                onChange={(e) => setActivityLabel(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
              >
                {ACTIVITIES.map((a) => (
                  <option key={a.label} value={a.label}>
                    {a.icon} {a.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Crew Size
              </label>
              <input
                type="number"
                min={1}
                max={200}
                value={crewSize}
                onChange={(e) => setCrewSize(Number(e.target.value))}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Company / Project
                <span className="text-white/40 font-normal"> (optional)</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              onClick={() => setGenerated(true)}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              Generate Safety Briefing
            </button>

            <p className="text-xs text-white/40 text-center">
              Generated content is a starting checklist only. Always follow your
              site-specific safety plan and competent person direction.
            </p>
          </div>

          {/* Output */}
          <div className="space-y-8">
            {!generated ? (
              <div className="min-h-[420px] bg-black/50 border border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-center p-10">
                <ClipboardCheck className="w-14 h-14 text-white/20 mb-4" />
                <p className="text-white/50 font-medium text-lg">
                  Your safety briefing will appear here
                </p>
                <p className="text-white/30 text-sm mt-2 max-w-sm">
                  Select an activity and crew size, then click Generate to see
                  the OSHA checklist and toolbox talk script.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl space-y-6">
                  <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-6">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                        Daily Toolbox Talk
                      </p>
                      <p className="text-2xl font-bold mt-1">{activity.label}</p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {new Date().toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 border border-blue-200">
                      <Users className="w-3.5 h-3.5" /> Crew of {crewSize}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                      <Megaphone className="w-3.5 h-3.5" /> 2-Minute Toolbox Talk Script
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
                      &ldquo;{script}&rdquo;
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Key Hazards
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.keyHazards.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" /> Required PPE
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.ppe.map((p) => (
                        <span
                          key={p}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                      <ClipboardCheck className="w-3.5 h-3.5" /> OSHA Inspection Checklist
                    </h4>
                    <ul className="space-y-2">
                      {activity.checks.map((check, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      Daily Sign-Off Sheet — {company || "Project"}
                    </h4>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-12 gap-2 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-200">
                        <div className="col-span-1">#</div>
                        <div className="col-span-4">Name</div>
                        <div className="col-span-4">Signature</div>
                        <div className="col-span-3">Time</div>
                      </div>
                      {signOffLines.map((n) => (
                        <div
                          key={n}
                          className="grid grid-cols-12 gap-2 px-3 py-3 text-sm border-b border-gray-100 last:border-0"
                        >
                          <div className="col-span-1 text-gray-400">{n}</div>
                          <div className="col-span-4 border-b border-gray-300 h-5" />
                          <div className="col-span-4 border-b border-gray-300 h-5" />
                          <div className="col-span-3 border-b border-gray-300 h-5" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Printer className="w-4 h-4" /> Print / Save as PDF
                    </button>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    Centralize safety compliance in Space AI
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    Track inspections, assign corrective actions, and analyze
                    leading safety indicators across every project.
                  </p>
                  <Link href="/construction-safety-management-software/">
                    <span className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300">
                      Explore Safety Management <Wand2 className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* How it works */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How This Safety Briefing Generator Works
            </h2>
            <p className="text-white/60">
              Pick an activity and crew size to get a jobsite-specific safety
              checklist and a ready-to-deliver toolbox talk script.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Jobsite Activity",
                description:
                  "Select the work being performed — e.g. Deep Excavation, Scaffolding, Crane Operations, or Electrical Work. Each activity loads a tailored OSHA-style checklist and hazard set.",
              },
              {
                title: "Crew Size",
                description:
                  "Enter the number of workers on the crew. The generator creates the right number of sign-off lines for the daily sign-off sheet.",
              },
              {
                title: "Toolbox Talk Script",
                description:
                  "A 2-minute morning huddle script is generated automatically. It covers the top hazards, required PPE, and a stop-work reminder.",
              },
              {
                title: "OSHA Inspection Checklist",
                description:
                  "A multi-point checklist specific to the selected activity. Use it for pre-shift inspections, competent person reviews, or subcontractor coordination.",
              },
              {
                title: "Required PPE",
                description:
                  "The generator lists the personal protective equipment every worker should wear for the activity, from hard hats to fall protection.",
              },
              {
                title: "Print or Email",
                description:
                  "Use the Print / Save as PDF button for a hard copy, or email the briefing and sign-off sheet directly from your device.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SafetyBriefingPage;
