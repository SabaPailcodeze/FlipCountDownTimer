import Mountain from "./src/Molecules/Mountain/Mountain";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Mountain: "url('/src/assets/Mountains.svg')",
        shadow: "url('/src/assets/shadow.svg')",
        background: "url('/src/assets/Background.svg')",
        "custom-gradient":
          "linear-gradient(180deg, #1D1E28 0.12%, #261C2D 94.84%, #261A2D 100%)",
      },
    },
    fontFamily: {
      "red-hat": ['"Red Hat Text"', "sans-serif"],
    },
  },
  plugins: [],
};
