/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4755693b',
        secondary: '#383c4a',
        sidecolor: '#0f3556',
        sidetext: '#3dac6a'
      },
      fontFamily: {
        robot: ['Roboto']
      }
    },
  },
  plugins: [],
}

