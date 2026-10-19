export interface SoftwareModule {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  href: string;
  readTime: string;
  keywords?: string[];
  features?: string[];
}

export const softwareData: SoftwareModule[] = [
  {
    id: 1,
    slug: "content-management",
    title: "Content Management System | Construction Software",
    description: "Centralized platform for managing all project documentation, contracts, and communications.",
    content: `
      Construction projects produce enormous volumes of documents: drawings, specifications, contracts, RFIs, submittals, change orders, daily reports, inspection records, and correspondence. Without a structured way to manage this content, teams waste hours searching for files, working from outdated versions, and reconstructing decisions after the fact. Information silos form between the field and office, and critical documents get lost in email threads or personal drives.

      A construction content management system solves these problems by creating a single source of truth for all project information. Space AI's Content Management module is built for the document-intensive nature of construction, combining centralized storage, version control, access management, and intelligent search into one platform.

      ## The Cost of Poor Document Management

      Disorganized content creates direct and indirect costs. Teams working from outdated drawings cause rework. Missing contracts or approvals delay payments and create legal exposure. Slow document retrieval extends response times for RFIs and submittals, pushing schedules back. Perhaps most importantly, when knowledge is trapped in individual inboxes or scattered across systems, the project team cannot build a shared understanding of status and risk.

      Traditional file storage tools treat documents as static files. They do not understand construction workflows, document relationships, or the urgency of getting the right version to the right person at the right time.

      ## Core Capabilities

      **Centralized repository.** All project documents live in one organized location, accessible to authorized team members from the office, trailer, or field. There is no need to search through multiple platforms or ask someone to forward the latest file.

      **Version control.** Every document revision is tracked, and users can see which version is current. This prevents teams from working from outdated drawings or specifications and creates an audit trail for compliance and dispute resolution.

      **Access management.** Permissions can be set by role, company, or project phase, ensuring that sensitive contracts and financial documents are only visible to authorized users while keeping daily operational documents accessible to the field.

      **Search and tagging.** Documents can be tagged by discipline, phase, trade, or document type. Advanced search helps users find what they need in seconds rather than minutes or hours.

      **Collaboration tools.** Review, comment, and approval workflows keep feedback organized and traceable. Teams can route documents for approval without relying on email chains or manual follow-ups.

      ## How Content Management Works

      The workflow begins when a document is uploaded to the system. The platform automatically extracts metadata, applies access permissions based on project rules, and makes the document searchable. Team members can then retrieve, review, and collaborate on documents from any device.

      When changes are made, the system creates a new version while preserving the complete revision history. Users can compare versions, view annotations, and track who made what changes. Approved versions are marked as current, and outdated versions are archived but never deleted.

      ## Document Types Managed

      Space AI's content management system handles the full range of construction documentation:

      - **Design documents:** drawings, specifications, design Intent letters, and value engineering proposals
      - **Contract documents:** agreements, bonds, insurance certificates, and scope of work definitions
      - **RFIs and submittals:** requests for information, shop drawings, material samples, and product data
      - **Change orders:**变更 directives, pricing documents, and time extension requests
      - **Daily operations:** daily reports, safety inspections, quality checklists, and progress photos
      - **Financial documents:** pay applications, invoices, change order logs, and budget reports

      ## Connecting Content to Execution

      Space AI's Content Management module does not store documents in isolation. It connects them to the workflows they support. An RFI links to the drawing it questions. A submittal connects to the specification it references. A change order ties back to the contract and budget impact. This relationship-aware structure turns document management into project intelligence.

      When a field issue arises, teams can quickly pull the relevant drawings, specs, RFIs, and correspondence to understand context and make decisions. When auditors or owners request documentation, everything is organized and retrievable.

      ## Compliance and Audit Trail

      Every document interaction is logged, creating a complete audit trail that supports compliance with regulatory requirements, contract obligations, and internal quality standards. Version history, access logs, and approval records provide the documentation needed for audits, claims, and dispute resolution.

      ## Results for Construction Teams

      Teams that implement structured content management see measurable improvements: faster document retrieval, fewer errors caused by outdated versions, shorter approval cycles, and better preparedness for audits and claims. Field crews spend less time chasing documents and more time building. Office teams spend less time on administrative reconciliation and more time on planning and control.

      For organizations managing multiple projects, standardizing content management across the portfolio creates consistency, reduces onboarding time, and improves data quality for analytics and reporting.

      ## A Foundation for Intelligence

      Good content management is a prerequisite for AI-powered construction intelligence. Machine learning models need clean, structured, accessible data to deliver accurate predictions and recommendations. By organizing project content in Space AI's content management system, teams create the foundation for predictive analytics, automated risk detection, and smarter decision-making across the project lifecycle.
    `,
    image: "/assets/images/documentmanagement.png",
    href: "/software/content-management/",
    readTime: "9 min read",
    keywords: ["content management", "document management", "DMS", "file management"],
    features: [
      "Centralized repository",
      "Version control",
      "Access management",
      "Search and tagging",
      "Collaboration tools",
    ],
  },
  {
    id: 2,
    slug: "entity-management",
    title: "Entity Management System | Team & Resource Tracking",
    description: "Comprehensive tool for managing construction entities including resources, teams, and vendors.",
    content: `
      Construction projects depend on a complex network of entities: people, equipment, materials, vendors, subcontractors, and organizational units. Each of these entities has attributes, relationships, and histories that affect project outcomes. When this information is fragmented across spreadsheets, accounting systems, and personal notes, teams cannot see the full picture of who and what is available to execute work.

      Space AI's Entity Management module provides a unified system for tracking every entity in your construction ecosystem. It connects resources to projects, teams to tasks, and vendors to contracts so that planning and execution are based on accurate, up-to-date information.

      ## The Challenge of Managing Construction Entities

      Construction operations involve more moving parts than most industries. A single project may involve multiple subcontractors, hundreds of workers, dozens of pieces of equipment, and countless material suppliers. Each entity has its own status, location, capability, and cost profile.

      Without a centralized entity management system, common problems emerge:

      - Equipment is double-booked or sits idle because availability is not visible
      - Subcontractor capacity is overstated, leading to scheduling conflicts
      - Vendor performance history is lost, making selection decisions subjective
      - Team assignments are out of date, causing confusion about who is responsible
      - Resource costs are not tied to project budgets in real time

      These issues compound across a portfolio, making it impossible to optimize resource utilization or forecast capacity accurately.

      ## What Entity Management Delivers

      **Entity database.** A single record for every person, piece of equipment, vendor, subcontractor, and organizational unit involved in your projects. Each record contains the attributes needed for planning, assignment, and analysis.

      **Resource allocation.** Assign entities to projects, tasks, and time periods with visibility into availability and conflicts. Teams can see who is over-allocated and where capacity exists.

      **Vendor management.** Track vendor capabilities, contracts, performance history, and contact information. This supports better procurement decisions and stronger vendor relationships.

      **Team hierarchy.** Define reporting structures, roles, and responsibilities across project teams and company organizations. This clarity improves accountability and communication.

      **Performance tracking.** Capture utilization, productivity, and outcomes by entity over time. This data feeds into future planning and continuous improvement.

      ## How Entity Management Works

      The process begins when an entity is created in the system. The administrator enters core attributes such as name, type, capabilities, certifications, and cost rates. The entity is then linked to projects and tasks based on availability and requirements.

      As the project progresses, the system tracks utilization, productivity, and costs in real time. When conflicts arise, the system alerts managers and suggests alternatives. At the end of each period, performance data is aggregated for analysis and reporting.

      ## Entity Types Managed

      Space AI's entity management system handles the full range of construction resources:

      - **People:** project managers, superintendents, engineers, operators, laborers, and specialists
      - **Equipment:** excavators, cranes, trucks, tools, and specialized machinery
      - **Materials:** concrete, steel, lumber, mechanical components, and finishing materials
      - **Vendors:** suppliers, rental companies, service providers, and consultants
      - **Subcontractors:** trade contractors, specialty firms, and general contractors
      - **Organizational units:** divisions, departments, teams, and project groups

      ## Connecting Entities to Project Outcomes

      Entity management becomes powerful when it is connected to scheduling, budgeting, and execution workflows. Space AI links entity records to the tasks and projects they support, so resource decisions are visible in context.

      When a project manager assigns a crew to a task, they can see that crew's current workload, relevant certifications, and past performance. When procurement selects a vendor, they can review delivery history and quality metrics. When finance closes a month, labor and equipment costs are already tied to the right project codes.

      ## Portfolio-Level Insights

      For organizations managing multiple projects, entity management provides cross-project visibility into resource utilization and capacity. Leadership can see where resources are over-committed, where capacity exists, and how to optimize allocation across the portfolio. This portfolio-level view supports strategic decisions about staffing, equipment investment, and vendor partnerships.

      ## Business Impact

      Centralized entity management improves resource utilization, reduces scheduling conflicts, and strengthens vendor relationships. It gives leadership a clear view of organizational capacity and helps project teams make more informed decisions about who and what to deploy.

      For growing construction firms, entity management provides the structure needed to scale without losing control. New projects can be staffed faster, equipment can be shared across sites more effectively, and institutional knowledge about vendors and teams is preserved.

      ## A Single System of Record

      Space AI's Entity Management module serves as the system of record for every resource and relationship that powers your projects. By consolidating entity data in one place, it eliminates duplication, reduces errors, and creates the foundation for predictive resource planning and portfolio-level optimization.
    `,
    image: "/assets/images/workspace.png",
    href: "/software/entity-management/",
    readTime: "8 min read",
    keywords: ["entity management", "resource management", "vendor management", "team management"],
    features: [
      "Entity database",
      "Resource allocation",
      "Vendor management",
      "Team hierarchy",
      "Performance tracking",
    ],
  },
];

export const getSoftware = (slug: string): SoftwareModule | undefined => {
  return softwareData.find((item) => item.slug === slug);
};

export const getSoftwareSlugs = () => {
  return softwareData.map((item) => ({
    slug: item.slug,
  }));
};
