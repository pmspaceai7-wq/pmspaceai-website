import { notFound } from "next/navigation";
import { Metadata } from "next";
import CareerJobClient, { JobDetail } from "./CareerJobClient";

export const revalidate = 3600;

type JobId = "mern-developer" | "senior-mern-developer" | "python-developer-ai";

type JobDetailsType = {
  [key in JobId]: JobDetail;
};

const jobDetails: JobDetailsType = {
  "mern-developer": {
    title: "MERN Stack Developer",
    experience: "Freshers Welcome (1+ Years Preferred)",
    location: "WFH",
    workLocation: "Kerala (Required)",
    type: "Full-time",
    email: "Info@spaceaiapp.com",
    wellfoundUrl: "https://wellfound.com/jobs/4313221-mern-stack-developer-intern",
    naukriUrl: "https://www.naukri.com/spaceaapp-jobs-careers-125589152",
    companyProfile: "SPACE AI is a revolutionary AI (MNC) startup transforming the construction industry with cutting-edge technology. Our vision is to empower enterprises in the architectural, engineering, and construction sectors with results-driven solutions that enhance operational efficiency, facilitate seamless collaboration, and drive transformative advancements. With a strong team and a clear roadmap, we're poised for growth and looking for talented individuals to join our journey.",
    overview: "We're seeking an experienced Team Lead to join our development team, focusing on Next.js, Node.js, MongoDB, and GraphQL. As a Team Lead, you'll be responsible for Coding (100%): Developing high-quality software solutions using Next.js, Node.js, MongoDB, and GraphQL.",
    responsibilities: [
      {
        category: "Core Development",
        tasks: [
          "Design and implement scalable and efficient software solutions.",
          "Collaborate with cross-functional teams to identify and prioritize project requirements.",
          "Ensure high-quality code delivery, adhering to best practices and coding standards.",
          "Troubleshoot and resolve technical issues, providing timely and effective solutions."
        ]
      }
    ],
    requirements: [
      "Freshers are welcome to apply. Candidates with 1+ years of relevant experience will be given additional consideration.",
      "Excellent problem-solving skills, with the ability to analyze complex technical issues and provide effective solutions.",
      "Strong communication and collaboration skills, with experience working with cross-functional teams."
    ],
    preferred: [],
    softSkills: [],
    benefits: [
      "Opportunity to work with a cutting-edge AI startup, transforming the construction industry.",
      "Collaborative and dynamic work environment, with a team of passionate and talented individuals.",
      "Competitive compensation and benefits package, with a focus on growth and development."
    ],
    applicationQuestions: [
      "Have you applied to SPACEAI before?",
      "Are you okay to work for salary offered in job listing?",
      "Ready to contribute to SPACE AI for Min 1 year?",
      "Have you completed any graduate / Diploma studies?",
      "Are you willing to take up on small task assignment as a pre requisite for interview?"
    ],
    certification: [
      "Copy of your degree certificate here. (Required)"
    ]
  },
  "senior-mern-developer": {
    title: "Senior MERN Stack Developer",
    experience: "5 to 10 Years Experience",
    location: "Remote",
    type: "Full-time, Part-time",
    email: "careers@pmspace.ai",
    naukriUrl: "https://www.naukri.com/spaceaapp-jobs-careers-125589152",
    overview: "We are looking for a talented Senior Full-Stack Developer (MERN) to join our team, specializing in building scalable and efficient web applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js. The ideal candidate is passionate about cutting-edge technologies and thrives in a collaborative, fast-paced environment.",
    responsibilities: [
      {
        category: "Frontend Development",
        tasks: [
          "Develop interactive and responsive user interfaces using React and Next.js.",
          "Implement server-side rendering (SSR) and static site generation (SSG) using Next.js.",
          "Optimize application performance for speed and SEO."
        ]
      },
      {
        category: "Backend Development",
        tasks: [
          "Build robust RESTful APIs and GraphQL endpoints using NestJS and Node.js.",
          "Design and implement scalable backend services with a focus on performance and security.",
          "Integrate third-party APIs and microservices."
        ]
      },
      {
        category: "Database Management",
        tasks: [
          "Design and manage efficient database schemas using MongoDB.",
          "Optimize database queries and ensure data consistency.",
          "Manage backups, migrations, and database monitoring."
        ]
      },
      {
        category: "API Development and Integration",
        tasks: [
          "Develop and maintain GraphQL schemas, queries, and mutations.",
          "Ensure seamless communication between frontend and backend services."
        ]
      },
      {
        category: "Code Quality and Collaboration",
        tasks: [
          "Write clean, reusable, and maintainable code adhering to best practices.",
          "Conduct code reviews and participate in collaborative team sessions.",
          "Document development workflows, processes, and key components."
        ]
      },
      {
        category: "Testing and Deployment",
        tasks: [
          "Implement unit tests, integration tests, and end-to-end tests using modern testing frameworks.",
          "Deploy applications to cloud platforms and monitor for performance and issues.",
          "Utilize CI/CD pipelines to streamline development and deployment workflows."
        ]
      }
    ],
    requirements: [
      "Frontend: Proficiency in React, Next.js, and modern JavaScript (ES6+).",
      "Backend: Strong knowledge of Node.js, NestJS, and TypeScript.",
      "Database: Experience with MongoDB, including schema design and optimization.",
      "API Development: Hands-on experience with GraphQL, REST APIs, and their integration.",
      "Familiarity with server-side rendering (SSR) and static site generation (SSG) in Next.js.",
      "Knowledge of version control systems, particularly Git.",
      "Experience with testing frameworks such as Jest, Cypress, or Mocha."
    ],
    preferred: [
      "Experience with cloud services like AWS, Azure, or Google Cloud Platform.",
      "Familiarity with Docker and Kubernetes for containerization and orchestration.",
      "Knowledge of authentication mechanisms like OAuth2, JWT, and session management.",
      "Understanding of performance optimization and caching strategies (e.g., Redis).",
      "Familiarity with Agile and Scrum development methodologies."
    ],
    softSkills: [
      "Strong analytical and problem-solving skills.",
      "Excellent communication and team collaboration abilities.",
      "Self-motivated with the ability to work independently and as part of a team."
    ],
    benefits: [
      "Competitive salary and performance-based bonuses.",
      "Flexible working hours with remote work options.",
      "Opportunities for professional development and skill enhancement.",
      "Collaborative and inclusive work environment.",
      "Paid sick time",
      "Paid time off",
      "Provident Fund",
      "Performance bonus",
      "Yearly bonus"
    ]
  },

  "python-developer-ai": {
    title: "Python Developer (AI & LLMs)",
    experience: "1+ Years of Relevant Experience",
    location: "Remote",
    type: "Full-time",
    email: "careers@pmspace.ai",
    naukriUrl: "https://www.naukri.com/spaceaapp-jobs-careers-125589152",
    overview: "We seek a Python Developer with expertise in graph databases (Neo4j), RAG pipelines, and vLLM optimization. You'll design scalable AI systems, enhance retrieval-augmented workflows, and deploy high-performance language models to power our project analytics engine.",
    responsibilities: [
      {
        category: "AI & LLM Systems",
        tasks: [
          "Build end-to-end RAG (Retrieval-Augmented Generation) pipelines for context-aware AI responses.",
          "Implement and fine-tune vLLM for efficient inference of large language models (LLMs).",
          "Collaborate with ML engineers to deploy transformer models (e.g., BERT, GPT variants) and vector databases."
        ]
      },
      {
        category: "Data & Database Architecture",
        tasks: [
          "Architect and optimize graph database systems (Neo4j) to model project knowledge networks and relationships.",
          "Develop Python-based microservices for data ingestion, processing, and API integrations (FastAPI, Flask)."
        ]
      },
      {
        category: "Performance & Operations",
        tasks: [
          "Monitor system performance, conduct A/B tests, and ensure low-latency responses in production.",
          "Ensure scalability and efficiency of AI systems."
        ]
      }
    ],
    requirements: [
      "Proficiency in Python and AI/ML libraries (PyTorch, TensorFlow, Hugging Face Transformers).",
      "Hands-on experience with graph databases, especially Neo4j (Cypher queries, graph algorithms).",
      "Demonstrated work on RAG pipelines (retrieval, reranking, generation) using frameworks like LangChain or LlamaIndex.",
      "Experience with vLLM or similar LLM optimization tools (quantization, distributed inference).",
      "Knowledge of vector databases (e.g., FAISS, Pinecone) and embedding techniques.",
      "Familiarity with cloud platforms (AWS/GCP/Azure) and containerization (Docker, Kubernetes)."
    ],
    preferred: [
      "Strong experience with FastAPI or Flask for building high-performance APIs.",
      "Familiarity with MLOps principles and tools (e.g., MLflow, Kubeflow).",
      "Contributions to open-source AI/ML projects.",
      "Experience in performance tuning and A/B testing for AI systems in a production environment."
    ],
    softSkills: [
      "Strong analytical and problem-solving skills.",
      "Excellent communication and team collaboration abilities.",
      "Self-motivated with the ability to work independently and as part of a team."
    ],
    benefits: [
      "Competitive salary and performance-based bonuses.",
      "Flexible working hours with remote work options.",
      "Opportunities for professional development and skill enhancement.",
      "Collaborative and inclusive work environment.",
      "Paid sick time",
      "Paid time off",
      "Provident Fund",
      "Performance bonus",
      "Yearly bonus"
    ]
  }
};

export function generateStaticParams() {
  return (Object.keys(jobDetails) as JobId[]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const job = jobDetails[params.slug as JobId];
  if (!job) return {};
  return {
    title: `${job.title} | Careers | Space AI`,
    description: job.overview,
    alternates: {
      canonical: `https://pmspace.ai/careers/${params.slug}/`,
    },
    openGraph: {
      title: `${job.title} | Space AI`,
      description: job.overview,
      url: `https://pmspace.ai/careers/${params.slug}/`,
      type: "website",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const job = jobDetails[params.slug as JobId];
  if (!job) notFound();
  return <CareerJobClient job={job} />;
}
