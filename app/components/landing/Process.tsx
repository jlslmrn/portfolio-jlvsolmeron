"use client";

import { motion } from "motion/react";
import { Code, Lightbulb, MessageSquare, Rocket, TestTube } from "lucide-react";
import { workSteps } from "./data";

const stepIcons = {
  messageSquare: MessageSquare,
  lightbulb: Lightbulb,
  code: Code,
  testTube: TestTube,
  rocket: Rocket,
} as const;

export function Process() {
  return (
    <section id="how-i-work" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How I Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple process to keep the build clear, collaborative, and practical from start to launch.
          </p>
        </motion.div>

        <div className="space-y-8">
          {workSteps.map((step, index) => {
            const StepIcon = stepIcons[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 p-8 bg-card border border-border rounded-xl hover:border-blue-600/50 transition-all group">
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <div className="text-6xl font-bold text-blue-600/20 leading-none">{step.number}</div>
                    <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                      <StepIcon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < workSteps.length - 1 && (
                  <div className="hidden md:block absolute left-[4.5rem] top-full w-0.5 h-8 bg-border" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-flex px-8 py-4 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover)] text-white rounded-lg transition-colors hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

