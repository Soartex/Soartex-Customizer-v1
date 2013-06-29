<?php

header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

// Connect to database; include validation scripts.

require_once("../../db_connect.php");
include_once("../../validation.php");
require_once("../../config.php");

$valid = true;

// Password must be correct

$valid = $valid && $_POST["password"] == ADMINPASSWORD;

// Add the information to the database

if ($valid) {
	$name = $mysqli->real_escape_string($_POST["name"]);
	$valid = $valid && is_valid_string($name, 25);

	$mysqli->query("INSERT INTO Categories (name, is_vanilla) VALUES ('$name', 1)");

	$lastID = $mysqli->insert_id;

	// Set the order to the ID
	$mysqli->query("UPDATE Textures SET sort_order=$lastID WHERE texture_id=$lastID");
}