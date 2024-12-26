/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/*.ejs"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
  screens: {
    sm: '640px',  
    md: '768px',   
    lg: '1024px', 
    xl: '1280px', 
  },
}


