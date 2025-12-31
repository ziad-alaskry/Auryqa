/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Example for Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Example for Next.js pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Example for general components
    './src/**/*.{html,js,ts,jsx,tsx}', // Example for general src directory
    './index.html', // Example for a single-file setup
    ],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0D',
        silver: '#C9CCD6',
        steel: '#8E929C',
        graphite: '#1A1F2B',
      }
    },
  },
  plugins: [],
}

