// src/lib/competitor-faqs.ts
// Comprehensive FAQ data for all competitor alternative pages
// Each page gets unique, keyword-optimized Q&As for rich snippets

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompetitorFAQs {
  [competitor: string]: FAQItem[];
}

// ============================================================================
// PROCORE ALTERNATIVE FAQs
// ============================================================================

export const procoreFAQs: FAQItem[] = [
  {
    question: "What is the best Procore alternative in 2026?",
    answer: "Space AI is the leading Procore alternative in 2026, offering AI-powered construction management with predictive analytics, intelligent scheduling, and automated document processing. Unlike Procore, Space AI includes machine learning capabilities that predict delays 3-4 weeks in advance, helping teams proactively manage projects."
  },
  {
    question: "Why should I switch from Procore to Space AI?",
    answer: "Teams switch from Procore to Space AI for its AI-first approach: predictive delay analysis that identifies issues 3-4 weeks before they impact schedules, automated risk scoring, intelligent document classification, and a modern user interface. Space AI typically reduces project delays by 23% and saves 8+ hours per week on administrative tasks compared to Procore."
  },
  {
    question: "Is Space AI cheaper than Procore?",
    answer: "Space AI offers more competitive pricing than Procore with all AI features included in the base package. Procore typically requires premium tiers (often $500-1000+/user/month for enterprise) to access advanced features. Space AI's transparent, usage-based pricing starts free and scales affordably, typically providing 40-60% cost savings for mid-sized construction firms."
  },
  {
    question: "Can Space AI import data from Procore?",
    answer: "Yes, Space AI provides comprehensive Procore migration tools. You can import projects, documents, RFIs, submittals, schedules, and team member data directly from Procore. Our migration team provides white-glove support, and most migrations complete within 1-2 weeks with zero data loss."
  },
  {
    question: "How does Space AI compare to Procore for large enterprises?",
    answer: "Space AI is built for enterprise scale with multi-project portfolios, advanced security (SOC 2 Type II certified), role-based permissions, SSO integration, and dedicated support. The key difference is Space AI's AI capabilities become more valuable at scale—learning from more project data to provide increasingly accurate predictions and recommendations across your entire portfolio."
  },
  {
    question: "Does Space AI have mobile apps like Procore?",
    answer: "Yes, Space AI offers native iOS and Android apps with full offline functionality. Unlike Procore's mobile experience, Space AI's mobile app includes AI-powered features like voice-to-text daily logs, automatic photo categorization, and smart notifications that prioritize critical issues based on your role and project status."
  },
  {
    question: "How long does it take to learn Space AI vs Procore?",
    answer: "Space AI's modern, intuitive interface significantly reduces the learning curve compared to Procore. Most teams become productive within hours rather than the weeks typically required for Procore. Our AI-guided onboarding, contextual help, and in-app assistant make it easy to discover features as you need them."
  },
  {
    question: "What features does Space AI have that Procore doesn't?",
    answer: "Space AI includes several features Procore lacks: AI-powered predictive delay analysis, automated schedule optimization, intelligent document processing with data extraction, conversational AI assistant, real-time risk scoring, weather-adjusted scheduling, and machine learning insights that improve over time. These AI capabilities represent the next generation of construction management software."
  },
  {
    question: "Can Space AI integrate with the same tools as Procore?",
    answer: "Space AI integrates with all major construction tools including accounting software (QuickBooks, Sage), design tools (AutoCAD, Revit), and popular business apps. We also support Procore data exports, making migration seamless. Our open API allows custom integrations for enterprise requirements."
  },
  {
    question: "Is Space AI suitable for residential construction like Procore?",
    answer: "Yes, Space AI excels at residential construction with features optimized for home builders and remodelers. Our AI helps manage the unique challenges of residential projects: coordinating multiple trades, managing homeowner communications, tracking selections and change orders, and predicting completion dates accurately."
  }
];

// ============================================================================
// BUILDERTREND ALTERNATIVE FAQs
// ============================================================================

