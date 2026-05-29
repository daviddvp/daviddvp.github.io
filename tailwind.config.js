/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base oscura tipo "control plane"
        base: {
          900: "#070a0f",
          800: "#0b0f17",
          700: "#0f141e",
          600: "#161c28",
          500: "#1d2533",
        },
        // Acentos: emerald (k8s), sky (cloud), violet (platform)
        emerald: {
          DEFAULT: "#2dd4bf",
          soft: "#5eead4",
        },
        sky: {
          DEFAULT: "#38bdf8",
          soft: "#7dd3fc",
        },
        violet: {
          DEFAULT: "#a78bfa",
          soft: "#c4b5fd",
        },
      },
      fontFamily: {
        // Sora para titulares, Manrope para cuerpo, JetBrains Mono para código/etiquetas
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,212,191,0.18), 0 18px 50px -20px rgba(45,212,191,0.35)",
        "glow-sky": "0 0 0 1px rgba(56,189,248,0.18), 0 18px 50px -20px rgba(56,189,248,0.35)",
        card: "0 24px 60px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(900%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
