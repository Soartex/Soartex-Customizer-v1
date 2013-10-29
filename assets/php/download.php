<?php

header("Access-Control-Allow-Origin: *"); // NOTE: MUST BE CHANGED TO "http://soartex.net" BEFORE RELEASE

require_once("db_connect.php");

$data = json_decode($_POST["data"], true);
$zipname = tempnam(sys_get_temp_dir(), 'zip');
$filename = "SoartexCustomized.zip";

$zip = new ZipArchive();
$zip->open($zipname, ZipArchive::CREATE);

foreach ($data as $option) {
	if ($option['type'] == 0) { // Option is from the default group type
		$zip->addFromString($option['export'], file_get_contents('../../'.$option['image']));
	}
}
$zip->addFromString('info.txt', 'test');
$zip->close();

header('Content-Type: application/zip');
header("Content-disposition: attachment; filename=$filename");
header('Content-Length: ' . filesize($zipname));
readfile($zipname);
unlink($zipname);