//VALIDATING JS TO CHECK THE INPUT PROVIDED BY USER
//IF IT IS VALID OR NOT


//HELPING FUNCTIONS

//FUNCTION TO CHECK FOR ALL STRING
function checkString( text ) {
	var str= getString(text);
	var len=str.length;
	var check = true;
	var err = "";
	for(var i=0; i<len; i++)
	{
		if(! ( (str.charAt(i)>='a' && str.charAt(i)<='z') || (str.charAt(i)>='A' && str.charAt(i)<='Z') || str.charAt(i)==' ' ) )
		{
			check= false;
		}
	}
	if( check == false)
	{
			err="Only Alphabets Allowed";
		} else {
			err="";
		}
	return err;
}

//FUNCTION TO CHECK FOR  NUMBER
function checkNumber( text ) {
	var str= getString(text);
	var len=str.length;
	var check = true;
	var decimalCheck = 0;
	var err="";
	for(var i=0; i<len; i++)
	{
		//VALID FLOATING NUMBER CHECK
		if(str.charAt(i) == '.') {
			decimalCheck ++;
		} else if( ! (str.charAt(i)>=0 && str.charAt(i)<=9) )
		{
			check = false;
		}
	}
	if( check == false || decimalCheck > 1) {
		err="Only number Allowed";
	}
	//else if (len >=1 && len < 10) {
	//err = "Looks like you missed some digits."
	//}
	return err;
}

//FUNCTION TO CHECK VALID DAY
function checkDay( text ) {
	var str = getString(text).toUpperCase();
	var len=str.length;
	var err="";

	switch (str) {
		case "MONDAY" :
		case "TUESDAY" :
		case "WEDNESDAY" :
		case "THURSDAY" :
		case "FRIDAY" :
		case "SATURDAY" :
		case "SUNDAY" :
			err = "";
			break;
		default:
			err = "Invalid Day";
	}
	return err;
}


//FUNCTIONS HANDLING FORM ELEMENTS

//-------------------------------------------
//FUNCTIONS FOR PERSONAL INFO
//-------------------------------------------

// checking for name
function check_string( text , id ) {
	var value = checkString( text );
	document.getElementById(id+"Err").innerHTML= value;
	changeBorderColor(id , value );
}

function check_day( text , id ){
	var value = checkDay( text );
	document.getElementById('dayErr').innerHTML = value;
	changeBorderColor(id , value );
}

function check_date(text, id) {
	var value="";

	$.ajax({
		type: 'POST',
		url: 'php/check_workout_date.php',
		data: {
			date: $('#date').val()
		},
		success: function(response){
			if(response == '0'){
				value = "Already Added";
				showError("Ummm.... Something's Wrong","Workout already added for this day","Ok","error_close");
			} else if (response == '1') {
				value = "";
			} else {
				value = "Invalid Date";
			}
			document.getElementById('dateErr').innerHTML = value;
			changeBorderColor(id , value );
		}
	});
}

function check_weight( text , id ) {
	var errorId = "weightErr-" + get_id_1(id) + "-" + get_id_2(id);
	var elementId = "set_weight-" + get_id_1(id) + "-" + get_id_2(id);
	var value = checkNumber( text );
	document.getElementById(errorId).innerHTML= value ;
	changeBorderColor(elementId , value );
}

function check_set( text , id ) {
	var errorId = "setErr-" + get_id_1(id) + "-" + get_id_2(id);
	var elementId = "set_rep-" + get_id_1(id) + "-" + get_id_2(id);
	var value = checkNumber( text );
	document.getElementById(errorId).innerHTML= value;
	changeBorderColor(elementId , value );
}

function get_id_1 ( id ) {
	return id.substring( id.indexOf('-') + 1 , id.lastIndexOf('-') ) ;
}

function get_id_2 ( id ) {
	return id.substring( id.lastIndexOf('-') + 1 , id.length ) ;
}

function changeBorderColor(elementId , value) {
	if(value != "") {
		document.getElementById(elementId).style.borderColor = "rgba(300,10,10,1)";
	} else {
		document.getElementById(elementId).style.borderColor = "#111";
	}
}

//FUNCTION TO TRIM THE INPUT AND RETURN ITS STRING EQUIVALENT
function getString( text ) {
	return text.value.toString().trim();
}
//----------------------------------------------------------------------------------

//CHECKING FOR EMAIL ADDRESS IN SIGN IN/SIGN UP PAGE
function check_email( text , id ) {
	var str= text.value;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,})$/;
	var err;
		if( str != "" && reg.test(str) == false )
		{
			err="Invalid Email Address";
		} else {
			err="";
		}
	var idEmailErr = id.substr( 0 , id.lastIndexOf('_')) + '_emailErr'	;

	var idEmailErrText = id.substr( 0 , id.lastIndexOf('_')) + '_emailErrText'	;

	document.getElementById(idEmailErrText).innerHTML=err;

	toggleErrFocus(idEmailErr,err);
}

function toggleErrFocus( idEmailErr ,err ) {

	if(err!="") {
		if( idEmailErr == "sign_in_emailErr") {
			$('#'+idEmailErr).css('right','0');
		} else {
			$('#'+idEmailErr).css('right','-120px');
		}
	} else {
		$('#'+idEmailErr).css('right','-500%');
	}

}
