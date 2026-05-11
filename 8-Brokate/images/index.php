<!-- 
   Zenjio Photo Gallery Software.
 Vers 1.0 @2024
 www.juppijo.com
 index.php
-->
<!DOCTYPE html>
<html>
<head>
  <title>Zenjio Photo Gallery</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
     button , input{
      background-color: #04AA6D;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      padding: 8px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 8px;
      border: 1px solid #efefef;
    }
    button:hover ,input:hover{
      background-color: #3e8e41;
      box-shadow: 0 1px 10px 0 rgba(30,30,30),0 1px 50px 0 rgba(80,80,80);
    }
    .flex-container {
      display: flex;
      flex-wrap: wrap;
    }
    .flex-container > div {
      text-align: center;
      margin: 10px;
    }
  </style>
</head><body bgcolor="black">
<h2 style="color:rgb(0,255,0)">Zenjio Photo Gallery
<button onclick="myFunction1()">Diashow</button>
<button onclick="myFunction2()">Diashow_Fullscreen</button>
<button onclick="myFunction3()">Diashow_Full_2</button>
</h2>
<?php
  // Image extensions
  $image_extensions = array("png","jpg","jpeg","gif");
  //echo 'File not found - <a href="index.php">refresh</a>';
  //echo '<a href="index.php">*** Refresh ***</a>'; echo ' * ';
  //echo '<a href="UP_Image.html">*** UP_LOAD ***</a>'; echo ' * ';

  // Check delete HTTP GET request - remove images
  if(isset($_GET["delete"])){
    $imageFileType = strtolower(pathinfo($_GET["delete"],PATHINFO_EXTENSION));
    if (file_exists($_GET["delete"]) && ($imageFileType == "jpg" ||  $imageFileType == "png" ||  $imageFileType == "jpeg") ) {
      echo "File found and deleted : " .  $_GET["delete"];
      unlink($_GET["delete"]);

    }
    else {
      echo 'File not found - <a href="index.php">refresh</a>';
    }
  }
  // Target directory *******************************************
  $dir2 = 'images/';
  $dir = getcwd();
  
  // Sort in ascending order - this is default
  // $a = scandir($dir);
  // Sort in descending order
  // $b = scandir($dir,1);
/*
  echo "<br>";
  echo getcwd();
  echo "<br>";
  print_r($dir);
  echo "<br>";
  print_r($dir2);
  echo "<br>";
  print_r($a);
  echo "<br>";
  print_r($b);
  echo "<br>";
*/
  if (is_dir($dir)){
    echo '<div class="flex-container">';
    $count = 1;
    $files = scandir($dir);
    //rsort($files);
    foreach ($files as $file) {
      if ($file != '.' && $file != '..') {?>
        <div style="color:rgb(255,255,0)">
          <p><a href="index.php">Home</a> - <?php echo substr($file, 0,12); ?></p>

          <a href="<?php echo $file; ?>">
            <img src="<?php echo $file; ?>" style="width: 210px;" alt="" title=""/>
          </a>
       </div>
<?php
       $count++;
      }
    }
  }
  if($count==1) { echo "<p>No images found</p>"; } 
?>
  </div>
<script>
function myFunction1(n) {
  window.open("dia.php?pic="+n+"&sstop=go", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
}
function myFunction2(n) {
  window.open("diaff.php?pic="+n+"&sstop=go", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
}
function myFunction3(n) {
  window.open("diaf.php?pic="+n+"&sstop=go", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
}
</script>  
</body>
</html>