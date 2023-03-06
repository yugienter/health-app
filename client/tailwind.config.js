/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      light: "#FFFFFF",
      primary300: "#FFCC21",
      primary400: "#FF963C",
      primary500: "#EA6C00",
      secondary300: "#8FE9D0",
      gray400: "#777777",
      dark500: "#414141",
      dark600: "#2E2E2E",
      gray300: "#8B8B8B",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: { colors: colors },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
};
