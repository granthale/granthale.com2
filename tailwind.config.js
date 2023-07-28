/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./pages/**/*.{ts,tsx}", 
    "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary": '#360EF1',
      "neon-green": '#70FF23',
      "waving-brown": '#F4C641',
      "tealish": "#00FFC2",
      "white": "#FFFFFF",
      "background": "#FDF3F1",
      "gray": "#808080",
      "reddish":"#E55C41",
    }
  },
  plugins: [],
}

