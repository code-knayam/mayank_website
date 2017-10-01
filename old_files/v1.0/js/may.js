$(document).ready( function() {



	$('#learn').click( function() {
		$('.nav').toggle();
		$('.about').toggle(1500);
		$('.jumbotron').toggle(1800);
		$('.footer').toggle(2000);
		$('#learn').fadeOut(2200);
		window.setTimeout( function () { bringToTop(); }, 100 );
	});
	function bringToTop() {
		$('html,body').animate({scrollTop: $("#navi").offset().top-$('#navi').height()},1000);
	}

	$('#about').click( function() {
		$('#ed').removeClass('active');
		$('#busi').removeClass('active');
		$('#cont').removeClass('active');
		$('#work').removeClass('active');
		$(this).addClass('active');

		$('.edu').slideUp(1000);
		$('.business').slideUp(1000);
		$('.contact').slideUp(1000);
		$('.works').slideUp(1000);
		$('.about').slideDown(1000);

	});
	$('#ed').click( function() {
		$('#about').removeClass('active');
		$('#busi').removeClass('active');
		$('#cont').removeClass('active');
		$('#work').removeClass('active');
		$(this).addClass('active');

		$('.about').slideUp(1000);
		$('.business').slideUp(1000);
		$('.contact').slideUp(1000);
		$('.works').slideUp(1000);
		$('.edu').slideDown(1000);
	});
	$('#busi').click( function() {
		$('#about').removeClass('active');
		$('#ed').removeClass('active');
		$('#cont').removeClass('active');
		$('#work').removeClass('active');
		$(this).addClass('active');

		$('.edu').slideUp(1000);
		$('.about').slideUp(1000);
		$('.contact').slideUp(1000);
		$('.works').slideUp(1000);
		$('.business').slideDown(1000);
	});
	$('#cont').click( function() {
		$('#about').removeClass('active');
		$('#busi').removeClass('active');
		$('#ed').removeClass('active');
		$('#work').removeClass('active');
		$(this).addClass('active');

		$('.edu').slideUp(1000);
		$('.about').slideUp(1000);
		$('.business').slideUp(1000);
		$('.works').slideUp(1000);
		$('.contact').slideDown(1000);
	});

	$('#work').click( function() {
		$('#about').removeClass('active');
		$('#busi').removeClass('active');
		$('#ed').removeClass('active');
		$('#cont').removeClass('active');
		$(this).addClass('active');

		$('.edu').slideUp(1000);
		$('.about').slideUp(1000);
		$('.business').slideUp(1000);
		$('.contact').slideUp(1000);
		$('.works').slideDown(1000);
	});


	  //-------------------------------------------------------------------------------
		//			CONTACT	FORM SECTION BEGINS
		//-------------------------------------------------------------------------------


		//PERSONAL INFO INPUT HANDLERS

		//checking the name border
		$('#Name').on({
			focusout: function() {
				var err = $('#nameErr').text();
				if ( err != "") {
					addInvalidBorder(this);
				}
				else {
					normalBorder(this);
				}
			},
			focus: function() {
				focusBorder(this);
			}
		});
	  //checking if error in email
		$('#email').on({
			focusout: function() {
				var err = $('#emailErr').text();
				if ( err != "") {
					addInvalidBorder(this);
					$('#email + label').addClass('set-label');
				}
				else {
					normalBorder(this);
					$('#email + label').removeClass('set-label');
				}
			},
			focus: function() {
				focusBorder(this);
			}
		});
	  //checking the number
		$('#number').on({
			focusout: function() {
				var err = $('#numberErr').text();
				if ( err != "") {
					addInvalidBorder(this);
				}
				else {
					normalBorder(this);
				}
			},
			focus: function() {
				focusBorder(this);
			}
		});
	  //MESSAGE HANDLER
		$('#message').on({
			focusout: function() {
				var err = $('#messageErr').text();
				if ( err != "") {
					addInvalidBorder(this);
				}
				else {
					normalBorder(this);
				}
			},
			focus: function() {
				focusBorder(this);
			}
		});

	  //---------------- BODER STYLING FUNCTIONS--------
		//adding normal border
		function normalBorder( element ) {
			$(element).css('border-bottom',"1px solid #111");
		}
		//adding in focus border
		function focusBorder( element ){
			$(element).css('border-bottom',"2px solid #2254a3");
		}
		//adding the invalid border
		function addInvalidBorder( element ){
			$(element).css('border-bottom',"2px solid #a35c22");
		}
		//removing the invalid border
		function removeInvalidBorder( element ){
			$(element).css('border-bottom',"none");
		}

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
	      e[0]=		document.getElementById('nameErr').innerHTML;
	      e[1]=		document.getElementById('emailErr').innerHTML;
	      e[2]=		document.getElementById('numberErr').innerHTML;

	    var i;
	    for( i=0; i< e.length; i++){

	      if( e[i] != ""){
	        return false;
	      }
	    }
	    return true;
	  }
	  function notEmpty() {
	    var e = new Array(4);
	      e[0]=		document.getElementById('Name').value;
	      e[1]=		document.getElementById('email').value;
	      e[2]=		document.getElementById('message').value;
	      e[3]=		document.getElementById('number').value;

	    var i;
	    for( i=0; i< e.length; i++){

	      if( e[i] == ""){
	        return false;
	      }
	    }
	    return true;
	  }

	  //-------------------------------------------------------------------------------
	  //			CONTACT	FORM SECTION ENDS
	  //-------------------------------------------------------------------------------


});
