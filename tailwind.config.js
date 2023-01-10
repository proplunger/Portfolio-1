/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#f80331",
          
 "secondary": "#ffbb00",
          
 "accent": "#37CDBE",
          
 "neutral": "#3D4451",
          
 "base-100": "#3d4451",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
