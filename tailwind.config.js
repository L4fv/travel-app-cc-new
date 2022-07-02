const colors = require("tailwindcss/colors");
const { config } = require("./config");

module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  
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
 
  plugins: [require("@tailwindcss/typography")],
};
