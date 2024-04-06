/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      cursor: {
        ponycursorshow: 'url(/pinky_cursor.png) 8 8, auto',
        ponycursorpointer: 'url(/pinky_cursor.png) 8 8, pointer'
      },
      keyframes: {
        "loop-animation": {
          "0%": { "color": "purple" },
          "12.5%": { "color": "indigo" },
          "25%": { "color": "blue" },
          "37.5%": { "color": "green" },
          "50%": { "color": "yellow" },
          "62.5%": { "color": "orange" },
          "75%": { "color": "red" },
          "87.5%": { "color": "black" },
          "100%": { "color": "purple" },
        }
      },
      animation: {
        'loop-animation': 'loop-animation 7s linear infinite',
      }
    },
  },
  plugins: [],
}
