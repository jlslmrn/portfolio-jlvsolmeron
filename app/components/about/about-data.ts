export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
};

export type ProjectEntry = {
  name: string;
  link?: string;
  tech?: string;
  description: string[];
};

export const technicalSkills: Record<string, string[]> = {
  Programming: ["JavaScript", "Python", "PHP"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "jQuery"],
  Backend: ["Node.js", "RESTful APIs", "GraphQL"],
  Data: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "Supabase", "Prisma"],
  "Automation & Integration": ["n8n", "Airtable", "Webhooks", "API Integrations", "AI Agents"],
  Infrastructure: ["Docker", "CI/CD", "Cloudflare", "Vercel", "Git"],
  Tools: ["Jira", "JQL", "Confluence (Documentation)"],
};

export const experience: ExperienceEntry[] = [
  {
    company: "Awesome OS",
    role: "Web Developer Team Lead",
    period: "July 2023 - Present",
    responsibilities: [
      "Led a team of 7 developers supporting enterprise-level e-commerce systems for PayPal (via outsourced engagement)",
      "Maintained and optimized large-scale applications ensuring 100% SLA compliance and top KPI performance",
      "Owned end-to-end system workflows including development, monitoring, and production support",
      "Managed product catalog systems across multiple e-commerce platforms aligned with PayPal requirements",
      "Improved operational efficiency through automation workflows and system monitoring improvements",
    ],
  },
  {
    company: "Awesome OS",
    role: "Web Developer",
    period: "April 2021 - June 2023",
    responsibilities: [
      "Developed and maintained features for e-commerce platforms using JavaScript and API integrations",
      "Built reusable and maintainable code for production systems",
      "Enhanced user experience and improved system performance across applications",
    ],
  },
  {
    company: "Visual Insights",
    role: "Full-stack Developer Intern",
    period: "April - May 2020",
    responsibilities: [
      "Developed staff and analytics system using the MERN stack",
      "Built frontend and backend components including APIs and UI features",
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: "Portfolio Landing Page",
    link: "leej.site",
    description: [
      "Built a personal portfolio website to showcase projects, skills, and services for freelance, part-time, and full-time opportunities",
      "Integrated Calendly booking system for seamless discovery call scheduling",
      "Implemented automated lead capture workflows using n8n, storing and notifying leads via webhooks and integrations",
    ],
  },
  {
    name: "Job Automation System",
    tech: "n8n",
    description: [
      "Built automated job scraping and matching system processing 300+ listings daily",
      "Implemented AI-based filtering using APIs and webhook integrations",
    ],
  },
  {
    name: "Calorie Deficit App",
    link: "calorie.leej.site",
    description: [
      "Developed a web-based calorie tracking application with real-time calculations and a user-friendly interface",
    ],
  },
  {
    name: "Shopify Store Template",
    link: "shop.leej.site",
    description: [
      "Created a responsive Shopify template optimized for product display and conversions",
    ],
  },
];
