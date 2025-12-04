/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design System: Modern Editorial - Warm & Organic
        surface: {
          root: '#f5f5f4', // stone-100
          1: '#ffffff',
          2: '#fafaf9', // stone-50
          3: '#e7e5e4', // stone-200
          inverse: '#1c1917', // stone-900
        },
        primary: {
          DEFAULT: '#ea580c', // orange-600
          hover: '#c2410c', // orange-700
          light: '#ffedd5', // orange-100
        },
        content: {
          DEFAULT: '#1c1917', // stone-900
          muted: '#57534e', // stone-600
          subtle: '#a8a29e', // stone-400
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': [
          '4.5rem',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-xl': [
          '3.75rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'display-l': [
          '3rem',
          { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'heading-l': [
          '2.25rem',
          { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'heading-m': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        'heading-s': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-l': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-s': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        caption: [
          '0.75rem',
          {
            lineHeight: '1.5',
            fontWeight: '500',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          },
        ],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(28, 25, 23, 0.05)',
        'soft-hover': '0 10px 25px -5px rgba(28, 25, 23, 0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
