export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  benefits: string[];
  specifications: {
    accuracy: string;
    processing: string;
    integration: string;
    scalability: string;
  };
  useCases: string[];
  pricing?: {
    tier: string;
    price: string;
  };
}

export interface FeatureCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const featureCategories: FeatureCategory[] = [
  {
    id: "ai-analytics",
    name: "AI Analytics & Intelligence",
    description: "Advanced AI-powered analytics for predictive insights and intelligent decision making",
    icon: "🧠",
    color: "bg-gradient-to-r from-purple-500 to-indigo-600"
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "Comprehensive project planning, tracking, and resource optimization tools",
    icon: "📊",
    color: "bg-gradient-to-r from-blue-500 to-cyan-600"
  },
  {
    id: "automation",
    name: "Process Automation",
    description: "Intelligent automation workflows to streamline operations and reduce manual tasks",
    icon: "⚡",
    color: "bg-gradient-to-r from-yellow-500 to-orange-600"
  },
  {
    id: "collaboration",
    name: "Team Collaboration",
    description: "Real-time collaboration tools for seamless team communication and coordination",
    icon: "👥",
    color: "bg-gradient-to-r from-green-500 to-teal-600"
  },
  {
    id: "monitoring",
    name: "Real-time Monitoring",
    description: "Live monitoring and tracking systems with instant alerts and notifications",
    icon: "📡",
    color: "bg-gradient-to-r from-red-500 to-pink-600"
  },
  {
    id: "integration",
    name: "Enterprise Integration",
    description: "Seamless integration with existing enterprise systems and third-party tools",
    icon: "🔗",
    color: "bg-gradient-to-r from-gray-500 to-slate-600"
  }
];

