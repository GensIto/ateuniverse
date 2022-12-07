export const loading = (html: HTMLElement | null, loading: HTMLElement | null) => {
  if (!html || !loading) return;
  window.addEventListener(
    'load',
    () => {
      html.classList.remove('is-load');
      html.classList.add('loaded');
      loading.classList.add('hide');
    },
    false
  );
};