export const buildertrendFAQs: FAQItem[] = [
  {
    question: "What is the best Buildertrend alternative in 2026?",
    answer: "Space AI is the best Buildertrend alternative in 2026 for teams wanting AI-powered capabilities. While Buildertrend focuses on residential construction, Space AI offers AI-driven scheduling, predictive analytics, and automated document processing that work across all construction types—residential, commercial, and industrial."
  },
  {
    question: "How does Space AI compare to Buildertrend for home builders?",
    answer: "Space AI offers everything Buildertrend provides for home builders plus AI capabilities: predictive delay analysis, automated schedule optimization, and intelligent document processing. Space AI's AI learns from your projects to provide increasingly accurate timeline predictions and proactive risk alerts."
  },
  {
    question: "Is Space AI better than Buildertrend for customer communication?",
    answer: "Yes, Space AI includes a dedicated client portal with AI-enhanced communication features. Clients can view progress, approve selections, and communicate with your team. Space AI's AI automatically generates progress updates, photo summaries, and timeline adjustments—saving hours of manual communication work."
  },
  {
    question: "Can I migrate from Buildertrend to Space AI easily?",
    answer: "Yes, Space AI provides full Buildertrend migration support. Import your projects, contacts, documents, and schedules directly. Our migration tools preserve your data structure, and dedicated support ensures a smooth transition typically completed within 1-2 weeks."
  },
  {
    question: "Does Space AI support residential construction selections like Buildertrend?",
    answer: "Yes, Space AI includes robust selection and allowance management with AI enhancements. Track client selections, manage allowances, and generate selection sheets automatically. Our AI flags potential selection delays and suggests alternatives when items have long lead times."
  },
  {
    question: "How does Space AI pricing compare to Buildertrend?",
    answer: "Space AI offers competitive pricing with more features included. Buildertrend charges $499-$999/month plus per-user fees, while Space AI includes AI features in all plans. Most Buildertrend users see 30-50% cost savings with Space AI while gaining predictive analytics capabilities."
  },
  {
    question: "Is Space AI good for custom home builders?",
    answer: "Space AI excels for custom home builders with AI-powered scheduling that accounts for the complexity of custom projects. Manage unique specifications, track custom selections, coordinate specialty trades, and predict accurate completion dates even for one-of-a-kind homes."
  },
  {
    question: "Does Space AI have lead management like Buildertrend?",
    answer: "Yes, Space AI includes CRM and lead management features with AI enhancements. Track leads, manage proposals, and convert to projects seamlessly. Our AI helps prioritize leads based on likelihood to convert and optimal project timing."
  }
];

// ============================================================================
// PLANGRID ALTERNATIVE FAQs
// ============================================================================

export const plangridFAQs: FAQItem[] = [
  {
    question: "What is the best PlanGrid alternative in 2026?",
    answer: "Space AI is the best PlanGrid alternative in 2026, offering advanced AI-powered document management plus comprehensive project management. Unlike PlanGrid (now part of Autodesk), Space AI provides predictive analytics, intelligent scheduling, and automated document processing in a single integrated platform."
  },
  {
    question: "How does Space AI document management compare to PlanGrid?",
    answer: "Space AI offers superior document management with AI capabilities PlanGrid lacks: automatic document classification, intelligent data extraction, semantic search across all documents, and a document chat feature that lets you ask questions about your drawings and specs in natural language."
  },
  {
    question: "Can Space AI replace PlanGrid for field teams?",
    answer: "Yes, Space AI provides all PlanGrid field capabilities plus AI enhancements. Access drawings, create issues, add markups, and sync offline—all with AI-powered features like automatic issue categorization, smart punch list generation, and predictive completion tracking."
  },
  {
    question: "Is Space AI better for drawing management than PlanGrid?",
    answer: "Space AI includes comprehensive drawing management with AI-powered features: automatic revision tracking, intelligent comparison between versions, OCR for searchable text in drawings, and BIM integration. Our AI identifies potential conflicts and tracks RFIs related to specific drawing areas."
  },
  {
    question: "How does Space AI handle sheet hyperlinking like PlanGrid?",
    answer: "Space AI supports full sheet hyperlinking with AI enhancements. Navigate between related sheets, details, and specifications instantly. Our AI automatically suggests relevant links and identifies referenced sheets that may be missing from your document set."
  },
  {
    question: "Can I import PlanGrid data into Space AI?",
    answer: "Yes, Space AI provides comprehensive PlanGrid import tools. Migrate your sheets, tasks, photos, reports, and team data seamlessly. Our migration support ensures no data loss and maintains your existing organizational structure."
  },
  {
    question: "Does Space AI work offline like PlanGrid?",
    answer: "Yes, Space AI offers robust offline functionality for field teams. Access drawings, create issues, take photos, and update progress without internet connectivity. All changes sync automatically when connection is restored, with AI-powered conflict resolution."
  },
  {
    question: "Is Space AI suitable for large commercial projects like PlanGrid?",
    answer: "Space AI excels at large commercial projects with enterprise-grade capabilities: unlimited drawing storage, multi-project portfolios, advanced permissions, and AI that scales to analyze thousands of documents and identify patterns across your entire project portfolio."
  }
];

