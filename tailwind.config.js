/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-color": {
          "50": "#FF9500",
          "70": "#FFBF66",
          "75": "#FFCA80",
          "80": "#FFD499",
          "90": "#FFEACC",
          "95": "#FFF4E5",
          "97": "#FFF9F0",
          "99": "#FFFDFA"
        },
        "white-color": {
          "90": "#E4E4E7",
          "95": "#F1F1F3",
          "97": "#F7F7F8",
          "99": "#FCFCFD"
        },
        "grey-color": {
          "10": "#191919",
          "15": "#262626",
          "20": "#333333",
          "30": "#4C4C4D",
          "35": "#59595A",
          "40": "#656567",
          "60": "#98989A",
          "70": "#B3B3B3"
        },
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}