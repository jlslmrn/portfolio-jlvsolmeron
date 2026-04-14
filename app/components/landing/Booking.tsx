"use client";

import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";
import { useEffect } from "react";

export function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let&apos;s Talk About Your Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            If you already have a project in mind, book a quick call and tell me what you&apos;re building. I&apos;ll help you figure out the best next step.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-blue-600/5 border border-blue-600/20 rounded-xl"
          >
            <div className="flex gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-foreground font-medium">
                No pressure — this is just a short call to understand what you need and whether I&apos;m a good fit.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/YOUR_CALENDLY_USERNAME/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2563eb"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Select a time that works best for you. You&apos;ll receive a confirmation email with the meeting details.
        </motion.p>
      </div>
    </section>
  );
}

