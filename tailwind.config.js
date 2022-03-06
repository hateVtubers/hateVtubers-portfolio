module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aquamarine: {
          DEFAULT: '#64FFDA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#DEFFF7',
          300: '#B6FFED',
          400: '#8DFFE4',
          500: '#64FFDA',
          600: '#2CFFCD',
          700: '#00F3B9',
          800: '#00BB8E',
          900: '#008363',
        },
        'jelly-bean': {
          DEFAULT: '#228D9A',
          50: '#8EDCE6',
          100: '#7DD7E2',
          200: '#5BCDDB',
          300: '#3AC3D4',
          400: '#29ACBB',
          500: '#228D9A',
          600: '#18636C',
          700: '#0E393E',
          800: '#040F10',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};
