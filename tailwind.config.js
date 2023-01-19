/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: { xs: { max: '639px' } },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'cupcake'],
    darkTheme: 'dark',
  },
};
