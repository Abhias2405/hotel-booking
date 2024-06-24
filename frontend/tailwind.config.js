/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5E6D3",
        secondary: "#2C3E50",
        accent: "#38B2AC",
        hover: "#319795",
        background: "#F1F2F6",
        'dark-900': "#E8E8E8",
        'dark-800': "#F5F5F5",
      },
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        heading: ['"Poppins"', "sans-serif"],
      },
    },
    container: {
      padding: { md: "10rem" },
    },
  },
  plugins: [],
};
