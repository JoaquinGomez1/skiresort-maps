const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      light: "#7D7889",
      primary: "#242132",
      secondary: "#1F1C2D",
      accent: "#F59E0B",
      darker: "#35333E",
    },
    extend: { ...defaultTheme },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
