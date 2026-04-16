"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   const scrollPosition = window.scrollY;
      //   setIsVisible(scrollPosition > window.innerHeight * 0.8);
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 min-w-0">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-blue-600 transition-colors"
                >
                  Home
                </button>

                <button
                  onClick={() => scrollToSection("how-i-work")}
                  className="text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-blue-600 transition-colors"
                >
                  How I Work
                </button>

                <button className="text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-blue-600 transition-colors">
                  About
                </button>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <ThemeToggle />

                <button
                  onClick={() => scrollToSection("booking")}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base whitespace-nowrap bg-[var(--button-bg-color)] hover:bg-[var(--button-hover)] backdrop-blur-[10px] border border-[var(--button-border)] text-white rounded-lg transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
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
