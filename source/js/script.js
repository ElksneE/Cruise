const wrapperButton = document.querySelector('.header__toggle-wrapper');
const button = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

wrapperButton .addEventListener('click', function () {
  button.classList.toggle('header__toggle--active');
  nav.classList.toggle('header__nav--active');
});
