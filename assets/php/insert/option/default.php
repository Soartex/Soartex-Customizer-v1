<?php

	header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

	// Connect to database; include validation scripts.

	require_once("../../db_connect.php");
	include_once("../../validation.php");
	require_once("../../config.php");

    // Password must be correct

	assert($_POST["password"] == ADMINPASSWORD);

	// Compile the texture record information.

	$creator = $mysqli->real_escape_string($_POST["creator"]);
	assert(is_valid_string($creator, 25));
	
	$info = $mysqli->real_escape_string($_POST["info"]);
	
	$group = $_POST["group"];
	assert(is_valid_int($group));
	
	$export_data = $mysqli->real_escape_string($_POST["export_data"]);
	assert(is_valid_string($export_data));
	
	$mysqli->query("INSERT INTO Textures (name, creator, info, group_id, date_added, export_data)
					VALUES ('$name', '$creator', '$info', $group, '$export_data')");

	$lastID = $mysqli->insert_id;
	
	// Set the order to the ID
	$mysqli->query("UPDATE Textures SET sort_order=$lastID WHERE texture_id=$lastID");
	
?>