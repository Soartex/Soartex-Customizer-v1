<?php

header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

// Connect to database; include validation scripts.

require_once("../../db_connect.php");
include_once("../../validation.php");
require_once("../../config.php");

$valid = true;

// Password must be correct

$valid = $valid && $_POST["password"] == ADMINPASSWORD;

// Add the information to the database.

$name = $mysqli->real_escape_string($_POST["name"]);
$valid = $valid && is_valid_string($name, 25);

$category = $_POST["category"];
$valid = $valid && is_valid_int($category);

$type_id = $_POST["type_id"];

// Do different things for different texture types

switch ($type_id) {
	case "0":
		$width = $_POST["width"];
		$valid = $valid && is_valid_int($width);

		$height = $_POST["height"];
		$valid = $valid && is_valid_int($height);

		$exportPath = $_POST["exportPath"];
		$valid = $valid && preg_match("%^(?!-)[a-zA-Z0-9-_]+(?<!-)(/(?!-)[a-zA-Z0-9-_]+(?<!-))*\.png$%", $exportPath);

		if ($valid) {
			$export_data = array(
				"width" => $width,
				"height" => $height,
				"exportPath" => $exportPath,
			);
			$export_data = json_encode($export_data);
		}
		break;
}

if ($valid) {
	$mysqli->query("INSERT INTO Groups (name, export_data, type_id, category)
						VALUES ('$name', '$export_data', '$type_id', '$category')");

	$lastID = $mysqli->insert_id;

	// Set the order to the ID
	$mysqli->query("UPDATE Textures SET sort_order=$lastID WHERE texture_id=$lastID");
}