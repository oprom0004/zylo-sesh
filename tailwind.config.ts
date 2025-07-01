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
        'zylo-teal': '#01867A',
        'zylo-teal-light': '#02A692',
        'zylo-teal-dark': '#016B60',
        'zylo-gray': '#F5F5F5',
        'zylo-dark': '#333333',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'zylo': '12px',
      },
      boxShadow: {
        'zylo': '0 4px 20px rgba(1, 134, 122, 0.15)',
        'zylo-hover': '0 8px 30px rgba(1, 134, 122, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config