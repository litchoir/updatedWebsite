(function() {
  $(document).ready(initialize);
  function initialize() {
    navbar();
    adjustPeople();
    $('.parallax').parallax();
    $('.ReadMore').click(ReadMore);
    $('#directorBtn').click(buttonRun);
     $('#expandMenu').click(expandMenu);

    $(window).resize(navbar);
    $(window).resize(adjustPeople);
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
      $(location).attr('href','./people.html#alumni')
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

  function buttonRun() {
  if ($('#directorBtn').text() == "Expand Quotes") {
    $('#directorBtn').text("Collapse Quotes");
    $('#people .card-action').css('display','block');
  }
  else {
    $('#directorBtn').text("Expand Quotes");
    $('#people .card-action').css('display','none');
  }
}

 function expandMenu() {
    $('#expandMenu').css('display','none');
    $('.menubtn').css('padding-bottom','0px');
    $('.navbar').css('display','block');

  }

  function adjustPeople() {
    $('.card-content').css('height',$('.litcom').outerHeight(true));
    // if ($(window).width() >= 900) {
    //   $('.peopleType').css('display','block');
    //   $('#enlarge').css('display','none');
    // }
    // else {
    //   if ($('.peopleType').css('display') != 'none') {
    //     $('.peopleType').css('display','none');
    //     $('#enlarge').css('display','block');
    //     $(location).attr('href', './people.html#enlarge');
    //   }
    //   else {
    //     $('.peopleType').css('display','none');
    //     $('#enlarge').css('display','block');
    //   }
    //
    //
    // }

  }

})();
