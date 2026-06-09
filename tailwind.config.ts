import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gaia-brown': '#4A2C1A',
        'gaia-green': '#4CAF50',
        'gaia-cream': '#FFF8F0',
        'gaia-purple': '#7B3F98',
      },
    },
  },
  plugins: [],
}
export default config
