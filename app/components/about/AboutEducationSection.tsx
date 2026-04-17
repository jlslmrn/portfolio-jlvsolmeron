"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { AboutSectionHeading } from "./AboutSectionHeading";

export function AboutEducationSection() {
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
          <AboutSectionHeading icon={GraduationCap} title="Education" />

          <article className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-2 text-2xl font-bold text-foreground">BS Computer Science</h3>
            <p className="mb-1 text-lg font-semibold text-[var(--icon-color)]">Ateneo de Davao University</p>
            <p className="text-sm text-muted-foreground">2017 - 2021</p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
