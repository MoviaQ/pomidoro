/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sprawdź, czy to odpowiada Twojej strukturze plików
  ],
  theme: {
    extend: { 
      backgroundImage: {
        'orchard-page': "url('/pomidoro/public/orchard.jpeg')",
      },
      colors: {
        'primary-light-green': "#BCC596",
        'primary-light-orange': "#F4BE82",
        'primary-light-yellow': "#F7E4AA",
        'primary-heavy-green': "#779C8A",
      },
      fontFamily: {
        'sans': ['Nerko One', 'sans-serif'], // Ustawia Nerko One jako domyślną czcionkę sans
      },
      transitionProperty: {
        'dropdown': 'opacity, transform'
      },
      transitionDuration: {
        'dropdown': '300ms'
      },
      transform: {
        'dropdown': 'translateY(-10px)'
      },
    },
  },
  plugins: [],
}