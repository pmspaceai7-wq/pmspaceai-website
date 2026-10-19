import { Metadata } from "next";
import ESignDemoRequestForm from "./EsignDemoRequestForm";

export const metadata: Metadata = {
  title: "Request a Demo | Space Sign E-Signature Solutions",
  description:
    "Schedule a Space Sign demo for secure e-signature solutions, document automation, and workflow management for businesses of all sizes.",
  keywords: [
    "e-signature demo",
    "Space Sign demo",
    "electronic signature software",
    "document signing demo",
    "e-signature solutions",
  ],
  alternates: {
    canonical: "https://pmspace.ai/e-signature-demo/",
  },
  openGraph: {
    title: "Request a Demo | Space Sign E-Signature Solutions",
    description: "Schedule a Space Sign demo for secure e-signature and document automation.",
    type: "website",
    url: "https://pmspace.ai/e-signature-demo/",
  },
};

export default function DemoPage() {
  return (
      <ESignDemoRequestForm />
   
  );
}