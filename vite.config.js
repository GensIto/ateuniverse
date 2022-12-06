import {defineConfig} from 'vite';
import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';
import imageminPlugin from '@macropygia/vite-plugin-imagemin-cache';

// HTMLの複数出力を自動化する
//./src配下のファイル一式を取得
import fs from 'fs';
const fileNameList = fs.readdirSync(resolve(__dirname, './src/'));

//htmlファイルのみ抽出
const htmlFileList = fileNameList.filter((file) => /.html$/.test(file));

//build.rollupOptions.inputに渡すオブジェクトを生成
const inputFiles = {};
for (let i = 0; i < htmlFileList.length; i++) {
  const file = htmlFileList[i];
  inputFiles[file.slice(0, -5)] = resolve(__dirname, './src/' + file);
  /*
    この形を自動的に作る
    input:{
      index: resolve(__dirname, './src/index.html'),
      list: resolve(__dirname, './src/list.html')
    }
  */
}

//HTML上で出し分けたい各ページごとの情報
const pageData = {
  '/index.html': {
    isHome: true,
    title: 'dummy | TOP',
    description: 'dummy description TOP',
    keywords: 'TOP',
    type: 'website',
    ogImg: '',
    ogUrl: '',
    icon: '',
    lang: 'ja'
  },
  '/about.html': {
    isHome: true,
    title: 'dummy | ABOUT',
    description: 'dummy description ABOUT',
    keywords: 'ABOUT',
    type: 'website',
    ogImg: '',
    ogUrl: '',
    icon: '',
    lang: 'ja'
  },
  '/single.html': {
    isHome: true,
    title: 'dummy | SINGLE',
    description: 'dummy description SINGLE',
    keywords: 'SINGLE',
    type: 'website',
    ogImg: '',
    ogUrl: '',
    icon: '',
    lang: 'ja'
  }
};

export default defineConfig({
  server: {
    host: true //IPアドレスを有効化
    // port: 3000 //任意のポートに変更
  },
  root: './src', //開発ディレクトリ設定
  build: {
    base: './', //相対パスでビルドする
    outDir: '../dist', //出力場所の指定

    rollupOptions: {
      //ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          //Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          //ビルド時のCSS名を明記してコントロールする
          if (extType === 'css') {
            return `assets/css/style.css`;
            // return `style.css`;
          }
          return `assets/${extType}/[name][extname]`;
          // return `${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js'
        // chunkFileNames: '[name].js',
        // entryFileNames: '[name].js'
      },
      //生成オブジェクトを渡す
      input: inputFiles
    }
  },
  /*
    プラグインの設定を追加
  */
  plugins: [
    handlebars({
      //コンポーネントの格納ディレクトリを指定
      partialDirectory: resolve(__dirname, './src/components'),
      //各ページ情報の読み込み
      context(pagePath) {
        return pageData[pagePath];
      }
    }),
    imageminPlugin({
      cacheDir: 'dist',
      exclude: [
        // 除外パターン
        '**/old_*.jpg',
        '**/old_*.png',
        '**/_*.jpg',
        '**/_*.png',
        '**/__*.jpg',
        '**/__*.png'
      ],
      plugins: {
        pngquant: {
          speed: 1,
          quality: [0.65, 1]
        },
        mozjpeg: {
          quality: 75
        },
        svgo: {
          plugins: [
            {
              name: 'removeDimensions',
              active: true
            }
          ]
        }
      }
    })
  ]
});
