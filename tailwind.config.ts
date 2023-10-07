import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        standout: 'rgb(var(--standout) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Amiri', ...defaultTheme.fontFamily.serif],
      },
      rotate: {
        270: '270deg',
      },
      keyframes: {
        'pulse-start': {
          '0%': { opacity: '1' },
          '25%': { opacity: '0.3' },
          '75%': { opacity: '1' },
        },
        'pulse-middle': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        'pulse-end': {
          '25%': { opacity: '1' },
          '75%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'loader-start': 'pulse-start 2s ease-in-out infinite',
        'loader-middle': 'pulse-middle 2s ease-in-out infinite',
        'loader-end': 'pulse-end 2s ease-in-out infinite',
      },
    },
  },
  plugins: [forms, typography],
  safelist: ['dark', 'contrast'],
  extend: {
    screens: {
      print: { raw: 'print' },
      screen: { raw: 'screen' },
    },
  },
} satisfies Config;