// ============================================================================
// AUTODESK CONSTRUCTION CLOUD ALTERNATIVE FAQs
// ============================================================================

export const autodeskFAQs: FAQItem[] = [
  {
    question: "What is the best Autodesk Construction Cloud alternative?",
    answer: "Space AI is the best Autodesk Construction Cloud alternative for teams wanting AI-first construction management. While Autodesk focuses on BIM workflows, Space AI offers predictive analytics, intelligent scheduling, and automated document processing that work with any design tool, not just Autodesk products."
  },
  {
    question: "How does Space AI compare to Autodesk Build?",
    answer: "Space AI offers comprehensive project management with AI capabilities Autodesk Build lacks: predictive delay analysis, automated risk scoring, intelligent document classification, and machine learning that improves over time. Space AI also doesn't lock you into a specific design software ecosystem."
  },
  {
    question: "Can Space AI integrate with Revit and AutoCAD like Autodesk Construction Cloud?",
    answer: "Yes, Space AI integrates with Revit, AutoCAD, and other design tools through standard file formats and our BIM integration module (Space BIM). You can link models, sync changes, and leverage BIM data for coordination—without being locked into the Autodesk ecosystem."
  },
  {
    question: "Is Space AI better for teams not using all Autodesk products?",
    answer: "Absolutely. Space AI is tool-agnostic and works with any design software. If your team uses mixed tools (some Revit, some SketchUp, some hand drawings), Space AI provides a unified platform without the complexity and cost of full Autodesk licensing."
  },
  {
    question: "How does Space AI pricing compare to Autodesk Construction Cloud?",
    answer: "Space AI typically costs 40-60% less than Autodesk Construction Cloud while including AI features. Autodesk's pricing model with separate Docs, Build, and BIM Collaborate products adds up quickly. Space AI provides an all-in-one solution with transparent, predictable pricing."
  },
  {
    question: "Does Space AI support model coordination like BIM Collaborate?",
    answer: "Yes, Space AI's Space BIM module supports model coordination with AI-enhanced clash detection. Upload IFC models from any software, run clash detection, and manage coordination issues. Our AI prioritizes clashes by severity and suggests resolution approaches."
  },
  {
    question: "Can I migrate from Autodesk Construction Cloud to Space AI?",
    answer: "Yes, Space AI provides migration tools for Autodesk Construction Cloud. Import your projects, documents, issues, and RFIs. Our team helps ensure data continuity and trains your team on Space AI's AI-enhanced workflows."
  },
  {
    question: "Is Space AI good for design-build projects?",
    answer: "Space AI excels at design-build with features that bridge design and construction: integrated document management, change tracking across design iterations, RFI workflows linked to drawing areas, and AI that identifies potential constructability issues early in design."
  }
];

// ============================================================================
// MONDAY.COM ALTERNATIVE FAQs
// ============================================================================

export const mondayFAQs: FAQItem[] = [
  {
    question: "Is Space AI better than Monday.com for construction?",
    answer: "Yes, Space AI is specifically built for construction while Monday.com is general project management. Space AI includes construction-specific features like RFI management, submittals tracking, punch lists, and AI-powered scheduling optimized for construction workflows."
  },
  {
    question: "Why switch from Monday.com to Space AI for construction projects?",
    answer: "Monday.com lacks construction-specific functionality. Space AI provides: drawing management, RFI/submittal workflows, construction scheduling with dependencies, field apps, punch lists, daily logs, and AI that understands construction terminology and workflows."
  },
  {
    question: "Does Space AI have the flexibility of Monday.com?",
    answer: "Yes, Space AI offers customizable workflows like Monday.com plus construction intelligence. Create custom fields, automate workflows, and build dashboards—all enhanced with AI that understands construction context and suggests optimizations."
  },
  {
    question: "How does Space AI compare to Monday.com for team collaboration?",
    answer: "Space AI provides superior construction collaboration: markup drawings, link issues to plans, share photos with location tags, and coordinate across office and field. Our AI summarizes discussions and flags items needing attention."
  },
  {
    question: "Is Space AI more expensive than Monday.com?",
    answer: "Space AI offers better value for construction teams. While Monday.com's base price seems lower, adding construction-specific apps and automations increases costs significantly. Space AI includes all construction features and AI capabilities in transparent pricing."
  }
];

// ============================================================================
// FIELDWIRE ALTERNATIVE FAQs
// ============================================================================

