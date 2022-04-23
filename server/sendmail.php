<?php
$mail_address = ''; // type your target email
$mail_subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'];
$mail_text = '';
$recaptcha_secret = ''; // type your recaptcha secret

$rest_json = file_get_contents('php://input');
$_POST = json_decode($rest_json, true);


function add_to_mail_text($title, $value){
    global $mail_text;
    $mail_text .= $title.': '.nl2br(htmlspecialchars(trim($value))).'<br>';
}

$inputs = array(
    array('name', 'Имя'),
    array('email', 'Email'),
    array('message', 'Сообщение'),
);

foreach ($inputs as $input){
    if(isset($_POST[$input[0]])){
        add_to_mail_text($input[1], $_POST[$input[0]]);
    }
}

function send() {
    global $mail_address, $mail_subject, $mail_text;
    $headers = 'MIME-Version: 1.0\r\n';
    $headers .= 'Content-type: text/html; charset=utf-8\r\n';
    $headers .= 'From: no-reply@'.$_SERVER['SERVER_NAME'].'\r\n';
    $multipart = $mail_text;
    $mail = mail($mail_address, $mail_subject, $multipart, $headers);

    header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
    if($mail) {
      echo json_encode(array('status' => 'success'));
    } else {
      echo json_encode(array('status' => 'error'));
    }
}

if(isset($_POST['g-recaptcha-response'])) {
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $params = array(
        'secret' => $recaptcha_secret,
        'response' => $_POST['g-recaptcha-response'],
    );

    $result_str = file_get_contents($url, false, stream_context_create(array(
        'http' => array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($params)
        )
    )));

    if($result_str) {
        $result = json_decode($result_str);
        if($result->success){
            send();
        }
    } else {
        echo json_encode(array('status' => 'error'));
    }
} else {
    echo json_encode(array('status' => 'error'));
}
