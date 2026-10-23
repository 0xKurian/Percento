export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        xomBg: {
          light: '#f3f2ef',
          dark: '#171717',
        },
        xomCard: {
          light: '#ffffff',
          dark: '#202020',
        },
        xomBorder: {
          light: '#e5e5e5',
          dark: 'rgba(255, 255, 255, 0.09)',
        },
        xomBlue: {
          DEFAULT: '#0a66c2',
          dark: '#4a9be0',
          hover: '#084e96',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        math: ['KaTeX_Main', 'serif']
      }
    },
  },
  plugins: [],
}
