/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefefb',
          100: '#fdfbf4',
          200: '#f9f5ea',
          300: '#f3ecd8',
          400: '#e9dec0',
          500: '#dccda3',
        },
        emerald: {
          50: '#f0f9f6',
          100: '#dcefe7',
          200: '#bbdfd2',
          300: '#8cc7b0',
          400: '#54a887',
          500: '#2d8568',
          600: '#1a6650',
          700: '#0f4d3c',
          800: '#0A3A2F',
          900: '#062821',
          950: '#031a15',
        },
        gold: {
          50: '#fdfaf0',
          100: '#faf2d8',
          200: '#f4e5ad',
          300: '#ecd07a',
          400: '#e3bb4e',
          500: '#D4AF37',
          600: '#b8962a',
          700: '#937422',
          800: '#705821',
          900: '#5c481f',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', '"Noto Serif TC"', '"Songti TC"', 'serif'],
        sans: ['"Cormorant Garamond"', '"Noto Sans TC"', '"PingFang TC"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'shimmer': 'shimmer 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 80s linear infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e3bb4e 0%, #D4AF37 50%, #b8962a 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #b8962a 0%, #D4AF37 25%, #f4e5ad 50%, #D4AF37 75%, #b8962a 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #0f4d3c 0%, #0A3A2F 50%, #062821 100%)',
      },
    },
  },
  plugins: [],
};
