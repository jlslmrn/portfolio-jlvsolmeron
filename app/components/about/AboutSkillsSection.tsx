"use client";

import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { technicalSkills } from "./about-data";
import { AboutSectionHeading } from "./AboutSectionHeading";

export function AboutSkillsSection() {
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
          <AboutSectionHeading icon={Code2} title="Technical Skills" />

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-blue-600/20 bg-blue-600/10 px-3 py-1 text-sm text-[var(--icon-color)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
