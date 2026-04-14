"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { buildList } from "./data";

export function BuildList() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What I Help Businesses Build</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
          {buildList.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-foreground font-medium capitalize">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

