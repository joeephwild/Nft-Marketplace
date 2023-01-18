module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Glusp: ["Glusp", "sans-serif"],
      "Sora-ExtraLight": ["Sora-ExtraLight"],
      "Sora-Medium": ["Sora-Medium"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-120vh)",
            transform: "translateX(-120vh)",
          },
          "100%": {
            "-webkit-transform": "translateX(0vh)",
            transform: "translateX(0vh)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
