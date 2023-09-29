/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple-700': '#3c005a',
        'custom-purple-600': '#800080',
        'custom-purple-500': '##d580ff',
        'custom-purple-400': '#eabfff',
        'custom-mint-green-700': '#009bb3',
        'custom-mint-green-600': '#00BFFF',
        'custom-mint-green-500': '#80eeff',
        'custom-mint-green-400': '#bff7ff',
      },
    },
  },
  plugins: [],
}

