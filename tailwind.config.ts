import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--canvas-elevated)",
        canvas: "var(--canvas)",
        accent: "var(--accent)",
        "accent-coral": "var(--accent-coral)",
        "accent-pink": "var(--accent-pink)",
        "accent-blush": "var(--accent-blush)",
        "accent-peach": "var(--accent-peach)",
        "accent-yellow": "var(--accent-yellow)",
        "accent-sage": "var(--accent-sage)",
        "accent-rose": "var(--accent-rose)",
        "accent-2": "var(--accent-2)",
        text: "var(--text)",
        "text-heading": "var(--text-heading)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        "exp-display": ["var(--font-exp-display)", "Georgia", "serif"],
        "exp-body": ["var(--font-exp-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 4px 32px rgba(245, 143, 124, 0.18)",
        "glow-soft": "0 8px 32px rgba(0, 0, 0, 0.2)",
        glass: "0 12px 40px rgba(0, 0, 0, 0.2)",
        soft: "var(--shadow-soft)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
