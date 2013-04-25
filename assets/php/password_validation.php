<?php

require_once("config.php");

function is_admin_password($password) {
	return ($password == ADMINPASSWORD ? "1" : "0");
}

echo is_admin_password($_POST["password"]);