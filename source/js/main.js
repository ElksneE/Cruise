import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

const wrapperButton = document.querySelector('.header__toggle-wrapper');
const button = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

wrapperButton .addEventListener('click', function () {
  button.classList.toggle('header__toggle--active');
  nav.classList.toggle('header__nav--active');
});
