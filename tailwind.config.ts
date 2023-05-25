import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#FF4F5A",
        "accent-red": "#FF4F5A",
      },
    },
  },
  plugins: [],
} satisfies Config;
