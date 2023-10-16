 <?php
$servername = "localhost";
$username = "root";
$password =  "";
$db = "signup_details";
$conn = new mysqli($servername, $username, $password, $db);


if (isset($_POST['submit'])) { // Fetching variables of the form which travels in URL
    $name = $_POST['fullname'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $confirmpass = $_POST['confirm_pass'];
    $address = $_POST['address'];
    $contact = $_POST['phn_no'];
    $gender = $_POST['gender'];

    if ($name != '' || $email != '') {
        //Insert Query of SQL
        $query = mysqli_query($conn, "insert into user_details(Fullname,E_mail,password,confirm_password,Address,Contact,Gender) values( '$name', '$email', '$pass', '$confirmpass', '$address', '$contact', '$gender')");
        echo "<br/><br/><span>Data Inserted successfully...!!</span>";
    } else {
        echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
    }
}
mysqli_close($conn); // Closing Connection with Server
?>