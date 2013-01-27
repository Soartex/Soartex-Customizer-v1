<?php
$con=mysql_connect("soartex.net","username","password");
if(!$con) {
die('Could not connect: '.mysql_error());
}

mysql_select_db("soarte5_customiz", $con);
$results = mysql_query("SELECT * FROM Category");

$data=array();
while($row=mysql_fetch_assoc($results)) {
$data[]=$row;
}
echo json_encode($data);
?>