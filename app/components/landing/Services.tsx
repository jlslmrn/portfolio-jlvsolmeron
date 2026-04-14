"use client";

import { motion } from "motion/react";
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What I Can Help You Build</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Systems designed around how your business actually works — not one-size-fits-all templates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-xl border border-border hover:border-blue-600/50 transition-all cursor-pointer bg-card"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

