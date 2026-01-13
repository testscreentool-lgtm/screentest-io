import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Poppins for headings, buttons, nav
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        // Inter for body text, descriptions
        'inter': ['var(--font-inter)', 'sans-serif'],
        // Default sans falls back to Inter
        'sans': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        // Brand colors
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
    },
  },
  plugins: [],
}

export default config
