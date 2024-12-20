/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        "mdGreen" : "#739451",
        "mdYellow" : "#ecedd1"
      },
    }
  },
  plugins: [],
}

