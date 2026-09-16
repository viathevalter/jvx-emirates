/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040E16',
          900: '#061824',
          850: '#082536',
          800: '#0B3248', // Primary Brand Navy
          700: '#114663',
          600: '#185B7F',
          500: '#26739D',
          100: '#E7EEF3',
          50: '#F4F7FA',
        },
        gold: {
          300: '#EBDCBF',
          400: '#DFCA9E',
          500: '#C5A880', // Restrained Accent Gold
          600: '#A98960',
          700: '#866B46',
        },
        surface: {
          light: '#F8FAFC',
          muted: '#F1F5F9',
          dark: '#05131C',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
