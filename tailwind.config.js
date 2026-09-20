/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F7F5',
          100: '#E1EBE7',
          200: '#C2D7CF',
          300: '#9ABFB2',
          400: '#6FA493',
          500: '#4A8673',
          600: '#346A5A',
          700: '#265144',
          800: '#1B3B32',
          900: '#17352D',
          950: '#0C1C18',
        },
        ivory: {
          50: '#FDFAF5',
          100: '#FAF6ED',
          200: '#F4ECE0',
          300: '#ECE0CF',
          400: '#DFCDAE',
          500: '#D2B98E',
        },
        gold: {
          50: '#FAF7F0',
          100: '#F4EDDD',
          200: '#E7D8B9',
          300: '#D7C091',
          400: '#C5A869',
          500: '#B49A63',
          600: '#9B814E',
          700: '#7B653B',
          800: '#5C4A2B',
          900: '#3D311C',
        },
        stone: {
          50: '#F9F8F6',
          100: '#F2EFEB',
          200: '#E4DFD6',
          300: '#D3CCC0',
          400: '#B6ACA0',
          500: '#978B7D',
          600: '#7A6E61',
          700: '#5E544A',
          800: '#433B34',
          900: '#2A2420',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#343434',
          900: '#222222',
          950: '#141414',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.2em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(23, 53, 45, 0.07)',
        'luxury-hover': '0 25px 50px -12px rgba(23, 53, 45, 0.15)',
      }
    },
  },
  plugins: [],
}
