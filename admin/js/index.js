$(document).ready( function() {

  // $('html,body').animate({scrollTop: '0' },100);

  $('#get_more i').on('click', function(){
    var height = parseInt($('.jumbotron').css('height'));
    scrollPage(height);
  });

  $('#menu_open_icon').on('click', function(){
    $('.menu_container').fadeIn(100);
    $('.menu_container >.flipper').css({
      'transform' : 'rotateX(180deg)'
    });
    $('html,body').css('overflow-y','hidden');
  });

  $('#menu_close_icon').on('click', function(){
    close_menu();
  });

  $('.menu_item').on('click', function() {
    var id = $(this).attr('id');
    close_menu();
    var height;

    switch( id ) {
      case 'works' :
        height = parseInt( $('.jumbotron').css('height') );
        break;

      case 'about_me' :
        height = parseInt( $('.jumbotron').css('height') ) + parseInt( $('#works_section').css('height') ) + parseInt( $('#projects_section').css('height') );
        break;

      case 'contact' :
        height = parseInt( $('.jumbotron').css('height') ) + parseInt( $('#works_section').css('height') ) + parseInt( $('#projects_section').css('height') ) + parseInt( $('#about_me_section').css('height') );
        break;

      default :
        height = 0;
    }

    window.setTimeout( function(){
      scrollPage(height);
    } , 500 );

  });

  function scrollPage(height) {
    $('html, body').animate({scrollTop: height}, 1000);
  }

  function close_menu() {
    $('.menu_container >.flipper').css({
      'transform' : 'rotateX(0deg)'
    });
    $('html,body').css('overflow-y','');
    window.setTimeout(function(){
      $('.menu_container').fadeOut(100);
    },1500);
  }


  var velocity, top, factor, height, ele;

  $(window).bind('scroll', animateElements);

  function animateElements() {
    var scrollTop = $(window).scrollTop();

    if(scrollTop > parseInt($('.jumbotron').css('height')) - parseInt($('.menu').css('height')) ) {
      $('.menu').css('background','rgba(1,1,1,0.9)');
    } else {
      $('.menu').css('background','transparent');
    }

    $('.jumbotron .heading').each(function() {
      velocity = 0.002;
    	ele = $(this);
      factor = 1 - scrollTop * velocity;
      ele.css({
        'transform' : 'scale(' + factor + ')'
      });
  	});


  }

  // Contact form
  $('#Name').on('keypress',function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
	  if(keycode == '13'){
		sendMessage();
	}
  });

  $('.message').css('transform','scale(1)');

  $('#send_message_btn').on('click', function(){
    sendMessage();
  });

  function sendMessage() {
    var message = $('#Name').val();
    var message_format = '<div class="message message_sent"><span>' + message + '</span></div>';

    addToMessageContainer(message_format);
    $('#Name').val('');
    getResponse(message);
  }

  function addToMessageContainer(message_format) {
    $('.message_container').append(message_format);

    window.setTimeout(function(){
      $('.message').css({
        'transform':'scale(1)'
      });
    },500);

    $('.message_container').animate({scrollTop: $('.message').last().offset().top },1500);
  }

  function getResponse(message) {

    //Add AJX call to script here to get reply and add to database
    var message_format = '<div class="message message_received"><span>Hello ' + message + '</span></div>';
    addToMessageContainer(message_format);
  }

});
