/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{ts,tsx}", 
    "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary": '#360EF1',
      "neon_green": '#70FF00',
      "waving_brown": '#F4C641',
      "tealish": "#00FFC2",
    }
  },
  plugins: [],
}

