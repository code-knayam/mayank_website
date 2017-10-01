<?php


  if(! empty($_POST["email"])) {
    $email = ($_POST["email"]);
  }
  // Sanitize data
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  check_email_sql($email);
  //function to check if date already present or not
  function check_email_sql($email) {
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

    $sql = "SELECT * FROM user_account WHERE email = '$email'" ;

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
      echo "0";  // Corresponds date alredy present
    } else if (mysqli_num_rows($result) == 0) {
      echo "1";  //corresponds date is new
    } else{
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);  //error
    }

  }


 ?>
