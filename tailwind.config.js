/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      colors: {
        main: colors.indigo,
        primary: "#ff4a52",

        secondary: colors.yellow,
        neutral: colors.gray,
      },
    },
    container: {
      center: true,
      padding: "2rem,",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
  },
  plugins: [],

};
