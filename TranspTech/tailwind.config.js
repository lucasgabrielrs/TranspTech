/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FD7E14',
        secundaria: '#0056B3', 
        textosNeutros: '#5C6978'
      },
    },
  },
  plugins: [],
}

