
  //---------------------------------
  //AJAX SECTION TO GET FORM ELEMENTS
  //AND SEND IT TO PHP FILE
  //----------------------------------

  $('#submit_btn').click( function(e) {

    e.preventDefault();

    if ( hasNoError() && notEmpty() ){

      $.ajax({
        type: 'POST',
        url: '../php/add_admission_data.php',
        data: {
          Name: $('#Name').val(),
          email: $('#email').val(),
          number: $('#number').val(),
          message: $('#message').val()
        },
        success: function(response) {

          //displaying the response from PHP file
          if( response == "1" ) {
              $('#submit_btn').fadeOut(200);
               response = "Thanks. We'll get back to you soon.";
           }
          $('.message').fadeIn(500).text(response);
        }
      });
    } else {
      //vibrating the form if some error exists
      vibrate();
    }
  });


  //FUCNTION TO VIBRATE THE FORM TO HINT ERROR IS PRESENT
  function vibrate() {
    $('.form-group').effect("shake",{times:3},500);
  }

  //----------------------------------------------------------------------------------
  //FUNCITON TO VALIDATE THE FORM BY CHECKING FOR ANY ERROR PRESENT IN THE FIELD
  //----------------------------------------------------------------------------------

  //validating the form
  function hasNoError() {
    var e = new Array(3);
      e[0]=		$('#nameErr').html();
      e[1]=		$('#emailErr').html();
      e[2]=		$('#numberErr').html();

    var i;
    for( i=0; i< e.length; i++){

      if( e[i] !== ""){
        return false;
      }
    }
    return true;
  }
  function notEmpty() {
    var e = new Array(4);
      e[0]=		$('#Name').html();
      e[1]=		$('#email').html();
      e[2]=		$('#message').html();
      e[3]=		$('#number').html();

    var i;
    for( i=0; i< e.length; i++){

      if( e[i] === ""){
        return false;
      }
    }
    return true;
  }

  //-------------------------------------------------------------------------------
  //			CONTACT	FORM SECTION ENDS
  //-------------------------------------------------------------------------------
