export const hamburger = (button: Element | null, menu: Element | null) => {
  button?.addEventListener('click', () => {
    button!.classList.toggle('active');
    menu!.classList.toggle('active');
  });
};
