import Minze, {MinzeElement, Attrs} from 'minze';
import './style.scss';

export class btnComponent extends MinzeElement {
  attrs: Attrs = ['link', 'text', 'bg-color', 'icon'];

  html = () => `
    <a href=${this.link}>
      <button part="my-btn ${this.bgColor && 'my-btn-bg'} ${this.icon && 'my-btn-flex'}">
        <p part="my-btn-txt">${this.text}</p>
        ${
          this.icon
            ? `<svg part="my-btn-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`
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
