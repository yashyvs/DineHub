module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Josefin Sans"],
        secondary: ["Urbanist"],
      },
      colors: {
        primary: "#ff6600",
        secondary: "#ff8b3d",
        accent: "#ffaf7a",
        dark: "#231942",
        light: "#e0c9b1",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: ".5" },
          "50%": { opacity: ".2" },
        },
      },
      animation: {
        flicker: "flicker 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
