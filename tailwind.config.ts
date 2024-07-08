import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#1A73E8',
          200: '#FECACA',
          300: '#94A3B8',
          400: '#F87171',
        },
        secondary: {
          100: '#1A202C',
          200: '#FFFFFF',
          300: '#4B4B4B',
          400: '#9CA3AF',
        },
      },
      opacity: {
        11: '0.11',
      },
    },
  },
  plugins: [],
};
export default config;
