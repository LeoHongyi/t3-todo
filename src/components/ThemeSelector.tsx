import { useTheme } from "y/contexts/useTheme";
import { useEffect, useState } from "react";


const colors = [
  { name: "blue", color: "bg-accent-blue" },
  { name: "green", color: "bg-accent-green" },
  { name: "red", color: "bg-accent-red" },
  { name: "yellow", color: "bg-accent-yellow" },
  { name: "pink", color: "bg-accent-pink" },
  { name: "purple", color: "bg-accent-purple" },
  { name: "orange", color: "bg-accent-orange" },
];

const getInitialAccent = () => {
  return localStorage.getItem("accent") ?? "blue";
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const perfersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme ?? (perfersDark ? "dark" : "light");
};

const ThemeSelector = () => {
  const value = useTheme();
  console.log(value);

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

  return (
    <div className="items-center gap-2 sm:flex">
      <div className="flex cursor-pointer gap-2">
        {theme === "dark" && (
          <svg
            onClick={() => {
              changeTheme("light");
              localStorage.removeItem("theme");
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}

        {theme === "light" && (
          <svg
            onClick={() => {
              changeTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </div>

      <div className="flex cursor-pointer gap-2">
        {colors.map(({ name, color }) => (
          <div
            key={name}
            onClick={() => setAccent(name)}
            className={`${color} flex h-10 w-10 items-center justify-center rounded-full text-white`}
          >
            {accent === name && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
