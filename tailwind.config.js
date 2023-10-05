const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "intro":["crimson"],
        "para":["nunito"],
        "heading":["ubuntu"],
        "martian":["martian"],
        "titillium":["tittillium"]
      },
      screens:{
        "xs":"350px",
      },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        }
    },
  },
  plugins: [require("daisyui")],
}

