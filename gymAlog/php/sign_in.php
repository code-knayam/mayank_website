<?php

  $valid = 0;

  if(! empty($_POST["email"])) {
    $email=test_input($_POST["email"]);
    $valid++;
  }
  if(! empty($_POST["password"])) {
    $password=test_input($_POST["password"]);
    $valid++;
  }
  // Sanitize data
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  if($valid == 2){
    checkInfoCorrect( $email , $password);
  } else {
    echo "Invalid Login";
  }

  function checkInfoCorrect( $email , $password) {

    //DATABASE DETAILS
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

    $sql = "SELECT * FROM user_account WHERE email = '$email' and password = '$password'" ;

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
      if(mysqli_num_rows($result) == 1) {
        //corresponds valid login
        session_start();
  			$row = mysqli_fetch_assoc($result);		//storing retrieved data
  			$_SESSION["name"]= $row["username"];
        $_SESSION["userID"]= $row["userID"];
        $cookie_name = "user";
        $cookie_value = session_id();
        setcookie($cookie_name, $cookie_value, time() + (86400), "/");
                
  			echo "0";
      } else{
        echo "1"; //corresponds duplicate entry
      }
    } else{
      echo "2";  //corresponds invalid login details
    }
  }


?>
