/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:{
          1: "#D9D9D9",
          2: "#7A8DB4",
          3: "#282C34",
        },
        blue:{
          1: "#61DAFB",
        },
        orange:{
          1: "#F24E1E",
        },
        purple:{
          1: "#5242C6",
        }

      }
    },
  },
  plugins: [],
}