
(() => {
  const refs = {
    openSlaider: document.getElementsByClassName('.more-photo__picture'),
    closeSlider: document.querySelector('.btn-close__slider'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mob-menu-list'),
  };
  refs.openSlaider.addEventListener('click', toggleMenu);
  refs.closeSlider.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();

//   (() => {
//   document
//     .getElementById('.more-photo__picture')
//     .addEventListener('click', myFunction);
//   function myFunction() {
//     document.getElementById('.more-photo__picture').innerHTML =
//       '.carousel__img';
//   }
//   function removeMenu() {
//     refs.menu.classList.add('is-hidden');
//   }
// })();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.btn-open'),
//     closeMenuBtn: document.querySelector('.btn-close--menu'),
//     menu: document.querySelector('.mob-menu'),
//     body: document.querySelector('body'),
//     menuList: document.querySelector('.mob-menu-list'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.menuList.addEventListener('click', removeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//     refs.body.classList.toggle('no-scroll');
//   }

//   function removeMenu() {
//     refs.menu.classList.add('is-hidden');
//   }

// })();
