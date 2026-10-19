"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Gauge,
  Clock,
  DollarSign,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { maximumFractionDigits: 0 });

const fmtMoney = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${Math.round(n)}`;
};

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-white/70">{label}</label>
        <span className="text-blue-400 font-bold text-sm tabular-nums">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
      {hint && <p className="text-xs text-white/40 mt-1">{hint}</p>}
    </div>
  );
}

const RiskCalculatorPage = () => {
  const [projectValue, setProjectValue] = useState(10); // $M
  const [timeline, setTimeline] = useState(18); // months
  const [rfis, setRfis] = useState(45); // total RFIs
  const [rfiDelay, setRfiDelay] = useState(12); // days per RFI
  const [ldRate, setLdRate] = useState(2500); // $/day liquidated damages

  const { driftDays, driftPct, ldExposure, overheadExposure, totalExposure, riskScore, riskLabel, riskColor, recommendation, mitigatedSavings } =
    useMemo(() => {
      // Total schedule drift from RFI latency
      const days = Math.round(rfis * rfiDelay);
      const pct = (days / (timeline * 30)) * 100;
      const ld = days * ldRate;
      // Soft-cost exposure: financing, overhead, idle crews (~12% of value per year)
      const overhead = projectValue * 1_000_000 * 0.12 * (days / 365);
      const total = ld + overhead;
      const score = Math.min(
        100,
        Math.round(pct * 2.2 + Math.min(30, ld / 1_000_000))
      );

      const label =
        score < 30
          ? "Low"
          : score < 55
          ? "Moderate"
          : score < 80
          ? "High"
          : "Critical";
      const color =
        score < 30
          ? "text-green-400"
          : score < 55
          ? "text-yellow-400"
          : score < 80
          ? "text-orange-400"
          : "text-red-500";

      const recommendation =
        score < 30
          ? "Your current RFI flow is under control. Keep response-time SLAs in place to stay ahead of schedule drift."
          : score < 55
          ? "Noticeable schedule drift detected. Standardize RFI turnaround times and route questions to the right specialist on first submission to stop delays from compounding."
          : score < 80
          ? "High financial exposure. Tighten RFI response SLAs, batch related questions, and adopt early-warning alerts before lag costs escalate into LD claims."
          : "Critical exposure. You are carrying significant liquidated-damages risk. Space AI's predictive early-warning system flags slipping RFIs weeks in advance, enabling mitigation before penalties accrue.";

      const mitigated = total * 0.5;

      return {
        driftDays: days,
        driftPct: pct,
        ldExposure: ld,
        overheadExposure: overhead,
        totalExposure: total,
        riskScore: score,
        riskLabel: label,
        riskColor: color,
        recommendation,
        mitigatedSavings: mitigated,
      };
    }, [projectValue, timeline, rfis, rfiDelay, ldRate]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <main className="container mx-auto max-w-6xl px-4 py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Free Delay &amp; Risk Exposure Simulator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Construction Delay &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Risk Exposure Simulator
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Move the sliders to model your project baseline. Instantly see
            schedule drift in days, financial exposure in dollars, and how much
            Space AI early warning can recover.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-8 bg-gray-900/50 p-8 rounded-2xl border border-white/10 h-fit lg:sticky lg:top-28">
            <h2 className="text-2xl font-semibold mb-6">Project Baseline</h2>

            <Slider
              label="Project Value"
              value={projectValue}
              min={1}
              max={500}
              step={1}
              onChange={setProjectValue}
              display={fmtMoney(projectValue * 1_000_000)}
              hint="Total contract value in USD"
            />

            <Slider
              label="Project Timeline"
              value={timeline}
              min={3}
              max={48}
              step={1}
              onChange={setTimeline}
              display={`${timeline} months`}
            />

            <Slider
              label="Total RFIs Expected"
              value={rfis}
              min={5}
              max={300}
              step={5}
              onChange={setRfis}
              display={fmt(rfis)}
              hint="Approximate number of RFIs across the project"
            />

            <Slider
              label="Average RFI Resolution Delay"
              value={rfiDelay}
              min={1}
              max={30}
              step={1}
              onChange={setRfiDelay}
              display={`${rfiDelay} days`}
              hint="Avg days each open RFI stalls the critical path"
            />

            <Slider
              label="Liquidated Damages Penalty"
              value={ldRate}
              min={250}
              max={15000}
              step={250}
              onChange={setLdRate}
              display={`$${fmt(ldRate)}/day`}
            />

            <div className="pt-4 border-t border-white/10">
              <Link href="/construction-software-demo/">
                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Get a Full Risk Analysis Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {/* Risk meter */}
            <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="flex items-center gap-2 text-white/60 text-lg font-medium mb-6">
                <Gauge className="w-5 h-5 text-blue-400" />
                Risk Meter
              </div>

              <div className="relative h-4 w-full rounded-full overflow-hidden bg-gradient-to-r from-green-500 via-yellow-500 via-60% to-red-600 mb-3">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-4 border-black shadow-lg transition-all duration-700 ease-out"
                  style={{
                    left: `calc(${Math.min(riskScore, 100)}% - 14px)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/50 mb-6">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
                <span>Critical</span>
              </div>

              <div className="text-center">
                <span className={`text-3xl font-bold ${riskColor}`}>
                  {riskLabel} Risk Profile
                </span>
                <p className="text-white/80 leading-relaxed mt-4 bg-white/5 p-4 rounded-lg border border-white/5 text-sm">
                  {recommendation}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <Clock className="w-5 h-5 text-blue-400 mb-3" />
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Schedule Drift
                </p>
                <p className="text-3xl font-bold tabular-nums">
                  {fmt(driftDays)} <span className="text-lg text-white/60">days</span>
                </p>
                <p className="text-sm text-white/50 mt-1 tabular-nums">
                  {driftPct.toFixed(1)}% of total timeline
                </p>
              </div>
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6">
                <DollarSign className="w-5 h-5 text-red-400 mb-3" />
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                  Total $ Exposure
                </p>
                <p className="text-3xl font-bold tabular-nums">
                  {fmtMoney(totalExposure)}
                </p>
                <p className="text-sm text-white/50 mt-1 tabular-nums">
                  {fmtMoney(ldExposure)} LD + {fmtMoney(overheadExposure)} soft costs
                </p>
              </div>
            </div>

            {/* Mitigation projection */}
            <div className="bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold">
                  With Space AI Early Warning
                </h3>
              </div>
              <p className="text-sm text-white/60 mb-6">
                Predictive alerts flag slipping RFIs and at-risk trades up to
                weeks early, recovering up to 50% of financial exposure before
                penalties accrue.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/60">Without mitigation</span>
                    <span className="font-bold text-red-400 tabular-nums">
                      {fmtMoney(totalExposure)}
                    </span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full bg-red-500/70 transition-all duration-700"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/60 flex items-center gap-1">
                      <TrendingDown className="w-4 h-4 text-green-400" />
                      With Space AI mitigation
                    </span>
                    <span className="font-bold text-green-400 tabular-nums">
                      {fmtMoney(totalExposure - mitigatedSavings)}
                    </span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-700"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-sm text-green-300 font-medium">
                  Up to {fmtMoney(mitigatedSavings)} in recoverable risk exposure
                </p>
              </div>
            </div>

            {/* Recommended actions */}
            <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
              <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                Recommended Actions
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  Enforce RFI response SLAs and auto-escalate aging questions.
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  Use predictive scheduling to spot slippage before it hits the
                  critical path.
                </li>
                {riskScore > 50 && (
                  <li className="flex gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                    Adopt AI early-warning alerts to recover risk exposure.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How This Delay Risk Simulator Works
            </h2>
            <p className="text-white/60">
              Move the sliders to model your project baseline. The calculator
              translates RFI latency into schedule drift and financial exposure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Value",
                description:
                  "The total contract value in millions. It drives the soft-cost exposure estimate — financing, overhead, and idle crew costs that accumulate while the project is delayed.",
              },
              {
                title: "Project Timeline",
                description:
                  "The original schedule duration in months. Used to express schedule drift as a percentage of the total timeline, which feeds the risk rating.",
              },
              {
                title: "Total RFIs Expected",
                description:
                  "The approximate number of requests for information across the project. Each open RFI is a potential delay point if it is not answered quickly.",
              },
              {
                title: "Average RFI Resolution Delay",
                description:
                  "The average days each RFI waits for a response. Multiplied by the number of RFIs to estimate total schedule drift in days.",
              },
              {
                title: "Liquidated Damages Penalty",
                description:
                  "The contractual penalty per calendar day of delay. Multiplied by drift days to calculate direct LD exposure.",
              },
              {
                title: "Risk Meter & Mitigation",
                description:
                  "The risk score combines schedule impact and dollar exposure into Low, Moderate, High, or Critical. The mitigation projection shows up to 50% recoverable exposure with Space AI early warning.",
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

export default RiskCalculatorPage;
