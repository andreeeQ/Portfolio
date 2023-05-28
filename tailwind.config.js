/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: ['./index.html','./src/**/*.{jsx,js,ts,tsx}'],
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

