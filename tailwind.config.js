/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#CDAE70", 50: "#FBF8F1", 100: "#F5EBD7", 200: "#EAD7B0",
          300: "#DCC089", 400: "#CDAE70", 500: "#B8954E", 600: "#9A7A3F",
          700: "#7C6135", 800: "#5F4A2D", 900: "#473726",
        },
        teal: {
          DEFAULT: "#135D68", 50: "#E6F1F3", 100: "#C7DFE3", 200: "#9FC8CE",
          300: "#6BABB4", 400: "#37909B", 500: "#135D68", 600: "#0F4C56",
          700: "#0A3B43", 800: "#072A30", 900: "#04181C",
        },
        dark: "#0A2A2E", cream: "#F8F4E9", muted: "#555555", ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter","ui-sans-serif","system-ui","sans-serif"],
        serif: ["Cinzel","Georgia","serif"],
        mono: ["JetBrains Mono","ui-monospace","SFMono-Regular","monospace"],
      },
      maxWidth: { content: "72rem" },
      letterSpacing: { widest: "0.25em" },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "ripple": "ripple 6s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulseSlow: { "0%, 100%": { opacity: "0.4" }, "50%": { opacity: "0.8" } },
        ripple: { "0%": { transform: "scale(0.95)", opacity: "0.15" }, "100%": { transform: "scale(1.5)", opacity: "0" } },
      },
    },
  },
  plugins: [],
};
