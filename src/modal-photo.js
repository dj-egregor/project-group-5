(() => {
  const refs = {
    openMenuBtn: document.querySelector('.more-photo__img'),
    closeMenuBtn: document.querySelector('.carousel__img'),
    menu: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.carousel__wrap'),
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
