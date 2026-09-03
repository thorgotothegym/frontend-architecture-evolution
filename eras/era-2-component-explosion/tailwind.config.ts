import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-ink': '#1a1f36',
        'brand-slate': '#4b5563',
        'brand-mist': '#f4f5f7',
        'brand-border': '#e2e4eb',
        'brand-blue': '#2f6fed',
        'brand-blue-dark': '#1f4fbd',
        'status-todo': '#6b7280',
        'status-progress': '#d97706',
        'status-done': '#1f9d55',
        'status-blocked': '#dc2626',
      },
      spacing: {
        18: '4.5rem',
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
};

export default config;
