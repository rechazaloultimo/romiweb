/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "thread-cyan": "#00D9FF",
        "thread-magenta": "#FF00FF",
        "thread-yellow": "#FFFF00",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#000",
            a: {
              color: "#000",
              textDecoration: "underline",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
