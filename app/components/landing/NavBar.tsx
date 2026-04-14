"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-semibold text-foreground hover:text-blue-600 transition-colors"
              >
                John Lorenz Solmeron
              </button>

              <div className="flex items-center gap-8">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm text-foreground hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("how-i-work")}
                  className="text-sm text-foreground hover:text-blue-600 transition-colors"
                >
                  How I Work
                </button>
                <ThemeToggle />
                <button
                  onClick={() => scrollToSection("booking")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
