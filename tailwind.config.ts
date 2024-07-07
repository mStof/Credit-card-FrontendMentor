import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'active-input':
          'linear-gradient(90deg, hsl(249, 99%, 64%) 0%, hsl(278, 94%, 30%) 100%)'
      },
      boxShadow: {
        deafult: '0 0 3px 1px rgba(0, 0, 0, 0.35)'
      },
      spacing: {
        15: '3.75rem',
        23: '5.75rem',
        61: '15.25rem'
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
      xb: '1.75rem',
      bg: '1.25rem',
      xm: '0.875rem',
      md: '0.75rem',
      sm: '0.625rem'
    },
    letterSpacing: {
      xb: '0.16em',
      bg: '0.14em',
      xm: '0.12em',
      md: '0.07em',
      none: '0',
      sm: '-0.05em',
      xs: '-0.10em'
    }
  },
  plugins: []
};
export default config;
