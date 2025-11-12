/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wharton-red': {
          DEFAULT: '#990000',
          light: '#C41230',
          dark: '#7A0000',
        },
        'cream': {
          50: '#FDFCF8',
          100: '#FAF7EE',
          200: '#F5EDDB',
          300: '#EFE3C8',
          400: '#E8D7B0',
          500: '#DFC896',
        },
        'soft-yellow': {
          DEFAULT: '#F4E8C1',
          light: '#FFF9E6',
        },
      },
      maxWidth: {
        'email': '600px',
      },
    },
  },
  plugins: [],
}

