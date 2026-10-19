/**
 * Video Sitemap Generator for Space AI
 * Task 8: Create XML Sitemap for Videos
 * 
 * This script generates a video-sitemap.xml file for Google Video indexing
 * Run with: node scripts/generate-video-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://pmspace.ai';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const VIDEOS_DIR = path.join(PUBLIC_DIR, 'videos');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'video-sitemap.xml');

// Video metadata with SEO-optimized titles and descriptions
const videoMetadata = {
  'email.mp4': {
    title: 'Space AI Email Integration - Construction Project Communication',
    description: 'See how Space AI streamlines construction project communication with intelligent email integration. Automatically capture and organize project emails, RFIs, and submittals in one place.',
    thumbnail: '/assets/images/email-thumbnail.jpg',
    duration: 120,
    keywords: ['construction email management', 'project communication', 'RFI tracking', 'construction software'],
    category: 'Technology',
    familyFriendly: true,
    contentLocation: 'Construction Site',
    page: '/features/communication',
  },
  'projectmanagementdashboard.mp4': {
    title: 'AI Construction Management Dashboard - Space AI Platform Overview',
    description: 'Explore the AI-powered construction management dashboard. Real-time project insights, predictive analytics, resource tracking, and intelligent scheduling all in one unified view.',
    thumbnail: '/assets/images/dashboard-thumbnail.jpg',
    duration: 180,
    keywords: ['construction management dashboard', 'AI project management', 'construction analytics', 'project tracking software'],
    category: 'Technology',
    familyFriendly: true,
    contentLocation: 'Construction Office',
    page: '/',
  },
};

// GIF metadata (Google can index animated GIFs as video content)
// Updated to match actual file names in /public/videos/
const gifMetadata = {
  'analyticsreportingsoftware.gif': {
    title: 'Construction Analytics & Reporting Software Demo',
    description: 'See how Space AI delivers powerful construction analytics and automated reporting. Generate insights from project data, track KPIs, and create executive reports in seconds.',
    duration: 12,
    keywords: ['construction analytics', 'project reporting', 'construction KPIs', 'data visualization'],
    page: '/features',
  },
  'assetdashboard.gif': {
    title: 'Construction Asset Management Dashboard',
    description: 'Track and manage all your construction assets in one place. Monitor equipment utilization, maintenance schedules, and asset locations across multiple job sites.',
    duration: 10,
    keywords: ['asset management', 'equipment tracking', 'construction assets', 'fleet management'],
    page: '/features',
  },
  'bim.gif': {
    title: 'BIM Integration for Construction Management',
    description: 'Seamlessly integrate Building Information Modeling (BIM) with your project management. View 3D models, detect clashes, and coordinate construction activities.',
    duration: 15,
    keywords: ['BIM integration', 'building information modeling', '3D construction', 'clash detection'],
    page: '/features',
  },
  'costestimationtool.gif': {
    title: 'AI-Powered Construction Cost Estimation Tool',
    description: 'Generate accurate construction cost estimates with AI. Analyze historical data, material costs, and labor rates to create precise project budgets.',
    duration: 12,
    keywords: ['cost estimation', 'construction budgeting', 'project costs', 'estimating software'],
    page: '/features',
  },
  'designer.gif': {
    title: 'Construction Design Collaboration Tool',
    description: 'Collaborate on construction designs in real-time. Share drawings, markup plans, and coordinate between architects, engineers, and contractors.',
    duration: 10,
    keywords: ['design collaboration', 'construction drawings', 'plan markup', 'design coordination'],
    page: '/features',
  },
  'documentmanagement.gif': {
    title: 'Intelligent Construction Document Management',
    description: 'AI-powered document management for construction projects. Automatically organize, tag, and search through contracts, drawings, specifications, and RFIs.',
    duration: 12,
    keywords: ['document management', 'construction documents', 'file organization', 'contract management'],
    page: '/features',
  },
  'esign.gif': {
    title: 'Electronic Signatures for Construction Contracts',
    description: 'Sign construction contracts, change orders, and approvals digitally. Legally binding e-signatures with full audit trail and compliance.',
    duration: 8,
    keywords: ['e-signature', 'digital signatures', 'construction contracts', 'electronic signing'],
    page: '/features',
  },
  'files.gif': {
    title: 'Construction File Management System',
    description: 'Centralized file storage for all your construction documents. Version control, access permissions, and smart search built-in.',
    duration: 10,
    keywords: ['file management', 'document storage', 'version control', 'construction files'],
    page: '/features',
  },
  'forms.gif': {
    title: 'Digital Construction Forms & Checklists',
    description: 'Create custom digital forms for safety inspections, daily logs, and quality checks. Collect data in the field, analyze in the office.',
    duration: 8,
    keywords: ['digital forms', 'construction checklists', 'safety inspections', 'field data collection'],
    page: '/features',
  },
  'inventrymanagement.gif': {
    title: 'Construction Inventory Management System',
    description: 'Track materials, supplies, and equipment inventory across all your construction sites. Automated reordering and stock level alerts.',
    duration: 10,
    keywords: ['inventory management', 'material tracking', 'construction supplies', 'stock management'],
    page: '/features',
  },
  'invoicemanagement.gif': {
    title: 'Construction Invoice & Payment Management',
    description: 'Streamline construction invoicing and payments. Track pay applications, manage retainage, and process subcontractor payments efficiently.',
    duration: 10,
    keywords: ['invoice management', 'construction payments', 'pay applications', 'billing software'],
    page: '/features',
  },
  'projectmanagementdashboard.gif': {
    title: 'Interactive Construction Project Dashboard',
    description: 'See your entire construction portfolio at a glance. Track budgets, timelines, and resources across all active projects with real-time updates.',
    duration: 12,
    keywords: ['project dashboard', 'construction overview', 'portfolio management', 'project tracking'],
    page: '/',
  },
  'schedulingsoftware.gif': {
    title: 'AI Construction Scheduling Software Demo',
    description: 'AI-powered construction scheduling with Gantt charts, critical path analysis, and predictive delay detection. Optimize your project timeline automatically.',
    duration: 15,
    keywords: ['construction scheduling', 'Gantt chart', 'project timeline', 'schedule optimization'],
    page: '/features',
  },
  'supplychainmanagement.gif': {
    title: 'Construction Supply Chain Management',
    description: 'Manage your entire construction supply chain. Track orders, deliveries, and vendor performance. Reduce delays with predictive procurement.',
    duration: 12,
    keywords: ['supply chain', 'procurement', 'vendor management', 'material delivery'],
    page: '/features',
  },
  'workflow.gif': {
    title: 'Automated Construction Workflows',
    description: 'Build custom approval workflows for RFIs, submittals, and change orders. Automate repetitive construction processes and reduce bottlenecks.',
    duration: 10,
    keywords: ['workflow automation', 'approval workflows', 'RFI management', 'submittal tracking'],
    page: '/features',
  },
  'workstream.gif': {
    title: 'Construction Workstream Management',
    description: 'Organize construction tasks into workstreams. Coordinate between trades, track dependencies, and ensure smooth project execution.',
    duration: 10,
    keywords: ['workstream management', 'task coordination', 'trade scheduling', 'project execution'],
    page: '/features',
  },
};

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function generateVideoSitemap() {
  const videos = [];
  const today = new Date().toISOString().split('T')[0];
  
  // Check if videos directory exists
  if (!fs.existsSync(VIDEOS_DIR)) {
    console.log('Videos directory not found:', VIDEOS_DIR);
    return;
  }
  
  // Read video files
  const files = fs.readdirSync(VIDEOS_DIR);
  
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.mp4' && videoMetadata[file]) {
      const meta = videoMetadata[file];
      videos.push({
        loc: meta.page || '/',
        video: {
          thumbnail_loc: `${SITE_URL}${meta.thumbnail || '/assets/images/video-placeholder.jpg'}`,
          title: meta.title,
          description: meta.description,
          content_loc: `${SITE_URL}/videos/${file}`,
          duration: meta.duration,
          publication_date: today,
          family_friendly: meta.familyFriendly !== false ? 'yes' : 'no',
          category: meta.category || 'Technology',
          tag: meta.keywords || [],
        },
      });
    }
    
    if (ext === '.gif' && gifMetadata[file]) {
      const meta = gifMetadata[file];
      videos.push({
        loc: meta.page || '/',
        video: {
          thumbnail_loc: `${SITE_URL}/videos/${file}`,
          title: meta.title,
          description: meta.description,
          content_loc: `${SITE_URL}/videos/${file}`,
          duration: meta.duration,
          publication_date: today,
          family_friendly: 'yes',
          category: 'Technology',
          tag: meta.keywords || [],
        },
      });
    }
  });
  
  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;
  
  videos.forEach(video => {
    xml += `  <url>
    <loc>${SITE_URL}${video.loc}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(video.video.thumbnail_loc)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.video.title)}</video:title>
      <video:description>${escapeXml(video.video.description)}</video:description>
      <video:content_loc>${escapeXml(video.video.content_loc)}</video:content_loc>
      <video:duration>${video.video.duration}</video:duration>
      <video:publication_date>${video.video.publication_date}</video:publication_date>
      <video:family_friendly>${video.video.family_friendly}</video:family_friendly>
      <video:category>${escapeXml(video.video.category)}</video:category>
${video.video.tag.map(t => `      <video:tag>${escapeXml(t)}</video:tag>`).join('\n')}
    </video:video>
  </url>
`;
  });
  
  xml += `</urlset>`;
  
  // Write file
  fs.writeFileSync(OUTPUT_FILE, xml);
  console.log(`✅ Video sitemap generated: ${OUTPUT_FILE}`);
  console.log(`   Total videos: ${videos.length}`);
}

// Run the generator
generateVideoSitemap();
