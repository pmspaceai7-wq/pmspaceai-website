import { Metadata } from "next";
import DemoRequestForm from "./DemoRequestForm"; 


export const metadata: Metadata = {
  title: "Request a Demo | Space AI Construction Management Software",
  description:
    "Schedule a Space AI demo to see AI-powered construction management in action. See how predictive analytics and automation cut project delays by 23%.",
  keywords: [
    "construction software demo",
    "project management software demo",
    "construction management demo",
    "ai construction demo",
    "Space AI demo",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-software-demo/",
  },
  openGraph: {
    title: "Book a Demo | Space AI Construction Management",
    description: "See Space AI in action. Schedule a personalized demo of AI-powered construction management.",
    url: "https://pmspace.ai/construction-software-demo/",
    type: "website",
  },
};

export default function DemoPage() {
  return (
      <DemoRequestForm />
   
  );
}



