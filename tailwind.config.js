/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bogart: ["BOGART","regular"]
      },
      colors: {
        'bg_rosa': '#FFE9FF' ,
        'bg_article': '#19191A',
        'text_article' : '#A5A5A5',
        'title_article' : '#FFFFFF',
        'bg_decoration' : '#FFC4FF',
      },
    },
  },
  plugins: [],
}
