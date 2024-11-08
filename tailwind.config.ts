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
        nunitoSans: ["var(--font-nunito-sans)"],
      },
      colors: {
        primary: "#0074B7",
        primaryLight: "#60A3D9",
        secondary: "#F6A21E",
        secondaryLight: "#F6A21E",
        yellowNormal: "#F4EF88",
        yellowLight: "#F8FA90",
      },
    },
  },
  plugins: [],
};
export default config;
