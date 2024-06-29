/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SFPRO', 'sans-serif'], // Define your custom font family
        'gt-apline': ['GTApline', 'sans-serif'], // Define your custom font family
        'capraia': ['Capraia', 'sans-serif'], // Define your custom font family
      },
    },
  },
  plugins: [],
}

