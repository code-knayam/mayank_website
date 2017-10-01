$(document).ready( function() {


  $('.works .work_frame').on({
    'mouseenter': function() {
      $(window).bind('mousemove', animate_image);
    },
    'mouseleave': function() {
      $(window).unbind('mousemove');
    }
  });


  function animate_image() {
    var element = $('.works');
    // x- left position of cursor and y- top
    var x = event.clientX - element.width()/2 ;
    var y = event.clientY - element.height()/2 ;
    var angle =  x + y;

    $('.works .frame_image').css({
      'transition' : '.1s ease-in-out',
      'transform' : 'rotate3d(3,1,1,'+ angle/20 + 'deg)',
      'top': Math.round( y/10 ),
      'left': Math.round( x/10 )
    });
  }

  $('.nextWork').on('click', function(){
    var currentWork = $('.active_work');
    var nextWork = currentWork.next();

    if(nextWork.length === 0) {
      nextWork = $('.work_container').first();
    }

    currentWork.fadeOut(0).removeClass('active_work');
    hide_work_items();
    nextWork.fadeIn(0).addClass('active_work');
    show_work_items();
  });

  $('.previousWork').on('click', function(){
    var currentWork = $('.active_work');
    var previousWork = currentWork.prev();

    if(previousWork.length === 0) {
      previousWork = $('.work_container').last();
    }

    currentWork.fadeOut(0).removeClass('active_work');
    hide_work_items();
    previousWork.fadeIn(0).addClass('active_work');
    show_work_items();
  });

});

function show_work_items() {
  window.setTimeout( function() {
    $(' .works .about , .works .tags , .works .link , .works .frame_image').css({
      'transition' : '1s ease-in-out',
      'margin-top' : '0',
      'opacity' : '1'
    });
  }, 500);
}

function hide_work_items() {
  $(' .works .about , .works .tags , .works .link , .works .frame_image').css({
    'transition' : '.1s ease-in-out',
    'margin-top' : '50px',
    'opacity' : '0'
  });
}
