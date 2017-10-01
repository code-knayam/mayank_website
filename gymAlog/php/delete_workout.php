<?php

session_start();


if(! empty($_POST["idNumber"])) {
  $number=test_input($_POST["idNumber"]);
}
// Sanitize data
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
  delete_workout( $number );

  function delete_workout( $number ) {
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

    $tableID = $_SESSION["userID"];
    //table names
    $tableName = $tableID . "_workout_info";
    $tableName2 = $tableID . "_workout_log";

    $sql = "DELETE FROM " . $tableName . " where workout_id = '$number' ";
    $sql2 = "DELETE FROM " . $tableName2 . " where workout_id = '$number' ";

    if( mysqli_query($conn, $sql) && mysqli_query($conn, $sql2) ) {
      echo '1';  //corresponds delete succesfull
    } else {
      echo '0';  //corresponds delete failed
    }
  }


?>
