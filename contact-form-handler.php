<?php 
$errors = '';
$myemail = 'dorisdesignservice@dorisdesignservice.cba.pl';//<-----Put Your email address here.
if(empty($_POST['terms'])) {
	$errors .= "\n Błąd: wszystkie pola są wymagane";
	echo "<script>
	alert('Nie zapoznałeś/aś się z informacją o przetwarzaniu danych');
	window.location.href='/#kontakt'
	</script>";

}
if(empty($_POST['firstName'])  || 
   empty($_POST['email']) || 
   empty($_POST['message']))
{
	echo "<script>
	alert('Pola: imię, nazwisko i email oraz wiadomość są wymagane');
	window.location.href='index.html#kontakt'
	window.location.has ='';
	</script>";
} 



$name = $_POST['firstName']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
	echo "<script>
	alert('Niepoprawny adres email');
	window.location.href='index.html#kontakt'
	window.location.has ='';
	</script>";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Wiadomość od: $name";
	$email_body = " Here are the details:\n Imie: $name \n Nazwisko: $lastName \n numer: $phone \n Email: $email_address \n Message: \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	echo "<script>
	alert('Wiadomość została wysłana. Dziekujemy :)');
	window.location.href='index.html#kontakt'
	window.location.has ='';
	</script>";
	// header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
	echo "<script>
	alert('Nie zapoznałeś/aś się z informacją o przetwarzaniu danych');
	</script>";
?>


</body>
</html>