<?php

require_once("config.php");

function is_admin_password($password) {
	return ($password == ADMINPASSWORD);
}