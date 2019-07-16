<?php

    include("mysql-conn.php");

    $reservaName = $_POST['inputName'];
    $reservaPhone = $_POST['inputPhone'];
    $reservaEmail = $_POST['inputEmail'];
    $reservaQuantity = $_POST['personQuantity'];
    $reservaDate = $_POST['selectedDate'];
    $reservaTime = $_POST['selectedTime'];

    if ($con) {
        $sql = "INSERT INTO `reservas` (`nombre`, `telefono`, `email`, `personas`, `fecha`, `hora`) VALUES ('".$reservaName."', '".$reservaPhone."', '".$reservaEmail."', '".$reservaQuantity."', '".$reservaDate."', '".$reservaTime."')";
        $con->query($sql);

        echo "success";
    } else {
        echo "Error updating record: " . $con->error;
    }
?>