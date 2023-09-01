/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffc629',
        'primary-200': '#FFF8DE',
        'primary-300': '#FFEDB2',
        neutral: '#000',
      },
    },
  },
  plugins: [],
};
