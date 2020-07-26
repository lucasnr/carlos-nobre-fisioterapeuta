(function () {
  const navbar = document.querySelector('.navbar');
  const button = navbar.querySelector('.navbar__button');
  const nav = navbar.querySelector('.navbar__nav');
  const navLinks = nav.querySelectorAll('li a');

  button.onclick = () => {
    navbar.classList.toggle('active');

    const expanded = nav.getAttribute('aria-expanded');
    nav.setAttribute('aria-expanded', expanded === 'false');
  };

  navLinks.forEach((link) => {
    link.onclick = () => {
      navbar.classList.remove('active');
      nav.setAttribute('aria-expanded', 'false');
    };
  });
})();
