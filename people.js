(function() {
  $(document).ready(initialize);
  function initialize() {
    navbar();
    adjustPeople();
    $('.parallax').parallax();
    $('#directorBtn').click(buttonRun);
    $(window).resize(navbar);
    $(window).resize(adjustPeople);
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
    if ($(window).width() >= 900) {
      $('.peopleType').css('display','block');
      $('#enlarge').css('display','none');
    }
    else {
      if ($('.peopleType').css('display') != 'none') {
        $('.peopleType').css('display','none');
        $('#enlarge').css('display','block');
        $(location).attr('href', './people.html#enlarge');
        console.log("whaddup");
      }
      else {
        $('.peopleType').css('display','none');
        $('#enlarge').css('display','block');
      }


    }

  }

})();
