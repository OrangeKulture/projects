<?php

if ( isset( $_POST[ 'email' ] ) ) {

	// EDIT THE 3 LINES BELOW AS REQUIRED
	$email_cc = "";
	$email_bcc = "";
	$email_subject = "";
	
	$email_from = ""; //Usually DoNotReply@yourdomain.com
	$host = "dph2.dollarperhead.com"; //replace this with your domain's SMTP address
	$smtpUsername = "DoNotReply@betkelly.com";
	$smtpPassword = "";
	$smtpPort = '587';
	

	function died( $error ) {
		// your error code can go here
		echo "We are very sorry, but there were errors found with the form you submitted. ";
		echo "These errors appear below.<br /><br />";
		echo $error . "<br /><br />";
		echo "Please go back to fix these errors and try again.<br /><br />";
		die();
	}

	// validation expected data exists
	if ( !isset( $_POST[ 'name' ] ) || !isset( $_POST[ 'email' ] ) || !isset( $_POST[ 'phone' ] ) || !isset( $_POST[ 'mob' ] ) 
		|| !isset( $_POST[ 'designation' ] ) || !isset( $_POST[ 'address' ] ) || !isset( $_POST[ 'salary' ] ) || !isset( $_POST[ 'description' ] )
	) {
		die( 'We are sorry, but there appears to be a problem with the form you submitted.') ;
	}

	$name = $_POST[ 'name' ]; // required
	$email = $_POST[ 'email' ]; // required
	$mob = $_POST[ 'mob' ]; // required
	$phone = $_POST[ 'phone' ]; // required
	$designation = $_POST[ 'designation' ]; // required
	$address = $_POST[ 'address' ]; // required
	$salary  = $_POST[ 'salary' ]; // required
	$description = $_POST[ 'description' ]; // required

	
	// Email validation
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
	if ( !preg_match( $email_exp, $email ) ) {
		$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
	}
	
	if ( strlen( $error_message ) > 0 ) {
		die( $error_message );
	}
    
	$email_message = "Form details below.<br/>";

	function clean_string( $string ) {
		$bad = array( "content-type", "bcc:", "to:", "cc:", "href" );
		return str_replace( $bad, "", $string );
	}

	$email_message .= "Name: " . clean_string( $name ) . "<br/>";
	$email_message .= "e-mail: " . clean_string( $email ) . "<br/>";
	$email_message .= "Mobile: " . clean_string( $mob ) . "<br/>";
	$email_message .= "Phone: " . clean_string( $phone ) . "<br/>";
	$email_message .= "Position: " . clean_string( $designation ) . "<br/>";
	$email_message .= "Address: " . clean_string( $address ) . "<br/>";
	$email_message .= "Salary: " . clean_string( $salary ) . "<br/>";
	$email_message .= "Description: " . clean_string( $description ) . "<br/>";
	$email_message .= "IP Address: " . clean_string( $_SERVER['REMOTE_ADDR'] ) . "<br/>";


	require 'PHPMailer/PHPMailerAutoload.php';
	
	$mail = new \PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPDebug = 0;
	$mail->SMTPAuth = true;
	$mail->Host = $host;
	$mail->Port = $smtpPort;
	$mail->Username = $smtpUsername;
	$mail->Password = $smtpPassword;
	$mail->SetFrom($smtpUsername, '');
	$mail->Subject = $email_subject;
	$mail->Body = $email_message;
	if (isset($_FILES['uploaded_file']) &&
    $_FILES['uploaded_file']['error'] == UPLOAD_ERR_OK) {
    	$mail->AddAttachment($_FILES['uploaded_file']['tmp_name'],
    	$_FILES['uploaded_file']['name']);
	}
	$mail->IsHTML(true);
	$mail->AddAddress(''); // Enter the email address that is going to be used to receive contact information
	$mail->AddCC($email_cc);
	$mail->AddBCC($email_bcc);
	$mail->Send();
	
	header("location: index.html");  // enter the URL of the page you will be using for redirecting users
	
}
?>