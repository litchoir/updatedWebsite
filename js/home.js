(function() {

  var htmlArray = [];


  $(document).ready(initialize);
  function initialize() {
    navbar();
    loadNews();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.ReadMore').click(ReadMore);
    $('#expandMenu').click(expandMenu);
    $(window).resize(navbar);
  }

  
  function loadNews() {
    $.getJSON("data/home.json", (data) => {
      $('#slideList').html(
        data.newsItems.map(d =>
          `<li>
            <img src="${d.imageUrl}" style="opacity:0.50">
            <div class="caption center-align">
              <h3>${d.title}</h3>
              <div class="news-item-content" class="light grey-text text-lighten-3">
                <div class="inner-news-item-content">${d.content}</div>
              <div class="center-align news-item-footer">${d.date} &#9679; ${d.author}</div>
            </div>
          </li>`
        ).join("\n")
      );
      $('.slider').slider({
        height: 450,
        interval: 8000
      });
      $('#youtubeVideoContainer').html(
        `<iframe width="100%" height="400" src="${data.featuredVideoLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      );
    })
  }


  function ReadMore() {
    var element_id = $(this).attr('id');
    if ($('#invisible' + element_id).css('display') == 'none') {
      $('#invisible' + element_id).css('display','inline');
      $('#'+ element_id).html('<i class="material-icons">keyboard_arrow_up</i> Read Less');
      if (element_id == "WhoReadMore") $(location).attr('href','./home.html#invisibleWhoReadMore');
      else $(location).attr('href','./home.html#invisibleDirectorReadMore');
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

  function expandMenu() {
    $('#expandMenu').css('display','none');
    $('.menubtn').css('padding-bottom','0px');
    $('.navbar').css('display','block');

  } 


})();
