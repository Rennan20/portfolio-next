import type { Config } from 'tailwindcss';
import fontFamily from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '1.6875rem',
        lg: '2rem',
        xl: '8rem',
      },
    },
    screens: {
      sm: '375px',
      '2sm': '600px',
      md: '744px',
      cmd: '805px',
      '2md': '834px',
      lg: '1024px',
      '2lg': '1280px',
      '3lg': '1340px',
      xl: '1440px',
      '2xl': '1640px',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)', ...fontFamily.fontFamily.sans],
      manrope: ['var(--font-manrope)', ...fontFamily.fontFamily.sans],
      montserrat: ['var(--font-montserrat)', ...fontFamily.fontFamily.sans],
      barlow: ['var(--font-barlow)', ...fontFamily.fontFamily.sans],
    },
    extend: {
      theme: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          scaleAndFade: {
            '0%': { opacity: '0', transform: 'scale(1)' },
            '50%': { opacity: '0.5', transform: 'scale(1.5)' },
            '100%': { opacity: '0', transform: 'scale(1)' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-200px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1.5s ease-in-out forwards',
          slideInLeft: 'slideInLeft 1.2s ease-in-out forwards',
          scaleAndFade: 'scaleAndFade 2.5s ease-in-out infinite',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
