"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ClipboardList,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Printer,
  Copy,
  Wand2,
  FileText,
  Activity,
} from "lucide-react";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const fmtMoney = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${Math.round(n)}`;
};

const ChangeOrderEstimatorPage = () => {
  const [originalValue, setOriginalValue] = useState(1_000_000);
  const [coAmount, setCoAmount] = useState(150_000);
  const [laborRate, setLaborRate] = useState(95);
  const [coCount, setCoCount] = useState(6);
  const [dependencies, setDependencies] = useState(3);

  const {
    creepPct,
    adminHours,
    adminCost,
    baseDelay,
    cascadeFactor,
    secondaryDelay,
    totalDelay,
    riskLabel,
    riskColor,
    recommendation,
  } = useMemo(() => {
    const pct = originalValue > 0 ? (coAmount / originalValue) * 100 : 0;
    const hours = coCount * 24; // estimate 24 hrs review, pricing, negotiation per CO
    const admin = hours * laborRate;
    const base = coCount * 3; // base 3 days per CO
    const factor = 1 + dependencies * 0.45;
    const cascade = Math.round(base * factor);
    const total = base + cascade;

    const label =
      pct < 5 && dependencies <= 2
        ? "Low"
        : pct < 10 && dependencies <= 4
        ? "Moderate"
        : pct < 15 || dependencies <= 6
        ? "High"
        : "Critical";
    const color =
      label === "Low"
        ? "text-green-400"
        : label === "Moderate"
        ? "text-yellow-400"
        : label === "High"
        ? "text-orange-400"
        : "text-red-500";

    const recommendation =
      label === "Low"
        ? "Scope changes are within normal tolerance. Maintain a weekly change-order log and track approval turnaround."
        : label === "Moderate"
        ? "Creep is materializing. Tighten change-order submittal standards and request faster owner approvals to avoid compounding downstream impact."
        : label === "High"
        ? "Significant budget and schedule exposure. Bundle related changes, issue early schedule impact notices, and escalate before cascading delays hit critical trades."
        : "Critical exposure. Pending changes threaten both budget and schedule. Convene an owner alignment meeting immediately and consider a formal time-impact analysis for every open item.";

    return {
      creepPct: pct,
      adminHours: hours,
      adminCost: admin,
      baseDelay: base,
      cascadeFactor: factor,
      secondaryDelay: cascade,
      totalDelay: total,
      riskLabel: label,
      riskColor: color,
      recommendation,
    };
  }, [originalValue, coAmount, laborRate, coCount, dependencies]);

  const summaryText = `Change Order Risk Summary
Generated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}

Original Trade Contract Value: ${fmtMoney(originalValue)}
Pending Change Orders: ${fmtMoney(coAmount)}
Budget Creep: ${creepPct.toFixed(1)}%

Administrative Labor Estimate
- # of pending change orders: ${coCount}
- Est. admin hours: ${fmt(adminHours)}
- Labor rate: ${fmtMoney(laborRate)}/hr
- Admin cost impact: ${fmtMoney(adminCost)}

Schedule Impact Estimate
- Base delay from changes: ${baseDelay} days
- Downstream trade dependencies: ${dependencies}
- Cascade multiplier: ${cascadeFactor.toFixed(2)}x
- Secondary (cascading) delay: ${secondaryDelay} days
- Total estimated delay: ${totalDelay} days

Risk Rating: ${riskLabel}
${recommendation}

