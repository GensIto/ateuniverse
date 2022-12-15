# web components(minze)
[web components](https://developer.mozilla.org/ja/docs/Web/Web_Components)について
[ドキュメント](https://minze.dev/)
[外部からstyleを当てる](https://minze.dev/guide/components-styling.html#external)

### 作成ルール
- webComponents/ に作成したいcomponent名でディレクトリを切ってください。 例 button card
- 作成したディレクトリ 内にindex.tsとstyle.scssを作成してください。src/componentsを同じ感じです
- 作成できたらそのままmain.tsに読み込むと量が多くなってしますので、ts/webComponents/index.tsに読み込んでください
  ```
  例
  import {btnComponent} from './button';
  new btnComponent();
  ```

### 記述例
```
index.ts

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
        ${this.text}
      </button>
    </a>
    `;
  // part="***"(***は任意)とは外部からstyleを当てるためのもので同階層のstyle.scssに記述しています
}

Minze.define('btn-component', btnComponent);

```

attrsはpropsのようなものを追記してください。例ではhtmlで呼び出す側でボタンのリンク先と表示文字が変更できます。初期値を渡すことも可能でその場合は['link', ['text', 'HI!WORD!']]のようにすると設定できます。

```
css = () => ``
```

というcss関数も存在しますがstyle.scssで記述して方がシンタックスや補完が効くのでおすすめです。

onReady()は雛形のようなもので呼び出せるようにするだけかと思います

```
style.scss

::part(my-btn) {
  @apply bg-indigo-400 font-noto text-lg;
}

```

style.scssでのstyleの当て方は簡単で::part(設定した名前)で当てることができます。
例の記述のようにtailwind cssも効きます。ネックを上げるとすればstyle.scssを作成するぐらいかと思います。


# とにかく情報が少ないです！！！！！！
