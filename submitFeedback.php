<?php
// Initialize variables to store form data
$name = $email = $message = "";

// Check if form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Display confirmation message
    echo "<h2>Thank You, $name!</h2>";
    echo "<p>Your feedback message:</p>";
    echo "<p>$message</p>";
    echo "<p>We will get back to you at $email if needed.</p>";
    
    // Display "Submit Again" option
    echo '<p><a href="feedback_form.html">Submit Again</a></p>';
} else {
    // Handle case where form was not submitted via POST method
    echo "Form submission failed. Please try again.";
}
?>

