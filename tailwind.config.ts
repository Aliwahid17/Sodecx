import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        "dark-primary": "#19191A",
        "light-primary": "#F9FFFF",
      },
      backgroundImage: {
        "gradient": "linear-gradient(90deg, #81FEE9 0%, #88F5EA 6.25%, #90ECEC 12.5%, #97E3ED 18.75%, #9EDAEE 25%, #A6D1F0 31.25%, #ADC8F1 37.5%, #B4BFF3 43.75%, #BBB6F4 50%, #C3ADF5 56.25%, #CAA4F7 62.5%, #D19BF8 68.75%, #D992F9 75%, #E089FB 81.25%, #E780FC 87.5%, #EF77FE 93.75%, #F66EFF 100%)"
      }
    },
  },
  plugins: [],
}
export default config
