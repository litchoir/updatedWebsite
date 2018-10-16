(function() {
  $(document).ready(initialize);
  function initialize() {
    navbar();
    adjustPeople();
    $('.parallax').parallax();
    $('.ReadMore').click(ReadMore);
    $('#directorBtn').click(buttonRun);
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
      if (element_id == 'WhoReadMore') $(location).attr('href','./home.html#whoWeAreHeader')
      else if (element_id == 'DirectorReadMore')  $(location).attr('href','./home.html#aWord')
    }

  }

  function navbar() {
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
        $('.navbar').css('height','171px');
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
