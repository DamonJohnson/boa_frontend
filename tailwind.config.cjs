/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "rgb(35,173,91)",
      secondary: "#0A5071",
      navcolor: "#BF3100",
      white: "#f8fafc",
      "off-white": "#F6F6F6",
      black: "#000000",
      grey: "#c5c9c9",
      "pale-grey": "#DEE5E5",
      rust: "#BF3100",
      orange: "#FFA630",
      "blue-700": "#1d4ed8",
      "gray-600": "#4b5563",
    },
   screens: {
     'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    variables: {
      "hero-video":
        "url(https://res.cloudinary.com/damonjohnson/video/upload/v1669295293/Boa/Hero-short.mp4)",
    },
  },
}
