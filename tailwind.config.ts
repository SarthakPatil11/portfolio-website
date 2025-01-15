import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "purple-start": "#5e42a6",
        "pink-end": "#b74e91",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #5e42a6, #b74e91)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