export const platformFeatures: Feature[] = [
  // AI Analytics & Intelligence
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Engine",
    description: "Advanced machine learning algorithms that analyze historical data patterns to predict project delays, cost overruns, and resource bottlenecks before they occur.",
    icon: "🔮",
    category: "ai-analytics",
    benefits: [
      "Reduce project delays by up to 35%",
      "Prevent cost overruns through early detection",
      "Optimize resource allocation with predictive insights",
      "Improve decision-making with data-driven forecasts"
    ],
    specifications: {
      accuracy: "94% prediction accuracy",
      processing: "Real-time analysis",
      integration: "API-first architecture",
      scalability: "Handles 10M+ data points"
    },
    useCases: [
      "Construction project timeline prediction",
      "Equipment maintenance scheduling",
      "Budget variance forecasting",
      "Risk assessment and mitigation"
    ],
    pricing: {
      tier: "Professional",
      price: "$299/month"
    }
  },
  {
    id: "intelligent-insights",
    title: "AI-Powered Business Intelligence",
    description: "Comprehensive business intelligence platform that transforms raw construction data into actionable insights through advanced AI algorithms and natural language processing.",
    icon: "💡",
    category: "ai-analytics",
    benefits: [
      "Generate automated reports in seconds",
      "Identify hidden patterns in project data",
      "Natural language query interface",
      "Custom dashboard creation with AI assistance"
    ],
    specifications: {
      accuracy: "99.2% data processing accuracy",
      processing: "Sub-second query response",
      integration: "200+ pre-built connectors",
      scalability: "Enterprise-grade infrastructure"
    },
    useCases: [
      "Executive dashboard creation",
      "Performance benchmarking",
      "Trend analysis and reporting",
      "Compliance monitoring"
    ]
  },
  {
    id: "risk-assessment",
    title: "Intelligent Risk Assessment",
    description: "AI-driven risk assessment system that continuously monitors project variables and environmental factors to identify potential risks and recommend mitigation strategies.",
    icon: "⚠️",
    category: "ai-analytics",
    benefits: [
      "Early risk identification and alerts",
      "Automated risk scoring and prioritization",
      "Mitigation strategy recommendations",
      "Compliance risk monitoring"
    ],
    specifications: {
      accuracy: "96% risk prediction accuracy",
      processing: "Continuous monitoring",
      integration: "IoT sensor integration",
      scalability: "Multi-project support"
    },
    useCases: [
      "Safety risk assessment",
      "Financial risk monitoring",
      "Weather impact analysis",
      "Regulatory compliance tracking"
    ]
  },

  // Project Management
  {
    id: "smart-scheduling",
    title: "AI-Optimized Project Scheduling",
    description: "Intelligent scheduling system that automatically optimizes project timelines, resource allocation, and task dependencies using advanced algorithms and real-time data.",
    icon: "📅",
    category: "project-management",
    benefits: [
      "Automatic schedule optimization",
      "Resource conflict resolution",
      "Critical path analysis",
      "Dynamic timeline adjustments"
    ],
    specifications: {
      accuracy: "98% schedule optimization",
      processing: "Real-time updates",
      integration: "Calendar and ERP sync",
      scalability: "Unlimited projects"
    },
    useCases: [
      "Multi-project coordination",
      "Resource leveling",
      "Milestone tracking",
      "Dependency management"
    ],
    pricing: {
      tier: "Standard",
      price: "$199/month"
    }
  },
  {
    id: "resource-optimization",
    title: "Dynamic Resource Management",
    description: "Advanced resource management system that tracks, allocates, and optimizes human resources, equipment, and materials across multiple projects in real-time.",
    icon: "🏗️",
    category: "project-management",
    benefits: [
      "Optimal resource utilization",
      "Cost reduction through efficiency",
      "Real-time availability tracking",
      "Automated allocation suggestions"
    ],
    specifications: {
      accuracy: "95% utilization optimization",
      processing: "Live resource tracking",
      integration: "HR and inventory systems",
      scalability: "10,000+ resources"
    },
    useCases: [
      "Equipment scheduling",
      "Workforce planning",
      "Material procurement",
      "Subcontractor management"
    ]
  },
  {
    id: "budget-control",
    title: "Intelligent Budget Control",
    description: "Comprehensive financial management system with AI-powered cost tracking, budget forecasting, and automated expense categorization for complete project financial control.",
    icon: "💰",
    category: "project-management",
    benefits: [
      "Real-time budget tracking",
      "Automated expense categorization",
      "Cost variance analysis",
      "Financial forecasting"
    ],
    specifications: {
      accuracy: "99.5% financial tracking",
      processing: "Real-time calculations",
      integration: "Accounting software sync",
      scalability: "Multi-currency support"
    },
    useCases: [
      "Project cost control",
      "Invoice management",
      "Profit margin analysis",
      "Financial reporting"
    ]
  },

  // Process Automation
  {
    id: "workflow-automation",
    title: "Intelligent Workflow Automation",
    description: "No-code workflow automation platform that streamlines repetitive tasks, automates approval processes, and creates intelligent business process flows.",
    icon: "🔄",
    category: "automation",
    benefits: [
      "Reduce manual tasks by 80%",
      "Eliminate human errors",
      "Accelerate approval processes",
      "Custom workflow creation"
    ],
    specifications: {
      accuracy: "100% process reliability",
      processing: "Instant trigger response",
      integration: "500+ app integrations",
      scalability: "Unlimited workflows"
    },
    useCases: [
      "Document approval workflows",
      "Quality control processes",
      "Compliance procedures",
      "Notification systems"
    ],
    pricing: {
      tier: "Enterprise",
      price: "$499/month"
    }
  },
  {
    id: "document-processing",
    title: "AI Document Processing",
    description: "Advanced document processing system using OCR, NLP, and machine learning to automatically extract, categorize, and process construction documents and contracts.",
    icon: "📄",
    category: "automation",
    benefits: [
      "Automated data extraction",
      "Document classification",
      "Contract analysis",
      "Compliance verification"
    ],
    specifications: {
      accuracy: "97% text recognition",
      processing: "Batch processing capable",
      integration: "Cloud storage sync",
      scalability: "1000+ documents/hour"
    },
    useCases: [
      "Contract management",
      "Invoice processing",
      "Permit documentation",
      "Quality certificates"
    ]
  },
  {
    id: "quality-automation",
    title: "Automated Quality Assurance",
    description: "AI-powered quality control system that automatically monitors construction progress, identifies defects, and ensures compliance with quality standards through image recognition and sensor data.",
    icon: "✅",
    category: "automation",
    benefits: [
      "Automated defect detection",
      "Quality standard compliance",
      "Progress verification",
      "Inspection scheduling"
    ],
    specifications: {
      accuracy: "93% defect detection",
      processing: "Real-time analysis",
      integration: "Camera and IoT sensors",
      scalability: "Multi-site monitoring"
    },
    useCases: [
      "Construction progress tracking",
      "Safety compliance monitoring",
      "Material quality verification",
      "Final inspection automation"
    ]
  },

  // Team Collaboration
  {
    id: "real-time-collaboration",
    title: "Real-Time Team Collaboration",
    description: "Comprehensive collaboration platform with instant messaging, video conferencing, file sharing, and real-time document collaboration for distributed construction teams.",
    icon: "💬",
    category: "collaboration",
    benefits: [
      "Instant team communication",
      "Real-time document editing",
      "Video conferencing integration",
      "Mobile-first design"
    ],
    specifications: {
      accuracy: "99.9% message delivery",
      processing: "Instant synchronization",
      integration: "Microsoft Teams, Slack",
      scalability: "Unlimited team members"
    },
    useCases: [
      "Daily standup meetings",
      "Design review sessions",
      "Emergency communications",
      "Progress updates"
    ],
    pricing: {
      tier: "Team",
      price: "$99/month"
    }
  },
  {
    id: "knowledge-management",
    title: "AI-Powered Knowledge Base",
    description: "Intelligent knowledge management system that captures, organizes, and makes construction expertise searchable through natural language processing and machine learning.",
    icon: "📚",
    category: "collaboration",
    benefits: [
      "Centralized knowledge repository",
      "AI-powered search",
      "Best practices sharing",
      "Expert knowledge capture"
    ],
    specifications: {
      accuracy: "95% search relevance",
      processing: "Instant search results",
      integration: "Document management systems",
      scalability: "Unlimited content storage"
    },
    useCases: [
      "Technical documentation",
      "Troubleshooting guides",
      "Training materials",
      "Regulatory information"
    ]
  },
  {
    id: "stakeholder-portal",
    title: "Client & Stakeholder Portal",
    description: "Dedicated portal for clients and stakeholders to track project progress, access documents, communicate with teams, and receive automated updates on project milestones.",
    icon: "🏢",
    category: "collaboration",
    benefits: [
      "Transparent project visibility",
      "Automated progress reports",
      "Secure document access",
      "Stakeholder engagement tracking"
    ],
    specifications: {
      accuracy: "Real-time data sync",
      processing: "Instant updates",
      integration: "CRM and project systems",
      scalability: "Multi-tenant architecture"
    },
    useCases: [
      "Client progress reporting",
      "Investor updates",
      "Regulatory submissions",
      "Public project transparency"
    ]
  },

  // Real-time Monitoring
  {
    id: "iot-monitoring",
    title: "IoT Sensor Network",
    description: "Comprehensive IoT monitoring system that tracks environmental conditions, equipment performance, and safety metrics across construction sites in real-time.",
    icon: "📊",
    category: "monitoring",
    benefits: [
      "Real-time environmental monitoring",
      "Equipment performance tracking",
      "Safety parameter monitoring",
      "Predictive maintenance alerts"
    ],
    specifications: {
      accuracy: "99.8% sensor accuracy",
      processing: "Sub-second data collection",
      integration: "Industrial IoT protocols",
      scalability: "10,000+ sensors per site"
    },
    useCases: [
      "Temperature and humidity monitoring",
      "Equipment vibration analysis",
      "Air quality measurement",
      "Structural health monitoring"
    ],
    pricing: {
      tier: "Professional",
      price: "$399/month"
    }
  },
  {
    id: "safety-monitoring",
    title: "AI Safety Monitoring System",
    description: "Advanced safety monitoring platform using computer vision, wearable sensors, and AI to detect safety violations, monitor worker behavior, and prevent accidents in real-time.",
    icon: "🦺",
    category: "monitoring",
    benefits: [
      "Real-time safety violation detection",
      "Accident prevention alerts",
      "Compliance monitoring",
      "Safety performance analytics"
    ],
    specifications: {
      accuracy: "96% violation detection",
      processing: "Real-time video analysis",
      integration: "Wearable device compatibility",
      scalability: "Multi-site deployment"
    },
    useCases: [
      "PPE compliance monitoring",
      "Hazardous area detection",
      "Worker fatigue monitoring",
      "Emergency response coordination"
    ]
  },
  {
    id: "progress-tracking",
    title: "Automated Progress Tracking",
    description: "AI-powered progress tracking system using drone imagery, 3D modeling, and computer vision to automatically measure and report construction progress against planned schedules.",
    icon: "📈",
    category: "monitoring",
    benefits: [
      "Automated progress measurement",
      "Visual progress documentation",
      "Schedule variance analysis",
      "Milestone achievement tracking"
    ],
    specifications: {
      accuracy: "94% progress accuracy",
      processing: "Daily progress updates",
      integration: "BIM and CAD systems",
      scalability: "Large-scale projects"
    },
    useCases: [
      "Construction milestone tracking",
      "Quality control verification",
      "Client progress reporting",
      "Payment milestone validation"
    ]
  },

  // Enterprise Integration
  {
    id: "erp-integration",
    title: "Enterprise ERP Integration",
    description: "Seamless integration with major ERP systems  to synchronize project data, financials, and resources across the enterprise.",
    icon: "🔗",
    category: "integration",
    benefits: [
      "Unified data ecosystem",
      "Automated data synchronization",

            "Reduced data silos",
      "Enterprise-wide visibility"
    ],
    specifications: {
      accuracy: "99.9% data synchronization",
      processing: "Real-time bi-directional sync",
      integration: "Dynamics 365",
      scalability: "Enterprise-grade performance"
    },
    useCases: [
      "Financial data synchronization",
      "Resource planning integration",
      "Procurement workflow automation",
      "Compliance reporting"
    ],
    pricing: {
      tier: "Enterprise",
      price: "$999/month"
    }
  },
  {
    id: "api-platform",
    title: "Developer API Platform",
    description: "Comprehensive RESTful API platform with GraphQL support, webhooks, and SDKs for custom integrations and third-party application development.",
    icon: "⚙️",
    category: "integration",
    benefits: [
      "Custom integration development",
      "Third-party app connectivity",
      "Webhook event notifications",
      "Comprehensive documentation"
    ],
    specifications: {
      accuracy: "99.99% API uptime",
      processing: "Sub-100ms response time",
      integration: "REST, GraphQL, WebSocket",
      scalability: "Rate limiting & caching"
    },
    useCases: [
      "Custom dashboard development",
      "Mobile app integration",
      "Third-party tool connectivity",
      "Data export automation"
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Scalable Cloud Infrastructure",
    description: "Enterprise-grade cloud infrastructure with auto-scaling, load balancing, and global CDN for optimal performance and reliability across all regions.",
    icon: "☁️",
    category: "integration",
    benefits: [
      "99.99% uptime guarantee",
      "Global performance optimization",
      "Automatic scaling",
      "Enterprise security standards"
    ],
    specifications: {
      accuracy: "Zero data loss guarantee",
      processing: "Auto-scaling capabilities",
      integration: "Multi-cloud deployment",
      scalability: "Unlimited concurrent users"
    },
    useCases: [
      "Global team collaboration",
      "High-traffic project management",
      "Data backup and recovery",
      "Disaster recovery planning"
    ]
  }
];

