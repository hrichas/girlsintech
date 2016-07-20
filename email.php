<?php

header('Content-Type: text/json');

require("simplemail.php");

$response = array();
$response['error'] = FALSE;
$response['message'] = "Success";

if($_POST){
  try {
    $email=$_POST['email'];

    $mail= new SimpleMail();
    $mail->setTo('info@gitechnology.org', 'Girls In Technology')
       ->setSubject('Contact from '.$email)
       ->setFrom($email, $email)
       ->addMailHeader('Reply-To', 'no-reply@gitechnogoly.org', 'gitechnogoly.com')
       ->addGenericHeader('X-Mailer', 'PHP/' . phpversion())
       ->addGenericHeader('Content-Type', 'text/html; charset="utf-8"')
       ->setMessage($email." just subscribed.")
       ->setWrap(100);
    $send = $mail->send();

    if ( $send )
      $response['message'] = 'Your mail has been sent.';
    else
      throw new Exception("Mail couldn't be send due to internal server problem.");
  }
  catch (Exception $e) {
    $response['error'] = TRUE;
    $response['message'] = $e->getMessage();
  }
}

echo json_encode($response);
?>