export const fieldwireFAQs: FAQItem[] = [
  {
    question: "What is the best Fieldwire alternative in 2026?",
    answer: "Space AI is the best Fieldwire alternative for teams wanting AI-powered field management plus comprehensive project management. While Fieldwire excels at task management, Space AI adds predictive analytics, intelligent scheduling, and automated document processing."
  },
  {
    question: "How does Space AI compare to Fieldwire for punch lists?",
    answer: "Space AI offers advanced punch list management with AI: automatic issue categorization, photo-based defect detection, predicted resolution times, and smart prioritization. Export professional reports and track completion rates with predictive analytics."
  },
  {
    question: "Is Space AI good for field teams like Fieldwire?",
    answer: "Yes, Space AI provides excellent field tools: offline access, drawing markup, issue tracking, daily logs, and progress photos. Our AI enhances field productivity with voice-to-text logging, automatic photo organization, and smart task prioritization."
  },
  {
    question: "Can Space AI replace Fieldwire for task management?",
    answer: "Yes, Space AI includes robust task management with AI enhancements: create tasks on drawings, assign to team members, track progress, and predict completion dates. Our AI identifies task dependencies and optimizes sequences automatically."
  },
  {
    question: "Does Space AI work offline like Fieldwire?",
    answer: "Yes, Space AI offers full offline functionality. Access drawings, create tasks, log progress, and capture photos without internet. Changes sync automatically when connected, with AI-powered conflict resolution ensuring data integrity."
  }
];

// ============================================================================
// PRIMAVERA ALTERNATIVE FAQs
// ============================================================================

export const primaveraFAQs: FAQItem[] = [
  {
    question: "What is the best Primavera P6 alternative in 2026?",
    answer: "Space AI is the best Primavera P6 alternative for teams wanting modern, AI-powered scheduling. While P6 offers detailed scheduling, Space AI adds AI that automatically optimizes schedules, predicts delays, and suggests resource adjustments in real-time."
  },
  {
    question: "How does Space AI scheduling compare to Primavera P6?",
    answer: "Space AI provides enterprise-grade scheduling with AI enhancements: automatic critical path optimization, delay prediction 3-4 weeks ahead, weather-adjusted scheduling, and resource leveling suggestions. Import P6 schedules and enhance them with AI capabilities."
  },
  {
    question: "Can Space AI handle complex schedules like Primavera?",
    answer: "Yes, Space AI supports complex scheduling with thousands of activities, multiple calendars, resource loading, and advanced dependencies. Our AI analyzes schedule complexity and identifies optimization opportunities automatically."
  },
  {
    question: "Is Space AI easier to use than Primavera P6?",
    answer: "Yes, Space AI offers a modern, intuitive interface compared to P6's complexity. Teams become productive in hours rather than the weeks of training P6 requires. Our AI assistant helps users build and optimize schedules without deep scheduling expertise."
  },
  {
    question: "Can I import Primavera P6 schedules into Space AI?",
    answer: "Yes, Space AI imports P6 schedules in XER and XML formats. All activities, dependencies, resources, and calendars transfer seamlessly. Our AI then analyzes your schedule and suggests optimizations based on historical project data."
  },
  {
    question: "Does Space AI support earned value management like Primavera?",
    answer: "Yes, Space AI includes full EVM capabilities: track planned vs actual progress, calculate CPI/SPI, and forecast completion. Our AI enhances EVM with predictive analytics that forecast final costs and dates based on current trends."
  }
];

// ============================================================================
// SMARTSHEET ALTERNATIVE FAQs
// ============================================================================

export const smartsheetFAQs: FAQItem[] = [
  {
    question: "Is Space AI better than Smartsheet for construction?",
    answer: "Yes, Space AI is purpose-built for construction while Smartsheet is spreadsheet-based project management. Space AI includes drawing management, RFI workflows, field apps, and AI optimized for construction—features Smartsheet doesn't offer natively."
  },
  {
    question: "Can Space AI replace Smartsheet for construction tracking?",
    answer: "Yes, Space AI provides superior construction tracking: visual schedules linked to drawings, automated progress updates from field teams, AI-powered delay predictions, and construction-specific reports. No more complex spreadsheet formulas."
  },
  {
    question: "How does Space AI compare to Smartsheet for collaboration?",
    answer: "Space AI offers construction-focused collaboration: markup drawings together, link discussions to specific locations, share field photos with context, and coordinate RFIs. Our AI summarizes activity and highlights items needing attention."
  },
  {
    question: "Is Space AI more expensive than Smartsheet?",
    answer: "Space AI provides better value for construction. While Smartsheet's base price is competitive, construction teams need expensive add-ons for dashboards, automation, and integrations. Space AI includes all features with transparent, construction-optimized pricing."
  }
];

// ============================================================================
// WRIKE ALTERNATIVE FAQs
// ============================================================================

