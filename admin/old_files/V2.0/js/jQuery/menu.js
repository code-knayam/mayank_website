$(document).ready(function() {

  $('.menu_item').on("click", function() {
    var id = $(this).attr('id');
    window.setTimeout( function() {
      var element = '.' + id;
      var topValue = $(element).offset().top - $('.menu').height();
      $('html,body').animate({scrollTop: topValue },1000);
    }, 500);
  });




});
