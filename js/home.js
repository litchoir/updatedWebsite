(function() {

  var htmlArray = [];


  $(document).ready(initialize);
  function initialize() {
    navbar();
    loadHomeData();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.ReadMore').click(ReadMore);
    $('#expandMenu').click(expandMenu);
    $(window).resize(navbar);
  }

  
  function loadHomeData() {
    $.getJSON("https://lc-admin-website-dynamic-assets.s3.amazonaws.com/data/all.json", (data) => {
      /* Background Image */
      $('#parallax-image').attr('src', data.homeBackgroundImageUrl);

      /* News Items */
      const newsItems = Object.values(data.newsItems).sort((n1, n2) => n2.date - n1.date);
      $('#slideList').html(
        newsItems.map(d => {
          const dateObj = new Date(d.date);
          const dateToDisplay = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
          return `<li class="news-item">
            <img src="${d.imageUrls[0]}" style="opacity:0.25">
            <div class="news-item-flexbox caption">
                <h3 class="news-item-title">${d.title}</h3>
                <div class="news-item-content light grey-text text-lighten-3">
                  <div class="inner-news-item-content">${d.content}</div>
                </div>
                <div class="center-align news-item-footer">${dateToDisplay} &#9679; ${d.author}</div>
            </div>
          </li>`
        }).join("\n")
      );

      /* Animation of image slider */
      $('.slider').slider({
        height: 450,
        interval: 8000
      });

      /* Featured Video Link */
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
