/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050505',
          900: '#0A0A0A', // Matte Black
          850: '#121212',
          800: '#1A1A1A', // Deep Charcoal
          750: '#222222',
          700: '#2C2C2C',
          600: '#404040',
        },
        gold: {
          DEFAULT: '#C5A059', // Muted Gold
          light: '#DFC084',
          hover: '#D4B06A',
          dark: '#9A7A38',
          subtle: 'rgba(197, 160, 89, 0.12)',
          border: 'rgba(197, 160, 89, 0.25)',
        },
        copper: {
          DEFAULT: '#D49B5B',
          light: '#E6BA7E',
          dark: '#A86E32',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.25em',
        'loose-editorial': '0.18em',
      },
    },
  },
  plugins: [],
}
