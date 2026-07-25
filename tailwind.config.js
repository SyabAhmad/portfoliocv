/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e0e7ff",
          100: "#c7d2fe",
          200: "#a5b4fc",
          300: "#818cf8",
          400: "#6366f1",
          500: "#4f46e5",
          600: "#4338ca",
          700: "#3730a3",
          800: "#1e1b4b",
          900: "#0f0f23",
          950: "#0a0a1a",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        surface: {
          DEFAULT: "#1a1a3e",
          light: "#252550",
          lighter: "#2d2d60",
        },
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(135deg, #6366f1 0%, #a21caf 100%)",
        "footer-gradient": "linear-gradient(90deg, #0a0a1a 0%, #6366f1 100%)",
        "card-gradient": "linear-gradient(135deg, #1a1a3e 0%, #252550 100%)",
        "hero-gradient": "linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 50%, #0a0a1a 100%)",
      },
      fontFamily: {
        calligraphy: ["Send Flowers", "cursive"],
        bebas: ["Bebas Neue", "sans-serif"],
        handwriting: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
