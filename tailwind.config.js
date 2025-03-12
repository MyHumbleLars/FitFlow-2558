/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        humble: {
          primary: '#2872FA',    // Blue
          secondary: '#000000',  // Black
          text: '#000000',       // Black
          light: '#FFFFFF',      // White
          dark: '#000000',       // Black
          accent: '#2872FA',     // Blue
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}