<?php
/*
 * Here's where the data goes once it's submitted
 */

$image = $_POST['image'];
$screenshots = json_decode($_POST['screenshots'], true);
$image_path = $_POST['image_path'];
$is_optional = $_POST['is_optional'];
$is_tile = $_POST['is_tile'];
$start_x = $_POST['start_x'];
$start_y = $_POST['start_y'];
$texture_name = $_POST['texture_name'];
$mod_name = $_POST['mod_name'];
$description = $_POST['description'];
$creator = $_POST['creator'];   

if (!$image || !exif_imagetype($image)) {
    die("The uploaded texture is not an image!");
}

foreach ($screenshots as $screenshot) {
    if (!$screenshot || !exif_imagetype($screenshot)) {
        die("One of the screenshots is not an image!");
    } 
}

if (!preg_match('#^/?([\w\d]+/)*[\w\d]+\.png$#',$image_path)) {
    die('Invalid image path!');
}

if (empty($texture_name)) {
    die('Please enter in a texture name.');
}

if ($is_tile) {
    // Check for integer
    if (!ctype_digit($start_x)) {
        die("The x start value must be a number!");
    }
    if (!ctype_digit($start_y)) {
        die("The y start value must be a number!");
    }
}

if (empty($texture_name)) {
    die('Please enter is a mod name.');
}

?>
