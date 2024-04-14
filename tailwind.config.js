/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#eb6753",
        softWhite: "#BEBDBD"
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
 
      },
    },
  },
  plugins: [],
};