export const wrikeFAQs: FAQItem[] = [
  {
    question: "Is Space AI better than Wrike for construction?",
    answer: "Yes. Wrike is a general-purpose work management platform built for marketing and creative teams, with no native RFI, submittal, drawing, or scheduling workflows. Space AI is purpose-built for construction with RFI management, submittal tracking, BIM integration, punch lists, and AI-powered scheduling."
  },
  {
    question: "Does Wrike have construction features?",
    answer: "No. Wrike lacks construction-specific capabilities such as RFI and submittal management, blueprint/drawing management, punch lists, and field mobile workflows. Teams typically spend months customizing Wrike templates and still miss native construction workflows that Space AI includes out of the box."
  },
  {
    question: "Can I migrate from Wrike to Space AI?",
    answer: "Yes. Space AI provides migration support that imports tasks, projects, documents, and schedules from Wrike. Since Wrike stores generic task data, most migrations complete in days with no construction-specific data to lose."
  },
  {
    question: "Is Space AI cheaper than Wrike?",
    answer: "Space AI offers transparent per-user pricing with all construction features included, starting with a free tier. Wrike's tiered plans push advanced features to higher price points, and construction teams typically add expensive integrations on top."
  }
];

// ============================================================================
// CLICKUP ALTERNATIVE FAQs
// ============================================================================

export const clickupFAQs: FAQItem[] = [
  {
    question: "Is Space AI better than ClickUp for construction?",
    answer: "Yes for construction work. ClickUp is a highly customizable all-in-one tool, but its construction capabilities require extensive template setup and it lacks native RFI management, submittal tracking, BIM integration, and construction scheduling. Space AI includes these workflows natively with AI built in."
  },
  {
    question: "Does ClickUp work for construction project management?",
    answer: "Not natively. ClickUp requires months of custom setup to approximate construction workflows, and even then lacks drawing management, RFI/submittal modules, construction cost tracking, and offline field capabilities that Space AI provides out of the box."
  },
  {
    question: "Can I migrate from ClickUp to Space AI?",
    answer: "Yes. Space AI's migration tools import tasks, spaces, documents, and schedules from ClickUp. Most migrations complete within days, and Space AI's white-glove team helps map your construction workflows."
  },
  {
    question: "Is ClickUp or Space AI more cost-effective for construction?",
    answer: "Space AI is more cost-effective for construction because construction-specific features are included in one transparent plan. ClickUp's base price looks low, but teams pay for premium tiers, add-ons, and weeks of setup time to approximate construction workflows."
  }
];

// ============================================================================
// COCONSTRUCT ALTERNATIVE FAQs
// ============================================================================

export const coconstructFAQs: FAQItem[] = [
  {
    question: "What is the best CoConstruct alternative in 2026?",
    answer: "Space AI is the best CoConstruct alternative for custom home builders wanting AI capabilities. While CoConstruct focuses on client management, Space AI adds predictive scheduling, intelligent document processing, and AI that improves over time."
  },
  {
    question: "How does Space AI compare to CoConstruct for custom homes?",
    answer: "Space AI offers comprehensive custom home management plus AI: selection tracking, client portal, progress photos, and change order management—enhanced with predictive analytics that forecast completion dates and flag potential issues early."
  },
  {
    question: "Is Space AI good for client communication like CoConstruct?",
    answer: "Yes, Space AI includes a dedicated client portal with AI-enhanced features. Clients view progress, approve selections, and communicate with your team. Our AI generates automatic updates and summarizes project status."
  },
  {
    question: "Can I migrate from CoConstruct to Space AI?",
    answer: "Yes, Space AI provides CoConstruct migration support. Import your projects, clients, selections, and documents. Our team ensures data continuity and helps your team learn Space AI's AI-enhanced workflows."
  }
];

// ============================================================================
// EXPORT ALL FAQs
// ============================================================================

export const competitorFAQs: CompetitorFAQs = {
  procore: procoreFAQs,
  buildertrend: buildertrendFAQs,
  plangrid: plangridFAQs,
  "autodesk-construction-cloud": autodeskFAQs,
  monday: mondayFAQs,
  fieldwire: fieldwireFAQs,
  primavera: primaveraFAQs,
  smartsheet: smartsheetFAQs,
  coconstruct: coconstructFAQs,
  wrike: wrikeFAQs,
  clickup: clickupFAQs,
};

/**
 * Get FAQs for a specific competitor
 */
export function getCompetitorFAQs(competitor: string): FAQItem[] {
  return competitorFAQs[competitor.toLowerCase()] || procoreFAQs;
}

/**
 * Generate FAQ Schema for a competitor page
 */
export function generateFAQSchemaData(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
