<?php

header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

require_once("db_connect.php");

$data = json_decode($_POST["data"], true);
$filename = "Soartex-Customized.zip";

$zip = new ZipArchive();
$zip->open($filename, ZipArchive::CREATE);

foreach ($data as $option) {
	if ($option.type == 0) { // Option is from the default group type
		$zip->addFile($option.image, $option.export);
	}
}

$zip->close();

header('Content-Type: application/zip');
header("Content-disposition: attachment; filename=$filename");
header('Content-Length: ' . filesize($filename));
readfile($filename);