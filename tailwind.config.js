/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: "#ec4899", // pink
        dark: "#18181b",
        light: "#f9fafb",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(135deg, #6366f1 0%, #a21caf 100%)",
        "footer-gradient": "linear-gradient(90deg, #18181b 0%, #6366f1 100%)",
        "card-gradient": "linear-gradient(135deg, #f9fafb 0%, #e0e7ff 100%)",
      },
    },
  },
  plugins: [],
};
