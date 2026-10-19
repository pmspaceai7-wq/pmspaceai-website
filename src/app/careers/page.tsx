import { Metadata } from "next";
import CareersPage from "./CareersPage";


export const metadata: Metadata = {
  title: "Careers at Space AI | Remote Jobs in AI & Construction Tech",
  description:
    "Join Space AI and shape the future of construction with AI. Explore remote opportunities in cutting-edge technology and innovative digital solutions.",
  keywords: [
    "space ai careers",
    "construction tech jobs",
    "ai software developer jobs",
    "remote construction technology jobs",
    "construction software careers opportunities",
  ],
  alternates: {
    canonical: "https://pmspace.ai/careers/",
  },
  openGraph: {
    title: "Careers at Space AI | Join Our Team",
    description: "Build the future of construction technology. Remote opportunities in AI and software development.",
    url: "https://pmspace.ai/careers/",
    type: "website",
  },
};

export default function Page() {
  return <CareersPage/>;
}
