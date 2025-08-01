module.exports = {
    content : [
'./pages/**/*.{js,ts,jsx,tsx,mdx}',
'./components/**/*.{js,ts,jsx,tsx,mdx}',
"./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')({
        strategy : 'class'
    })
  ],
}