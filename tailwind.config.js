/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { pgbpGold: "#CDAE70", pgbpTeal: "#135D68" },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui"], serif: ["Cinzel","Georgia","serif"] }
    },
  },
  plugins: [],
}