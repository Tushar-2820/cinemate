/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkmode : 'class',
  theme: {
    extend: {
      screens : {
        "other" : {'min' : '350px', 'min' : '1200px',}
      },
      colors : {
        darkbg :"#000000"
      }
    },
  },
  plugins: [],
}
