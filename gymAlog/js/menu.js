$(document).ready( function() {

  $('.slider-menu-tab').click( function() {
    $('.active_tab').removeClass('active_tab');
    $(this).addClass('active_tab');
    var id = $(this).attr('id');
    id = "#" + id.substr( id.indexOf('-')+1 , id.length);

    var activeSlideId = '#' + $('.active_slide').attr('id');
    ;
    $(activeSlideId).removeClass('active_slide');
    $(id).addClass('active_slide');
  });


});
