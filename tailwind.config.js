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
        'penn-red': {
          DEFAULT: '#A80533',
          light: '#C41230',
          dark: '#7A0000',
        },
        'penn-blue': {
          DEFAULT: '#002C77',
          light: '#003D99',
          dark: '#001F55',
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
        'failure-gray': {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
        },
        'somber': {
          light: '#E8E8E8',
          DEFAULT: '#D3D3D3',
          dark: '#4A4A4A',
        },
      },
      maxWidth: {
        'email': '600px',
      },
    },
  },
  plugins: [],
}

