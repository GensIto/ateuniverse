# vite-web

このプロジェクトは gulp 脱却を目標とし作成しました。
使っていたgulpのいいと感じたところは引き継いでいます

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

## プラグイン簡単な説明
### scrollreveal
  - スクロールアニメーションのプラグイン簡単です。凝ったものは自分で記述しないとダメです
  - https://scrollrevealjs.org/
### flowbite
  - tailwind cssのUIライブラリーweb制作では使うことは少なそうですが一応
  - https://flowbite.com/
  - ([こちらはtailwind cssのUIライブラリーをまとめている記事)[https://zenn.dev/kkeisuke/scraps/c3d668e6388676]
### swiper
  - スライダーのプラグイン
  - https://swiperjs.com/

## フォルダ構造
```
src
|_ components (html 分割)
|  |_layout(header,footerなどページをとうして共通している部分)
|  |_page(ページに表示させたいものをまとめる)
|  |_parts(ページの部分的なもの**コンポーネント**)
|  |_tools(partsをまとめて表示させるのに使う)
|_ scss (flocss 設計がおすすめここではcomponentと同じ構造にしています。)
|_ ts (関数コンポーネント思考)
|_ main.ts (ts をまとめるところ)
|_ index.html (ページに応じて増やす)
|_ style.scss (共通の css を書くところ)
```

あとはお好みで

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
flocss設計
(おすすめ記事)[https://qiita.com/super-mana-chan/items/644c6827be954c8db2c0]
## 画像圧縮

~~root/vite.config 95 行あたりに書いています~~
~~viteImagemin の中に記述しています。~~
~~特に書き換える必要はないかと思います。もう少しすれば画像は webp を使うことを強く勧めます~~
動かないため削除しました。
色々調べると圧縮率が悪いそうで
僕が使っていた(imageoptim)[https://imageoptim.com/mac]が優秀なので DL おすすめします

## NG
component/**.htmlに<style></style>でstyleを当ててもいいと思ったのですが、長くなったり汚くなるのでやめた方がいいです。

### メモ

- html に tailwind css 読み込み

  - https://bubudoufu.com/vite-js-bulma-tailwindcss/

- project 参考

  - https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc

- tailwindcss 拡張
  - https://daisyui.com/docs/install/
    - こちらかなり使いごごちがいいですが、web 制作ではテンプレートとしては使いづらいためメモ
  - https://flowbite.com/docs/getting-started/quickstart/
    - こちら js でしたいことも込み込みであります。もし苦戦したら導入してもいいかと
  - https://devdojo.com/tailwindcss/buttons
    - ボタンのテンプレートです
