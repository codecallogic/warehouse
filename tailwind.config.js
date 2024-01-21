/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'lato': ['var(--font-lato)']
      },
      colors: {
        'schemeone': '#7454B3',
        'schemetwo': '#FB6DA2',
        'schemethree': '#FED369',
        'schemefour': '#53C4ED',
        'schemefive': '#2BDE1C',
        'schemeSix': '#EEE3FF',
        'schemeSeven': '#F71042',
        'white': '#FFFFFF',
        'black': '#000000',
        'grey': '#A6ACB0',
        'gold': '#B78514',
        'goldShadeOne': '#EDE0C6',
        'green': '#09BD3C',
        'red': '#FC2E53',
        'darkSchemeOne': '#202020'
      },
    },
  },
  plugins: [],
}
