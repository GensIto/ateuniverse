import Minze, {MinzeElement, Attrs} from 'minze';
import './style.scss';

export class btnComponent extends MinzeElement {
  attrs: Attrs = ['link', 'text', 'bg-color', 'right-icon', 'left-icon'];

  html = () => `
    <a href=${this.link}>
      <button part="my-btn ${this.bgColor && 'my-btn-bg'} ${this.leftIcon && 'my-btn-flex'} ${
    this.rightIcon && 'my-btn-flex'
  }">
        ${
          this.leftIcon
            ? `<svg part="my-btn-icon" fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path></svg>`
            : ''
        }
        <p part="my-btn-txt">${this.text}</p>
        ${
          this.rightIcon
            ? `<svg part="my-btn-icon" fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14 5l7 7m0 0l-7 7m7-7H3'></path></svg>`
            : ''
        }
      </button>
    </a>
    `;

  onReady() {
    this.rerender(true);
  }
  // part="***"(***は任意)とは外部からstyleを当てるためのもので同階層のstyle.scssに記述しています
}

Minze.define('btn-component', btnComponent);
