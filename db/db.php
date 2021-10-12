
<?php

$connect = mysqli_connect("localhost","root","","ozongood");
mysqli_set_charset($connect, 'utf8');
if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = "SELECT * FROM db";
$rest = mysqli_query($connect,$query);
$result =[];
while($res = mysqli_fetch_assoc($rest)){
	$result[] =$res;
}

echo json_encode($result);
?>
