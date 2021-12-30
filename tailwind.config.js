module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Roboto', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
      require("@tailwindcss/forms")
  ],
}
