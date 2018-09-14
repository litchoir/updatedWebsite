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

      // Navbar and line stuff

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
      if ($(window).width() >= 1056) {
        $('#searchBar').css('margin-top','37px');
        $('#brandRow').css('height','150px');
        $('#supportBtn').css('margin-top','57px');
      }
      else if ($(window).width() > 586 && $(window).width() < 1056) {
        $('#brandRow').css('height','200px');
        $('#searchBar').css('margin-top','60px');
        $('#supportBtn').css('margin-top','80px');
      }
      else if ($(window).width() < 586) {
        $('#brandRow').css('height','270px');
      }

      // Button renaming

      if ($(window).width() >= 1211) {
        $('#supportBtn').html('SUPPORT THE CHOIR');
        $('#supportBtn').css('visibility','visible');
      }
      else if ($(window).width() < 1211 && $(window).width() > 717) {
        $('#supportBtn').html('SUPPORT');
        $('#supportBtn').css('visibility','visible');
      }
      else if ($(window).width() < 717) {
        $('#supportBtn').css('visibility','hidden');
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
