/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          card: '#1c1c26',
          border: '#2a2a35',
        },
        accent: {
          purple: '#7c6ff7',
          green: '#3ecf8e',
          amber: '#f5a623',
          red: '#ff6b6b',
        },
        text: {
          primary: '#f0eff8',
          secondary: '#a0a0b0',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'pill': '100px',
      },
      transitionDuration: {
        '200': '200ms',
      },
      animation: {
        'confetti': 'confetti 1s ease-in-out',
        'xp-pop': 'xp-pop 0.5s ease-out',
      },
      keyframes: {
        'xp-pop': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
