/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
        sans: "Inter, sans-serif",
      },
      colors: {
        primary: "#00A1E0",
        secondary: "#1E8BB6",
        white: "#F2F2F2",
        black: "#1F1F1F",
        gray: "#A8A8A8",
        cyanStart: "hsla(197, 100%, 44%, 1)",
        cyanEnd: "hsla(173, 78%, 65%, 1)",
      },
    },
  },
  plugins: [],
};
