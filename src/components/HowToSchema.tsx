"use client";

/**
 * HowToSchema Component
 * Task 10: Add HowTo Schema to Guide Pages for Rich Snippets
 * 
 * This component generates HowTo structured data for Google's rich results
 * showing step-by-step guides directly in search results.
 */

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  image?: string;
  steps: HowToStep[];
  tool?: string[];
  supply?: string[];
}

export default function HowToSchema({
  name,
  description,
  totalTime,
  estimatedCost,
  image,
  steps,
  tool,
  supply,
}: HowToSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    ...(image && { image }),
    ...(tool && tool.length > 0 && {
      tool: tool.map(t => ({
        "@type": "HowToTool",
        name: t,
      })),
    }),
    ...(supply && supply.length > 0 && {
      supply: supply.map(s => ({
        "@type": "HowToSupply",
        name: s,
      })),
    }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

/**
 * Pre-built HowTo schemas for common guide pages
 */

export const idpHowToSteps: HowToStep[] = [
  {
    name: "Set Up Document Intake Sources",
    text: "Configure your document intake sources including email integration, cloud storage connections (Google Drive, Dropbox, SharePoint), and direct uploads. Space AI automatically monitors these sources for new documents.",
  },
  {
    name: "Configure Document Classification Rules",
    text: "Define classification rules for your document types. Space AI AI will automatically identify contracts, RFIs, submittals, change orders, and other construction documents based on content analysis.",
  },
  {
    name: "Set Up Data Extraction Templates",
    text: "Create extraction templates for each document type. Define which fields to extract (dates, amounts, parties, specifications) and map them to your project data structure.",
  },
  {
    name: "Enable AI-Powered Extraction",
    text: "Activate the AI extraction engine. Space AI uses OCR, NLP, and computer vision to extract data from PDFs, images, handwritten notes, and complex tables automatically.",
  },
  {
    name: "Configure Validation Rules",
    text: "Set up validation rules to cross-check extracted data against your existing project data in the Common Data Platform. Flag discrepancies and anomalies for human review.",
  },
  {
    name: "Set Up Semantic Search Index",
    text: "Enable semantic search indexing to make all document content searchable by meaning, not just keywords. Configure search permissions based on user roles.",
  },
  {
    name: "Configure Document Chat",
    text: "Enable the Document Chat feature to allow natural language questions about your documents. Set up context boundaries and response formatting preferences.",
  },
  {
    name: "Create Automated Workflows",
    text: "Build automated workflows triggered by document events. Route approvals, send notifications, and update project records automatically when specific documents are processed.",
  },
];

export const schedulingHowToSteps: HowToStep[] = [
  {
    name: "Import Your Project Data",
    text: "Import your existing project schedule from Microsoft Project, Primavera P6, or Excel. Space AI automatically maps tasks, dependencies, and resources.",
  },
  {
    name: "Define Task Dependencies",
    text: "Set up task dependencies (Finish-to-Start, Start-to-Start, etc.) and lag times. Space AI AI will suggest optimal dependency chains based on industry best practices.",
  },
  {
    name: "Assign Resources and Crews",
    text: "Assign workers, equipment, and materials to each task. Space AI tracks resource availability and prevents over-allocation automatically.",
  },
  {
    name: "Enable AI Schedule Optimization",
    text: "Activate AI-powered schedule optimization. The system analyzes your constraints, weather data, and historical performance to suggest the optimal task sequence.",
  },
  {
    name: "Configure Weather Integration",
    text: "Connect weather forecast data for your project location. Space AI automatically adjusts outdoor tasks based on weather predictions up to 14 days ahead.",
  },
  {
    name: "Set Up Delay Predictions",
    text: "Enable predictive delay analysis. Space AI AI monitors 50+ risk factors and alerts you to potential delays up to 45 days before they impact your critical path.",
  },
  {
    name: "Create Schedule Baselines",
    text: "Save schedule baselines at key milestones. Compare actual progress against baseline to track schedule variance and earned value metrics.",
  },
  {
    name: "Enable Real-Time Updates",
    text: "Connect field teams via mobile app for real-time progress updates. Task completions, delays, and issues flow directly into your master schedule.",
  },
];

export const riskManagementHowToSteps: HowToStep[] = [
  {
    name: "Create Risk Register",
    text: "Set up your project risk register. Define risk categories relevant to your project type (safety, schedule, budget, quality, regulatory).",
  },
  {
    name: "Enable AI Risk Detection",
    text: "Activate AI-powered risk detection. Space AI continuously scans project data, emails, and documents to identify emerging risks automatically.",
  },
  {
    name: "Configure Risk Scoring",
    text: "Define risk scoring methodology (probability × impact matrix). Set thresholds for risk levels (low, medium, high, critical).",
  },
  {
    name: "Assign Risk Owners",
    text: "Assign owners to each identified risk. Set up escalation paths and notification rules for risk level changes.",
  },
  {
    name: "Create Mitigation Plans",
    text: "Develop mitigation strategies for high-priority risks. Link mitigation tasks to your project schedule for tracking.",
  },
  {
    name: "Set Up Risk Dashboards",
    text: "Configure risk dashboards for different stakeholders. Executives see portfolio-level risk; project managers see detailed risk breakdowns.",
  },
  {
    name: "Enable Predictive Analytics",
    text: "Turn on predictive risk analytics. Space AI AI forecasts future risk trends based on project trajectory and historical patterns.",
  },
  {
    name: "Schedule Risk Reviews",
    text: "Set up automated risk review schedules. Space AI generates risk reports and prompts team reviews at defined intervals.",
  },
];
