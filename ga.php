
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
	<link rel="manifest" href="favicon/site.webmanifest">
	<meta name="msapplication-TileColor" content="#00aba9">
	<meta name="theme-color" content="#ffffff">
	<link rel="stylesheet" href="./style/bootstrap.min.css">
	<link rel="stylesheet" href="./style/style.css">
	<script type="text/javascript" src="./src/index.js"></script>
	<title>O-ZONE GLO ACADEMY</title>
</head>

<body>

	<?

$connect = mysqli_connect("localhost","root","","ozongood");
$query = "SELECT * FROM db"
$rest=mysqli_query($connect,$querry);
$result=[];
while($res= mysqli_fetch_assoc($rest)){
$result[]=$res;
}
 
echo json_encode($result);?>
	
</body>

</html>