module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["EB Garamond", "Garamond", "Times New Roman", "Times", "serif"],
      serif: ["EB Garamond", "Garamond", "Times New Roman", "Times", "serif"],
      mono: ["EB Garamond", "Garamond", "Times New Roman", "Times", "serif"]
    },
    extend: {
      colors: {
        meriadock: {
          DEFAULT: "#1E4C45",
          silver: "#D9D9D9"
        }
      }
    }
  },
  plugins: []
};
