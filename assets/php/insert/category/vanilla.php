<?php
// Connect to database; include validation scripts.

require_once("../db_connect.php");
include_once("../validation.php");

// Compile the texture record information.

$name = $mysqli->real_escape_string($_POST["creator"]);
assert(is_valid_string($name, 25));

$mysqli->query("INSERT INTO Categories (name, creator, info, preset, group_id, date_added, export_data)
					VALUES ('$name', '$creator', '$info', $preset, $group, '$export_data')");

$lastID = $mysqli->insert_id;

// Set the order to the ID
$mysqli->query("UPDATE Textures SET sort_order=$lastID WHERE texture_id=$lastID");