<?php
session_start();
$cookie_name = "user";
if(isset($_COOKIE[$cookie_name])) {
    header('Location: log.php');
  }

?>

 <!DOCTYPE html>
<html>
  <head>
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1">
  <meta charset="UTF-8">
  <meta name="description" content="Workout Scheduler">
  <meta name="keywords" content="fitness , blogs, workout, daily routine, sets, weights, gymALog, gym-a-log , mayank , mayank jain , kanpur">
  <meta name="author" content="Mayank Jain">
  <meta name="robots" content="index follow">
  <meta name="revisit-after" content="5 days">
<meta property="og:image" content="../images/work_gymAlog.png">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css">
  <link rel='stylesheet' href='css/index.css'/>
<link rel='stylesheet' href='../css/footer.css'/>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
  <script type="text/javascript" src="js/validate.js"></script>



  <title>Gym A Log | Sign In</title>
	<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
  </head>


  <body ng-app="">

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=553238161534467";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

  <div id="error" ng-include="'error.html'">
  </div>


  <!-- Menu bar -->
  <div class="menu_bar">
    <div class="logo">
      <h3>Gym-A-Log</h3>
    </div>
    <div class="sign_in_form">
      <form role="form">
        <div  class="form-group">
          <div class="inputBlock">
            <div class="row">
              <div class="col-md-5">
                <input type="email"  class="form-control" name="sign_in_email" id="sign_in_email" placeholder="Email" onChange="check_email(this, this.id)" autocomplete="off"  required>
                <span class="error" id="sign_in_emailErr"><i class="fa fa-caret-up"></i><p id="sign_in_emailErrText"> </p></span>
              </div>
              <div class="col-md-5">
                <i class="fa fa-eye show_password" id="sign_in_"></i>
                <input type="password"  class="form-control" name="sign_in_password" id="sign_in_password" placeholder="Password" autocomplete="off"  required>
              </div>
              <div class="col-md-2">
                <input type="submit" value="SIGN IN" id="sign_in_btn"/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Jumbotron -->
  <div class="jumbotron">
    <div class="container">

      <div class="heading">
        <div class="row">
          <h3>Gym - A - Log</h3>
        </div>
      </div>

      <div class="content">
        <div class="row">

          <!-- contains info about system -->
          <div class="col-md-7 information">
            <h3>MANAGE YOUR DAILY WORKOUTS</h3>
            <div class="row">
              <div class="slide">
                <div class="col-md-5">
                  <span class="slide_image glyphicon glyphicon-plus"></span>
                </div>
                <div class="col-md-7">
                  <p>
                    Add your daily workouts on the Go.
                  </p>
                </div>
              </div>
              <div class="slide">
                <div class="col-md-5">
                  <span class="slide_image glyphicon glyphicon-search"></span>
                </div>
                <div class="col-md-7">
                  <p>
                    View them whenever you want to see your previous progress.
                  </p>
                </div>
              </div>
              <div class="slide">
                <div class="col-md-5">
                  <span class="slide_image glyphicon glyphicon-pencil"></span>
                </div>
                <div class="col-md-7">
                  <p>
                    Edit them on the Go.
                  </p>
                </div>
              </div>
              <div class="slide">
                <div class="col-md-5">
                  <span class="slide_image glyphicon glyphicon-list-alt"></span>
                </div>
                <div class="col-md-7">
                  <p>
                    Get various workout suggestions and fitness blog suggestions.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="slide_bullet">
                <i class="fa fa-circle-thin">&nbsp;</i>
                &nbsp;
                <i class="fa fa-circle-thin">&nbsp;</i>
                &nbsp;
                <i class="fa fa-circle-thin">&nbsp;</i>
                &nbsp;
                <i class="fa fa-circle-thin">&nbsp;</i>
                &nbsp;
              </div>
            </div>

          </div>

          <div class="col-md-1">
            <!-- DUMMY AREA -->
          </div>

          <!-- Contains the form -->
          <div class="col-md-3 sign_up_form">
            <p class="sign_up_heading">
              SIGN UP AND START IN SECONDS
            </p>

            <!-- SIGN UP FORM -->
            <form role="form">
              <div  class="form-group">
                <div class="row">
                  <div class="inputBlock">
                    <span class="error" id="sign_up_emailErr"><i class="fa fa-caret-left"></i><p id="sign_up_emailErrText"> </p></span>
                    <input type="email"  class="form-control" name="sign_up_email" id="sign_up_email" placeholder="Email" onChange="check_email(this, this.id); checkIfEmailAlreadyPresent(this);""  autocomplete="off"  required>
                    <i class="fa fa-eye show_password" id="sign_up_"></i>
                    <input type="password"  class="form-control" name="sign_up_password" id="sign_up_password" placeholder="Password" autocomplete="off"  required>
                    <input type="text"  class="form-control" name="sign_up_username" id="sign_up_username" placeholder="User Name" autocomplete="off" required>
                  </div>
                  <div class="submitBlock">
                    <input type="submit" value="SIGN UP" id="sign_up_btn"/>
                  </div>
                  <div class="orBlock">
                    <h4><!--OR--></h4>
                  </div>
<!--
                  <div class="secondary_loginBlock" id="google_login">
                    <a>
                      <i class="fa fa-google"></i>
                      &nbsp;&nbsp;
                      Google
                    </a>
                  </div>
                  <div class="secondary_loginBlock" id="facebook_login">
                    <a>
                      <i class="fa fa-facebook"></i>
                      &nbsp;&nbsp;
                      Facebook
                    </a>
                  </div>
-->
                 <div style="background: rgba(230,230,230,0.3); padding: 8px 2px; border-radius: 5px;">
                    <div class="fb-like" data-href="http://www.mayankjain.me/gymAlog" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                 </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-1">
            <!-- DUMMY AREA -->
          </div>
        </div>
      </div>

    </div>
  </div>


  <!-- Footer -->
  <div id="footer-id" ng-include="'../footer.html'">
  </div>

  </body>
</html>
