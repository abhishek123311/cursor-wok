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
        primary: "#FF5C00", // bright saffron orange
        secondary: "#662D91", // vibrant purple
        background: "#F9F5F0",
        action: "#00D084", // mint glow
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'soft-glow': 'soft-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'soft-glow': {
          '0%': { 
            boxShadow: '0 0 5px rgba(255, 92, 0, 0.2), 0 0 10px rgba(255, 92, 0, 0.2), 0 0 15px rgba(255, 92, 0, 0.2)',
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(255, 92, 0, 0.4), 0 0 20px rgba(255, 92, 0, 0.4), 0 0 30px rgba(255, 92, 0, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;