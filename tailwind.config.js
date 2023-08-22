/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", 
    "./components/**/*.{ts,tsx}"],
  darkMode: 'media',
    theme: {
    extend: {
      colors: {
        "primary": '#2563eb',
        "neon-green": '#22c55e',
        "waving-brown": '#F4C641',
        "white": "#FFFFFF",
        "background": "#FDF3F1",
        "gray": "#808080",
        "reddish":"#E55C41",
        "black": "#000000",
        "blue": "#2563eb",
        "violet": "#7c3aed"
      },
    },
    },
  variants: {
    extend: {
      typography: ['dark'],
  }},
  plugins: [
    require('@tailwindcss/typography')
  ],
}