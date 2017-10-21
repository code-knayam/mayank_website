$(document).ready(function () {

  $(window).bind('scroll', animateMenu);

  function animateMenu() {

    var scrollTop = $(window).scrollTop();
    // var jumboHeight = parseInt($('.jumbotron').css('height'));
    var menuHeight = parseInt($('.menu .horizontal_bar').css('height'));

    if (scrollTop > menuHeight) {
      $('.menu .horizontal_bar').css({
        'height': '50px'
      });
      $('.menu .horizontal_bar .logo a').css({
        'font-size': '20px'
      }); 
      // $('.menu .vertical_bar').css({
      //   'background': '#111'
      // });
    } else {
      $('.menu .horizontal_bar').css({
        'height': '60px'
      });
      $('.menu .horizontal_bar .logo a').css({
        'font-size': '30px'
      });      
      // $('.menu .vertical_bar').css({
      //   'background': 'transparent'
      // });
    }

    var pos = $(window).scrollTop();
    var velocity = 0.05;
    $('.jumbotron').each(function () {
      var $element = $(this);
      var height = $element.height();
      console.log($(this).css('backgroundPosition'));
      var backHeight = 50 + pos * velocity;
      $(this).css('backgroundPosition', '50% ' + backHeight + '%');
      $('.jumbotron h3').css('left', backHeight);
    });
  }

});