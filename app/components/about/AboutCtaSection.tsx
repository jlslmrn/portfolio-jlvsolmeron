"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FooterCanvas } from "../canvasFooter";

export function AboutCtaSection() {
  return (
    <section className="relative backdrop-blur-[6px] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,var(--footer-radial-1)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_25%,var(--footer-radial-2)_0%,transparent_60%)]" />
      <div className="mid-grid-animation absolute inset-0 opacity-100 [background-image:linear-gradient(var(--footer-grid)_1px,transparent_1px),linear-gradient(90deg,var(--footer-grid)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--footer-overlay-from),var(--footer-overlay-via),var(--footer-overlay-to))]" />

      <FooterCanvas />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-lg">
            Interested in collaborating or have a project in mind? Let&apos;s
            connect and discuss how I can help.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="/#booking"
              className="px-8 py-4 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover)] backdrop-blur-[10px] border border-(var(--button-border)) text-white rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]"
            >
              Book a Call
            </Link>
            <a
              href="mailto:jlvsolmeron@gmail.com"
              className="px-8 py-4 border border-white/20 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[var(--button-bg-color)] hover:border-white/40 hover:shadow-md active:scale-[0.98]"
            >
              Send an Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-white/20 text-center relative z-10"
        >
          <p className="text-sm">
            (c) 2026 John Lorenz Solmeron.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