export const platformStats = {
  totalFeatures: platformFeatures.length,
  categories: featureCategories.length,
  integrations: "200+",
  uptime: "99.99%",
  customers: "10,000+",
  projectsManaged: "50,000+",
  dataProcessed: "1PB+",
  costSavings: "35%"
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Project Director",
    company: "BuildTech Solutions",
    avatar: "/avatars/sarah-johnson.jpg",
    rating: 5,
    content: "Space AI has transformed how we manage our construction projects. The predictive analytics feature alone has saved us over $2M in potential overruns this year.",
    projectSize: "$50M+ Infrastructure Project"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Operations Manager",
    company: "Metro Construction Group",
    avatar: "/avatars/michael-chen.jpg",
    rating: 5,
    content: "The real-time monitoring and IoT integration capabilities are game-changing. We've reduced safety incidents by 60% since implementation.",
    projectSize: "Multi-site Commercial Development"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Chief Technology Officer",
    company: "Smart Build Corp",
    avatar: "/avatars/emily-rodriguez.jpg",
    rating: 5,
    content: "The API platform and enterprise integrations made it seamless to connect with our existing systems. Implementation was smooth and support is exceptional.",
    projectSize: "Enterprise Digital Transformation"
  }
];

export const pricingPlans = [
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom Pricing",
    period: "contact sales",
    description: "For a complete and powerful solution, our enterprise-grade features offer advanced business management and security, customized to meet the unique needs of your company. This plan includes dedicated support, custom integrations, and the highest level of security to ensure your operations run smoothly and securely.",
    features: [
      "Everything in Professional",
      "Full ERP integration",
      "Custom AI models",
      "Dedicated support team",
      "On-premise deployment",
      "Advanced security",
      "Custom training",
      "SLA guarantee",
      "Transformative Use Cases to Solve Real Business Challenges",
      "Common Data Platform",
      "AI Workflow Orchestration",
      "AI-Powered Business Process Automation",
      "Intelligent Document Processing",
      "Space BIM",
      "E-Sign",
      "Designer Workspace",
      "Custom Workstreams",
      "E-Mail Integration",
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
  },
];

