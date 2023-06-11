/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#1FDF64',
        'backGround': '#121212',
        'inactive-text-color': '#B3B3B3',
      },
      boxShadow:{
        coverShadow : "0 2px 4px 0 rgba(0,0,0,.2)"
      }
    },
  },
  plugins: [],
}

