/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
    extend: {
      backgroundImage: {
        "mobile-home": "url('home/background-home-mobile.jpg')",
        "tablet-home": "url('home/background-home-tablet.jpg')",
        "desktop-home": "url('home/background-home-desktop.jpg')",

        "mobile-destination":
          "url('destination/background-destination-mobile.jpg')",
        "tablet-destination":
          "url('destination/background-destination-tablet.jpg')",
        "desktop-destination":
          "url('destination/background-destination-desktop.jpg')",

        "mobile-crew": "url('crew/background-crew-mobile.jpg')",
        "tablet-crew": "url('crew/background-crew-tablet.jpg')",
        "desktop-crew": "url('crew/background-crew-desktop.jpg')",

        "mobile-technology":
          "url('technology/background-technology-mobile.jpg')",
        "tablet-technology":
          "url('technology/background-technology-tablet.jpg')",
        "desktop-technology":
          "url('technology/background-technology-desktop.jpg')",
      },
      colors: {
        "prim-black": "#0B0D17",
        "prim-light-blue": "#D0D6F9",
        "prim-white": "#FFF",
        "prim-transparent": "rgba(255,255,255,0.0.2)",
      },
    },
  },
  plugins: [],
};
