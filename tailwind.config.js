/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.liquid',
    './_layouts/**/*.liquid',
    './_pages/**/*.liquid',
    './_posts/**/*.liquid',
    './index.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

