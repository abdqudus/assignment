/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", " sans-serif"],
        // "open-sans": ["Open Sans", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        vlg: "1026px",
      },
      colors: {
        "light-gray": "rgba(30, 30, 30, 0.6)",
      },
    },
  },
  plugins: [],
};
