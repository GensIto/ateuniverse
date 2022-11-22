/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    //? ここの中は上書きのイメージ
    fontSize: {
      xs: '1.4rem', //! 14px
      sm: '1.6rem', //! 16px
      base: '1.8rem', //! 18px
      lg: '2rem', //! 20px
      xl: '2.2rem' //! 22px
    },
    extend: {
      //? ここの中は追加のイメージ
      colors: {
        txt: '#333333'
      },
      fontFamily: {
        oswald: ['Oswald']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
