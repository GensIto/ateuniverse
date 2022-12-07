// ?
// ? スクロール量でelementが動く
// ? もしどこかをトリガーセクションにしたいなら追記する必要があります
// ? ========================================================

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
