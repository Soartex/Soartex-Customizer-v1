<?php

	include("config.php");
	
	$db_connection = mysql_connect($db_host, $db_username, $db_password);
	mysql_select_db($db_database, $db_connection);
	
	if(!$db_connection) die("MySQL Error: ".mysql_error());
	
	$results = mysql_query("SELECT * FROM Category");
	
	if (!$results) die("MySQL Error: ".mysql_error());
	
	$data = array();
	
	while ($row = mysql_fetch_assoc($results)) {
		
		$data[] = $row;
		
	}
	
	echo json_encode($data);
	
?>