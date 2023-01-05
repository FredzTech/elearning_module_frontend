/**  @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'blue':'#0068D9',
      'light-grey':'#CDCDCD'

    },
    screens: {
      'sm': {'min': '300px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend:{
      height:{
        'h-auto': 'auto',
        'h-1/2'	:' 50%',
        'h-1/3'	:' 33.333333%',
        'h-2/3'	:' 66.666667%',
        'h-1/4'	:' 25%',
        'h-2/4'	:' 50%',
        'h-3/4	':' 75%',
        'h-1/5'	:' 20%',
        'h-2/5	':' 40%',
        'h-3/5'	:' 60%',
        'h-4/5'	:' 80%',
        'h-1/6'	:' 16.666667%',
        'h-2/6'	:' 33.333333%',
        'h-3/6'	:' 50%',
        'h-4/6'	:' 66.666667%',
        'h-5/6	':' 83.333333%',
        'h-full'	:' 100%',
        'h-screen'	:' 100vh',
        'h-min'	:' min-content',
        'h-max'	:' max-content',
        'h-fit'	:' fit-content',


      },
      width:{
        'w-auto': 'auto',
        'w-1/2'	:' 50%',
        'w-1/3'	:' 33.333333%',
        'w-2/3'	:' 66.666667%',
        'w-1/4'	:' 25%',
        'w-2/4'	:' 50%',
        'w-3/4	':' 75%',
        'w-1/5'	:' 20%',
        'w-2/5	':' 40%',
        'w-3/5'	:' 60%',
        'w-4/5'	:' 80%',
        'w-1/6'	:' 16.666667%',
        'w-2/6'	:' 33.333333%',
        'w-3/6'	:' 50%',
        'w-4/6'	:' 66.666667%',
        'w-5/6	':' 83.333333%',
        'w-full'	:' 100%',
        'w-screen'	:' 100vw',
        'w-min'	:' min-content',
        'w-max'	:' max-content',
        'w-fit'	:' fit-content',


      }
    }
  },
  plugins: [],
}
