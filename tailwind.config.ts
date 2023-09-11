import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/*.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      kalame: [
        "./public/assets/fonts/KalamehWeb/KalamehWeb/woff2/KalamehWeb_Regular.woff2",
        "./public/assets/fonts/KalamehWeb/KalamehWeb/woff2/KalamehWeb_Bold.woff2",
        "./public/assets/fonts/KalamehWeb/KalamehWeb/woff2/KalamehWeb_Black.woff2",
      ],
      yekan: [
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan.ttf",
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan thin.ttf",
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan medium.ttf",
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan bold.ttf",
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan black.ttf",
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan extrablack.ttf",
        "./public/assets/fonts/Yekan/Yekan-Font-master/Qs_Iranyekan extrabold.ttf",
      ],
    },
    extend: {
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
