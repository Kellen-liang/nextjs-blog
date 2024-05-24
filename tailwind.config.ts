import type { Config } from 'tailwindcss';

const config = {
  darkMode: [ 'class' ],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      textColor: {
        skin: {
          base: 'rgba(var(--color-text-base))',
          accent: 'rgba(var(--color-accent))',
          inverted: 'rgba(var(--color-fill))',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'rgba(var(--color-fill))',
          accent: 'rgba(var(--color-accent))',
          inverted: 'rgba(var(--color-text-base))',
          card: 'rgba(var(--color-card))',
          'card-muted': 'rgba(var(--color-card-muted))',
        },
      },
      outlineColor: {
        skin: {
          fill: 'rgba(var(--color-accent))',
        },
      },
      borderColor: {
        skin: {
          line: 'rgba(var(--color-border))',
          fill: 'rgba(var(--color-text-base))',
          accent: 'rgba(var(--color-accent))',
        },
      },
      fill: {
        skin: {
          base: 'rgba(var(--color-text-base))',
          accent: 'rgba(var(--color-accent))',
        },
        transparent: 'transparent',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
     
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [ require('tailwindcss-animate') ],
} satisfies Config;

export default config;