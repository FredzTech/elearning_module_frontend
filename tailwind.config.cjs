/** @type {import('tailwindcss').Config} */
module.exports = {
  //Get to find out about the purge command for css dead code elimination.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0068D9",
        secondary: "#F0F7FF",
        plain: "#FFFFFF",
      },
      screens: {
        phone: { max: "640px" },
        tablet: "600px",
        laptop: "1024px",
        desktop: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
