/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#080808',
          secondary: '#111111',
          tertiary: '#171512',
        },
        text: {
          primary: '#F5F1E8',
          secondary: '#A7A39A',
        },
        accent: {
          sand: '#C4A57B',
          warm: '#D4A574',
          amber: '#E8B87D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
