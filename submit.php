<?php

/*
 * Here's where the data goes once it's submitted
 */

$image = $_POST['image'];
$file = $_POST['file'];
$screenshots = json_decode($_POST['screenshots'], true);
$path = $_POST['path'];
$is_optional = $_POST['is_optional'];
$is_tile = $_POST['is_tile'];
$is_segment = $_POST['is_segment'];
$start_x = $_POST['start_x'];
$start_y = $_POST['start_y'];
$start_line = $_POST['start_line'];
$name = $_POST['name'];
$mod_name = $_POST['mod_name'];
$description = $_POST['description'];
$creator = $_POST['creator'];


// Validation
if ($image && exif_imagetype($image)) {
    if (!preg_match('#^/?([\w\d]+/)*[\w\d]+\.png$#', $path)) {
        die('Invalid image path!');
    }

    if (empty($name)) {
        die('Invalid texture name.');
    }

    if ($is_tile) {
        // Check for integer
        if (!ctype_digit($start_x)) {
            die("Invalid x start value");
        }
        if (!ctype_digit($start_y)) {
            die("Invalid y start value");
        }
    }
}

elseif ($file) {
    if (!preg_match('#^/?([\w\d]+/)*[\w\d]+\.[\w\d]+$#', $path)) {
        die('Invalid file path!');
    }

    if (empty($name)) {
        die('Invalid file name.');
    }

    if ($is_segment) {
        // Check for integer
        if (!ctype_digit($start_line)) {
            die("Invalid start line value");
        }
    }
}

else {
    die('Invalid file');
}

if (empty($mod_name)) {
        die('Invalid mod name');
}

foreach ($screenshots as $screenshot) {
    if (!$screenshot || !exif_imagetype($screenshot)) {
        die("One of the screenshots is invalid");
    }
}
?>
