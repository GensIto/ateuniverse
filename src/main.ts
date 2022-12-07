import './style.scss';
import 'flowbite';
import {hamburger} from './ts/hamburger';
import {scrollAddClass} from './ts/scrollAddClass';
import {commonScroll} from './ts/commonScroll';
import {loading} from './ts/loading';
import {fetchApi} from './ts/fetchApi';
import {scrollByMoveElement} from './ts/scrollByMoveElement';
// import {login} from './ts/login';
import {countAnimation} from './ts/countAnimation';
import {autoImgSizing} from './ts/autoImgSizing';
autoImgSizing();
// import ScrollReveal from 'scrollreveal';
import Swiper, {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// ======================================================================
//
// ## DOM
//
// ======================================================================
const hamburgerBtn = document.querySelector<HTMLElement>('#js-hamburger');
const hamburgerMenu = document.querySelector<HTMLElement>('#js-hamburger-menu');
const Html = document.querySelector<HTMLElement>('html');
const targetElements = document.querySelectorAll<HTMLElement>('.js-scroll');
const LoadingElement = document.querySelector<HTMLElement>('.loading');
const parentElement = document.querySelector<HTMLElement>('#fetch-api');
const moveElement = document.querySelector<HTMLElement>('#js-move-txt');
// const topPage = document.querySelector<HTMLElement>('#top');
const countTarget = document.querySelectorAll<HTMLElement>('.js-count-target');
const fetchUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=9';

// ======================================================================
//
// ## functions
//
// ======================================================================

// ### Load Event
// ----------------------------------------------------------------------
// if (topPage) login('なんちゃって認証ですセッションストレージを使用しています\n passwordはtestです', 'test');
loading(Html, LoadingElement);
fetchApi(parentElement, fetchUrl);

// ### Scroll Event
// ----------------------------------------------------------------------
// ▼プラグイン
// ScrollReveal().reveal('.js-scroll', {
//   duration: 1600,
//   origin: 'bottom',
//   distance: '50px'
// });

scrollAddClass(targetElements, 'js-active');
commonScroll(Html);
scrollByMoveElement(Html, moveElement);

// ### Click Event
// ----------------------------------------------------------------------
hamburger(hamburgerBtn, hamburgerMenu, Html);

// ### Other
// ----------------------------------------------------------------------
countAnimation(countTarget, 10);
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
swiper;
