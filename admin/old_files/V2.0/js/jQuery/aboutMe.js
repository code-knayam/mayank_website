

function show_aboutMe() {


  var height, width, radii;

  window.setTimeout( function() {
    $('.about_me #part_1 ').css({
      'left' : '0',
      'transition' : '2s ease-in-out'
    });
    $('.about_me #part_2 ').css({
      'top' : '0',
      'transition' : '2s ease-in-out'
    });
    $('.about_me #part_3 ').css({
      'left' : '0',
      'transition' : '2s ease-in-out'
    });
    // skill_animate();
    height = $('#svgCont').height() /2;
    width = $('#svgCont').width() /2;

    var svg_element = "" ;

    radii = 150;
    //getting skills from CV
    var skills = cv.skills;

    for (var counter=1; counter<=8; counter++){
      svg_element = svg_element + '<circle class="small_circle" id="circle_' + counter + '" cx="' + width  + '" cy="' + height + '" r="40"  fill="#f' + (9-counter) + 'c9' + counter + 'b" />';
      svg_element = svg_element +  '<text class="skill_text"  id="text_' + counter + '" x="' + width  + '" y="' + height + '" fill="#000000" font-family="sans-serif" font-size="15" text-anchor="middle">' + skills[counter-1] + '</text>';
    }
    svg_element = svg_element + '<circle cx="' + width + '" cy="' + height + '" r="60"  fill="#37c9fb" />';
    svg_element = svg_element +  '<text class="skill_text" x="50%" y="50%" fill="#0000" font-family="sans-serif" font-size="23" text-anchor="middle">SKILLS</text>';


    $('#aboutSvg').append( svg_element );
    $("#svgCont").html($("#svgCont").html());

    window.setTimeout( function(){
      showText();
    }, 2000);
  } , 1000);

  function showText() {
    $('.about_me .content').css({
      'margin-top' : '0',
      'opacity' : '1',
      'transition' : '2s ease-in-out'
    });
    window.setTimeout(function() {
      var divider = Math.sqrt(2);
        $('#circle_1').attr({
          'cx' : (width + radii),
          'cy' : height
        });
        $('#circle_2').attr({
          'cx' : (width + radii/ divider),
          'cy' : (height + radii / divider)
        });
        $('#circle_3').attr({
          'cx' : width ,
          'cy' : (height + radii)
        });
        $('#circle_4').attr({
          'cx' : (width - radii / divider),
          'cy' : (height + radii / divider)
        });
        $('#circle_5').attr({
          'cx' : (width - radii),
          'cy' : height
        });
        $('#circle_6').attr({
          'cx' : (width - radii / divider),
          'cy' : (height - radii / divider)
        });
        $('#circle_7').attr({
          'cx' : width ,
          'cy' : (height - radii)
        });
        $('#circle_8').attr({
          'cx' : (width + radii / divider),
          'cy' : (height - radii / divider)
        });
        $('#text_1').attr({
          'x' : (width + radii),
          'y' : height
        });
        $('#text_2').attr({
          'x' : (width + radii/ divider),
          'y' : (height + radii / divider)
        });
        $('#text_3').attr({
          'x' : width ,
          'y' : (height + radii)
        });
        $('#text_4').attr({
          'x' : (width - radii / divider),
          'y' : (height + radii / divider)
        });
        $('#text_5').attr({
          'x' : (width - radii),
          'y' : height
        });
        $('#text_6').attr({
          'x' : (width - radii / divider),
          'y' : (height - radii / divider)
        });
        $('#text_7').attr({
          'x' : width ,
          'y' : (height - radii)
        });
        $('#text_8').attr({
          'x' : (width + radii / divider),
          'y' : (height - radii / divider)
        });
        window.setTimeout(function(){
        $('.skill_text').fadeIn(5000);
        }, 1000); // third timeout to show the text
    } , 2000);  //first timeout to bring up all the bubbles

  }

}
