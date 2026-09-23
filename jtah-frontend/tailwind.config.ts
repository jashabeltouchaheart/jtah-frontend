import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      colors: {
        "lilac-tint": "var(--lilac-tint)",
        "lilac-mid": "var(--lilac-mid)",
        "indigo-deep": "var(--indigo-deep)",
        white: "var(--white)",
        // Brand tokens (hex so opacity modifiers like bg-brand/20 work)
        brand: { DEFAULT: "#6a4f9b", hover: "#593d88" },
        ink: "#3a3560",
        lilac: "#7c74b2",
        tint: "#eeecf7",
      },
      textColor: {
        secondary: "var(--text-secondary)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
