/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/background.png')",
      },
    },
  },
  plugins: [],
};
