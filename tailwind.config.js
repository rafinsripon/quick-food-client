/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2a8c0c",
        
"secondary": "#61e236",
        
"accent": "#44ffcd",
        
"neutral": "#271F33",
        
"base-100": "#FCFCFD",
        
"info": "#4C75F0",
        
"success": "#45D383",
        
"warning": "#FBBC51",
        
"error": "#E83068",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
