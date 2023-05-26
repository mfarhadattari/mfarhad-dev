/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Preahvihear: ["Preahvihear", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
