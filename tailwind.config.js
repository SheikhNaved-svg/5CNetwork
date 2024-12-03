/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ["Poppins"],
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(45, 89, 128, 0) -27.12%, #1B3363 100%)',
        'custom-gradient2': 'linear-gradient(90deg, #2D5980 2.8%, rgba(45, 89, 128, 0) 226.94%)',
       'custom-gradient-vertical': 'linear-gradient(180deg, #1B3363 5%, rgba(45, 89, 128, 0) 170%)',
       'custom-gradient3': 'linear-gradient(180deg, #1B3363 5%, rgba(45,89,128,0) 170%)',
       'custom-gradient4': 'linear-gradient(270deg, rgba(45, 89, 128, 0) -0.04%, #2D5980 49.98%, rgba(45, 89, 128, 0) 100%)',
       'text-gradient': 'linear-gradient(90deg, #2D5980 0%, #5E93C7 100%)',
      },
      boxShadow: {
        'inset-light': '-22.39px 22.39px 22.39px 0px rgba(255, 255, 255, 0.1) inset',
        'inset-dark': '22.39px -22.39px 22.39px 0px rgba(165, 165, 165, 0.1) inset',
      },
      backdropBlur: {
        'custom': '30px',
      },
      screens: {
        'custom-sm': '530px',
        'custom-lg':'2000px',
        'max-h-500': { 'raw': '(max-height: 500px)' },
      },
     
    },
  },
  plugins: [],
}

