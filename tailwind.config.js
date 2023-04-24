/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "hsl(220, 98%, 61%)",
        "gradient-start ": "hsl(192, 100%, 67%)",
        "gradient-end ": "hsl(280, 87%, 65%)",
        "ex-blue-300 ": "hsl(235, 21%, 11%)",
        "ex-blue-500 ": "hsl(235, 24%, 19%)",
        "ex-grayBlue-100": "hsl(234, 39%, 85%)",
        "ex-grayBlue-200": "hsl(236, 33%, 92%)",
        "ex-grayBLue-300": "hsl(234, 11%, 52%)",
        "ex-grayBLue-400": "hsl(233, 14%, 35%)",
        "ex-grayBLue-500": "hsl(237, 14%, 26%)",

      }
    },
  },
  plugins: [],
}