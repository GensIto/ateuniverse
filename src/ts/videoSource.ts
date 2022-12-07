export const videoSource = (videoElement: HTMLVideoElement, pcSource: string, spSource: string) => {
  const videoBreakpoint = () => {
    const w = window.innerWidth;
    const mdW = 768;
    const newSource = document.createElement('source');

    newSource.src = w >= mdW ? pcSource : spSource;
    videoElement.appendChild(newSource);
  };

  const videoPause = () => {
    videoElement.pause();
  };

  const videoPlay = () => {
    videoElement.play();
  };

  window.addEventListener('load', () => {
    videoBreakpoint();
    videoPause();
    setInterval(() => {
      if (document.querySelector('.is-loaded')) {
        videoPlay();
      }
    }, 1000);
  });
};
