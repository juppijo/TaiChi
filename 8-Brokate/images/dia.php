<!-- 
  dia.php
  -----------
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
  <link href='https://fonts.googleapis.com/css?family=Arial' rel='stylesheet'>
  
  <style >
    /* Safari syntax */
    :-webkit-full-screen {
      background-color: Darkblue;
    }
    /* IE11 */
    :-ms-fullscreen {/* IE11 */
    :-ms-fullscreen {
      background-color: Darkblue;
    }
    /* Standard syntax */
    :fullscreen {
      background-color: Darkblue;Darkblue
    }
    /* Style the button */
    button {
      padding: 8px;
      font-size: 14px;
    }
      background-color: Darkblue;
    }
    /* Standard syntax */
    :fullscreen {
      background-color: Darkblue;Darkblue
    }
    /* Style the button */
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
    body {
      background-color: #000F00;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      font-family: 'Arial';
    }
    * {
      font-family: 'Arial';font-size: 16px;
      box-sizing: border-box;
      color: white;
      cursor: default;
    }
    p {
      color:rgb(0,99,0);
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      height: 92vh;
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
        background-color: Navy;
        font-family: 'Arial';
      }
    }

    /* Position the image container (needed to position the left and right arrows) */
    .container {
      position: relative;
    }

    /* Hide the images by default */
    .mySlides {
      display: none;
    }

    /* Add a pointer when hovering over the thumbnail images */
    .cursor {
      cursor: pointer;
    }

    /* Next & previous buttons */
    .prev,
    .next {
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 16px;
      margin-top: -50px;
      color: white;
      font-weight: bold;
      font-size: 20px;
      border-radius: 0 3px 3px 0;
      user-select: none;
      -webkit-user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
      /* Position the "next button" to the right */
    .prev {
      left: 0;
      border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    /* Container for image text */
    .caption-container {
      text-align: center;
      background-color: #222;
      padding: 2px 16px;
      color: white;
    }

    .row:after {
      content: "";
      display: table;
      clear: both;
    }

    /* Six columns side by side */
    .column {
      float: left;
      width: 16.66%;
    }

    /* Add a transparency effect for thumnbail images */
    .demo {
      opacity: 0.6;
    }

    .active,
    .demo:hover {
      opacity: 1;
    }
    .flex-container {
      display: flex;
      flex-wrap: wrap;
    }
    .flex-container > div {
      text-align: center;
      margin: 30px;
    }
    #backg1 {
    border: 1px solid black;
    padding: 1px;
    background: url(1.jpg);
    background-repeat: no-repeat;
    background-size: auto;
    }
    .mySlides {
    background-color: yellow;
    }
    .center {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    }
  </style>

</head>
<body>
<div class="center"> 
  <button onclick="openFullscreen(document.documentElement);">Open Fullscreen</button>
  <button onclick="closeFullscreen();">Close Fullscreen</button>
  <button onclick="myFunction(1)">Goto 1</button>
  <input id="bt1" type="text" value="1">
  <button onclick="myFunction3()">Go</button>
  <button onclick="goFullscreen()">Vollbild</button>
  <button onclick="goFullscreen2()">Vollbild2</button>
  <button onclick="myStop()">Stop sliding</button>
  <button onclick="myGo()">Go sliding</button>
</div>
<h3 id="myDIV">
  <p id="demo">*****</p>
  <p id="demo3">+++++</p>
</h3>
<div id="myElement2">
<?php
$content = $_GET['pic'];
$scrstop = $_GET['sstop'];

$newcontent = $content + 1;
echo '<button id="navig1" class="prev" onclick="minusSlides(1)"><<</button>';
echo '<button id="navig2" class="next" onclick="plusSlides(1)">>></button>';

  echo '<h2 id="demo4"; class="center">';
  $Width_Screen="<script>document.write(innerWidth)</script>";
  $Hight_Screen="<script>document.write(innerHeight)</script>";
  echo' *';
  $ratio = 1;
  echo $scrstop;
  echo "<script>var stoped = '$scrstop';</script>";
  echo'* ';
  echo $content;
  echo "<script>var picture = '$content';</script>";
  echo' - ';
  echo $Width_Screen;
  echo' / ';
  echo $Hight_Screen;
  echo' = ';
  echo $ratio;
  echo '</h2>';
  $image_extensions = array("png","jpg","jpeg","gif");
  $dir = getcwd();
  if (is_dir($dir)){
  echo '<div class="flex-container">';
  // background-size: 100% 100%;
  //echo '<div id="backg1">';
    $files = scandir($dir);
    $anzahl = count($files);
    sort($files);
    $file = $files[$content];
    $path_parts = pathinfo($file);
    //echo '<h2 style="color:rgb(0,255,0); font-size:100%; text-align:center;">';
    //echo $path_parts['dirname'], "\n";
    //echo $path_parts['basename'], "\n";
    $extension = $path_parts['extension'];
    //echo $path_parts['filename'], "\n";
    //echo "<br>";
    //echo $file;
    //echo " ";
    //echo $content;
    //echo "/";
    //echo $anzahl;
    //echo " . ";
    //echo $extension;
    //echo "<br>";
    //var_dump($files);
    //echo '</h2>';
    echo'</div>'; 
    //foreach ($files as $file) 
    //($file != '.' && $file != '..' && $extension != "php" && $extension != "css" && $extension != "js" && $extension != "html"&& $file != "index" && ($extension == "jpg" || $extension == "jpeg" || $extension == "bmp")
          if ($scrstop == "stop") { 
            $full = 0; 
            echo'<p id="demo2">**Land**</p>';
           } 
          else { 
            $full = 1; 
            echo'<p id="demo2">*Port*</p>';
          }

      if ($file != '.' && $file != '..' && ($extension == "jpg" || $extension == "jpeg" || $extension == "bmp")){
        echo' <div style="color:rgb(155,255,0)">';
          echo' <a href="'.$file.'">';
          //echo "<br>";
          //echo $files[$content];
          echo "<br>";
          echo'<img id="myElement" src="'.$file.'" alt="'.$file.'" title="'.$file.'"/>';
          //echo'<img src="'.$file.'" style="height: 100%;" alt="'.$file.'" title="'.$file.'"/>';
          //echo'<img src="'.$file.'" height="100%">';
          echo "<br>";
          echo' </a>';
        echo'</div>';

        if($full == 1 ){
          echo'<meta " http-equiv="refresh" content="3; URL=dia.php?pic='.$newcontent.'">';
        }
      } else {
        if($content >= $anzahl)
        {
          echo'<meta http-equiv="refresh" content="0; URL=dia.php?pic=0">';
        }else{
          echo"<p>File: '.$file.'</p>";
          echo'<meta " http-equiv="refresh" content="0; URL=dia.php?pic='.$newcontent.'">';
        }
      }  
   echo'</div>';   
  }

?>
</div>
<script>
var elem = document.documentElement;
let slideIndex = 1;

//setInterval(displayHello(1), 100);
  
  var x1 = document.getElementById("myDIV");
  x1.style.display = "none";
  var x2 = document.getElementById("demo2");
  x2.style.display = "none";
  var x3 = document.getElementById("navig1");
  var x4 = document.getElementById("navig2");
  if(stoped != "stop"){
    x3.style.display = "none";
    x4.style.display = "none";
  }
  var x5 = document.getElementById("demo4");
  x5.style.display = "none";
  document.getElementById('bt1').value = picture;

function plusSlides(n) {
  picture++; 
  myStop();
}
function minusSlides(n) {
  picture--; 
  myStop();
}  
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

}  
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}  
function myFunction(n) {
  window.open("dia.php?pic="+n+"&sstop=go", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
}
function myFunction3() {
  x5.style.display = "block";
  var nn = document.getElementById('bt1').value;
  window.open("dia.php?pic="+nn+"&sstop=go", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
}
function myStop() {
  window.open("dia.php?pic="+picture+"&sstop=stop", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
  x3.style.display = "block";
  x4.style.display = "block";
}
function myGo() {
  window.open("dia.php?pic="+picture+"&sstop=go", "Jo", "location=no,menubar=no,toolbar=no,scrollbars=no,resizable=no,status=no,titlebar=no,fullscreen=yes");
}
function showAlert() {
    alert("Alarm von dia.js @Jo");
}
function showAlert2() {
    alert("Alert script !!!");
}
function goFullscreen() {
  document.getElementById('myElement').requestFullscreen();
}
function goFullscreen2() {
  document.getElementById('myElement2').requestFullscreen();
}
function fullsreengo() {
  document.getElementById("demo").innerHTML  = "GO !!!";
  document.getElementById("myDIV").style.display = "block";

}
function fullsreenstop() {
  document.getElementById("demo").innerHTML  = "STOP !!!";
  document.getElementById("myDIV").style.display = "block";
}
function displayHello(n) {
  document.getElementById("demo").innerHTML += "oo";
  let text = document.getElementById("demo2").innerHTML;
  document.getElementById("demo").innerHTML = text;  
  goFullscreen();
  document.getElementById('myElement').requestFullscreen(); 
  if (n==1) document.getElementById("demo").innerHTML = "YEEEES *********** !!!!!!!!!!!"; 
  var x1 = document.getElementById("myDIV");
  x1.style.display = "none";
  var x2 = document.getElementById("demo2");
  x2.style.display = "none";

}
function displayHello2() {
  document.getElementById("demo").innerHTML = "ooo";
  //let text = document.getElementById("demo2").innerText;
  //if (text="*Land*") document.getElementById('myElement2').requestFullscreen(); 
  //text = "*Full*";
}
</script>
</body>
</html>