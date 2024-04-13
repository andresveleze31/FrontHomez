/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#eb6753",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
 
      },
    },
  },
  plugins: [],
};

