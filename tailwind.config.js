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
        "mobile-home": "url('assets/home/background-home-mobile.jpg')",
        "tablet-home": "url('assets/home/background-home-tablet.jpg')",
        "desktop-home": "url('assets/home/background-home-desktop.jpg')",

        "mobile-destination":
          "url('assets/destination/background-destination-mobile.jpg')",
        "tablet-destination":
          "url('assets/destination/background-destination-tablet.jpg')",
        "desktop-destination":
          "url('assets/destination/background-destination-desktop.jpg')",

        "mobile-crew": "url('assets/crew/background-crew-mobile.jpg')",
        "tablet-crew": "url('assets/crew/background-crew-tablet.jpg')",
        "desktop-crew": "url('assets/crew/background-crew-desktop.jpg')",

        "mobile-technology":
          "url('assets/technology/background-technology-mobile.jpg')",
        "tablet-technology":
          "url('assets/technology/background-technology-tablet.jpg')",
        "desktop-technology":
          "url('assets/technology/background-technology-desktop.jpg')",
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
