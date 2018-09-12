(function() {

  $(document).ready(initialize);
  function initialize() {
    navbar();
    slideshow();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.slider').slider({
      height: 450,
      interval: 8000
    });
    $(window).resize(slideshow);
    $(window).resize(navbar);
  }

  function navbar() {
      if ($(window).width() >= 467 && $(window).width() < 837) {
        $('.navbar').css('height','103px');
        $('.navbar').css('padding','3px');
      }
      else if ($(window).width() < 467) {
         $('.navbar').css('height','158px');
         $('.navbar').css('padding','3px');
      }
      else if ($(window).width() >= 837) {
         $('.navbar').css('height','47px');
         $('.navbar').css('padding','0px');
      }
  }

  function slideshow() {
    if ($(window).width() < 850) {
      $('.slider .caption h3').css('display','none');
      $('.slider .caption .newsAction').css('display','none');
      $('.slider .newsContent').css('height','400');
    }
    else if ($(window).width() >= 850) {
      $('.slider .caption h3').css('display','block');
      $('.slider .caption .newsAction').css('display','block');
      $('.slider .newsContent').css('height','225');
    }
  }


})();
//
// (function($) {
//     $.fn.hasScrollBar = function() {
//         return this.get(0).scrollHeight > this.height();
//     }
// })(jQuery);
