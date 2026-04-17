"use client";

import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/app/components/landing/LinkedinIcon";

export function AboutHeroSection() {
  return (
    <section className="relative [background:var(--bg-about-color)] backdrop-blur-[6px] pb-20 pt-32">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 [background:var(--about-radial-soft)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            John Lorenz Solmeron
          </h1>
          <p className="text-xl md:text-2xl">
            Web Developer Team Lead & AI Automation Specialist
          </p>

          <div className="relative z-10 flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Davao City, Philippines</span>
            </div>
            <a
              href="mailto:jlvsolmeron@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-[var(--about-text-hover)]"
            >
              <Mail size={18} />
              <span>jlvsolmeron@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/jlvsolmeron"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-[var(--about-text-hover)]"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
