(function() {
  $(document).ready(initialize);
  function initialize() {
    navbar();
    loadPeopleData();
    $('.parallax').parallax();
    $('.ReadMore').click(ReadMore);
    $('#directorBtn').click(buttonRun);
    $('#expandMenu').click(expandMenu);
    $(window).resize(navbar);
  }

  function needsL2Offset(i, len) {
    return len % 4 === 2 && i % 4 === 0 && i !== len - 2;
  }

  function needsL4Offset(i, len) {
    return len % 4 === 2 && i === len - 2;
  }

  function needsMediumOffset(i, len) {
    return len % 3 === 2 && i === len - 2
  }

  function loadPeopleData() {
    $.getJSON("https://lc-admin-website-dynamic-assets.s3.amazonaws.com/data/all.json", (data) => {
      
    /* Background Image */
      $('#parallax-image').attr('src', data.peopleBackgroundImageUrl);
    
      /* Directors, Grad Students, Officers */
      const directors = Object.values(data.directors).sort((d1, d2) => d1.sortOrder - d2.sortOrder);
      const graduateStudents = Object.values(data.graduateStudents).sort((g1, g2) => g1.sortOrder - g2.sortOrder);
      const officers = Object.values(data.officers).sort((o1, o2) => o1.sortOrder - o2.sortOrder);
      
      const contentMap = {
        '#dynamic-directors': directors,
        '#dynamic-graduate-students': graduateStudents,
        '#dynamic-officers': officers
      }

      for (let selector in contentMap) {
        $(selector).html(
          contentMap[selector].map((d, i, arr) => `
            <div class="col s6 m4 l2 ${
                needsL4Offset(i, arr.length) 
                  ? 'offset-l4' 
                  : ' '
              } ${
                needsL2Offset(i, arr.length)
                ? 'offset-l2'
                : ' '
              } ${
                needsMediumOffset(i, arr.length)
                ? 'offset-m2'
                : ' '
              }
              ">
              <div class="card">
                <div class="card-image">
                  <img class="activator" src="${d.imageUrls[0]}">
                    <span class="card-title">${d.name}</span>
                </div>
                <div class="card-content">
                  <i class="white-text material-icons activator infoIcon">info_outline</i>
                  <p class="activator">${d.position}<br></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title">
                    <i class="material-icons closeIcon">close</i>
                    ${d.name.split(' ').slice(0, -1)}<br>${d.name.split(' ').slice(-1)[0]}
                  </span>
                  ${d.biography}
                </div>
              </div>
            </div>`
          )
        )
      }
    })
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

})();
