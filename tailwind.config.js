/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'large-board': 'repeat (7, 5rem)',
        'small-board': 'repeat (7, 4rem)'
      },
      gridTemplateRows: {
        'large-board': '5rem repeat (5, 5rem)',
        'small-board': 'repeat (6, 4rem)'
      }
    },
  },
  plugins: [],
}

