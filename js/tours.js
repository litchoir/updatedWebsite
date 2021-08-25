(function() {
  $(document).ready(initialize);
  function initialize() {
    navbar();
    loadToursData();
    $('.parallax').parallax();
    $('#directorBtn').click(buttonRun);
    $(window).resize(navbar);
    $('#expandMenu').click(expandMenu);
  }

  function loadToursData() {
    $.getJSON("data/all.json", (data) => {
      $('#all-tours').html(
        data.tours.map((t) =>
          `<div class="smoothscroll">
            <br><br>
            <h2>${t.year}</h2>
            <h3><i class="material-icons">location_on</i> ${t.location}</h3>
            <div class="row">
              <div class="col m8 offset-m2 s12 center">
                <p class="tour-description">${t.description}</p>
              </div>
            </div>
        
            <div class="row">
              <div class="col m4 offset-m2 s12">
                <img src="${t.image1Url}" style="width:100%">
              </div>
              <div class="col m4 s6 hide-on-small-only">
                <img src="${t.image2Url}" style="width:100%;">
              </div>
            </div>
          </div>`
        ).join('\n')
      )
    });
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

})();
