import './style.scss';
import 'flowbite';
// import ScrollReveal from 'scrollreveal';

// import Swiper JS
import Swiper, {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// ======================================================================
//
// ## DOM
//
// ======================================================================
// ### hamburger
// ----------------------------------------------------------------------
export const hamburgerBtn = document.querySelector('#jsHamburger');
export const hamburgerMenu = document.querySelector('#jsHamburgerMenu');
export const LoadingElement = document.querySelector('#js-loading');
export const Kv = document.querySelector('#kv');
export const Html = document.querySelector('html');
// ======================================================================
//
// ## functions
//
// ======================================================================
// @ts-ignore
const fashionSwiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  modules: [Pagination],
  pagination: {
    el: '.my-swiper-pagination',
    clickable: true
  }
});

// ### ページ内リンクでハンバーガーが閉じるように
// ----------------------------------------------------------------------
const pageLink = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < pageLink.length; i++) {
  pageLink[i].addEventListener('click', () => {
    document.querySelector('.hamburger')!.classList.remove('active');
    hamburgerMenu!.classList.remove('active');
  });
  window.scrollBy(0, -100);
}

const accordion = document.querySelectorAll('details');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    window.scrollBy(0, -1);
  });
}

// ### Scroll Event
// ----------------------------------------------------------------------
// ▼プラグイン
// ScrollReveal().reveal('.js-scroll', {
//   duration: 1600,
//   origin: 'bottom',
//   distance: '50px'
// });

// ▼純粋TS
// const scrollAddClass = () => {
//   const targetElements = document.querySelectorAll('.js-scroll');

//   const addClass = () => {
//     const triggerBottom = (window.innerHeight / 5) * 4;
//
//     targetElements.forEach((target) => {
//       const targetTop = target.getBoundingClientRect().top;
//
//       if (targetTop < triggerBottom) {
//         target.classList.add('js-active');
//         console.log('ADD CLASS!');
//       }
//     });
//   };
//   addClass();
// };

// window.addEventListener('scroll', scrollAddClass);
