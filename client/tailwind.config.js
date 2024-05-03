/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      color: {
        'pattern-color': '#3CB371',
        'primary-color': "#9246F5",
      },
      backgroundColor: {
        'main-bg': '#1e1a23',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#2B2830',
        'tertiary-dark-bg': '#2F2F30',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'login-pattern':
          "url(./src/assets/bgLoginPage.svg)",
        'exception-pattern':
        "url(./src/assets/exceptionBg.svg)"
      },
      margin: {
        '-n10': '-2.5rem', // Define uma margem negativa de -2.5rem
      },
    },
  },
  plugins: []
}

