<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit();
}

$from_email = 'noreply@litauris.com';
$recipient_email = 'ceo@litauris.com';

// Load POST data from HTML form
$sender_name = $_POST['name'];
$reply_to_email = $_POST['email']; // sender email, it will be used in "reply-to" header
$subject = 'New Submitted Contact Form';
$message = $_POST['message'] ?? '';
$email_message = ''; // body of the email

if ($sender_name != '') {
    $email_message .= "Name: " . $sender_name . "\r\n";
}
if ($reply_to_email != '') {
    $email_message .= "Email: " . $reply_to_email . "\r\n";
}
if ($message != '') {
    $email_message .= "Message: " . $message . "\r\n";
}

$boundary = md5("random"); // define boundary with a md5 hashed value

// header
$headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version
$headers .= "From:" . $from_email . "\r\n"; // Sender Email
$headers .= "Reply-To: " . $reply_to_email . "\r\n"; // Email address to reach back
$headers .= "Content-Type: multipart/mixed;"; // Defining Content-Type
$headers .= "boundary = $boundary\r\n"; //Defining the Boundary

// plain text
$body = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n\r\n";
$body .= chunk_split(base64_encode($email_message));

// attachment
if (isset($_FILES['file'])) {
    $tmp_name = $_FILES['file']['tmp_name']; // get the temporary file name of the file on the server
    $name = $_FILES['file']['name']; // get the name of the file
    $size = $_FILES['file']['size']; // get size of the file for size validation
    $type = $_FILES['file']['type']; // get type of the file
    // $error = $_FILES['file']['error']; // get the error (if any)

    // read from the uploaded file & base64_encode content
    $handle = fopen($tmp_name, "r"); // set the file handle only for reading the file
    $content = fread($handle, $size); // reading the file
    fclose($handle);                 // close upon completion

    $encoded_content = chunk_split(base64_encode($content));

    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $type; name=" . $name . "\r\n";
    $body .= "Content-Disposition: attachment; filename=" . $name . "\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "X-Attachment-Id: " . rand(1000, 99999) . "\r\n\r\n";
    $body .= $encoded_content; // Attaching the encoded file with email
}

$sentMailResult = mail($recipient_email, $subject, $body, $headers);

if ($sentMailResult) {
    // unlink($name); // delete the file after attachment sent.
} else {
    http_response_code(500);
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode(['success' => $sentMailResult]);
