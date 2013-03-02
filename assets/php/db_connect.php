<?php

	// Require the configruration information.

	require_once("config.php");
	
	// Connect to the database; die() on failure.
	
	$mysqli = new mysqli(DBHOST, DBUSERNAME, DBPASSWORD, DBDATABASE);
	
	if(mysqli_connect_errno()) die("MySQL Error:".mysqli_connect_error());
	
	/**$results = mysql_query("SELECT * FROM Category");
	
	if (!$results) die("MySQL Error: ".mysql_error());
	
	$data = array();
	
	while ($row = mysql_fetch_assoc($results)) {
		
		$data[] = $row;
		
	}
	
	echo json_encode($data);**/
	
?>