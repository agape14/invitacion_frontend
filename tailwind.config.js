/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-celeste': '#B8E6E6',
        'pastel-rosado': '#FFD6E8',
        'pastel-crema': '#FFF8E7',
        'amarillo-abejita': '#FFE55C',
        'verde-sapito': '#A8D672',
        'cafe-osito': '#D7B49E',
        'rosa-conejito': '#FFC4E1',
        'celeste': '#87CEEB',
        'rosado': '#FFB6C1',
        'safari-green': '#22C55E',
        'safari-orange': '#F97316',
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

