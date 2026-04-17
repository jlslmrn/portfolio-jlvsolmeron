"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "./data";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Portfolio Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions built for efficiency and scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl border border-border transition-all bg-card">
                <div className="flex items-start justify-between mb-4 gap-1">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-[var(--icon-color)] transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[var(--icon-color)] transition-colors"
                      aria-label="Visit project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-[var(--icon-color)] border border-blue-600/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

