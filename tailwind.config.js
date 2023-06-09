/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#661AE6",
        hover: "#5b17cf",
        golden: "#d6ab3e",
        "lightG": "rgba(255, 0, 0, 0.05)"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
   plugins: [require("daisyui")],
}