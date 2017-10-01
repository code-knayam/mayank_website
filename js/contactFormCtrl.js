app.controller('contactFormCtrl', ['$scope', function($scope){

  $scope.checkName = function() {
    var err = "";
    if( angular.isDefined($scope.form_name)) {
      var name= $scope.form_name;
      var len = name.length;
    	var check = true;
      if ( len > 0 ) {
        for(var i=0; i<len; i++) {
      		if(! ( (name.charAt(i)>='a' && name.charAt(i)<='z') || (name.charAt(i)>='A' && name.charAt(i)<='Z') || name.charAt(i)==' ' ) ) {
      			check= false;
      		}
      	}
      	if( check === false) {
          err="Enter valid name";
      	} else {
      		err="";
      	}
      }
    } else {
      err = "";
    }
    $scope.form_nameErr = err;
  };

  $scope.checkEmail = function() {
    var err = "";
    console.log($scope.form_email);
    if( angular.isDefined($scope.form_email) ) {
      var email= $scope.form_email;
    	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,})$/;
      if( reg.test(email) === false ) {
    		err="Invalid Email Address";
    		$('#emailLabel').addClass('set-label');
    	} else {
    		err="";
    		$('#emailLabel').removeClass('set-label');
    	}
    } else {
      err = "";
      $('#emailLabel').removeClass('set-label');
    }
    $scope.form_emailErr = err;
  };

  $scope.checkContact = function() {
    var contact= $scope.form_contact;
  	var len=contact.length;
  	var check = true;
  	var err="";
  	for(var i=0; i<len; i++) {
  		if( ! (contact.charAt(i)>=0 && contact.charAt(i)<=9) ) {
  			check = false;
  		}
  	}
  	if( check === false) {
  		err="Only number Allowed";
  	} else if (len >=1 && len < 10) {
  		err = "Looks like you missed some digits.";
  	}
    $scope.form_contactErr = err;
  };

  $scope.sendData  = function() {

    if ( hasNoError() && notEmpty() ){

      $.ajax({
        type: 'POST',
        url: 'php/contactFormData.php',
        data: {
          Name: $scope.form_name,
          email: $scope.form_email,
          number: $scope.form_contact,
          message: $scope.message
        },
        success: function(response) {

          //displaying the response from PHP file
          if( response == "1" ) {
              $('#submit_btn').fadeOut(200);
               response = "Thanks. We'll get back to you soon.";
           }
          $('.message h3').text(response);
          rotateForm();
        }
      });
    } else {
      //vibrating the form if some error exists
      vibrate();
    }
  };

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
      e[0]=		$scope.form_nameErr;
      e[1]=		$scope.form_emailErr;
      e[2]=		$scope.form_contactErr;

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
      e[0]=		 $scope.form_name;
      e[1]=		$scope.form_email;
      e[2]=		$scope.form_contact;
      e[3]=		$scope.message;

    var i;
    for( i=0; i< e.length; i++){

      if( e[i] === ""){
        return false;
      }
    }
    return true;
  }
  function rotateForm() {
    $('form').css({
      'transform' : 'rotateY(90deg)',
      'transition' : '1s ease-in-out'
    });
    window.setTimeout( function() {
      $('form').css({'display':'none'});
      $('.message').fadeIn(1000).css({
        'transform' : 'rotateY(0deg)',
        'transition' : '1s ease-in-out'
      });
    } , 1000);

  }
}]);
