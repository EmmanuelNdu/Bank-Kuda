/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'bar_shadow': '0 4px 13px rgba(0, 0, 0, 0.05)'
  },
  plugins: [],
  
}}