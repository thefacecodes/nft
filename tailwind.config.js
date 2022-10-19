/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        "clash": ["Clash Display"]
      },

      colors: {
        background: "#141943",
        button: "#2F80ED",
        art: "rgba(255, 255 , 255, 0.08)",
        update: "#0E1135",
        extra: "#69EAB3",
        ordinary: "#6654F1"
      },
      backgroundImage: {
        "wave": "url('./images/tech-bg.svg')"
      }
    },
  },
  plugins: [],
}



// Extra
// 69EAB3
// EACCF8
// 6654F1

