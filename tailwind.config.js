/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Poppins sebagai default font sans
        playfair: ['Playfair Display', 'serif'], // Playfair Display untuk heading atau elemen lain
      },
    },
  },
  plugins: [],
};
