<?php

/*
 * This is the main file that is loaded by default when navigating to 
 * zackguido.com. Shit starts here.
 */
?>

<html>
    <head>
        <title>Get Surrounded.</title>
        <?php 
            includeStylesheets(); 
        ?>
    </head>
    <body>
        <div id="bgTable">
            <div class="bgTableRow">
                <div id="tl"></div>
                <div id="tr"></div>
            </div>
            <div class="bgTableRow">
                <div id="bl"></div>
                <div id="br"></div>
            </div>
        </div>
        <div id="logo">Surround Lighting</div>
        <div id="video">
            <canvas id="c"></canvas>
            <video id="v" controls="controls" loop="" width="640px">
                <source src="videoSrc/BigBuckBunny_640x360.mp4" type="video/mp4"/>
            </video>
        </div>
        <?php 
            includeScripts(); 
        ?>
    </body>
</html>

<?php

function includeStylesheets(){ ?>
    <link rel="stylesheet" type="text/css" href="main.css">
    <!--[if gte IE 9]>
        <style type="text/css">
          .gradient {
             filter: none;
          }
        </style>
    <![endif]-->
<?php }

function includeScripts(){ ?>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js"></script>
    
    <script src="color-thief-js/libs/quantize.js"></script>
    <script src="color-thief-js/color-thief.js"></script>   
    
    <script src="main.js"></script>
<?php }

function printNarrow(){ ?>
    <div id="narrow">
        pay attention to me.
    </div>
<?php }
?>
