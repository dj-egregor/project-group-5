(() => {
  // carousel__icon-btn--prev
  //carousel__icon-btn--next
  const imageLink = document.getElementsByClassName('more-photo__item');
  const backDrop = document.querySelector('.backdrop');

  console.log(imageLink);

  for (let i = 0; i < imageLink.length; i++) {
    imageLink[i].addEventListener('click', showBackdrop);
  }

  function showBackdrop() {
    backDrop.classList.remove('is-hidden');
  }

  backDrop.addEventListener('click', function () {
    backDrop.classList.add('is-hidden');
    console.log();
  });

  //   const refs = {
  //     openSlaider: document.getElementsByClassName('.more-photo__picture'),
  //     closeSlaider: document.querySelector('.btn-close__slider'),
  //     menu: document.querySelector('.mob-menu'),
  //     body: document.querySelector('body'),
  //     menuList: document.querySelector('.mob-menu-list'),
  //   };
  //   refs.openSlaider.addEventListener('click', toggleMenu);
  //   refs.closeSlaider.addEventListener('click', toggleMenu);
  //   refs.menuList.addEventListener('click', removeMenu);
  //   function toggleMenu() {
  //     refs.menu.classList.toggle('is-hidden');
  //     refs.body.classList.toggle('no-scroll');
  //     refs.body.classList.toggle('no-scroll');
  //   }
})();
