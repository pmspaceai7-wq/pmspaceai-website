import { Metadata } from "next";
import IDPPage from "./IDPPage";
import HowToSchema, { idpHowToSteps } from "@/components/HowToSchema";


export const metadata: Metadata = {
	title: "The Ultimate Guide to Intelligent Document Processing | Space AI",
	description:
		"Learn how to automate construction document processing with AI. Step-by-step guide to IDP setup, data extraction, semantic search, and document chat for construction projects.",
	keywords: [
		"intelligent document processing",
		"construction document automation",
		"AI document processing",
		"construction IDP",
		"document extraction",
		"semantic search construction",
		"OCR construction documents",
	],
	alternates: {
		canonical: "https://pmspace.ai/guides/idp/",
	},
	openGraph: {
		title: "The Ultimate Guide to Intelligent Document Processing",
		description: "Automate data extraction, analysis, and validation from construction documents with AI.",
		type: "article",
		url: "https://pmspace.ai/guides/idp/",
	},
};

const guideData = {
	header: {
		title: "The Ultimate Guide to Intelligent Document Processing",
		description: "Intelligent Document Processing (IDP) is the module that turns vast amounts of unstructured project documentation—like contracts, emails, and blueprints—into structured, actionable data. It provides the foundation for powerful AI-driven insights and automation across your projects.",
		imageSrc: "/assets/images/files.webp",
	},
	purpose: {
		intro: "IDP is crucial for eliminating data bottlenecks, ensuring data integrity, and leveraging all your project information for smarter decision-making.",
		before: {
			heading: "Before IDP",
			text: "Documents are static and data extraction is manual and error-prone. Document version control is inconsistent, leading to data silos, slower project delivery, and missed opportunities for insight.",
		},
		after: {
			heading: "After IDP",
			text: "Documents become dynamic data sources. Extraction is automated and accurate. You gain intelligent revisioning, semantic search, and document chat capabilities for fast, proactive, data-driven decisions.",
		},
	},
	keyFeatures: [
		{ name: "Semantic Document Search 🔎", icon: "Search", text: "Allows users to ask questions and receive AI-generated answers based on the centralized document content, moving beyond keyword matching to understanding context." },
		{ name: "Intelligent Data Extraction ✨", icon: "BrainCircuit", text: "The platform uses AI to automatically extract key data points from unstructured documents, regardless of format, significantly reducing manual data entry." },
		{ name: "Smart Meta Tags & Indexing 🏷️", icon: "Tags", text: "Automatically tags and indexes documents based on content and context, making data instantly discoverable and usable across other platform modules." },
		{ name: "Intelligent Revisioning & Comparison 📝", icon: "FileDiff", text: "Compares document versions to flag changes and discrepancies, ensuring teams always work with the most current information and minimizing risk." },
		{ name: "Automated Data Validation ✅", icon: "CheckCheck", text: "The system uses AI to validate extracted data against other structured data sources in the Common Data Platform, ensuring high accuracy and compliance." },
		{ name: "Document Chat Capability 💬", icon: "MessageCircle", text: "Enables natural language interaction with documents, letting users quickly query content and retrieve specific information without reading large files." },
	],
	benefits: [
		"Enhanced Data Discoverability: Find information instantly across thousands of documents using natural language queries.",
		"Improved Data Quality: Automated extraction and validation ensure high-quality, reliable data feeding into your projects.",
		"Accelerated Project Cycles: Reduce the time spent on manual document processing, speeding up approvals and project delivery.",
		"Reduced Risk & Errors: Intelligent revisioning and compliance checks minimize human errors and contractual risks.",
		"Smarter Operations: Transform documents into dynamic assets that feed the entire AI ecosystem for predictive insights.",
	],
	whoCanUse: {
		intro: "Intelligent Document Processing is invaluable across any industry that handles large volumes of complex, unstructured documentation.",
		industries: [
			"Government: Processing large volumes of public records, permits, and legal documents.",
			"Real Estate: Analyzing contracts, deeds, zoning regulations, and financial statements.",
			"Education: Extracting data from research papers, student records, and complex applications.",
			"Health Care: Managing patient histories, insurance claims, and regulatory compliance documents.",
			"Transportation: Processing shipping manifests, maintenance logs, and regulatory reports.",
			"Infrastructure: Analyzing blueprints, project specifications, and compliance reports.",
			"Defense: Securely processing operational manuals, procurement contracts, and sensitive reports.",
			"Oil & Gas: Extracting data from geological surveys, safety reports, and regulatory filings.",
			"Hospitality: Managing complex vendor contracts, event planning documents, and regulatory checklists.",
		],
	},
	inSpaceAI: {
		intro: "IDP acts as the primary gateway for unstructured data into the Space AI ecosystem, specifically by feeding the Common Data Platform (CDM) with clean, categorized information.",
		features: [
			"Feeds the Common Data Platform (CDM) with structured data extracted from documents.",
			"Enables Semantic Search functionality within the File Management module.",
			"Provides document comparison/revisioning data for change management workflows.",
			"Powers AI Workflow Orchestration by validating and triggering actions based on document content.",
		],
	},
	pptContent: {
		pages: [
			{
				id: "what-is-idp",
				title: "1) What is Intelligent Document Processing?",
				description: "IDP is an AI-driven system that classifies, extracts, and validates data from unstructured and semi-structured documents, transforming them into searchable, actionable, structured data.",
				imageSrc: "/assets/images/files.webp", // KEEP IMAGE
				subheadings: [
					{ title: "Classification & Intake", bullets: ["Automatically identifies document type (contract, RFI, change order) and source.", "Seamlessly ingests documents from email, folders, and third-party systems."] },
					{ title: "AI-Powered Extraction", bullets: ["Uses NLP, OCR, and Computer Vision to extract data, including tables and handwritten text.", "Extracts key metadata (dates, parties, amounts) to turn documents into smart data."]},
				],
				keyTransformation: "IDP transforms static documents into dynamic, usable datasets, eliminating manual data entry and speeding up information flow.",
			},
			{
				id: "semantic-search-and-chat",
				title: "2) Semantic Search & Document Chat",
				description: "Move beyond simple keyword searching. Our AI understands the context and meaning of your queries, providing precise answers drawn directly from your documentation.",
				imageSrc: "/assets/images/clinicmanagementfiles.png", // KEEP IMAGE
				subheadings: [
					{ title: "Semantic Document Search", bullets: ["Understand the meaning and intent of a query, not just keywords.", "Retrieves relevant passages and documents based on contextual understanding."] },
					{ title: "Document Chat", bullets: ["Ask natural language questions about your documents.", "Receive instant, concise answers and references to source locations."] },
				],
				chatExamples: [
					"What is the penalty for late delivery as per the 'Main Subcontract'?",
					"List all safety non-compliance issues reported in the last quarter.",
					"Summarize the scope change in RFI 007 and how it impacts the project schedule.",
				],
			},
			{
				id: "revisioning-and-validation",
				title: "3) Intelligent Revisioning and Validation",
				description: "Ensure data integrity and compliance across all document versions and fields with AI-driven comparison and validation.",
				imageSrc: undefined, // REMOVED IMAGE
				sections: [
					{
						title: "Intelligent Revisioning",
						bullets: [
							"Compare any two versions of a document to highlight changes (even between different file types like PDF and Word).",
							"Automatically identifies critical changes to commercial terms, technical specifications, and legal clauses.",
						],
					},
					{
						title: "Automated Data Validation",
						bullets: [
							"Validates extracted data against structured data in the Common Data Platform (CDM).",
							"Flags anomalies and discrepancies requiring human review for corrections.",
						],
					},
				],
			},
			{
				id: "benefits-metrics",
				title: "4) Unlocking Business Value",
				description: "IDP delivers tangible benefits by reducing manual effort and providing instant access to information.",
				imageSrc: undefined, // REMOVED IMAGE
				metrics: [
					{ value: "Shorter Cycle Time", label: "Accelerated project delivery by automating approvals." },
					{ value: "Fewer Errors", label: "Improved data accuracy and consistency." },
					{ value: "Faster Discovery", label: "Instantaneous information retrieval saves hours." },
				],
				process: [
					"Document Ingestion: Documents are automatically received and classified.",
					"AI Extraction: Data fields, tables, and clauses are intelligently extracted.",
					"Validation: Extracted data is cross-checked against project data for anomalies.",
					"Enrichment: Data is cleaned, standardized, and tagged with metadata.",
					"Action: Structured data is pushed to the Common Data Platform and workflows are triggered.",
				],
			},
		],
	},
	cta: {
		heading: "Ready to turn your documents into dynamic data assets?",
		description: "Contact our specialists to learn how Intelligent Document Processing can eliminate manual effort and unlock immediate, actionable insights for your projects.",
		linkText: "Schedule Your IDP Assessment",
		linkHref: "/construction-software-demo",
	},
};

export default function Page() {
	return (
		<>
			{/* HowTo Schema for Rich Snippets in Search Results */}
			<HowToSchema
				name="How to Set Up Intelligent Document Processing for Construction"
				description="Step-by-step guide to implementing AI-powered document processing for construction projects. Learn to automate document intake, extraction, validation, and semantic search."
				totalTime="PT45M"
				image="https://pmspace.ai/assets/images/idp-guide.png"
				tool={[
					"Space AI Platform",
					"Document Scanner or Digital Camera",
					"Cloud Storage Integration",
				]}
				supply={[
					"Construction Documents (Contracts, RFIs, Submittals)",
					"Email Access for Integration",
					"Project Data Structure",
				]}
				steps={idpHowToSteps}
			/>
			<IDPPage guideData={guideData} />
		</>
	);
}
