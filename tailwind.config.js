/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "corbett-blue": "#2310C8",
        "corbett-green": "#B5C810",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
