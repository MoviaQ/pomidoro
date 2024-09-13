/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sprawdź, czy to odpowiada Twojej strukturze plików
  ],
  theme: {
    extend: { 
      colors: {
        'primary-light-green': "#BCC596",
        'primary-ligth-orange': "#BCC596",
        'primary-ligth-yellow': "#BCC596",
        'primary-heavy-green': "#BCC596",
      },
      fontFamily: {
        'sans': ['Nerko One', 'sans-serif'], // Ustawia Nerko One jako domyślną czcionkę sans
      },
    },
  },
  plugins: [],
}