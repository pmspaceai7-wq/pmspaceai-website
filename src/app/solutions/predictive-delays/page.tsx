import { Metadata } from "next";
import PredictiveDelaysPage from "./PredictiveDelaysPage";

export const metadata: Metadata = {
  title: "AI Predictive Delay Analysis for Schedules | Space AI",
  description:
    "Space AI empowers you to forecast project delays before they happen. Mitigate risks, improve confidence, and maintain schedules with predictive AI.",
  keywords: [
    "predictive delay analysis",
    "AI schedule forecasting",
    "construction delay prediction",
    "project delay prevention",
    "predictive scheduling software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/predictive-delays/",
  },
  openGraph: {
    title: "AI Predictive Delay Analysis for Schedules | Space AI",
    description: "Forecast project delays before they happen with Space AI's predictive analytics.",
    type: "website",
    url: "https://pmspace.ai/solutions/predictive-delays/",
  },
};




export default function Page() {
  return <PredictiveDelaysPage/>;
}
