<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>PHPMailer - SMTP test</title>
</head>
<body>
<?php
 
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
 
require './PHPMailerAutoload.php';
   if( $_GET["name"] && $_GET["contact"] &&  $_GET["email"] && $_GET["msg"] ) 
   {
    
//Create a new PHPMailer instance
$mail = new PHPMailer();
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "mail.kostation.com";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "contact@kostation.com";
//Password to use for SMTP authentication
$mail->Password = "Password@123";
//Set who the message is to be sent from
$mail->setFrom('contact@kostation.com', 'KOStation Admin');
//Set an alternative reply-to address
$mail->addReplyTo($_GET["email"],  $_GET["name"]);
//Set who the message is to be sent to
$mail->addAddress("info@kostation.com",'KOStation Admin');
//Set the subject line
$mail->Subject = 'PHPMailer SMTP test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("<b>Name:</b>".$_GET["name"]."<br><b>Contact:</b>".$_GET["contact"]."<br><b>Message:</b>".$_GET["msg"]);//file_get_contents('contents.html'), dirname(__FILE__));
//Replace the plain text body with one created manually
//$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.gif');
 
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "success";
}
   }
   else
   {
	   echo "no get msg";
   }
?>
</body>
</html>