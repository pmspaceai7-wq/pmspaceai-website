import { BrainCircuit, Bot, DatabaseZap, DollarSign, Briefcase, Wrench, FileText, Video, Mic, User2Icon } from "lucide-react";

// Define a type for a resource for better type safety
export type Resource = {
  id: number;
  title: string;
  description: string;
  pillar: string;
  persona: string;
  format: string;
  industry: string;
  href: string;
  image: string;
  content:string,
  readTime: string;
  slug: string;
  keywords?: string[]; // Optional array of strings
  features?: {         // Optional array of feature objects
    title: string;
    description: string;
    image: string;
  }[];
};

// The same data you provided
export const allResources: Resource[] = [

  {
  id: 101,
  slug: "construction-analytics-software",
  title: "Smart Analytics Reporting Software for Insights | Space AI",
  description: "Automate reporting and visualize data with Space AI. Get actionable insights through real-time dashboards and predictive analytics.",
  content: "Analytics Reporting Software transforms raw project data into real-time, actionable insights. By unifying information from multiple sources—emails, BIM, ERP, field logs, and documents—it provides a single source of truth for your business.",
  pillar: "Predictive Project Intelligence",
  persona: "VP of Operations",
  format: "White Paper",
  industry: "All",
  href: "/tools/construction-analytics-software/",
  image: "/assets/images/analyticsreportingsoftware.png",
  readTime: "12 min read",
  keywords: ["analytics", "reporting", "data visualization", "performance metrics"],
  features: [
    {
      title: "Customizable Visual Dashboards",
      description: "Build and share dynamic dashboards that visualize your most important KPIs, helping stakeholders understand project health at a glance.",
      image: "/videos/analyticsreportingsoftware.gif"
    }
  ]
}
,
{
  id: 102,
  slug: "construction-project-management-software",
  title: "AI-Powered Project Management Dashboard | Space AI",
  description: "Manage tasks, resources, and timelines effortlessly. Space AI enables real-time tracking, automation, and collaboration for project success.",
  content: "Construction Project Management Software gives you real-time visibility, predictive insights, and AI-powered automation to manage projects smarter. It unifies data from schedules, budgets, documents, emails, and field logs into a single source of truth, so teams no longer waste time reconciling disconnected systems. The platform forecasts risks and delays, streamlines workflows like RFIs, submittals, change orders, and approvals, and supports collaboration across owners, designers, contractors, and field crews. With role-based views and automated status tracking, project managers can focus on execution rather than administration. Deliver projects on time, on budget, and with full transparency using Space AI. The software also provides portfolio-level dashboards, resource loading views, and automated status reports that keep executives and owners informed without manual effort. Customizable workflows adapt to your delivery method, whether design-build, hard-bid, or IPD. By centralizing communication and documentation, it reduces rework, improves accountability, and creates a defensible record of every project decision. Mobile access ensures that field teams can update progress, capture photos, and submit issues directly from the job site without returning to the trailer. Real-time synchronization keeps office and field teams aligned, eliminating the version-control problems that plague email and spreadsheet-based project management. From small renovations to large capital programs, the platform scales to match project complexity and team size.",
  pillar: "The Unified AECO Data Fabric",
  persona: "Head of Technology",
  format: "Case Study",
  industry: "All",
  href: "/tools/construction-project-management-software/",
  image: "/assets/images/projectmanagementdashboard.png",
  readTime: "10 min read",
  keywords: ["project management", "dashboard", "Gantt chart", "task tracking"],
  features: [
    {
      title: "Interactive Task Management Charts",
      description: "Plan and visualize your project timelines, dependencies, and critical paths with our intuitive drag-and-drop Gantt chart interface.",
      image: "/videos/projectmanagementdashboard.mp4"
    },
  ]
},

{
  id: 111,
  slug: "construction-asset-tracking-software",
  title: "AI Digital Asset Tracking System | Space AI",
  description: "Monitor assets in real time with Space AI. Improve efficiency, reduce losses, and ensure accurate asset management across all projects.",
  content: "Asset Tracking System gives real-time visibility of tools, equipment, and machinery with AI-powered insights. It helps prevent losses, optimize usage, and extend asset life—all from a single, unified dashboard. Track smarter, save costs, and stay in control with Space AI.",
  pillar: "The Unified AECO Data Fabric",
  persona: "Head of Technology",
  format: "Case Study",
  industry: "All",
  href: "/tools/construction-asset-tracking-software/",
  image: "/assets/images/assetdashboard.png",
  readTime: "12 min read",
  keywords: ["DAM", "digital assets", "BIM", "drone footage"],
  features: [
    {
      title: "Smart Tagging and Search",
      description: "AI-powered tagging automatically categorizes your assets, making it effortless to find the exact file you need in seconds.",
      image: "/videos/assetdashboard.gif"
    },
    {
      title: "BIM & 3D Model Viewer",
      description: "Preview and collaborate on large BIM files and 3D models directly in your browser without needing specialized software.",
      image: "/assets/images/spacebim.webp"
    }
  ]
},
   
 {
  id: 104,
  slug: "construction-expense-management-software",
  title: "AI Cost Estimation Tools for Accurate Budgeting | Space AI",
  description: "Forecast expenses accurately with AI. Space AI helps reduce overruns, improve cost efficiency, and streamline financial planning.",
  content: "Construction Expense Management Software delivers AI-powered precision for forecasting, tracking, and controlling project costs. It melds historical data, real-time trends, and predictive analytics to generate accurate estimates, categorize expenses, and monitor budget performance throughout the project lifecycle. By integrating estimating, procurement, invoices, and field costs into one unified view, it eliminates the fragmented spreadsheets that cause budgeting errors and blind spots. Finance and project teams gain real-time visibility into committed costs, actuals, and forecasted final costs, with automated alerts when spending trends threaten margins. The result is stronger cost control, fewer overruns, and healthier project margins. The software also streamlines approval workflows, enforces budget limits by cost code, and provides audit-ready reports for finance and owner review. Because it connects directly to ERP and accounting systems, data stays synchronized without manual re-entry. Project managers can drill down into variance drivers, compare current performance against historical benchmarks, and make informed decisions that protect profitability from preconstruction through project closeout. Built-in cash-flow forecasting and owner-reporting templates further simplify financial communication and reduce month-end close cycles. Detailed audit trails and approval history also support compliance reviews and disputes, giving finance teams confidence in every number. With Space AI, cost management becomes a proactive discipline rather than a reactive firefight.",
  pillar: "Predictive Project Intelligence",
  persona: "VP of Operations",
  format: "White Paper",
  industry: "All",
  href: "/tools/construction-expense-management-software/",
  image: "/assets/images/costestimation.png",
  readTime: "14 min read",
  keywords: ['cost estimation', 'bidding', 'budget management', 'AI estimating'],
  features: [
    {
      title: 'AI-Powered Estimate Generation',
      description: 'Leverage historical data and machine learning to generate highly accurate cost estimates in a fraction of the time.',
      image: '/videos/costestimationtool.gif'
    },
  ]
}
,
{
  id: 103,
  slug: "digital-asset-management-system",
  title: "Digital Asset Management with AI Automation | Space AI",
  description: "Manage digital assets efficiently with Space AI. Enjoy AI-powered indexing, secure access, and enhanced collaboration for productivity.",
  content: "Digital Asset Management System centralizes and organizes your project assets—such as BIM models, CAD files, and multimedia—into a unified, searchable repository. Designed for AECO (Architecture, Engineering, Construction, and Operations) teams, it enhances collaboration, ensures version control, and streamlines access across stakeholders. With AI-driven metadata tagging and real-time synchronization, managing complex project assets becomes efficient and secure.",
  pillar: "The Unified AECO Data Fabric",
  persona: "Head of Technology",
  format: "Case Study",
  industry: "All",
  href: "/tools/digital-asset-management-system/",
  image: "/assets/images/assetdashboard.png",
  readTime: "12 min read",
  keywords: ['DAM', 'digital assets', 'BIM', 'drone footage'],
  features: [
    {
      title: 'Smart Tagging and Search',
      description: 'AI-powered tagging automatically categorizes your assets, making it effortless to find the exact file you need in seconds.',
      image: '/videos/assetdashboard.gif'
    },
    {
      title: 'BIM & 3D Model Viewer',
      description: 'Preview and collaborate on large BIM files and 3D models directly in your browser without needing specialized software.',
      image: '/assets/images/spacebim.webp'
    }
  ]
}
,


     {
  id: 105,
  slug: "invoice-management-software",
  title: "AI Invoice Management Software with Automation | Space AI",
  description: "Simplify invoicing and payment tracking with Space AI. Automate workflows, ensure accuracy, and enhance financial control for your business.",
  content: "Invoice Management Software centralizes and automates billing workflows—bringing invoices, accounting systems, project data, and approvals into one intelligent hub. With AI-enhanced data extraction, structured invoice tracking, and seamless workflow automation, it helps teams process invoices faster, reduce errors, and maintain full visibility and control.",
  pillar: "The Unified AECO Data Fabric",
  persona: "All",
  format: "Case Study",
  industry: "All",
  href: "/tools/invoice-management-software/",
  image: "/assets/images/invoicemanagementsystem.png",
  readTime: "10 min read",
  keywords: ["invoice automation", "accounts payable", "vendor payments", "billing"],
  features: [
    {
      title: "Automated Forms",
      description: "AI-Assisted Forms streamline data collection and validation by intelligently guiding users through form fields. With features like auto-completion, error detection, smart recommendations, and contextual assistance, these forms reduce manual effort and improve accuracy.",
      image: "/videos/invoicemanagement.gif"
    },
  ]
},
{
  id: 106,
  slug: "construction-crm-software",
  title: "Custom AI CRM for Smarter Client Management | Space AI",
  description: "Manage customer relationships effectively with Space AI. Use AI-driven insights, automation, and personalization to boost engagement.",
  content: "Custom CRM is a tailored solution designed for AECO (Architecture, Engineering, Construction, and Operations) firms. It enables seamless management of client relationships, efficient tracking of project interactions, and streamlined communications—all within a unified, AI-powered platform.",
  pillar: "The Unified AECO Data Fabric",
  persona: "All",
  format: "Article",
  industry: "All",
  href: "/tools/construction-crm-software/",
  image: "/assets/images/aiworkflows.png",
  readTime: "8 min read",
  keywords: ['CRM', 'client management', 'sales pipeline', 'AECO sales'],
  features: [
    {
      title: '360-Degree Client View',
      description: 'Consolidate all client communications, project history, and contact information into a single, unified profile for your team.',
      image: '/videos/designer.gif'
    },
  ]
},
     {
  id: 107,
  slug: "backoffice-apps",
  title: " AI Workflow and Internal Tools for Teams | Space AI ",
  description: "Automate internal processes and optimize workflows. Space AI empowers teams with smart tools for collaboration and increased efficiency.",
  content: "Workflow & Internal Tools empower AECO (Architecture, Engineering, Construction, and Operations) teams to automate complex processes and streamline operations. By integrating AI-driven insights with customizable workflows, teams can enhance efficiency, reduce manual errors, and ensure seamless collaboration across departments.",
  pillar: "Agentic AI & Autonomous Operations",
  persona: "Head of Technology",
  format: "Case Study",
  industry: "All",
  href: "/tools/backoffice-apps/",
  image: "/assets/images/aiworkflows.png",
  readTime: "11 min read",
  keywords: ['internal tools', 'workflow automation', 'back office', 'operational efficiency'],
  features: [
    {
      title: 'Drag-and-Drop App Builder',
      description: 'Empower your operations teams to build the custom tools they need without writing a single line of code.',
      image: '/videos/workflow.gif'
    },
  ]
},

  {
  id: 109,
  slug: "construction-supply-chain-management-software",
  title: "AI Supply Chain Management System for Businesses | Space AI",
  description: "Streamline logistics and inventory with Space AI. Boost supply chain efficiency, increase visibility, and reduce operational costs.",
  content: "Construction Supply Chain Management Software leverages AI-driven analytics and automation to enhance visibility, efficiency, and collaboration across procurement, logistics, inventory, and supplier relationships. By integrating data from purchase orders, deliveries, inventory systems, and vendor scorecards, it provides real-time insights into material availability, order statuses, and supplier performance. The platform predicts shortages and delays, recommends alternative suppliers or substitutions, and helps site teams plan around realistic delivery schedules. This unified approach enables proactive decision-making, reduces operational bottlenecks, minimizes job-site downtime, and ensures a seamless flow of goods and information across the project portfolio. Procurement teams can also compare vendor quotes, track contract compliance, and manage long-lead items from a single dashboard. Integration with inventory management ensures that orders match on-site consumption, reducing overstock and stockouts. With historical spend analytics and demand forecasting, organizations can negotiate better terms, standardize materials, and build more resilient supply chains. Automated alerts notify procurement and site teams the moment a delivery is at risk, enabling fast pivots that keep construction schedules intact. By connecting procurement with inventory and scheduling, the platform ensures that materials arrive when needed, where needed, and in the right quantities. This level of coordination reduces waste, lowers carrying costs, and helps construction teams maintain momentum even in volatile supply markets.",
  pillar: "The Unified AECO Data Fabric",
  persona: "Head of Technology",
  format: "White Paper",
  industry: "All",
  href: "/tools/construction-supply-chain-management-software/",
  image: "/assets/images/supplychainmanagement.png",
  readTime: "15 min read",
  keywords: ['supply chain', 'procurement', 'logistics', 'material management'],
  features: [
    {
      title: 'Automated Form Builder',
      description: 'Automated Form Builder for Managing and Tracking Supply Chain.',
      image: '/videos/supplychainmanagement.gif'
    },
  ]
}
,

  

  {
  id: 110,
  slug: "construction-document-management-software",
  title: "AI Document Management & Collaboration Tools | Space AI",
  description: "Organize, share, and collaborate on documents easily. Space AI ensures secure, accessible, and seamless workflow integration.",
  content: "Document Management & Collaboration Software centralizes your project documents, enabling real-time collaboration, version control, and secure file sharing. Designed for AECO teams, it streamlines workflows, enhances compliance, and ensures seamless communication across all project stakeholders. With AI-driven insights and automation, it transforms document management into a strategic asset.",
  pillar: "The Unified AECO Data Fabric",
  persona: "All",
  format: "White Paper",
  industry: "All",
  href: "/tools/construction-document-management-software/",
  image: "/assets/images/documentmanagement.png",
  readTime: "15 min read",
  keywords: ["document management", "collaboration", "version control", "DMS"],
  features: [
    {
      title: "Centralized Document Repository",
      description: "Create a single source of truth for all project documents, accessible anytime, anywhere, on any device.",
      image: "/videos/documentmanagement.gif"
    }
  ]
},

  {
  id: 112,
  slug: "project-scheduling-software",
  title: "AI Scheduling Software with Optimization Features | Space AI",
  description: "Automate workforce scheduling with Space AI to boost efficiency, reduce conflicts, and optimize team productivity for smooth operations.",
  content: "Scheduling Software leverages AI to automate shift assignments, optimize resource allocation, and enhance team coordination. By integrating real-time data and predictive analytics, it ensures efficient scheduling, reduces conflicts, and improves workforce productivity. Designed for AECO (Architecture, Engineering, Construction, and Operations) teams, this solution streamlines operations and supports dynamic project needs.",
  pillar: "Agentic AI & Autonomous Operations",
  persona: "All",
  format: "Article",
  industry: "All",
  href: "/project-scheduling-software/",
  image: "/assets/images/scheduleingsoftware.webp",
  readTime: "9 min read",
  keywords: ["employee scheduling", "workforce management", "labor planning", "staffing"],
  features: [
    {
      title: "Drag-and-Drop Scheduling",
      description: "Easily create and adjust schedules, assign shifts, and manage time-off requests with a visual, intuitive interface.",
      image: "/videos/schedulingsoftware.gif"
    },
  ]
},

 {
  "id": 116,
  "slug": "inventory-management",
  "title": "AI Inventory Management Dashboard for Businesses | Space AI",
  "description": "Optimize inventory with Space AI. Gain real-time visibility, automate stock updates, and improve overall supply chain efficiency.",
  "content": " Inventory Management Dashboard centralizes and automates your inventory processes, providing real-time visibility into stock levels, order statuses, and supplier performance. Designed for AECO (Architecture, Engineering, Construction, and Operations) teams, it integrates seamlessly with existing systems, offering predictive analytics and streamlined workflows to enhance efficiency and reduce costs.",
  "pillar": "Tangible ROI of Construction AI",
  "persona": "VP of Operations",
  "format": "Case Study",
  "industry": "All",
  "href": "/tools/inventory-management/",
  "image": "/assets/images/inventorymanagement.png",
  readTime:"12 min read",
  "keywords": [
    "inventory management",
    "stock levels",
    "materials",
    "supply optimization"
  ],
  "features": [
    {
      "title": "AI-Powered Form Generation",
      "description": "Instantly create custom data entry forms for new inventory, material requests, or quality control checks simply by describing your requirements to the AI.",
      "image": "/videos/inventrymanagement.gif"
    }
  ]
},

{
  "id": 115,
  "slug": "equipment-checkout-app",
  "title": "AI Equipment Checkout App for Easy Tracking | Space AI",
  "description": "Manage equipment lending with Space AI. Ensure accurate tracking, reduce losses, and streamline checkout workflows for your team.",
  "content": "Equipment Checkout App streamlines equipment allocation for AECO (Architecture, Engineering, Construction, and Operations) projects. This mobile application tracks checkouts, returns, and maintenance, ensuring efficient management of tools and machinery. By integrating real-time data and AI-driven insights, it enhances accountability, reduces equipment downtime, and optimizes resource utilization across project sites.",
  "pillar": "Agentic AI & Autonomous Operations",
  "persona": "All",
  "format": "Case Study",
  "industry": "All",
  "href": "/tools/equipment-checkout-app/",
  "image": "/assets/images/equipmentcheckoutapp.png",
  "readTime": "10 min read",
  "keywords": [
    "equipment checkout",
    "tool tracking",
    "inventory app",
    "accountability"
  ],
  "features": [
    {
      "title": "AI-Assisted Reporting Forms",
      "description": "Instantly generate and file damage reports or maintenance requests using AI-powered forms that prompt for necessary details, including photo uploads.",
      "image": "/videos/esign.gif"
    }
  ]
},





  {
    id: 1,
    slug: "admin-panels",
    title: "Admin Panels",
    description: "Customizable admin panels for managing AECO project data, user roles, and workflows with intuitive dashboards and real-time insights.",
    content: "Customizable admin panels for managing AECO project data, user roles, and workflows with intuitive dashboards and real-time insights.",
    pillar: "The Unified AECO Data Fabric",
    persona: "Head of Technology",
    format: "Article",
    industry: "All",
    href: "/tools/admin-panels/",
    image: "/usecases/admin.png",
    readTime: "7 min read",
    keywords: ['admin dashboard', 'data management', 'user roles', 'AECO technology'],
    features: [
      {
        title: 'Intuitive Dashboards & Reporting',
        description: 'Visualize key project metrics and user activity in real-time with our powerful, easy-to-use dashboards. Customize reports to fit your exact needs.',
        image: '/usecases/admin.png'
      },
    ]
  },
  {
    id: 2,
    slug: "ai-assistant",
    title: "AI Assistant for Construction Teams | Space AI",
    description: "Use an AI assistant to automate repetitive coordination tasks, generate project updates, summarize communication, and support faster project decisions.",
    content: "Space AI Assistant helps construction teams automate repetitive coordination work across updates, logs, and reporting. It supports project managers with faster information retrieval, structured status summaries, and next-step recommendations so teams spend less time compiling data and more time executing. The assistant connects to project documents, schedules, RFIs, change orders, and field reports to answer questions in natural language, summarize long communication threads, and extract action items from meetings. By surfacing the right context at the right time, it reduces miscommunication, accelerates stakeholder responses, and keeps project execution on track. Security and access controls are built in, so sensitive project data stays protected while teams collaborate more efficiently. Whether you need a quick status update, a draft response to an owner, or a summary of yesterday's site activity, the assistant delivers accurate answers grounded in live project context. It learns from your project vocabulary and workflows, becoming more useful as adoption grows. For teams managing multiple concurrent projects, the assistant becomes a centralized coordination layer that cuts through inbox overload and keeps everyone aligned on priorities, deadlines, and next steps. It also supports multilingual queries and can be accessed from desktop or mobile, making it practical for office staff and field crews alike.",
    pillar: "Agentic AI & Autonomous Operations",
    persona: "All",
    format: "Case Study",
    industry: "All",
    href: "/tools/ai-assistant/",
    image: "/usecases/ai.png",
    readTime: "10 min read",
    keywords: ['AI assistant', 'automation', 'project updates', 'decision making'],
    features: [
      {
        title: 'Automate Repetitive Project Work',
        description: 'Generate updates, draft summaries, and organize recurring coordination tasks to reduce manual effort and turnaround time.',
        image: '/usecases/ai.png'
      },
      {
        title: 'Decision Support With Live Context',
        description: 'Surface relevant project context quickly so teams can respond faster to risks, blockers, and stakeholder requests.',
        image: '/usecases/ai.png'
      }
 
    ]
  },
  {
    id: 3,
    slug: "ai-recommendation-engine",
    title: "AI Recommendation Engine for Project Decisions | Space AI",
    description: "Get AI-powered recommendations for sequencing, resource allocation, and risk mitigation using live project signals and historical patterns.",
    content: "Space AI Recommendation Engine analyzes project patterns to suggest practical actions on scheduling, resource distribution, and risk control. Instead of reactive decision-making, teams get ranked recommendations tied to impact areas such as delay prevention, productivity improvement, and cost protection. The engine connects schedule, cost, resource, and risk data to generate context-aware suggestions for sequencing, crew allocation, and mitigation strategies. By learning from historical project patterns and live signals, it helps project managers identify the highest-impact actions before issues escalate. Each recommendation includes clear rationale and expected outcomes, so teams can act with confidence while remaining fully in control of final decisions. The system continuously refines its suggestions as project conditions change, ensuring recommendations stay relevant across preconstruction, execution, and closeout phases. It also explains the underlying drivers behind each suggestion, building trust and enabling better conversations among executives, project managers, and field leaders. Over time, the engine becomes a strategic advisor that helps organizations standardize best practices and repeat successful project outcomes across their portfolio. It also supports scenario modeling, allowing leaders to compare the projected impact of different sequencing or resource choices before committing. Adoption is straightforward because recommendations are presented with transparent reasoning, so teams understand not just what to do, but why it matters.",
    pillar: "Predictive Project Intelligence",
    persona: "VP of Operations",
    format: "White Paper",
    industry: "All",
    href: "/tools/ai-recommendation-engine/",
    image: "/usecases/analysis.png",
    readTime: "15 min read",
    keywords: ['sentiment analysis', 'resource allocation', 'risk mitigation', 'predictive AI'],
    features: [
      {
        title: 'Proactive Risk Mitigation',
        description: 'Detect early warning signals and receive mitigation recommendations before schedule or cost issues escalate.',
        image: '/usecases/analysis.png'
      },
      {
        title: 'Prioritized Action Recommendations',
        description: 'Receive ranked recommendations with expected impact so teams can execute the most important actions first.',
        image: '/usecases/analysis.png'
      },
    ]
  },
  {
    id: 117,
    slug: "expense-tracking-software",
    title: "AI Expense Tracking Software for Construction | Space AI",
    description: "Track project expenses, receipts, and vendor payments with AI-powered categorization, approval workflows, and real-time budget visibility.",
    content: "Expense Tracking Software gives construction teams real-time visibility into project spending, from field receipts and vendor invoices to labor costs and equipment rentals. With AI-powered categorization and automated approval workflows, finance and project teams can reduce manual data entry, enforce budget controls, and catch cost overruns earlier.",
    pillar: "Tangible ROI of Construction AI",
    persona: "VP of Operations",
    format: "Case Study",
    industry: "All",
    href: "/tools/expense-tracking-software/",
    image: "/assets/images/costestimation.png",
    readTime: "10 min read",
    keywords: ['expense tracking', 'construction expenses', 'receipt capture', 'budget control'],
    features: [
      {
        title: 'AI Receipt Capture',
        description: 'Extract amounts, vendors, and categories automatically from uploaded receipts and invoices to eliminate manual entry.',
        image: '/assets/images/costestimation.png'
      }
    ]
  },
  {
    id: 118,
    slug: "digital-signature",
    title: "Digital Signature Software for Construction Documents | Space AI",
    description: "Securely sign contracts, submittals, change orders, and approvals with legally binding digital signatures built for construction workflows.",
    content: "Digital Signature Software enables construction teams to execute contracts, approvals, and compliance documents without printing, scanning, or chasing physical signatures. Integrated with project workflows, it tracks who signed what and when, maintaining a defensible audit trail while accelerating turnaround times for submittals, RFIs, and change orders.",
    pillar: "The Unified AECO Data Fabric",
    persona: "All",
    format: "Article",
    industry: "All",
    href: "/tools/digital-signature/",
    image: "/assets/images/esignature.png",
    readTime: "8 min read",
    keywords: ['digital signature', 'e-signature', 'construction contracts', 'document approval'],
    features: [
      {
        title: 'Legally Binding Signatures',
        description: 'Sign contracts, change orders, and approvals with audit trails and tamper-evident certificates that stand up to review.',
        image: '/assets/images/esignature.png'
      }
    ]
  },
  {
    id: 119,
    slug: "supply-chain-management-system",
    title: "Supply Chain Management System for Construction | Space AI",
    description: "Gain end-to-end visibility across suppliers, materials, and logistics with AI-driven procurement and inventory orchestration.",
    content: "Supply Chain Management System connects procurement, logistics, inventory, and supplier performance into one coordinated view. Construction teams can track material orders, monitor delivery schedules, and anticipate shortages before they impact the job site, reducing downtime and improving cost predictability across projects.",
    pillar: "The Unified AECO Data Fabric",
    persona: "VP of Operations",
    format: "White Paper",
    industry: "All",
    href: "/tools/supply-chain-management-system/",
    image: "/assets/images/supplychainmanagement.png",
    readTime: "13 min read",
    keywords: ['supply chain management', 'procurement', 'material tracking', 'construction logistics'],
    features: [
      {
        title: 'Supplier Performance Dashboard',
        description: 'Monitor supplier reliability, delivery times, and quality metrics to make data-driven procurement decisions.',
        image: '/assets/images/supplychainmanagement.png'
      }
    ]
  },
  {
    id: 120,
    slug: "project-scheduling-software",
    title: "Project Scheduling Software for Construction Teams | Space AI",
    description: "Plan, optimize, and track construction schedules with AI-powered sequencing, resource balancing, and delay prediction.",
    content: "Project Scheduling Software helps construction teams build realistic schedules, balance resources across trades, and adjust plans as conditions change. With AI-driven sequencing and predictive delay alerts, project managers can identify conflicts earlier, protect critical path milestones, and keep crews productive across multiple sites.",
    pillar: "Agentic AI & Autonomous Operations",
    persona: "All",
    format: "Article",
    industry: "All",
    href: "/tools/project-scheduling-software/",
    image: "/assets/images/scheduleingsoftware.webp",
    readTime: "11 min read",
    keywords: ['project scheduling', 'construction schedule', 'Gantt chart', 'crew planning'],
    features: [
      {
        title: 'AI-Optimized Sequencing',
        description: 'Generate and refine task sequences based on trade dependencies, resource availability, and historical performance.',
        image: '/assets/images/scheduleingsoftware.webp'
      }
    ]
  },

  {
    id: 121,
    slug: "construction-change-order-software",
    title: "Construction Change Order Software",
    description: "Track, manage, and approve change orders with full cost impact analysis and audit trails.",
    pillar: "software",
    persona: "project-manager",
    format: "software",
    industry: "construction",
    href: "/tools/construction-change-order-software/",
    image: "/assets/images/workspace.webp",
    content: "Construction change order management is a critical process that directly impacts project budgets and schedules. Without a structured system, change orders get lost in email threads, cost impacts are estimated inaccurately, and approval delays cascade into schedule overruns. Space AI's change order software provides end-to-end visibility from initiation through approval and implementation, ensuring every change is documented, costed, and tracked. The system captures the scope of each change, calculates cost and schedule impact using AI-assisted estimation, routes the change through the appropriate approval workflow, and maintains a complete audit trail for every decision. Project managers gain real-time visibility into pending changes, cumulative cost impact, and schedule implications. Finance teams receive accurate cost data that feeds into budget forecasting and cash flow management. The platform integrates with scheduling, procurement, and document management systems so that approved changes automatically update project plans, purchase orders, and related documentation.",
    readTime: "7 min read",
    keywords: ["change order software", "construction change orders", "change management"],
  },
  {
    id: 122,
    slug: "construction-daily-log-software",
    title: "Construction Daily Log Software",
    description: "Automate daily reporting with AI-powered data collection, weather integration, and photo documentation.",
    pillar: "software",
    persona: "superintendent",
    format: "software",
    industry: "construction",
    href: "/tools/construction-daily-log-software/",
    image: "/assets/images/workspace.webp",
    content: "Daily logs are the heartbeat of construction project documentation. They capture weather conditions, workforce attendance, equipment on site, work activities completed, safety observations, and issues encountered. Yet most daily logs are still compiled manually from notes, texts, and memory at the end of the day. Space AI's daily log software automates this process by aggregating data from check-ins, equipment logs, weather services, and photo captures to generate comprehensive daily reports. Supervisors review and approve draft reports rather than writing from scratch. The system ensures consistency across days, projects, and reporters. Historical daily logs become searchable archives that support claims defense, safety analysis, and project analytics. Integration with scheduling and cost systems means that daily progress data automatically updates project metrics, giving leadership real-time visibility into field performance.",
    readTime: "7 min read",
    keywords: ["daily log software", "construction daily reports", "field reporting"],
  },
  {
    id: 123,
    slug: "construction-submittals-software",
    title: "Construction Submittals Software",
    description: "Streamline submittal review, approval, and tracking with AI-powered routing and version control.",
    pillar: "software",
    persona: "project-engineer",
    format: "software",
    industry: "construction",
    href: "/tools/construction-submittals-software/",
    image: "/assets/images/workspace.webp",
    content: "Submittals are one of the most time-sensitive workflows in construction. Shop drawings, material samples, product data, and calculations must be reviewed by the design team, approved or revised, and returned to the field before procurement and installation can proceed. Delays in submittal review ripple through procurement schedules and can push critical path activities. Space AI's submittals software automates the routing process, tracks review status, and maintains version control throughout the review cycle. The system identifies the correct reviewer based on the submittal type and discipline, sends automatic reminders as deadlines approach, and escalates when reviews are overdue. Each revision is tracked with full comparison capability so reviewers can quickly identify what changed. Approved submittals are linked to the relevant specifications, purchase orders, and installation schedules, creating a connected record from design intent through field verification.",
    readTime: "7 min read",
    keywords: ["submittals software", "construction submittals", "shop drawing management"],
  },
];

// Helper function to get a resource by its category and slug
export const getResource = (category: string, slug: string): Resource | undefined => {
  const path = `/${category}/${slug}`;
  return allResources.find(resource => resource.href === path);
};

// Helper function to get all slugs for a specific category for generateStaticParams
export const getSlugsForCategory = (category: string) => {
  return allResources
    .filter(resource => resource.href.startsWith(`/${category}/`))
    .map(resource => ({
      slug: resource.href.split('/').pop() || '',
    }));
};
