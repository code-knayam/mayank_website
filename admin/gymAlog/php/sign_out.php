<?php
session_start();
// remove all session variables
session_unset();

// destroy the session
session_destroy();
$cookie_name = "user";
$cookie_value = session_id();
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>
