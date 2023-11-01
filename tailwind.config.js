const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./dist/**/*.{html,js}', './public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Karla', ...defaultTheme.fontFamily.sans],
        heading: ['DM Serif Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'primary-violet': 'hsl(256, 26%, 20%)',
        'primary-blue': 'hsl(216, 30%, 68%)',
        'secondary-dark-violet': 'hsl(270, 9%, 17%)',
        'secondary-grayish-violet': 'hsl(273, 4%, 51%)',
        'secondary-light-gray': 'hsl(0, 0%, 98%)',
      },

      backgroundImage: {
        'nav-pattern': "url('/dist/images/bg-pattern-mobile-nav.svg')",
        'hero-pattern-mobile':
          "url('/dist/images/bg-pattern-intro-left-mobile.svg'), url('/dist/images/bg-pattern-intro-right-mobile.svg')",
        'hero-pattern-desktop':
          "url('/dist/images/bg-pattern-intro-left-desktop.svg'), url('/dist/images/bg-pattern-intro-right-desktop.svg')",
        'work-pattern-mobile':
          "url('/dist/images/bg-pattern-how-we-work-mobile.svg')",
        'work-pattern-desktop':
          "url('/dist/images/bg-pattern-how-we-work-desktop.svg')",
        'footer-pattern-mobile':
          "url('/dist/images/bg-pattern-footer-mobile.svg')",
        'footer-pattern-desktop':
          "url('/dist/images/bg-pattern-footer-desktop.svg')",
        'no-image': 'none',
      },

      backgroundPosition: {
        'hero-position-mobile': 'left top, right bottom',
        'hero-position-desktop': 'left bottom, right -5rem',
      },

      fontSize: {
        '2.5xl': ['1.75rem', '2.125rem'],
        '4.5xl': ['2.5rem', 1],
        '5.5xl': ['2.95rem', 1],
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
    },
  },
  plugins: [],
};
