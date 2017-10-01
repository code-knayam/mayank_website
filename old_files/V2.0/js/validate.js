//VALIDATING JS TO CHECK THE INPUT PROVIDED BY USER
//IF IT IS VALID OR NOT


//HELPING FUNCTIONS

//FUNCTION TO CHECK FOR ALL STRING
function checkString( text ) {
	var str= text.value.toString();
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

//FUNCTION TO CHECK FOR  MOBILE NUMBER
function checkContact( text ) {
	var str= text.value.toString();
	var len=str.length;
	var check = true;
	var err="";
	for(var i=0; i<len; i++)
	{
		if( ! (str.charAt(i)>=0 && str.charAt(i)<=9) )
		{
			check = false;
		}
	}
	if( check == false) {
		err="Only number Allowed";
	}
	else if (len >=1 && len < 10) {
		err = "Looks like you missed some digits."
	}
	return err;
}

//FUNCTIONS HANDLING FORM ELEMENTS

//-------------------------------------------
//FUNCTIONS FOR PERSONAL INFO
//-------------------------------------------

// checking for name
function check_Name( text ) {
	document.getElementById('nameErr').innerHTML= checkString( text );
}

//checking for email
function check_email( text ) {
	var str= text.value;
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{1,})$/;
	var err;
		if( str != "" && reg.test(str) == false )
		{
			err="Invalid Email Address";
		} else {
			err="";
		}
	document.getElementById('emailErr').innerHTML=err;
}

//checking for number
function check_number( text ) {
	document.getElementById('numberErr').innerHTML= checkContact( text );
}



//----------------------------------------------------------------------------------
