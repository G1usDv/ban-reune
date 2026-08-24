const dialog = document.querySelector('#appeal-dialog');

document.querySelectorAll('[data-open-dialog]').forEach((button) => {
  button.addEventListener('click', () => dialog.showModal());
});

document.querySelectorAll('[data-close-dialog]').forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
