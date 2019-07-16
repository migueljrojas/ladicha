<?php

    include("mysql-conn.php");

    $selectedDate = $_GET['selectedDate'];

    if ($con) {
        $sql = mysqli_query($con, "SELECT * FROM reservas WHERE fecha = $selectedDate ORDER BY id DESC");
        $rows = mysqli_fetch_all($sql);
        
        echo json_encode($rows);
    } else {
        echo "Error with database: " . $con->error;
    }
?>
