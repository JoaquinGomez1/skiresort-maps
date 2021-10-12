const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    
    extend: {  ...defaultTheme },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
