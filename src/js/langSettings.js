document.querySelector('.lang-select__wrp').addEventListener('click', (event) => {
  const target = event.target.closest('.lang-select');

  const allLang = document.querySelectorAll('.lang-select__title');

  if (target) {
    const currentLang = allLang[0].textContent;
    const selectedLang = target.querySelector('.lang-select__title').textContent;

    if (currentLang === selectedLang) return;

    allLang[0].textContent = selectedLang;
    target.querySelector('.lang-select__title').textContent = currentLang;
  }
});