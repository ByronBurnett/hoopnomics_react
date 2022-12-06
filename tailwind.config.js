/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      colors:{
      primary : '#1f2543',
    },


    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
