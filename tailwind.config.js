/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    colors: {
      black: "#000000",
      green: "#00A76F",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      yellow: "#ffc82c",
      gray: "#637381",
      hover: "#63738114",

      success: "#22c55e",
      warning: "#ff7849",
      error: "#ff5630",
      info: "#00b8d9",

      code: "#d63384",

      "gray-100": "#F9FAFB",
      "gray-200": "#F4F6F8",
      "gray-300": "#DFE3E8",
      "gray-400": "#C4CDD5",
      "gray-500": "#F9FAFB",
      "gray-600": "#637381",
      "gray-700": "#454F5B",
      "gray-800": "#212B36",
      "gray-900": "#161C24",
    },
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
