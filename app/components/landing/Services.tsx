"use client";

import { motion, scale } from "motion/react";
import { Code2, Headphones, ShoppingCart, Workflow } from "lucide-react";
import { coreServices } from "./data";

const serviceIcons = {
  code2: Code2,
  workflow: Workflow,
  shoppingCart: ShoppingCart,
  headphones: Headphones,
} as const;

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Can Help You Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Systems designed around how your business actually works — not
            one-size-fits-all templates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 320,
                  damping: 22,
                  mass: 0.7,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.16)",
                }}
                whileTap={{ scale: 0.985 }}
                className="group cursor-pointer rounded-xl border border-border bg-card p-6 will-change-transform"
              >
                <motion.div
                  className="mb-4 inline-flex"
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 18,
                  }}
                >
                  <Icon className="h-12 w-12 text-[var(--icon-color)]" />
                </motion.div>

                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
