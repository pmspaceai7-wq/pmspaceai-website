import { Metadata } from "next";
import DesignerPage from "./DesignerPage";


export const metadata: Metadata = {
  title: "Designer Workspace Guide | Construction Design Management | Space AI",
  description:
    "Complete guide to the Designer Workspace for construction. Manage drawings, specifications, and design workflows with BIM integration and collaboration tools.",
  keywords: [
    "construction design workspace",
    "construction drawing management",
    "bim collaboration",
    "design workflow automation",
    "construction specification management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/guides/designer/",
  },
  openGraph: {
    title: "Designer Workspace Guide | Space AI",
    description: "Collaborative design workspace for construction projects.",
    url: "https://pmspace.ai/guides/designer/",
    type: "article",
  },
};

const guideData = {
  header: {
    title: "The Ultimate Guide to the Designer Workspace",
    description: "Our Designer Workspace is a collaborative space for designers to manage drawings, specifications, and fulfill their project roles. It's a key part of our platform that integrates with Building Information Modeling (BIM) to streamline project execution and improve collaboration.",
  },
  purpose: {
    intro: "The Designer Workspace is essential for any design team that wants to move beyond manual drawing management and disjointed collaboration.",
    before: {
      heading: "Before the Designer Workspace",
      text: "Teams struggle with manual drawing management, leading to compliance risks and disjointed collaboration.",
    },
    after: {
      heading: "After the Designer Workspace",
      text: "You get a centralized hub for drawings, with BIM-integrated workflows and streamlined compliance checks, leading to improved collaboration and faster project execution.",
    },
  },
  keyFeatures: {
    intro: "Our platform is built with a suite of features to ensure your design processes are collaborative, efficient, and streamlined.",
    features: [
      { name: "Manage Drawings ✏️", icon: "FileEdit", text: "The platform allows you to create, update, and manage project drawings, ensuring all design files are centralized and easily accessible. A user can create a design by providing a name, description, and category, and the system saves the xmlCode of the design to a .bpmn file. You can also update a design's xmlCode by providing the workflowId." },
      { name: "BIM Integration 🏗️", icon: "Building2", text: "The workspace integrates with BIM to ensure design workflows are data-centric and interoperable. It is designed to handle drawings and project data that can be associated with specific projects." },
      { name: "Compliance Check ✅", icon: "ShieldCheck", text: "The system helps to streamline compliance checks, reducing the risk of errors and ensuring all designs meet the necessary standards." },
      { name: "Team Collaboration 👥", icon: "Users", text: "The workspace is a collaborative space that improves team communication and coordination, providing better visibility and reducing errors." },
    ],
  },
  benefits: [
    "Better Collaboration: Centralized drawings and a collaborative environment allow teams to work together more effectively.",
    "Reduced Errors: BIM-integrated workflows and streamlined compliance checks help reduce errors and inconsistencies in designs.",
    "Faster Project Execution: Improved collaboration and a centralized hub for all design documents help to accelerate project timelines.",
  ],
  howUsed: {
    intro: "Within Space AI, the Designer Workspace acts as the central hub for all design-related tasks. It's where designers can create new workflows and manage existing ones.",
    details: "The system handles the back-end logic, automatically generating a unique workflowId for each new design. The design's core data, including its xmlCode, processMap, and associated formId, is stored in the database. The system also allows for paginated queries, which is useful for managing a large number of workflows, and can count the total number of workflows to provide better insight into the project's scope.",
  },
  whoCanUse: {
    intro: "The Designer Workspace is a valuable tool for any team or industry that relies on drawings, designs, and specifications.",
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
        id: "dashboard-overview",
        title: "Designer Dashboard Overview",
        description: "The Designer dashboard serves as your central workspace, featuring eight core modules organized in an intuitive layout. Each color-coded tile provides instant access to specific design capabilities.",
        sections: [
          {
            name: "Top Row Modules",
            bullets: [
              "WorkStream - Process design",
              "Form Designer - Dynamic forms",
              "Workflow Definitions - Automation logic",
              "Workflow Instances - Active monitoring",
            ]
          },
          {
            name: "Bottom Row Modules",
            bullets: [
              "Task Management - Task organization",
              "Template Gallery - Pre-built solutions",
              "Data Connectors - System integrations",
              "Script Center - Custom automation",
            ]
          },
        ],
        accessLink: "https://pmspace.ai/designer/",
        accessDescription: "Access the Designer at and experience responsive design that adapts to any screen size with interactive hover effects for seamless navigation."
      },
      {
        id: "workstream-form-designer",
        title: "WorkStream & Form Designer",
        description: "The WorkStream and Form Designer modules are the core building blocks for automating your project workflows.",
        sections: [
          {
            name: "WorkStream Module",
            bullets: [
              "Design and manage work processes with visual drag-and-drop functionality.",
              "Access construction-specific templates including: Project kickoff workflows, Progress reporting systems, Quality control processes, Safety management protocols, Change management workflows.",
              "Integrate seamlessly with BIM software, project management tools, and mobile interfaces for field teams.",
            ],
          },
          {
            name: "Form Designer",
            bullets: [
              "Create intelligent, responsive forms with AI-enhanced building capabilities.",
              "Features include: Natural language form creation, Smart field suggestions, Conditional logic and validation, Mobile optimization, Offline capability.",
              "Build daily reports, safety inspections, quality control forms, and material management interfaces with built-in photo integration and GPS tagging.",
            ],
          },
        ],
      },
      {
        id: "workflow-management-system",
        title: "Workflow Management System",
        description: "Our workflow management system allows you to create, define, and monitor your automation logic for complex construction workflows.",
        sections: [
          {
            name: "Workflow Definitions",
            bullets: [
              "Create automated process logic with visual flowchart-style design. Configure triggers, decision trees, and action sequences for complex construction workflows.",
              "Access comprehensive workflow templates for project management, quality control, safety protocols, and procurement processes.",
              "Configure system triggers, time-based automation, and multi-system actions for seamless integration.",
            ],
          },
          {
            name: "Workflow Instances",
            bullets: [
              "Monitor active workflows in real-time with performance metrics, execution status, and historical analysis.",
              "Intervene manually when needed and optimize based on data.",
            ],
          },
        ],
        proTip: "Pro Tip: Start with simple workflows and gradually add complexity. Always test thoroughly with real data before deploying to live projects.",
      },
      {
        id: "task-management",
        title: "Task Management Excellence",
        description: "The Task Management module provides a robust system for organizing, assigning, and tracking tasks throughout your project lifecycle.",
        sections: [
          {
            name: "Create & Organize",
            bullets: [
              "Add tasks manually or through workflow automation.",
              "Organize by project, category, and priority levels with due date management.",
            ],
          },
          {
            name: "Assign & Collaborate",
            bullets: [
              "Assign tasks to individuals or teams with role-based automation.",
              "Enable collaborative tasks with shared responsibility and approval workflows.",
            ],
          },
          {
            name: "Track & Complete",
            bullets: [
              "Monitor real-time progress with mobile optimization for field teams.",
              "Capture photos, documentation, and GPS verification.",
            ],
          },
        ],
        taskTypes: [
          "Design Tasks: Drawing reviews, specification updates, design changes",
          "Construction Tasks: Installation, inspection, quality checks",
          "Safety Tasks: Safety inspections, training, incident follow-up",
          "Administrative Tasks: Permits, approvals, documentation",
          "Procurement Tasks: Material ordering, vendor coordination",
        ],
      },
      {
        id: "template-gallery",
        title: "Template Gallery & Solutions",
        description: "Access a comprehensive library of pre-built templates designed specifically for construction projects. Accelerate deployment with industry-tested solutions.",
        sections: [
          {
            name: "Project Management",
            bullets: [
              "Complete project initiation workflows, progress reporting suites, change management systems, and milestone tracking templates.",
            ],
          },
          {
            name: "Quality & Safety",
            bullets: [
              "OSHA-compliant safety inspections, QA/QC processes, incident management, compliance tracking, and training management systems.",
            ],
          },
          {
            name: "Financial & Procurement",
            bullets: [
              "Budget tracking systems, invoice processing workflows, procurement management, cost control, and payment processing automation.",
            ],
          },
          {
            name: "Commercial Construction",
            bullets: [
              "Templates for office buildings, retail spaces, and hospitality projects with specialized workflows for complex commercial requirements.",
            ],
          },
          {
            name: "Residential Construction",
            bullets: [
              "Single-family and multi-family development templates with residential-specific processes and compliance requirements.",
            ],
          },
          {
            name: "Infrastructure Projects",
            bullets: [
              "Specialized templates for roads, bridges, utilities construction with public sector compliance and reporting requirements.",
            ],
          },
        ],
      },
      {
        id: "data-connectors",
        title: "Data Connectors & Integration",
        description: "Configure seamless connections between Space AI and your existing software ecosystem. Ensure real-time data synchronization across all platforms.",
        sections: [
          {
            name: "BIM & Design Software",
            bullets: [
              "Connect with design software and other CAD tools for seamless design integration.",
            ],
          },
          {
            name: "Project Management",
            bullets: [
              "Integrate with project management systems for unified project coordination and tracking.",
            ],
          },
          {
            name: "Business Systems",
            bullets: [
              "Connect ERP systems, accounting software, and CRM platforms.",
            ],
          },
        ],
        securityFeatures: [
          "Secure OAuth and API key authentication",
          "Configurable data mapping and sync frequency",
          "Robust error handling and notifications",
          "Encryption and access control",
          "Real-time synchronization with conflict resolution",
        ],
      },
      {
        id: "script-center",
        title: "Script Center & Custom Automation",
        description: "Extend Space AI functionality with custom scripts and automation. Create powerful solutions tailored to your specific construction workflows.",
        sections: [
          {
            name: "Development Environment",
            bullets: [
              "Advanced code editor with syntax highlighting, auto-completion, error detection, and integrated debugging tools for JavaScript, Python, PowerShell, and SQL.",
            ],
          },
          {
            name: "Testing & Validation",
            bullets: [
              "Comprehensive testing framework with step-through debugging, automated validation, performance monitoring, and error handling capabilities.",
            ],
          },
          {
            name: "Production Deployment",
            bullets: [
              "Version control, collaboration features, and seamless deployment with execution monitoring and usage tracking for optimal performance.",
            ],
          },
        ],
        scripts: [
          "Data Processing Scripts: ETL processes, data transformation, and automated data import from various construction software systems.",
          "BIM Integration Scripts: Extract data from BIM models, synchronize project data across systems, and perform automated compliance checking.",
          "Custom Reporting: Automated construction report generation, cost calculations, schedule analysis, and performance optimization scripts.",
        ],
      },
    ],
  },
  cta: {
    linkHref: "/construction-software-demo",
  },
};

export default function Page() {
  return <DesignerPage guideData={guideData} />;
}
