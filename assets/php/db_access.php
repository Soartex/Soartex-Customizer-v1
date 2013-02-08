<?php

	include("config.php");
	
	if(!$db_connection) die("MySQL Error: ".mysql_error());
		
	$results = mysql_query("SELECT * FROM Category");
	
	if (!$results) die("MySQL Error: ".mysql_error());
	
	$data = array();
	
	while ($row = mysql_fetch_assoc($results)) {
		
		$data[] = $row;
		
	}
	
	echo json_encode($data);
	
?>