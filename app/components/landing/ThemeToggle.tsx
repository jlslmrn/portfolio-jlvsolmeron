"use client";

import { Moon, Sun } from "lucide-react";

const THEME_STORAGE_KEY = "theme";

export function ThemeToggle() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
      aria-label="Toggle color mode"
      title="Toggle color mode"
    >
      <Sun className="theme-toggle-sun hidden" size={18} />
      <Moon className="theme-toggle-moon" size={18} />
    </button>
  );
}
