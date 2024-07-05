import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'active-input': 'linear-gradient(90deg, hsl(249, 99%, 64%) 0%, hsl(278, 94%, 30%) 100%)'
      },
      boxShadow:{
        'deafult': "0 0 3px 1px rgba(0, 0, 0, 0.35)"
      }
    },
    colors: {
      white: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(270, 3%, 87%)',
        300: 'hsl(279, 6%, 55%)'
      },
      red: 'hsl(0, 100%, 66%)',
      violet: 'hsl(278, 68%, 11%)'
    },
    fontSize: {
      'sxm': '0.625rem'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.10em',
      normal: '0',
      wide: '0.07em',
      wider: '0.16em',
    },
    
  },
  plugins: [],
};
export default config;
