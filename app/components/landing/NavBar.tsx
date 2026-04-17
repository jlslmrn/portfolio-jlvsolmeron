"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const homeHref = "/";
  const howIWorkHref = "/#how-i-work";
  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    const handleScroll = () => {
      //   const scrollPosition = window.scrollY;
      //   setIsVisible(scrollPosition > window.innerHeight * 0.8);
      setIsVisible(!isHomePage || window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push(homeHref);
  };

  const handleHowIWorkClick = () => {
    if (isHomePage) {
      scrollToSection("how-i-work");
      return;
    }

    router.push(howIWorkHref);
  };

  const handleLetsTalkClick = () => {
    if (isHomePage) {
      scrollToSection("booking");
      return;
    }

    router.push("/#booking");
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
                {isHomePage ? (
                  <>
                    <button
                      onClick={handleHomeClick}
                      className="font-bold text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-[var(--text-hover)] transition-colors"
                    >
                      Home
                    </button>

                    <button
                      onClick={handleHowIWorkClick}
                      className="font-bold text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-[var(--text-hover)] transition-colors"
                    >
                      How I Work
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href={homeHref}
                      className="font-bold text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-[var(--text-hover)] transition-colors"
                    >
                      Home
                    </Link>

                    <Link
                      href={howIWorkHref}
                      className="font-bold text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-[var(--text-hover)] transition-colors"
                    >
                      How I Work
                    </Link>
                  </>
                )}

                <Link
                  href="/about"
                  className="font-bold text-xs sm:text-sm whitespace-nowrap text-foreground hover:text-[var(--text-hover)] transition-colors"
                >
                  About
                </Link>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <ThemeToggle />

                <button
                  onClick={handleLetsTalkClick}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base whitespace-nowrap bg-[var(--button-bg-color)] hover:bg-[var(--button-hover)] backdrop-blur-[10px] border border-[var(--button-border)] text-white rounded-lg transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
                >
                  <span className="font-medium">Let&apos;s Talk</span>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
