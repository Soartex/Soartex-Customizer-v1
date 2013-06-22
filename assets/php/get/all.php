<?php

require_once("../db_connect.php");
require_once("../config.php");

function getCategories($mysqli) {
	$result = $mysqli->query("SELECT * FROM Categories WHERE is_vanilla = 1 ORDER BY sort_order");
	$data = array();
	while ($row = mysqli_fetch_assoc($result)) {
		$id = $row["category_id"];
		$row["groups"] = getGroups($mysqli, $id);
		$data[$id] = $row;
	}

	return $data;
}

function getGroups($mysqli, $category) {

	$category = $mysqli->real_escape_string($category);

	$result = $mysqli->query("SELECT * FROM Groups WHERE category = $category ORDER BY sort_order");
	$data = array();
	while ($row = mysqli_fetch_assoc($result)) {
		$id = $row["group_id"];
		$row["options"] = getOptions($mysqli, $id);
		$data[$id] = $row;
	}

	return $data;
}

function getOptions($mysqli, $group) {

	$option = $mysqli->real_escape_string($group);

	$result = $mysqli->query("SELECT * FROM Textures WHERE group_id = $option ORDER BY sort_order");
	$data = array();
	while ($row = mysqli_fetch_assoc($result)) {
		$id = $row["texture_id"];
		$data[$id] = $row;
	}

	return $data;
}

echo json_encode(getCategories($mysqli));