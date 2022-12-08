# vite-web
## バージョン管理
[volta](https://volta.sh/)でバージョン管理しています[導入参考サイト](https://qiita.com/YoshinoriKanno/items/1a41b840a68dea2fb7e7)
```
"volta": {
  "node": "18.12.1",
  "yarn": "3.3.0"
}
```
それまでnodenvを使用していましたが管理できるバージョンが17.6までだったので変更することを決意しました
## build時
dist/**.htmlのメタ部分にある
```
  <script src="https://cdn.tailwindcss.com"></script>
  <script type="module" crossorigin src="/assets/js/main.js"></script>
  <link rel="stylesheet" href="/assets/css/style.css">
```
を
```
  <!-- <script src="https://cdn.tailwindcss.com"></script> -->
  <script type="module" crossorigin src="./assets/js/main.js"></script>
  <link rel="stylesheet" href="./assets/css/style.css">
```
のように変更お願いします
## サイトデザイン
[作って学ぶコーディング学習サイト](https://code-step.com/)さんの無料カンプのレイアウトを参考に組ませていただきました。
- [TOP](https://xd.adobe.com/view/f30fe031-d0a3-4e98-a1c1-a309c5add0c6-a65c/grid?hints=off)
- [ABOUT](https://xd.adobe.com/view/d3d624d6-c12a-4ce8-82fd-e046d7c76dd2-8685/grid?hints=off)
- [SINGLE](https://xd.adobe.com/view/8d0c7d5c-194e-4793-842d-449d7581170a-d85f/grid?hints=off)
## 採用技術

- vite
- scss
- tailwind css
  - flowbite
- typescript
- scrollreveal
- swiper

## tailwind css
このプロジェクトでは **1rem = 10px**になるようにcssで制御しています
カスタマイズはtailwind.config.cjsを参照してください
figmaとの相性もいいらしい?ソフトウェア開発っぽくなりますが共存できればかなりコーディングスピード上がりそうです。
- [チートシート](https://tailwindcomponents.com/cheatsheet/)
- [アニメーション生成ツール](https://tail-animista.vercel.app/play/basic/scale-up/scale-up-center)
- [アニメーション生成ツール参考記事](https://zenn.dev/angelecho/articles/f171ca2b3b1f6a)
- [.containerのカスタマイズ](https://www.memory-lovers.blog/entry/2022/10/14/120000)
- [tailwin default config](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js)こちらでカスタマイズできるものが確認できます
- [任意の値を入れる](https://runebook.dev/ja/docs/tailwindcss/adding-custom-styles)
- [tailwind css 3(日本語訳)](https://runebook.dev/ja/docs/tailwindcss/-index-)
- [tailwind css grid generator](https://www.tailwind-tools.com/grid)
- [tailwind css gradation template](https://hypercolor.dev/)
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    fontSize: {
      xs: '1.4rem',
      sm: '1.6rem',
      base: '1.8rem',
      lg: '2rem',
      xl: '2.2rem'
    },
    extend: {
      //! ここに追記すると既存のtailwind cssの値に追加のイメージ
      //! theme直下では完全に上書きのイメージ
    }
  },
  plugins: [require('flowbite/plugin')]
};

```
htmlが冗長になりそうなときは@applyを使いscssに書くことでシュッとなると思います

## プラグイン簡単な説明
### scrollreveal
  - スクロールアニメーションのプラグイン簡単です。凝ったものは自分で記述しないとダメです
- [ドキュメント](https://scrollrevealjs.org/)
### swiper
  - スライダーのプラグイン
  - [ドキュメント](https://swiperjs.com/)
### flowbite
  - 欲しい機能(ハンバーガーメニュー,タブ,モーダル,スライダーもできるがカスタマイズは難しそう)を追加するのに使うのがいいかも
  - 細かいUIの設定は難しいのであくま機能をjs(ts)を書かなくても動かせるように
  - 切り替え時などにアニメーションをつけて欲しいと言われたら、ユーザー目線では速い方がいいと押し切りましょう！！！！(無理だったら、js,tsで書いてください....)
  - tailwind cssのUIライブラリーweb制作では使うことは少なそうですが一応
  - [ドキュメント](https://flowbite.com/)
  - [こちらはtailwind cssのUIライブラリーをまとめている記事](https://zenn.dev/kkeisuke/scraps/c3d668e6388676)

### その他おすすめプラグイン
- モーダル(Micromodal.js)
  - yarn add micromodal --save
  - [ドキュメント](https://micromodal.vercel.app/)
  - [参考記事](https://pengi-n.co.jp/blog/js-micromodal/)
- パララックス (simple parallax js)
  - yarn add simple-parallax-js
  - [ドキュメント](https://simpleparallax.com/)
  - [github](https://github.com/geosigno/simpleParallax.js/)
  - [参考記事](https://coliss.com/articles/build-websites/operation/javascript/vanilla-js-library-simpleparallax.html])
- tailwindcss-line-clamp
  - wordpressの開発などに便利かと思います。
  - 行数を指定できてそれ以上は表示されなくなります
  - yarn add @tailwindcss/line-clamp -D
  - [ドキュメント](https://tailwindcss.com/docs/plugins#line-clamp)
  - [github](https://github.com/tailwindlabs/tailwindcss-line-clamp)
  - [挙動が分かり易い記事](https://blog.cohu.dev/tailwind-css-tools#@tailwindcss/line-clamp)

## フォルダ構造
```
src
|_ _components (html 分割)
|   |
|   |_layout(header,footerなどページをとうして共通している部分)
|   |
|   |_parts(ページの部分的なもの**コンポーネント**)
|   |
|   |_tools(partsをまとめて表示させるのに使う,またpartsほど小さくpartsに分割しづらいもの)
|
|
|_ ts (関数コンポーネント思考)
|
|_ main.ts (ts をまとめるところ)
|
|_ scss (大きな枠のstyle layoutやfoundation)
|
|_ index.html (ページに応じて増やす)
|
|_ style.scss (scss の読み込みをを書くところ)
```

scssの配置場所は,例えばbuttonを作りたい時
components/parts/button フォルダを作成しそこにindex.htmlとstyle.scssを作る
```
components
|_ parts
  |__ button
    |_ index.html
    |_ style.scss
```
scssフォルダを作成していましたが基本tailwindで書くことになるので、layoutやfoundationを書く初期設定のような物を書く想定にしています。
scssフォルダ配下にはflocssのようにl-やu-などフォルデ名の頭文字をつけて判別してください。
componentsのstyleを明瞭的にしたかったのでフォルダの配下にhtml&scssを配置することでファイル生成&ファイル変更がしやすくなると思います。
componentsフォルダ配下のクラス名はそのままフォルダ名でいいかと思います。
(例) button -> .button-wrap

## ページを増やすとき

root/vite.config.js にて追記お願いします
33 行目あたりに下記のようなコードがあります

```
const pageData = {
  '/index.html': {
    isHome: true,
    title: 'Main Page',
    description: 'test description',
    keywords: 'test keywords',
    type: 'website',
    ogImg: '/',
    ogUrl: '/',
    lang: 'ja',
  },
};
```

ページを増やすときはこのおコードを流用し追記お願いします。
こちらによってページ別にコンテンツを独立させることによって SEO 対策を狙っています。

### 変更例

```
const pageData = {
  '/index.html': {
    isHome: true,
    title: 'Main Page',
    description: 'test description',
    keywords: 'test keywords',
    type: 'website',
    ogImg: '/',
    ogUrl: '/',
    lang: 'ja',
  },
  '/about.html': {
    isHome: true,
    title: 'about Page',
    description: 'about description',
    keywords: 'about keywords',
    type: 'website',
    ogImg: '/',
    ogUrl: '/',
    lang: 'ja',
  },
};
```

src/about.html を作成した例です。
このように追記すれば about.html 独自の seo に変更することができます

## css(scss)設計
ここではcomponent/parts,component/toolsと同じ階層にstyle.scssを配置することで変更したいファイル。追加するときの.scssの命名を考える手間を省けるように設計しています
なのでcomponent/parts/パーツ名、component/tools/ツール名を考えるだけで済むかと思います

## ts/配下のtypescript関数の説明

- <details><summary>autoImgSizing</summary><div>
  画像のサイズを明記することはSEOにいいとされています
  しかし実際webサイトには画像をたくさん使うことが想定され、サイズを書く作業が発生してしまいます
  めんどくさいことはしない。このコードは自動でレンダリングサイズを決めて指定してくれます

  ```
    export const autoImgSizing = () => {
      const imgs = document.querySelectorAll<HTMLImageElement>('img');

      imgs.forEach((img) => {
        const src = img.getAttribute('src');
        const w = Math.floor(img.width * 1.3);
        const h = Math.floor(img.height * 1.3);
        if (!src) return;

        if (!img.hasAttribute('width')) {
          img.setAttribute('width', w.toString());
        }
        if (!img.hasAttribute('height')) {
          img.setAttribute('height', h.toString());
        }
        // loading='lazy'もつけれます
        // if (!img.hasAttribute('loading')) {
        //   img.setAttribute('loading', 'lazy');
        // }
      });
    };
  ```　

  上記のコードで imgタグにwidthとheightがなければ自動で付与してくれるようにしています
  コメントアウトでも書いていますがこれに加えてloading='lazy'やaltもつけ忘れていたら自動付与してくれます
  使い方はmain.tsにimportし関数を走らせるだけです。

  </div></details>

- <details><summary>commonScroll</summary><div>

  スクロールされている方向によってhtmlタグにclassをつける関数
  上にスクロールされたら.scroll-up,下にスクロールされたら.scroll-downがつきます
  また一番下までスクロールすると.scroll-endがつきます。
  関数実行時には
  ```
    const Html = document.querySelector<HTMLElement>('html');
  ```
  でhtmlタグを取得し、引数として渡してあげてください。

  </div></details>

- <details><summary>countAnimation</summary>

    スクロールされ要素が表示されたらカウントアニメーションが始まる関数。
    カウントしたいhtmlにdata-numでカウントしたい数字を入れるとその数字までカウントしてくれます。
    ```
      <p class="js-count-target" data-num="100">0</p>
    ```
    関数を実行する際には、第一引数にDOM、第二引数にカウントするスピードを渡してあげてください
    ```
      const countTarget = document.querySelectorAll<HTMLElement>('.js-count-target');
      countAnimation(countTarget, 10);
    ```

  </div></details>

- <details><summary>fetchApi</summary><div>

    instagramの投稿を取得表示させる時に使うのを想定している関数。
    demoとしてhttps://jsonplaceholder.typicode.com/posts?_limit=9を入れていますが、実際にinstagramの投稿を取得するにはアクセストークンを取得する必要がります。
    実際にこの関数を使用する際は第一引数に投稿情報を表示させたい親要素、第二引数にapi end pointのurlを渡してください

    ```
      const parentElement = document.querySelector<HTMLElement>('#fetch-api');
      const fetchUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=9';
      fetchApi(parentElement, fetchUrl);
    ```

  </div></details>

- <details><summary>hamburger</summary><div>

    クリックされた要素にクラス名をつけられる関数です。
    ```
      export const hamburger = (button: HTMLElement | null, menu: HTMLElement | null, html: HTMLElement | null) => {
        if (!button || !html || !menu) return;
        button.addEventListener('click', () => {
          html.classList.toggle('gnav-open');
          button.classList.toggle('js-active');
          menu.classList.toggle('js-active');
        });

        // ### ページ内リンクでハンバーガーが閉じるように
        // ----------------------------------------------------------------------
        const pageLink = document.querySelectorAll('a[href^="#"]');
        for (let i = 0; i < pageLink.length; i++) {
          pageLink[i].addEventListener('click', () => {
            button.classList.remove('js-active');
            menu.classList.remove('js-active');
          });
          window.scrollBy(0, -100);
        }
      };

    ```
    buttonがクリックされたらhtmlにgnav-open、buttonとmenuにjs-activeがつくように設定しています。
    ページ内リンクのクリック時に閉じるように設定していて画面内に表示されるように**window.scrollBy(0, -100);**で-100pxのところに行くようにしています
    関数を使用する際は第一引数にボタン要素,第二引数にメニュー要素,第三引数にhtmlを渡してあげてください
    ```
      const hamburgerBtn = document.querySelector<HTMLElement>('#js-hamburger');
      const hamburgerMenu = document.querySelector<HTMLElement>('#js-hamburger-menu');
      const Html = document.querySelector<HTMLElement>('html');
      hamburger(hamburgerBtn, hamburgerMenu, Html);
    ```

  </div></details>

- <details><summary>login</summary><div>
    なんちゃって認証実装コードです。
    promptでpopupを表示し指定したpswならそのまま表示、違ったら指定したurlに飛ばすことができます
    ```
    export const login = (message: string, password: string,url: string) => {
      if (!sessionStorage.getItem('user')) {
        const psw = prompt(message, '');
        if (psw === password) {
          sessionStorage.setItem('user', 'login');
          window.alert('ログイン成功');
        } else {
          window.alert('ログイン失敗');
           location.replace(url);
        }
      }
    };
    ```　
    関数を使用する際は第一引数に表示させる文字列,第二引数にパスワードにする文字列,第三引数に認証失敗時に遷移するurlを渡してあげてください
    ```
      login('なんちゃって認証ですセッションストレージを使用しています\n passwordはtestです', 'test',"http://localhost:5173/");
    ```

  </div></details>

- <details><summary>scrollAddClass</summary><div>
  スクロールし表示されると指定したclass名をつけられる関数です
  関数を使用する際は第一引数にターゲットにするElement,第二引数に表示された際にaddするクラス名を渡してあげてください
  ```
  const targetElements = document.querySelectorAll<HTMLElement>('.js-scroll');
  scrollAddClass(targetElements, 'js-active');
  ```
  </div></details>

- <details><summary>scrollByMoveElement</summary><div>
  スクロール量によって移動して欲しい時に使う関数。
    ```
      export const scrollByMoveElement = (html: HTMLElement | null, targetElement: HTMLElement | null) => {
        if (!html || !targetElement) return;

        const MoveText = () => {
          const htmlTop = html.scrollTop;
          const position = htmlTop / 20;
          targetElement.style.transform = `translateX(${-position}%)`;
        };

        window.addEventListener('scroll', () => {
          MoveText();
        });
      };
    ```　
    関数を使用する際は第一引数にどこのスクロール量によって移動させる(ここではhtml),第二引数にtargetを渡してあげてください
    ```
    const Html = document.querySelector<HTMLElement>('html');
    const moveElement = document.querySelector<HTMLElement>('#js-move-txt');
    scrollByMoveElement(Html, moveElement);
    ```

  </div></details>

- <details><summary>loading</summary><div>
    htmlがローディングされた後にしてしたものにクラス名をつける関数
    関数を使用する際は第一引数にhtml,第二引数にtargetを渡してあげてください
    ```
    const Html = document.querySelector<HTMLElement>('html');
    const LoadingElement = document.querySelector<HTMLElement>('.loading');
    loading(Html, LoadingElement);
    ```

  </div></details>

- <details><summary>videoSource</summary><div>
  **loading.ts**と依存しています
  pcとspの動画を入れ替える時に使える関数
  レンダリング時に画面のサイズを取得してvideoタグにsourceタグを埋め込んでくれます。
  そのあとloading処理が終わった後に動画が再生されるようになっています。
  関数を使用する際は第一引数にtargetにしたいvideoタグ,第二引数にpcの時に表示させたい動画までのパス,第三引数にspの時に表示させたい動画までのパス,を渡してあげてください
  ```
  const video = document.querySelector<HTMLElement>('#js-video');
  const pcSource = "../video/demo-pc.mp4
  const spSource = "../video/demo-sp.mp4
  videoSource(video, pcSource, spSource);
  ```　

  </div></details>

## 画像圧縮
[プラグイン導入いたしました。](https://www.npmjs.com/package/@macropygia/vite-plugin-imagemin-cache?activeTab=readme)
```
yarn build
```
で処理が走り、distに圧縮された画像が排出されます。
cache.dbは画像を圧縮したキャッシデータを持っており、次のbuild時に無駄な処理を省いてくれます。
消しても全く問題ないです。
以下の名前はbuildされないので、書き出し直した画像などは自動的に無視されるようになります
```
'**/old_*.jpg'
'**/old_*.png'
'**/_*.jpg'
'**/_*.png'
'**/__*.jpg'
'**/__*.png'
```
### その他
僕が使っていた[imageoptim](https://imageoptim.com/mac)が優秀なので DL おすすめします
これからはwebpの使用がいいみたいです[サルワカ道具箱](https://saruwakakun.com/tools/png-jpeg-to-webp/)

## NG
- component/**.htmlに<style></style>でstyleを当ててもいいと思ったのですが、長くなったり汚くなるのでやめた方がいいです。partsぐらい小さいものならいいかもです~
- コーディオンにscrollrevealを追加すると反応してくれずアニメーションが発火しないバグが起きるので入れない

## ちなみに....
- [techfeed](https://techfeed.io/categories/all)
- [grid layout生成つーる](https://grid.layoutit.com/)
- [コリス](https://coliss.com/)
- [zenn](https://zenn.dev/)
- [wordpress私的マニュアル](https://elearn.jp/wpman/)
- [命名ツール](https://codic.jp/engine/)
- [gradation生成](https://cssgradient.io/)
- [clip mask generator](https://bennettfeely.com/clippy/)
- [can I use?](https://caniuse.com/css-filters/)
- [ファビコン生成](https://favicon-generator.mintsu-dev.com/)
- [画像圧縮](https://squoosh.app/)
- [だみー文章](https://webtools.dounokouno.com/dummytext/)
- [だみー画像](https://placehold.jp/)
- [webPについての記事](https://webdesign-trends.net/entry/13745)
- [コーダーができるSEO対策](https://web-guided.com/1147/)
- [パスワード生成](https://www.luft.co.jp/cgi/randam.php)
- [htpasswd生成](https://www.luft.co.jp/cgi/htpasswd.php)
- [javascript lesson](https://bigfrontend.dev/ja)
- [javascript news](https://jser.info/)
- [cssやjQueryの記事などありました](https://freefrontend.com/)

僕が使っていたものです~

### husky
gitなどでコードを管理する時に便利でコードの品質を担保したり,コードレビューの負担を減らせたりするものです
このプロジェクトではcommit時に以下のものが走ります。
- yarn prettier コード整形
- yarn lint:style:fix styleを事前に綺麗にする
- yarn lint:style styleが綺麗か確認する
- yarn lint:fix javascriptを事前に綺麗にする
- yarn lint javascriptが綺麗か確認する
- yarn ts-check tsに危険なものがないかチェックする
### メモ

- html に tailwind css 読み込み

  - https://bubudoufu.com/vite-js-bulma-tailwindcss/

- project 参考

  - https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc

- tailwindcss 拡張
  - https://blog.cohu.dev/tailwind-css-tools#@tailwindcss/line-clamp
    - なんかめっちゃまとめてあった記事
  - https://daisyui.com/docs/install/
    - こちらかなり使いごごちがいいですが、web 制作ではテンプレートとしては使いづらいためメモ
  - ~~https://flowbite.com/docs/getting-started/quickstart/~~~
    - ~~こちら js でしたいことも込み込みであります。もし苦戦したら導入してもいいかと~~
    - 導入しました！
  - https://devdojo.com/tailwindcss/buttons
    - ボタンのテンプレートです
