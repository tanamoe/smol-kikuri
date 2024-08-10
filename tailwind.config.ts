import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        tanablue: {
          900: "#031D33",
          800: "#134369",
          700: "#2D6EA3",
          600: "#4F98D3",
          500: "#6AAFE6",
          400: "#89C4F4",
          300: "#A1D3FC",
          200: "#BCE1FE",
          100: "#D5ECFF",
          50: "#E7F4FF",
        },
        tbqblue: {
          900: "#000C30",
          800: "#011958",
          700: "#022880",
          600: "#083CA8",
          500: "#115CDA",
          400: "#2684FF",
          300: "#4A9DFA",
          200: "#7DBFFB",
          100: "#B7DDFD",
          50: "#F1F9FF",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        montserrat: "Montserrat",
      },
    },
  },
} satisfies Config;
