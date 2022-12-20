/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(35,173,91)",
      secondary: "#0A5071",
      navcolor: "#BF3100",
      white: "#f8fafc",
      black: "#000000",
      grey: "#DEE5E5",
      "pale-grey": "#DEE5E5",
      rust: "#BF3100",
      orange: "#FFA630",
      "blue-700": "#1d4ed8",
    },
    variables: {
      "hero-video":
        "url(https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4)",
    },
  },
}
