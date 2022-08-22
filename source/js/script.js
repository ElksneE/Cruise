const burgerMenu = () => {
  const headerWrapper = document.querySelector('.header__wrapper');
  const wrapperButton = document.querySelector('.header__toggle-wrapper');
  const header = document.querySelector('.header');
  const button = document.querySelector('.header__toggle');
  const headerButtons = header.querySelector('.header__button');
  const navNoJs = document.querySelector('.header__nav');
  const nav = header.querySelector('.header__nav');
  const content = document.querySelector('.article');
  const headerContent = document.querySelector('.header__content');
  const logoHeader = header.querySelector('.header__logo');
  const mainContent = document.querySelector('main');
  const burgerCross = document.querySelector('.visually-hidden--nofixed');
  let navLinks = nav.querySelectorAll('a');
  navNoJs.classList.add('header__nav--js');
  headerButtons.classList.remove('header__button--nojs');
  const cleanAfterburger = () => {
    button.classList.remove('header__toggle--active');
    nav.classList.remove('header__nav--active');
    headerWrapper.classList.remove('header__wrapper--blackout');
    document.body.classList.remove('body__overflow--stop');
    content.classList.remove('article--blackout');
    headerContent.classList.remove('header__content--blackout');
    logoHeader.classList.remove('header__logo--blackout');
    mainContent.classList.remove('main--blackout');
    burgerCross.classList.remove('visually-hidden--nofixed');
  };
  cleanAfterburger();
  wrapperButton.addEventListener('click', () => {
    button.classList.toggle('header__toggle--active');
    nav.classList.toggle('header__nav--active');
    document.body.classList.toggle('body__overflow--stop');
    headerWrapper.classList.toggle('header__wrapper--blackout');
    content.classList.toggle('article--blackout');
    headerContent.classList.toggle('header__content--blackout');
    logoHeader.classList.toggle('header__logo--blackout');
    mainContent.classList.toggle('main--blackout');
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
