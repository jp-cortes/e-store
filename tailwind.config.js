/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        lightGreen: "#F3FDE8",
        borderGreen: '#C2D8C8',
        buttonGreen: '#00677F',
        hoverGreen: '#98C1B2'
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        },
        slideUpAndFade: {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        showCart: {
          from: { right: '-360px', top: '0' },
          to: { right: '0', top: '0' },
        },
        hideCart: {
          from: { right: '0', top: '0' },
          to: { right: '-360px', top: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        slideUpAndFade: 'slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        slideDownAndFade: 'slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        slideRightAndFade: 'slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        slideLeftAndFade: 'slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        displayCart: 'showCart .2s ease-in'
      }
    }
  },
  
  plugins: [],
}
