import './style.scss';
import 'flowbite';
import {hamburger} from './ts/hamburger';
import {scrollAddClass} from './ts/scrollAddClass';
import {commonScroll} from './ts/commonScroll';
import {loading} from './ts/loading';
// import ScrollReveal from 'scrollreveal';
import Swiper, {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// ======================================================================
//
// ## DOM
//
// ======================================================================
// ### hamburger
// ----------------------------------------------------------------------
export const hamburgerBtn = document.querySelector('#js-hamburger');
export const hamburgerMenu = document.querySelector('#js-hamburger-menu');
export const targetElements = document.querySelectorAll('.js-scroll');
export const Kv = document.querySelector('#kv');
export const Html = document.querySelector('html');
export const targetElement = document.querySelectorAll('.js-scroll');
export const LoadingElement = document.querySelector('.loading');
// ======================================================================
//
// ## functions
//
// ======================================================================
// @ts-ignore
const swiper = new Swiper('.pickSwiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});

loading(Html, LoadingElement);

// ### hamburger
// ----------------------------------------------------------------------
hamburger(hamburgerBtn, hamburgerMenu, Html);

// ### Scroll Event
// ----------------------------------------------------------------------
// ▼プラグイン
// ScrollReveal().reveal('.js-scroll', {
//   duration: 1600,
//   origin: 'bottom',
//   distance: '50px'
// });

scrollAddClass(targetElement);
commonScroll(Html);
