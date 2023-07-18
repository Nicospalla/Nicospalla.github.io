window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollTop === 0) {
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.add('navbar-transparent');
    }
  });
