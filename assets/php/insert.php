<?php
//connects to database
$con=mysql_connect("soartex.net","username","password");
if(!$con) {
die('Could not connect: '.mysql_error());
}
mysql_select_db("my_db",$con);
//selects what colums to input into
$sql="INSERT INTO Category (Name, Export_Data)"
//set values to add to database
+"VALUES('$_POST[category]','$_POST[export_path]')";
if(!mysql_query($sql,$con)) {
die('Error: '.mysql_error());
}

echo "1 record added";
mysql_close($con);
?>