$(document).ready( function() {

  $(window).bind('scroll', fix_menu);

  function fix_menu() {
    var pos = $(window).scrollTop();
    var element = parseInt( $('.jumbotron').css('height') );
    var condition = element - parseInt( $('.menu').css('height') );
    if( pos > condition) {
      $('.menu').css({
        'background' : 'rgba(1,1,1,1)',
        'box-shadow' : '0 0 20px #333'
      });
    } else {
      $('.menu').css({
        'background' : 'transparent',
        'box-shadow' : 'none'
      });
    }
      
  }


  $('#show_menu').click(function(){
    $('.secondaryMenu').css('left','0');
  });

});
