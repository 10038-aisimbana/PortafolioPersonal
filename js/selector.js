document.querySelectorAll('.mdl-navigation__link').forEach(function(el) {
    el.addEventListener('click', function() {
      var target = el.getAttribute('href'); 
      document.querySelectorAll('.mdl-layout__tab-panel').forEach(function(section) {
        section.classList.remove('is-active'); 
      });
      document.querySelector(target).classList.add('is-active');
    });
  });