/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Para pegar todos os arquivos JS/TS/React
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 4s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-position': 'right center',
          },
        },
      },
      colors: {
        'green-gradient-1': '#C596D9',
        'green-gradient-2': '#6B14A6',
        'green-gradient-3': '#A735F2',
        'jet': '#1B0B26',
        'zika': '#250A40'
      }
    },
  },
  plugins: [],
}
