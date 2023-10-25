module.exports = {
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#6574cd',
        success: '#38a169',
        danger: '#e3342f',
        warning: '#f6993f',
        info: '#6cb2eb',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      spacing: {
        '1/2': '50%',
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [],
}
