(function() {
  'use strict';

  $('.js-arrow').on('click', function (event) {
    event.preventDefault();
    var $portifolio = $('.js-portifolio');
    var offset = $portifolio.offset().top;

    $('html, body').animate({
      scrollTop: offset
    }, offset*2);
  });
})();
