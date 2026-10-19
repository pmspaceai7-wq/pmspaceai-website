// lib/videos.ts

// Define the type for a video post
export interface VideoPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageSrc: string | null;
  href: string; 
  // Use the standard YouTube watch URL (react-player handles the embedding)
  youtubeUrl: string; 
}


export const videoPosts: VideoPost[] = [

  {
    id: 7,
    slug: "space-ai-youtube-launch-video",
    title: "Space AI Free Tier — Complete Walkthrough | Forms, Files & Data in One Platform",
    description: "Watch the latest Space AI YouTube video covering our construction management platform and AI-powered project workflows.",
    imageSrc: "/assets/images/free-tier-youtube-demo-blog-hero.webp",
    href: "/videos/space-ai-youtube-launch-video/",
    youtubeUrl: "https://www.youtube.com/watch?v=ZV14hsbxR1Q",
  },

  {
    id: 3,
    slug: "space-ai-tutorial-forms-files-user-management-explained",
    title: "Space AI Tutorial | Forms, Files & User Management Explained",
    description: "A comprehensive tutorial on Forms, Files, and User Management functionalities within Space AI.",
    imageSrc: "/assets/images/welcometospaceai.jpg", 
    href: "/videos/space-ai-tutorial-forms-files-user-management-explained/",
    youtubeUrl: "https://www.youtube.com/watch?v=dBp3ncaHwpc", 
  },

  {
    id: 1,
    slug: "building-next-gen-enterprise-ai",
    title: "Building the Next Generation of Enterprise AI",
    description: "An in-depth session on moving Enterprise AI from theoretical concepts to practical, tangible applications that drive business value and secure competitive advantage.",
    imageSrc: "/assets/images/vid1thumbnail.jpg", // Placeholder image
    href: "/videos/building-next-gen-enterprise-ai/",
    youtubeUrl: "https://www.youtube.com/watch?v=pRkVJW4sGfo", 
  },

  {
    id: 2,
    slug: "how-to-set-up-a-form",
    title: "How to set up a Form",
    description: "A quick tutorial on the process and steps required to efficiently set up a new digital form in your system.",
    imageSrc: "/assets/images/forms.png", 
    href: "/videos/how-to-set-up-a-form/",
    youtubeUrl: "https://www.youtube.com/watch?v=jAHsiAh0gC8", 
  },

  {
    id: 4,
    slug: "cost-estimation-tool",
    title: "Cost estimation tool",
    description: "Demonstration of a cost estimation tool.",
    imageSrc: "/assets/images/costestimation.png", 
    href: "/videos/cost-estimation-tool/",
    youtubeUrl: "https://www.youtube.com/watch?v=usE-IwXSWT4", 
  },

  {
    id: 5,
    slug: "project-management-dashboard-demo",
    title: "Project management Dashboard DEMO",
    description: "A quick demonstration of the project management dashboard.",
    imageSrc:"/assets/images/projectmanagementdashboard.png", 
    href: "/videos/project-management-dashboard-demo/",
    youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g", 
  },

  {
    id: 6,
    slug: "ai-invoice-management-software-with-automation-space-ai",
    title: "AI Invoice Management Software with Automation | Space AI",
    description: "An overview of the AI Invoice Management Software with automation features by Space AI.",
    imageSrc: "/assets/images/invoicemanagementsystem.png", 
    href: "/videos/ai-invoice-management-software-with-automation-space-ai/",
    youtubeUrl: "https://www.youtube.com/watch?v=NAt3578eGoM", 
  },

    {
    id: 8,
    slug: "how-to-create-ai-powered-form-seconds",
    title: "How to Create an AI-Powered Form in Seconds | Space AI Free Tier",
    description: "Just describe what your form needs to collect and the AI builds it for you — fields, labels, and structure included. Sign up free and start creating AI-powered forms instantly.",
    imageSrc: "/assets/images/forms.png",
    href: "/videos/how-to-create-ai-powered-form-seconds/",
    youtubeUrl: "https://www.youtube.com/watch?v=1U0USwkAO_w",
  },

  {
    id: 9,
    slug: "how-to-submit-view-form-data",
    title: "How to Submit & View Form Data | Space AI Free Tier",
    description: "Collect and review form data simply. Learn how to add entries and view all submissions in one place. Every submission is timestamped, attributed to the submitter, and stored against the form.",
    imageSrc: "/assets/images/formdata.jpg",
    href: "/videos/how-to-submit-view-form-data/",
    youtubeUrl: "https://www.youtube.com/watch?v=8ywN7AS4SzE",
  },

    {
    id: 10,
    slug: "how-to-upload-project-files",
    title: "How to Upload Project Files | Space AI Free Tier",
    description: "Easily upload and share project files with your team. Store drawings, reports, contracts, and photos in one place. Includes 10 free uploads.",
    imageSrc: "/assets/images/files.webp",
    href: "/videos/how-to-upload-project-files/",
    youtubeUrl: "https://www.youtube.com/watch?v=BH022zXsI6w",                              
  },
  
  {
    id: 11,
    slug: "how-to-revise-version-control-project-files",
    title: "How to Revise & Version Control Project Files | Space AI Free Tier",
    description: "Update files without losing history. Space AI tracks every version, ensuring your team always has the latest document while keeping past versions accessible.",
    imageSrc: "/assets/images/version_control.jpg",
    href: "/videos/how-to-revise-version-control-project-files/",
    youtubeUrl: "https://www.youtube.com/watch?v=19YqcrO7lF8",
  },
  {
    id: 12,
    slug: "explore-pmspace-ai-dashboard-full-feature-demo",
    title: "Explore the PMSpace AI Dashboard | Full Feature Demo",
    description: "Explore the Space AI Dashboard and discover how to manage projects, tasks, and teams with ease. This walkthrough highlights the platform's key features and AI-powered tools to boost productivity.",
    imageSrc: "/assets/images/thub.png",
    href: "/videos/explore-pmspace-ai-dashboard-full-feature-demo/",
    youtubeUrl: "https://www.youtube.com/watch?v=ZBnWeu4spQE",
  },
];


export const getAllVideoPosts = (): VideoPost[] => videoPosts;
