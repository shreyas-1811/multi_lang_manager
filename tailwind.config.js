// tailwind.config.js
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50: '#f6fbff',
          100: '#eef7ff',
          500: '#3b82f6'
        }
      }
    },
  },
  plugins: [],
}
