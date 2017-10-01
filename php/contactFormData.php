<?php
// validating the new account and adding information to the sql database and sending errors if present


$valid= 0;
$checkValue = 4;
$hasError="";
// Validate input and sanitize

  //FOR NAME
  if(! empty($_POST["Name"])) {
    $Name=test_input($_POST["Name"]);
    $valid++;
  } else {
    $hasError = $hasError . "name ";
  }

  //FOR EMAIL
  if(! empty($_POST["email"])) {
    $email=test_input($_POST["email"]);
    $valid++;
  }else {
    $hasError = $hasError . "email ";
  }


  //FOR NUMBER
  if(! empty($_POST["number"])) {
    $number=test_input($_POST["number"]);
    $valid++;
  }else {
    $hasError = $hasError . "Contact ";
  }


  //FOR EXTRA INFO CAN BE EMPTY
  if(! empty($_POST["message"])) {
    $message=test_input($_POST["message"]);
    $valid++;
  }else {
    $hasError = $hasError . "Messages ";
  }


//post part closes

// Sanitize data
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}


if($valid == $checkValue) {

  //CALLING FUNCTION TO ADD DATA INTO DATABSE AND RETURN ID
  add_data( $Name, $email, $number, $message);

}
else {
  echo "Fill the form correctly. Error in ".$hasError;
}


//fucntion to add data to database
function add_data( $Name, $email, $number, $message ) {

  $db_servername = "localhost";
  $db_username = "mayanbkt_addData";
  $db_password = "knayam1394";
  $db_name = "mayanbkt_contact";

  // Create connection
  $conn = mysqli_connect($db_servername, $db_username, $db_password,$db_name);
  // Check connection
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  $sql = "INSERT INTO contact_queries( queryDate, name, email, contact, message ) VALUES ( now(), '$Name', '$email', '$number', '$message' )";


  if (mysqli_query($conn, $sql))
  {
    send_reply_mail($Name, $email);    
    echo "1";
    } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}

function send_reply_mail($Name, $email) {

  $headers = 'From: mayankjain1394@gmail.com' . "\r\n" . 'Reply-To: mayankjain1394@gmail.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();


   $from_add = "admin@mayankjain.me";

	$to_add = $email; //<-- put your yahoo/gmail email address here

	$subject = "Query Submission @ mayankjain.me";
	$message = $message = "Dear " . $Name . ",\r\n\r\n\r\n Thanks for submitting your query. We'll get back to you very shortly. \r\n Have a nice day." ;

	$headers = "From: $from_add \r\n";
	$headers .= "Reply-To: $from_add \r\n";
  $headers .= "Bcc: $from_add \r\n";
	$headers .= "Return-Path: $from_add\r\n";
	$headers .= "X-Mailer: PHP \r\n";


	if(mail($to_add,$subject,$message,$headers))
	{
		$msg = "Mail sent OK";
	}
	else
	{
 	   $msg = "Error sending email!";
	}

}



?>
