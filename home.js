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

      if ($(window).width() >= 1211) {
        $('#supportBtn').html('SUPPORT THE CHOIR');
      }
      else if ($(window).width() < 1211 && $(window).width() > 717) {
        $('#supportBtn').html('SUPPORT');
      }
  }


})();
//
// (function($) {
//     $.fn.hasScrollBar = function() {
//         return this.get(0).scrollHeight > this.height();
//     }
// })(jQuery);
