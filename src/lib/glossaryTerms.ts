// src/lib/glossaryTerms.ts
// TASK 63: Expanded glossary with 100+ construction management terms
// Comprehensive terminology for SEO and user education

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
  seeAlso?: { text: string; href: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // AI & Machine Learning Terms (20)
  {
    term: "Agentic AI",
    definition: "AI systems capable of autonomous decision-making and task execution with minimal human intervention. In construction, agentic AI can automatically triage RFIs, assign resources, and escalate issues based on learned patterns and project context.",
    category: "AI & Machine Learning",
    relatedTerms: ["AI Copilot", "Intelligent Automation"],
  },
  {
    term: "AI Copilot",
    definition: "An AI assistant embedded in software that provides contextual guidance, answers questions, and helps users navigate complex tasks. In construction management, AI copilots help project managers find documents, understand data, and make decisions faster.",
    category: "AI & Machine Learning",
    relatedTerms: ["Natural Language Processing", "Conversational AI"],
  },
  {
    term: "Computer Vision",
    definition: "AI technology that enables computers to interpret and understand visual information from images and videos. In construction, computer vision is used for progress monitoring, safety compliance detection, and quality inspection.",
    category: "AI & Machine Learning",
    relatedTerms: ["Image Recognition", "Progress Monitoring"],
  },
  {
    term: "Deep Learning",
    definition: "A subset of machine learning using neural networks with multiple layers to model complex patterns in data. Deep learning powers advanced construction AI features like document understanding, risk prediction, and anomaly detection.",
    category: "AI & Machine Learning",
    relatedTerms: ["Machine Learning", "Neural Networks"],
  },
  {
    term: "Intelligent Document Processing (IDP)",
    definition: "AI-powered technology that extracts, classifies, and processes information from documents automatically. In construction, IDP handles contracts, drawings, specifications, and correspondence without manual data entry.",
    category: "AI & Machine Learning",
    relatedTerms: ["OCR", "Natural Language Processing"],
  },
  {
    term: "Machine Learning (ML)",
    definition: "A type of artificial intelligence where systems learn from data to improve performance without explicit programming. ML in construction predicts delays, optimizes schedules, and identifies risks based on historical project data.",
    category: "AI & Machine Learning",
    relatedTerms: ["Deep Learning", "Predictive Analytics"],
  },
  {
    term: "Natural Language Processing (NLP)",
    definition: "AI technology that enables computers to understand, interpret, and generate human language. NLP powers features like intelligent search, document summarization, and automated email parsing in construction software.",
    category: "AI & Machine Learning",
    relatedTerms: ["Semantic Search", "Text Analytics"],
  },
  {
    term: "Neural Network",
    definition: "A computing system inspired by biological neural networks that forms the foundation of deep learning. Neural networks enable construction AI to recognize patterns in project data and make predictions.",
    category: "AI & Machine Learning",
    relatedTerms: ["Deep Learning", "Pattern Recognition"],
  },
  {
    term: "Predictive Analytics",
    definition: "The use of data, statistical algorithms, and machine learning to identify the likelihood of future outcomes based on historical data. In construction, predictive analytics forecasts schedule delays, cost overruns, and safety incidents.",
    category: "AI & Machine Learning",
    relatedTerms: ["Machine Learning", "Risk Prediction"],
  },
  {
    term: "Prescriptive Analytics",
    definition: "Advanced analytics that not only predicts outcomes but also recommends actions to achieve desired results. Prescriptive analytics in construction suggests optimal resource allocation, schedule adjustments, and risk mitigation strategies.",
    category: "AI & Machine Learning",
    relatedTerms: ["Predictive Analytics", "Decision Support"],
  },
  {
    term: "Generative AI",
    definition: "AI systems that can create new content including text, images, and code based on training data. In construction, generative AI can draft specifications, create design variations, and automate report writing.",
    category: "AI & Machine Learning",
    relatedTerms: ["Large Language Models", "AI Copilot"],
  },
  {
    term: "Large Language Models (LLM)",
    definition: "AI models trained on vast amounts of text data that can understand and generate human-like text. LLMs power construction AI assistants that answer questions about projects, documents, and procedures.",
    category: "AI & Machine Learning",
    relatedTerms: ["Generative AI", "Natural Language Processing"],
  },
  {
    term: "Anomaly Detection",
    definition: "Machine learning technique that identifies unusual patterns in data that differ from expected behavior. In construction, anomaly detection flags unusual cost patterns, schedule variances, or safety incidents for investigation.",
    category: "AI & Machine Learning",
    relatedTerms: ["Pattern Recognition", "Risk Detection"],
  },
  {
    term: "Sentiment Analysis",
    definition: "NLP technique that determines the emotional tone of text. Construction applications include analyzing stakeholder communications for satisfaction and identifying potential issues from team feedback.",
    category: "AI & Machine Learning",
    relatedTerms: ["Natural Language Processing", "Text Analytics"],
  },
  {
    term: "Reinforcement Learning",
    definition: "Machine learning technique where AI learns optimal behaviors through trial and error. Used in construction for optimizing scheduling decisions and resource allocation over time.",
    category: "AI & Machine Learning",
    relatedTerms: ["Machine Learning", "Optimization"],
  },
  {
    term: "Transfer Learning",
    definition: "AI technique where knowledge from one task is applied to a different but related task. Enables construction AI to apply insights from one project type to another with limited additional training.",
    category: "AI & Machine Learning",
    relatedTerms: ["Machine Learning", "Model Training"],
  },
  {
    term: "Edge AI",
    definition: "AI processing performed on local devices rather than cloud servers. Enables construction jobsite devices to perform AI tasks like safety detection without constant internet connectivity.",
    category: "AI & Machine Learning",
    relatedTerms: ["IoT", "Real-time Processing"],
  },
  {
    term: "Conversational AI",
    definition: "AI technology enabling natural dialogue between humans and computers. Construction workers can ask questions about projects, schedules, or procedures using voice or text interfaces.",
    category: "AI & Machine Learning",
    relatedTerms: ["AI Copilot", "Natural Language Processing"],
  },
  {
    term: "Model Training",
    definition: "The process of teaching machine learning algorithms using historical data. Construction AI is trained on project data including schedules, costs, and outcomes to make accurate predictions.",
    category: "AI & Machine Learning",
    relatedTerms: ["Machine Learning", "Data Quality"],
  },
  {
    term: "AI Ethics",
    definition: "Principles governing responsible AI development and use. In construction, AI ethics ensures fair treatment of workers, transparent decision-making, and protection of sensitive project data.",
    category: "AI & Machine Learning",
    relatedTerms: ["Bias Detection", "Responsible AI"],
  },

  // Construction Technology Terms (20)
  {
    term: "Building Information Modeling (BIM)",
    definition: "A digital representation of physical and functional characteristics of a building. BIM integrates 3D modeling with data to enable better design, construction, and facility management decisions.",
    category: "Construction Technology",
    relatedTerms: ["Digital Twin", "4D/5D BIM"],
  },
  {
    term: "Common Data Environment (CDE)",
    definition: "A single source of information for project data, used to collect, manage, and disseminate documentation. Modern CDEs are evolving from simple file storage to intelligent data platforms enhanced by AI.",
    category: "Construction Technology",
    relatedTerms: ["Document Management", "ISO 19650"],
  },
  {
    term: "Digital Twin",
    definition: "A virtual replica of a physical asset that is updated in real-time with sensor data and other information. Digital twins enable construction teams to monitor, simulate, and optimize building performance.",
    category: "Construction Technology",
    relatedTerms: ["BIM", "IoT", "Real-time Monitoring"],
  },
  {
    term: "4D BIM",
    definition: "The integration of time/schedule data with 3D BIM models. 4D BIM enables visual simulation of construction sequences and progress tracking against the schedule.",
    category: "Construction Technology",
    relatedTerms: ["BIM", "5D BIM", "Schedule Visualization"],
  },
  {
    term: "5D BIM",
    definition: "The integration of cost data with 4D BIM models. 5D BIM enables real-time cost tracking, budget forecasting, and cost impact analysis for design changes.",
    category: "Construction Technology",
    relatedTerms: ["4D BIM", "Cost Management"],
  },
  {
    term: "IoT (Internet of Things)",
    definition: "A network of connected devices and sensors that collect and exchange data. In construction, IoT enables real-time monitoring of equipment, environmental conditions, and worker safety.",
    category: "Construction Technology",
    relatedTerms: ["Sensors", "Real-time Monitoring", "Smart Buildings"],
  },
  {
    term: "Laser Scanning (LiDAR)",
    definition: "Technology that uses laser pulses to measure distances and create precise 3D representations. In construction, laser scanning captures as-built conditions and monitors progress against BIM models.",
    category: "Construction Technology",
    relatedTerms: ["Point Cloud", "Reality Capture"],
  },
  {
    term: "Point Cloud",
    definition: "A set of data points in 3D space representing the external surface of an object. Point clouds generated from laser scanning or photogrammetry are used to verify construction accuracy against design.",
    category: "Construction Technology",
    relatedTerms: ["Laser Scanning", "BIM"],
  },
  {
    term: "Reality Capture",
    definition: "Technologies that create digital representations of physical environments. Includes drones, 360-degree cameras, and laser scanners used to document construction progress.",
    category: "Construction Technology",
    relatedTerms: ["Point Cloud", "Progress Monitoring"],
  },
  {
    term: "Drone Technology",
    definition: "Unmanned aerial vehicles used for site surveys, progress monitoring, and safety inspections. AI-enhanced drones can automatically fly routes and identify issues from captured imagery.",
    category: "Construction Technology",
    relatedTerms: ["Reality Capture", "Site Survey"],
  },
  {
    term: "Augmented Reality (AR)",
    definition: "Technology that overlays digital information on the real world. Construction AR applications include visualizing BIM models on site, displaying hidden utilities, and guided installation.",
    category: "Construction Technology",
    relatedTerms: ["Virtual Reality", "Mixed Reality"],
  },
  {
    term: "Virtual Reality (VR)",
    definition: "Immersive technology creating completely virtual environments. In construction, VR is used for design review, safety training, and client walkthroughs before construction begins.",
    category: "Construction Technology",
    relatedTerms: ["Augmented Reality", "BIM Visualization"],
  },
  {
    term: "Mixed Reality (XR)",
    definition: "Technology combining elements of both AR and VR. Enables construction workers to interact with virtual objects placed in real environments for planning and training.",
    category: "Construction Technology",
    relatedTerms: ["Augmented Reality", "Virtual Reality"],
  },
  {
    term: "Wearable Technology",
    definition: "Smart devices worn by workers including safety vests, hard hats, and watches. Wearables in construction monitor fatigue, proximity to hazards, and environmental conditions.",
    category: "Construction Technology",
    relatedTerms: ["IoT", "Safety Management"],
  },
  {
    term: "Exoskeletons",
    definition: "Wearable robotic devices that support and augment worker movements. Construction exoskeletons reduce strain from repetitive tasks like overhead work or heavy lifting.",
    category: "Construction Technology",
    relatedTerms: ["Wearable Technology", "Ergonomics"],
  },
  {
    term: "3D Printing (Additive Manufacturing)",
    definition: "Technology that creates three-dimensional objects by depositing materials layer by layer. Construction 3D printing can create building components or even entire structures.",
    category: "Construction Technology",
    relatedTerms: ["Prefabrication", "Advanced Materials"],
  },
  {
    term: "Modular Construction",
    definition: "Building method where sections (modules) are constructed off-site in controlled factory conditions, then assembled on-site. Reduces weather delays and improves quality control.",
    category: "Construction Technology",
    relatedTerms: ["Prefabrication", "Off-site Construction"],
  },
  {
    term: "Prefabrication",
    definition: "Manufacturing building components in a factory setting before transporting to the construction site. AI optimizes prefab scheduling, logistics, and installation sequences.",
    category: "Construction Technology",
    relatedTerms: ["Modular Construction", "DfMA"],
  },
  {
    term: "Design for Manufacturing and Assembly (DfMA)",
    definition: "Design approach that considers manufacturing and assembly requirements from the outset. Reduces construction time and improves quality by simplifying on-site assembly.",
    category: "Construction Technology",
    relatedTerms: ["Prefabrication", "Lean Construction"],
  },
  {
    term: "Robotics in Construction",
    definition: "Automated machines performing construction tasks including bricklaying, welding, demolition, and material handling. AI enables robots to adapt to jobsite conditions.",
    category: "Construction Technology",
    relatedTerms: ["Automation", "Exoskeletons"],
  },

  // Project Management Terms (25)
  {
    term: "AI-Driven Construction Scheduling",
    definition: "The use of artificial intelligence to optimize construction schedules by analyzing historical data, resource availability, weather patterns, and task dependencies. AI scheduling predicts delays and suggests optimizations automatically.",
    category: "Project Management",
    relatedTerms: ["Critical Path Method", "Resource Leveling"],
  },
  {
    term: "Critical Path Method (CPM)",
    definition: "A project management technique for identifying the longest sequence of dependent tasks. AI enhances CPM by predicting which activities are likely to become critical and recommending preventive actions.",
    category: "Project Management",
    relatedTerms: ["Schedule Management", "Float Analysis"],
  },
  {
    term: "Earned Value Management (EVM)",
    definition: "A methodology combining scope, schedule, and cost measurements to assess project performance. AI-enhanced EVM provides predictive forecasts of final cost and completion date.",
    category: "Project Management",
    relatedTerms: ["Cost Performance Index", "Schedule Performance Index"],
  },
  {
    term: "Predictive Delay Analysis",
    definition: "AI-powered forecasting of schedule delays weeks or months before they occur. By analyzing patterns in project data, predictive delay analysis enables proactive intervention to keep projects on track.",
    category: "Project Management",
    relatedTerms: ["Predictive Analytics", "Schedule Risk"],
  },
  {
    term: "Resource Optimization",
    definition: "The process of allocating resources (labor, equipment, materials) to maximize efficiency and minimize waste. AI resource optimization considers multiple constraints and scenarios simultaneously.",
    category: "Project Management",
    relatedTerms: ["Resource Leveling", "Workforce Planning"],
  },
  {
    term: "Risk Scoring",
    definition: "The automated assessment and quantification of project risks based on multiple factors. AI risk scoring continuously evaluates project health and prioritizes risks requiring attention.",
    category: "Project Management",
    relatedTerms: ["Risk Management", "Risk Register"],
  },
  {
    term: "Request for Information (RFI)",
    definition: "A formal document used to request clarification or additional information about plans, specifications, or contracts. AI can auto-route RFIs, suggest answers from historical data, and track response times.",
    category: "Project Management",
    relatedTerms: ["Submittal", "Document Control"],
  },
  {
    term: "Submittal",
    definition: "A document or sample submitted by a contractor to verify that materials and equipment meet design requirements. Submittal management software automates review workflows and tracks approvals.",
    category: "Project Management",
    relatedTerms: ["RFI", "Approval Workflow"],
  },
  {
    term: "Change Order",
    definition: "A formal document that modifies the original contract scope, cost, or schedule. AI helps identify potential change order impacts and automates cost impact calculations.",
    category: "Project Management",
    relatedTerms: ["Contract Management", "Cost Management"],
  },
  {
    term: "Punch List",
    definition: "A list of work items that need to be completed or corrected before a project is considered finished. Mobile-enabled punch list software streamlines documentation and closeout.",
    category: "Project Management",
    relatedTerms: ["Project Closeout", "Quality Control"],
  },
  {
    term: "Daily Report (Daily Log)",
    definition: "A daily record of construction activities, weather, manpower, equipment, and events on a jobsite. Digital daily reports enable real-time data collection and automated rollups.",
    category: "Project Management",
    relatedTerms: ["Field Documentation", "Progress Tracking"],
  },
  {
    term: "Work Breakdown Structure (WBS)",
    definition: "A hierarchical decomposition of project deliverables into smaller, manageable components. WBS provides the foundation for schedule development and cost tracking.",
    category: "Project Management",
    relatedTerms: ["Scheduling", "Cost Control"],
  },
  {
    term: "Gantt Chart",
    definition: "A visual representation of a project schedule showing tasks, durations, and dependencies over time. AI-enhanced Gantt charts highlight predicted delays and critical paths.",
    category: "Project Management",
    relatedTerms: ["Scheduling", "Critical Path Method"],
  },
  {
    term: "Float (Slack)",
    definition: "The amount of time a task can be delayed without affecting the project completion date. AI predicts float erosion and alerts when activities approach criticality.",
    category: "Project Management",
    relatedTerms: ["Critical Path Method", "Schedule Analysis"],
  },
  {
    term: "Resource Leveling",
    definition: "Adjusting task start and end dates to balance resource demand with availability. AI automates resource leveling while considering multiple constraints and priorities.",
    category: "Project Management",
    relatedTerms: ["Resource Optimization", "Scheduling"],
  },
  {
    term: "Look-Ahead Schedule",
    definition: "A short-term (typically 2-6 week) schedule used for detailed planning and coordination. AI suggests optimizations and identifies potential conflicts in look-ahead periods.",
    category: "Project Management",
    relatedTerms: ["Short-Interval Planning", "Last Planner System"],
  },
  {
    term: "Last Planner System (LPS)",
    definition: "A collaborative planning methodology that involves those who do the work in planning the work. Software supports LPS by tracking commitments and analyzing plan reliability.",
    category: "Project Management",
    relatedTerms: ["Lean Construction", "Pull Planning"],
  },
  {
    term: "Percent Plan Complete (PPC)",
    definition: "A metric measuring the percentage of planned tasks completed as promised. AI analyzes PPC trends to identify systemic issues and predict future performance.",
    category: "Project Management",
    relatedTerms: ["Last Planner System", "KPIs"],
  },
  {
    term: "Design-Build",
    definition: "A project delivery method where design and construction services are contracted from a single entity. Integrated software platforms support collaboration in design-build projects.",
    category: "Project Management",
    relatedTerms: ["Project Delivery", "IPD"],
  },
  {
    term: "Integrated Project Delivery (IPD)",
    definition: "A collaborative project delivery approach aligning interests of owner, designer, and contractor. Shared data platforms and transparent metrics support IPD agreements.",
    category: "Project Management",
    relatedTerms: ["Design-Build", "Collaboration"],
  },
  {
    term: "Construction Manager at Risk (CMAR)",
    definition: "A delivery method where the construction manager provides a guaranteed maximum price. Real-time cost tracking and predictive analytics support CMAR risk management.",
    category: "Project Management",
    relatedTerms: ["GMP", "Project Delivery"],
  },
  {
    term: "Guaranteed Maximum Price (GMP)",
    definition: "A contractual ceiling on project costs that the contractor cannot exceed. AI cost forecasting helps maintain GMP by identifying potential overruns early.",
    category: "Project Management",
    relatedTerms: ["CMAR", "Cost Management"],
  },
  {
    term: "Baseline Schedule",
    definition: "The approved project schedule used as a reference for measuring performance. Variance analysis compares current progress against the baseline.",
    category: "Project Management",
    relatedTerms: ["Schedule Comparison", "Progress Tracking"],
  },
  {
    term: "Schedule Compression",
    definition: "Techniques like crashing or fast-tracking to shorten the project duration. AI evaluates compression options and their cost/risk implications.",
    category: "Project Management",
    relatedTerms: ["Crashing", "Fast-Tracking"],
  },
  {
    term: "Three-Week Look-Ahead",
    definition: "A rolling short-term schedule showing activities planned for the next three weeks. Used for detailed coordination between trades and procurement.",
    category: "Project Management",
    relatedTerms: ["Look-Ahead Schedule", "Coordination"],
  },

  // Data & Analytics Terms (15)
  {
    term: "AECO Data Fabric",
    definition: "A unified architecture that connects and integrates data across the Architecture, Engineering, Construction, and Operations lifecycle. Data fabric enables holistic insights by breaking down data silos.",
    category: "Data & Analytics",
    relatedTerms: ["Data Integration", "Unified Data Platform"],
  },
  {
    term: "Data Lake",
    definition: "A storage repository that holds vast amounts of raw data in native format until needed. Construction data lakes enable AI systems to analyze diverse project data for insights and predictions.",
    category: "Data & Analytics",
    relatedTerms: ["Data Warehouse", "Big Data"],
  },
  {
    term: "Semantic Search",
    definition: "Search technology that understands the intent and contextual meaning of queries rather than just matching keywords. Semantic search in construction helps users find relevant documents even with imprecise search terms.",
    category: "Data & Analytics",
    relatedTerms: ["Natural Language Processing", "Knowledge Graph"],
  },
  {
    term: "System of Intelligence",
    definition: "A platform that goes beyond storing data (System of Record) to actively analyze, predict, and recommend actions. Systems of Intelligence use AI to transform construction data into actionable insights.",
    category: "Data & Analytics",
    relatedTerms: ["System of Record", "Predictive Analytics"],
  },
  {
    term: "System of Record",
    definition: "A data management system that serves as the authoritative source for a particular data element. Traditional construction software operates as systems of record, storing historical project data.",
    category: "Data & Analytics",
    relatedTerms: ["System of Intelligence", "Data Management"],
  },
  {
    term: "Business Intelligence (BI)",
    definition: "Technologies and practices for collecting, integrating, analyzing, and presenting business information. Construction BI tools provide dashboards and reports on project and portfolio performance.",
    category: "Data & Analytics",
    relatedTerms: ["Dashboards", "Reporting"],
  },
  {
    term: "Key Performance Indicator (KPI)",
    definition: "A measurable value demonstrating how effectively objectives are being achieved. Construction KPIs include schedule variance, cost performance, safety incident rates, and quality metrics.",
    category: "Data & Analytics",
    relatedTerms: ["Metrics", "Performance Management"],
  },
  {
    term: "Data Visualization",
    definition: "The graphical representation of data to communicate information clearly and efficiently. Construction data visualization includes Gantt charts, cost graphs, and progress dashboards.",
    category: "Data & Analytics",
    relatedTerms: ["Dashboards", "Reporting"],
  },
  {
    term: "ETL (Extract, Transform, Load)",
    definition: "The process of extracting data from sources, transforming it to fit operational needs, and loading it into a destination database. ETL enables integration of data from multiple construction systems.",
    category: "Data & Analytics",
    relatedTerms: ["Data Integration", "Data Pipeline"],
  },
  {
    term: "API (Application Programming Interface)",
    definition: "A set of protocols enabling software applications to communicate with each other. APIs allow construction software to exchange data with accounting, ERP, and other business systems.",
    category: "Data & Analytics",
    relatedTerms: ["Integration", "Data Exchange"],
  },
  {
    term: "Data Governance",
    definition: "The overall management of data availability, usability, integrity, and security. Construction data governance ensures accurate project records and regulatory compliance.",
    category: "Data & Analytics",
    relatedTerms: ["Data Quality", "Compliance"],
  },
  {
    term: "Data Quality",
    definition: "The condition of data based on factors like accuracy, completeness, consistency, and timeliness. High data quality is essential for AI predictions and reliable reporting.",
    category: "Data & Analytics",
    relatedTerms: ["Data Governance", "Master Data"],
  },
  {
    term: "Benchmark",
    definition: "A standard or reference point against which things may be compared or assessed. Construction benchmarks compare project performance against industry standards or historical data.",
    category: "Data & Analytics",
    relatedTerms: ["KPIs", "Performance Analysis"],
  },
  {
    term: "Real-time Analytics",
    definition: "Analysis performed on data as it becomes available, enabling immediate insights. Real-time construction analytics provide instant visibility into project status and emerging issues.",
    category: "Data & Analytics",
    relatedTerms: ["Streaming Data", "Live Dashboards"],
  },
  {
    term: "Historical Data Analysis",
    definition: "Analysis of past project data to identify patterns and inform future decisions. AI uses historical construction data to train predictive models and establish benchmarks.",
    category: "Data & Analytics",
    relatedTerms: ["Trend Analysis", "Lessons Learned"],
  },

  // Automation Terms (10)
  {
    term: "Intelligent Automation",
    definition: "The combination of AI with automation to perform complex tasks that require human-like judgment. Intelligent automation in construction handles document approvals, risk assessments, and communication workflows.",
    category: "Automation",
    relatedTerms: ["RPA", "Workflow Automation"],
  },
  {
    term: "RPA (Robotic Process Automation)",
    definition: "Software robots that automate repetitive, rule-based tasks. In construction, RPA handles data entry, report generation, and system integrations without human intervention.",
    category: "Automation",
    relatedTerms: ["Intelligent Automation", "Process Automation"],
  },
  {
    term: "Workflow Automation",
    definition: "The design, execution, and automation of business processes. AI-enhanced workflow automation in construction learns from patterns to suggest and implement process improvements.",
    category: "Automation",
    relatedTerms: ["Business Process Management", "RPA"],
  },
  {
    term: "Document Automation",
    definition: "Using technology to create, assemble, and manage documents with minimal manual effort. Construction document automation generates contracts, submittals, and reports from templates.",
    category: "Automation",
    relatedTerms: ["Template Management", "IDP"],
  },
  {
    term: "Automated Notifications",
    definition: "System-generated alerts triggered by events, conditions, or time-based rules. Construction software sends automated notifications for task deadlines, approvals, and risk thresholds.",
    category: "Automation",
    relatedTerms: ["Alerts", "Workflow Triggers"],
  },
  {
    term: "Self-Service Analytics",
    definition: "Tools that enable users to access and analyze data without IT assistance. Construction managers can create custom reports and dashboards without technical expertise.",
    category: "Automation",
    relatedTerms: ["Business Intelligence", "Dashboards"],
  },
  {
    term: "No-Code/Low-Code",
    definition: "Development approaches requiring minimal traditional programming. Construction teams can customize forms, workflows, and reports without developer resources.",
    category: "Automation",
    relatedTerms: ["Customization", "Configuration"],
  },
  {
    term: "Integration Platform as a Service (iPaaS)",
    definition: "Cloud-based platforms connecting applications, data, and processes. iPaaS enables construction software to integrate with accounting, ERP, and other business systems.",
    category: "Automation",
    relatedTerms: ["API", "Integration"],
  },
  {
    term: "Batch Processing",
    definition: "Processing groups of transactions together rather than individually. Construction batch processing handles bulk document uploads, mass updates, and scheduled reports.",
    category: "Automation",
    relatedTerms: ["Data Processing", "Scheduled Tasks"],
  },
  {
    term: "Event-Driven Architecture",
    definition: "Software design where actions are triggered by events rather than scheduled processes. Real-time construction updates are enabled by event-driven systems.",
    category: "Automation",
    relatedTerms: ["Real-time Processing", "Webhooks"],
  },

  // Contract & Legal Terms (15)
  {
    term: "AIA Contract Documents",
    definition: "Standardized contract forms published by the American Institute of Architects. AIA documents are widely used in construction and supported by contract management software.",
    category: "Contract & Legal",
    relatedTerms: ["ConsensusDocs", "Contract Management"],
  },
  {
    term: "ConsensusDocs",
    definition: "Consensus-based standard contracts developed by multiple construction industry associations. An alternative to AIA contracts with different risk allocations.",
    category: "Contract & Legal",
    relatedTerms: ["AIA Contract Documents", "Contract Management"],
  },
  {
    term: "Lien Waiver",
    definition: "A document waiving the right to file a mechanic's lien in exchange for payment. Digital lien waiver management automates collection and tracks compliance.",
    category: "Contract & Legal",
    relatedTerms: ["Mechanic's Lien", "Payment Applications"],
  },
  {
    term: "Mechanic's Lien",
    definition: "A legal claim against a property by contractors or suppliers who provided labor or materials. Lien tracking software monitors deadlines and compliance requirements.",
    category: "Contract & Legal",
    relatedTerms: ["Lien Waiver", "Payment Protection"],
  },
  {
    term: "Payment Application",
    definition: "A formal request for payment submitted by a contractor to the owner or client. Digital payment applications integrate with cost systems and streamline approval workflows.",
    category: "Contract & Legal",
    relatedTerms: ["Schedule of Values", "Progress Billing"],
  },
  {
    term: "Schedule of Values (SOV)",
    definition: "A detailed breakdown of contract costs used for progress billing. AI can analyze SOV against actual costs to identify front-loading or scheduling issues.",
    category: "Contract & Legal",
    relatedTerms: ["Payment Application", "Cost Breakdown"],
  },
  {
    term: "Retainage",
    definition: "A portion of payment withheld until project completion to ensure contractor performance. Software tracks retainage amounts and release schedules.",
    category: "Contract & Legal",
    relatedTerms: ["Payment Application", "Contract Terms"],
  },
  {
    term: "Notice to Proceed (NTP)",
    definition: "A written notice authorizing the contractor to begin work. Contract management systems track NTP dates and calculate schedule implications.",
    category: "Contract & Legal",
    relatedTerms: ["Contract Administration", "Schedule"],
  },
  {
    term: "Certificate of Substantial Completion",
    definition: "A document certifying that work is sufficiently complete for owner occupancy. Digital closeout management tracks substantial completion documentation.",
    category: "Contract & Legal",
    relatedTerms: ["Project Closeout", "Final Completion"],
  },
  {
    term: "Liquidated Damages",
    definition: "Pre-agreed damages payable if contract terms (usually schedule) are not met. Schedule management software helps avoid liquidated damages by predicting delays.",
    category: "Contract & Legal",
    relatedTerms: ["Contract Terms", "Schedule Risk"],
  },
  {
    term: "Bonds (Performance/Payment)",
    definition: "Financial guarantees ensuring contractor performance and payment to subcontractors and suppliers. Bond management software tracks bond amounts and expiration dates.",
    category: "Contract & Legal",
    relatedTerms: ["Insurance", "Risk Management"],
  },
  {
    term: "Indemnification",
    definition: "A contractual agreement to compensate for loss or damage. Contract analysis tools help identify indemnification clauses and their implications.",
    category: "Contract & Legal",
    relatedTerms: ["Liability", "Contract Review"],
  },
  {
    term: "Force Majeure",
    definition: "Contract clause excusing parties from performance due to extraordinary events. AI can help track and document force majeure events for claims.",
    category: "Contract & Legal",
    relatedTerms: ["Contract Terms", "Claims"],
  },
  {
    term: "As-Built Documentation",
    definition: "Records showing how a project was actually constructed, including any deviations from original plans. Digital as-built management ensures accurate facility records.",
    category: "Contract & Legal",
    relatedTerms: ["Project Closeout", "Record Drawings"],
  },
  {
    term: "Warranty Period",
    definition: "The time period during which a contractor is responsible for correcting defective work. Warranty management software tracks items and expiration dates.",
    category: "Contract & Legal",
    relatedTerms: ["Project Closeout", "Defects"],
  },

  // Safety & Compliance Terms (10)
  {
    term: "OSHA (Occupational Safety and Health Administration)",
    definition: "U.S. federal agency responsible for workplace safety regulations. Construction safety software helps ensure OSHA compliance through inspections, training tracking, and incident reporting.",
    category: "Safety & Compliance",
    relatedTerms: ["Safety Management", "Compliance"],
  },
  {
    term: "Toolbox Talk",
    definition: "A short safety meeting held at the start of work to address specific hazards. Digital toolbox talks enable documentation, attendance tracking, and topic management.",
    category: "Safety & Compliance",
    relatedTerms: ["Safety Training", "Safety Meetings"],
  },
  {
    term: "Job Hazard Analysis (JHA)",
    definition: "A technique to identify hazards associated with each step of a job. AI can suggest common hazards based on activity types and historical incidents.",
    category: "Safety & Compliance",
    relatedTerms: ["Risk Assessment", "Safety Planning"],
  },
  {
    term: "ICRA (Infection Control Risk Assessment)",
    definition: "A mandatory assessment for construction in healthcare facilities. ICRA software tracks classifications, barriers, and compliance with infection control requirements.",
    category: "Safety & Compliance",
    relatedTerms: ["Healthcare Construction", "Compliance"],
  },
  {
    term: "ILSM (Interim Life Safety Measures)",
    definition: "Temporary measures maintaining fire and life safety during construction that impacts safety systems. Software tracks ILSM requirements and impairment notifications.",
    category: "Safety & Compliance",
    relatedTerms: ["Healthcare Construction", "Fire Safety"],
  },
  {
    term: "Near Miss",
    definition: "An unplanned event that did not result in injury but had the potential to do so. Near miss reporting and analysis helps prevent future incidents.",
    category: "Safety & Compliance",
    relatedTerms: ["Incident Reporting", "Safety Culture"],
  },
  {
    term: "Incident Rate (TRIR/DART)",
    definition: "Metrics measuring the frequency of workplace injuries. TRIR (Total Recordable Incident Rate) and DART (Days Away, Restricted, or Transferred) are key safety KPIs.",
    category: "Safety & Compliance",
    relatedTerms: ["Safety Metrics", "OSHA"],
  },
  {
    term: "Pre-Task Planning (PTP)",
    definition: "A safety planning process conducted before starting work. Digital PTP forms ensure consistent documentation and hazard identification.",
    category: "Safety & Compliance",
    relatedTerms: ["JHA", "Safety Planning"],
  },
  {
    term: "Safety Data Sheet (SDS)",
    definition: "Documents providing information about hazardous chemicals. Digital SDS management ensures access to current safety information on jobsites.",
    category: "Safety & Compliance",
    relatedTerms: ["Hazardous Materials", "OSHA"],
  },
  {
    term: "PPE (Personal Protective Equipment)",
    definition: "Equipment worn to minimize exposure to hazards. PPE tracking software monitors compliance, inventory, and inspection schedules.",
    category: "Safety & Compliance",
    relatedTerms: ["Safety Compliance", "Wearables"],
  },
];

export const categories = [
  "All",
  "AI & Machine Learning",
  "Construction Technology",
  "Project Management",
  "Data & Analytics",
  "Automation",
  "Contract & Legal",
  "Safety & Compliance",
];

export default glossaryTerms;
