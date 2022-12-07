export const pointer = (html: HTMLElement | null) => {
  if (!html) return;
  const styleTag = document.createElement('style');
  // styleタグに記載するcssを記入
  styleTag.innerText = `
    .js-cursor-pointer {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      width: 250px;
      height: 250px;
      background: #0f0;
      transform: translate(-50%, -50%);
      z-index: 2000;
      animation: animate 4s linear infinite;
      z-index: 1; //containerより下にする
    }

    @keyframes animate {
      0% {
        filter: hue-rotate(0deg) blur(50px);
      }
      100% {
        filter: hue-rotate(360deg) blur(50px);
      }
    }
  `;

  const pointer = document.createElement('div');
  pointer.classList.add('js-cursor-pointer');
  html.appendChild(pointer);
  html.appendChild(styleTag);
  window.onmousemove = (e) => {
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
  };
};
