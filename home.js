(function() {

  $(document).ready(initialize);
  function initialize() {
    navbar();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.ReadMore').click(ReadMore);
    $('.slider').slider({
      height: 450,
      interval: 8000
    });
    $(window).resize(navbar);
  }


  function ReadMore() {

    var element_id = $(this).attr('id');
    if ($('#invisible' + element_id).css('display') == 'none') {
      $('#invisible' + element_id).css('display','inline-block');
      $('#'+ element_id).html('<i class="material-icons">keyboard_arrow_up</i> Read Less');
    }
    else {
      $('#invisible' + element_id).css('display','none');
      $('#'+ element_id).html('<i class="material-icons">keyboard_arrow_down</i> Read More');
      if (element_id == 'WhoReadMore') $(location).attr('href','./home.html#whoWeAreHeader')
      else if (element_id == 'DirectorReadMore')  $(location).attr('href','./home.html#aWord')
    }

  }


  function navbar() {


      if ($(window).width() >= 884) {
         $('.navbar').css('height','50px');
         $('.navbar').css('padding','0px');
      }
      else if ($(window).width() >= 464 && $(window).width() < 884) {
        $('.navbar').css('height','110px');
        $('.navbar').css('padding','3px');
      }
      else if ($(window).width() < 464) {
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

      // if ($(window).width() >= 600) {
      //   $('#invisibleWhoReadMore').css('display','block');
      // }

      // Bottom stuff

      if ($(window).width() < 1000) {
        $('.smallBottom').css('display','block');
        $('.bigBottom').css('display','none');
      }
      else {
        $('.smallBottom').css('display','none');
        $('.bigBottom').css('display','block');
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

  function slideshow() {

  }


})();
//
// (function($) {
//     $.fn.hasScrollBar = function() {
//         return this.get(0).scrollHeight > this.height();
//     }
// })(jQuery);
