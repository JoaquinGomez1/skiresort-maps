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
      darker: {
        light: "#393742",
        DEFAULT: "#35333E",
        dark: "#2e2c36",
      },
    },
    extend: { ...defaultTheme },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
