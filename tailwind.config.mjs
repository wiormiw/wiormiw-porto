/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blaziken: {
          core: '#FFD700', // Intense Gold (Center)
          ember: '#FF8C00', // Dark Orange (Mid)
          flame: '#DC2626', // Fire Red (Edges)
          magma: '#7F1D1D', // Deep Red/Brown (Borders)
          jet: '#000000', // Pure Black (Text)
          smoke: '#1F2937', // Dark Grey (Secondary Text)
        },
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin': 'spin 25s linear infinite reverse',
        'heat-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { left: '200%' },
        },
      },
    },
  },
  plugins: [],
};
