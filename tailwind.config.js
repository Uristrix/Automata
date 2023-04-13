/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#e3e3e3',
        blue: '#285abe',
        green: '#2ba64a',
        ocean: '#006a8d',
        'dark-blue': '#24292e',
        'pseudo-white': '#bebebe',
      },
    },
  },
  plugins: [],
};
