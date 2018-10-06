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

      // Bottom stuff

      if ($(window).width() < 1000) {
        $('.smallBottom').css('display','block');
        $('.bigBottom').css('display','none');
      }
      else {
        $('.smallBottom').css('display','none');
        $('.bigBottom').css('display','block');
      }

      // Column Squishing

      if ($(window).width() < 800) {
        $('#triple-threat').css('display','none');
      }
      else if ($(window).width() >= 800) {
        $('#triple-threat').css('display','block');
      }

      // Header stuff

      if ($(window).width() < 700) {
        $('#titleRowUND').css('display','block');
        $('#titleRowDSA').css('display','block');
        $('#titleRow').css('display','none')
      }
      else {
        $('#titleRowUND').css('display','none');
        $('#titleRowDSA').css('display','none');
        $('#titleRow').css('display','block');
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
