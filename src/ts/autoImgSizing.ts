//?
//? 画像のサイズを明記することはSEOにいいとされています
//? しかし実際webサイトには画像をたくさん使うことが想定され、サイズを書く作業が発生してしまいます
//? めんどくさいことはしない。このコードは自動でレンダリングサイズを決めて指定してくれます
//? https://lpeg.info/seo/img_width_height.html

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
  });
};
