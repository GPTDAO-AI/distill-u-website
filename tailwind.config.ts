import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background",
        foreground: "var(--foreground)",

        bgColor1: "#fbf7f0",
        bgColor2: "#F1F0E9",
        textColor1: "#1a1a1a",
        textColor2: "#1B4D3E",
      },
    },
  },
  plugins: [],
} satisfies Config;
