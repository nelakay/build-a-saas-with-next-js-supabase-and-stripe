module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        celeste_color: {
          DEFAULT: "#2B2B2B",
          light: "#404040",
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
