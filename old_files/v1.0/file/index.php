<!DOCTYPE html>
<head>
<style>
  .files_uploaded {
    text-decoration: none;
    color: #111;
    padding: 10px;     
  }
  form {
    background: #ddd;
    padding: 10px;
    margin: 10px;

  }
</style>
</head>
<html>

<body>
<h3>please re-name your files by your name and question attempted</h3>
<form action="upload.php" method="post" enctype="multipart/form-data">

    Select file to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>
  <p>
    Click on file to open
  </p>
<?php
$dir = "uploads/";

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
      echo "<a class=\"files_uploaded\" href=\"uploads/" . $file . " \" target= \" _blank \" > ". $file . " </a> <br>";
    }
    closedir($dh);
  }
}


?>
</body>
</html>
