"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Background() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Background</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I currently work as a Web Developer Team Lead, leading a team of 7 developers supporting enterprise-level e-commerce systems and production workflows. My background includes automation, API integrations, large-scale maintenance, and systems aligned with PayPal requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              "Web Developer Team Lead",
              "5+ years of experience",
              "Enterprise e-commerce systems",
              "API and workflow automation",
              "Production support and optimization",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 className="w-5 h-5 text-[var(--icon-color)] flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

