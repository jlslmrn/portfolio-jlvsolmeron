"use client"

import { motion } from "motion/react";
import { Award } from "lucide-react";
import { AboutSectionHeading } from "./AboutSectionHeading";

export function AboutSummarySection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <AboutSectionHeading icon={Award} title="Professional Summary" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Web Developer Team Lead with 5 years of experience in e-commerce systems, enterprise applications, and
            automation workflows. Experienced in managing development teams, maintaining large-scale systems, and
            building product catalogs for PayPal through outsourced enterprise development. Strong focus on
            performance optimization, API integrations, and scalable system design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
