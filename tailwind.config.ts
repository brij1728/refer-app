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
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
        },
        secondary: {
          100: '#1A202C',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
        },
      },
    },
  },
  plugins: [],
};
export default config;
