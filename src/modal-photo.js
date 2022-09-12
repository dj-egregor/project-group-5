(() => {
  const refs = {
    openMenuBtn: document.querySelector('.more-photo__img'),
    closeMenuBtn: document.querySelector('.btn-close--photo'),
    menu: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
    menuList: document.querySelectorAll('.more-photo__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
  }
})();
