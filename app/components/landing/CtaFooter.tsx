"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "./LinkedinIcon";

export function CtaFooter() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let&apos;s build something that actually fits how your business works.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#booking"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-white/90 rounded-lg transition-colors inline-flex items-center justify-center font-medium"
            >
              Book a Call
            </a>
            <a
              href="mailto:jlvsolmeron@gmail.com"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border-2 border-white/30 rounded-lg transition-colors inline-flex items-center justify-center font-medium"
            >
              Send a Message
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="mailto:jlvsolmeron@gmail.com"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              <span className="text-sm">jlvsolmeron@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/jlvsolmeron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
            >
              <LinkedinIcon size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/20 text-center relative z-10"
      >
        <p className="text-white/60 text-sm">(c) 2026 John Lorenz Solmeron. All rights reserved.</p>
      </motion.div>
    </section>
  );
}

