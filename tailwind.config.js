const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|breadcrumbs|button|card|input|navbar|select|divider|ripple|spinner|listbox|popover|scroll-shadow).js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1560px",
        "3xl": "1920px",
      },
      fontFamily: {
        RobotoSlab: ["var(--font-robotoSlab)"],
        Formular: ["var(--font-formular)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#FFFFFF", // Main Bg
            secondary: "#E5E5E5", // section bg
            warning: "#BF0000", // hover effect & btn border
            info: "#660000",
          },
        },
      },
    }),
  ],
};
