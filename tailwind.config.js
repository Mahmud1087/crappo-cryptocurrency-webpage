/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screeens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      backgroundImage: {
        bg1: "url('/images/hero-bg.png')",
        bg2: "url('/images/newsletter-bg.png')",
        bg3: "url('/images/newsletter-box.png')"
      },
      fontFamily: {
        fontFamily: "'oxanium', sans-serif"
      }
    },
  },
  plugins: [],
}
