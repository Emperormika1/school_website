/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    sm: '640px',  
    md: '768px',   
    lg: '1024px', 
    xl: '1280px', 
  },
}


