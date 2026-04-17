"use client";

import { motion } from "motion/react";
import { Cog, Link } from "lucide-react";
import { projects } from "./about-data";
import { AboutSectionHeading } from "./AboutSectionHeading";
import { div } from "motion/react-client";

export function AboutProjectsSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <AboutSectionHeading icon={Cog} title="Portfolio Projects" />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-blue-600/50"
              >
                <header className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {project.name}
                    {project.tech && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({project.tech})
                      </span>
                    )}
                  </h3>
                  {project.link && (
                    <div className="flex items-center gap-2">
                      <Link className="h-4 w-4 text-[var(--icon-color)]"/>
                      <a
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-[var(--about-text-hover)]"
                      >
                        {project.link}
                      </a>
                    </div>
                  )}
                </header>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-[var(--icon-color)]">
                  {project.description.map((descriptionLine) => (
                    <li key={descriptionLine} className="leading-relaxed">
                      {descriptionLine}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
