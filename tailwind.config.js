const colors = require("tailwindcss/colors");
const { config } = require("./config");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        app: `${config.font.name}, Roboto, Arial, sans-serif`,
      },
      colors: {
        gray: colors.trueGray,
        ...config.colors,
      },
      spacing: {
        "2/3": "66.666667%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
