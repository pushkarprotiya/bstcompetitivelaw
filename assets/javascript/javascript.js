
    const navbar = document.querySelector('.navbar-custom');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  