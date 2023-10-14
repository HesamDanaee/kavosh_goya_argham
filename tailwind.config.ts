import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/*.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#2575ED",
        "dark-blue": "#184588",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        level_1: "2px 2px 2px 0 #555",
        level_2: "3px 3px 3px 0 #555",
      },
    },
  },
  plugins: [require("postcss"), require("tailwindcss")],
};
export default config;
