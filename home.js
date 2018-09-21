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

      console.log("in navbar!")
      // Navbar and line stuff

      if ($(window).width() >= 884) {
         $('.navbar').css('height','50px');
         $('.navbar').css('padding','0px');
      }
      else if ($(window).width() >= 493 && $(window).width() < 884) {
        $('.navbar').css('height','110px');
        $('.navbar').css('padding','3px');
      }
      else if ($(window).width() < 493) {
         $('.navbar').css('height','166px');
         $('.navbar').css('padding','3px');
      }

      if ($(window).width() >= 1055) {
        $('#searchBar').css('margin-top','37px');
        $('#brandRow').css('height','150px');
        $('#supportBtn').css('margin-top','57px');
      }
      else if ($(window).width() >= 568 && $(window).width() < 1055) {
        $('#brandRow').css('height','200px');
        $('#searchBar').css('margin-top','60px');
        $('#supportBtn').css('margin-top','80px');
      }
      else if ($(window).width() < 568 && $(window).width() >= 444) {
        $('#brandRow').css('height','270px');
        $('#searchBar').css('margin-top','97px');
      }
      else if ($(window).width() < 444) {
        $('#brandRow').css('height','330px');
      }


      // Button renaming

      if ($(window).width() >= 1211) {
        $('#supportBtn').html('SUPPORT THE CHOIR');
        $('#supportBtn').css('visibility','visible');
        $('#searchBar').css('visibility','visible');
      }
      else if ($(window).width() < 1211 && $(window).width() > 717) {
        $('#supportBtn').html('SUPPORT');
        $('#supportBtn').css('visibility','visible');
        $('#searchBar').css('visibility','visible');
      }
      else if ($(window).width() < 717) {
        $('#supportBtn').css('visibility','hidden');
        $('#searchBar').css('visibility','hidden');
      }

      // Who & news

      if ($(window).width() < 638) {
        $('#who-News').css('display','none');
      }
      else if ($(window).width() >= 638) {
        $('#who-News').css('display','block');
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
