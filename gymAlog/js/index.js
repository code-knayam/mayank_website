  var emailDuplicateCheck ;
$(document).ready( function(){

  var tries = 0;

  //SHOWING THE PASSWORD IF FIELD IS NOT NULL BY CHANGING THE TYPE OF INPUT FIELD
  $('.show_password').click( function(){
    var id = "#" + $(this).attr('id') + "password";

    if( $(id).val() != "" ){
      if( $(this).hasClass('fa-eye')) {
        $(id).attr('type','text');
        $(this).removeClass('fa-eye').addClass('fa-eye-slash');
      } else {
        $(id).attr('type','password');
        $(this).removeClass('fa-eye-slash').addClass('fa-eye');
      }
    }
  });

  //FOR AUTOMATIC CHANGE OF INFORMATION AFTER AN INTERVAL OF 8s
  $('.slide').first().addClass('.active_info');
  $('.slide_bullet i').last().addClass('fa-circle').removeClass('fa-circle-thin');
  var repeater;
  change_info();
  function change_info() {

    var currentSlide = $('.active_info');
    var nextSlide = currentSlide.next();

    var currentBullet = $('.fa-circle');
    var nextBullet = currentBullet.next();

    if( nextSlide.length == 0) {
      nextSlide = $('.slide').first();
    }
    if( nextBullet.length == 0) {
      nextBullet = $('.slide_bullet i').first();
    }
    currentSlide.fadeOut(1000).removeClass('active_info');
    nextSlide.fadeIn(1000).addClass('active_info');

    currentBullet.removeClass('fa-circle').addClass('fa-circle-thin');
    nextBullet.removeClass('fa-circle-thin').addClass('fa-circle');

    repeater = setTimeout(change_info, 5000);
  }

  //GENERATING PARALLAX EFFECT
  var $window = $(window);
  var velocity = 0.4;
  $window.bind('scroll', update);
  function update(){
  var pos = $window.scrollTop();

  $('.jumbotron').each(function() {
      $(this).css('backgroundPosition', '50% ' + Math.round(pos * velocity) + 'px');
  });
  }

  //SIGN IN BUTTON ---- CALLING PHP FILE BY AJAX, START SESSION AND MOVE TO NEXT PAGE

  $('#sign_in_btn').click( function(e){
    e.preventDefault();
    var email = $('#sign_in_email').val().trim();
    var password = $('#sign_in_password').val().trim();

    if(email!="" && password!="" ) {
      if( hasNoError('#sign_in_emailErr')) {
        $.ajax({
          type: 'POST',
          url: 'php/sign_in.php',
          data: {
            email: email,
            password: password
          },
          success: function(response) {
            if(response == 0) {
              window.location.replace("log.php");
            } else if (response == 1) {
              showError("Ummm.... Something's Wrong","Duplicate entry","Ok","error_close");
            } else if (response == 2) {
              showError("Ummm.... Something's Wrong","Invalid login details","Ok","error_close");
            } else {
              showError("Ummm.... Something's Wrong",response,"Ok","error_close");
            }
            tries ++;
            checkTries();
          }
        });
      } else{
        vibrateError('#sign_in_emailErr');
      }
    } else {
      shakeForm('.sign_in_form');
    }


  });

  //function to check number of invalid tries
  function checkTries() {
    if(tries>=3){
      showError("Ummm.... Something's Wrong","3 tries. Reset","Reset password","error_close");
    }
  }

  //SIGN UP ---- USING AJAX CALL TO PHP FILE AND ADD DATA < START SESSION AND MOVE TO NEXT PAGE
  $('#sign_up_btn').click( function(e){
    e.preventDefault();
    var email = $('#sign_up_email').val().trim();
    var password = $('#sign_up_password').val().trim();
    var username = $('#sign_up_username').val().trim();

    if(email!="" && password!="" && username!=""  &&  emailDuplicateCheck ) {



      if( hasNoError('#sign_up_emailErr') ) {
        console.log("in");
        $.ajax({
          type: 'POST',
          url: 'php/sign_up.php',
          data: {
            email: email,
            password: password,
            username: username
          },
          success: function(response) {
            if(response == 0) {
              window.location.replace("php/createDataTable.php");
            } else {
              showError("Ummm.... Something's Wrong",response,"Ok","error_close");
            }
          }
        });
      }else{
        vibrateError('#sign_up_emailErr');
      }
    } else {
      shakeForm('.sign_up_form');
    }

  });


    //Function to check if any error present
    function hasNoError(id) {
      var valid = true;
      var element = $(id);
      if( element.text() != ""){
        valid = false;
      }
      return valid;
    }

    //function to vibrate the form
    function vibrateError(id) {
      $(id).css('transform','scale(1.2)');
      window.setTimeout(function () {
        $(id).css('transform','scale(1)');
      }, 500);
    }

    function shakeForm(id) {
      $(id).effect('shake',{times:2},500);
    }

});
    // to check duplicate email entries

    function checkIfEmailAlreadyPresent(emailID) {
    	var message;
        var email = emailID.value;
    	$.ajax({
    		type: 'POST',
    		url: 'php/emailCheck.php',
    		data: {
    			email: email
    		},
    		success: function(response) {
    			if(response == 0) {
    				message = "Email Already Registred";
    			} else if(response == 1) {
    				message = "OK";
    			} else {
    				message = response;
    			}
          if( message == "OK") {
            emailDuplicateCheck = true;
          } else {
            showError("Ooooppsss....!!", message , "Ok" , "error_close");
            emailDuplicateCheck = false;
          }
    		}
    	});
    }


