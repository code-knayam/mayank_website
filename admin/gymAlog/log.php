<?php
session_start();
$cookie_name = "user";
if(!isset($_COOKIE[$cookie_name])) {
    header('Location: index.php');
  }

?>

<!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1">
  <meta charset="UTF-8">
  <meta name="description" content="Profile of Mayank Jain">
  <meta name="keywords" content="mayank jain, simply_mayankk, mayankjain1394@gmail.com, contact mayank jain, HTML, CSS, JavaScript, VSEC, DAMS, Kanpur, freelancer, vijay trading company, bootstrap, php, j query, mayank jain info, personal website, cloth merchant, wholesale market, poplin, cotton, polyester, sarees">
  <meta name="author" content="Mayank Jain">
  <meta name="robots" content="index follow">
  <meta name="revisit-after" content="5 days">
  <meta name="google-site-verification" content="BjzK_RgUvMan84Vl03qVO8wzHMx8xH_q7F6RTKL7J0o" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css">
  <link rel='stylesheet' href='css/log.css'/>
  <link rel='stylesheet' href='../css/footer.css'/>
  <link rel="stylesheet" type="text/css" href="css/normalize.css" />
  <link rel="stylesheet" type="text/css" href="css/vicons-font.css" />
  <link rel="stylesheet" type="text/css" href="css/base.css" />
  <link rel="stylesheet" type="text/css" href="css/buttons.css" />

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  <script type="text/javascript" src="js/add_workout.js"></script>
  <script type="text/javascript" src="js/validate.js"></script>
  <script type="text/javascript" src="js/menu.js"></script>
  <script type="text/javascript" src="js/view_workout.js"></script>
  <script type="text/javascript" src="js/log_menu.js"></script>

  <!-- For Date Picker Calendar -->
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
  <script>
    $(document).ready( function() {



        window.setTimeout( function(){
            showError("Welcome", getTimeOfDay() + '<?php  print_r($_SESSION["name"]) ?>',"OK","error_close");
          } , 500);



      $( "#date" ).datepicker();
      $( "#date" ).datepicker( "option", "showAnim", "drop" );
      $( "#date" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
      $('#menu-id').load('../menu.html');
      $('#footer-id').load('../footer.html');
      $('#error').load('error.html');

      function getTimeOfDay() {
        var date = new Date();
        var hour = date.getHours();
        var msg="";
        if ( hour >= 5 && hour <=12) {
          msg = "Morning, ";
        } else if ( hour >12 && hour <= 3) {
          msg = "Afternoon, ";
        } else {
          msg = "Evening, ";
        }
        return "Good " + msg;
      }
    });
  </script>

  <title>Gym-A-Log | Home</title>
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
  </head>


  <body>
  <div id="error">
  </div>

  <div class="menu-bar">
    <h3 id="logo">Gym-A-Log</h3>
    <i class="fa fa-bars" id="menu_toggle_btn"></i>
  </div>
  <div class="side-bar">
    <ul>
<!--      <li class="side_bar_menu_btn">
        <a>Profile</a>
      </li>
      <li class="side_bar_menu_btn">
        <a>Blogs</a>
      </li>
-->      <li class="side_bar_menu_btn">
        <a id="sign_out">Sign Out</a>
      </li>
      <li class="side_bar_menu_btn">
        <a href="mailto:admin@mayankjain.me" target="_blank" class="icon">For queries : <i class="fa fa-envelope" ></i></a>
      </li>
    </ul>
  </div>

  <div class="slider-menu">
    <ul class="slider-menu-element nav nav-pills">
      <li class="slider-menu-tab active_tab" id="tab-add-workout">
        <button class="button button--shikoba  button--border-thin"><i class="button__icon fa fa-plus"></i><span>Add Workout</span></button>
      </li>
      <li class="slider-menu-tab" id="tab-view-workout">
        <button class="button button--shikoba  button--border-thin"><i class="button__icon fa fa-eye"></i><span>View Workout</span></button>
      </li>
      <li class="slider-menu-tab" id="tab-blog-workout">
        <button class="button button--shikoba  button--border-thin"><i class="button__icon fa fa-paper-plane"></i><span>Blogs</span></button>
      </li>
    </ul>
  </div>

  <!-- slider container -->
  <div class="slide-container">
    <!-- Jumbotron -->
    <div class="jumbotron slide active_slide " id="add-workout">
      <div class="container">

        <h2>Add a New Workout</h2>

        <!-- form starts -->
        <form role="form">
          <div  class="form-group">

            <div class="row">
              <div class="muscle-block">
                <div class="row">
                  <div class="col-md-4 inputBlock">
                    <input type="text"  class="form-control" name="date" id="date" onChange="check_date(this, this.id)" autocomplete="off"  required>
                    <label for="date">Date</label>
                    <span class="error" id="dateErr"></span>
                  </div>
                  <div class="col-md-4 inputBlock">
                    <input type="text" class="form-control" name="day" id="day" autocomplete="off"  onChange="check_day( this, this.id )" required>
                    <label for="day">Day</label>
                    <span class="error" id="dayErr"></span>
                  </div>
                  <div class="col-md-4 inputBlock">
                    <input type="text" class="form-control" name="muscle" id="muscle" onChange="check_string(this , this.id)" autocomplete="off"  required>
                    <label for="muscle">Muscle</label>
                    <span class="error" id="muscleErr"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" id="dummy_area">
            </div>
            <div class="row">
              <div class="exercise-block">
                <!-- New Exercise row comes here -->
                <!-- new set rows come here -->
                <!-- New Set Button comes here from javascript function -->
              </div>
              <div class="add_btn newExerciseBtn"  >
                <strong>+</strong> Exercise
              </div>
            </div>

            <div class="submit-block">
              <a id="submit-btn">Submit Workout</a>
              <a id="add_more_workout_btn">Add Another Workout</a>
            </div>
          </div>
        </form>

      </div>
    </div>

    <!-- VIEW SECTION -->
    <div class="jumbotron slide " id="view-workout">
      <div class="container">
        <div class="row">
          <h2>View and Manage your previous Workouts</h2>

          <div class="view_workout_container">
            <div class="container">
              <div class="row" id="new_workout_show_row">

              <!-- Suggested format for the view area added through PHP file
                <div class="individual_workout" id="id-">
                   For Main Workout Detail - Date , Day , Muscle
                  <div class="row">
                    <div class="col-md-4">
                      <i class="fa fa-clock-o"></i>
                      <span id="date_of_workout"></span>
                    </div>
                    <div class="col-md-3">
                      <i class="fa fa-spin fa-calendar"></i>
                      <span id="day_of_workout"></span>
                    </div>
                    <div class="col-md-4">
                      <i class="fa fa-spin fa-cog"></i>
                      <span id="muscle"></span>
                    </div>
                    <div class="col-md-1 more_detail_btn" id="">
                      <i class="fa fa-chevron-down"></i>
                    </div>
                  </div>
                   For detailed Info
                  <div class="row workout_detail">
                     Detailed workout info heading
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
                     Detailed workout info CONTENT
                    <div class="workout_detail_content">
                      <div class="row">
                        <div class="col-md-4">
                          <p>Deadlift</p>
                        </div>
                        <div class="col-md-4">
                          <p>100</p>
                        </div>
                        <div class="col-md-4">
                          <p>5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              -->

              </div>
            </div>
          </div>

          <div class="load_more_btn">
            <a>Load More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- BLOG SECTION -->
    <div class="jumbotron slide" id="blog-workout">
      <div class="container">
        <div class="row">
          <h2>Fitness Blogs</h2>
          

           <div class="col-md-4">
            <div class="work">
              <a  href="../workout/explosive-cardio.html">
                <img src="../images/workout/fat-workout-1/workout-pic.jpg" />
                <h2>Fat Assault Workout</h2>
            		<p>Lose the never going fat with this 5 Min Fat Asault Workout</p>
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>

  </div>


  <div id="footer-id">
  </div>

  </body>
</html>
