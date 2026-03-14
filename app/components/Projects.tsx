import { ExternalLinkIcon, GithubIcon } from "../icons";

type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "TaskFlow Pro",
      description:
        "A collaborative project management tool with real-time updates and AI-powered task prioritization.",
      technologies: ["React", "Node.js", "WebSocket", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "EcoTracker",
      description:
        "Mobile app helping users track and reduce their carbon footprint with personalized recommendations.",
      technologies: ["React Native", "Firebase", "TensorFlow"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "DesignSystem UI",
      description:
        "Open-source component library with 50+ accessible React components and comprehensive documentation.",
      technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "DataViz Dashboard",
      description:
        "Interactive analytics dashboard for visualizing complex datasets with customizable charts and filters.",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300"
            >
              <h3 className="mb-3 text-xl">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 transition-colors hover:text-gray-900"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 transition-colors hover:text-gray-900"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
