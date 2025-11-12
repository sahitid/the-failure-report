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
      },
      maxWidth: {
        'email': '600px',
      },
    },
  },
  plugins: [],
}

