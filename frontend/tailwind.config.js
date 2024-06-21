/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        secondary: "#4A5568",
        accent: "#38B2AC",
        hover: "#319795",
        background: "#F7FAFC",
        'dark-900': '#1a1a1a',
        'dark-800': '#2a2a2a',
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
