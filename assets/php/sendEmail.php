<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require 'PHPMailer.php';
    require 'Exception.php';
    require 'SMTP.php';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host = 'smtp.timeweb.ru';
        $mail->SMTPAuth = true;
        $mail->CharSet = 'UTF-8';
        $mail->Username = 'support@fasteng.site';
        $mail->Password = 'byntuhfk2000A@';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
    
        $mail->setFrom('support@fasteng.site', 'Обучение английскому языку');
        $mail->addAddress('forrudn@gmail.com', 'forrudn@gmail.com');
    
        $mail->isHTML(true);
        $mail->Subject = 'Заявка';
        $mail->Body = '<b>Имя:</b> ' . $name . ' <b>Адрес эл.почты:</b> ' . $email . ' <b>Номер телефона:</b> ' . $phone; 
        $mail->send();

        echo 'success';

    } catch (Exception $e) {

        echo 'failed';

    }

?>