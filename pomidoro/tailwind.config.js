/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sprawdź, czy to odpowiada Twojej strukturze plików
  ],
  theme: {
    extend: { 
      colors: {
        'primary-light-green': "#BCC596",
        'primary-ligth-orange': "#F4BE82",
        'primary-ligth-yellow': "#F7E4AA",
        'primary-heavy-green': "#779C8A",
      },
      fontFamily: {
        'sans': ['Nerko One', 'sans-serif'], // Ustawia Nerko One jako domyślną czcionkę sans
      },
    },
  },
  plugins: [],
}