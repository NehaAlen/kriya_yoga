/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: 
    {
      fontFamily :
      {
        Poppins :["Poppins", "sans-serif"]
      },
      backgroundColor: 
      {
        'black': 'rgba(171,139,101)',
      },
      backgroundOpacity: {
        '85': '0.85',
      },
      

      
    },

  },
  plugins: [],
}

