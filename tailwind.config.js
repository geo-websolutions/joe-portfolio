/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // if you're using the /app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // if you're using the /pages directory
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",   // good to include if using /src
  ],
  theme: {
    extend: {
      colors: {
        dark: "#222831",
        darkGray: "#393E46",
        lightGray: "#948979",
        beige: "#DFD0B8",
        darker: "#1A1E25",
        darkest: "#12151A",
        grayLight: "#B8B8B8",
        grayLighter: "#E0E0E0",
        warmBeige: "#E8D9C5",
        coolBeige: "#F5F0E8",
        accent: "#6D8B74",
        accentLight: "#8FB996",
        accentDark: "#4F6D5A",
      },
    },
  },
  plugins: [],
};
