export const hamburger = (button: Element | null, menu: Element | null, html: Element | null) => {
  button?.addEventListener('click', () => {
    html?.classList.toggle('gnav-open');
    button!.classList.toggle('active');
    menu!.classList.toggle('active');
  });
};
