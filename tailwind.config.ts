import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A14",
        card: "#0F1629",
        accent: "#7C5CFF",
        mint: "#3CE4D8"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124, 92, 255, 0.3), 0 20px 40px -20px rgba(124, 92, 255, 0.7)"
      }
    }
  },
  plugins: []
};

export default config;
