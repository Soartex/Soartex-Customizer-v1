<?php

function is_valid_int ($string) {
	return preg_match ('/^\\d+\\z/', $string);
}

function is_valid_string ($string, $maxLength=-1) {
	return (is_string($string) && ($maxLength < 0 || strlen($string) <= $maxLength));
}