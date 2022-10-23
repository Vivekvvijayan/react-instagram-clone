/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        display: ["group-hover"],
    },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
}
}
