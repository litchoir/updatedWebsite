(function() {

  $(document).ready(initialize);
  function initialize() {
    navbar();
    loadAboutData();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $(window).resize(navbar);
    $('#expandMenu').click(expandMenu);
    $('.collapsible-header').click(switchIcons);
  }

  function loadAboutData() {
    $.getJSON("https://lc-admin-website-dynamic-assets.s3.amazonaws.com/data/all.json", (data) => {
      /* Background Image */
      $('#parallax-image').attr('src', data.aboutBackgroundImageUrl);

      /* Current School Year */
      const date = new Date();
      const [m, y] = [date.getMonth(), date.getFullYear()];
      const [lastYear, thisYear, nextYear] = [y - 1, y, y + 1];
      const isSecondHalfOfYear = m >= 6;
      $('#current-school-year').html( isSecondHalfOfYear ? `${thisYear}-${nextYear}` : `${lastYear}-${thisYear}`);

      /* Audition Date */
      $('#current-audition-date').html(data.aboutAuditionDeadline);
    })
  }

  function navbar() {

      if ($(window).width() >= 1211) {
        $('#supportBtn').html('SUPPORT THE CHOIR');
      }
      else if ($(window).width() < 1211 && $(window).width() > 717) {
        $('#supportBtn').html('SUPPORT');
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

 function expandMenu() {
    $('#expandMenu').css('display','none');
    $('.menubtn').css('padding-bottom','0px');
    $('.navbar').css('display','block');

  }

    
})();
