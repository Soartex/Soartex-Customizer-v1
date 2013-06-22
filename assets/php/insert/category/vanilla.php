<?php
// Connect to database; include validation scripts.

require_once("../db_connect.php");
include_once("../validation.php");

// Compile the texture record information.

$name = $mysqli->real_escape_string($_POST["creator"]);
assert(is_valid_string($name, 25));

$mysqli->query("INSERT INTO Categories (name, is_vanilla) VALUES ('$name', 1)");

$lastID = $mysqli->insert_id;

// Set the order to the ID
$mysqli->query("UPDATE Textures SET sort_order=$lastID WHERE texture_id=$lastID");