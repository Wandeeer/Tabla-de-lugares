/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Comfortaa', 'Montserrat', 'sans-serif'],
      serif: ['Inter', 'Lato', 'serif'],
    },
    // colors: {
    //   'blue-solid': '#071739', // azul rey
    //   'blue-light': '#4B6382', // azul claro
    //   'blue-sky': '#A4B5C4', // azul cielo
    //   'gray-light': '#CDD5DB', // gris claro
    //   'coffe-solid': '#A68868', // cafe oscuro 
    //   'coffe-light': '#E3C39D', // cafe claro
    //   'white': '#FFFFFF'
    // }
  },
  
  plugins: [],
}

