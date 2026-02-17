import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#5b7b54",
        "accent-hover": "#4a6344",
        cream: "#faf9f7",
      },
      fontFamily: {
        "serif-elegant": ["var(--font-shippori)", "Shippori Mincho", "serif"],
        script: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.02)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
