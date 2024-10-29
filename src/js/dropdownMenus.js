const dropdownMenuSetup = (menuWrpCl, dropdownCl, hideCl, showCl) => {
  const menuLink = document.querySelector(menuWrpCl);

  const dropdown = document.querySelector(dropdownCl);

  menuLink.addEventListener('mouseenter', () => {
    dropdown.classList.add(showCl);
    dropdown.classList.add('animate__fadeIn');
    setTimeout(() => {
      dropdown.classList.remove(hideCl);
      dropdown.classList.remove('animate__fadeOut');
    }, 500)
  });

  menuLink.addEventListener('mouseleave', () => {
    dropdown.classList.add('animate__fadeOut');
    setTimeout(() => {
      dropdown.classList.add(hideCl);
      dropdown.classList.remove(showCl);
      dropdown.classList.remove('animate__fadeIn');
    }, 500)
  });
}

dropdownMenuSetup('.menu-link', '.menu-link__dropdown', 'hide', 'show')
dropdownMenuSetup('.lang-select__wrp', '.lang-select__dropdown', 'hide', 'show')