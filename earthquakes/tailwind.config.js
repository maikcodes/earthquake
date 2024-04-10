/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fg-green": {
          50: "#f3faf3",
          100: "#e3f5e5",
          200: "#c7ebcb",
          300: "#9cd9a3",
          400: "#73c47d",
          500: "#44a350",
          600: "#33863e",
          700: "#2b6a34",
          800: "#26552d",
          900: "#214627",
          950: "#0d2611",
        },
      },
    },
  },
  plugins: [],
};
