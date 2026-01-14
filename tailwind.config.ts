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
        // Poppins for headings, buttons, navigation
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        // Inter for body text, descriptions
        'inter': ['var(--font-inter)', 'sans-serif'],
        // Default sans falls back to Inter
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // You can add custom brand colors here if needed
      },
    },
  },
  plugins: [],
}

export default config
