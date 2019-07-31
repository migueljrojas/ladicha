<?php

    //Capturando Datos del formulario
    
    $reservaName = $_POST['inputName'];
    $reservaPhone = $_POST['inputPhone'];
    $reservaEmail = $_POST['inputEmail'];
    $reservaQuantity = $_POST['personQuantity'];
    $reservaDate = $_POST['selectedDate'];
    $reservaTime = $_POST['selectedTime'];
    
    $destino = $reservaEmail;

if ($reservaName=='' || $reservaEmail==''){

    echo "<script>alert('Los campos marcados con * son obligatorios');location.href ='javascript:history.back()';</script>";

}else{


    require("archivosformulario/class.phpmailer.php");
    $mail = new PHPMailer();

    $mail->Username = $reservaEmail;
    $mail->FromName = $reservaName;
    $mail->AddAddress($reservaEmail); // Dirección a la que llegaran los mensajes.
   
// Aquí van los datos que apareceran en el correo que reciba
    //adjuntamos un archivo

    $mail->WordWrap = 50;
    $mail->IsHTML(true);
    $mail->Subject  =  "Su Nueva Reserva en La Dicha";
    $mail->Body     =  "Nombre: $reservaName \n<br />".
        "Email: $reservaEmail \n<br />".
        "Teléfono: $reservaPhone \n<br />".
        "Fecha: $reservaDate \n<br />".
        "Hora: $reservaTime \n<br />".
        "Para: $reservaQuantity personas";
    $mail->AddAttachment($archivo['tmp_name'], $archivo['name']);

    // Datos del servidor SMTP Totalmente necesarios para la salida del correo

    $mail->IsSMTP();
    $mail->Host = "mail.desarrollosclientes.com";  // Servidor de Salida.
    $mail->SMTPAuth = true;
    $mail->Username = "ladicha@desarrollosclientes.com";  // Correo Electrónico
    $mail->Password = "L@D1chaAdm"; // Contraseña



    if ($mail->Send())
        echo "<script>alert('Formulario enviado exitosamente, le responderemos lo más pronto posible.');location.href ='javascript:history.back()';document.getElementById('contacto').reset();</script>";
    else
        echo "<script>alert('Error al enviar el formulario');</script>"; 

}
