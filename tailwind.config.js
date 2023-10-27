/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        def: "calc((100vw - 1180px) / 2)",
        desk:"calc(((100vw - 1240px) / 2) + 40px)",
        title_top: "78px",
        title_bottom: "58px",
      },
      fontFamily: {
        primary: "'Plus Jakarta Sans', sans-serif",
        logo: "'Sacramento', cursive",
      },
      fontSize: {
        subtitle: "22px",
      },
      height: {
        header: "76px",
      },
      colors: {
        primary: "#FF8906",
        order: "#E8E8E84D",
        detail: "#4F5665",
        border: "#DEDEDE",
        input_bg: "#FCFDFE",
        brown: "#8E6447",
        footer: "#4F5665",
        promo: "#88B788",
      },
      screens: {
        desk: "1440px",
        mobile_l: "425px",
        mobile: "465px",
        mobile_m:"375px",
        detailProduct: "872px"
      },
      gap: {
        19: "19px",
      },
    },
  },
  plugins: [],
}

