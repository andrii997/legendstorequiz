<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPAuth = true;                               // Enable SMTP authentication

$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->Host = 'smtp.gmail.com'; 					  // Specify main and backup SMTP servers


$mail->Username = 'fortnite.legendstore@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Dropitlikeitshot@2019'; // Ваш пароль от почты с которой будут отправляться письма

$mail->setFrom('fortnite.legendstore@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('fortnite.legendstore@gmail.com');     // Кому будет уходить письмо 


$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с legendstorequiz.info';
$mail->Body    = "\nНик: ".$name."\nE-mail: " .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>