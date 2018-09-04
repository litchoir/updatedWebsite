(function() {

  $(document).ready(initialize);
  function initialize() {
    navbar();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $(window).resize(navbar);
    $('.collapsible-header').click(switchIcons);
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

  function switchIcons() {
    if ($(this).children('i').html() == 'add') {
      $('.collapsible-header i').html('add');
      $(this).children('i').html('remove');
    } else {
      $(this).children('i').html('add');
    }
  }

})();
