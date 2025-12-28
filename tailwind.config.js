/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#011627",
        panel: "#0b111b",
        accent: "#4189DD",
        text: "#f5f6fa",
      },
      fontFamily: {
        groote: ['var(--font-groote)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

