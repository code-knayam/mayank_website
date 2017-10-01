<?php
  //VALIDATING THE ENTERED VALUES AND ENTERING THEM INTO THE DATABASE
  session_start();
  $tableID = $_SESSION["userID"];


  $valid= 0;
  $checkValue = 0;
  $hasError="";
  $date = $day = $muscle = $muscleSet = $allData = "";
  // Validate input and sanitize


  if(! empty($_POST["date"])) {
    $date=test_input($_POST["date"]);
    $valid++;
  } else {
    $hasError = $hasError . "date ";
  }


  if(! empty($_POST["day"])) {
    $day=test_input($_POST["day"]);
    $valid++;
  }else {
    $hasError = $hasError . "day ";
  }


  if(! empty($_POST["muscle"])) {
    $muscle = test_input($_POST["muscle"]);
    $valid++;
  }else {
    $hasError = $hasError . "muscle ";
  }


  if(! empty($_POST["muscleSet"])) {
    $muscleSet = $_POST["muscleSet"];
    $valid++;
  }else {
    $hasError = $hasError . "muscleSet ";
  }

  if(! empty($_POST["allData"])) {
    $allData = json_decode($_POST["allData"]);
    $valid++;
  }else {
    $hasError = $hasError . "data ";
  }

  //POST PART COLSES  

  // Sanitize data
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }


  getIndividualData($date , $day , $muscle , $muscleSet , $allData,$tableID);


  function getIndividualData($date, $day , $muscle , $muscleSet , $allData, $tableID) {
    $entry = array( $date , $day , $muscle );
    $last_id = add_info_data($entry,$tableID);
    $entry = array();
    foreach ($allData as $perSet) {

      array_push( $entry , $perSet->name);
      array_push( $entry , implode(",",$perSet->set_weight));
      array_push( $entry , implode(",",$perSet->set_rep));

      add_log_data($entry , $last_id, $tableID);
      $entry = array();
    }
  }

  function add_info_data( $entry , $tableID ) {

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
    $tableName = $tableID . "_workout_info";

    $sql = "INSERT INTO " . $tableName. " ( date_of_workout , day_of_workout , muscle ) VALUES ( '$entry[0]' , '$entry[1]' , '$entry[2]')";

    if (mysqli_query($conn, $sql))
    {
      return mysqli_insert_id($conn);
    }  else  {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
  }

  function add_log_data( $entry , $last_id , $tableID) {

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

    $tableName2 = $tableID . "_workout_log";
    $sql = "INSERT INTO " . $tableName2 . " ( workout_id , exercise , weight , rep ) VALUES ( '$last_id' , '$entry[0]' , '$entry[1]' , '$entry[2]')";


    if (mysqli_query($conn, $sql))
    {
      echo "";
      } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
  }

?>
