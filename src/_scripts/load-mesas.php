<?php

    include("mysql-conn.php");

    $selectedDate = $_GET['selectedDate'];

    if ($con) {
        $sql = mysqli_query($con, "SELECT * FROM mesas WHERE fecha = $selectedDate");
        $rows = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        echo json_encode($rows);
    } else {
        echo "Error with database: " . $con->error;
    }
?>
