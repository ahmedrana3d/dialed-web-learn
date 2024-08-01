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
        'inter': ['Inter', 'sans-serif'], // Define your custom font family
        'sf-bold': ['SFPRO Bold', 'sans-serif'], // Define your custom font family
        'helvetica': ['Helvetica', 'sans-serif'], // Define your custom font family
        'international': ['NB-International', 'sans-serif'], // Define your custom font family
        'international-bold': ['NB-International-Bold', 'sans-serif'], // Define your custom font family
      },
      textColor : {
        'dialed-purple' : "#AAA3FF",
      },
      backgroundColor : {
             'dialed-back' : "#040316",
      },
      fontSize : {
        'huge-xl' : "18rem",
        'big-xl' : "14rem",
      },
      colors: {
        'dark-gray': '#333333',
      },
    },
  },
  plugins: [],
}