export const faqs = [
  {
    id: 10,
    question: "Can we customize the platform for our specific needs?",
    answer: "Yes, **Space AI is highly customizable**. You can create custom workflows, dashboards, reports, and integrations. Enterprise customers can also request custom AI models trained on their specific data and requirements."
  },
  {
    id: 1,
    question: "What is the core problem Space AI solves for the AECO industry?",
    answer: "The Architecture, Engineering, Construction, and Operations (AECO) industry loses an estimated **$1.6 trillion annually** to systemic waste, delays, and productivity challenges. Space AI is the AI-powered operating system designed to predict and prevent these issues, ensuring your projects are delivered on time and on budget."
  },
  {
    id: 2,
    question: "What is the difference between Space AI and other construction software?",
    answer: "Most legacy platforms are 'Systems of Record,' focused on documenting what has already happened. Space AI is a 'System of Intelligence,' which moves beyond simple data storage to actively **synthesize data and predict future outcomes**. We don't just record delays; we use AI to forecast them and provide prescriptive actions to prevent them."
  },
  {
    id: 4,
    question: "What kind of ROI can we expect from Space AI?",
    answer: "Our customers typically see **25-35% reduction in project costs, 40% improvement in timeline adherence, and 60% reduction in safety incidents**. Most organizations achieve full ROI within 6-12 months of implementation by transforming data from a static archive into a dynamic, forward-looking asset."
  },
  {
    id: 5,
    question: "How quickly can we implement Space AI in our existing workflow?",
    answer: "Implementation typically takes **2-4 weeks** depending on your current systems and integration requirements. Our dedicated onboarding team provides step-by-step guidance, data migration assistance, and team training to ensure a smooth transition."
  },
  {
    id: 6,
    question: "Is my project data secure and compliant?",
    answer: "Yes, we maintain enterprise-grade security with **SOC 2 Type II, ISO 27001, and GDPR compliance**. All data is encrypted in transit and at rest, with role-based access controls and regular security audits."
  },
  {
    id: 7,
    question: "Can Space AI integrate with our existing software?",
    answer: "Absolutely. We offer **pre-built integrations with 200+ popular construction and business software. Custom integrations are available through our API platform."
  },
  {
    id: 8,
    question: "What types of construction projects does Space AI support?",
    answer: "Space AI supports all types of construction projects including **residential, commercial, industrial, infrastructure, and specialty construction.** Our platform scales from small renovations to multi-billion dollar infrastructure projects."
  },
  {
    id: 9,
    question: "Do you provide training and support?",
    answer: "Yes, we provide comprehensive training including **live sessions, video tutorials, documentation, and ongoing support**. Enterprise customers receive dedicated account management and 24/7 priority support."
  },
  
];


// Helper functions
export const getFeaturesByCategory = (categoryId: string): Feature[] => {
  return platformFeatures.filter(feature => feature.category === categoryId);
};

export const getFeaturedFeatures = (): Feature[] => {
  return platformFeatures.filter(feature => feature.pricing);
};

export const getCategoryById = (categoryId: string): FeatureCategory | undefined => {
  return featureCategories.find(category => category.id === categoryId);
};

export const getFeatureById = (featureId: string): Feature | undefined => {
  return platformFeatures.find(feature => feature.id === featureId);
};

