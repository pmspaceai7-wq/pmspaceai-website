import { Metadata } from "next";
import PrivacyPolicyPage from "./PrivacyPolicyPage";



export const metadata: Metadata = {
  title: "Privacy Policy | Space AI Construction Software",
  description:
    "Learn how Space AI protects your privacy and data. Our policy covers data collection, processing, and your rights under GDPR regulations.",
  keywords: [
    "space ai privacy policy",
    "construction software privacy",
    "data protection policy",
    "gdpr compliance",
  ],
  alternates: {
    canonical: "https://pmspace.ai/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Space AI",
    description: "How Space AI protects your privacy and data.",
    url: "https://pmspace.ai/privacy-policy/",
    type: "website",
  },
};



export default function Page() {
  return <PrivacyPolicyPage/>;
}
