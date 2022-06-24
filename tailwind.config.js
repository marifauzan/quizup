module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: [
      "light", // first one will be the default theme
      "cupcake",
    ],
  },
};
