<!-- 
  dia.php
  ----------- http://192.168.1.39/data/Links/wwwjuppi/Galerie_Zaminia/bing-images/diaff.php?pic=2
 Zenjio Photo Gallery Software.
 Vers 2.0 @2024
 www.juppijo.com
 index.php
-->
<!DOCTYPE html>
<html>
<script src="dia.js"></script>
<head>
  <title>Zenjio Photo Gallery </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style >
    body {
      margin:0;
      background-color: #0F001A;
      justify-content: center;
      align-items: center;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      /* width: 90%; */
      height: 100vh;
      width: auto;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    @media screen and (orientation: portrait) {
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width:  99%;
        height: auto;
        cursor: pointer;
      }
      body {
        background-color: #25001A;
        justify-content: center;
        align-items: center;
      }
    } 
  </style>
</head>
<body>
<?php
$content = $_GET['pic'];
$scrstop = $_GET['sstop'];

$newcontent = $content + 1;

  $image_extensions = array("png","jpg","jpeg","gif");
  $dir = getcwd();
  if (is_dir($dir)){

    $files = scandir($dir);
    $anzahl = count($files);
    sort($files);
    $file = $files[$content];
    $path_parts = pathinfo($file);
    
    $extension = $path_parts['extension'];
 
          if ($scrstop == "stop") { 
            $full = 0; 
           } 
          else { 
            $full = 1; 
          }

      if ($file != '.' && $file != '..' && ($extension == "jpg" || $extension == "jpeg" || $extension == "bmp")){

        echo'<img id="myElement" src="'.$file.'" alt="'.$file.'" title="'.$file.'"/>';

        if($full == 1 ){
          echo'<meta " http-equiv="refresh" content="3; URL=diaff.php?pic='.$newcontent.'">';
        }
      } else {
        if($content >= $anzahl)
        {
          echo'<meta http-equiv="refresh" content="0; URL=diaff.php?pic=0">';
        }else{
          echo"<p>File: '.$file.'</p>";
          echo'<meta " http-equiv="refresh" content="0; URL=diaff.php?pic='.$newcontent.'">';
        }
      }  
  }
?>
</body>
</html>