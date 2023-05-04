/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#05683B',
        secondary: '#379683',
        success: '#5CDB95',
        'secondary-subtle': '#8EE4AF',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['lemonade'],
  },
}

