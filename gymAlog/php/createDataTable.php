<?php
session_start();
create_table();
send_welcome_mail();
echo "<script>window.location.replace('../log.php');</script>";
//function to create table
function create_table() {
  $db_servername = "localhost";
  $db_username = "mayanbkt_addData";
  $db_password = "knayam1394";
    $db_name = "mayanbkt_gymAlog";

  // Create connection
  $conn = mysqli_connect($db_servername, $db_username, $db_password,$db_name);
  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  //table names
  $tableID = $_SESSION["userID"];
  $tableName = $tableID . "_workout_info";
  $tableName2 = $tableID . "_workout_log";
  //checking if table exists or not. creating a table if it doesnt

  if( ! ( mysqli_query($conn,"select 1 from ".$tableName." LIMIT 1") && mysqli_query($conn,"select 1 from ".$tableName2." LIMIT 1") ) ) {

    $sql = "CREATE TABLE " . $tableName . " (
      workout_id INT(100) AUTO_INCREMENT PRIMARY KEY ,
      date_of_workout DATE NOT NULL,
      day_of_workout VARCHAR(10) NOT NULL,
      muscle VARCHAR(100) NOT NULL
    ) " ;
    $sql2 = "CREATE TABLE " . $tableName2 . " (
      ID INT(100) AUTO_INCREMENT PRIMARY KEY ,
      workout_id INT(100) NOT NULL,
      exercise VARCHAR(100) NOT NULL,
      weight VARCHAR(100) NOT NULL,
      rep VARCHAR(100) NOT NULL
    ) " ;
    if(!(mysqli_query($conn,$sql) && mysqli_query($conn,$sql2))) {
      echo mysqli_error($conn);
    }
  }
}

function send_welcome_mail() {


  
  $headers = 'From: mayankjain1394@gmail.com' . "\r\n" . 'Reply-To: mayankjain1394@gmail.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

 
   $from_add = "admin@mayankjain.me"; 

	$to_add = $_SESSION["email"]; //<-- put your yahoo/gmail email address here

	$subject = "Welcome to Gym - A - Log";
	$message = $message = "Dear " . $_SESSION["name"] . ",\r\n Welcome to your personal fitness blog. Keep exercising and getting fit. Record your daily exercise logs and keep a track of your progress.\r\n Your login information are - \r\n email - " . $_SESSION["email"] . "\r\n username  - " . $_SESSION["name"] . "\r\n Password - " . $_SESSION["password"] ;
	
	$headers = "From: $from_add \r\n";
	$headers .= "Reply-To: $from_add \r\n";
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
