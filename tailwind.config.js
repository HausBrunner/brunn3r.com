/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'my-blue': '#3A6EA5', // Example custom color
        },
    },
  },
  plugins: [],
}