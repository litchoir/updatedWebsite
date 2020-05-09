(function() {
  var tour_offsets = {};
  var minimum_year = 2014;
  var maximum_year = 2020;
  $(document).ready(initialize);
  function initialize() {
    navbar();
    initializePagination();
    initializeYearRanges();
    $('.parallax').parallax();
    $('#directorBtn').click(buttonRun);
    $(window).resize(navbar);
    $('ul.pagination li a').click(changeTour);
    $(window).scroll(hidePage);
    $(window).scroll(adjustYear);
    $('#expandMenu').click(expandMenu);
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


  function initializePagination() { 
    for (var i = minimum_year; i <= maximum_year; i++) { 
        $('.Lli').after('<li class="' + i + ' waves-effect"><a href="#!">' + i + '</a></li>');
        if (i == maximum_year) $("." + i).addClass("active");
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
      if (year == minimum_year) {
      }
      else if (year == maximum_year) {
      }
      $(location).attr('href', './tours.html#a' + year);
    }
    else if (element == 'lswitcher' && ! $('ul.pagination li.Lli').hasClass('disabled')) {
      $('ul.pagination li.Rli').removeClass('disabled');
      var activeYear = $('ul.pagination li.active a').html();
      $('ul.pagination li').removeClass('active');
      activeYear++;
      if (activeYear == maximum_year) $('ul.pagination li.Lli').addClass('disabled');

      $(location).attr('href', './tours.html#a' + activeYear);
    }
    else if (element == 'rswitcher' && ! $('ul.pagination li.Rli').hasClass('disabled')) {
      $('ul.pagination li.Lli').removeClass('disabled');
      var activeYear = $('ul.pagination li.active a').html();
      $('ul.pagination li').removeClass('active');
      activeYear--;
      if (activeYear == minimum_year) {
        $('ul.pagination li.Rli').removeClass('active');
        $('ul.pagination li.Rli').addClass('disabled');
      }
      $(location).attr('href', './tours.html#a' + activeYear);
    }

  }

  function initializeYearRanges() { 
    for (var i = maximum_year; i >= minimum_year; i--) {
        tour_offsets [i] = {
            "offset": (i > minimum_year) ? (($('#a' + i).offset().top + $('#a' + (i-1)).offset().top) / 2) : (($('#a' + minimum_year).offset().top + $('#aearlier').offset().top) / 2)
        };
    }
  }

  function hidePage() {
    var earliest_offset = ($('#a' + minimum_year).offset().top + $('#aearlier').offset().top) / 2;
    if ($(window).scrollTop() >= earliest_offset) {
        $('.pagination').css('display','none');
    }
    else {
      $('.pagination').css('display','block');
    }
  }


  function changePagination(y) {
    $('ul.pagination li').removeClass('active');
    if (y == maximum_year) {
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
    for (var j = maximum_year; j >= minimum_year; j--) {
        if (page_scroll < tour_offsets[j]["offset"]) {
            changePagination(j);
            return;
        }
    }
    changePagination(2014);
}

})();
