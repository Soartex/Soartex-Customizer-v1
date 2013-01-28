<?php
require_once("config.php");
include_once("validation.php");

// Connects to database
$mysqli= new mysqli(DBHOST,DBUSERNAME,DBPASSWORD, DBDATABASE);
if(mysqli_connect_errno()) {
	die('Could not connect: '.mysqli_connect_error());
}

$name = $mysqli->real_escape_string($_POST["name"]);
assert(is_valid_string($name, 25));

$creator = $mysqli->real_escape_string($_POST["creator"]);
assert(is_valid_string($creator, 25));

$info = $mysqli->real_escape_string($_POST["info"]);
assert(is_valid_string($info, 255));

$preset = $_POST["preset"];
assert(is_valid_int($preset));

$group = $_POST["group"];
assert(is_valid_int($group));

$export_data = $mysqli->real_escape_string($_POST["export_data"]);
assert(is_valid_string($export_data));

$mysqli->query("INSERT INTO Texture (name, creator, info, preset, group, export_data)
				VALUES ($name, $creator, $info, $preset, $group, $export_data)");

$lastID = $mysqli->insert_id();

// Set the order to the ID
$mysqli->query("UPDATE Texture SET order=$lastID WHERE texture_id=$lastID");