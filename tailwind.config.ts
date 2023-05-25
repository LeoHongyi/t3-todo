import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--main-accent)",
        "accent-red": "rgb(var(--accent-red))",
        "accent-yellow": "rgb(var(--accent-yellow))",
        "accent-blue": "rgb(var(--accent-blue))",
        "accent-pink": "rgb(var(--accent-pink))",
        "accent-purple": "rgb(var(--accent-purple))",
        "accent-orange": "rgb(var(--accent-orange))",
        "accent-green": "rgb(var(--accent-green))",
      },
    },
  },
  plugins: [],
} satisfies Config;
