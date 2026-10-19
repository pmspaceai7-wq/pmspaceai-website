import { Metadata } from "next";
import CdpPage from "./CdpPage";


export const metadata: Metadata = {
  title: "Common Data Platform Guide | Construction Data Management | Space AI",
  description:
    "Complete guide to the Common Data Platform for construction. Unify project data, gain real-time insights, and enable predictive analytics across all projects.",
  keywords: [
    "common data platform construction",
    "construction data management",
    "unified construction data",
    "construction data integration",
    "project data platform",
  ],
  alternates: {
    canonical: "https://pmspace.ai/guides/common-data-platform/",
  },
  openGraph: {
    title: "Common Data Platform Guide | Space AI",
    description: "Unify construction data with the Common Data Platform.",
    url: "https://pmspace.ai/guides/common-data-platform/",
    type: "article",
  },
};

const guideData = {
  header: {
    title: "The Ultimate Guide to the Common Data Platform",
    description: "The Common Data Platform (CDM) is the foundational module of the Space AI core, designed to unify all your project data in a single, accessible location to maintain a single source of truth with built-in intelligence, real-time handling, and automated governance.",
    
  },
  purpose: {
    intro: "The CDM is essential for organizations that want to eliminate data silos and leverage all their data for smarter, more proactive decision-making.",
    before: {
      heading: "Before CDM",
      text: "Data handling is rigid, with reliance on batch mode processing and limited, siloed AI/ML capabilities. Manual, static processes dominate a monolithic and rigid architecture, resulting in slow, reactive decision-making.",
    },
    after: {
      heading: "After CDM",
      text: "The platform enables real-time continuous ingestion and provides native and foundational AI/ML. It delivers predictive, prescriptive & automated intelligence, allowing for fast, proactive decisions within a scalable, modular, and cloud-native architecture.",
    },
  },
  keyFeatures: {
    intro: "Our platform is built with a suite of AI-driven features to streamline your data management and unlock the full potential of your project data.",
    features: [
      { name: "Built-In AI/ML Intelligence 🧠", icon: "BrainCircuit", text: "The platform features native and foundational AI/ML capabilities, enabling predictive, prescriptive & automated intelligence for smarter decision-making." },
      { name: "Real-Time & Multi-Format Data Handling ⏱️", icon: "Clock", text: "It offers rich, modern, and automated handling of all data types (structured, unstructured, and semi-structured), supporting real-time continuous ingestion." },
      { name: "Automated Data Management 🤖", icon: "Bot", text: "The platform enables automated, self-improving, governance-centric operations, replacing manual and siloed efforts." },
      { name: "Stronger Governance & Compliance 🛡️", icon: "ShieldCheck", text: "Provides robust governance to ensure data quality, security, and compliance." },
      { name: "Scalability & Agility 🚀", icon: "Rocket", text: "Built on a scalable, modular, and cloud-native architecture for greater business agility." },
    ],
    detailedFeatures: [
      {
        name: "Intelligent Handling of Structured and Unstructured Data",
        subsections: [
          {
            title: "Unstructured Data (Files/Emails)",
            bullets: ["Features Intelligent Data Extraction, Smart Meta Tags, and Semantic Search to convert raw text into structured, actionable data for discovery and analysis.", "Includes Intelligent Revisioning and Smart Comparison of Versions for files."],
          },
          {
            title: "Structured Data (Forms)",
            bullets: ["Includes AI-Driven Data Validations to ensure accuracy at the source and AI Workflow Integration with Forms to link data collection directly to automated processes."],
          },
        ],
      },
      {
        name: "Document Chats 💬",
        bullets: ["Allows users to ask questions and receive AI-generated answers based on the centralized document content."],
      },
    ],
  },
  benefits: [
    "Enhanced Decision-Making: Provides unified, real-time access to all data types and delivers enhanced decision-making with predictive insights.",
    "Accelerated Innovation: Drives innovation, revenue growth, and a competitive edge by seamlessly integrating foundational AI/ML capabilities.",
    "Improved Operational Efficiency: Improves collaboration and a data-driven culture, leading to better operational efficiency through automation.",
    "Robust Data Governance: Ensures robust data governance and compliance across the entire enterprise.",
  ],
  howUsed: {
    intro: "The CDM functions as the central nervous system of the Space AI platform, collecting, cleaning, and preparing data for all other core modules.",
    details: "It takes in structured data (from AI-Powered Form Automation) and unstructured data (from Intelligent Document Processing), unifies it, and enriches it with built-in AI/ML. This unified data then powers features across the platform, from enabling Semantic Search in the files module to providing the predictive insights needed for AI Workflow Orchestration to make adaptive and intelligent decisions. The platform's commitment to real-time handling ensures that every module operates using the most current, verified information.",
  },
  whoCanUse: {
    intro: "The Common Data Platform is a valuable tool for any team or industry that relies on data for core business processes.",
    industries: [
      "Government: Streamline the processing of official documents, public records, and permits.",
      "Real Estate: Automate the management of contracts, property deeds, and financial agreements.",
      "Education: Digitize and process student records, research papers, and administrative documents.",
      "Health Care: Securely manage and process patient records, insurance forms, and research documentation while ensuring privacy and compliance.",
      "Transportation: Automate the handling of logistics manifests, shipping documents, and maintenance logs.",
      "Infrastructure: Manage blueprints, project plans, and compliance documents for large-scale construction and infrastructure projects.",
      "Defense: Securely process sensitive documents, operational manuals, and compliance records.",
      "Oil & Gas: Automate the management of geological surveys, equipment maintenance reports, and safety protocols.",
      "Hospitality: Streamline the processing of guest records, booking confirmations, and vendor contracts.",
    ],
  },
  pptContent: {
    pages: [
      {
        id: "what-is-cdp",
        title: "1) What is the Common Data Platform?",
        description: "The Common Data Platform unifies all your construction project data—structured and unstructured—into a single, intelligent ecosystem that provides real-time insights, predictive analytics, and automated governance.",
        imageSrc: "/assets/images/cdm.png", // KEEP IMAGE
        sections: [
          {
            name: "Core Purpose",
            bullets: [
              "Eliminate Data Silos: Break down barriers between different systems and data sources",
              "Enable Real-Time Intelligence: Transform raw data into actionable insights instantly",
              "Automate Data Governance: Built-in compliance and quality controls",
              "Power AI-Driven Decisions: Foundation for predictive and prescriptive analytics",
            ],
          },
          { name: "Data Ingestion Engine", bullets: ["Automated collection from multiple sources"] },
          { name: "Intelligent Processing Layer", bullets: ["AI-powered data transformation and enrichment"] },
          { name: "Real-Time Analytics Engine", bullets: ["Live insights and predictive modeling"] },
          { name: "Governance Framework", bullets: ["Automated compliance and quality assurance"] },
          { name: "Integration Hub", bullets: ["Seamless connectivity with existing systems"] },
        ],
      },
      {
        id: "getting-started",
        title: "2) Getting Started Guide",
        description: "A structured approach to deploying the Common Data Platform.",
        imageSrc: "/assets/images/files.webp", // KEEP IMAGE (Used the architecture one here since the original 'Getting Started' didn't have one, and the next page did)
        sections: [
          {
            name: "Assessment and Planning",
            bullets: [
              "Identify all current data sources (BIM, ERP, IoT, documents, etc.)",
              "Map existing data flows and dependencies",
              "Define key stakeholders and access requirements",
              "Establish success metrics and KPIs",
              "Plan integration timeline and phases",
            ],
          },
          {
            name: "Data Source Identification",
            bullets: [
              "Connect BIM/CAD Systems",
              "Project Management tools",
              "ERP Systems",
              "Financial Systems",
              "IoT Devices",
              "Document Systems",
              "Communication Tools",
            ],
          },
          {
            name: "Platform Configuration",
            bullets: [
              "Create user accounts with role-based permissions",
              "Configure secure connections to existing systems",
              "Define data mapping",
              "Set up automated workflows",
              "Build initial dashboards",
              "Configure alert systems",
            ],
          },
        ],
        checklist: {
          name: "Pre-Implementation Checklist",
          bullets: [
            "Ensure you have administrative access to existing systems",
            "Network connectivity specifications",
            "Security and compliance requirements",
            "User access management protocols",
            "A training schedule for key users",
          ],
        },
      },
      {
        id: "architecture-overview",
        title: "3) Platform architecture overview",
        description: "The Common Data Platform is built on a Cloud-Native, Scalable Architecture.",
        imageSrc: undefined, // REMOVED IMAGE
        sections: [
          {
            name: "Data Ingestion Layer",
            bullets: ["Real-time streaming, batch processing, API gateway, file processing, and IoT integration for continuous data collection from all connected systems."],
          },
          {
            name: "Data Processing Engine",
            bullets: ["ETL pipelines, data validation, enrichment services, deduplication, and schema management for standardized data transformation."],
          },
          {
            name: "Intelligence Layer",
            bullets: ["Machine learning models, natural language processing, computer vision, recommendation engine, and anomaly detection for intelligent insights."],
          },
          {
            name: "Data Storage",
            bullets: ["Data lake, data warehouse, time-series database, document store, and backup systems for scalable, secure data storage."],
          },
        ],
      },
      {
        id: "ai-ml-capabilities",
        title: "4) AI/ML Capabilities",
        description: "The platform's native AI/ML foundation unlocks advanced construction intelligence.",
        imageSrc: undefined, // REMOVED IMAGE
        sections: [
          {
            name: "Predictive Analytics",
            bullets: [
              "Forecast project delays with 87% accuracy",
              "Predict final project costs and budget variances",
              "Optimize crew and equipment allocation",
              "Identify potential quality issues",
              "Assess safety risks before they occur",
            ],
          },
          {
            name: "Automated Insights",
            bullets: [
              "Pattern recognition in project data",
              "Correlation analysis between project factors",
              "Benchmark comparison against industry standards",
              "Root cause analysis of issues",
              "Performance optimization recommendations",
            ],
          },
          {
            name: "Document Intelligence",
            bullets: [
              "Contract analysis for key terms and obligations",
              "Specification processing for conflicts",
              "Email intelligence for action items",
              "Automated report generation",
              "Communication pattern analysis",
            ],
          },
          {
            name: "Computer Vision",
            bullets: [
              "Progress tracking from site photos",
              "Automated quality assessment from images",
              "Safety monitoring in photos and videos",
              "Equipment recognition and tracking",
              "Damage assessment analysis",
            ],
          },
        ],
      },
      {
        id: "real-time-processing",
        title: "5) Real-Time Processing",
        description: "Continuous Intelligence for Immediate Insights.",
        imageSrc: undefined, // REMOVED IMAGE
        sections: [
          {
            name: "Real-Time Data Sources",
            bullets: [
              "IoT Sensor Data: Live feeds from equipment and environmental sensors",
              "Mobile App Updates: Real-time progress updates from field teams",
              "System Notifications: Instant alerts from connected project systems",
              "Communication Feeds: Real-time processing of emails and messages",
              "External Data: Weather, traffic, and regulatory updates",
            ],
          },
          {
            name: "Live Dashboards",
            bullets: [
              "Real-time project health monitors",
              "Resource utilization tracking",
              "Budget performance analysis",
              "Safety compliance monitoring",
              "Quality metrics display",
            ],
          },
          {
            name: "Stream Processing",
            bullets: [
              "Immediate analysis of incoming data streams",
              "Threshold monitoring",
              "Trend analysis",
              "Correlation processing",
              "Instant alert generation",
            ],
          },
          {
            name: "Automated Response",
            bullets: [
              "Alert routing to stakeholders",
              "Workflow triggers based on conditions",
              "Resource reallocation",
              "Dynamic schedule updates",
              "Compliance actions",
            ],
          },
        ],
      },
      {
        id: "data-governance-security",
        title: "6) Data Governance & Security",
        description: "The Common Data Platform provides an Enterprise-Grade Governance and Security Framework to protect your valuable construction data.",
        imageSrc: undefined, // REMOVED IMAGE
        sections: [
          {
            name: "Data Governance",
            bullets: [
              "Automated governance controls including data quality management",
              "Metadata management",
              "Data lineage tracking",
              "Access control with role-based permissions",
              "Retention policies with automated archiving",
            ],
          },
          {
            name: "Security Framework",
            bullets: [
              "Multi-layer security with end-to-end encryption",
              "Multi-factor authentication",
              "Granular authorization",
              "Comprehensive audit logging",
              "Continuous compliance monitoring",
            ],
          },
          {
            name: "Privacy Protection",
            bullets: [
              "Data anonymization",
              "Consent management",
              "Right to deletion processes",
              "Cross-border compliance",
              "Automated privacy impact assessments",
            ],
          },
          {
            name: "Compliance Management",
            bullets: [
              "SOC 2 Type II compliance",
              "ISO 27001 certification",
              "GDPR compliance",
              "CCPA compliance",
              "Construction industry-specific standards",
            ],
          },
        ],
        keyPoint: "Security First: Our platform maintains the highest security standards with continuous monitoring, regular audits, and proactive threat detection to protect your valuable construction data.",
      },
    ],
  },
  cta: {
    heading: "Ready to transform your construction data into intelligent insights?",
    description: "Contact our specialists to begin your Common Data Platform implementation journey.",
    linkText: "Contact Specialists",
    linkHref: "/contact-specialists",
  },
};

export default function Page() {
  return <CdpPage guideData={guideData} />;
}
