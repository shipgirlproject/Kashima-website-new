/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#bababb",
        purple: "#591efa",
        darkGray: "#202023",
        white: "#ededed",
        footerGray: "#606062",
      },
      screens: {
        'md3': "1866px",
        'md2': "866px",
      },
    },
  },
  plugins: [],
}

