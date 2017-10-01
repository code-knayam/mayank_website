$(document).ready( function() {
	$(window).scroll( function() {
		var scrollTop = $(window).scrollTop();
		var height = $(window).height();
		$('.header h1').css( {'opacity':( (height-2.5*scrollTop) / (height) ) } );
		$('.menu').css( {'opacity': (1- (height-3*scrollTop) / (height) ) } );	
	});
});