/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#282c34",
        primary: "#506680",
        secondary: "#8899A6",
        text: "FFFFFF",
        accent: "#FFD700",
      },
    },
  },
  plugins: [],
};
