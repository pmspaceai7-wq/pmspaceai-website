"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  DollarSign,
  Users,
  Clock,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Building2,
  Briefcase,
} from "lucide-react";

const PLATFORMS = [
  {
    name: "Procore",
    defaultLicense: 48000,
    description: "Popular system of record for commercial GCs",
  },
  {
    name: "Autodesk Construction Cloud",
    defaultLicense: 54000,
    description: "Design-to-construction platform bundle",
  },
  {
    name: "Oracle Aconex",
    defaultLicense: 52000,
    description: "Document-heavy collaboration platform",
  },
  {
    name: "Newforma",
    defaultLicense: 42000,
    description: "Project information management",
  },
  {
    name: "PlanGrid",
    defaultLicense: 36000,
    description: "Field-first plan and document tool",
  },
  {
    name: "Other Legacy System",
    defaultLicense: 45000,
    description: "Enter your actual license amount",
  },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const fmtMoney = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${Math.round(n)}`;
};

const RoiCalculatorPage = () => {
  const [platform, setPlatform] = useState(PLATFORMS[0].name);
  const [licenseCost, setLicenseCost] = useState(PLATFORMS[0].defaultLicense);
  const [seats, setSeats] = useState(15);
  const [weeklyManualHours, setWeeklyManualHours] = useState(12);
  const [pmCount, setPmCount] = useState(5);
  const [pmHourlyRate, setPmHourlyRate] = useState(85);
  const [spaceAiCost, setSpaceAiCost] = useState(24000);

  useEffect(() => {
    const p = PLATFORMS.find((x) => x.name === platform);
    if (p) setLicenseCost(p.defaultLicense);
  }, [platform]);

  const legacyAnnualTotal = licenseCost + weeklyManualHours * 52 * pmCount * pmHourlyRate;
  const manualHoursAnnual = weeklyManualHours * 52 * pmCount;
  const manualCostAnnual = manualHoursAnnual * pmHourlyRate;

  // Space AI automates 70% of manual reporting and replaces point solutions
  const automationRate = 0.7;
  const hoursSavedPerYear = manualHoursAnnual * automationRate;
  const hoursSavedPerMonth = hoursSavedPerYear / 12;
  const remainingManualCostAnnual = manualCostAnnual * (1 - automationRate);

  const spaceAiAnnualTotal = spaceAiCost + remainingManualCostAnnual;
  const totalAnnualSavings = legacyAnnualTotal - spaceAiAnnualTotal;
  const licenseSavings = licenseCost - spaceAiCost;
  const roi = spaceAiCost > 0 ? (totalAnnualSavings / spaceAiCost) * 100 : 0;

  const comparisonRows = [
    { label: "Platform model", legacy: "System of Record", spaceAi: "System of Intelligence" },
    { label: "Annual software license", legacy: fmtMoney(licenseCost), spaceAi: fmtMoney(spaceAiCost) },
    { label: "Annual manual reporting cost", legacy: fmtMoney(manualCostAnnual), spaceAi: fmtMoney(remainingManualCostAnnual) },
    { label: "Annual total cost", legacy: fmtMoney(legacyAnnualTotal), spaceAi: fmtMoney(spaceAiAnnualTotal) },
    { label: "Monthly PM hours on manual reporting", legacy: fmt(manualHoursAnnual / 12), spaceAi: fmt((manualHoursAnnual * (1 - automationRate)) / 12) },
    { label: "Projected annual savings", legacy: "—", spaceAi: fmtMoney(totalAnnualSavings) },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className="container mx-auto max-w-6xl px-4 py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Free Procore &amp; Legacy Tech ROI Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Construction Software{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              ROI Savings Calculator
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Compare your current legacy system of record against Space AI&apos;s
            system of intelligence. See license savings and project manager
            hours recovered every month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-white/10 h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold mb-2">Current Platform</h2>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Legacy Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
              >
                {PLATFORMS.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-white/40 mt-1">
                {PLATFORMS.find((p) => p.name === platform)?.description}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Annual License Cost
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="number"
                  value={licenseCost}
                  onChange={(e) => setLicenseCost(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Seat Count
              </label>
              <input
                type="number"
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <h2 className="text-2xl font-semibold pt-4 border-t border-white/10">
              Manual Reporting Effort
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Weekly Hours / PM
                </label>
                <input
                  type="number"
                  value={weeklyManualHours}
                  onChange={(e) => setWeeklyManualHours(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  # of PMs
                </label>
                <input
                  type="number"
                  value={pmCount}
                  onChange={(e) => setPmCount(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                PM Loaded Cost ($/hr)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="number"
                  value={pmHourlyRate}
                  onChange={(e) => setPmHourlyRate(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold pt-4 border-t border-white/10">
              Space AI Investment
            </h2>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-white/70">
                  Estimated Annual Cost
                </label>
                <span className="text-blue-400 font-bold tabular-nums">
                  {fmtMoney(spaceAiCost)}
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={Math.max(100000, licenseCost * 1.5)}
                step={1000}
                value={spaceAiCost}
                onChange={(e) => setSpaceAiCost(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <p className="text-xs text-white/40 mt-1">
                Defaults to ~50% of the legacy license; adjust to your actual quote
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {/* Summary cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <DollarSign className="w-5 h-5 text-green-400 mb-3" />
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Total Annual Savings
                </p>
                <p className="text-3xl font-bold text-green-400 tabular-nums">
                  {fmtMoney(totalAnnualSavings)}
                </p>
                <p className="text-sm text-white/50 mt-1 tabular-nums">
                  {fmtMoney(licenseSavings)} license + {fmtMoney(hoursSavedPerYear * pmHourlyRate)} labor
                </p>
              </div>
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <Clock className="w-5 h-5 text-blue-400 mb-3" />
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Hours Saved / Month
                </p>
                <p className="text-3xl font-bold tabular-nums">
                  {fmt(hoursSavedPerMonth)}
                </p>
                <p className="text-sm text-white/50 mt-1">PM hours reclaimed</p>
              </div>
            </div>

            {/* ROI highlight */}
            <div className="bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
              <p className="text-white/60 mb-2">Projected Annual ROI</p>
              <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tabular-nums">
                {roi.toFixed(0)}%
              </p>
              <p className="text-sm text-white/50 mt-3">
                Every dollar invested in Space AI returns{" "}
                <span className="text-white font-medium">
                  ${(1 + roi / 100).toFixed(1)}
                </span>{" "}
                in first-year value.
              </p>
            </div>

            {/* Side-by-side comparison */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="bg-gray-900/80 grid grid-cols-3 gap-4 p-4 text-sm font-semibold text-white/70 border-b border-white/10">
                <div>Cost Factor</div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> Legacy System
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Briefcase className="w-4 h-4" /> Space AI
                </div>
              </div>
              {comparisonRows.map((row, idx) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 gap-4 p-4 text-sm items-center ${
                    idx % 2 === 0 ? "bg-black/50" : "bg-black/30"
                  }`}
                >
                  <div className="text-white/60">{row.label}</div>
                  <div
                    className={`tabular-nums ${
                      row.legacy === "—" ? "text-white/30" : "text-white"
                    }`}
                  >
                    {row.legacy}
                  </div>
                  <div
                    className={`tabular-nums font-medium ${
                      row.spaceAi.includes("$") ? "text-green-400" : "text-blue-300"
                    }`}
                  >
                    {row.spaceAi}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/70">
                  Space AI replaces fragmented system-of-record silos with an
                  AI-native operating system: predictive scheduling, automated
                  reporting, unified documents, and real-time risk alerts.
                </p>
              </div>
              <Link href="/construction-software-demo/">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Book a Savings Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <p className="text-xs text-white/40 text-center flex items-center justify-center gap-1">
              <TrendingDown className="w-3 h-3" />
              Calculations assume 70% reduction in manual reporting time. Adjust
              inputs to match your actual workflows.
            </p>
          </div>
        </div>

        {/* How it works */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How This ROI Calculator Works
            </h2>
            <p className="text-white/60">
              This tool compares your current legacy platform against Space AI by
              adding up software license costs and the hidden cost of manual
              reporting labor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Platform Presets",
                description:
                  "Choose Procore, Autodesk ACC, Oracle Aconex, Newforma, PlanGrid, or Other. Each preset loads a typical annual license cost that you can edit to match your actual contract.",
              },
              {
                title: "License Cost",
                description:
                  "Enter your total annual software license spend. This is the base cost you are paying today just for access to the legacy system of record.",
              },
              {
                title: "Seats",
                description:
                  "Seat count helps contextualize the license cost. It does not directly change the calculation unless you use it to estimate per-seat pricing.",
              },
              {
                title: "Manual Reporting Hours",
                description:
                  "Estimate how many hours per week each project manager spends building reports, chasing updates, and consolidating data in spreadsheets or disconnected modules.",
              },
              {
                title: "PM Loaded Cost",
                description:
                  "Enter the fully loaded hourly cost of a project manager — salary, benefits, and overhead. This turns wasted hours into real dollars.",
              },
              {
                title: "Space AI Investment",
                description:
                  "Adjust the estimated annual Space AI cost. The calculator defaults to roughly half of the legacy license and shows the net savings after automating 70% of manual reporting.",
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

export default RoiCalculatorPage;
