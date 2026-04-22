import { useEffect, useState } from "react";

const themes = ["light", "dark", "sepia"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved && themes.includes(saved)) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    // Apply data-theme (main system)
    root.setAttribute("data-theme", theme);

    // Reset classes first (important)
    root.classList.remove("dark");

    // Tailwind compatibility
    if (theme === "dark" || theme === "oled") {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Cycle through themes
  const toggleTheme = () => {
    setTheme(prev => {
      const index = themes.indexOf(prev);
      return themes[(index + 1) % themes.length];
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full border border-border bg-card text-accent flex items-center justify-center hover:bg-muted transition-all"
    >
      {theme === "light" && "🌙"}
      {theme === "dark" && "☀️"}
      {theme === "sepia" && "📜"}
    </button>
  );
}