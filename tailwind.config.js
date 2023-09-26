const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    minHeight: (theme) => ({
      0: "0",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    extend: {
      colors: {
        brown: "#b69268",
        gray: "#4F4C4B",
        awhite: "#e9e5e1",
        bwhite: "#efe4d7",
        wheat: "#ebc8ae",

      },
      container: {
        center: true,
        padding: "22px",
        screens: {
          'xl': "1024px",
          '2xl': '1536px'
        }
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Montserrat", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