Generated with Space AI Change Order Estimator — pmspace.ai/tools/change-order-estimator/`;

  const [copied, setCopied] = useState(false);
  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className="container mx-auto max-w-6xl px-4 py-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <ClipboardList className="w-4 h-4" />
            Free Change Order Impact Estimator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Change Order{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Schedule Drift &amp; Cost Estimator
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Model how pending change orders erode budget and cascade onto
            downstream trades. Produce a downloadable risk summary before your
            next owner meeting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-white/10 h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold mb-2">Step 1 — Enter the Variables</h2>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Original Trade Contract Value
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="number"
                  value={originalValue}
                  onChange={(e) => setOriginalValue(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Pending Change Orders ($)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="number"
                  value={coAmount}
                  onChange={(e) => setCoAmount(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Labor Rate ($/hr)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="number"
                    value={laborRate}
                    onChange={(e) => setLaborRate(Number(e.target.value))}
                    className="w-full bg-black border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  # of Pending COs
                </label>
                <input
                  type="number"
                  value={coCount}
                  onChange={(e) => setCoCount(Number(e.target.value))}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-white/70">
                  Downstream Trade Dependencies
                </label>
                <span className="text-blue-400 font-bold tabular-nums">
                  {dependencies}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={dependencies}
                onChange={(e) => setDependencies(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <p className="text-xs text-white/40 mt-1">
                Number of trades affected by changes to this trade
              </p>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-8">
            {/* Budget creep */}
            <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold">Budget Creep</h3>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold tabular-nums">
                  {creepPct.toFixed(1)}%
                </span>
                <span className="text-white/50 mb-2">
                  of original contract value
                </span>
              </div>
              <div className="mt-4 h-4 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 ${
                    creepPct < 5
                      ? "bg-green-500"
                      : creepPct < 10
                      ? "bg-yellow-500"
                      : creepPct < 15
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(creepPct, 100)}%` }}
                />
              </div>
              <p className="text-sm text-white/50 mt-3">
                Pending change orders add{" "}
                <span className="text-white font-medium">{fmtMoney(coAmount)}</span>{" "}
                to a{" "}
                <span className="text-white font-medium">{fmtMoney(originalValue)}</span>{" "}
                baseline.
              </p>
            </div>

            {/* Schedule impact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <Clock className="w-5 h-5 text-orange-400 mb-3" />
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Secondary Delay
                </p>
                <p className="text-3xl font-bold tabular-nums">
                  {fmt(secondaryDelay)}{" "}
                  <span className="text-lg text-white/60">days</span>
                </p>
                <p className="text-sm text-white/50 mt-1">
                  Cascade {cascadeFactor.toFixed(2)}x
                </p>
              </div>
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <Users className="w-5 h-5 text-blue-400 mb-3" />
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Admin Cost Impact
                </p>
                <p className="text-3xl font-bold tabular-nums">
                  {fmtMoney(adminCost)}
                </p>
                <p className="text-sm text-white/50 mt-1">
                  {fmt(adminHours)} hrs @ {fmtMoney(laborRate)}/hr
                </p>
              </div>
            </div>

            {/* Risk rating */}
            <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
              <div className="flex items-center justify-center gap-2 text-white/60 text-lg font-medium mb-4">
                <Activity className="w-5 h-5 text-blue-400" />
                Change Order Risk Rating
              </div>
              <p className={`text-4xl font-bold ${riskColor}`}>{riskLabel}</p>
              <p className="text-white/70 text-sm mt-4 leading-relaxed">
                {recommendation}
              </p>
            </div>

            {/* Cascade visualization */}
            <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
              <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                Cascading Delay Visual
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/50 w-24">Base delay</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-700"
                      style={{
                        width: `${Math.min((baseDelay / totalDelay) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-white/70 tabular-nums w-12 text-right">
                    {baseDelay}d
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/50 w-24">Cascade</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 transition-all duration-700"
                      style={{
                        width: `${Math.min((secondaryDelay / totalDelay) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-white/70 tabular-nums w-12 text-right">
                    {secondaryDelay}d
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/50 w-24">Total</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 transition-all duration-700"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <span className="text-sm text-white font-medium tabular-nums w-12 text-right">
                    {totalDelay}d
                  </span>
                </div>
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl space-y-4 print:block">
              <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold">Change Order Risk Summary</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 text-xs uppercase font-semibold">Original Value</p>
                  <p className="font-medium">{fmtMoney(originalValue)}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-semibold">Pending COs</p>
                  <p className="font-medium">{fmtMoney(coAmount)}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-semibold">Budget Creep</p>
                  <p className="font-medium">{creepPct.toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-semibold">Risk Rating</p>
                  <p className={`font-bold ${riskColor}`}>{riskLabel}</p>
                </div>
              </div>

              <div className="text-sm">
                <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Schedule Impact</p>
                <p className="text-gray-700">
                  Base delay: <span className="font-medium">{baseDelay} days</span> ·
                  Downstream dependencies: <span className="font-medium">{dependencies}</span> ·
                  Secondary (cascading) delay: <span className="font-medium">{secondaryDelay} days</span> ·
                  Total estimated delay: <span className="font-bold">{totalDelay} days</span>
                </p>
              </div>

              <div className="text-sm">
                <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Recommendation</p>
                <p className="text-gray-700">{recommendation}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={copySummary}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy Summary
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

            {riskLabel === "Critical" && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-red-200">
                  Critical risk level. Download the summary and schedule an
                  owner alignment meeting immediately.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* How it works */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How This Change Order Estimator Works
            </h2>
            <p className="text-white/60">
              This tool models the financial and schedule impact of pending
              change orders so you can walk into owner meetings with clear,
              defensible numbers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Original Trade Contract Value",
                description:
                  "The baseline contract amount for the affected trade. This is the denominator used to calculate the percentage of budget creep.",
              },
              {
                title: "Pending Change Orders ($)",
                description:
                  "The total dollar value of change orders that have been submitted, proposed, or are awaiting approval against this trade.",
              },
              {
                title: "Budget Creep %",
                description:
                  "Calculated as pending change orders divided by the original contract value. It shows how much the trade scope is growing before work proceeds.",
              },
              {
                title: "Labor Rate ($/hr)",
                description:
                  "The fully loaded hourly cost for the people reviewing, pricing, negotiating, and administering the change orders.",
              },
              {
                title: "# of Pending Change Orders",
                description:
                  "The count of open change-order requests. More requests mean more administrative overhead and more opportunities for cascading schedule impact.",
              },
              {
                title: "Downstream Trade Dependencies",
                description:
                  "The number of trades that cannot start or finish until the changed work is resolved. Each dependent trade multiplies the secondary delay through the cascade factor.",
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

export default ChangeOrderEstimatorPage;
