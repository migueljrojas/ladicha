<?php

    include("mysql-conn.php");

    $fecha = $_POST['fecha'];
    $h1230 = $_POST['h1230'];
    $h1300 = $_POST['h1300'];
    $h1330 = $_POST['h1330'];
    $h1400 = $_POST['h1400'];
    $h1430 = $_POST['h1430'];
    $h1500 = $_POST['h1500'];
    $h1900 = $_POST['h1900'];
    $h1930 = $_POST['h1930'];
    $h2000 = $_POST['h2000'];
    $h2030 = $_POST['h2030'];
    $h2100 = $_POST['h2100'];
    $h2130 = $_POST['h2130'];
    $h2200 = $_POST['h2200'];
    $h2230 = $_POST['h2230'];
    $h2300 = $_POST['h2300'];
    $h2330 = $_POST['h2330'];
    $h2400 = $_POST['h2400'];

    // echo $fecha;
    
    
    if ($con) {

        $verifyDate = mysqli_query($con, "SELECT fecha FROM mesas WHERE fecha = $fecha");
        $rows = mysqli_fetch_all($verifyDate, MYSQLI_ASSOC);
        $array = json_decode(json_encode($rows), true);

        if(!array_filter($array)) {
            $sql = "INSERT INTO `mesas` (`fecha`, `h1230`, `h1300`, `h1330`, `h1400`, `h1430`, `h1500`, `h1900`, `h1930`, `h2000`, `h2030`, `h2100`, `h2130`, `h2200`, `h2230`, `h2300`, `h2330`, `h2400`) VALUES ('".$fecha."', '".$h1230."', '".$h1300."', '".$h1330."', '".$h1400."', '".$h1430."', '".$h1500."', '".$h1900."', '".$h1930."', '".$h2000."', '".$h2030."', '".$h2100."', '".$h2130."', '".$h2200."', '".$h2230."', '".$h2300."', '".$h2330."', '".$h2400."')";
            $con->query($sql);
        } else {
            $sql = "UPDATE mesas SET h1230= $h1230, h1300= $h1300, h1330= $h1330, h1400= $h1400, h1430= $h1430, h1500= $h1500, h1900= $h1900, h1930= $h1930, h2000= $h2000, h2030= $h2030, h2100= $h2100, h2130= $h2130, h2200= $h2200, h2230= $h2230, h2300= $h2300, h2330= $h2330, h2400= $h2400 WHERE fecha = $fecha";
            $con->query($sql);
        }
        
        echo "success";
    } else {
        echo "Error updating record: " . $con->error;
    }
?>