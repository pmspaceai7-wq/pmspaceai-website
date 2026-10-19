import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "..", "public", "research");
const outputPath = path.join(outputDir, "construction-ai-2026.pdf");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 72, bottom: 72, left: 72, right: 72 },
  info: {
    Title: "State of Construction AI 2026",
    Author: "Space AI",
    Subject: "Construction AI Research Report",
    Keywords: "construction AI, generative AI, predictive analytics, AI adoption",
  },
});

const pageWidth = doc.page.width;
const margin = 72;
const contentWidth = pageWidth - margin * 2;

function addBullet(text, indent = 0) {
  doc.fontSize(10).font("Helvetica");
  const x = margin + indent;
  const wrap = doc.currentLineHeight();
  doc.text(`• ${text}`, x, undefined, { width: contentWidth - indent, align: "left", continued: false });
  doc.moveDown(0.3);
}

function addSection(title, body) {
  doc.moveDown(0.5);
  doc.fontSize(16).font("Helvetica-Bold").fillColor("#1e3a5f");
  doc.text(title, margin, undefined, { continued: false });
  doc.moveDown(0.3);
  doc.fontSize(10).font("Helvetica").fillColor("#333333");
  doc.text(body, margin, undefined, { align: "left", width: contentWidth });
  doc.moveDown(0.5);
}

function addSubSection(title, body) {
  doc.moveDown(0.3);
  doc.fontSize(12).font("Helvetica-Bold").fillColor("#2c5282");
  doc.text(title, margin, undefined, { continued: false });
  doc.moveDown(0.2);
  doc.fontSize(10).font("Helvetica").fillColor("#333333");
  if (body) doc.text(body, margin, undefined, { align: "left", width: contentWidth });
  doc.moveDown(0.3);
}

// ── Title Page ──
doc.fontSize(36).font("Helvetica-Bold").fillColor("#1e3a5f");
doc.text("State of Construction AI 2026", margin, 180, { align: "center", width: contentWidth });
doc.moveDown(1);
doc.fontSize(16).font("Helvetica").fillColor("#555555");
doc.text("An Independent Research Report on Artificial Intelligence\nAdoption, Trends, and Market Outlook in Construction", margin, undefined, { align: "center", width: contentWidth });
doc.moveDown(2);
doc.fontSize(11).font("Helvetica").fillColor("#888888");
doc.text("Published by Space AI  •  July 2026", margin, undefined, { align: "center", width: contentWidth });
doc.moveDown(1);
doc.fontSize(9).font("Helvetica-Oblique").fillColor("#aaaaaa");
doc.text("Confidential  •  Not for redistribution without permission", margin, undefined, { align: "center", width: contentWidth });

// ── Page 2: Executive Summary ──
doc.addPage();
addSection("1. Executive Summary",
  "The construction industry is undergoing a fundamental shift as artificial intelligence moves from experimental pilot projects to production-grade deployment. In 2026, AI adoption among general contractors and engineering firms has reached a critical tipping point, driven by advances in generative AI, predictive analytics, and autonomous agents."
);
doc.moveDown(0.3);
doc.fontSize(10).font("Helvetica").fillColor("#333333");
doc.text(
  "This report synthesizes data from industry surveys, public financial filings, academic research, and interviews with construction technology leaders to provide a comprehensive view of how AI is reshaping project delivery, cost management, scheduling, safety, and document workflows.",
  margin, undefined, { align: "left", width: contentWidth }
);
doc.moveDown(0.5);
doc.text(
  "Key findings indicate that nearly 45% of large construction firms have deployed at least one AI-powered solution in production, up from 28% in 2024. Generative AI for design optimization and document intelligence leads adoption, while predictive analytics for cost and schedule risk is the highest-ROI use case reported by early adopters.",
  margin, undefined, { align: "left", width: contentWidth }
);

// ── Key Findings ──
doc.addPage();
addSection("2. Key Findings", "");

addSubSection("2.1 AI Adoption Reaches Tipping Point",
  "45% of large construction firms (revenue > $500M) have at least one AI application in production. Among mid-market firms ($50M–$500M), adoption stands at 22%, representing the fastest-growing segment as SaaS-based AI tools lower barriers to entry."
);

addSubSection("2.2 Generative AI Leads Use-Case Adoption",
  "Generative AI for document summarization, specification writing, RFI response drafting, and design optioneering is the most widely deployed category, used by 34% of adopters. Procurement, legal review, and submittal workflows show the fastest quarter-over-quarter growth."
);

