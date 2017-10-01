$(document).ready( function() {
  var deg_counter = 0,deg_color_counter = 0, menu_counter = 0;
  manage_color();


  $('#menu-toggle').click( function() {
    //menu_counter = 0 means menu opens and = 1 means closes
    var width = $('.quarter-circle').width();
    var height = $('.quarter-circle').height();
    if( menu_counter == 0 ) {
      $('.quarter-circle').animate( {right:-width/1.8,top:-height/1.9}, 500);
      $('#menu-toggle').css( {
        'transition': 'transform .5s',
        'transform':'rotate3d(2,0,3,360deg)'
      });
      $('#menu-toggle i').removeClass("fa-bars");
      $('#menu-toggle i').addClass("fa-close");
      $('.menu-nav-button').fadeIn(500);
      menu_counter = 1;
    } else if ( menu_counter == 1 ) {
      $('.quarter-circle').animate( {right:-width,top:-height}, 500);
      $('#menu-toggle').css( {
        'transition': 'transform .5s',
        'transform':'rotate3d(2,0,3,0deg)'
      });
      $('#menu-toggle i').removeClass("fa-close");
      $('#menu-toggle i').addClass("fa-bars");
      $('.menu-nav-button').fadeOut(500);
      menu_counter = 0;
    }

  });



  $('#next').click( function() {
    deg_counter++;
    deg_color_counter++;
    rotate_circle_menu();
  });

  $('#previous').click( function() {
    deg_counter--;
    deg_color_counter--;
    rotate_circle_menu();
  });

  function rotate_circle_menu(){
    var angle = 90*deg_counter;
    var deg = angle + "deg";
    $('.quarter-circle').css( {
      'transition': 'transform 1s, background .5s',
      'transform':'rotateZ('+deg+')'
    });
    set_deg_color_counter_value();
    manage_color();
  }

  function set_deg_color_counter_value() {
    if ( deg_color_counter > 3 ){
      deg_color_counter = 0;
    } else if (deg_color_counter < 0) {
      deg_color_counter = 3;
    }
  }

  function manage_color() {
    switch (deg_color_counter) {
      case 0:
        $('.quarter-circle').css('background','rgba(0,255,255,0.93)');
        break;
      case 1:
        $('.quarter-circle').css('background','rgba(102,152,255,0.93)');
        break;
      case 2:
        $('.quarter-circle').css('background','rgba(255,102,102,0.93)');
        break;
      case 3:
          $('.quarter-circle').css('background','rgba(300,220,180,0.93)');
          break;
      default:
        $('.quarter-circle').css('background','rgba(0,255,255,0.93)');
    }
  }

  $('#workout').click( function() {
    deg_counter += 1;
    deg_color_counter += 1;
    rotate_circle_menu();
  });
  $('#technology').click( function() {
    deg_counter += 2;
    deg_color_counter += 2;
    rotate_circle_menu();
  });
  $('#contact').click( function() {
    deg_counter += 3;
    deg_color_counter += 3;
    rotate_circle_menu();
  });
});
