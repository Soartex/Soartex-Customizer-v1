<?php

header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

// Connect to database; include validation scripts.

require_once("../db_connect.php");
include_once("../validation.php");
require_once("../config.php");

$valid = true;

$valid = $valid && $_POST["password"] == ADMINPASSWORD;

$id = $_POST["id"];
$valid = $valid && is_valid_int($id);

if ($valid) {
	$result = $mysqli->query("DELETE FROM Groups WHERE group_id = $id");
}