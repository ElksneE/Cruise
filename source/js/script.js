const burgerMenu = () => {
  const headerWrapper = document.querySelector('.header__wrapper');
  const wrapperButton = document.querySelector('.header__toggle-wrapper');
  const button = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  const content = document.querySelector('.article');
  let navLinks = nav.querySelectorAll('a');
  nav.classList.remove('header__nav--nojs');
  const cleanAfterburger = () => {
    button.classList.remove('header__toggle--active');
    nav.classList.remove('header__nav--active');
    headerWrapper.classList.remove('header__wrapper--blackout');
    document.body.classList.remove('body__overflow--stop');
    content.classList.remove('article--blackout');
  };
  cleanAfterburger();
  wrapperButton.addEventListener('click', () => {
    button.classList.toggle('header__toggle--active');
    nav.classList.toggle('header__nav--active');
    document.body.classList.toggle('body__overflow--stop');
    headerWrapper.classList.toggle('header__wrapper--blackout');
    content.classList.toggle('article--blackout');
  });
  headerWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__wrapper--blackout')) {
      cleanAfterburger();
    }
  });
  navLinks.forEach((navLink) =>
    navLink.addEventListener('click', () => {
      cleanAfterburger();
    }));
};

export {burgerMenu};
