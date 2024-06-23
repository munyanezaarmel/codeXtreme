import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        spaceMono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        'gray-custom': '#6F6F6F',
        'gray-thin':"rgba(111, 111, 111, 0.1)",
        'red-days':'rgba(209, 0, 0, 0.5)',
        'build-red':'#D10000',
        'b-red':'rgba(209, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
};
export default config;
