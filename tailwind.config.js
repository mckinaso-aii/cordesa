/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cordesa: {
          yellow: '#FFD500',
          'yellow-dark': '#E6C000',
          'yellow-light': '#FFE066',
          black: '#000000',
          white: '#FFFFFF',
          'white-off': '#F8FAFC',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        }
      },
      backgroundImage: {
        'cordesa-primary': 'linear-gradient(135deg, #FFD500 0%, #E6C000 100%)',
        'cordesa-secondary': 'linear-gradient(135deg, #FFE066 0%, #FFD500 100%)',
        'cordesa-duotone': 'linear-gradient(135deg, #FFD500 0%, #FFFFFF 50%, #000000 100%)',
        'cordesa-modern': 'linear-gradient(90deg, #FFD500 0%, #FFE066 50%, #E6C000 100%)',
        'cordesa-dark': 'linear-gradient(135deg, #000000 0%, #374151 50%, #FFD500 100%)',
        'cordesa-light': 'linear-gradient(135deg, #FFFFFF 0%, #FFE066 50%, #FFD500 100%)',
        'cordesa-glass': 'linear-gradient(135deg, rgba(255, 213, 0, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        industrial: ['Roboto', 'system-ui', 'sans-serif'],
        elegant: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'cordesa': '0 4px 6px -1px rgba(255, 213, 0, 0.2), 0 2px 4px -1px rgba(230, 192, 0, 0.1)',
        'cordesa-glow': '0 0 20px rgba(255, 213, 0, 0.3), 0 0 40px rgba(230, 192, 0, 0.2)',
        'cordesa-modern': '0 10px 25px -3px rgba(255, 213, 0, 0.2), 0 4px 6px -2px rgba(230, 192, 0, 0.1)',
        'cordesa-glass': '0 8px 32px 0 rgba(255, 213, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'cordesa': '10px',
      }
    },
  },
  plugins: [],
}
