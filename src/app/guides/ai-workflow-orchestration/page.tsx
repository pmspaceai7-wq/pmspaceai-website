import { Metadata } from "next";
import WorkflowOrchestrationPage from "./WorkflowOrchestrationPage";


export const metadata: Metadata = {
	title: "AI Workflow Automation Guide | Construction Workflows | Space AI",
	description:
		"Complete guide to AI workflow automation for construction. Automate repetitive tasks, gain intelligent insights, and create connected, predictive workflows.",
	keywords: [
		"ai workflow automation construction",
		"construction workflow automation",
		"construction task automation",
		"ai construction workflows",
		"automated project workflows",
	],
	alternates: {
		canonical: "https://pmspace.ai/guides/ai-workflow-orchestration/",
	},
	openGraph: {
		title: "AI Workflow Automation Guide | Space AI",
		description: "Automate construction workflows with AI-powered orchestration.",
		url: "https://pmspace.ai/guides/ai-workflow-orchestration/",
		type: "article",
	},
};

const guideData = {
	header: {
		title: "The Ultimate Guide to AI Workflow Orchestration",
		description: "Our AI Workflow Orchestration module is a powerful, AI-driven workflow engine designed to automate repetitive tasks and provide intelligent insights. It acts as a conductor, coordinating and managing the underlying AI models, data pipelines, and systems to work together seamlessly.",
		imageSrc: "/assets/images/aiworkflows.png",
	},
	purpose: {
		intro: "This module is essential for organizations that want to transform their business processes from being disjointed and manual to being connected, automated, and predictive.",
		before: {
			heading: "Before AI Workflow Orchestration",
			text: "Processes are manual and disjointed, leading to inefficiencies and a reactive approach to business. Automation is limited to simple 'if-then' tasks, and different systems and data sources are disconnected, leading to a lack of cohesion.",
		},
		after: {
			heading: "After AI Workflow Orchestration",
			text: "Workflows become connected and automated, with intelligent decision-making that allows for a predictive approach. The platform manages the entire sequence of tasks, ensuring data flows correctly from one step to the next and handling dependencies and errors.",
		},
	},
	keyFeatures: [
		{ name: "Seamless End-to-End Integrated AI Automation 🤖", icon: "Bot", text: "This module coordinates multiple AI models and systems to automate entire workflows. It integrates with existing applications and data sources, eliminating silos and connecting the entire ecosystem." },
		{ name: "Adaptive & Intelligent Decision-Making 🧠", icon: "BrainCircuit", text: "The platform enables AI components to analyze data and make decisions or recommendations, reducing the need for constant human oversight. The system can make intelligent and timely decisions based on real-time data insights." },
		{ name: "Scalable and Flexible Architecture 📈", icon: "Scaling", text: "The architecture is designed to handle increasing workloads and changing business needs without requiring a complete rebuild. You can add new capabilities with minimal disruption." },
		{ name: "Automated Task Execution based on Data & Models ▶️", icon: "PlayCircle", text: "The platform automates repetitive tasks, freeing employees from tedious, manual work. It orchestrates the execution of AI models at each step of the workflow, ensuring data is fed correctly and outputs are processed accurately." },
		{ name: "Error Reduction and Risk Mitigation 🛡️", icon: "ShieldCheck", text: "By automating processes and managing the entire system, the platform reduces the risk of human error and provides a system-wide approach to error handling." },
		{ name: "Improved Collaboration 👥", icon: "Users", text: "The platform gives all team members, from data scientists to compliance officers, access to the same logs and data, fostering a more coordinated approach to projects." },
		{ name: "Better Business Outcomes 📊", icon: "BarChart3", text: "By automating complex processes and generating actionable insights, AI Workflow Orchestration helps businesses achieve greater efficiency, faster service delivery, and better decision-making." },
	],
	benefits: [
		"Smarter Process Automation: Automates complex sequences of activities across different systems and departments.",
		"Faster Creation and Integration: Accelerates the entire AI lifecycle by automating tasks and providing a centralized platform for managing components, which speeds up the time it takes to get AI solutions to market.",
		"Reduced Human Error: By automating manual, repetitive tasks, the platform reduces errors and ensures higher quality and consistency.",
		"Improved Scalability and Flexibility: Allows organizations to easily scale their AI initiatives, adapting quickly to increasing workloads or changing demands. You can seamlessly plug new AI capabilities into your existing workflows with minimal disruption.",
		"Enhanced Decision-Making: The platform transforms raw data into actionable intelligence, enabling predictive and prescriptive insights that drive smarter, faster decisions.",
		"Better Resource Allocation: With fewer hours spent on manual work, teams can focus on high-value initiatives like strategy and innovation. The orchestrator also dynamically allocates computing power in real-time, ensuring efficient resource utilization and peak performance.",
		"More Reliable Governance and Compliance: Centralized control over AI workflows makes it easier to ensure all systems adhere to regulatory requirements, ethical guidelines, and company policies.",
	],
	howUsed: {
		intro: "Within the Space AI core, AI Workflow Orchestration acts as the 'conductor' for all AI-driven processes.",
		details: "It manages the sequence and interaction of automated tasks across different modules, such as forms, documents, and emails. For example, a workflow might start with a form submission, trigger an AI model to analyze the data, and then send a customized email response based on the analysis. The platform ensures the data flows seamlessly between these steps, automates the handoffs, and handles any errors that may occur, creating a cohesive, end-to-end business process.",
	},
	whoCanUse: {
		intro: "The AI Workflow Orchestration module is a valuable tool for any organization or industry that wants to automate complex, multi-step business processes.",
		industries: [
			"Government: Automate the processing of permits, applications, and official document workflows.",
			"Real Estate: Create standardized workflows for property listings, client onboarding, and contract management.",
			"Education: Design and manage processes for student enrollment, academic approvals, and administrative tasks.",
			"Health Care: Standardize patient intake processes, lab result approvals, and administrative workflows.",
			"Transportation: Automate workflows for logistics management, fleet maintenance, and delivery tracking.",
			"Infrastructure: Define and track multi-step processes for project planning, inspections, and quality control.",
			"Defense: Standardize workflows for procurement, security clearances, and operational approvals.",
			"Oil & Gas: Create and manage workflows for safety inspections, maintenance schedules, and regulatory compliance.",
			"Hospitality: Automate processes for event planning, guest services, and inventory management.",
		],
	},
	pptContent: {
		pages: [
			{
				id: "what-is-orchestration",
				title: "1) What is AI Workflow Orchestration",
				description: "AI Workflow Orchestration is an intelligent automation engine that connects, coordinates, and optimizes all your construction workflows using artificial intelligence. It transforms disjointed, manual, and reactive processes into connected, automated, and predictive operations.",
				bullets: [
					{ icon: "X", text: "Eliminate Manual Tasks: Automate repetitive administrative and coordination tasks." },
					{ icon: "Check", text: "Enable Smart Decisions: Use AI to make intelligent workflow decisions automatically." },
					{ icon: "GitBranch", text: "Connect Systems: Orchestrate workflows across multiple platforms and teams." },
				],
				imageSrc: "/assets/images/aiworkflows.png", // KEEP IMAGE
				keyPoint: "The system includes a workflow engine, AI decision layer, integration hub, monitoring dashboard, and configurable rule engine working together seamlessly.",
			},
			{
				id: "getting-started",
				title: "2) Getting Started Guide",
				description: "A structured approach to deploying workflow orchestration across your organization with proven methodology and expert support.",
				imageSrc: "/assets/images/aiagent.png", // KEEP IMAGE
				sections: [
					{
						title: "Workflow Assessment and Planning",
						bullets: [
							"Map existing manual processes, identify repetitive tasks suitable for automation, and document current workflow pain points and inefficiencies.",
							"Process documentation and time analysis",
							"Error tracking and stakeholder input",
							"Priority matrix development",
						],
					},
					{
						title: "Automation Opportunity Identification",
						bullets: [
							"Target high-impact automation areas including project kickoff workflows, progress reporting, quality assurance, and safety compliance monitoring.",
							"Project management automation",
							"Document routing and approvals",
							"Resource allocation optimization",
						],
					},
					{
						title: "Initial Workflow Configuration",
						bullets: [
							"Set up workflow design environment, configure system integrations, establish role-based permissions, and customize templates to match your processes.",
							"System connections and user setup",
							"Template selection and customization",
							"Testing environment configuration",
						],
					},
				],
			},
			{
				id: "architecture-overview",
				title: "3) Workflow architecture overview",
				description: "Our intelligent, scalable workflow framework consists of four core architectural components working together to deliver seamless automation.",
				imageSrc: undefined, // REMOVED IMAGE
				sections: [
					{ name: "Workflow Engine Core", bullets: ["Central orchestrator managing execution, state tracking, event processing, task queues, and intelligent error recovery mechanisms."] },
					{ name: "AI Intelligence Layer", bullets: ["Decision trees, predictive triggers, adaptive learning, natural language processing, and pattern recognition capabilities."] },
					{ name: "Integration Framework", bullets: ["API gateway, message queues, data transformation, authentication layer, and real-time integration health monitoring."] },
					{ name: "Execution Environment", bullets: ["Container orchestration, load balancing, fault tolerance, scaling engine, and automatic performance optimization."] },
				],
			},
			{
				id: "intelligent-decision-making",
				title: "4) Intelligent Decision making",
				description: "Our adaptive AI-powered decision engine provides intelligent, timely, and predictive decision-making for your workflows.",
				imageSrc: undefined, // REMOVED IMAGE
				sections: [
					{
						name: "Adaptive AI-Powered Decision Engine",
						bullets: [
							"Routing Decisions: Intelligently assign tasks, route approvals, escalate issues, direct communications, and optimize resource allocation automatically.",
							"Timing Decisions: Determine optimal timing for task execution, meeting scheduling, maintenance, inspections, and notifications for maximum impact.",
							"Priority Decisions: Intelligently prioritize tasks, allocate resources, assign issue priorities, and balance competing project priorities automatically.",
						]
					},
					{
						name: "Adaptive Learning System",
						bullets: [
							"The system continuously improves through performance analysis, pattern recognition, decision optimization, feedback integration, and contextual learning based on project history."
						]
					}
				],
				keyPoint: "Decision Transparency: Complete audit trail, reasoning display, confidence scores, override capability, and learning feedback ensure explainable AI decisions.",
			},
			{
				id: "integration-framework",
				title: "5) Integration Framework",
				description: "Our integration framework enables seamless end-to-end integrated AI automation by connecting with a wide range of platforms and systems.",
				imageSrc: undefined, // REMOVED IMAGE
				sections: [
					{
						name: "Integration with Major Platforms",
						bullets: [
							"Design and BIM Platforms: for seamless design workflow automation.",
							"Project Management Systems: for comprehensive project workflow orchestration.",
							"ERP Systems: for enterprise-wide workflow automation.",
							"Financial Systems: for automated financial workflow processing.",
						],
					},
					{
						name: "Integration Patterns",
						bullets: [
							"Real-Time APIs: Live data exchange for immediate workflow triggers",
							"Event-Driven: Respond to events and triggers from integrated systems",
							"Batch Processing: Scheduled data synchronization and processing",
							"Webhook Integration: Instant notifications and data updates",
						],
					},
					{
						name: "Data Flow Management",
						bullets: [
							"Data Mapping: Automatic mapping between different system formats",
							"Transformation Rules: Convert data formats automatically",
							"Validation Logic: Ensure data quality and integrity",
							"Audit Trail: Complete tracking of data flow",
						],
					},
				],
			},
		],
	},
	cta: {
		heading: "Transform Your Construction Workflows Today",
		description: "Ready to Get Started? Transform your construction workflows with intelligent automation that orchestrates complex processes, eliminates manual tasks, and enables predictive operations across your entire project ecosystem.",
		linkText: "Schedule Assessment",
		linkHref: "/construction-software-demo",
	},
	extraFeatures: {
		intro: "Advanced capabilities that set our AI Workflow Orchestration apart from basic automation tools.",
		features: [
			{ name: "Multi-Agent Intelligence", icon: "Users", text: "10 specialized AI agents working in parallel, each focusing on specific domain expertise. Agents share results for comprehensive analysis. Benefit: Multiple perspectives, one decision." },
			{ name: "Vision-Language AI", icon: "Eye", text: "Processes visual documents (PDFs, drawings, images). AI 'sees' and understands architectural content with automatic document-to-image conversion. Benefit: AI that reads drawings like a human expert." },
			{ name: "Smart Quality Gates", icon: "ShieldCheck", text: "2 early-exit checkpoints reject bad inputs automatically. Saves compute resources by filtering early. Automatic rejection for unreadable/incomplete content. Benefit: Stop wasting time on bad submissions." },
			{ name: "Automated Conflict Resolution", icon: "GitMerge", text: "Supervisor agent detects contradictions between agents. Cross-discipline validation (architectural vs. structural). Intelligent arbitration when agents disagree. Benefit: AI that resolves its own disagreements." },
			{ name: "Confidence Scoring", icon: "BarChart3", text: "Each AI decision includes a confidence score (0.0-1.0). Know how certain the system is about its decision. Flag low-confidence results for human review. Benefit: Transparent AI with uncertainty reporting." },
			{ name: "Structured JSON Output", icon: "FileText", text: "Machine-readable results for integration. Human-readable formatted reports for printing. Complete audit trail with scoring explanations. Benefit: Data you can act on, reports you can share." },
			{ name: "Self-Hosted AI Deployment", icon: "Server", text: "Run AI models on your own infrastructure. Sensitive data never leaves your environment. Ollama-compatible endpoint. Benefit: Full control over your AI and data." },
			{ name: "Async Webhook Chaining", icon: "Workflow", text: "Non-blocking workflow execution. Immediate acknowledgements while processing continues. Scalable for high-volume operations. Benefit: Process 100s of documents in parallel." },
			{ name: "Extensible Agent Architecture", icon: "Settings", text: "Add new review agents as needed. Customizable scoring rubrics. Modify decision thresholds. Benefit: Grow your AI as your needs evolve." },
			{ name: "Real-Time Decision Making", icon: "PlayCircle", text: "Instant approvals/rejections based on rules. HTTP status codes for system integration. Callback URLs for automated workflows. Benefit: Decisions in minutes, not days." },
		],
	},
	agentStats: {
		title: "AI Submittal Review Agent - System Statistics",
		stats: [
			{ label: "Total Flows", value: "4", description: "Chained workflows" },
			{ label: "Review Agents", value: "12", description: "10 + 1 Classifier + 1 Supervisor" },
			{ label: "Quality Gates", value: "2", description: "Early-exit checkpoints" },
			{ label: "Scoring System", value: "100", description: "Point scale (10 agents x 10 points)" },
			{ label: "Processing Time", value: "Minutes", description: "Hours → Minutes" },
			{ label: "AI Model", value: "Vision-Language", description: "Self-hosted via Ollama" },
		],
	},
	specializedAgents: {
		title: "10 Specialized Review Agents",
		agents: [
			{ agent: "01", focus: "Document Control", checks: "Title blocks, drawing index, revisions, sign-offs" },
			{ agent: "02", focus: "Drawing Quality", checks: "Legibility, line weights, layout, scaling" },
			{ agent: "03", focus: "Architectural Plans", checks: "Floor plans, room layouts, circulation" },
			{ agent: "04", focus: "Dimensions & Levels", checks: "Overall dimensions, datums, elevation call-outs" },
			{ agent: "05", focus: "Door & Window Review", checks: "Schedules, tags, hardware call-outs" },
			{ agent: "06", focus: "Elevations, Sections & Facade", checks: "Exterior elevations, building sections" },
			{ agent: "07", focus: "Architectural Details", checks: "Assembly details, waterproofing, flashing" },
			{ agent: "08", focus: "Interdisciplinary Coordination", checks: "Cross-discipline alignment (arch/structural/MEP)" },
			{ agent: "09", focus: "Code & Regulatory Compliance", checks: "Zoning, building code, regulatory checkpoints" },
			{ agent: "10", focus: "Constructability & Site Readiness", checks: "Buildability, sequencing, site readiness" },
		],
	},
	scoringBands: {
		title: "Scoring Bands & Decision Logic",
		bands: [
			{ band: "EXCELLENT", threshold: "≥ 90%", decision: "Approved", httpStatus: "200" },
			{ band: "GOOD", threshold: "≥ 75%", decision: "Approved with Comments", httpStatus: "200" },
			{ band: "ADEQUATE", threshold: "≥ 60%", decision: "Revise and Resubmit", httpStatus: "422" },
			{ band: "NEEDS WORK", threshold: "≥ 40%", decision: "Revise and Resubmit", httpStatus: "422" },
			{ band: "POOR", threshold: "< 40%", decision: "Rejected", httpStatus: "422" },
		],
	},
	featureComparison: {
		title: "Feature Comparison",
		comparison: [
			{ feature: "Review Time", traditional: "Hours/Days", ai: "Minutes" },
			{ feature: "Consistency", traditional: "Manual variability", ai: "Standardized scoring" },
			{ feature: "Coverage", traditional: "Limited checks", ai: "10+ disciplines" },
			{ feature: "Conflict Resolution", traditional: "Manual discussion", ai: "Automated arbitration" },
			{ feature: "Reporting", traditional: "Manual notes", ai: "Structured JSON + formatted reports" },
			{ feature: "Early Rejection", traditional: "Full review required", ai: "Filter bad inputs early" },
			{ feature: "Scalability", traditional: "Limited by staff", ai: "Unlimited parallel processing" },
			{ feature: "Data Privacy", traditional: "External tools", ai: "Self-hosted option" },
		],
	},
};

export default function Page() {
	return <WorkflowOrchestrationPage guideData={guideData} />;
}
