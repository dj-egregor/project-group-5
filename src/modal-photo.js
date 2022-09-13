(() => {
  const refs = {
    openSlaider: document.querySelectorAll('.more-photo__link'),
    closeSlaider: document.querySelector('.backdrop'),
    backDrop: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
    menuList: document.querySelectorAll('.more-photo__link'),
  };

  refs.openSlaider.addEventListener('click', openSlaider);
  refs.closeSlaider.addEventListener('click', closeSlaider);
  refs.openSlaider.forEach(function (openSlaider) {
    console.log(openSlaider);
  });
  // refs.close.addEventListener('click', toggleMenu);
  // refs.menuList.addEventListener('click', removeMenu);

  function openSlaider(event) {
    console.log(event);
    event.preventDefault();

    // refs.menu.classList.toggle('is-hidden');
    // refs.menu.classList.toggle('is-hidden');
    // refs.body.classList.toggle('no-scroll');
    // refs.body.classList.toggle('no-scroll');
  }
  // function myFunction() {
  //   function myFunction(event) {
  //     var x = event.target;
  //     document.getElementById('demo').innerHTML =
  //       'Triggered by a ' + x.tagName + ' element';
  //   }
  // }

  // function removeMenu() {
  //   refs.menu.classList.add('is-hidden');
  // }
})();
