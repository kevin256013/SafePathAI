/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC',
        salmon: '#FF5733',
        lightbeige: '#fbfbf0',
        lightsalmon: '#F88B77',
        brown: '#8B4513',
        darkbrown: '#654321',
      }
    },
  },
  plugins: [],
}

