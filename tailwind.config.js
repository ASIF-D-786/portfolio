/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#000000',
          light: '#FFFFFF',
        },
        surface: {
          DEFAULT: '#0A0A0A',
          light: '#FAFAFA',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(0, 0, 0, 0.08)',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          muted: '#A3A3A3',
          light: '#000000',
          'light-muted': '#525252',
        },
        accent: {
          blue: '#737373',
          violet: '#525252',
          cyan: '#A3A3A3',
          mint: '#D4D4D4',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(115deg, #FFFFFF 0%, #A3A3A3 50%, #525252 100%)',
        'grad-radial-hero': 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03), transparent 50%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.50)',
        glow: '0 0 0px transparent',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
