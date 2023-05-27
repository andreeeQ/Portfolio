/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        sil:["Shadows Into Light", "cursive"],
        oswald:["Oswald", "sans-serif"],
      inter: ['inter','serif'],
      }
    },
  },
  plugins: [],
}

