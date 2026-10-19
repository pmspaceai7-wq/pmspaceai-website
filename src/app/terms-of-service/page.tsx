import { Metadata } from "next";
import TermsOfServicePage from "./TermsOfServicePage";


export const metadata: Metadata = {
  title: "Terms of Service | Space AI",
  description:
    "Review the Space AI Terms of Service to understand your rights, responsibilities, and service usage guidelines.",
  keywords: [
    "Space AI terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "legal terms",
  ],
  alternates: {
    canonical: "https://pmspace.ai/terms-of-service/",
  },
  openGraph: {
    title: "Terms of Service | Space AI",
    description: "Review the Space AI Terms of Service and user agreement.",
    type: "website",
    url: "https://pmspace.ai/terms-of-service/",
  },
};



export default function Page() {
  return <TermsOfServicePage/>;
}
