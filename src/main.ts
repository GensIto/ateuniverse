import './style.scss';
import 'flowbite';
import {hamburger} from './ts/hamburger';
import {scrollAddClass} from './ts/scrollAddClass';
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
export const hamburgerBtn = document.querySelector('#js-hamburger');
export const hamburgerMenu = document.querySelector('#js-hamburger-menu');
export const targetElements = document.querySelectorAll('.js-scroll');
export const LoadingElement = document.querySelector('#js-loading');
export const Kv = document.querySelector('#kv');
export const Html = document.querySelector('html');
export const targetElement = document.querySelectorAll('.js-scroll');
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

// ### hamburger
// ----------------------------------------------------------------------
hamburger(hamburgerBtn, hamburgerMenu);

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

// ### Scroll Event
// ----------------------------------------------------------------------
// ▼プラグイン
// ScrollReveal().reveal('.js-scroll', {
//   duration: 1600,
//   origin: 'bottom',
//   distance: '50px'
// });

window.addEventListener('scroll', () => {
  scrollAddClass(targetElement);
});

const loading = document.querySelector('.loading');

window.addEventListener(
  'load',
  () => {
    Html?.classList.add('loaded');
    loading!.classList.add('hide');
  },
  false
);
