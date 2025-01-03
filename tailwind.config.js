/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["stroke-lime-400", "stroke-sky-400", "stroke-violet-600"],
  theme: {
    extend: {
      // keyframes: {
      //   aman: {
      //     "100%": {
      //       strokeDashoffset: "20"
      //     }
      //   }
      // },
      // animation: {
      //   aman: "aman 1s linear forwards" // Customize the duration, timing, and repetition
      // }
    }
  },
  plugins: []
};
