(function() {
  var tour_offsets = {}
  $(document).ready(initialize);
  function initialize() {
    navbar();
    $('.parallax').parallax();
    $('#directorBtn').click(buttonRun);
    $(window).resize(navbar);
    $('ul.pagination li a').click(changeTour);
    $(window).scroll(hidePage);
    $(window).scroll(adjustYear);
    $('#expandMenu').click(expandMenu);
    initializeYearRanges();
    setInterval(adjustYear,200);
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

  function changeTour() {
    var year = jQuery(this).html();
    var element = jQuery(this).attr("id");
    if (element != 'lswitcher' && element != 'rswitcher') {
      $('ul.pagination li').removeClass('active');
      if (year == '2014') {
      }
      else if (year == '2020') {
      }
      $(location).attr('href', './tours.html#a' + year);
    }
    else if (element == 'lswitcher' && ! $('ul.pagination li.Lli').hasClass('disabled')) {
      $('ul.pagination li.Rli').removeClass('disabled');
      var activeYear = $('ul.pagination li.active a').html();
      $('ul.pagination li').removeClass('active');
      activeYear++;
      if (activeYear == '2020') $('ul.pagination li.Lli').addClass('disabled');

      $(location).attr('href', './tours.html#a' + activeYear);
    }
    else if (element == 'rswitcher' && ! $('ul.pagination li.Rli').hasClass('disabled')) {
      $('ul.pagination li.Lli').removeClass('disabled');
      var activeYear = $('ul.pagination li.active a').html();
      $('ul.pagination li').removeClass('active');
      activeYear--;
      if (activeYear == '2014') {
        $('ul.pagination li.Rli').removeClass('active');
        $('ul.pagination li.Rli').addClass('disabled');
      }
      $(location).attr('href', './tours.html#a' + activeYear);
    }

  }

  function initializeYearRanges() {
    var current_year = new Date().getFullYear() - 1;
    var minimum_year = 2013;
    for (var i = current_year; i >= minimum_year; i--) {
        tour_offsets [i] = {
            "offset": (i >= 2014) ? (($('#a' + (i+1)).offset().top + $('#a' + i).offset().top) / 2) : (($('#a2014').offset().top + $('#aearlier').offset().top) / 2)
        };
    }
  }

  function hidePage() {
    var y14e = ($('#a2014').offset().top + $('#aearlier').offset().top) / 2;
    if ($(window).scrollTop() >= y14e) {
        $('.pagination').css('display','none');
    }
    else {
      $('.pagination').css('display','block');
    }
  }


  function changePagination(y) { 
    $('ul.pagination li').removeClass('active');
    if (y == new Date().getFullYear()) {
        $('ul.pagination li.Lli').addClass("disabled");
        $('ul.pagination li.Rli').removeClass("disabled");
    } else if (y == 2014) { 
        $('ul.pagination li.Rli').addClass("disabled");
        $('ul.pagination li.Lli').removeClass("disabled");
    } else { 
        $('ul.pagination li.Rli').removeClass("disabled");
        $('ul.pagination li.Lli').removeClass("disabled");
    }
    $('ul.pagination li.' + y).addClass('active');
  }

function adjustYear() {
    var page_scroll = $(window).scrollTop();

    for (var j = new Date().getFullYear() - 1; j >= 2014; j--) {
        if (page_scroll < tour_offsets[j]["offset"]) {
            changePagination(j+1);
            return;
        }
    }

    changePagination(2014);

})();
