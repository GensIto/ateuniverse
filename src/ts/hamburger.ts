import {hamburgerBtn} from '../main';
import {hamburgerMenu} from '../main';
export const hamburger = () => {
  hamburgerBtn?.addEventListener('click', () => {
    hamburgerBtn!.classList.toggle('active');
    hamburgerMenu!.classList.toggle('active');
  });
};
