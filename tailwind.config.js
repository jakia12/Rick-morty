/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        TTTravels: ["TTTravels", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "992px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    colors: {
      black: "191d29",
      lightBlue: "#14d9e5",
      lemon: "#9dfe00",
    },
  },
  plugins: [require("flowbite/plugin")],
};
