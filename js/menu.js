(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mob-menu'),
    menuList: document.querySelector('.mob-menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    document.body.classList.toggle('no-scroll');
    refs.menu.classList.toggle('is-hidden');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }
})();