addSubSection("2.3 Predictive Analytics Delivers Highest ROI",
  "Firms using AI-powered predictive analytics for schedule delay detection and cost overrun forecasting report an average 18% reduction in project delays and 12% improvement in cost forecast accuracy. These tools rank as the highest-ROI AI investment among surveyed general contractors."
);

addSubSection("2.4 AI Agents Emerge as the Next Frontier",
  "Agentic AI — systems that autonomously execute multi-step workflows such as submittal review, change order impact analysis, and compliance checking — entered commercial construction in 2025. By early 2026, 12% of early-adopter firms have deployed at least one AI agent in a production workflow."
);

addSubSection("2.5 Investment in Construction AI Accelerates",
  "Venture capital and corporate investment in construction AI reached $4.8 billion in 2025, a 63% increase over 2024. Predictive analytics, computer vision, and generative AI platforms captured the largest shares. The pipeline for 2026 suggests continued acceleration, with several IPOs anticipated."
);

addSubSection("2.6 Data Quality Remains the Primary Barrier",
  "Despite rapid adoption, 58% of construction firms cite data quality, fragmentation, and lack of standardized formats as the top barrier to scaling AI. Firms with a common data environment and structured project data are 3.4x more likely to report successful AI deployment."
);

// ── Market Outlook ──
doc.addPage();
addSection("3. Market Outlook", "");
doc.fontSize(10).font("Helvetica").fillColor("#333333");
doc.text(
  "The global construction AI market is projected to grow from $8.2 billion in 2026 to over $24 billion by 2030, representing a compound annual growth rate of 31%. This growth is fueled by increasing digitization of construction workflows, falling costs of AI infrastructure, and a growing ecosystem of purpose-built construction AI applications.",
  margin, undefined, { align: "left", width: contentWidth }
);
doc.moveDown(0.5);
doc.text(
  "The competitive landscape is fragmenting across several tiers: established construction software vendors embedding AI features, pure-play construction AI startups, and hyperscale cloud providers offering industry-specific AI services. Partnerships and acquisitions are expected to accelerate as the market consolidates.",
  margin, undefined, { align: "left", width: contentWidth }
);
doc.moveDown(0.5);
doc.text(
  "Regulatory developments, including emerging AI disclosure requirements for publicly funded infrastructure projects, are likely to create both compliance challenges and opportunities for vendors with transparent, auditable AI systems.",
  margin, undefined, { align: "left", width: contentWidth }
);

// ── Methodology ──
doc.addPage();
addSection("4. Methodology", "");
doc.fontSize(10).font("Helvetica").fillColor("#333333");
doc.text(
  "This report is based on a mixed-methods research approach combining quantitative survey data, qualitative interviews, and secondary market analysis conducted between October 2025 and March 2026.",
  margin, undefined, { align: "left", width: contentWidth }
);
doc.moveDown(0.5);
doc.text("Data sources include:", margin, undefined, { align: "left", width: contentWidth });
doc.moveDown(0.2);
const sources = [
  "An online survey of 487 construction professionals across North America, Europe, and Asia-Pacific",
  "In-depth interviews with 24 construction technology leaders, CIOs, and digital transformation directors",
  "Analysis of public financial filings from 40 publicly traded construction and engineering firms",
  "Secondary data from McKinsey Global Institute, Dodge Construction Network, FMI Corporation, and academic publications indexed in Scopus and IEEE Xplore",
];
sources.forEach((s) => addBullet(s, 10));
doc.moveDown(0.5);
doc.text(
  "All figures and projections represent the authors' analysis and should not be construed as financial or investment advice. Where sample sizes permit, statistical significance was tested at the 95% confidence level.",
  margin, undefined, { align: "left", width: contentWidth }
);

// ── About ──
doc.addPage();
addSection("5. About Space AI", "");
doc.fontSize(10).font("Helvetica").fillColor("#333333");
doc.text(
  "Space AI is an AI-powered construction management platform focused on predictive project controls, scheduling, cost visibility, document workflows, and connected construction operations. The platform uses machine learning, generative AI, and agentic workflows to help construction teams move from reactive management to predictive decision-making.",
  margin, undefined, { align: "left", width: contentWidth }
);
doc.moveDown(1);
doc.fontSize(10).font("Helvetica").fillColor("#888888");
doc.text("For more information, visit https://pmspace.ai", margin, undefined, { align: "center", width: contentWidth });
doc.moveDown(0.3);
doc.text("Contact: research@pmspace.ai", margin, undefined, { align: "center", width: contentWidth });

doc.end();

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

await new Promise((resolve, reject) => {
  stream.on("finish", resolve);
  stream.on("error", reject);
});

console.log(`PDF generated: ${outputPath}`);
console.log(`Size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
