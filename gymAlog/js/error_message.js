$(document).ready( function() {

  $(document).on( 'click', '.error_close' ,function() {

    $('.error_container').css({
      'left': '-8%'
    });
    window.setTimeout( function () {
      $('.error_container').css('left','100%');
      $('.error_message').fadeOut(500);
      $('body').css('overflow','scroll');
      $('.error_message .error_heading h3').fadeOut(300);
      $('.error_message .error_content p').fadeOut(300);
      $('.error_message .error_button a').fadeOut(300);
      window.setTimeout( function () { $('.error_container').css('left','-100%'); }, 400 );
    }, 400 );
  });

});

function showError( heading, message , btn_msg , btn_link ) {
  var top = $(document).scrollTop();

  $('.error_message').css({
    'top':top
  }).fadeIn(500).focus();
  $('body').css('overflow','hidden');
  $('.error_container').css({
    'left': '0',
    'overflow-x': 'scroll'
  });
  window.setTimeout( function () { showErrorDetails(heading, message , btn_msg , btn_link ); }, 600 );
  window.setTimeout( function () { $('.error_container').css('left','-5%'); }, 600 );
  window.setTimeout( function () { $('.error_container').css('left','0%'); }, 700 );

}

function showErrorDetails( heading, message , btn_msg , btn_link ) {
  $('.error_message .error_heading h3').text(heading).fadeIn(300);
  $('.error_message .error_content p').text(message).fadeIn(300);
  $('.error_message .error_button a').text(btn_msg).fadeIn(300);
  $('.error_message .error_button a').addClass(btn_link);
}
