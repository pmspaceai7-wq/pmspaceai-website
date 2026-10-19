import { Metadata } from "next";
import EmailPage from "./EmailPage";


export const metadata: Metadata = {
	title: "Construction Email Integration Guide | Project Communications | Space AI",
	description:
		"Complete guide to email integration for construction. Centralize project communications, link emails to projects, and enhance collaboration with AI.",
	keywords: [
		"construction email integration",
		"project communication management",
		"construction email management",
		"project email tracking",
		"construction communication software",
	],
	alternates: {
		canonical: "https://pmspace.ai/guides/email-integration/",
	},
	openGraph: {
		title: "Email Integration Guide | Space AI",
		description: "Centralize construction project communications with email integration.",
		url: "https://pmspace.ai/guides/email-integration/",
		type: "article",
	},
};

const guideData = {
	header: {
		title: "The Ultimate Guide to E-Mail Integration",
		description: "Our E-Mail Integration module is designed to connect your inbox to your projects to keep project communications centralized and accessible to your entire team. It ensures that no important project detail gets lost in scattered email threads.",
		imageSrc: "/assets/images/email.jpg",
	},
	purpose: {
		intro: "This module is essential for any project team that wants to move beyond individual inboxes and create a unified communication hub.",
		before: {
			heading: "Before E-Mail Integration",
			text: "Project communications are lost in scattered email threads and lead to lost project communication.",
		},
		after: {
			heading: "After E-Mail Integration",
			text: "All project-related emails are consolidated into a centralized email hub, with AI-assisted replies to speed up communication.",
		},
	},
	keyFeatures: {
		intro: "Our platform is built with a suite of features to seamlessly integrate your email with your project workflows.",
		features: [
			{ name: "Sync Inbox ✉️", icon: "Mail", text: "Automatically sync your inbox to bring all project-related emails into the platform." },
			{ name: "Centralize Communication 🗣️", icon: "MessageCircle", text: "Consolidate all project communications into one accessible location for your entire team." },
			{ name: "Link to Projects 🔗", icon: "Link2", text: "Easily link specific email conversations to their corresponding projects, keeping all relevant information together." },
			{ name: "AI Reply Assistant 🤖", icon: "Bot", text: "The AI Reply Assistant helps you draft responses to emails, saving you time and ensuring clear, concise communication." },
		],
	},
	benefits: [
		"Better Collaboration: With all communications in one place, team members can collaborate more effectively and stay on the same page.",
		"Organized Communication: Say goodbye to lost email chains. All project-related emails are neatly organized and easy to find.",
		"Time Savings: The ability to quickly find information and use the AI Reply Assistant helps you save valuable time.",
	],
	howUsed: {
		intro: "Within Space AI, E-Mail Integration acts as the communication core for projects.",
		details: "It centralizes communications, preventing them from being scattered across individual email threads. This creates a unified and organized record of all correspondence, which can be easily linked to specific projects for better context. The AI Reply Assistant further enhances efficiency by providing AI-powered drafting support, ensuring team members can respond quickly and effectively.",
	},
	whoCanUse: {
		intro: "The E-Mail Integration module is a valuable tool for any team or industry that relies on email for project communication.",
		industries: [
			"Government: Centralize communication regarding public inquiries, official documents, and inter-departmental projects.",
			"Real Estate: Manage all client and property-related communications in one place for agents and administrative staff.",
			"Education: Consolidate correspondence with students, parents, and faculty into a shared project view.",
			"Health Care: Streamline communication with patients, insurance providers, and other healthcare professionals.",
			"Transportation: Centralize communications regarding logistics, shipping, and supply chain management.",
			"Infrastructure: Manage all project-related emails from contractors, suppliers, and stakeholders in a single hub.",
			"Defense: Securely handle sensitive communications and project correspondence.",
			"Oil & Gas: Consolidate emails related to geological surveys, equipment maintenance, and field operations.",
			"Hospitality: Streamline communications for event bookings, guest services, and vendor management.",
		],
	},
	cta: {
		heading: "Ready to streamline your communications?",
		description: "Connect your inbox to your projects and experience centralized, efficient collaboration.",
		linkText: "Schedule a Demo",
		linkHref: "/construction-software-demo",
	},
};

export default function Page() {
	return <EmailPage guideData={guideData} />;
}
