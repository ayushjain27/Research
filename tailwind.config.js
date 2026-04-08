module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ SAHI
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        royaltyblue: {
          400: '#4169E1',
          500: '#3A5FCD',
          600: '#2E4FAC',
          700: '#1E3F8B',
        },
      },
    },
  },
  plugins: [],  // ✅ Plugins yahan aayega
}