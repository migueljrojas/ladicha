<?php

    //$con = mysqli_connect('localhost', 'vtrcontenidos', 'goe2yooxaedieceeDoig5xax');
    $con = mysqli_connect('localhost', 'root', '');

    if (!$con) {
        die('couldnt connect: ' . mysqli_error());
    } else {
        $db = mysqli_select_db($con, 'ladicha');
    }

?>