    <?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json; charset=UTF-8");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        echo json_encode(["status" => "error", "message" => "No data provided."]);
        exit();
    }

    $name = $input['name'] ?? 'No Name';
    $email = $input['email'] ?? 'No Email';
    $phone = $input['phone'] ?? 'No Phone';
    $company = $input['company'] ?? 'No Company';
    $message = $input['message'] ?? 'No Message';
    $date = $input['date'] ?? '';
    $chatHistory = $input['chatHistory'] ?? '';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require __DIR__ . '/PHPMailer/Exception.php';
    require __DIR__ . '/PHPMailer/PHPMailer.php';
    require __DIR__ . '/PHPMailer/SMTP.php';

    try {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'webanatomysocial@gmail.com';
        $mail->Password = 'ensk hqxk wqks rkua';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';

        $mail->setFrom('webanatomysocial@gmail.com', 'ThreatSenseAI');
        // $mail->addAddress('sales@threatsenseai.com');
        $mail->addAddress('reddydheeraj2109@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "New Lead: ThreatSenseAI Chatbot - " . $name;

        $htmlBody = "
        <h2>New Lead Captured via Chatbot</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Company:</strong> {$company}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>";

        if (!empty($date)) {
            $htmlBody .= "<p><strong>Preferred Date/Time:</strong> {$date}</p>";
        }

        if (!empty($chatHistory)) {
            $htmlBody .= "<h3>Chat History:</h3>";
            $htmlBody .= "<pre style='background-color: #f4f4f4; padding: 10px; border-radius: 5px; white-space: pre-wrap;'>" . htmlspecialchars($chatHistory) . "</pre>";
        }

        $htmlBody .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";

        $mail->Body = $htmlBody;

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);

    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "PHPMailer Error: " . $mail->ErrorInfo]);
    }
    ?>
