/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow1: "#FFCE5B",
        featuresY: "#BB870E",
        bright: "#FFFBEF",
      },
      backgroundImage: {
        "home-image": "url('/Images/Home-bg.png')",
        privacy: "url('/Images/TCimage.png')",
        terms: "url('/Images/TCimage.png')",
        "footer-texture": "url('/img/footer-texture.png')",
        "custom-radial":
          "radial-gradient(50% 44.8% at 50% 50%, #F1CE7B 19.98%, #FEF6E4 100%)",
      },
      fontFamily: {
        HvDTrial: ["HvDTrial Brandon Grotesque", "sans-serif"],
        Almendra: ["Almendra", "serif"],
      },
      width: {
        custom1: "80rem",
        custom3: "54rem",
        custom4: "37rem",
        custom5: "37rem",
        custom7: "45rem",
        custom8: "67rem",
        custom9: "33rem",
        custom10: "76rem",
        custom11: "35.5rem",
        custom12: "31.6rem",
        custom13: "79rem",
        custom14: "49rem",
        custom15: "30rem",
      },
      height: {
        custom6: "38rem",
        custom11: "23rem",
        custom16: "35rem",
        custom17: "50rem",
      },
      rotate: {
        deg1: "-10.67deg",
        deg2: "10.67deg",
      },
      padding: {
        5.1: "35rem",
        10.1: "10rem",
      },
      spacing: {
        "3px": "34rem",
      },
    },
  },
  plugins: [],
};
