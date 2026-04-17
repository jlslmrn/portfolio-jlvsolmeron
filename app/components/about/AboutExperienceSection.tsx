"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experience } from "./about-data";
import { AboutSectionHeading } from "./AboutSectionHeading";

export function AboutExperienceSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <AboutSectionHeading icon={Briefcase} title="Professional Experience" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <header className="mb-4">
                  <h3 className="mb-1 text-2xl font-bold text-foreground">{job.role}</h3>
                  <p className="mb-1 text-lg font-semibold text-[var(--icon-color)]">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </header>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-[var(--icon-color)]">
                  {job.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="leading-relaxed">
                      {responsibility}
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
