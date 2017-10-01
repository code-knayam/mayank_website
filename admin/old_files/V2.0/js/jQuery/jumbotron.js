$(document).ready( function() {

  animateDownArrow();

  function animateDownArrow() {
    $('.jumbotron .arrow i').animate({
      'top':'10px',
      'opacity' : '1'
    }, 1000);
    window.setTimeout( function() {
      $('.jumbotron .arrow i').animate({
        'top':'-20px',
        'opacity' : '0'
      }, 0);
      animateDownArrow();
    }, 1500);

  }

  $('#down_arrow').click( function() {
    window.setTimeout(function(){
      var topValue = $(".works").offset().top - $('.menu').height();
      $('html,body').animate({scrollTop: topValue },1000);
    }, 500);
  });

  //generating parallax jumbotron background
	var $window = $(window);
	var velocity = 0.25;

	function update(){
  	var pos = $window.scrollTop();

  	$('.jumbotron').each(function() {
      	var $element = $(this);
      	var height = $element.height();

      	$(this).css('backgroundPosition', '50% ' + Math.round((height/200 - pos) * velocity) + 'px');
        $('.jumbotron h3').css('marginTop', Math.round((0 - pos) * velocity*2) );
  	});
	}

	$window.bind('scroll', update);

});
