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
      },
    },
  },
  plugins: [],
};
