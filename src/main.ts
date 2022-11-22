import './style.scss';
import 'flowbite';
import {hamburger} from './ts/hamburger';
// import ScrollReveal from 'scrollreveal';
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
export const targetElements = document.querySelectorAll('.js-scroll');
export const LoadingElement = document.querySelector('#js-loading');
export const Kv = document.querySelector('#kv');
export const Html = document.querySelector('html');
// ======================================================================
//
// ## functions
//
// ======================================================================
// @ts-ignore
const mySwiper = new Swiper('.mySwiper', {
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
    hamburgerBtn!.classList.remove('active');
    hamburgerMenu!.classList.remove('active');
  });
  window.scrollBy(0, -100);
}

// ### hamburger
// ----------------------------------------------------------------------
hamburger(hamburgerBtn, hamburgerMenu);

// ### Scroll Event
// ----------------------------------------------------------------------
// ▼プラグイン
// ScrollReveal().reveal('.js-scroll', {
//   duration: 1600,
//   origin: 'bottom',
//   distance: '50px'
// });

const scrollAddClass = () => {
  const addClass = () => {
    const targetElements = document.querySelectorAll('.js-scroll');
    const triggerBottom = (window.innerHeight / 5) * 4;

    targetElements.forEach((target) => {
      const targetTop = target.getBoundingClientRect().top;

      if (targetTop < triggerBottom) {
        target.classList.add('js-active');
      }
    });
  };
  addClass();
};

window.addEventListener('scroll', scrollAddClass);
