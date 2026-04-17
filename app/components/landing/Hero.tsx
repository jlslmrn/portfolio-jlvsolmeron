"use client";

import { motion } from "motion/react";
import { Mail, FastForward, CalendarSync } from "lucide-react";
import { CyberpunkCanvas } from "../canvas";
import { LinkedinIcon } from "./LinkedinIcon";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,var(--hero-radial-1)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_25%,var(--hero-radial-2)_0%,transparent_60%)]" />
      <div className="mid-grid-animation absolute inset-0 opacity-100 [background-image:linear-gradient(var(--hero-grid)_1px,transparent_1px),linear-gradient(90deg,var(--hero-grid)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--hero-overlay-from),var(--hero-overlay-via),var(--hero-overlay-to))]" />

      <CyberpunkCanvas />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-medium mx-auto"
            >
              Philippines • Available for remote work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="m-0 text-center text-[clamp(1.4rem,7.5vmin,4.5rem)] font-bold leading-[1.05]"
            >
              <span className="block whitespace-nowrap">
                You can now sleep.
              </span>
              <span
                className="block whitespace-nowrap hero-gradient-text hero-glow"
              >
                AI systems run 24/7
              </span>
              <span className="block whitespace-nowrap">Focus on growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 text-xl md:text-2xl max-w-xl leading-relaxed mx-auto"
            >
              I build internal tools, automation, and systems that keep your
              business running without manual work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <a
                href="#booking"
                className="px-8 py-4 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover)] backdrop-blur-[10px] border border-(var(--button-border)) text-white rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]"
              >
                <CalendarSync className="h-4 w-4" />
                <span>Book a Discovery Call</span>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-white/20 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[var(--button-bg-color)] hover:border-white/40 hover:shadow-md active:scale-[0.98]"
              >
                <FastForward className="h-4 w-4" />
                <span>View My Work</span>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm pt-6"
            >
              Led a team of 7 developers • Enterprise systems • Automation
              workflows
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-2 justify-center"
            >
              <a
                href="mailto:jlvsolmeron@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jlvsolmeron"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
