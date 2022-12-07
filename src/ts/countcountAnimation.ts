export const countAnimation = (countTarget: NodeListOf<HTMLElement> | null, countSpeed: number) => {
  if (!countTarget) return;

  // ### アニメーション処理
  // ----------------------------------------------------------------------
  countTarget.forEach((node) => {
    // forEach内では NodeListOf<HTMLElement> が HTMLElementとして型推論されるらしい
    const targetNum = Number(node.getAttribute('data-num'));

    let counterData: NodeJS.Timer | null = null;
    let initNum = 0;

    const countUp = () => {
      if (Number.isInteger(targetNum)) {
        node.innerHTML = initNum.toString();
      } else {
        node.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`;
      }

      initNum++;

      if (initNum > targetNum) {
        node.innerHTML = targetNum.toString();
        clearInterval(Number(counterData));
      }
    };

    // ### 要素が表示されたらアニメーション開始
    // ----------------------------------------------------------------------
    window.addEventListener('scroll', () => {
      const position = Math.floor(window.innerHeight * 0.9);
      const offsetTop = Math.floor(node.getBoundingClientRect().top);
      if (offsetTop < position) {
        counterData = setInterval(countUp, countSpeed);
      }
    });
  });
};
