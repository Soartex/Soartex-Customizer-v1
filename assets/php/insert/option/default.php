<?php

	header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

	// Connect to database; include validation scripts.

	require_once("../../db_connect.php");
	include_once("../../validation.php");
	require_once("../../config.php");

    $valid = true;

    // Password must be correct

	$valid = $valid && $_POST["password"] == ADMINPASSWORD;

	// Compile the texture record information.

	$creator = $mysqli->real_escape_string($_POST["creator"]);
	$valid = $valid && is_valid_string($creator, 25);
	
	$info = $mysqli->real_escape_string($_POST["info"]);
	
	$group = $_POST["group"];
	$valid = $valid && is_valid_int($group);
	
	$image_data = $mysqli->real_escape_string($_POST["image_data"]);

	$image_data = substr($image_data, strpos($image_data, ",")+1);
	$im = imagecreatefromstring(base64_decode($image_data));
	if ($im == false) {
		$valid = false;
	} else {
		imageAlphaBlending($im, true);
		imageSaveAlpha($im, true);
	}

	$export_data = '{}';

	if ($valid) {
		$mysqli->query("INSERT INTO Textures (creator, info, group_id, export_data)
						VALUES ('$creator', '$info', '$group', '$export_data')");

		$lastID = $mysqli->insert_id;

		imagepng($im, "../../../img/options/$lastID.png");
		imagedestroy($im);

		// Set the order to the ID
		$mysqli->query("UPDATE Textures SET sort_order=$lastID WHERE texture_id=$lastID");
	}
	
?>