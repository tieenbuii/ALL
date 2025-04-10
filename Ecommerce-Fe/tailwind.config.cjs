/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#BF2929",
        secondary: "#FFDB00",
        tertiary :"#FFA400",
        // Quaternary, Quinary 
      },
      backgroundColor:{
        primary: "#BF2929",
        secondary: "#FFDB00",
        tertiary :"#FFA400",
      },
      backgroundImage:{
        "hero-gradient":'linear-gradient(#f52f32, #e11b1e)'
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
