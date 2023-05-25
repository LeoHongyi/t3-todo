import { createContext, useContext, useEffect, useState } from "react"
import type { Dispatch, ReactNode, SetStateAction } from "react"

type TC = {
  theme: string;
  changeTheme: Dispatch<SetStateAction<string>>;
  accent: string;
  setAccent: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<TC | null>(null)

const getInitialAccent = () => {
  if (typeof window === "undefined") return "blue";
  return localStorage.getItem("accent") ?? "blue";
};

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const savedTheme = localStorage.getItem("theme");
  const perfersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme ?? (perfersDark ? "dark" : "light");
};
export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, changeTheme] = useState<string>(getInitialTheme());
    const [accent, setAccent] = useState<string>(getInitialAccent());

    useEffect(() => {
      const root = document.documentElement;

      root.style.setProperty("--main-accent", `rgb(var(--accent-${accent}))`);
      localStorage.setItem("accent", accent);

      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }, [theme, accent]);
  const value: TC = { theme, changeTheme, accent, setAccent };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }
  return context;
}
