export type ServiceItem = {
  icon: "code2" | "workflow" | "shoppingCart" | "headphones";
  title: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  link: string | null;
};

export type WorkStepItem = {
  number: string;
  icon: "messageSquare" | "lightbulb" | "code" | "testTube" | "rocket";
  title: string;
  description: string;
};

export const coreServices: ServiceItem[] = [
  {
    icon: "code2",
    title: "Internal Tools & Dashboards",
    description:
      "For teams that need admin panels, dashboards, or workflow tools built around how they actually operate.",
  },
  {
    icon: "workflow",
    title: "Automation & Integrations",
    description:
      "For businesses that want forms, spreadsheets, CRMs, APIs, and notifications connected into one smoother workflow.",
  },
  {
    icon: "shoppingCart",
    title: "E-commerce Systems Support",
    description:
      "For brands and teams that need storefront, catalog, or operational improvements without disrupting production.",
  },
  {
    icon: "headphones",
    title: "Ongoing Product Development",
    description:
      "For businesses that need a dependable developer to maintain, improve, and scale an existing system over time.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Automated Job Matching System",
    description:
      "Built a workflow that processes 300+ listings a day and filters them automatically, reducing the need for manual review and making relevant opportunities easier to spot.",
    tags: ["n8n", "AI Integration", "API Webhooks", "Automation"],
    link: null,
  },
  {
    title: "Calorie Tracking App",
    description:
      "Designed a web app for tracking calorie intake and progress with a simple user flow, real-time computation, and mobile-friendly interaction.",
    tags: ["React", "Real-time Calculations", "UI/UX"],
    link: "https://calorie.leej.site",
  },
  {
    title: "E-commerce Template / Storefront",
    description:
      "Created a responsive storefront layout focused on product presentation, usability, and conversion clarity.",
    tags: ["Shopify", "Conversion Optimization", "Responsive Design"],
    link: "https://shop.leej.site",
  },
];

export const workSteps: WorkStepItem[] = [
  {
    number: "01",
    icon: "messageSquare",
    title: "Discovery Call",
    description:
      "We talk through what you're building, where the friction is, and what a good outcome actually looks like.",
  },
  {
    number: "02",
    icon: "lightbulb",
    title: "Planning & System Design",
    description:
      "I map out the structure, key features, and workflow before development starts, so the build is clear and practical from day one.",
  },
  {
    number: "03",
    icon: "code",
    title: "Development",
    description:
      "I build with real-world use in mind: maintainable code, reliable integrations, and room to grow.",
  },
  {
    number: "04",
    icon: "testTube",
    title: "Testing & Refinement",
    description:
      "We review the build together, catch gaps early, and tighten the details before launch.",
  },
  {
    number: "05",
    icon: "rocket",
    title: "Launch & Support",
    description:
      "Once everything is ready, I help get it live and can continue improving it as your needs evolve.",
  },
];

export const buildList = [
  "internal dashboards",
  "admin panels",
  "client portals",
  "lead capture systems",
  "workflow automations",
  "API-connected tools",
  "e-commerce support systems",
  "business process tools",
];

