$(document).ready(function() {
    var loading = false;
    $('#paginate').html('<div id=\"loading\"><img src=\"/images/loading.gif\" id=\"loading-img\"/><br/>Loading...</div>');
    var maxScroll = $('#posts').height() + $('#posts').offset().top - $(window).height() + 120;
    
    $(window).bind('scroll', loadmore);

    $(window).resize(function() {
      maxScroll = $('#posts').height() + $('#posts').offset().top - $(window).height() + 120; // update
    });

    if (maxScroll < 1) { // screen is bigger than posts height -- can't scroll!
      loadmore();
    }

    function loadmore() {
      var curScroll = $(window).scrollTop();

      if ((curScroll > maxScroll) && loading === false) {
        loading = true;
        $('#loading').css('display', 'block');

        $.get(url, function(data) {
          $('<div class="post"/>')
            .append($(data).find('h2'))
            .append($(data).find('#content'))
            .appendTo('#posts');
          url = $(data).find('#previous').attr('href');

          if (!url) { // no more posts
            $(window).unbind('scroll');
            $('#loading').remove();
            return;
          }

          loading = false;
          $('#loading').hide();

          maxScroll = $('#posts').height() + $('#posts').offset().top - $(window).height() + 120; // update
          if (maxScroll < 1) { // make sure screen still isn't bigger than posts height
            loadmore();
          }
        });
      }
    };

  });
