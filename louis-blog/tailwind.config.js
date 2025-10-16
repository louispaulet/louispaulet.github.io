/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#030712',
        'brand-secondary': '#0B1124',
        'brand-accent': '#4C6FFF',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-neuo': '18px 18px 36px rgba(0, 0, 0, 0.6), -12px -12px 30px rgba(76, 111, 255, 0.12)',
        'brand-neuo-soft': '12px 12px 24px rgba(0, 0, 0, 0.55), -10px -10px 20px rgba(76, 111, 255, 0.1)',
        'brand-neuo-inset': 'inset 6px 6px 14px rgba(0, 0, 0, 0.65), inset -6px -6px 16px rgba(76, 111, 255, 0.08)',
      },
      letterSpacing: {
        megawide: '0.35em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
