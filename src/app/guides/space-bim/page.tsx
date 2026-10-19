import { Metadata } from "next";
import SpaceBimPage from "./SpaceBimPage";


export const metadata: Metadata = {
	title: "BIM Integration Guide | Construction BIM Software | Space AI",
	description:
		"Complete guide to BIM integration for construction. Data-centric, collaborative BIM platform enabling real-time interoperability and automated workflows.",
	keywords: [
		"bim integration construction",
		"construction bim software",
		"bim collaboration platform",
		"bim data management",
		"aec bim integration",
	],
	alternates: {
		canonical: "https://pmspace.ai/guides/space-bim/",
	},
	openGraph: {
		title: "BIM Integration Guide | Space AI",
		description: "Data-centric BIM platform for modern construction teams.",
		url: "https://pmspace.ai/guides/space-bim/",
		type: "article",
	},
};

const guideData = {
	header: {
		title: "The Ultimate Guide to Space BIM",
		description: "Our Space BIM module is a data-centric, collaborative platform for the AEC (Architecture, Engineering, and Construction) industry. It enables real-time interoperability, version control, and modern, automated workflows.",
	},
	purpose: {
		intro: "Space BIM is essential for any modern AEC team looking to move beyond traditional, file-based workflows and into a truly collaborative, data-driven environment.",
		before: {
			heading: "Before Space BIM",
			text: "The industry is often locked into closed ecosystems with limited interoperability. Workflows are file-based and siloed, with limited versioning and heavy file transfers. Collaboration is restricted to cloud sharing, not live streaming.",
		},
		after: {
			heading: "After Space BIM",
			text: "There is no vendor lock-in, and the platform connects with many AEC tools. It is structured and API-first, treating geometry as data. The system offers real-time streaming and sharing, with built-in history and diffs.",
		},
	},
	keyFeatures: {
		intro: "Our platform is built with a suite of features to ensure your BIM processes are collaborative, efficient, and future-ready.",
		features: [
			{ name: "Data-Centric Approach 🧠", icon: "BrainCircuit", text: "The platform treats geometry as data, enabling structured and API-first workflows." },
			{ name: "Interoperability 🌐", icon: "GitFork", text: "It connects various AEC tools, eliminating the limitations of closed ecosystems." },
			{ name: "Real-Time Collaboration 👥", icon: "Users", text: "Space BIM allows for live data streaming and sharing, enabling teams to collaborate in real time." },
			{ name: "Version Control ⚙️", icon: "GitMerge", text: "The system has built-in history and diffs, providing robust version control." },
			{ name: "Cloud-Native App", icon: "Cloud", text: "As a cloud-native solution, it offers easy digital archiving and a modern, extensible platform." },
			{ name: "Automation Friendly 🤖", icon: "Code", text: "The platform is highly extensible with APIs and SDKs, making it ready for automation and parametric workflows." },
			{ name: "Lightweight Data Sharing", icon: "Share2", text: "It streams only the changes, not the entire heavy file, enabling efficient, lightweight workflows." },
			{ name: "Integration with Modern Technology 🔌", icon: "Cpu", text: "The platform is ready for AI, digital twins, and dashboards, supporting cross-disciplinary collaboration." },
		],
	},
	benefits: [
		"Eliminates Vendor Lock-in: The platform's open approach allows for seamless interoperability across various AEC tools, freeing you from a single vendor's ecosystem.",
		"Real-Time Data Streaming: Efficient, lightweight workflows are enabled by real-time data streaming and a data-centric approach.",
		"Highly Extensible: With APIs and SDKs, the platform is automation-ready and can be customized to meet specific project needs.",
	],
	howUsed: {
		intro: "Within Space AI, the Space BIM module serves as the core foundation for a truly collaborative and data-driven project environment.",
		details: "By treating BIM geometry as data, it enables seamless interoperability between different software tools. This eliminates the need for heavy file transfers and ensures all project members are working from the most up-to-date information, which is critical for complex AEC projects. The platform’s extensibility with APIs also makes it a perfect fit for integrating with other Space AI modules, such as those for AI-powered analytics and automated workflows.",
	},
	whoCanUse: {
		intro: "Space BIM is a valuable tool for any professional or team in the AEC industry that wants to modernize their workflows.",
		industries: [
			"Government: Manage blueprints and project plans for large-scale public infrastructure projects.",
			"Real Estate: Collaborate on architectural designs and manage project data for property development.",
			"Education: Streamline the design and construction of new educational facilities.",
			"Health Care: Manage the complex BIM data for hospital and clinic construction.",
			"Transportation: Collaborate on and manage BIM models for roads, bridges, and rail systems.",
			"Infrastructure: Use the platform to manage large-scale construction and infrastructure projects.",
			"Defense: Securely manage and collaborate on BIM models for military installations.",
			"Oil & Gas: Handle BIM data for the design and maintenance of refineries and pipelines.",
			"Hospitality: Manage BIM models for hotel and resort design and construction.",
		],
	},
	pptContent: {
		pages: [
			{
				id: "what-is-space-bim",
				title: "1) What is SPACE BIM",
				description: "Space BIM is a revolutionary data-centric, collaborative platform designed specifically for Architecture, Engineering, and Construction (AEC) professionals. It breaks away from traditional BIM limitations by providing real-time interoperability, comprehensive version control, and modern automated workflows that transform how teams collaborate on building projects. The platform operates on a data-centric approach rather than file-based workflows. This fundamental shift means that building information is treated as structured data that can be streamed, shared, and manipulated in real-time across different software platforms and teams.",
				imageSrc: "/assets/images/spacebim.webp", // KEEP IMAGE 1
			},
			{
				id: "core-features",
				title: "2) Core features that transform you workflow",
				description: "Space BIM's core features are designed to transform your workflow.",
				sections: [
					{ name: "Data-Centric Architecture", text: "Structured data instead of monolithic files enables faster processing, easier manipulation, and seamless integration with modern technologies." },
					{ name: "Universal Interoperability", text: "API-first approach ensures seamless data flow between AEC applications." },
					{ name: "Real-Time Collaboration", text: "Live streaming of changes across all connected users and applications with simultaneous work capabilities." },
				],
			},
			{
				id: "advanced-capabilities",
				title: "3) Advanced capability",
				description: "Space BIM offers advanced features that enable robust version control and cloud-native workflows.",
				imageSrc: undefined, // REMOVED IMAGE
				sections: [
					{ name: "Advanced Version Control", text: "Built-in history tracking, visual diffs, rollback capability, and branch management for different design alternatives working simultaneously." },
					{ name: "Cloud-Native Architecture", text: "Enterprise-grade infrastructure ensures accessibility from anywhere, scalability with your team, and reliable data availability." },
					{ name: "Extensibility & Customization", text: "APIs, SDKs, parametric workflows, and plugin architecture enable custom integrations and automated design processes." },
					{ name: "Lightweight Data Sharing", text: "Stream only changes with bandwidth efficiency and near-instantaneous updates regardless of project size." },
				],
			},
			{
				id: "cross-disciplinary-support",
				title: "4) Cross-disciplinary support",
				description: "Space BIM enables all disciplines to work within the same data environment, ensuring consistency and eliminating communication gaps between teams. This transformation is a move from traditional BIM challenges to a modern solution.",
				imageSrc: undefined, // REMOVED IMAGE (Original was /public/assets/images/space-bim-transformation.jpg, moved to page 2)
				sections: [
					{ name: "Architecture", text: "Design development, modeling, and comprehensive documentation within the unified data environment." },
					{ name: "Engineering", text: "Structural, MEP, and other engineering disciplines integrated seamlessly with architectural models." },
					{ name: "Construction", text: "Coordination, scheduling, and field management with real-time project data access." },
				],
				beforeAfter: {
					before: [
						"Vendor Lock-in",
						"Limited Interoperability",
						"File-Based Workflows",
						"Static Collaboration",
						"High Costs",
					],
					after: [
						"Freedom of Choice",
						"Universal Connectivity",
						"Data Streams",
						"Live Collaboration",
						"Cost-Effective",
						"AI Chat Features",
					]
				},
			},
			{
				id: "getting-started",
				title: "5) Getting Started with Space Bim",
				description: "A structured approach to transforming your AEC workflow.",
				imageSrc: undefined, // REMOVED IMAGE
				sections: [
					{ name: "Assessment", text: "Evaluate current workflow and identify pain points. Define goals for Space BIM implementation. Assess team readiness for new technology." },
					{ name: "Planning", text: "Develop migration strategy from existing systems. Identify training requirements for your team. Determine integration points for tools and systems." },
					{ name: "Implementation", text: "Start with a pilot project to test the platform. Provide comprehensive team training. Gradual rollout based on pilot success." },
					{ name: "Optimization", text: "Refine workflows based on real-world usage. Build custom integrations and automations. Scale up to larger projects and more team members." },
				],
			},
			{
				id: "advanced-features-best-practices",
				title: "6) Advance features and best practices",
				description: "Space BIM offers a wide range of advanced features that enable powerful, automated workflows.",
				sections: [
					{ name: "API Integration", text: "Build custom applications for specialized workflows. Create data analytics and reporting tools. Connect with project management and scheduling systems." },
					{ name: "Automation Workflows", text: "Automatically validate designs against standards. Generate automated documentation and reports. Set up quality assurance processes." },
					{ name: "Digital Twin Implementation", text: "Connect building systems for real-time monitoring. Track building performance analytics over time. Use predictive maintenance with data insights." },
				],
				imageSrc: undefined, // REMOVED IMAGE
				bestPractice: "Best Practice Tip: Establish clear data structure, naming conventions, and access controls from the beginning. Implement communication protocols and change management processes for optimal collaboration.",
			},
		],
	},
	cta: {
		linkHref: "/construction-software-demo",
		heading: "Ready to transform your AEC workflow?",
		description: "Start your Space BIM journey today and experience the future of Building Information Modeling.",
		linkText: "Schedule a Demo",
	},
};

export default function Page() {
	return <SpaceBimPage guideData={guideData} />;
}
