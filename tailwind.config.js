/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tamarillo: {
          50: "#fff0ef",
          100: "#ffdedc",
          200: "#ffc2bf",
          300: "#ff9792",
          400: "#ff5c54",
          500: "#ff2a1f",
          600: "#ff0d00",
          700: "#db0b00",
          800: "#b40900",
          900: "#960f08",
          950: "#520400",
        },
      },
    },
  },
  plugins: [],
};
