$(document).ready( function() {

  $('.jumbotron .btn').click( function() {
    $('html,body').animate({scrollTop: $('.section').offset().top},1000);
  });

  var width = $('.exercise-container').width();
  $('#next').click( function() {
    slide(width);
  });

  $('#previous').click( function() {
    slide(-width);
  });

  var time_toggle = 1;
  $('.timer #button a').click( function() {
    if(time_toggle == 1){
      reset_picture();
      reset_timer();
      update_time();      
      $('.timer #button a').text("Pause Workout");
      time_toggle = 0;
    } else if( time_toggle == 0)
    {
      stop_timer();
      $('.timer #button a').text("Start Workout");
      time_toggle = 1;
    }
  });

  function reset_timer() {
    var minutes = parseInt($('#minutes').text());
    var seconda = parseInt($('#seconds').text());
    if(minutes == 5) {
      minutes = "0" + 0;
      seconds = "0" + 0;
      $('#minutes').text(minutes);
      $('#seconds').text(seconds);
    }
  }
  function reset_picture(){
    var seconds = parseInt($('#seconds').text());
    var minutes = parseInt($('#minutes').text());
    if(seconds <= 30 && minutes < 1){
      $('#ec-1').animate( {left: 0}, 800);
      $('#ec-2').animate( {left: '100%'}, 800);
      $('#ec-3').animate( {left: '200%'}, 800);
      $('#ec-4').animate( {left: '300%'}, 800);
    }
  }

  var repeater = 0;
  function update_time() {
    var seconds = parseInt($('#seconds').text());
    var minutes = parseInt($('#minutes').text());

    //updating seconds
    seconds++;
    //updating minutes if seconds>60
    if(seconds == 60 ){
      minutes++;
      seconds = 0;
    }
    //sliding pictures when a slide event occurs
    if( (seconds == 30 && minutes == 1) || (seconds == 0 && minutes == 3) || (seconds == 30 && minutes == 4) ) {
      slide(width);
    }
    //play a alert sound to start a new exercise
    if(seconds == 30 || seconds == 0){
      play_alert();
    }
    //adding 0 before seconds
    if(minutes <= 9 ) {
      minutes = "0" + minutes;
    }
    //adding 0 before minutes
    if(seconds <= 9 ) {
      seconds = "0" + seconds;
    }
    $('#seconds').text(seconds);
    $('#minutes').text(minutes);
    //stop workout
    if(minutes == 5){
      $('.timer #button a').text("Congrats!! You did it.");
      stop_timer();
      reset_timer();
      reset_picture();
    } else {
      repeater = setTimeout(update_time, 1000);
    }
  }

  function stop_timer() {
    clearTimeout(repeater);
  }

  function slide(width){
    var left1 = parseInt($('#ec-1').css('left'))-width;
    var left2 = parseInt($('#ec-2').css('left'))-width;
    var left3 = parseInt($('#ec-3').css('left'))-width;
    var left4 = parseInt($('#ec-4').css('left'))-width;

    if( left4 >= 0){
      $('#ec-1').animate( {left: left1}, 800);
      $('#ec-2').animate( {left: left2}, 800);
      $('#ec-3').animate( {left: left3}, 800);
      $('#ec-4').animate( {left: left4}, 800);
    }
  }
  //for playing the alert
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', '../workout/alert.mp3');

  function play_alert() {
    audioElement.play();
  }  
});