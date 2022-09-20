<?php
$servername = "localhost";
$username = "root";
$password = "";
$db   = "deligentsol" ;

// Create connection
$conn = new mysqli($servername, $username, $password , $db);



if($_POST['input1'] != ''){

  $fname = $_POST['input1'] ;
  $lname = $_POST['inputLastName'];
  $work = $_POST['inputWork'] ;
  $help = $_POST['inputHelp'] ;
  $feel = $_POST['inputFeel'] ;
  $me = $_POST['inputbecause'] ;
  $launch = $_POST['inputlaunch'] ;
  $email = $_POST['inputemail'] ;
  $phone = $_POST['inputphone'] ;
 
 

    $query = "insert into contact_us(fName, Last_name , Work_place, Help_with, Personal_thoughts, My_status, Launch, Email , Phone_number) values ('$fname', '$lname', '$work' , '$help' , '$feel', '$me', '$launch' , '$email', '$phone')";
    $run = mysqli_query($conn, $query ) or die(mysqli_error());
    if($run) {
      echo "form submitted successfully";
    }else {
      echo "form not submitted";
    }
  }

 


?>