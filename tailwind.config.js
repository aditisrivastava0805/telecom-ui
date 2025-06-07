import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
      colors: {
        primary: '#2e7d32',      // deep green
        secondary: '#e0f2f1',    // minty soft bg
        accent: '#66bb6a',       // medium green
        surface: '#ffffff',      // card base
        muted: '#f0f4f3',        // background
        textDark: '#1a1a1a',
        textLight: '#6b7280',
      },
    },
  },
  plugins: [],
}
