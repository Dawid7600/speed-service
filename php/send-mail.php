<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobierz dane z formularza
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Adres e-mail, na który zostanie wysłana wiadomość
    $to = "adres@twoja-skrzynka-pocztowa.pl";

    // Temat wiadomości
    $subject = "Nowa wiadomość od $name $surname";

    // Treść wiadomości
    $email_body = "Imię: $name\n";
    $email_body .= "Nazwisko: $surname\n";
    $email_body .= "E-mail: $email\n";
    $email_body .= "Telefon: $phone\n\n";
    $email_body .= "Wiadomość:\n$message";

    // Nagłówki e-maila
    $headers = "From: $email";

    // Wyślij e-mail
    mail($to, $subject, $email_body, $headers);

    // Przekieruj użytkownika po wysłaniu formularza
    header("Location: success.html");
    exit();
}
?>
