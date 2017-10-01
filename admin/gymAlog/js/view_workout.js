$(document).ready( function() {

  var number; //corresponds to number of times function called
  //loading initial workout on page load . number of workout = 10
  var defaultStart = 0;  //this value is used to determine if any workout_detail section has been opened or not 0 - none , 1 - opened

  $('#tab-view-workout').click( function() {
    number = 1; //corresponds to number of times function called
    defaultStart = 0;
    showWorkout( number );
    number++;
    $('.load_more_btn').fadeIn(500);
  });

  $('.load_more_btn').click( function() {
    showWorkout( number );
    number++;
  });

  function showWorkout( number ) {
    $.ajax({
      type: 'POST',
      url: 'php/view_workout.php',
      data: {
        numberOfWorkout: number
      },
      success: function(response){
        if(response == '0'){
          showError("Ummm.... Something's Wrong","No More Workouts","Ok","error_close");
          $('.load_more_btn').fadeOut(500);
        } else {
          if(number == 1){
            //removing previous present and adding from start
            $('#new_workout_show_row').html(response);
          } else{
            //adding next rows to the existing
            $('#new_workout_show_row').append(response);
          }

        }

      }
    });
  }


  $(document).on("click" ,'.more_detail_btn' ,function() {

    var id = $(this).attr('id');
    var idNumber = id.substr( id.indexOf('-')+1 , id.length );

    if( ! $('#wd-' + idNumber).hasClass('active_workout_detail') ) {

      if( defaultStart == 1) {
        var previousOpenElement = $('.active_workout_detail').attr('id');
        $('#'+previousOpenElement).removeClass('active_workout_detail');
        $('#'+previousOpenElement).slideUp(500);

        var elementId = previousOpenElement.substr( previousOpenElement.indexOf('-')+1 , previousOpenElement.length );
        $('#id-' + elementId + ' #mdb-' + elementId + ' i').css({
          'transform':'rotateZ(0deg)'          
        });
        $('#id-' + elementId + ' #delete-' + elementId).css({
          'right': '-100%'
        });
      }

      $('#wd-' + idNumber).slideDown(500).addClass('active_workout_detail');
      $('#delete-'+idNumber).css({
        'right': '0',
        'transition': '.5s ease-in-out'
      });
      $('#' + id + ' i').css({
        'transform':'rotateZ(180deg)',
        'transition':'.5s ease-in-out'
        });
      defaultStart  = 1;
    } else {
      $('#wd-' + idNumber).slideUp(500);
      $('#delete-'+idNumber).css({
        'right': '-100%'
      });
      $('#' + id + ' i').css({
        'transform':'rotateZ(0deg)'
      });
      $('.active_workout_detail').removeClass('active_workout_detail');
      defaultStart  = 0;
    }

  });

  $(document).on("click" ,'.delete_workout_btn' ,function() {

    var id = $(this).attr('id');
    var idNumber = id.substr( id.indexOf('-')+1 , id.length );

    $.ajax({
      type: 'POST',
      url: 'php/delete_workout.php',
      data: {
        idNumber: idNumber
      },
      success: function(response) {
        if(response == 1) {
          $('#id-'+idNumber).css({
            'transform':'scale(0.75)'
          });
          window.setTimeout( function () {
            $('#id-'+idNumber).css({
              'right': '-100%'
            }).fadeOut(500);
          }, 600 );

        } else {
          showError("Ummm.... Something's Wrong","Cannot delete","Ok","error_close");
        }
      }
    });
  });

});
