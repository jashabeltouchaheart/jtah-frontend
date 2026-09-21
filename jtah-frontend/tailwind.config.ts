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
        // Single font family - Plus Jakarta Sans, no display/body split needed
        sans: [
          "var(--font-jakarta)",
          "Plus Jakarta Sans",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        "lilac-tint": "var(--lilac-tint)",
        "lilac-mid": "var(--lilac-mid)",
        "indigo-deep": "var(--indigo-deep)",
        white: "var(--white)",
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
