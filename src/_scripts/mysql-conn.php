<?php

    //$con = mysqli_connect('localhost', 'vtrcontenidos', 'goe2yooxaedieceeDoig5xax');
    //$con = mysqli_connect('localhost', 'ladichac_admin', 'L@D1chaAdm');
    $con = mysqli_connect('localhost', 'desarro5_usrladicha', 'L@D1chaAdm');


    if (!$con) {
        die('couldnt connect: ' . mysqli_error());
    } else {
        $db = mysqli_select_db($con, 'desarro5_ladicha');
    }

?>