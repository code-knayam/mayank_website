$(document).ready( function() {

  $('.navTab').on({
    'mouseenter' : function() {
      $(this).css('background-size', '140%');
      var id = $(this).attr('id');
      var element = '#' + id + ' .heading';
      // $(element).fadeIn(500).css('marginTop','20px');
      $(element).css({
        'paddingTop':'20px',
        'opacity' : '1'
      });
    },
    'mouseleave' : function(){
      $(this).css('background-size', '200%');
      var id = $(this).attr('id');
      var element = '#' + id + ' .heading';
      // $(element).css('marginTop','50px').fadeOut(500);
      $(element).css({
        'paddingTop':'50px',
        'opacity' : '0'
      });
    }
  });

});
