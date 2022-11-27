/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#44AE5A",
      secondary: "#0F456A",
      navcolor: "#1e293b",
      white: "#f8fafc",
      black: "#000000",
      grey: "#A4A3A2",
      "pale-grey": "#F2F2F2",
    },
    plugins: [require("daisyui")],
    variables: {
      "hero-video":
        "url(https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4)",
    },
  },
}
