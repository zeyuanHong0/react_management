/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "base-menu-width": "260px",
        "base-menu-min-width": "81px",
      },
      height: {
        "base-menu-logo-height": "50px",
        "base-tabbar-height": "50px",
      },
      backgroundColor: {
        "base-menu-background": "#fff",
      },
      fontSize: {
        "base-logo-title-fontSize": "18px",
      },
    },
  },
  plugins: [],
};
