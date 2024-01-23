module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#2A9444",
        "secondary-blue": "#23A6F0",
        "primary-text": "#252B42",
        "secondary-text": "#2Dc071",
        "tertiary-text": "#737373",
      },
    },
  },
  plugins: [],
};