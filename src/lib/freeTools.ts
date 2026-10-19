import {
  Calculator,
  FileText,
  DollarSign,
  Shield,
  ClipboardList,
  FileSearch,
} from "lucide-react";

export type FreeTool = {
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof Calculator;
  color: string;
  badge: string;
};

export const FREE_TOOLS: FreeTool[] = [
  {
    href: "/tools/construction-delay-risk-calculator/",
    title: "Construction Delay & Risk Exposure Simulator",
    shortTitle: "Delay & Risk Simulator",
    description:
      "Estimate schedule drift in days and financial exposure in dollars from RFI delays and liquidated-damages penalties. See how Space AI predictive early warning can mitigate up to 50% of your risk.",
    icon: Calculator,
    color: "from-blue-500 to-purple-500",
    badge: "Risk Calculator",
  },
  {
    href: "/tools/ai-rfi-generator/",
    title: "AI RFI & Submittal Document Generator",
    shortTitle: "AI RFI Writer",
    description:
      "Turn four simple fields into a polished Request for Information with official subject, problem description, schedule impact, and proposed solution — ready to copy or export.",
    icon: FileText,
    color: "from-emerald-500 to-teal-400",
    badge: "Document Generator",
  },
  {
    href: "/tools/roi-calculator/",
    title: "Procore & Legacy Tech ROI Savings Calculator",
    shortTitle: "ROI Savings Calculator",
    description:
      "Compare your current Procore, Autodesk ACC, Aconex, or legacy platform against Space AI. Compute license savings and project manager hours recovered every month.",
    icon: DollarSign,
    color: "from-amber-500 to-orange-500",
    badge: "ROI Calculator",
  },
  {
    href: "/tools/safety-briefing-generator/",
    title: "AI Safety Briefing & OSHA Inspection Generator",
    shortTitle: "Safety Briefing Generator",
    description:
      "Pick a jobsite activity and crew size. Instantly generate an OSHA-style inspection checklist and a 2-minute toolbox talk script with a printable daily sign-off sheet.",
    icon: Shield,
    color: "from-red-500 to-rose-400",
    badge: "Safety Generator",
  },
  {
    href: "/tools/change-order-estimator/",
    title: "Change Order Schedule Drift & Cost Estimator",
    shortTitle: "Change Order Estimator",
    description:
      "Calculate budget-creep percentage, administrative labor impact, and cascading secondary delay from pending change orders. Download a meeting-ready risk summary.",
    icon: ClipboardList,
    color: "from-cyan-500 to-blue-500",
    badge: "Impact Estimator",
  },
  {
    href: "/tools/ai-blueprint-parser/",
    title: "AI Blueprint & Construction Drawing Parser",
    shortTitle: "Blueprint Parser",
    description:
      "Upload PDF blueprints, civil plans, or DOT sheets. Extract text, tables, and structured data from construction drawings using AI-powered OCR — no signup required.",
    icon: FileSearch,
    color: "from-purple-500 to-pink-500",
    badge: "Document Parser",
  },
];
