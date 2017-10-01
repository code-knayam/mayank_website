<?php
session_start();

$numberOfRows = 10;

if(! empty($_POST["numberOfWorkout"])) {
  $number=test_input($_POST["numberOfWorkout"]);
}
// Sanitize data
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

  //Calling function to get the workout and display details according to format provided
  getWorkout($number-1, $numberOfRows);

  //Function to get the workout details form table workout_info
  function getWorkout( $number, $numberOfRows ) {

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


    $sql = "SELECT COUNT(workout_id) as total FROM " . $tableName;

    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $id_mark = $row['total'];

    if( $number == 0) {
      $sql = "SELECT * FROM " . $tableName . "  ORDER BY date_of_workout DESC LIMIT $numberOfRows " ;
    } else {
      $sql = "SELECT * FROM " . $tableName . "  ORDER BY date_of_workout DESC LIMIT $numberOfRows OFFSET 10" ;
    }


    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {

      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {

        echo '<div class="individual_workout" id="id-' . $row['workout_id']  . '">
          <!-- For Main Workout Detail - Date , Day , Muscle -->
          <div class="row">
            <div class="col-md-4">
              <i class="fa fa-spin fa-clock-o"></i>
              <span id="date_of_workout">' . $row['date_of_workout'] . '</span>
            </div>
            <div class="col-md-3">
              <i class="fa fa-calendar"></i>
              <span id="day_of_workout">' . ucfirst( strtolower( $row['day_of_workout'] ) ) . '</span>
            </div>
            <div class="col-md-3">
              <i class="fa fa-male"></i>
              <span id="muscle">' . ucfirst( strtolower( $row['muscle'] ) ) . '</span>
            </div>
            <div class="col-md-1 more_detail_btn" id="mdb-' . $row['workout_id']  . '">
              <i class="fa fa-chevron-down"></i>
            </div>
            <div class="col-md-1 delete_workout_btn" id="delete-' . $row['workout_id']  . '">
              <i class="fa fa-trash-o"></i>
            </div>
          </div>
          <!-- For detailed Info -->
          <div class="row workout_detail" id="wd-' . $row['workout_id']  . '">
            <!-- Detailed workout info heading-->
            <div class="workout_detail_heading">
              <div class="row">
                <div class="col-md-4">
                  <h4>Exercise</h4>
                </div>
                <div class="col-md-4">
                  <h4>Set</h4>
                </div>
                <div class="col-md-4">
                  <h4>Rep</h4>
                </div>
              </div>
            </div>
            <!-- Detailed workout info CONTENT-->
            <div class="workout_detail_content">' .
              //Calling the Function to get individual log details from workout_log table
              getInfoFromSql( $row['workout_id'] )
            .'
            </div>
          </div>
        </div>';
      }

    } else {
      echo "0";
    }
  }


  //Function to get the workout log details form table workout_log
  function getInfoFromSql( $workout_id ) {

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
    $tableName2 = $tableID . "_workout_log";

    $sql = "SELECT * FROM " . $tableName2 . " WHERE workout_id = $workout_id" ;

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {

      $finalOutput = "";

      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
        $p2 = $p4 = "";

        $exerciseName = ucfirst( strtolower( $row['exercise'] ) );
        if( $exerciseName == "") {

          $finalOutput = '<div class="row">
          No Workout Done
          </div>';
        }
        else {
          $p1 =  '
          <div class="row">
            <div class="col-md-4">
              <p>' . $exerciseName . '</p>
            </div>
            <div class="col-md-4">';

          foreach( explode(",",$row['weight']) as $key ){
            $p2 = $p2 . '<p>' . $key .'</p>';
          }

          $p3 = '
            </div>
            <div class="col-md-4">';
          foreach( explode(",",$row['rep']) as $key ){
            $p4 = $p4 . '<p>' . $key .'</p>';
          }

          $p5 = '
            </div>
          </div>';
          $finalOutput = $finalOutput . $p1.$p2.$p3.$p4.$p5;
        }

      }
      return $finalOutput;
    } else {
      return "No Workout Done that Day";
    }
  }
 ?>
