(function() {

  $(document).ready(initialize);
  function initialize() {
    navbar();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $(window).resize(navbar);
    $('#expandMenu').click(expandMenu);

  }

  function navbar() {

      if ($(window).width() >= 1211) {
        $('#supportBtn').html('SUPPORT THE CHOIR');
      }
      else if ($(window).width() < 1211 && $(window).width() > 717) {
        $('#supportBtn').html('SUPPORT');
      }
  }

  function expandMenu() {
    $('#expandMenu').css('display','none');
    $('.menubtn').css('padding-bottom','0px');
    $('.navbar').css('display','block');

  }


})();
