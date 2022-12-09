module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        celeste_color: {
          DEFAULT: "#161616",
          light: "#282828",
          hover: "#2d2d2d",
          blue: "#45C8FF",
          purple: "#7941F2",
          gray: "#dddddd",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
