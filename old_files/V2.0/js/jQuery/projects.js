$(document).ready( function() {


  $('.projects .project_frame').on({
    'mouseenter': function() {
      $(window).bind('mousemove', animate_image);
    },
    'mouseleave': function() {
      $(window).unbind('mousemove');
    }
  });

  function animate_image() {
    var element = $('.projects');
    // x- left position of cursor and y- top
    var x = event.clientX - element.width()/2 ;
    var y = event.clientY - element.height()/2 ;
    var angle =  x + y;

    $('.projects .frame_image').css({
      'transition' : '.1s ease-in-out',
      'transform' : 'rotate3d(3,1,1,'+ angle/20 + 'deg)',
      'top': Math.round( y/10 ),
      'left': Math.round( x/10 )
    });
  }

  $('.nextProject').on('click', function(){
    var currentProject = $('.active_project');
    var nextProject = currentProject.next();

    if(nextProject.length === 0) {
      nextProject = $('.project_container').first();
    }

    currentProject.fadeOut(0).removeClass('active_project');
    hide_project_items();
    nextProject.fadeIn(0).addClass('active_project');
    show_project_items();
  });

  $('.previousProject').on('click', function(){
    var currentProject = $('.active_project');
    var previousProject = currentProject.prev();

    if(previousProject.length === 0) {
      previousProject = $('.project_container').last();
    }

    currentProject.fadeOut(0).removeClass('active_project');
    hide_project_items();
    previousProject.fadeIn(0).addClass('active_project');
    show_project_items();
  });


});

function show_project_items() {
  window.setTimeout( function() {
    $(' .projects .about , .projects .tags , .projects .link , .projects .frame_image').css({
      'transition' : '1s ease-in-out',
      'margin-top' : '0',
      'opacity' : '1'
    });
  }, 500);
}

function hide_project_items() {
  $(' .projects .about , .projects .tags , .projects .link , .projects .frame_image').css({
    'transition' : '.1s ease-in-out',
    'margin-top' : '50px',
    'opacity' : '0'
  });
}
