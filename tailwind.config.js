/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'brand-navy':'#0D47A1',
        'brand-navy-deep':'#093577',
        'brand-blue-light':'#E0F7FA',
        'brand-teal':'#26A69A',
        'brand-yellow':'#FFB300',
        'brand-pink':'#F06292',
        'brand-green':'#2EA678',
      },
      fontFamily: {
        display:['Fredoka','system-ui','sans-serif'],
        body:['Nunito','system-ui','sans-serif'],
      },
    }
  },
  plugins: [],
}
