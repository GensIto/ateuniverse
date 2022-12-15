import Minze, {MinzeElement} from 'minze';
import './style.scss';

export class btnComponent extends MinzeElement {
  attrs = ['link', 'text'];

  onReady() {
    this.rerender(true);
  }

  html = () => `
    <a href=${this.link}>
      <button part="my-btn">
        <p part="my-btn-txt">${this.text}</p>
      </button>
    </a>
    `;
  // part="***"(***は任意)とは外部からstyleを当てるためのもので同階層のstyle.scssに記述しています
}

Minze.define('btn-component', btnComponent);
