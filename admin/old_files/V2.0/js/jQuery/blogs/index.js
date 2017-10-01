$(document).ready( function() {

  $(window).bind('scroll', fix_menu);

  function fix_menu() {
    var pos = $(window).scrollTop();
    var element = parseInt( $('.jumbotron').css('height') );
    var condition = element - parseInt( $('.menu').css('height') );
    if( pos > condition) {
      $('.menu').css({
        'background' : 'rgba(51, 51, 51, 0.95)',
        'box-shadow' : '0 0 20px #333'
      });
    } else {
      $('.menu').css({
        'background' : 'transparent',
        'box-shadow' : 'none'
      });
    }
    condition = 90 + element ;
    if (pos > condition ) {
      $('.section .navigation').css('position', 'fixed');
    } else {
      $('.section .navigation').css('position', '');
    }
  }

  $('#subscribe_btn').on('click', function() {
    $('.subscribe').fadeIn(1000);
    $('body').css('overflow','hidden');
  });
  $('#close_subscribe_btn ').on('click', function() {
    $('.subscribe').fadeOut(1000);
    $('body').css('overflow','');
    console.log('close');
  });

});
